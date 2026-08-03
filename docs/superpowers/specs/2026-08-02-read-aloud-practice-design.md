# Reading Practice — Child Reads Aloud

## Purpose

Give parents an optional mode in which the child reads the passage aloud, one line at a
time, and the app listens. The goal is narrow: **catch skipped words and invented words**.
When the child misses or invents a word, the app pronounces that word and the child
re-reads the line. The child does not advance until the line is read correctly.

Default is **off**. With the toggle off the app behaves exactly as it does today.

## Guiding principle

> Wrongly correcting a child who read correctly is far more damaging than missing a real
> error.

Every threshold in this spec is biased toward letting real mistakes slide rather than
risking a false accusation. This asymmetry exists because mainstream speech recognition
performs measurably worse on 6–9-year-old voices than on adults, and worst of all on the
struggling readers this feature is meant to help. A system that tells a struggling reader
"wrong" when they read correctly is the most damaging failure this app could produce.

## Technology choice

**`vosk-browser`** (Kaldi compiled to WASM, `vosk-model-small-en-us-0.15`), running fully
on-device.

Measured cost of the feature, first run:

| | |
|---|---|
| Model download (zipped) | 39.2 MiB |
| Model unpacked on disk | 68 MB |
| Vendored `vosk.js` | 5.8 MB |
| **Total** | **~45 MB download, ~74 MB stored** |

The 68 MB unpacked figure is what matters for Cache Storage quota. Safari's eviction of
script-writable storage after extended non-use would force a 39 MB re-download, so the UI
needs a "downloading again" state rather than assuming the model is present once fetched.

Chosen over the two obvious alternatives for specific reasons:

- **Not the Web Speech API** (`SpeechRecognition`). Chrome's implementation streams audio
  to Google's servers; Safari does the same unless on-device dictation is active. That
  would send a child's voice off-device and contradict the privacy commitments on the
  About screen.
- **Not Whisper / `transformers.js`.** Whisper is an end-to-end generative model that
  produces fluent, plausible text. It silently repairs disfluencies and misreadings into
  correct prose and hallucinates on unclear audio. Pointed at a child misreading a
  sentence, it frequently returns the sentence read correctly — destroying the exact
  signal this feature measures.

Vosk is chosen for one capability: **grammar-constrained recognition**. The decoder is
restricted to the words of the current line plus an `[unk]` token. This yields two things:

1. **Accuracy improves sharply**, because the search space collapses from ~200k words to
   ~15. The recognizer no longer guesses *what* was said, only *which of these known
   words, in what order*. This substantially blunts the children's-voice problem.
2. **`[unk]` is the invented-word detector.** An utterance matching no expected word maps
   to `[unk]` rather than being snapped to the nearest real word. This is a designed-for
   mechanism, not an inference.

Omissions fall out of the same alignment pass: an expected word with no counterpart in the
transcript.

### Spike results (2026-08-02) — verified, design confirmed

Full detail in `2026-08-02-vosk-spike-findings.md`. Verified by direct inspection of
`vosk-browser@0.0.8` and `vosk-model-small-en-us-0.15`:

- **Grammar-constrained recognition: confirmed.** `makeRecognizerWithGrammar` is compiled
  into the WASM, Kaldi's `GrammarFst` machinery is present, and the model ships the
  dynamic graph it requires (`HCLr.fst` + `Gr.fst`, no `HCLG.fst`).
- **`[unk]` token: confirmed**, at symbol-table index 39 beside `<eps>` and `!SIL`.
- **Per-word confidence and timings: confirmed** — `{ conf, start, end, word }` via
  `setWords(true)`, plus partial results for live highlighting.

Three implementation constraints the spike surfaced:

- **Grammar is constructor-only.** No `setGrammar` exists, so each line requires a fresh
  `KaldiRecognizer` and a `remove()` of the previous one.
- **The library is UMD, not ESM**, despite its `"module"` field. `listen.js` must load it
  via an injected script tag and read the global, not a bare `import`.
- **Vendor `dist/vosk.js` into the repo.** It is one self-contained 5.8 MB file with the
  WASM base64-embedded (no separate `.wasm` fetch), Apache-2.0. The package is pre-1.0 with
  a single maintainer and no release in over a year; vendoring removes both the third-party
  runtime request and the dependency risk, and suits a project with no package manager.

