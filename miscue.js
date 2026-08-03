/* miscue.js — pure reading-miscue logic for Reading Practice.
 * No DOM, no async, no browser APIs, so it is fully testable in Node.
 */

export const MAX_LINE_WORDS = 15;

const ABBREV = /\b(?:Mr|Mrs|Ms|Dr|St|Jr|Sr|vs|etc)\.$/;

function splitSentences(text) {
  const parts = text.match(/[^.!?]+[.!?]+["'”’]*\s*/g) || [text];
  const out = [];
  for (const raw of parts) {
    const piece = raw.trim();
    if (!piece) continue;
    if (out.length && ABBREV.test(out[out.length - 1])) out[out.length - 1] += ' ' + piece;
    else out.push(piece);
  }
  return out;
}

function splitClauses(sentence) {
  const words = sentence.split(/\s+/);
  if (words.length <= MAX_LINE_WORDS) return [sentence];

  const pieces = [];
  let buf = [];
  for (const w of words) {
    buf.push(w);
    const atBoundary = /[,;:]$/.test(w) || /[—-]$/.test(w) || w === '--' || w === '—';
    if (atBoundary && buf.length >= Math.ceil(MAX_LINE_WORDS / 2)) {
      pieces.push(buf.join(' '));
      buf = [];
    }
  }
  if (buf.length) pieces.push(buf.join(' '));

  const out = [];
  for (const p of pieces) {
    const w = p.split(/\s+/);
    if (w.length <= MAX_LINE_WORDS) { out.push(p); continue; }
    for (let i = 0; i < w.length; i += MAX_LINE_WORDS) {
      out.push(w.slice(i, i + MAX_LINE_WORDS).join(' '));
    }
  }
  return out;
}

export function segment(paras) {
  const lines = [];
  for (const para of paras) {
    for (const sentence of splitSentences(para)) {
      for (const line of splitClauses(sentence)) lines.push(line);
    }
  }
  return lines;
}

export function normalize(word) {
  return String(word)
    .toLowerCase()
    .replace(/’/g, "'")
    .replace(/[^a-z']/g, '')
    .replace(/^'+|'+$/g, '');
}

/* Words the model's vocabulary cannot represent, so the child could never be
 * scored correct on them and would be stuck forever. These auto-pass.
 * Hyphenated compounds are NOT listed: subTokens() splits them into components,
 * all of which are real vocabulary words. */
export const UNSCOREABLE = new Set([
  'abuela', 'despacio',   // Spanish (story: tamales)
  'churro',               // Spanish; a puppy's name (story: my-mailbox)
  'plip',                 // onomatopoeia (story: fb-crow)
  'ytrap', 'azzip'        // "PARTY PIZZA" reversed — the premise of story my-backwards
]);

/* Split one on-screen word into the sub-tokens the recognizer actually deals in.
 *
 * Two things expand, for the same reason: the model's vocabulary has no symbol
 * for the whole written form, but does have every component.
 *   "great-grandchildren" -> ['great', 'grandchildren']
 *   "Mateo's"             -> ['mateo', 's']
 *
 * Applied to BOTH the expected and heard sides so they compare like for like.
 * The possessive suffix is 's' rather than "'s" because normalize() strips a
 * leading apostrophe, so that is the form the transcript side will produce. */
export function subTokens(raw) {
  const out = [];
  for (const part of String(raw).split(/[-–—]+/)) {
    const p = normalize(part);
    if (!p) continue;
    if (p.endsWith("'s")) { out.push(p.slice(0, -2)); out.push('s'); }
    else out.push(p);
  }
  return out;
}

// A screen word is unscoreable only if every one of its sub-tokens is.
export function isUnscoreable(word) {
  const subs = subTokens(word);
  return !subs.length || subs.every(t => UNSCOREABLE.has(t));
}

// Words for the recognizer's grammar. 's' maps back to the "'s" vocabulary symbol.
export function grammarWords(line) {
  const out = [];
  for (const raw of line.split(/\s+/)) {
    for (const t of subTokens(raw)) {
      if (UNSCOREABLE.has(t)) continue;
      out.push(t === 's' ? "'s" : t);
    }
  }
  return out;
}

const FILLERS = new Set(['um', 'uh', 'er', 'hmm']);
const UNK = '[unk]';

/* Function words are never scored.
 *
 * Measured against real recordings: every remaining false positive on a clean
 * read was a short unstressed function word the recogniser dropped — "is",
 * "and", "up" — while every genuine error was a content word ("full", "half",
 * "cats"). Unstressed monosyllables are what ASR loses most, and correcting a
 * seven-year-old for not enunciating "of" is noise, not teaching.
 *
 * Negations are deliberately NOT here: skipping "not" or "no" reverses meaning,
 * so those stay scoreable despite being short.
 *
 * Cost: a child can skip a function word unnoticed. That is the acceptable
 * direction — this feature exists to catch skipped and invented content words,
 * and the guiding principle puts false corrections above missed ones. */
const FUNCTION_WORDS = new Set([
  'a', 'an', 'the',
  'is', 'are', 'was', 'were', 'am', 'be', 'been', 'do', 'does', 'did',
  'of', 'and', 'or', 'but', 'so', 'as', 'if', 'than', 'then',
  'to', 'in', 'on', 'at', 'up', 'out', 'for', 'with', 'from', 'by', 'into', 'over',
  'it', 'its', 'this', 'that', 'these', 'those', 'there', 'here',
  's'   // possessive suffix, already optional
]);

/* Confidence below which a mismatch is never reported.
 *
 * Measured 2026-08-03 against recorded read-aloud trials (see
 * tests/recordings.test.js). Finding: on that data the threshold does not bind
 * at ANY value from 0 to 1 — every scored decision came back at confidence 1.0.
 * Capture timing and the function-word rule were the real levers, not this.
 *
 * It is kept as a safety net for genuinely uncertain audio (a mumbling or
 * distant child), which that session did not produce. The value is bounded by
 * one observation: the lowest confidence on a TRUE detection was 0.86 (an
 * invented word), so anything above ~0.85 would start losing real errors. 0.75
 * sits below that with headroom while still forgiving uncertain mismatches.
 *
 * Lightly evidenced — one reader, one session. Revisit if false corrections
 * appear in use; lowering it makes the app stricter, raising it more forgiving. */
export const MIN_CONFIDENCE = 0.75;

export function align(expected, heard) {
  const n = expected.length, m = heard.length;
  const GAP = -1, MATCH = 1, MISS = -1;
  const score = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = 0; i <= n; i++) score[i][0] = i * GAP;
  for (let j = 0; j <= m; j++) score[0][j] = j * GAP;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      const diag = score[i - 1][j - 1] + (expected[i - 1] === heard[j - 1] ? MATCH : MISS);
      score[i][j] = Math.max(diag, score[i - 1][j] + GAP, score[i][j - 1] + GAP);
    }
  }
  const out = [];
  let i = n, j = m;
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 &&
        score[i][j] === score[i - 1][j - 1] + (expected[i - 1] === heard[j - 1] ? MATCH : MISS)) {
      out.push({ e: expected[i - 1], h: heard[j - 1], ei: i - 1 }); i--; j--;
    } else if (i > 0 && score[i][j] === score[i - 1][j] + GAP) {
      out.push({ e: expected[i - 1], h: null, ei: i - 1 }); i--;
    } else {
      out.push({ e: null, h: heard[j - 1], ei: null }); j--;
    }
  }
  return out.reverse();
}

