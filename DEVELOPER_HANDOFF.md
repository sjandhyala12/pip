# Developer Handoff — The Reading Patch (React + MUI v9)

## Overview
A reading-comprehension web app for 2nd–3rd graders (ages ~7–9). A child picks one of six
themed "story worlds," reads a short passage, answers five comprehension questions, and
receives kind, instructive feedback. Correct answers earn "berries" that grow a pet unique
to each world across five visual stages. Progress persists per device. A parent supervises
but the child drives the UI.

## About the design files
This handoff ships a **working reference implementation** in plain HTML/CSS/JavaScript
(`index.html`, `styles.css`, `app.js`, `pets.js`) plus the passage data modules. It is a
faithful, runnable version of the intended experience — use it as the source of truth for
look, copy, and behavior. Your task is to **recreate this experience in React with Material
UI v9**, using MUI's components, theming, and `sx`/styled patterns. The passage data files
(`passages/*.js`) are plain data and can be reused verbatim as the app's data layer.

## Fidelity
**High-fidelity.** Colors, typography, spacing, copy, and interactions are final. Match them
closely. Where a value maps cleanly onto an MUI concept (theme palette, typography variants,
`borderRadius`, `spacing`), prefer the MUI-idiomatic expression of the same visual result.

---

## Design tokens

### Color
| Token | Hex | Use |
|---|---|---|
| Page background | `#FAF3E7` | app background (with a 2px dot pattern in `#F1E6CE`, 30px grid) |
| Ink / text | `#35315F` | primary text, button borders, SVG outlines |
| Muted text | `#77729B` | secondary text |
| Faint text | `#9B95BA` | parent-corner footnotes |
| Card surface | `#FFFFFF` | all cards/panels |
| Card border | `#EBE1CD` | 2px borders on cards |
| Track | `#F3EBDA` | progress-bar track, letter chips |
| Primary action | `#6B79E8` | main buttons, focus ring |
| Correct | `#3E9B6C` border / `#E7F5EE` fill | right-answer states, "grew" banner |
| Wrong | `#E96A5C` border / `#FDECE9` fill | wrong-answer states |
| Hint | `#E8A23D` border / `#FFF4DC` fill | hint card |
| Star gold | `#FFB93E` | earned stars |
| Star empty | `#E7DFCC` | unearned stars |

**Per-world accents** (from `passages/index.js` — each world overrides accent + chip colors):
| World | fill (pet) | accent | chipBg | chipFg |
|---|---|---|---|---|
| Animals & Nature | `#6B79E8` | `#5DB075` | `#E3F0E8` | `#2F7A55` |
| Everyday Life | `#C89A6B` | `#E8A23D` | `#FDEAD8` | `#A85E23` |
| Space & Our Planet | `#7ED08A` | `#6B79E8` | `#E4E9FB` | `#4453C8` |
| Mystery | `#A98F72` | `#8E6FD0` | `#EDE6F7` | `#6A4FA3` |
| Amazing People | `#9FB4C7` | `#E96A5C` | `#FDE3E0` | `#B44A3B` |
| Fables & Folktales | `#E8845E` | `#3AA69B` | `#DDF2F0` | `#20716A` |

### Typography
- **Display / headings / buttons / numbers:** `"Baloo 2"`, weight 800 (a rounded, friendly
  display face). Sizes: world/screen titles 32–34px, card titles 18–24px, buttons 17–19px.
- **Body / passages / choices:** `"Nunito"`, weight 600–700. Passage body 18–26px
  (user-adjustable, default 22px), line-height 1.8. Choice text 17px.
- Load both from Google Fonts.

### Shape & elevation
- Card radius: 22–28px. Buttons: 16–18px. Chips/pills: 999px.
- Signature button shadow is a **solid offset** (not blur): `box-shadow: 0 5px 0 #35315F`
  with a 2px `#35315F` border; on `:active` it drops to `0 2px 0` and translates down 2px
  (a "pressable" toy-button feel). Card shadow: `0 6px 0 rgba(53,49,95,0.07)`.