Still outstanding, and **requires the user**: confidence-threshold tuning needs recordings
of a real child reading. Implementation starts with a conservative value as a single named
constant and tunes once a prototype exists. On-device performance is likewise unmeasured.

## Architecture

Two new modules, both narrow, following the existing one-file-one-purpose convention.

### `listen.js`

The input mirror of the existing `speech.js` (which wraps `speechSynthesis` for output).
Wraps `vosk-browser` entirely — model loading and caching, microphone capture, and
per-line grammar-constrained recognition. No other file references Vosk.

```js
export const listenSupported            // can we listen at all? (see capability tiers)
export function modelCacheState()       // → 'persistent' | 'ephemeral' | 'insufficient'
export function loadModel(onProgress)   // → Promise, caches in Cache Storage
export function listenForLine(words, { onPartial, onResult })
export function stopListening()
```

### `miscue.js`

Pure functions. No DOM, no async, no browser APIs — fully testable in Node.

```js
export function segment(paras)          // → array of practice lines
export function align(expected, heard)  // Needleman–Wunsch → aligned pairs
export function classify(alignment)     // → { miscues, matched }
```

### `app.js`

Gains a `viewPractice()` render path on the existing `read` screen, the new state slice,
and dispatcher cases. Views stay in `app.js` per current convention.

**Watch item:** `app.js` is already 821 lines and this pushes it past 1,000. No refactor
is proposed now, but if it becomes unwieldy during implementation, extracting the practice
view is the natural cut.

## Flow

```
child opens story (practice on)
  → [first time] "Start reading" tap → mic permission + model download w/ progress
  → passage segmented into lines (precomputed at import, like level stamping)
  → line 1 shown; later lines dimmed
  → recognizer built with grammar = line 1 words + [unk]
  → child reads; words tint green as they match
  → on final result: align heard vs expected → miscue list
       clean    → line locks, next line reveals, new grammar
       miscues  → app speaks the first missed word, tints it amber, child re-reads line
  → after 3 attempts → stuck-hatch fires per parent setting
  → last line done → existing "I'm ready for the questions!" CTA
  → quiz unchanged
```

### Consequences

- **The quiz is untouched.** Practice mode changes only how the passage is read. Scoring,
  berries, pet growth, and existing dashboard timings all keep working unchanged.
- **The existing "Listen" button is suppressed in practice mode** (`app.js:255`). It would
  otherwise be a one-tap bypass: press Listen, hear the sentence, repeat it back. The app
  still speaks individual words on a miss — that remains the help channel.

## Matching logic

### Segmentation → "lines"

Split `paras` on sentence-final punctuation, with:

- **Abbreviation guard** — `Mr.`, `Mrs.`, `Dr.`, `St.`, `Jr.`, `vs.`, `etc.` (9 occurrences
  in the current corpus) must not split mid-abbreviation.
- **Quote awareness** — a closing `"` or `"` after terminal punctuation stays attached to
  its sentence (12% of the corpus contains quotes).
- **Length cap** — any result over 15 words splits again at clause boundaries
  (comma-plus-conjunction, em-dash).