/* Classify one line's reading.
 *
 * Alignment runs over SUB-tokens (hyphen parts, possessive suffixes) because
 * that is the granularity the recognizer works in, but results are reported
 * against the caller's on-screen word indices so highlighting lines up. */
export function classify(expectedWords, heardWords, opts = {}) {
  const minConf = opts.minConfidence == null ? MIN_CONFIDENCE : opts.minConfidence;
  // Expand screen words, remembering which screen word each sub-token came from.
  // Words that normalize to nothing keep an empty placeholder so indices hold.
  const subs = [];
  expectedWords.forEach((raw, ei) => {
    const parts = subTokens(raw);
    if (!parts.length) { subs.push({ w: '', ei, un: true }); return; }
    /* The possessive suffix is OPTIONAL. subTokens splits "camel's" into
     * ['camel','s'] because that is how the vocabulary represents it, but the
     * suffix is acoustically tiny and Vosk emits it only sometimes — observed
     * present in one recorded read and absent in another of the same word.
     * Demanding it flags a child who read the word perfectly. Nobody
     * meaningfully "skips" a possessive 's', so requiring it costs nothing. */
    parts.forEach(w => subs.push({
      w, ei,
      un: UNSCOREABLE.has(w),
      opt: w === 's' || FUNCTION_WORDS.has(w)   // present in the grammar, never scored
    }));
  });

  const allScreen = expectedWords.map((_, i) => i);
  // Nothing scoreable on this line — it passes without judgement.
  if (!subs.some(s => s.w && !s.un)) return { miscues: [], matched: allScreen, silent: false };

  // Expand the heard side identically so the two sequences compare like for like.
  const heardSubs = [];
  for (const h of heardWords) {
    if (h.word === UNK) { heardSubs.push({ w: UNK, conf: h.conf }); continue; }
    for (const t of subTokens(h.word)) heardSubs.push({ w: t, conf: h.conf });
  }
  const kept = heardSubs.filter(h => !FILLERS.has(h.w) && h.w !== '');
  if (kept.length === 0) return { miscues: [], matched: [], silent: true };

  const expectedSeq = subs.map(s => s.w);
  const heardSeq = kept.map(h => h.w);
  const pairs = align(expectedSeq, heardSeq);

  const unAt = new Set(subs.map((s, i) => (s.un || !s.w ? i : -1)).filter(i => i >= 0));
  const near = i => unAt.has(i) || unAt.has(i - 1) || unAt.has(i + 1);

  /* Bag of everything actually heard, regardless of position.
   *
   * The grammar is a word loop (Task 6b) chosen precisely because it carries no
   * word-order prior, so the decoder legitimately emits words out of sequence —
   * observed: "to save up that energy" for "to save that energy up". Strict
   * sequence alignment then reports a false omission for a word the child did
   * say. Since the goal is skipped and invented words, not transpositions, a
   * word present anywhere in the transcript is not an omission. */
  const bag = new Map();
  for (const w of heardSeq) bag.set(w, (bag.get(w) || 0) + 1);
  const takeFromBag = w => {
    const n = bag.get(w) || 0;
    if (n <= 0) return false;
    bag.set(w, n - 1);
    return true;
  };

  const badScreen = new Map();   // screen index -> miscue kind (first wins)
  const okSub = new Set();       // sub indices that matched or were forgiven
  let hIdx = -1;

  for (let k = 0; k < pairs.length; k++) {
    const p = pairs[k];
    if (p.h !== null) hIdx++;

    if (p.ei !== null && unAt.has(p.ei)) { okSub.add(p.ei); continue; }

    if (p.h === UNK && near(p.ei === null ? prevExpectedIndex(pairs, k) : p.ei)) continue;

    if (p.e !== null && p.h !== null && p.e === p.h) { okSub.add(p.ei); takeFromBag(p.e); continue; }

    // Never-scored sub-tokens (function words, possessive 's') pass whatever
    // happened to them — dropped, or misheard as something else.
    if (p.ei !== null && subs[p.ei].opt) { okSub.add(p.ei); continue; }

    if (p.e === null) continue;   // insertion / repetition / stray noise

    // Self-correction: the right word turns up immediately afterwards.
    if (heardSeq.slice(Math.max(0, hIdx), hIdx + 3).includes(p.e)) { okSub.add(p.ei); continue; }

    const conf = p.h === null ? 1 : (kept[hIdx] ? kept[hIdx].conf : 0);
    if (conf < minConf) { okSub.add(p.ei); continue; }

    // Heard somewhere, just not here: a transposition, not an omission.
    if (p.h === null && takeFromBag(p.e)) { okSub.add(p.ei); continue; }

    const ei = subs[p.ei].ei;
    if (!badScreen.has(ei)) badScreen.set(ei, p.h === null ? 'omission' : 'substitution');
  }

  // Collapse sub-token results back to on-screen words.
  const matched = [];
  expectedWords.forEach((_, ei) => {
    if (badScreen.has(ei)) return;
    const mine = subs.map((s, i) => (s.ei === ei ? i : -1)).filter(i => i >= 0);
    if (mine.length && mine.every(i => okSub.has(i))) matched.push(ei);
  });

  const miscues = [...badScreen.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([ei, kind]) => ({ index: ei, word: normalize(expectedWords[ei]), kind }));

  return { miscues, matched, silent: false };
}

function prevExpectedIndex(pairs, k) {
  for (let i = k; i >= 0; i--) if (pairs[i].ei !== null) return pairs[i].ei;
  return -1;
}