- Spacing rhythm: 12 / 16 / 18 / 20 / 26px gaps.

### Motion
- `popIn` (scale 0.92→1.04→1, 0.3–0.4s) for revealed feedback and results.
- `fadeUp` (translateY 8px→0, 0.3s) on screen enter.
- `stampIn` + `confFall` for the "Stamp & confetti" celebration.
- Pet gently floats: translateY 0→-6px→0 over 4s, infinite.

---

## Screens / views

State machine: `home → category → read → quiz → done` (plus a `dashboard` screen and a per-world
`shop` screen, both reached from their entry points). Back navigation returns up the chain.
There is no URL routing in the prototype; you may add MUI/React Router routes if desired
(e.g. `/`, `/world/:id`, `/world/:id/story/:pid`), but keep all state client-side.

### 1. Home ("All worlds")
- **Purpose:** choose a story world; see each pet's growth + progress at a glance.
- **Layout:** header (logo + title + total-berries pill), then a responsive grid of six
  world cards. Grid: 3 columns ≥900px, 2 columns 560–900px, 1 column <560px.
- **World card (button):** centered. Pet illustration (140px) on top, world name (Baloo
  21px), pet line ("Waffles the puppy · Baby Waffles"), a slim accent progress bar, then a
  row: berry count · "N/10 stories" · "Visit →". Hover lifts 3px and borders in the world accent.
- **Footer:** "Parent corner · Progress is saved on this device · Start over" (Start over
  clears all progress after a confirm).

### 2. Category ("world") page
- **Purpose:** show the world's pet/progress and its 10 stories.
- **Layout:** header (← All worlds, world name chip). Two columns ≥760px
  (`320px | 1fr`): left = pet panel, right = story grid. Stacks to one column <760px.
- **Pet panel:** large pet (200px), stage name (e.g. "Little Pip"), caption, accent
  progress bar, "N more berries until <next stage>", helper line.
- **Story grid:** 2 columns (1 column <560px). Each story card: numbered chip (world chip
  colors) + title, then a 5-star row (earned = gold) and "Read" / "Read again →".

### 3. Read
- **Purpose:** read the passage before the quiz.
- **Layout:** centered ≤780px. Header (← Stories, world chip). White card with title (Baloo
  32px) and 1–2 body paragraphs (Nunito, adjustable size, line-height 1.8). Big primary
  button: "I'm ready for the questions!" (or "Back to the questions" if already started).

### 4. Quiz
- **Purpose:** answer 5 questions with supportive feedback.
- **Layout:** centered ≤720px. Header (← Read the story again, + a row of 5 progress dots:
  past = green, current = accent, future = neutral). Card: "Question N of 5" + optional
  skill chip (Main idea / Detail / Why / Inference), the question (Baloo 24px), then four
  full-width choice buttons (letter tile A–D + text).
- **Answer logic (this is the core UX — see State/Interactions):** first wrong try shows a
  **hint** and lets them retry; second wrong reveals the answer + explanation; correct at any
  point reveals a positive explanation. After reveal, a "Next question" / "Finish the story!"
  button appears. Non-selected choices dim to 0.55 opacity on reveal; the correct choice
  turns green, wrong picks turn red.

### 5. Done (results)
- **Purpose:** celebrate and review.
- **Layout:** centered ≤720px. Celebration card: pet (150px), "You finished the story!",
  "<title> · N out of 5 correct", a 5-star row, a berry-earned pill, and — if the pet
  advanced a stage — a green "Pip grew!" banner (popIn).
- **"How you did" recap card:** one row per question with a badge — "First try!" (green) /
  "Second try" (amber) / "One to practice" (red). Rows that weren't first-try also show the
  explanation text. **Only missed/retried questions expand** — clean for a proud first-try run.
- **Actions:** "More stories" (back to world) and "All worlds" (home).

---

## Interactions & behavior

