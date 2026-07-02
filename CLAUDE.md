# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**The Reading Patch** is a reading-comprehension app for 2nd–3rd graders (ages ~7–9). Kids pick one of six themed "story worlds," read a passage, answer 5 questions, and earn "berries" that grow a pet unique to each world. Progress is saved per device via `localStorage`.

This repo contains **two deliverables**:
1. A working reference implementation in plain HTML/CSS/JS — deploy to Netlify with no build step.
2. `DEVELOPER_HANDOFF.md` — a full spec for rebuilding it as a React + MUI v9 app.

## Running Locally

The app uses native ES modules (`import`), so it **cannot** be opened via `file://`. Use a local server:

```bash
npx serve .
# or
python3 -m http.server
```

Then open `http://localhost:3000` (or whatever port is reported).

## Deployment

No build step. Deploy the folder root directly to any static host. Netlify reads `netlify.toml` automatically (`publish = "."` + catch-all SPA redirect).

```bash
# Netlify CLI
netlify deploy --prod --dir .
```

## Architecture

### Screen state machine
`home → cat → read → quiz → done` (plus `dashboard`). All navigation is client-side; `app.js` renders one screen at a time into `#app` via a single delegated click listener.

### Key files
- **`app.js`** — the entire app: screen renderer, state machine, scoring, feedback, pet growth, `localStorage` persistence. This is the behavioral source of truth for any React rebuild.
- **`styles.css`** — all styling including design tokens and responsive breakpoints (560 / 760 / 900px).
- **`passages/index.js`** — category registry; the single file that wires world configs to passage arrays. Add a new world here.
- **`passages/*.js`** — one file per world, each exporting `PASSAGES` (10 stories each).
- **`pets/index.js`** — assembles the per-animal art and exposes `petSVG(species, stage, fill)`.
- **`pets/<animal>.js`** — one file per animal, exporting `{ egg, hatch, kid, big, star }` (SVG per growth stage). Edit pet art here; changes to one animal never touch others.
- **`assets/<animal>/`** — standalone `.svg` exports (not used at runtime; edit `pets/` instead).

### State shape (`app.js`)
```js
// persisted to localStorage under 'reading-patch-v1'
{ berries: { [worldId]: number },
  records: { [storyId]: { stars: number } },
  stats: { [worldId]: { times: number[], skills: { [skill]: { total, firstCorrect } } } } }

// transient (in-memory only)
screen, catId, pid, qIndex, attempt, wrong[], results[],
runEarned, phase, lastCorrect, quizStarted, startBerries, textSize,
qStart, qAnswered, gateOpen, gate
```

### Scoring rules
- Correct on first try → **2 berries**; correct on second try → **1 berry**.
- Berry thresholds for growth: `[10, 25, 50, 80]` (constants `STAGES` in `app.js`).
- Stars per story = questions answered correctly (best score kept, 0–5).
- Answer flow: `answering → hint (after 1st wrong) → revealed (after 2nd wrong or any correct)`.

### Data schema (passage object)
```js
{
  id: 'sp-comet',
  title: 'The Comet\'s Tail',
  paras: ['First paragraph…', 'Second paragraph…'],
  questions: [{
    q: 'What is the question?',
    choices: ['A', 'B', 'C', 'D'],
    answer: 2,           // index 0–3 of correct choice
    skill: 'Main idea',  // 'Main idea' | 'Detail' | 'Why' | 'Inference'
    hint: 'Nudge shown after first wrong try.',
    explain: 'Why the right answer is right — shown after answering.'
  }]  // five questions per passage
}
```

## Adding Content

**New story in an existing world:** append an object to the world's `passages/*.js` file.

**New world:** create `passages/<name>.js`, then add one entry to `CATEGORIES` in `passages/index.js`. Reuse an existing `species` (`berry | puppy | alien | owl | robot | dragon`) or add a new `pets/<name>.js`.

**New pet:** create `pets/<name>.js` exporting `{ egg, hatch, kid, big, star }` (each a function `(fill) => svgPathString`), then register it in `pets/index.js`.

## Design Tokens (for React rebuild)

See `DEVELOPER_HANDOFF.md` for the full token table. Key values:
- **Fonts:** `"Baloo 2"` weight 800 (headings/buttons), `"Nunito"` weight 600–700 (body/passages).
- **Page bg:** `#FAF3E7`; **Ink:** `#35315F`; **Primary action:** `#6B79E8`.
- **Button shadow:** solid offset `0 5px 0 #35315F` with 2px border; translates down 2px on `:active`.
- Per-world accent colors come from each category entry in `passages/index.js`.

## Parent Dashboard

Accessible from home footer, behind a multiplication gate (session-only flag `gateOpen`). Shows timing stats (avg/median seconds per question by world) and comprehension by skill (first-try rate). Reset clears all `localStorage`.
