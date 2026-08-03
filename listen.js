/* listen.js — the input mirror of speech.js.
 * Sole owner of Vosk, the microphone, and the voice model. No other file
 * references vosk-browser.
 *
 * The library is UMD (not ESM, despite its package.json "module" field), so it
 * is loaded via an injected script tag and read off the global.
 */

const MODEL_URL = 'models/vosk-model-small-en-us-0.15.tar.gz';
const MODEL_BYTES_NEEDED = 75 * 1024 * 1024;

export const listenSupported =
  typeof window !== 'undefined' &&
  window.isSecureContext &&
  typeof WebAssembly === 'object' &&
  !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) &&
  !!(window.AudioContext || window.webkitAudioContext);

export async function modelCacheState() {
  if (!('indexedDB' in window)) return 'ephemeral';

  const canWrite = await new Promise((resolve) => {
    let req;
    try {
      req = indexedDB.open('rp-probe', 1);
    } catch (e) {
      resolve(false);
      return;
    }
    req.onupgradeneeded = () => req.result.createObjectStore('t');
    req.onerror = () => resolve(false);
    req.onsuccess = () => {
      try {
        const tx = req.result.transaction('t', 'readwrite');
        tx.objectStore('t').put(1, 'k');
        tx.oncomplete = () => {
          req.result.close();
          indexedDB.deleteDatabase('rp-probe');
          resolve(true);
        };
        tx.onerror = () => {
          req.result.close();
          resolve(false);
        };
      } catch (e) {
        try {
          req.result.close();
        } catch (_) {
          /* ignore */
        }
        resolve(false);
      }
    };
  });
  if (!canWrite) return 'ephemeral';

  let est = null;
  if (navigator.storage && navigator.storage.estimate) {
    try {
      est = await navigator.storage.estimate();
    } catch (e) {
      est = null;
    }
  }
  return quotaVerdict(est);
}

export function quotaVerdict(estimate) {
  if (!estimate) return 'persistent';
  const { quota, usage } = estimate;
  if (typeof quota !== 'number' || typeof usage !== 'number')
    return 'persistent';
  return quota - usage < MODEL_BYTES_NEEDED ? 'insufficient' : 'persistent';
}

export { MODEL_URL, MODEL_BYTES_NEEDED };

/* Lightweight diagnostics, read by practice-lab.html. Tells us WHERE a silent
 * line broke: no chunks = audio never reached the recognizer; chunks but no
 * results = the recognizer heard nothing usable. */
export const diag = { ctxState: null, chunks: 0, results: 0, recognizerId: null, lastError: null, level: 0 };

let voskLib = null;
let model = null;
let recognizer = null;
let stream = null,
  audioCtx = null,
  node = null,
  source = null;

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = () => reject(new Error('failed to load ' + src));
    document.head.appendChild(s);
  });
}

export async function loadModel(onProgress) {
  if (model) return;
  if (!voskLib) {
    await loadScript('vendor/vosk.js');
    voskLib = window.Vosk;
    if (!voskLib)
      throw new Error('vosk global not found after loading vendor/vosk.js');
  }
  if (onProgress) onProgress(0);
  model = await voskLib.createModel(MODEL_URL);
  if (onProgress) onProgress(100);
}

/* Task 6b chose the word-loop grammar form for miscue detection.
 * See docs/superpowers/specs/2026-08-02-grammar-form-result.md. */
export const GRAMMAR_FORM = 'words';

function buildGrammar(words) {
  return JSON.stringify([...new Set(words), '[unk]']);
}

function makeRecognizer(sampleRate, words) {
  if (recognizer) {
    try {
      recognizer.remove();
    } catch (e) {
      /* already gone */
    }
    recognizer = null;
  }
  const grammar = buildGrammar(words);
  const r = new model.KaldiRecognizer(sampleRate, grammar);
  r.setWords(true);
  return r;
}

/* Fully release the microphone (turns the browser's recording indicator off).
 * Call when leaving practice, not between lines. */
export function releaseMicrophone() {
  stopListening();
  if (stream) {
    stream.getTracks().forEach((t) => t.stop());
    stream = null;
  }
}

/* Perceptual 0..1 level from an RMS amplitude.
 * Speech RMS sits around 0.01-0.2, so a linear bar barely moves. Map -55 dBFS
 * (near silence) to -12 dBFS (comfortably loud) across the full range. */
