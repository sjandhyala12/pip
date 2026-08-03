# Spike Findings — vosk-browser viability

Date: 2026-08-02
Gate for: `2026-08-02-read-aloud-practice-design.md`

**Verdict: the design is viable. Proceed to planning.** Both core assumptions hold. Five
findings change details of the spec; one is a correctness issue that would have shipped a
permanently-stuck screen.

Method: inspected `vosk-browser@0.0.8` from npm and `vosk-model-small-en-us-0.15` from
alphacephei directly, rather than relying on documentation.

---

## 1. Grammar-constrained recognition — CONFIRMED

Verified at three levels:

**API surface** (`dist/model.d.ts`, `dist/interfaces.d.ts`):
```ts
new (sampleRate: number, grammar?: string)
interface ClientMessageCreateRecognizer { grammar?: string }
```

**Compiled binding** — the embedded WASM exports `makeRecognizerWithGrammar` and logs
"Creating model with grammar". Kaldi's full dynamic-grammar machinery is compiled in:
`grammar-fst.cc`, `GrammarFstTpl`, `PrepareForGrammarFst`, `grammar-context-fst.cc`.

**Model graph type** — this was the real risk, since grammar requires a decomposed graph
rather than a static one. The model ships:

```
graph/Gr.fst     24.0 MB
graph/HCLr.fst   22.4 MB
graph/HCLG.fst   ← absent
```

`HCLr.fst` + `Gr.fst` with **no** `HCLG.fst` is exactly the dynamic-graph layout grammar
requires. Confirmed.

## 2. `[unk]` token — CONFIRMED

Present in the model's symbol table at index 39, in the special-symbol block alongside
`<eps>` and `!SIL`. The invented-word detection mechanism the design depends on is real.

## 3. Per-word confidence — CONFIRMED

```ts
result: Array<{ conf: number; start: number; end: number; word: string }>
```

Enabled via `setWords(true)`. Gives confidence, word, and timings — everything the
confidence gate and word-level highlighting need. Partial results are also available
(`ServerMessagePartialResult`) for live green-tinting as the child reads.

---

## 4. NEW — Out-of-vocabulary words will permanently block two stories

Corpus vocabulary checked against the model's 152,098-symbol table.

```
distinct passage words : 2,353
out-of-vocabulary      :    20  (0.8% of types, 0.24% of tokens)
```

Coverage is excellent, but the 20 failures matter because a word absent from the model
vocabulary **cannot be put in a grammar** — the child can never be scored correct on it,
and under "must read correctly to advance" that means **permanently stuck**.

They fall into three groups:

**Possessives — 14 words, trivially fixable.** `mateo's`, `beaver's`, `okafor's`, etc. All
14 base forms are in the vocabulary, and `'s` exists as a standalone token. Splitting
`X's` → `X` + `'s` during grammar construction resolves every one.

**Non-English — 3 words.** `abuela`, `despacio` (story `tamales`), `churro` (a puppy's name
in `my-mailbox`). An English acoustic model cannot recognize these.

**Deliberate nonsense — 3 words.** `plip` (onomatopoeia in `fb-crow`) and, decisively,
`ytrap` and `azzip` in the story `my-backwards`:

> The writing looked like alien code: "YTRAP AZZIP."

That's "PARTY PIZZA" reversed — the entire premise of the story. No speech recognizer will
ever match it, and no child can be scored correct on it. **As specified, `my-backwards`
would trap a child on that line forever**, with the `grownup` stuck-setting requiring an
adult to unlock a line that is unlockable by design.

**Required design change:** at segmentation time, mark words absent from the model
vocabulary as *unscoreable*. Unscoreable words auto-pass — never flagged as omissions or
inventions, never spoken as corrections. The full list is 6 words after possessive
splitting, and it is computable from the corpus, so it can be a precomputed constant
rather than a runtime vocabulary lookup.

## 5. NEW — Size is larger than the spec assumed

| | |
|---|---|
| Model download (zipped) | **39.2 MiB** |
| Model unpacked on disk | **68 MB** |
| `vosk-browser` library | **5.8 MB** |
| **First-run total** | **~45 MB download, ~74 MB stored** |

The spec said "~40MB model." The download figure is close, but **68 MB of unpacked storage**
is the number that matters for Cache Storage quota, and it was not accounted for.

Worth verifying during implementation: Safari evicts script-writable storage after
extended non-use, which would force a 39 MB re-download. The app's existing progress data
already carries this exposure, but a few KB of lost progress and a 39 MB re-download are
very different user experiences. A "practice mode is downloading again" state may be needed.

## 6. NEW — The library is UMD, not ESM

`dist/vosk.js` ends with `exports.Model = Model; ... }));` — a UMD bundle, despite
`package.json` pointing `"module"` at it. This project uses native ES modules with no build
step (`<script type="module">`), so `listen.js` needs a small loader shim: inject the script
tag, then read the global. Minor, but it is real integration work rather than a plain
`import`.

Two related notes:

- The WASM is **base64-embedded** inside the JS (3.1 MB binary stored as 4.16 MB of base64).
  This is convenient — the library is one self-contained file with no separate `.wasm`
  fetch, so it can be vendored straight into the repo — but it costs ~33% download overhead
  and requires a main-thread base64 decode at startup.
- **Grammar is constructor-only.** There is no `setGrammar` on an existing recognizer, so
  each line needs a fresh `KaldiRecognizer` and a `remove()` of the previous one. The
  design's per-line grammar is still correct; the plan just needs the create/destroy cycle
  to be explicit.

## 7. NEW — Maintenance risk

`vosk-browser@0.0.8`, last published over a year ago, pre-1.0, single maintainer, one
dependency (`uuid`). Apache-2.0.

Mitigation is cheap and worth taking: **vendor `dist/vosk.js` into the repo** rather than
depending on a CDN. It is a single self-contained file, the license permits it, the project
already has no package manager, and it removes both a runtime third-party request and the
risk of the package disappearing.

---

## Reproducing the vocabulary list

The spec's regression test needs a checked-in vocabulary list, and extracting it is not
obvious: OpenFst stores its symbol table as bare `[int32 length][string][int64 id]` triples
with no delimiters, so `strings` glues adjacent entries together and produces false
negatives (`the` and `she` appear absent). A self-validating scan is required:

```js
// node extract-vocab.js  →  vocab.json   (from vosk-model-small-en-us-0.15/graph/Gr.fst)
const fs = require('fs');
const b = fs.readFileSync('vosk-model-small-en-us-0.15/graph/Gr.fst');
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
fs.writeFileSync('vocab.json', JSON.stringify([...vocab]));
```

Yields 152,098 unique symbols. Sanity-check any future run against `the`, `she`, `with`,
`[unk]` — if those come back absent, the parse has failed rather than the vocabulary being
small.

## Not done — needs you

**Confidence-threshold tuning could not be completed.** It requires recordings of a real
child reading, which I cannot produce. The threshold governs how readily the app tells a
child they got a word wrong, and per the design's guiding principle it should start
conservative and loosen only on evidence.

Recommended approach once there is a working prototype: record the child reading 8–10 lines
with deliberate errors (a skipped word, a substituted word, a self-correction) and a few
clean reads, then tune so clean reads never flag. Until then, implementation should use a
deliberately conservative starting value and make it a single named constant.

Performance was also not measured on-device. The model README reports 0.11×RT and 0.15 s
latency on desktop, which is comfortable, but this is a WASM build on a child's tablet —
worth measuring during the first working prototype.
