# Reading Practice Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an optional parent-dashboard mode in which the child reads each passage aloud one line at a time, with the app catching skipped and invented words and pronouncing the word they missed.

**Architecture:** Two new modules with sharp boundaries — `miscue.js` (pure functions: segmentation, alignment, classification; no DOM, no async, fully unit-tested) and `listen.js` (the sole owner of Vosk, the microphone, and the model). `app.js` gains a practice render path on the existing `read` screen plus new persisted state. Recognition is grammar-constrained per line: the decoder is restricted to that line's words plus `[unk]`, which is both an accuracy win and the invented-word detector.

**Tech Stack:** Vanilla ES modules, no build step, no package manager. Vendored `vosk-browser@0.0.8` (UMD, WASM base64-embedded). `vosk-model-small-en-us-0.15` self-hosted as `.tar.gz`. Tests via Node's built-in `node --test`.

**Source spec:** `docs/superpowers/specs/2026-08-02-read-aloud-practice-design.md`
**Spike evidence:** `docs/superpowers/specs/2026-08-02-vosk-spike-findings.md`

## Global Constraints

- **No build step, no package manager, no `package.json`.** Verified: `node --test` (bare, from repo root) auto-discovers `*.test.js` and resolves ESM imports of root modules on Node 24 without one. Use exactly that command; `node --test tests/` does **not** work.
- **No third-party runtime requests, ever.** The app self-hosts its fonts and must self-host the model. Fetching the model from `alphacephei.com` is forbidden — it would reintroduce the exact leak the font change removed.
- **Guiding principle, applies to every threshold decision:** wrongly correcting a child who read correctly is far more damaging than missing a real error. When in doubt, forgive.
- **The confidence threshold is UNTUNED.** It must ship as a single named constant with a comment saying so. Do not present it as validated.
- **Default off.** With `state.practice === false` the app must behave byte-for-byte as it does today.
- **Existing saves must keep working.** Use the established `d.x || {}` defensive-default pattern in `loadProgress`.
- Feature detection is by capability only — never user-agent sniffing.
- Naming: the existing `readAloud` toggle is relabelled **"Read to me"** (storage key unchanged); the new one is **"Reading practice"**.
- Commit after every task.

---

### Task 1: Test harness and model vocabulary artifact

Establishes testing and produces the vocabulary list every later correctness test depends on.

**Files:**
- Create: `tests/harness.test.js`
- Create: `data/model-vocab.txt`
- Create: `tools/extract-vocab.js`
- Modify: `.gitignore` (create if absent)

**Interfaces:**
- Consumes: nothing.
- Produces: `data/model-vocab.txt` — newline-delimited, lowercase, one symbol per line, ~152,098 lines. Read by Task 2 and Task 4 tests.

- [ ] **Step 1: Write the failing harness test**

Create `tests/harness.test.js`:

```js
import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import { CATEGORIES } from '../passages/index.js';

test('test harness resolves ESM imports of app modules', () => {
  assert.equal(CATEGORIES.length, 6);
});

test('model vocabulary artifact is present and sane', () => {
  const v = new Set(fs.readFileSync('data/model-vocab.txt', 'utf8').split('\n'));
  // If these are missing the extraction failed — the vocabulary is not actually small.
  for (const w of ['the', 'she', 'with', 'beaver', '[unk]']) {
    assert.ok(v.has(w), `expected ${w} in model vocabulary`);
  }
  assert.ok(v.size > 100000, `expected >100k symbols, got ${v.size}`);
});
```

- [ ] **Step 2: Run to verify it fails**

Run: `node --test`
Expected: FAIL — `ENOENT: no such file or directory, open 'data/model-vocab.txt'`

- [ ] **Step 3: Download and repack the model**

The model is needed for the feature regardless; this also produces the vocabulary source.

```bash
mkdir -p models data tools
curl -sSL -o /tmp/vosk-model.zip \
  https://alphacephei.com/vosk/models/vosk-model-small-en-us-0.15.zip
cd /tmp && unzip -q -o vosk-model.zip
# vosk-browser requires .tar.gz, not the .zip alphacephei ships
tar czf "$OLDPWD/models/vosk-model-small-en-us-0.15.tar.gz" vosk-model-small-en-us-0.15
cd "$OLDPWD"
ls -lh models/   # expect ~39M
```

- [ ] **Step 4: Write the vocabulary extractor**

OpenFst stores its symbol table as bare `[int32 length][string][int64 id]` triples with no delimiters, so `strings` glues entries together and yields false negatives. This self-validating scan is required.

Create `tools/extract-vocab.js`:

```js
// Extracts the model's symbol table to data/model-vocab.txt.
// Run once: node tools/extract-vocab.js /tmp/vosk-model-small-en-us-0.15/graph/Gr.fst
import fs from 'node:fs';

const src = process.argv[2];
if (!src) { console.error('usage: node tools/extract-vocab.js <path/to/Gr.fst>'); process.exit(1); }

const b = fs.readFileSync(src);
const vocab = new Set();
let off = 0;
while (off + 12 <= b.length) {
  const len = b.readInt32LE(off);
  if (len > 0 && len <= 80 && off + 4 + len + 8 <= b.length) {
    const s = b.slice(off + 4, off + 4 + len);
    let ok = true;
    for (const c of s) { if (c < 0x21 || c > 0x7e) { ok = false; break; } }
    if (ok) { vocab.add(s.toString('latin1').toLowerCase()); off += 4 + len + 8; continue; }
  }
  off++;
}
for (const w of ['the', 'she', 'with', '[unk]']) {
  if (!vocab.has(w)) { console.error(`FAILED: '${w}' missing — parse is wrong, not the vocabulary`); process.exit(1); }
}
fs.writeFileSync('data/model-vocab.txt', [...vocab].sort().join('\n'));
console.log(`wrote data/model-vocab.txt (${vocab.size} symbols)`);
```

- [ ] **Step 5: Run the extractor**

Run: `node tools/extract-vocab.js /tmp/vosk-model-small-en-us-0.15/graph/Gr.fst`
Expected: `wrote data/model-vocab.txt (152098 symbols)`

- [ ] **Step 6: Run tests to verify they pass**

Run: `node --test`
Expected: PASS, 2 tests

- [ ] **Step 7: Commit**

```bash
git add tests/harness.test.js tools/extract-vocab.js data/model-vocab.txt models/
git commit -m "test: add node:test harness and model vocabulary artifact"
```

---

### Task 2: Line segmentation

**Files:**
- Create: `miscue.js`
- Create: `tests/segment.test.js`

**Interfaces:**
- Consumes: `data/model-vocab.txt` (test only).
- Produces:
  - `export const MAX_LINE_WORDS = 15`
  - `export function segment(paras: string[]): string[]` — passage paragraphs to practice lines.

- [ ] **Step 1: Write the failing tests**

Create `tests/segment.test.js`:

