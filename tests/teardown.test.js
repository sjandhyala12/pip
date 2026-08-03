import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';

/* Guards the recognizer teardown order in listen.js.
 *
 * vosk-browser routes worker results through a registry, and remove() deletes
 * the entry SYNCHRONOUSLY while retrieveFinalResult() is an async round trip.
 * Verbatim from vendor/vosk.js:
 *
 *   remove() {
 *     model.unregisterRecognizer(this.id);
 *     model.postMessage({ action: "remove", recognizerId: this.id });
 *   }
 *
 *   handleMessage(event) {
 *     ...
 *     const recognizer = this.recognizers.get(message.recognizerId);
 *     if (recognizer) { recognizer.dispatchEvent(event); return; }
 *     this.dispatchEvent(event);        // <- dropped: not our listener
 *   }
 *
 * So calling remove() right after retrieveFinalResult() throws away the final
 * result: the worker computes it, but by the time it arrives the registry entry
 * is gone. On a short line read without a pause the final result is the ONLY
 * result, so the transcript comes back empty and every read looks like silence.
 */

// Stand-in mirroring the two behaviours quoted above.
function makeModel() {
  const registry = new Map();
  const pending = [];
  return {
    register: r => registry.set(r.id, r),
    unregister: id => registry.delete(id),
    // worker round trip: queued now, delivered when flush() runs
    retrieveFinalResult: id => pending.push(id),
    flush() {
      for (const id of pending) {
        const r = registry.get(id);
        if (r) r.onResult([{ word: 'the', conf: 1 }, { word: 'cat', conf: 1 }]);
      }
      pending.length = 0;
    }
  };
}

test('final result is delivered when teardown does not unregister', () => {
  const model = makeModel();
  const heard = [];
  const rec = { id: 'r1', onResult: h => heard.push(...h) };
  model.register(rec);

  // stopListening(): ask for the final result, leave the registry alone.
  model.retrieveFinalResult(rec.id);
  model.flush();

  assert.ok(heard.length > 0, 'final result must reach onResult');
});

test('unregistering before the result lands loses it (the regression)', () => {
  const model = makeModel();
  const heard = [];
  const rec = { id: 'r1', onResult: h => heard.push(...h) };
  model.register(rec);

  model.retrieveFinalResult(rec.id);
  model.unregister(rec.id);      // what recognizer.remove() does, synchronously
  model.flush();

  assert.equal(heard.length, 0,
    'documents why stopListening() must not call remove(): the result is dropped');
});

test('stopListening() does not call remove() on the active recognizer', () => {
  const src = fs.readFileSync('listen.js', 'utf8');
  const body = src.slice(src.indexOf('export function stopListening'));
  const raw = body.slice(0, body.indexOf('\n}'));
  // Strip comments — the explanation of why remove() is absent naturally
  // mentions remove(), and we are checking code, not prose.
  const fn = raw.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');

  assert.ok(fn.includes('retrieveFinalResult'),
    'stopListening must still request the final result');
  assert.ok(!/recognizer\.remove\(\)/.test(fn),
    'stopListening must NOT call recognizer.remove() — it drops the final result. ' +
    'Cleanup belongs in makeRecognizer(), which removes the previous recognizer ' +
    'once its result has already been consumed.');
  assert.ok(!/recognizer = null/.test(fn),
    'stopListening must NOT null the recognizer — makeRecognizer() needs the ' +
    'reference to clean it up, otherwise every line leaks one recognizer.');
});