### Difficulty levels
Each passage gets a level (1 Starter / 2 Growing / 3 Challenge). It is computed in
`passages/index.js` from a Flesch–Kincaid-style grade estimate over the passage text
(`gradeEstimate` → `levelFor`; thresholds: <2.9 = 1, <3.9 = 2, else 3) and stamped onto
`p.level`, unless the passage object already defines `level` (manual override wins). `LEVELS`
(exported alongside `CATEGORIES`) holds each level's name, blurb, and colors. The category
view renders a segmented Level filter (`state.levelFilter`, 0 = all) and a badge per card;
port the filter as component state and the badge as a small presentational component.

### Parent dashboard & timing capture
- **Access:** home footer → “Parent dashboard,” behind a grown-ups gate (a random `a × b` the
  parent answers; pass is session-only via `gateOpen`).
- **Contents:** summary cards (stories completed `/60`, stars, questions answered); a **“Time to
  answer, by category”** table (World / Stories / Stars / Avg / Median) with an overall
  average+median line; a **“Comprehension by skill”** panel (first-try correct rate per skill);
  and reset progress.
- **Timing:** each question records seconds from when it appears to the child's **first** answer
  (`qStart` set on show, measured in `pick()` on first tap, guarded by `qAnswered`). Durations
  append to `stats[catId].times`; the dashboard computes mean and median. Skill accuracy is
  stored as `stats[catId].skills[skill] = { total, firstCorrect }`.

### Scoring & rewards
- Correct on **first try** → **2 berries**; correct on **second try** → **1 berry**.
- Berries are **per world** (separate jar per category). Pet growth stages by that world's
  berry total: `[egg 0, hatchling 10, little 25, big 50, super 80]` (thresholds in `STAGES`).
- Per-story **stars** = number of questions answered correctly (not missed), 0–5, and only
  the **best** score for a story is kept.

### Answer flow (per question)
State per question: `attempt` (0 or 1), `wrong` (indices already tried), `phase`
(`answering | hint | revealed`), `lastCorrect`.
1. `answering`: clicking the correct choice → `revealed`, award berries (2 if attempt 0 else 1).
2. Clicking a wrong choice on attempt 0 → `phase = hint`, mark it wrong, `attempt = 1`
   (button stays disabled/red). Kid tries again.
3. On attempt 1, any further wrong click → `revealed`, `lastCorrect = false`, show the answer.
4. On reveal, "Next" advances; after Q5 it computes results and goes to `done`.

Feedback copy: hint uses `question.hint`; correct uses `question.explain`; a miss shows
`The answer is "<correct choice>." <explain>` (see `feedback()` in `app.js`).

### Feedback treatment
Feedback appears in a speech bubble beside the pet, anchored bottom-right (fixed), capped to
the viewport width so it never overflows (`.pet-bubble` in `styles.css`, built in
`viewQuiz()`). Feedback copy: hint uses `question.hint`; correct uses `question.explain`; a
miss shows `The answer is "<correct choice>." <explain>`.

### Responsive
Fully responsive down to ~360px via CSS media queries (breakpoints 560 / 760 / 900px in
`styles.css`). In MUI, express the same with theme breakpoints / `useMediaQuery`.
Min tap target ~44px; passages never below 18px (size adjustable A-/A+).

---

## State management
Suggested shape (Context or a small store; MUI is view-only):
```
progress = {
  berries:  { [worldId]: number },             // spendable wallet (shop currency)
  earned:   { [worldId]: number },             // lifetime berries → pet growth (never decreases)
  records:  { [storyId]: { stars: number } },  // best stars per story
  owned:    { [worldId]: string[] },           // accessory ids purchased
  equipped: { [worldId]: { hat, face, bg } },  // worn accessory id per slot
  stats:    { [worldId]: {                      // parent-dashboard analytics
    times: number[],                            // seconds-to-answer per question
    skills: { [skill]: { total, firstCorrect } }
  } }
}
```
- **Berry Shop** (`shop` screen, `accessories.js`): per-world cosmetics grouped into Hats /
  Glasses / Scarves / Friends / Seasonal / Backgrounds, one item per slot
  (`hat`/`face`/`neck`/`buddy`/`bg`). **Locked until the pet reaches the Big stage**
  (`stageIdx(earned) >= 3`); the world's shop button shows a locked state until then. Buying
  spends `berries` and auto-equips; growth uses `earned`, so spending never changes the pet's
  stage. Worn items overlay the pet SVG in the same `0 0 200 170` viewBox (`accOverlay`, painted
  in `OVERLAY_SLOTS` order) or set a CSS background (`accBg`); port as a `<Pet>` prop like
  `accessories={{hat,face,neck,buddy,bg}}`. Seasonal items carry a `months` array (0-indexed)
  and only appear in-season (`inSeason(item, new Date().getMonth())`); already-owned items stay
  wearable year-round.