```js
import { test } from 'node:test';
import assert from 'node:assert';
import { segment, MAX_LINE_WORDS } from '../miscue.js';
import { CATEGORIES } from '../passages/index.js';

test('splits on sentence-final punctuation', () => {
  assert.deepEqual(segment(['The cat sat. The dog ran.']),
    ['The cat sat.', 'The dog ran.']);
});

test('does not split mid-abbreviation', () => {
  assert.deepEqual(segment(['Mr. Fox ran home. He was tired.']),
    ['Mr. Fox ran home.', 'He was tired.']);
});

test('keeps a closing quote attached to its sentence', () => {
  assert.deepEqual(segment(['"I am bored," sighed Nora. She sat down.']),
    ['"I am bored," sighed Nora.', 'She sat down.']);
});

test('splits an over-long sentence at a clause boundary', () => {
  const long = 'He had simply found thousands of ways that did not work, '
             + 'and each one brought him closer to the answer.';
  const lines = segment([long]);
  assert.ok(lines.length > 1, 'expected the long sentence to split');
  for (const l of lines) {
    assert.ok(l.split(/\s+/).length <= MAX_LINE_WORDS, `line too long: ${l}`);
  }
});

test('no line in the whole corpus exceeds the cap', () => {
  for (const c of CATEGORIES) {
    for (const p of c.passages) {
      for (const line of segment(p.paras)) {
        assert.ok(line.split(/\s+/).length <= MAX_LINE_WORDS,
          `${p.id}: ${line.split(/\s+/).length} words — ${line}`);
      }
    }
  }
});

test('segmentation loses no words', () => {
  for (const c of CATEGORIES) {
    for (const p of c.passages) {
      const before = p.paras.join(' ').split(/\s+/).filter(Boolean).length;
      const after = segment(p.paras).join(' ').split(/\s+/).filter(Boolean).length;
      assert.equal(after, before, `${p.id}: word count changed`);
    }
  }
});
```

- [ ] **Step 2: Run to verify they fail**

Run: `node --test`
Expected: FAIL — `Cannot find module '.../miscue.js'`

- [ ] **Step 3: Implement segmentation**

Create `miscue.js`:

```js
/* miscue.js — pure reading-miscue logic for Reading Practice.
 * No DOM, no async, no browser APIs, so it is fully testable in Node.
 */

export const MAX_LINE_WORDS = 15;

// Abbreviations whose trailing period must not end a sentence.
const ABBREV = /\b(?:Mr|Mrs|Ms|Dr|St|Jr|Sr|vs|etc)\.$/;

function splitSentences(text) {
  // Terminal punctuation, plus any closing quote that belongs to it.
  const parts = text.match(/[^.!?]+[.!?]+["'”’]*\s*/g) || [text];
  const out = [];
  for (const raw of parts) {
    const piece = raw.trim();
    if (!piece) continue;
    // Re-join when the previous piece ended on an abbreviation.
    if (out.length && ABBREV.test(out[out.length - 1])) out[out.length - 1] += ' ' + piece;
    else out.push(piece);
  }
  return out;
}

// Split an over-long sentence at clause boundaries, never mid-clause.
function splitClauses(sentence) {
  const words = sentence.split(/\s+/);
  if (words.length <= MAX_LINE_WORDS) return [sentence];

  const pieces = [];
  let buf = [];
  for (const w of words) {
    buf.push(w);
    const atBoundary = /[,;:—]$/.test(w) || w === '—';
    if (atBoundary && buf.length >= Math.ceil(MAX_LINE_WORDS / 2)) {
      pieces.push(buf.join(' '));
      buf = [];
    }
  }
  if (buf.length) pieces.push(buf.join(' '));

  // Any piece still over the cap has no usable boundary: hard-wrap it.
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
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `node --test`
Expected: PASS. If the corpus test fails, fix `splitClauses` — do not raise `MAX_LINE_WORDS`.

- [ ] **Step 5: Commit**

```bash
git add miscue.js tests/segment.test.js
git commit -m "feat: add passage line segmentation for reading practice"
```

---

### Task 3: Word normalization and the unscoreable set

**Files:**
- Modify: `miscue.js`
- Create: `tests/unscoreable.test.js`

**Interfaces:**
- Consumes: `segment` from Task 2.
- Produces:
  - `export function normalize(word: string): string`
  - `export function grammarWords(line: string): string[]` — scoreable words only, possessives split.
  - `export const UNSCOREABLE: Set<string>` — normalized words the model cannot represent.
  - `export function isUnscoreable(word: string): boolean`

- [ ] **Step 1: Write the failing tests**

Create `tests/unscoreable.test.js`:

```js
import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import { normalize, grammarWords, isUnscoreable, UNSCOREABLE, segment } from '../miscue.js';
import { CATEGORIES } from '../passages/index.js';

test('normalize lowercases and strips punctuation but keeps internal apostrophes', () => {
  assert.equal(normalize('Beaver,'), 'beaver');
  assert.equal(normalize('"Don\'t!"'), "don't");
  assert.equal(normalize('—'), '');
  assert.equal(normalize('I’m'), "i'm");
});

test('grammarWords splits possessives and drops unscoreable words', () => {
  assert.deepEqual(grammarWords("Mateo's dog ran"), ['mateo', "'s", 'dog', 'ran']);
  assert.deepEqual(grammarWords('YTRAP AZZIP'), []);
});

test('known unscoreable words are flagged', () => {
  for (const w of ['ytrap', 'azzip', 'abuela', 'despacio', 'churro', 'plip']) {
    assert.ok(isUnscoreable(w), `${w} should be unscoreable`);
  }
  assert.ok(!isUnscoreable('beaver'));
});

// REGRESSION GUARD: this is what stops a future story reintroducing the
// my-backwards trap, where a child is blocked on a line no recognizer can match.
test('every out-of-vocabulary word in the corpus is marked unscoreable', () => {
  const vocab = new Set(fs.readFileSync('data/model-vocab.txt', 'utf8').split('\n'));
  const missing = new Set();
  for (const c of CATEGORIES) {
    for (const p of c.passages) {
      for (const line of segment(p.paras)) {
        for (const raw of line.split(/\s+/)) {
          const w = normalize(raw);
          if (!w) continue;
          const base = w.endsWith("'s") ? w.slice(0, -2) : w;
          if (!vocab.has(base) && !UNSCOREABLE.has(base)) missing.add(base);
        }
      }
    }
  }
  assert.deepEqual([...missing], [],
    `words the model cannot represent and that are not marked unscoreable: ${[...missing]}`);
});
```

- [ ] **Step 2: Run to verify they fail**

Run: `node --test`
Expected: FAIL — `normalize is not a function`

- [ ] **Step 3: Implement**

Append to `miscue.js`:

```js
/* ---------- normalization ---------- */

