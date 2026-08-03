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

**`vosk-browser`** (Kaldi compiled to WASM, `vosk-model-small-en-us` ~40MB), running fully
on-device.

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

### Required spike before implementation

1. Confirm the `vosk-browser` WASM build exposes grammar construction (the Python and C
   APIs do; the browser wrapper must be verified).
2. Measure model download and cold-start time on a mid-range device.
3. Tune the confidence threshold against real recordings of a child reading.

**If grammar support is absent, invented-word detection weakens substantially and this
design must be revisited before building.**

## Architecture

Two new modules, both narrow, following the existing one-file-one-purpose convention.

### `listen.js`

The input mirror of the existing `speech.js` (which wraps `speechSynthesis` for output).
Wraps `vosk-browser` entirely — model loading and caching, microphone capture, and
per-line grammar-constrained recognition. No other file references Vosk.

```js
export const listenSupported            // WASM + getUserMedia + Web Audio, feature-detected
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
  almost always a breath or background noise. Non-blocking.

### Confidence gate

Vosk returns per-word confidence. A miscue is raised only when confidence clears a
threshold — the app corrects the child only when the recognizer is confident they got it
wrong. The threshold starts deliberately conservative and loosens only if genuine errors
are demonstrably slipping through. Tuned during the spike.

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

## Read screen states

| State | Behavior |
|---|---|
| Unsupported browser | Practice unavailable; normal read screen. Dashboard toggle disabled with a reason — mirrors how `speechSupported` disables the read-aloud toggle at `app.js:594`. Detection is by capability (WASM, `getUserMedia`, Web Audio), never by user-agent string |
| First run | "Getting ready to listen…" + download progress. Model cached in Cache Storage; instant thereafter |
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

The About screen currently states "Nothing is sent to a server" (`app.js:638`). Microphone
use must be disclosed even though audio never leaves the device — arguably especially so,
since "we listen, and it stays here" is the strongest form of this app's privacy story.

Add to the Privacy panel:

> When Reading practice is on, the app listens through the microphone to follow along.
> The listening happens entirely on this device — the recording is never uploaded, stored,
> or sent anywhere, and it is discarded as soon as the line is checked.

This copy change is part of this work, not a follow-up.

## Testing

The repo has no tests today. Node's built-in `node:test` requires no dependency and no
build step, consistent with the project's constraints.

### `miscue.test.js`

Fixtures covering: perfect read, single omission, substitution, `[unk]`, self-correction,
repetition, filler, insertion, out-of-order words, empty transcript, full-line silence.

### Segmentation tests against the real corpus

Run over all 1,075 sentences in `passages/*.js`:

- No line exceeds the 15-word cap.
- None of the 9 abbreviation cases splits mid-abbreviation.
- Quoted sentences retain their closing quote.

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