export function levelFromRms(rms) {
  if (!(rms > 0)) return 0;
  const db = 20 * Math.log10(rms);
  return Math.max(0, Math.min(1, (db + 55) / 43));
}

export async function listenForLine(words, { onPartial, onResult, onLive, onLevel } = {}) {
  if (!model) throw new Error('loadModel() must resolve before listening');

  /* Keep ONE microphone stream for the session too.
   *
   * getUserMedia takes 50-300 ms to open the device even once permission is
   * granted. Re-acquiring per line meant the child began reading before the
   * graph was live, so the OPENING WORD was spoken into a dead mic and never
   * reached the recogniser — measured in recorded trials: every clean-read
   * false positive lost the word at position 0. Holding the stream open makes
   * every line after the first start instantly. */
  if (!stream || !stream.active) {
    stream = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: true, noiseSuppression: true, channelCount: 1 },
    });
  }

  /* ONE AudioContext for the whole session, reused and resumed.
   *
   * Creating a fresh context per line and closing it with a non-awaited
   * close() meant the next line built a context while the previous was still
   * closing. Browsers cap concurrent contexts, and the replacement can come up
   * suspended — ScriptProcessorNode.onaudioprocess never fires on a suspended
   * context, so no audio reaches the recognizer and the line reports silence.
   * Symptom: works the first time, silent every time after. */
  if (!audioCtx || audioCtx.state === 'closed') {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') await audioCtx.resume();

  diag.ctxState = audioCtx.state;
  diag.chunks = 0;
  diag.results = 0;
  recognizer = makeRecognizer(audioCtx.sampleRate, words);
  diag.recognizerId = recognizer.id;

  recognizer.on('partialresult', (msg) => {
    if (onPartial) onPartial(msg.result.partial || '');
  });
  recognizer.on('result', (msg) => {
    diag.results++;
    const heard = (msg.result.result || []).map((w) => ({
      word: w.word,
      conf: w.conf,
    }));
    if (onResult) onResult(heard);
  });
  recognizer.on('error', (msg) => { diag.lastError = msg && msg.error; });

  source = audioCtx.createMediaStreamSource(stream);
  node = audioCtx.createScriptProcessor(4096, 1, 1);
  node.onaudioprocess = (e) => {
    // Signal "actually capturing" on the first real audio callback, so the UI
    // never tells a child to start reading before the graph is live.
    if (diag.chunks === 0 && onLive) onLive();
    diag.chunks++;
    // Level metering rides along on the buffer we already have — no extra
    // AudioNode, no second callback. Strided to keep it cheap.
    if (onLevel) {
      const buf = e.inputBuffer.getChannelData(0);
      let sum = 0, n = 0;
      for (let i = 0; i < buf.length; i += 4) { sum += buf[i] * buf[i]; n++; }
      diag.level = levelFromRms(Math.sqrt(sum / (n || 1)));
      onLevel(diag.level);
    }
    try {
      recognizer.acceptWaveform(e.inputBuffer);
    } catch (err) {
      /* recognizer torn down */
    }
  };
  source.connect(node);
  node.connect(audioCtx.destination);
}

export function stopListening() {
  if (node) {
    node.disconnect();
    node.onaudioprocess = null;
    node = null;
  }
  if (source) {
    source.disconnect();
    source = null;
  }
  // The stream is intentionally kept open between lines — see listenForLine.
  // releaseMicrophone() closes it when practice actually ends.
  // The AudioContext is intentionally left open and reused — see listenForLine.
  // Only the microphone stream and graph nodes are torn down, which is what
  // actually turns the mic indicator off.
  if (recognizer) {
    try {
      recognizer.retrieveFinalResult();
    } catch (e) {
      /* nothing pending */
    }
    /* Deliberately NOT calling recognizer.remove() here, and deliberately
     * keeping the reference.
     *
     * remove() unregisters synchronously (vendor/vosk.js):
     *     model.unregisterRecognizer(this.id);
     * but results route through that same registry when they arrive:
     *     const recognizer = this.recognizers.get(message.recognizerId);
     *     if (recognizer) { recognizer.dispatchEvent(event); return; }
     * retrieveFinalResult() is an async worker round trip, so removing here
     * throws the final result away — and on a short line read without a pause
     * that is the ONLY result, making every read look like silence.
     *
     * Cleanup happens in makeRecognizer(), which removes the previous
     * recognizer after its result has already been consumed. Nulling the
     * reference here would defeat that and leak one recognizer per line.
     * See tests/teardown.test.js. */
  }
}