// Lowercase, drop surrounding punctuation, keep internal apostrophes.
export function normalize(word) {
  return String(word)
    .toLowerCase()
    .replace(/’/g, "'")
    .replace(/[^a-z']/g, '')
    .replace(/^'+|'+$/g, '');
}

/* ---------- unscoreable words ----------
 * Words absent from the model's vocabulary cannot be placed in a grammar, so the
 * child can never be scored correct on them. Under "must read correctly to
 * advance" that means permanently stuck. These auto-pass instead.
 *
 * Derived from the corpus by tests/unscoreable.test.js, which fails if new
 * content introduces a word the model cannot represent.
 */
export const UNSCOREABLE = new Set([
  'abuela', 'despacio',   // Spanish (story: tamales)
  'churro',               // Spanish; a puppy's name (story: my-mailbox)
  'plip',                 // onomatopoeia (story: fb-crow)
  'ytrap', 'azzip'        // "PARTY PIZZA" reversed — the premise of story my-backwards
]);

export function isUnscoreable(word) {
  const w = normalize(word);
  return !w || UNSCOREABLE.has(w.endsWith("'s") ? w.slice(0, -2) : w);
}

// Words to put in the recognizer's grammar: normalized, possessives split,
// unscoreable words omitted (they cannot be represented).
export function grammarWords(line) {
  const out = [];
  for (const raw of line.split(/\s+/)) {
    const w = normalize(raw);
    if (!w) continue;
    const base = w.endsWith("'s") ? w.slice(0, -2) : w;
    if (UNSCOREABLE.has(base)) continue;
    out.push(base);
    if (w.endsWith("'s")) out.push("'s");
  }
  return out;
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `node --test`
Expected: PASS. If the regression guard reports extra words, add them to `UNSCOREABLE` with a comment naming the story and reason — do not weaken the test.

- [ ] **Step 5: Commit**

```bash
git add miscue.js tests/unscoreable.test.js
git commit -m "feat: add word normalization and unscoreable-word handling"
```

---

### Task 4: Alignment and miscue classification

The core of the feature. The unscoreable absorption rules here are the subtlest part of the system, and a bug produces exactly the failure the design exists to prevent.

**Files:**
- Modify: `miscue.js`
- Create: `tests/miscue.test.js`

**Interfaces:**
- Consumes: `normalize`, `UNSCOREABLE` from Task 3.
- Produces:
  - `export const MIN_CONFIDENCE = 0.65`
  - `export function align(expected: string[], heard: string[]): Array<{ e: string|null, h: string|null, ei: number|null }>`
  - `export function classify(expectedWords: string[], heardWords: Array<{word: string, conf: number}>): { miscues: Array<{ index: number, word: string, kind: 'omission'|'substitution' }>, matched: number[], silent: boolean }`

- [ ] **Step 1: Write the failing tests**

Create `tests/miscue.test.js`:

```js
import { test } from 'node:test';
import assert from 'node:assert';
import { classify } from '../miscue.js';

// Helper: build a heard-word list at high confidence.
const heard = (...ws) => ws.map(w => ({ word: w, conf: 0.95 }));
const kinds = r => r.miscues.map(m => `${m.kind}:${m.word}`);

test('a perfect read produces no miscues', () => {
  const r = classify(['the', 'cat', 'sat'], heard('the', 'cat', 'sat'));
  assert.deepEqual(kinds(r), []);
  assert.deepEqual(r.matched, [0, 1, 2]);
});

test('a skipped word is an omission', () => {
  const r = classify(['the', 'big', 'cat'], heard('the', 'cat'));
  assert.deepEqual(kinds(r), ['omission:big']);
});

test('a wrong word is a substitution', () => {
  const r = classify(['the', 'big', 'cat'], heard('the', 'bad', 'cat'));
  assert.deepEqual(kinds(r), ['substitution:big']);
});

test('an invented word surfaces as [unk] and is a substitution', () => {
  const r = classify(['the', 'big', 'cat'], heard('the', '[unk]', 'cat'));
  assert.deepEqual(kinds(r), ['substitution:big']);
});

test('a self-correction is not an error', () => {
  const r = classify(['the', 'big', 'cat'], heard('the', 'bad', 'big', 'cat'));
  assert.deepEqual(kinds(r), []);
});

test('a repetition is not an error', () => {
  const r = classify(['the', 'big', 'cat'], heard('the', 'the', 'big', 'cat'));
  assert.deepEqual(kinds(r), []);
});

test('fillers are ignored', () => {
  const r = classify(['the', 'cat'], heard('um', 'the', 'uh', 'cat'));
  assert.deepEqual(kinds(r), []);
});

test('low-confidence words never raise a miscue', () => {
  const r = classify(['the', 'big', 'cat'],
    [{ word: 'the', conf: 0.9 }, { word: '[unk]', conf: 0.2 }, { word: 'cat', conf: 0.9 }]);
  assert.deepEqual(kinds(r), []);
});

test('silence is reported as silent, not as miscues', () => {
  const r = classify(['the', 'cat'], []);
  assert.equal(r.silent, true);
  assert.deepEqual(kinds(r), []);
});

/* ---- unscoreable absorption ---- */

test('[unk] aligned to an unscoreable word passes', () => {
  const r = classify(['said', 'abuela'], heard('said', '[unk]'));
  assert.deepEqual(kinds(r), []);
});

test('[unk] one position off from an unscoreable word is absorbed', () => {
  const r = classify(['abuela', 'said', 'yes'], heard('[unk]', '[unk]', 'said', 'yes'));
  assert.deepEqual(kinds(r), []);
});

test('an unscoreable word aligned to a gap passes', () => {
  const r = classify(['said', 'abuela', 'softly'], heard('said', 'softly'));
  assert.deepEqual(kinds(r), []);
});

test('two adjacent unscoreable words with two [unk]s pass', () => {
  const r = classify(['ytrap', 'azzip'], heard('[unk]', '[unk]'));
  assert.deepEqual(kinds(r), []);
});

test('a line that is entirely unscoreable passes with no listening', () => {
  const r = classify(['ytrap', 'azzip'], []);
  assert.deepEqual(kinds(r), []);
  assert.equal(r.silent, false, 'an all-unscoreable line must not report silence');
});

// GUARD: over-absorption must not swallow real errors.
test('a genuine error elsewhere in a line containing an unscoreable word is still caught', () => {
  const r = classify(['abuela', 'made', 'warm', 'tamales'],
    heard('[unk]', 'made', 'cold', 'tamales'));
  assert.deepEqual(kinds(r), ['substitution:warm']);
});

// Index parity: returned indices must map onto the CALLER's raw word array, so
// punctuation-only tokens keep their slot rather than shifting everything left.
test('punctuation-only tokens hold their position and never block', () => {
  const r = classify(['the', '—', 'cat', 'sat'], heard('the', 'cat', 'sat'));
  assert.deepEqual(kinds(r), []);
  assert.ok(r.matched.includes(3), 'index 3 (sat) must still be index 3');
});
```

- [ ] **Step 2: Run to verify they fail**

Run: `node --test`
Expected: FAIL — `classify is not a function`

- [ ] **Step 3: Implement alignment and classification**

Append to `miscue.js`:

```js
/* ---------- alignment ---------- */

const FILLERS = new Set(['um', 'uh', 'er', 'hmm']);
const UNK = '[unk]';

/* Confidence below which a mismatch is never reported.
 * UNTUNED — deliberately conservative. Tuning requires recordings of a real
 * child reading; see the spec's guiding principle before raising it. */
export const MIN_CONFIDENCE = 0.65;

// Needleman-Wunsch global alignment. Returns pairs; null means a gap.
// `ei` carries the expected word's original index so callers can map back.
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

/* ---------- classification ----------
 * Only omissions and substitutions block advancement. Self-corrections,
 * repetitions, fillers, and stray [unk]s are forgiven, per running-record
 * practice and the spec's guiding principle.
 */
export function classify(expectedWords, heardWords) {
  // IMPORTANT: indices returned in `miscues` and `matched` must line up with the
  // caller's raw word array (used for on-screen highlighting), so positions are
  // never removed here — words that normalize to empty stay as '' placeholders.
  const expected = expectedWords.map(normalize);
  const scoreableIdx = expected
    .map((w, i) => (!w || UNSCOREABLE.has(w.endsWith("'s") ? w.slice(0, -2) : w) ? -1 : i))
    .filter(i => i >= 0);

  // A line with nothing scoreable cannot be judged; it simply passes.
  if (scoreableIdx.length === 0) return { miscues: [], matched: expected.map((_, i) => i), silent: false };

  const kept = heardWords.filter(h => !FILLERS.has(normalize(h.word)));
  if (kept.length === 0) return { miscues: [], matched: [], silent: true };

  const heard = kept.map(h => (h.word === UNK ? UNK : normalize(h.word)));
  const confOf = new Map(kept.map((h, i) => [i, h.conf]));

  const pairs = align(expected, heard);

  // Which expected positions are unscoreable — used for absorption.
  // Empty placeholders count as unscoreable so they never block.
  const unscoreableAt = new Set(
    expected.map((w, i) => [w, i])
      .filter(([w]) => !w || UNSCOREABLE.has(w.endsWith("'s") ? w.slice(0, -2) : w))
      .map(([, i]) => i)
  );
  const nearUnscoreable = i =>
    unscoreableAt.has(i) || unscoreableAt.has(i - 1) || unscoreableAt.has(i + 1);

  const matched = [];
  const miscues = [];
  let hIdx = -1;

  for (let k = 0; k < pairs.length; k++) {
    const p = pairs[k];
    if (p.h !== null) hIdx++;

    // Rule 1: an unscoreable expected position always passes.
    if (p.ei !== null && unscoreableAt.has(p.ei)) { matched.push(p.ei); continue; }

    // Rules 2 & 3: absorb [unk] at, or within one position of, an unscoreable slot.
    if (p.h === UNK && (p.ei === null ? nearUnscoreable(prevExpectedIndex(pairs, k)) : nearUnscoreable(p.ei))) {
      continue;
    }

    if (p.e !== null && p.h !== null && p.e === p.h) { matched.push(p.ei); continue; }

    // Insertions that repeat an already-matched word are repetitions, not errors.
    if (p.e === null) {
      if (p.h !== UNK && matched.some(i => expected[i] === p.h)) continue;
      // A stray [unk] between matched words with no adjacent omission: noise.
      continue;
    }

    // Self-correction: the correct word appears later in the heard stream.
    if (heard.slice(Math.max(0, hIdx), hIdx + 3).includes(p.e)) { matched.push(p.ei); continue; }

    const conf = p.h === null ? 1 : (confOf.get(hIdx) ?? 0);
    if (conf < MIN_CONFIDENCE) { matched.push(p.ei); continue; }

    miscues.push({
      index: p.ei,
      word: expected[p.ei],
      kind: p.h === null ? 'omission' : 'substitution'
    });
  }

  return { miscues, matched, silent: false };
}

// Nearest expected index at or before pair k, for locating a floating insertion.
function prevExpectedIndex(pairs, k) {
  for (let i = k; i >= 0; i--) if (pairs[i].ei !== null) return pairs[i].ei;
  return -1;
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `node --test`
Expected: PASS, all 16 classification tests.

If the self-correction or repetition tests fail, adjust the lookahead window — never by making the classifier stricter. The over-absorption guard test must keep passing; if it breaks, absorption is too aggressive.

- [ ] **Step 5: Commit**

```bash
git add miscue.js tests/miscue.test.js
git commit -m "feat: add miscue alignment and classification"
```

---

### Task 5: Vendor Vosk and add capability detection

**Files:**
- Create: `vendor/vosk.js` (downloaded, 5.8 MB)
- Create: `vendor/README.md`
- Create: `listen.js`

**Interfaces:**
- Consumes: nothing.
- Produces:
  - `export const listenSupported: boolean`
  - `export function quotaVerdict(estimate: object|null): 'persistent'|'insufficient'` — pure, testable
  - `export async function modelCacheState(): Promise<'persistent'|'ephemeral'|'insufficient'>`

- [ ] **Step 1: Vendor the library**

```bash
mkdir -p vendor
cd /tmp && npm pack vosk-browser@0.0.8 >/dev/null && tar xzf vosk-browser-0.0.8.tgz
cp /tmp/package/dist/vosk.js "$OLDPWD/vendor/vosk.js"
cd "$OLDPWD" && ls -lh vendor/vosk.js   # expect ~5.8M
```

Create `vendor/README.md`:

```markdown
# vendor/

`vosk.js` — vosk-browser 0.0.8, Apache-2.0, from https://github.com/ccoreilly/vosk-browser

Vendored rather than loaded from a CDN because the app makes no third-party requests, and
because the package is pre-1.0 with a single maintainer. It is one self-contained UMD file
with the Kaldi WASM base64-embedded, so there is no separate `.wasm` to fetch.

To update: `npm pack vosk-browser@<version>` and copy `package/dist/vosk.js` here.
```

- [ ] **Step 2: Write capability detection**

Create `listen.js`:

```js
/* listen.js — the input mirror of speech.js.
 * Sole owner of Vosk, the microphone, and the voice model. No other file
 * references vosk-browser.
 *
 * The library is UMD (not ESM, despite its package.json "module" field), so it
 * is loaded via an injected script tag and read off the global.
 */

const MODEL_URL = 'models/vosk-model-small-en-us-0.15.tar.gz';
const MODEL_BYTES_NEEDED = 75 * 1024 * 1024;   // ~68 MB extracted, plus headroom

/* Tier 1: can we listen at all? Capability checks only — never user-agent. */
export const listenSupported = typeof window !== 'undefined'
  && window.isSecureContext                      // getUserMedia requires it
  && typeof WebAssembly === 'object'
  && !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
  && !!(window.AudioContext || window.webkitAudioContext);

/* Tier 2: can we keep the model between sessions?
 * Vosk caches into IndexedDB via its Emscripten FS. Safari exposes IndexedDB in
 * private browsing and then fails on write, so a bare presence check is not
 * enough — we must actually write. */
export async function modelCacheState() {
  if (!('indexedDB' in window)) return 'ephemeral';

  const canWrite = await new Promise(resolve => {
    let req;
    try { req = indexedDB.open('rp-probe', 1); } catch (e) { resolve(false); return; }
    req.onupgradeneeded = () => req.result.createObjectStore('t');
    req.onerror = () => resolve(false);
    req.onsuccess = () => {
      try {
        const tx = req.result.transaction('t', 'readwrite');
        tx.objectStore('t').put(1, 'k');
        tx.oncomplete = () => { req.result.close(); indexedDB.deleteDatabase('rp-probe'); resolve(true); };
        tx.onerror = () => { req.result.close(); resolve(false); };
      } catch (e) { resolve(false); }
    };
  });
  if (!canWrite) return 'ephemeral';

  let est = null;
  if (navigator.storage && navigator.storage.estimate) {
    try { est = await navigator.storage.estimate(); } catch (e) { est = null; }
  }
  return quotaVerdict(est);
}

/* Pure quota decision, split out so it can be unit-tested.
 *
 * Unknown quota must NOT be treated as insufficient. estimate() can be absent,
 * throw, or return partial data with quota/usage undefined. Reporting
 * 'insufficient' in those cases would disable the feature on a perfectly capable
 * device and tell the parent they are out of storage. Proceed optimistically; a
 * genuine shortage then surfaces as a download failure, which is recoverable via
 * the existing listenState error path. Failing open is the correct direction here.
 */
export function quotaVerdict(estimate) {
  if (!estimate) return 'persistent';
  const { quota, usage } = estimate;
  if (typeof quota !== 'number' || typeof usage !== 'number') return 'persistent';
  return quota - usage < MODEL_BYTES_NEEDED ? 'insufficient' : 'persistent';
}

export { MODEL_URL, MODEL_BYTES_NEEDED };
```

- [ ] **Step 3: Write tests for the quota decision**

This logic already regressed once: `{ quota = 0, usage = 0 }` destructuring defaults fire on
`undefined`, so partial data computed `0 - 0 < 75MB` and wrongly reported `insufficient`,
disabling the feature on capable devices. These tests lock the failure direction.

Create `tests/quota.test.js`:

```js
import { test } from 'node:test';
import assert from 'node:assert';
import { quotaVerdict } from '../listen.js';

test('ample free space is persistent', () => {
  assert.equal(quotaVerdict({ quota: 500e6, usage: 10e6 }), 'persistent');
});

test('genuinely too little space is insufficient', () => {
  assert.equal(quotaVerdict({ quota: 80e6, usage: 60e6 }), 'insufficient');
});

// The regression guards: unknown must never read as insufficient.
test('a missing estimate is persistent, not insufficient', () => {
  assert.equal(quotaVerdict(null), 'persistent');
});

test('an empty estimate object is persistent, not insufficient', () => {
  assert.equal(quotaVerdict({}), 'persistent');
});

test('partial estimate data is persistent, not insufficient', () => {
  assert.equal(quotaVerdict({ quota: 500e6 }), 'persistent');
  assert.equal(quotaVerdict({ usage: 10e6 }), 'persistent');
});
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `node --test`
Expected: PASS. `listen.js` imports cleanly under Node because every browser API is reached
only behind a `typeof window !== 'undefined'` guard or inside a function body.

- [ ] **Step 5: Verify the module exports correctly**

Run: `node --input-type=module -e "import('./listen.js').then(m => console.log(Object.keys(m).sort().join(',')))"`
Expected: includes `listenSupported,modelCacheState,quotaVerdict`. `listenSupported` is `false` under Node (no `window`) — that is correct.

- [ ] **Step 6: Commit**

```bash
git add vendor/ listen.js tests/quota.test.js
git commit -m "feat: vendor vosk-browser and add listen capability detection"
```

---

### Task 6: Model loading and per-line recognition

**Files:**
- Modify: `listen.js`

**Interfaces:**
- Consumes: `listenSupported`, `MODEL_URL` from Task 5; `grammarWords` from Task 3.
- Produces:
  - `export async function loadModel(onProgress: (pct:number)=>void): Promise<void>`
  - `export async function listenForLine(words: string[], opts: { onPartial?: (text:string)=>void, onResult: (heard: Array<{word:string,conf:number}>) => void }): Promise<void>`
  - `export function stopListening(): void`

- [ ] **Step 1: Implement model loading and recognition**

Append to `listen.js`:

```js
/* ---------- library + model loading ---------- */

let voskLib = null;      // the UMD global once loaded
let model = null;        // loaded Model instance
let recognizer = null;   // per-line; grammar is constructor-only so it is recreated
let stream = null, audioCtx = null, node = null, source = null;

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
    if (!voskLib) throw new Error('vosk global not found after loading vendor/vosk.js');
  }
  // createModel reports no byte progress, so drive an indeterminate bar instead.
  if (onProgress) onProgress(0);
  model = await voskLib.createModel(MODEL_URL);
  if (onProgress) onProgress(100);
}

/* ---------- recognition ---------- */

// Grammar is constructor-only in vosk-browser, so each line needs a fresh
// recognizer and the previous one must be removed.
function makeRecognizer(sampleRate, words) {
  if (recognizer) { try { recognizer.remove(); } catch (e) { /* already gone */ } recognizer = null; }
  const grammar = JSON.stringify([...new Set(words), '[unk]']);
  const r = new model.KaldiRecognizer(sampleRate, grammar);
  r.setWords(true);
  return r;
}

export async function listenForLine(words, { onPartial, onResult } = {}) {
  if (!model) throw new Error('loadModel() must resolve before listening');

  stream = await navigator.mediaDevices.getUserMedia({
    audio: { echoCancellation: true, noiseSuppression: true, channelCount: 1 }
  });
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  recognizer = makeRecognizer(audioCtx.sampleRate, words);

  recognizer.on('partialresult', msg => {
    if (onPartial) onPartial(msg.result.partial || '');
  });
  recognizer.on('result', msg => {
    const heard = (msg.result.result || []).map(w => ({ word: w.word, conf: w.conf }));
    if (onResult) onResult(heard);
  });

  source = audioCtx.createMediaStreamSource(stream);
  node = audioCtx.createScriptProcessor(4096, 1, 1);
  node.onaudioprocess = e => {
    try { recognizer.acceptWaveform(e.inputBuffer); } catch (err) { /* recognizer torn down */ }
  };
  source.connect(node);
  node.connect(audioCtx.destination);
}

export function stopListening() {
  if (node) { node.disconnect(); node.onaudioprocess = null; node = null; }
  if (source) { source.disconnect(); source = null; }
  if (stream) { stream.getTracks().forEach(t => t.stop()); stream = null; }
  if (audioCtx) { audioCtx.close().catch(() => {}); audioCtx = null; }
  if (recognizer) {
    try { recognizer.retrieveFinalResult(); } catch (e) { /* nothing pending */ }
  }
}
```

- [ ] **Step 2: Verify the module still parses**

Run: `node --input-type=module -e "import('./listen.js').then(m => console.log(Object.keys(m).sort().join(',')))"`
Expected: includes `listenForLine,listenSupported,loadModel,modelCacheState,quotaVerdict,stopListening`

- [ ] **Step 3: Manual browser check**

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`, then in the console:

```js
const L = await import('/listen.js');
console.log(L.listenSupported, await L.modelCacheState());
await L.loadModel(p => console.log('progress', p));
await L.listenForLine(['the','cat','sat'], { onResult: h => console.log(h) });
```

Expected: `true 'persistent'`, then the model downloads (~39 MB, slow the first time), then speaking "the cat sat" logs words with `conf` values. Reload and confirm the second load is fast — that proves IndexedDB caching works.

- [ ] **Step 4: Commit**

```bash
git add listen.js
git commit -m "feat: add model loading and per-line grammar-constrained recognition"
```

---

### Task 7: Practice state, persistence, and reset

**Files:**
- Modify: `app.js:23-58` (state, `loadProgress`, `saveProgress`), `app.js:763-769` (`reset`)

**Interfaces:**
- Consumes: nothing.
- Produces: `state.practice`, `state.practiceStuck`, `state.practiceWords`, and the transient practice slice, all readable by Tasks 8–10.

- [ ] **Step 1: Add state fields**

In `app.js`, inside the `state` object after `readAloud: true`:

```js
  practice: false,            // parent toggle: child reads aloud (default off)
  practiceStuck: 'help',      // 'help' | 'grownup' — what happens after 3 failed attempts
  practiceWords: {},          // { word: { missed, invented, last } } — words-to-practice list
  // transient practice state
  lines: [], lineIndex: 0, lineAttempt: 0, lineWords: [],
  listenState: 'idle',        // idle|loading|ready|listening|error
  modelPct: 0, cacheState: null
```

- [ ] **Step 2: Persist and restore them**

In `loadProgress`, after the `readAloud` line:

```js
      if (typeof d.practice === 'boolean') state.practice = d.practice;
      if (d.practiceStuck === 'help' || d.practiceStuck === 'grownup') state.practiceStuck = d.practiceStuck;
      state.practiceWords = d.practiceWords || {};
```

In `saveProgress`, extend the serialized object with:

```js
practice: state.practice, practiceStuck: state.practiceStuck, practiceWords: state.practiceWords
```

- [ ] **Step 3: Update reset**

`reset()` clears progress but deliberately leaves `readAloud` alone. Practice words are progress; the two practice settings are parent settings. Replace the body of `reset()`:

```js
function reset() {
  if (!window.confirm('Start over? This clears all stars, berries, shop items, practice words, and stats for every pet on this device.')) return;
  state.berries = {}; state.records = {}; state.stats = {};
  state.earned = {}; state.owned = {}; state.equipped = {};
  state.practiceWords = {};          // progress data — cleared
  // state.practice / state.practiceStuck are parent settings — preserved, like readAloud
  saveProgress();
  render();
}
```

- [ ] **Step 4: Verify backward compatibility manually**

Serve the app, open it with an existing save in `localStorage`, and confirm in the console:

```js
JSON.parse(localStorage.getItem('reading-patch-v1'))
```

Expected: old keys intact; `practice` is `false`; the app looks and behaves exactly as before.

- [ ] **Step 5: Commit**

```bash
git add app.js
git commit -m "feat: add practice state, persistence, and reset handling"
```

---

### Task 8: Dashboard controls

**Files:**
- Modify: `app.js` (`viewDashboard` around the read-aloud panel at `app.js:587-597`; dispatcher at `app.js:789-812`)
- Modify: `styles.css`

**Interfaces:**
- Consumes: state from Task 7; `listenSupported`, `modelCacheState` from Task 5.
- Produces: dispatcher actions `togglePractice`, `setStuck`.

- [ ] **Step 1: Import the capability flags**

At the top of `app.js`, alongside the existing `speech.js` import:

```js
import { listenSupported, modelCacheState } from './listen.js';
```

- [ ] **Step 2: Relabel the existing toggle and add the new panels**

Change the existing read-aloud panel title from `Read-aloud` to `Read to me`. Then insert immediately after that panel:

```js
      <div class="panel setting-panel">
        <div>
          <div class="panel-title" style="margin-bottom:2px">Reading practice</div>
          <div class="panel-sub" style="margin-bottom:0">${listenSupported
            ? 'Your child reads each story out loud, one line at a time. The app listens and helps with words they miss. Everything is heard on this device only.'
            : 'This browser cannot listen — reading practice is unavailable.'}${
            state.practice && state.cacheState === 'ephemeral'
              ? ' <strong>This browser cannot save the voice model, so it downloads about 39 MB each session.</strong>' : ''}</div>
        </div>
        <button class="toggle${state.practice ? ' on' : ''}" data-action="togglePractice" role="switch" aria-checked="${state.practice}"${listenSupported && state.cacheState !== 'insufficient' ? '' : ' disabled'}>
          <span class="toggle-track"><span class="toggle-knob"></span></span><span class="toggle-label">${state.practice ? 'On' : 'Off'}</span>
        </button>
      </div>
      ${state.practice ? `
      <div class="panel">
        <div class="panel-title">When your child gets stuck</div>
        <div class="panel-sub">After three tries on the same line.</div>
        <div class="level-segs">
          <button class="level-seg${state.practiceStuck === 'help' ? ' active' : ''}" data-action="setStuck" data-stuck="help">Help me and move on</button>
          <button class="level-seg${state.practiceStuck === 'grownup' ? ' active' : ''}" data-action="setStuck" data-stuck="grownup">A grown-up unlocks it</button>
        </div>
      </div>` : ''}
```

- [ ] **Step 3: Add dispatcher cases**

In the `switch` in the click listener, beside `toggleReadAloud`:

```js
    case 'togglePractice': state.practice = !state.practice; saveProgress(); render(); break;
    case 'setStuck': state.practiceStuck = el.dataset.stuck; saveProgress(); render(); break;
```

- [ ] **Step 4: Probe the cache state once at startup**

At the bottom of `app.js`, replace the final `render();` with:

```js
loadProgress();
render();
// modelCacheState() is async (IndexedDB probe + storage.estimate), so cacheState
// stays null through the first render. The dashboard checks above are written to
// treat null as "fine so far" — the toggle is enabled and no warning shows until
// the probe actually reports a problem. Do not "tidy" those into truthy checks:
// that would disable the feature during the probe on every single load.
if (listenSupported) {
  modelCacheState().then(s => { state.cacheState = s; if (state.screen === 'dashboard') render(); });
}
```

(Remove the now-duplicated `loadProgress(); render();` above it.)

- [ ] **Step 5: Manual verification**

Serve the app, open the dashboard through the multiplication gate. Expected: "Read to me" and "Reading practice" both present and clearly distinct; toggling Reading practice on reveals the stuck-behaviour segmented control; selection persists across reload.

- [ ] **Step 6: Commit**

```bash
git add app.js styles.css
git commit -m "feat: add reading practice controls to parent dashboard"
```

---

### Task 9: The practice read screen

**Files:**
- Modify: `app.js` (`viewRead` at `app.js:244-268`, render map at `app.js:649`, dispatcher)
- Modify: `styles.css`

**Interfaces:**
- Consumes: everything from Tasks 2–8.
- Produces: dispatcher actions `startPractice`, `retryLine`, `unlockLine`; `state.lines` populated on story open.

- [ ] **Step 1: Segment on story open**

Import at the top of `app.js`:

```js
import { segment, grammarWords, classify, isUnscoreable, normalize } from './miscue.js';
import { loadModel, listenForLine, stopListening } from './listen.js';
```

In `openStory`, extend the `Object.assign` with:

```js
    lines: [], lineIndex: 0, lineAttempt: 0, lineWords: [], listenState: 'idle', modelPct: 0
```

and immediately after it:

```js
  if (state.practice && listenSupported) state.lines = segment(passage().paras);
```

- [ ] **Step 2: Render the practice screen**

Add `viewPractice()` before `viewRead`, and branch at the top of `viewRead`:

```js
function viewRead() {
  if (state.practice && listenSupported && state.lines.length) return viewPractice();
  /* ...existing body unchanged... */
}

function viewPractice() {
  const c = cat();
  const p = passage();
  const done = state.lines.slice(0, state.lineIndex);
  const current = state.lines[state.lineIndex] || '';
  const upcoming = state.lines.slice(state.lineIndex + 1);

  const wordSpans = current.split(/\s+/).map((w, i) => {
    const st = state.lineWords[i] || 'pending';
    return `<span class="pw pw-${st}">${esc(w)}</span>`;
  }).join(' ');

  let panel = '';
  if (state.listenState === 'idle') {
    panel = `<button class="btn-3d btn-primary" data-action="startPractice">Start reading</button>`;
  } else if (state.listenState === 'loading') {
    panel = `<div class="practice-note">Getting ready to listen… ${state.modelPct ? state.modelPct + '%' : ''}</div>`;
  } else if (state.listenState === 'error') {
    panel = `<div class="practice-note">The microphone isn’t available.
      <button class="link" data-action="skipPractice">Read it on your own instead</button></div>`;
  } else if (state.listenState === 'listening') {
    panel = `<div class="practice-note listening">● Listening… read the line out loud</div>`;
  }

  const stuck = state.lineAttempt >= 3
    ? (state.practiceStuck === 'grownup'
        ? `<button class="next-btn" data-action="unlockLine">Need help? Ask a grown-up</button>`
        : `<button class="next-btn" data-action="unlockLine">Let’s do this one together</button>`)
    : '';

  return `
    <div class="screen" style="${catVars(c)}--psize:${state.textSize}px;">
      <div class="read-wrap">
        <div class="read-topbar">
          <button class="back-btn" data-action="backCat">&larr; Stories</button>
          <div class="text-ctrls">
            <button class="text-btn" data-action="textDown" title="Smaller text">A-</button>
            <button class="text-btn" data-action="textUp" title="Bigger text">A+</button>
          </div>
        </div>
        <div class="read-card">
          <div class="read-meta">${levelBadge(p.level)}</div>
          <h1 class="read-title">${esc(p.title)}</h1>
          <div class="practice-done">${done.map(l => `<span>${esc(l)}</span>`).join(' ')}</div>
          <div class="practice-current">${wordSpans}</div>
          <div class="practice-upcoming">${upcoming.map(l => `<span>${esc(l)}</span>`).join(' ')}</div>
        </div>
        <div class="center">${panel}${stuck}</div>
      </div>
    </div>`;
}
```

Note the "Listen" button is deliberately absent — it would be a one-tap bypass.

- [ ] **Step 3: Wire the practice loop**

Add these functions near the other actions in `app.js`:

```js
/* Record a miscue against the words-to-practice list. */
function recordMiscue(word, kind) {
  const w = state.practiceWords[word] || (state.practiceWords[word] = { missed: 0, invented: 0, last: 0 });
  if (kind === 'omission') w.missed++; else w.invented++;
  w.last = Date.now();
}

/* A correct read decrements the count so mastered words drop off the list. */
function creditWord(word) {
  const w = state.practiceWords[word];
  if (!w) return;
  if (w.missed > 0) w.missed--; else if (w.invented > 0) w.invented--;
  if (w.missed <= 0 && w.invented <= 0) delete state.practiceWords[word];
}

async function startPractice() {
  state.listenState = 'loading'; render();
  try {
    await loadModel(pct => { state.modelPct = pct; render(); });
  } catch (e) {
    state.listenState = 'error'; render(); return;
  }
  listenLine();
}

async function listenLine() {
  const line = state.lines[state.lineIndex];
  const words = grammarWords(line);
  state.lineWords = []; state.listenState = 'listening'; render();

  // A line with nothing the model can represent passes without listening.
  if (!words.length) { advanceLine(); return; }

  try {
    await listenForLine(words, { onResult: heard => handleHeard(heard) });
  } catch (e) {
    state.listenState = 'error'; render();
  }
}

function handleHeard(heard) {
  stopListening();
  const line = state.lines[state.lineIndex];
  const expected = line.split(/\s+/);
  const res = classify(expected, heard);

  if (res.silent) { listenLine(); return; }   // silence never burns an attempt

  state.lineWords = expected.map((w, i) =>
    res.miscues.some(m => m.index === i) ? 'miss'
      : (res.matched.includes(i) || isUnscoreable(w) ? 'match' : 'pending'));

  if (!res.miscues.length) {
    expected.forEach(w => creditWord(normalize(w)));
    saveProgress();
    advanceLine();
    return;
  }

  const first = res.miscues[0];
  recordMiscue(first.word, first.kind);
  saveProgress();
  state.lineAttempt++;
  render();
  speak(first.word, { onEnd: () => { if (state.lineAttempt < 3) listenLine(); } });
}

function advanceLine() {
  state.lineIndex++;
  state.lineAttempt = 0;
  state.lineWords = [];
  if (state.lineIndex >= state.lines.length) {
    stopListening();
    state.listenState = 'idle';
    state.quizStarted = true;
    state.qStart = Date.now();
    state.screen = 'quiz';
    render();
    return;
  }
  listenLine();
}
```

- [ ] **Step 4: Add dispatcher cases**

```js
    case 'startPractice': startPractice(); break;
    case 'skipPractice': state.lines = []; state.listenState = 'idle'; stopListening(); render(); break;
    case 'unlockLine':
      if (state.practiceStuck === 'grownup' && !state.gateOpen) { state.gate = makeGate(); state.screen = 'dashboard'; render(); break; }
      stopListening();
      speak(state.lines[state.lineIndex], { onEnd: () => advanceLine() });
      break;
```

- [ ] **Step 5: Stop listening on every screen change**

In `render()`, beside the existing `stopSpeech()`:

```js
  if (state.screen !== 'read') stopListening();
```

- [ ] **Step 6: Manual verification**

With practice on, open a story. Expected: "Start reading", then mic permission, then the first line highlighted and later lines dimmed; reading it correctly advances; deliberately skipping a word tints it amber and the app speaks it; three failures reveal the stuck button; finishing the last line goes to the quiz. Open `my-backwards` and confirm the `YTRAP AZZIP` line passes without blocking.

- [ ] **Step 7: Commit**

```bash
git add app.js styles.css
git commit -m "feat: add sentence-by-sentence reading practice screen"
```

---

### Task 10: Words-to-practice panel and About copy

**Files:**
- Modify: `app.js` (`viewDashboard`, `viewAbout` at `app.js:619-643`)
- Modify: `styles.css`

**Interfaces:**
- Consumes: `state.practiceWords` from Task 7.
- Produces: dispatcher action `clearPracticeWords`.

- [ ] **Step 1: Add the panel**

In `viewDashboard`, after the comprehension-by-skill panel:

```js
      <div class="panel">
        <div class="panel-title">Words to practice</div>
        <div class="panel-sub">Words your child missed while reading aloud. They drop off this list once read correctly.</div>
        ${(() => {
          const ws = Object.entries(state.practiceWords)
            .map(([w, v]) => [w, v.missed + v.invented])
            .filter(([, n]) => n > 0)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 12);
          if (!ws.length) return `<div class="season-empty">No practice words yet — turn on Reading practice and read a story.</div>`;
          return `<div class="word-chips">${ws.map(([w, n]) =>
            `<span class="word-chip">${esc(w)}<span class="word-n">${n}</span></span>`).join('')}</div>
            <button class="link" data-action="clearPracticeWords">Clear this list</button>`;
        })()}
      </div>
```

- [ ] **Step 2: Add the dispatcher case**

```js
    case 'clearPracticeWords': state.practiceWords = {}; saveProgress(); render(); break;
```

- [ ] **Step 3: Disclose the microphone on the About page**

In `viewAbout`, inside the Privacy panel, after the "Nothing is sent to a server" bullet:

```js
        <div class="panel-sub">&bull;&nbsp; When Reading practice is on, the app listens through the microphone to follow along. The listening happens entirely on this device &mdash; the recording is never uploaded, stored, or sent anywhere, and it is discarded as soon as the line is checked.</div>
```

- [ ] **Step 4: Add styles**

Append to `styles.css`:

```css
/* ---------- reading practice ---------- */
.practice-done { color: var(--faint); font-size: 15px; line-height: 1.7; margin-bottom: 10px; }
.practice-current { font-size: var(--psize); font-weight: 700; line-height: 1.9; margin: 10px 0; }
.practice-upcoming { color: #C9C2DC; font-size: 15px; line-height: 1.7; margin-top: 10px; }
.pw { padding: 1px 2px; border-radius: 5px; }
.pw-match { color: #2F7A55; background: #E7F5EE; }
.pw-miss { color: #A86E1F; background: #FFF4DC; }
.practice-note { font-weight: 700; color: var(--muted); margin: 12px 0; }
.practice-note.listening { color: #C04B3C; }
.word-chips { display: flex; flex-wrap: wrap; gap: 8px; margin: 10px 0; }
.word-chip { background: var(--track); border: 2px solid var(--border); border-radius: 999px;
  padding: 5px 12px; font-weight: 700; display: inline-flex; gap: 7px; align-items: center; }
.word-n { color: var(--faint); font-size: 13px; }
```

- [ ] **Step 5: Manual verification**

Miss a word deliberately, return to the dashboard. Expected: the word appears with a count; reading it correctly later removes it; "Clear this list" empties it; the About page shows the microphone bullet.

- [ ] **Step 6: Run the full test suite**

Run: `node --test`
Expected: all tests pass.

- [ ] **Step 7: Commit**

```bash
git add app.js styles.css
git commit -m "feat: add words-to-practice panel and microphone disclosure"
```

---

### Task 11: Documentation

**Files:**
- Modify: `CLAUDE.md`, `README.md`, `DEVELOPER_HANDOFF.md`

- [ ] **Step 1: Update CLAUDE.md**

Add `miscue.js`, `listen.js`, `vendor/`, `models/`, `data/`, and `tools/` to the "Key files" list. Add a "Testing" section: `node --test` from the repo root; note that `node --test tests/` does not work. Add Reading Practice to the Parent Dashboard section. Correct the stale "10 stories each" claim to the real counts (15–19 per world, 99 total).

- [ ] **Step 2: Update README.md**

Correct "10 passages" in the opening paragraph. Note that the repo now contains a ~39 MB model and a 5.8 MB vendored library, so a clone is large.

- [ ] **Step 3: Update DEVELOPER_HANDOFF.md**

Correct "N/10 stories" at line 89 and "10 stories" at line 94. Add a Reading Practice section pointing at the spec.

- [ ] **Step 4: Commit**

```bash
git add CLAUDE.md README.md DEVELOPER_HANDOFF.md
git commit -m "docs: document reading practice and correct story counts"
```

---

## Manual test checklist

`listen.js` cannot be meaningfully unit-tested (WASM plus a live microphone), so verify by hand before calling the feature done:

- [ ] Practice off: app behaves exactly as before, no model download, no mic prompt.
- [ ] Mic permission granted → practice starts.
- [ ] Mic permission denied → clear message plus "Read it on your own instead" works.
- [ ] First run shows download progress; reload is fast (IndexedDB cache hit).
- [ ] A correct read advances to the next line.
- [ ] A skipped word is caught, tinted amber, and spoken.
- [ ] An invented word is caught.
- [ ] A self-correction is **not** flagged.
- [ ] Silence does not burn an attempt.
- [ ] Stuck setting `help`: after 3 tries the app reads the line and advances.
- [ ] Stuck setting `grownup`: after 3 tries the multiplication gate appears.
- [ ] Story `my-backwards` passes the `YTRAP AZZIP` line without blocking.
- [ ] Story `tamales` passes `Abuela` and `Despacio` without blocking.
- [ ] Finishing the last line goes to the quiz, which scores normally.
- [ ] Reset clears practice words but preserves both practice settings.
- [ ] An unsupported browser disables the toggle with a reason.

Storage capability states — the `quotaVerdict` unit tests cover the decision, but the
browser wiring around it needs eyes:

- [ ] **Normal browser** → `modelCacheState()` returns `persistent`; no warning shown.
- [ ] **Safari private browsing** → returns `ephemeral`; toggle still enabled and the
      dashboard shows the "re-downloads about 39 MB each session" warning.
- [ ] **Unknown quota** → returns `persistent`, NOT `insufficient`. Simulate in the console
      before loading the dashboard:
      ```js
      navigator.storage.estimate = async () => ({});
      ```
      The feature must stay available. If it disables itself with "not enough storage",
      the fail-closed bug has returned.
- [ ] **Genuinely full device** → returns `insufficient`; toggle disabled with the
      "not enough storage" reason, which is distinct from "not supported".

## Outstanding — requires the user

**The confidence threshold (`MIN_CONFIDENCE` in `miscue.js`) is untuned.** Tuning needs recordings of a real child reading: 8–10 lines with deliberate errors (a skipped word, a substituted word, a self-correction) plus several clean reads. Tune so clean reads never flag; accept missing some real errors. Do not raise it above the point where a clean read is ever marked wrong.

**On-device performance is unmeasured.** The model reports 0.11×RT on desktop, but this is WASM on a child's tablet. Measure once a prototype runs.