The length cap exists because the corpus p90 sentence is 19 words and the longest is 34
("When someone asked Edison if he felt like a failure, he said no — he had simply found
thousands of ways that did not work, and each one brought him closer to the answer.").
Requiring a second-grader to read 34 words in one unbroken take before advancing is a
wall. The child reads one **line** at a time, not one sentence.

Segmentation runs once at import, the same way passage levels are stamped in
`passages/index.js:47`.

### Normalization

Before comparison: lowercase; strip punctuation but keep internal apostrophes (`I'm`,
`don't`); em-dash becomes a word boundary; digits spelled out.

**Possessives split for grammar construction:** `X's` → `X` + `'s`. The spike found 14
possessives (`mateo's`, `beaver's`, `okafor's`, …) absent from the model vocabulary while
every base form and a standalone `'s` are present, so splitting resolves all of them.

### Unscoreable words

A word absent from the model's vocabulary **cannot be placed in a grammar**, so the child
can never be scored correct on it — which under "must read correctly to advance" means
permanently stuck. The spike found 6 such words after possessive splitting:

| Word | Story | Why |
|---|---|---|
| `abuela`, `despacio` | `tamales` | Spanish; English acoustic model |
| `churro` | `my-mailbox` | Spanish; a puppy's name |
| `plip` | `fb-crow` | Onomatopoeia |
| `ytrap`, `azzip` | `my-backwards` | "PARTY PIZZA" reversed — the story's premise |

`my-backwards` is the decisive case: its whole point is text that reads backwards, so no
recognizer can ever match it and no adult could unlock it either.

Words in this set are marked *unscoreable* at segmentation time. Because the corpus is
fixed, the set is a precomputed constant in `miscue.js`, not a runtime vocabulary lookup.

"Auto-pass" is not sufficient on its own: when the child actually *says* an unscoreable
word, Vosk emits `[unk]`, and that token must be explicitly absorbed or the classifier will
still raise a blocking invention. The full mechanism:

**Grammar construction.** Unscoreable words are omitted from the grammar (they cannot be
represented). Grammar = scoreable words of the line + `[unk]`.

**Alignment.** The expected sequence retains *all* words including unscoreable ones, so
order and on-screen positions stay intact. Each expected word carries a `scoreable` flag.

**Classification, applied in this order:**

1. An unscoreable expected position **always resolves to pass**, whatever aligned to it —
   gap, `[unk]`, or any word. It is never an omission and never a substitution.
2. A `[unk]` aligned to an unscoreable position is **consumed** by it and contributes
   nothing further.
3. A `[unk]` or unmatched heard token within one position of an unscoreable expected word
   is **also consumed**, since the child's utterance for an unknown word frequently aligns
   a slot off. This deliberately over-absorbs rather than risk a false invention.
4. Only then are the general rules below applied to what remains.

Step ordering matters: without it, rule 3 and the stray-`[unk]` rule under *What blocks
advancement* can reach opposite conclusions about the same token.

**Consequences.** Unscoreable words never tint amber, are never spoken as a correction, and
never reach the words-to-practice list. A line whose words are *all* unscoreable passes
without listening at all. Unscoreable words tint green with the rest of the line on success,
so nothing looks skipped to the child.

**Adding new content:** any story added later must be re-checked against the model
vocabulary, or a child could hit the same trap. A test asserts the unscoreable set covers
every OOV word in the corpus (see Testing).

### Alignment

**Needleman–Wunsch** global sequence alignment over the expected and heard word arrays.
Deterministic, ~40 lines, and handles insertions and deletions correctly — which naive
index-walking does not.

| Alignment pair | Meaning |
|---|---|
| expected ↔ same word | match |
| expected ↔ gap | **omission** |
| expected ↔ different word, or `[unk]` | **substitution / invention** |
| gap ↔ heard word | insertion |

### What blocks advancement

**Only omissions and substitutions.** Everything else is forgiven, following standard
running-record practice:

- **Self-corrections don't count.** A wrong word immediately followed by the right one is
  good reading behavior, not an error. Penalizing it would be actively harmful.
- **Repetitions don't count.** Children re-read phrases constantly while decoding.
- **Fillers** (`um`, `uh`) are dropped.
- **A stray `[unk]`** between two correctly matched words, with no adjacent omission, is
  almost always a breath or background noise. Non-blocking. (Applies only to tokens not
  already consumed by the unscoreable rules above.)

### Confidence gate

Vosk returns per-word confidence. A miscue is raised only when confidence clears a
threshold — the app corrects the child only when the recognizer is confident they got it
wrong. The threshold starts deliberately conservative and loosens only if genuine errors
are demonstrably slipping through.

**The threshold is untuned and must not be assumed validated.** The spike could not tune it
— that needs recordings of a real child reading, which do not exist yet. Implementation
ships a single named constant with a deliberately conservative value and a comment saying
so. Tuning happens against real recordings once a prototype exists, per the guiding
principle above.

### Correction behavior

- On a miss, the app speaks **the first** omission or substitution in reading order — one
  word, not all of them. A child who stumbled on three words gets one correction, not a
  pile-on.
- The child re-reads the whole line. This stays reasonable because lines are capped at 15
  words.
- **Silence never burns an attempt.** Nothing intelligible heard — too quiet, mic trouble,
  child not ready — produces "I didn't quite catch that, try again" and does *not* advance
  the attempt counter. A hardware problem must never push a child toward the stuck-hatch.
- After **3 attempts**, the stuck-hatch fires.

## State

Added to the existing `reading-patch-v1` localStorage blob:

```js
practice: false,         // parent toggle, default off
practiceStuck: 'help',   // 'help' | 'grownup'
practiceWords: {}        // { word: { missed, invented, last } }
```

Transient (in-memory only):

```js
lines: [], lineIndex: 0, lineAttempt: 0, lineWords: [],
listenState: 'idle',     // 'idle'|'loading'|'ready'|'listening'|'error'
modelPct: 0
```

`loadProgress` uses the existing defensive-default pattern (`d.x || {}`), so **existing
saves are fully backward compatible** — absent keys mean practice is off and the app
behaves exactly as it does today.

### Reset behavior

`reset()` (`app.js:763`) clears progress but deliberately leaves `readAloud` alone. That
establishes the rule: **progress data clears, parent settings survive.** Applying it:

| Field | On global Reset | Why |
|---|---|---|
| `practiceWords` | **cleared** | Progress data, like `stats` |
| `practice` | **preserved** | Parent setting, like `readAloud` |
| `practiceStuck` | **preserved** | Parent setting |

`reset()` must be updated to clear `practiceWords` — an implementer following the existing
line literally would leave stale practice data behind. The confirm dialog copy ("clears all
stars, berries, shop items, and stats") also needs "and practice words" added.

The words-to-practice panel's own "clear list" action clears `practiceWords` only, leaving
everything else untouched.

## Parent dashboard

### Two controls

Both reuse existing markup and CSS:

- **"Reading practice"** on/off — the `setting-panel` + `toggle` pattern at
  `app.js:587-597`.
- **"When stuck"** — the segmented control from the level filter (`app.js:201`, `.level-seg`),
  with options "Help me and move on" (default) and "A grown-up unlocks it". Renders only
  when practice is on.

### Words-to-practice panel

Lists the top ~12 words the child missed or invented, as chips with counts, most-frequent
first. Includes an empty state and a "clear list" action.

**The list is self-cleaning:** a word's count increments on a miss and **decrements when
the child later reads that word correctly**, dropping off the list at zero. Without this,
a word mastered weeks ago would sit on the parent's list forever and the panel would
slowly become worthless. Cheap to implement, since every correct read is already known.

## Capability tiers

Listening and *storing the model* are separate capabilities, and a browser can have the
first without the second. Conflating them would let a child into practice mode that
re-downloads 39 MB on every single story.

**Tier 1 — can we listen at all?** (`listenSupported`)
Secure context (`window.isSecureContext` — `getUserMedia` requires it), `WebAssembly`,
`navigator.mediaDevices.getUserMedia`, and Web Audio. All feature-detected, never
user-agent sniffed. If false: practice unavailable, dashboard toggle disabled with a reason.

**Tier 2 — can we keep the model?** (`modelCacheState()`)

| Result | Condition | Behavior |
|---|---|---|
| `persistent` | Cache Storage present, test write succeeds, `navigator.storage.estimate()` shows headroom for ~75 MB | Normal. Download once. |
| `ephemeral` | Cache Storage missing or test write fails (Safari private browsing is the concrete case) | Practice still offered, but the dashboard toggle carries a plain warning: this browser can't save the voice model, so it re-downloads about 39 MB each session. Parent decides. |
| `insufficient` | Quota estimate below what the model needs | Practice unavailable, with a "not enough storage on this device" reason — distinct from "not supported", because it is fixable. |

A capability test-write is required rather than a bare `'caches' in window` check: Safari
exposes the API in private browsing and fails on write.

## Read screen states

| State | Behavior |
|---|---|
| Unsupported browser | Practice unavailable; normal read screen. Dashboard toggle disabled with a reason — mirrors how `speechSupported` disables the read-aloud toggle at `app.js:594`. Detection per Tier 1 above, never by user-agent string |
| Insufficient storage | Practice unavailable, with a distinct "not enough storage" reason (Tier 2 `insufficient`) — fixable, unlike unsupported |
| First run | "Getting ready to listen…" + download progress. Model cached in Cache Storage; instant thereafter |
| Re-download (`ephemeral`, or evicted) | "Getting the voice model again…" — same progress UI, different copy, so a parent seeing repeated downloads understands why rather than assuming a bug |
| Mic prompt | Fires only on an explicit "Start reading" tap — never automatically on screen load |
| Permission denied | Clear message + "Read it on your own instead" → falls back to the normal read screen for that story |
| Listening | Mic indicator; finished lines in normal ink above, current line prominent, upcoming lines dimmed |
| Word states | pending (ink) / matched (green) / miscue (amber) |
| Stuck — `help` | App reads the full line, child repeats it once, advances regardless. Miss recorded quietly |
| Stuck — `grownup` | "Need help?" → **reuses the existing `makeGate()` multiplication gate** (`app.js:772`) → unlocks the line |
| Download failed | Retry, plus "skip practice for this story" |

**Every failure path leaves the child able to keep reading.** The feature degrades to
today's app rather than blocking.

## About page update

The About screen currently states "Nothing is sent to a server" (`app.js:638`). Two things
must change together, because shipping an edit to a privacy claim that remains inaccurate
is worse than not touching it.

### 1. Disclose the microphone

Microphone use must be disclosed even though audio never leaves the device — arguably
especially so, since "we listen, and it stays here" is the strongest form of this app's
privacy story. Add to the Privacy panel:

> When Reading practice is on, the app listens through the microphone to follow along.
> The listening happens entirely on this device — the recording is never uploaded, stored,
> or sent anywhere, and it is discarded as soon as the line is checked.

### 2. Resolve the Google Fonts contradiction

`index.html:7-9` loads Baloo 2 and Nunito from `fonts.googleapis.com` and
`fonts.gstatic.com`, sending the child's IP and user-agent to Google on every page load.
The existing "Nothing is sent to a server" claim is therefore already inaccurate, before
this feature adds anything.

**Recommended: self-host the fonts.** Measured cost is **315 KB across 9 woff2 files** —
negligible beside the 39 MB model, requires no build step, removes the only third-party
request in the app, and makes the app fully offline-capable, which pairs naturally with an
offline speech model. The privacy claim then becomes literally true rather than
approximately true.

**Alternative: soften the claim** to name the font CDN as the one exception. Cheaper, but
leaves a real third-party request in a children's app whose selling point is that there
isn't one.

This is a decision for the user, not an implementation detail. Default is self-hosting
unless they say otherwise.

## Testing

The repo has no tests today. Node's built-in `node:test` requires no dependency and no
build step, consistent with the project's constraints.

### `miscue.test.js`

Fixtures covering: perfect read, single omission, substitution, `[unk]`, self-correction,
repetition, filler, insertion, out-of-order words, empty transcript, full-line silence.

**Unscoreable-word fixtures get their own group**, since the absorption rules are the
subtlest part of the classifier and a bug there produces exactly the failure this design
exists to prevent — blocking a child who read correctly:

- `[unk]` aligned directly to an unscoreable word → pass, no miscue.
- `[unk]` one position off from an unscoreable word → absorbed, no miscue.
- Unscoreable word aligned to a gap (child skipped it) → pass, no miscue.
- Two adjacent unscoreable words (`YTRAP AZZIP`) with two `[unk]`s → pass.
- A line that is entirely unscoreable → passes without listening.
- A *genuine* invention elsewhere in a line containing an unscoreable word → still caught.
  This is the guard against over-absorption swallowing real errors.

### Segmentation tests against the real corpus

Run over all 1,075 sentences in `passages/*.js`:

- No line exceeds the 15-word cap.
- None of the 9 abbreviation cases splits mid-abbreviation.
- Quoted sentences retain their closing quote.
- **Every out-of-vocabulary word in the corpus is in the unscoreable set.** This is the
  regression guard against a future story reintroducing the `my-backwards` trap. The check
  needs a checked-in vocabulary list extracted from the model, since the model itself is
  too large to commit.

High value for low effort, since it exercises real content rather than toy strings.

### Manual

`listen.js` cannot be meaningfully unit-tested (WASM + live microphone). A manual checklist
covers: permission grant, permission denial, model download progress, cached reload,
correct read advancing, omission caught, invented word caught, self-correction *not*
flagged, silence not burning an attempt, both stuck-hatch settings, and unsupported-browser
fallback.

## Out of scope

- Fluency or words-per-minute scoring.
- Phoneme-level pronunciation feedback.
- Comparison against grade-level norms.
- Any cloud speech service.
- Changes to quiz scoring, berries, pet growth, or the existing timing/skill dashboard
  panels.

All are tempting adjacencies; none are needed for "don't skip words, don't invent words."

## Naming note

The existing `readAloud` setting means *the app reads to the child*. This feature means
*the child reads to the app*. Two dashboard toggles both called "read aloud" would confuse
parents, so implementation relabels them:

- Existing `readAloud` toggle → **"Read to me"** (persisted key name unchanged, so saves
  stay compatible; label only)
- New toggle → **"Reading practice"**