- Persist `progress` to `localStorage` under a versioned key (this build uses `reading-patch-v1`).
  Load on mount; write on every finish and on "Start over" (which resets to `{}`).
- Transient run state (only during a story): `worldId, storyId, qIndex, attempt, wrong[],
  results[], runEarned, phase, lastCorrect, startBerries` (startBerries lets `done` detect a
  stage-up: `stageIdx(now) > stageIdx(startBerries)`).
- `results[]` holds `'first' | 'retry' | 'miss'` per question, driving stars and recap badges.

Helper functions worth porting from `app.js`:
`stageIdx(berries)`, `stageLabel(idx, petName)`, `caption(idx, petName)`, and the answer/
scoring flow in `pick()` / `next()` / `finish()`.

---

## Data model (reuse the provided files)
`passages/index.js` exports `CATEGORIES: Category[]`.
```ts
type Category = {
  id: string; name: string;
  petName: string; species: 'berry'|'puppy'|'alien'|'owl'|'robot'|'dragon';
  petKind: string;                         // "the puppy"
  fill: string; accent: string; chipBg: string; chipFg: string;  // hex
  passages: Passage[];
};
type Passage = { id: string; title: string; paras: string[]; questions: Question[] };
type Question = {
  q: string; choices: string[]; answer: number;   // 0-3
  skill: 'Main idea'|'Detail'|'Why'|'Inference';
  hint: string; explain: string;
};
```
These `.js` files are plain ES modules with no dependencies — import them directly into the
React app (or convert to JSON/TS). 60 passages × 5 questions already written.

---

## Pet illustrations
`pets/` holds the art with **one file per animal** (`berry.js`, `puppy.js`, `alien.js`,
`owl.js`, `robot.js`, `dragon.js`), each exporting `{ egg, hatch, kid, big, star }` — one SVG
per growth stage, taking a `fill` color. `pets/index.js` assembles them and exposes
`petSVG(species, stage, fill)`. Port each animal as a React `<Pet species stage fill />`
component — the SVG paths copy over directly. The float is a simple CSS keyframe.

## Assets
- **Fonts:** Google Fonts "Baloo 2" (800) and "Nunito" (400/600/700/800).
- **Imagery:** none external — the pets, stars, and berry icon are all inline SVG. No photos.
- **Icons:** hand-drawn inline SVG (berry = blue circle with a green sprout; star = classic
  5-point). No icon library required, though you may swap in MUI icons where appropriate.

## Files to reference
- `app.js` — the full app: screen state machine, scoring, feedback text, growth, and
  `localStorage` persistence. The clearest reference for behavior.
- `styles.css` — every visual token and the responsive breakpoints (560 / 760 / 900px).
- `pets/*.js` — pet SVGs, one file per animal, each with five growth stages.
- `accessories.js` — Berry Shop catalog (slots, groups, prices, seasonal `months`, SVG art).
- `speech.js` — optional read-aloud (Web Speech API). `speak()/stopSpeech()/isSpeaking()`;
  render() cancels speech on every screen change. Gated by a `readAloud` setting (parent
  dashboard toggle); buttons hidden when unsupported. Port with `window.speechSynthesis` or a
  React TTS hook.
- `passages/index.js` + `passages/*.js` + `passages.js` — all content and per-world config.
