# The Reading Patch — Netlify Handoff

A reading-comprehension app for 2nd–3rd graders. Six themed "story worlds," each with
10 passages and 5 questions per passage. Kids read a passage, answer questions, get
kind feedback (hint → retry → explanation), and earn "berries" that grow a pet unique
to each world. Progress is saved per device.

This folder contains **two things**:

1. A **ready-to-deploy static site** (plain HTML/CSS/JS) — deploy it to Netlify as-is.
2. **`DEVELOPER_HANDOFF.md`** — a full spec for rebuilding it as a React + MUI v9 app.

---

## 1. Deploy to Netlify (works right now)

The site is plain HTML, CSS, and JavaScript modules — no framework and no build step.
Any static host works; here are the three easiest Netlify paths.

### Option A — Drag & drop (fastest)
1. Go to https://app.netlify.com/drop
2. Drag this **entire `netlify_handoff` folder** onto the page.
3. Done — Netlify gives you a live URL.

### Option B — Netlify CLI
```bash
npm install -g netlify-cli
cd netlify_handoff
netlify deploy --prod --dir .
```

### Option C — Git + Netlify
Push this folder to a Git repo, "Add new site" → import the repo. Netlify reads
`netlify.toml` automatically (publish directory = the folder root, no build command).

> The `netlify.toml` here sets `publish = "."` and a catch-all redirect to `index.html`,
> since all navigation is client-side.

### File structure
```
netlify_handoff/
├── index.html          ← page shell (loads styles.css + app.js)
├── styles.css          ← all styling, incl. responsive media queries
├── app.js              ← app logic: screens, scoring, feedback, dashboard, localStorage
├── pets/               ← pet art, ONE FILE PER ANIMAL (edit each separately)
│   ├── index.js        ← assembles the animals + exposes petSVG()
│   ├── berry.js        ← Pip the berry sprite (5 growth stages)
│   ├── puppy.js        ← Waffles the puppy
│   ├── alien.js        ← Zuzu the alien
│   ├── owl.js          ← Otis the detective owl
│   ├── robot.js        ← Bolt the robot
│   └── dragon.js       ← Ember the baby dragon
├── assets/             ← standalone .svg export, one subfolder per animal
│   ├── berry/          ← egg.svg, hatch.svg, kid.svg, big.svg, star.svg
│   ├── puppy/  alien/  owl/  robot/  dragon/   (same five files each)
├── passages.js         ← original passage library (imported by animals/life)
├── passages/
│   ├── index.js        ← CATEGORY REGISTRY — the one file that lists all six worlds
│   ├── animals.js      ← Animals & Nature (10 stories)
│   ├── life.js         ← Everyday Life (10 stories)
│   ├── space.js        ← Space & Our Planet (10 stories)
│   ├── mystery.js      ← Mystery (10 stories)
│   ├── people.js       ← Amazing People (10 stories, real biographies)
│   └── fables.js       ← Fables & Folktales (10 stories)
└── netlify.toml
```

> Because the app uses native ES modules (`import`), open it through a server, not a
> `file://` path. Netlify serves it correctly; for local preview run any static server
> (e.g. `npx serve` or `python3 -m http.server`) in this folder.

---

## 2. Content is modular — add stories or worlds without touching the app

You do not need to be a developer to add reading material.

### Add a story to an existing world
Open the world's file (e.g. `passages/space.js`) and append one object to its list.
Each story is 2 short paragraphs and 5 questions. Copy an existing story and edit the text.
Story shape:
```js
{
  id: 'sp-comet',                    // unique id (any string)
  title: 'The Comet\u2019s Tail',
  paras: [ 'First paragraph…', 'Second paragraph…' ],
  questions: [
    {
      q: 'What is the question?',
      choices: ['A', 'B', 'C', 'D'],
      answer: 2,                     // index (0-3) of the correct choice
      skill: 'Main idea',           // shown as a chip: Main idea / Detail / Why / Inference
      hint: 'A gentle nudge shown after the first wrong try.',
      explain: 'Why the right answer is right — shown after answering.'
    }
    // …five questions total
  ]
}
```

### Add a whole new world
1. Create `passages/<newworld>.js` following the same pattern as the others.
2. Register it in `passages/index.js` by importing it and adding one entry to `CATEGORIES`:
```js
{
  id: 'nature2', name: 'Weather Watchers',
  petName: 'Sky', species: 'berry', petKind: 'the cloud sprite',
  fill: '#6B79E8', chipBg: '#E3F0E8', chipFg: '#2F7A55', accent: '#5DB075',
  passages: weather   // the imported list
}
```
`species` picks the pet illustration; reuse an existing one (`berry`, `puppy`, `alien`,
`owl`, `robot`, `dragon`) or add a new animal: create `pets/<name>.js` exporting
`{ egg, hatch, kid, big, star }` and register it in `pets/index.js`.

### Edit an animal's art
Each animal lives in its own file under `pets/` with one method per growth stage
(`egg`, `hatch`, `kid`, `big`, `star`). Edit the SVG for any stage there — changes to one
animal never touch the others.

### Standalone SVG assets
`assets/` holds the same art as **individual `.svg` files**, one subfolder per animal and one
file per stage (e.g. `assets/owl/big.svg`) — handy for opening in a vector editor, dropping
into other tools, or exporting to PNG. Each is a self-contained SVG colored with that world's
fill. These are a static export; the running app draws from `pets/` (edit there if you want
the change to show in the app, then re-export the assets if needed).

---

## 3. Rebuilding as a React + MUI v9 app

This static site is a **maintainable reference implementation** in plain HTML/CSS/JS. To
build the production React + Material UI v9 app, see **`DEVELOPER_HANDOFF.md`** — it
documents every screen, color, interaction, the state model, and the passage data schema
so a developer (or Claude Code) can implement it faithfully. The passage `.js` files can be
reused almost verbatim as the React app's data layer, and `app.js` is a clear behavioral
reference for the scoring, feedback, and growth logic.

---

## Notes & limitations
- Progress is stored in `localStorage` (key `reading-patch-v1`) — per browser/device, no accounts.
- Reading-only (no text-to-speech), as specified. Passage text size is adjustable (A-/A+).
- Feedback uses the “pet pops up” style (a speech bubble beside the pet). The logic lives in
  `app.js` (`feedback()` + `viewQuiz()`) if you want to change it.

## Parent dashboard
Reachable from the home footer (“Parent dashboard”), behind a small multiplication gate so a
child can't wander in and hit Reset. It shows:
- Summary: stories completed, stars earned, questions answered.
- **Time to answer, by category** — average and median seconds per question, plus an overall
  line. Timing is measured from when each question appears to the child's first answer, saved
  per category in `localStorage`.
- Comprehension by skill — first-try correct rate for Main idea / Detail / Why / Inference.
- Reset progress.
