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
├── app.js              ← app logic: screens, scoring, feedback, shop, dashboard, localStorage
├── accessories.js      ← Berry Shop items (hats, glasses, backgrounds) — add items here
├── speech.js           ← optional read-aloud (Web Speech API) — no network, no keys
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
│   ├── animals.js      ← Animals & Nature (16 stories)
│   ├── life.js         ← Everyday Life (17 stories)
│   ├── space.js        ← Space & Our Planet (16 stories)
│   ├── mystery.js      ← Mystery (16 stories)
│   ├── people.js       ← Amazing People (19 stories, real biographies)
│   └── fables.js       ← Fables & Folktales (15 stories)
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

### Difficulty levels
Every story carries a level — **1 Starter / 2 Growing / 3 Challenge** — shown as a badge on
the card and on the reading screen, with a Level filter (All / Starter / Growing / Challenge,
with counts) at the top of each world. Levels are **derived automatically** from each
passage's reading difficulty (a Flesch–Kincaid-style grade estimate in `passages/index.js`),
so new stories are tagged for free. To pin a story to a specific level, add `level: 1|2|3` to
its passage object — the manual value wins over the estimate.

**Balanced across worlds.** Every world is stocked so each level has at least five stories
(99 stories in all), giving each world a full Starter / Growing / Challenge spread. The newer
stories set their `level` explicitly to keep the balance exact; the older ones are graded by
the estimate. To keep a world balanced when you add stories, just spread new ones across the
three levels.

### Berry Shop (accessories)
Each world has a **Berry Shop** (opened from the pet panel on the world page) where kids spend
berries on cosmetics for that world's pet, across six sections: **hats**, **glasses**,
**scarves**, **friends** (a little companion beside the pet), **seasonal** treats (Santa hat,
flower crown, pumpkin pal, snow / beach scenes), and **backgrounds**. Buying auto-equips the
item; tapping a worn item takes it off. One item per slot (`hat` / `face` / `neck` / `buddy` /
`bg`). Worn items render on the pet everywhere it appears — home cards, world page, quiz
feedback, and the finish screen.

**The shop stays locked until the pet reaches the "Big" stage** (growth index 3). Until then
the world's shop button shows a locked state; it opens automatically once the pet grows big.

Items live in `accessories.js` (data + SVG). To add one, drop an object in `ACCESSORIES` with a
unique `id`, a `slot`, a `group` (shop section), a `price`, and either an `art` SVG string
(drawn in the pet's `0 0 200 170` viewBox) or a `bg` CSS background. Optional `minStage` hides
the item until the pet is grown enough.

**Seasonal items are gated by month.** Each item in the Seasonal group carries a `months` array
(0-indexed, `0` = Jan .. `11` = Dec) and only appears in those months — Santa Hat in December,
Flower Crown in spring, Pumpkin Pal in fall, Snow Day in winter, Beach Day in summer. The
section header shows the current month's picks. Anything a child already bought stays wearable
year-round (marked “out of season”), so past purchases are never lost.

**Two berry numbers, one currency.** Berries are both the growth fuel and the shop currency,
tracked as two fields per world so spending never shrinks a pet:
- `earned[worldId]` — lifetime berries; drives the pet's growth stage and never decreases.
- `berries[worldId]` — the spendable wallet; goes up when earned, down when buying.

Every correct answer adds to both; the world page shows the wallet, the growth bar reads from
`earned`.

### Standalone SVG assets
`assets/` holds the same art as **individual `.svg` files**, one subfolder per animal and one
file per stage (e.g. `assets/owl/big.svg`) — handy for opening in a vector editor, dropping
into other tools, or exporting to PNG. Each is a self-contained SVG colored with that world's
fill. These are a static export; the running app draws from `pets/` (edit there if you want
the change to show in the app, then re-export the assets if needed).

`assets/accessories/` holds each Berry Shop item as an individual `.svg`, grouped into
`hats/ glasses/ scarves/ friends/ seasonal/ backgrounds/` (e.g. `assets/accessories/hats/crown.svg`).
Hat/glasses/scarf/friend files are drawn in the pet's `0 0 200 170` frame so their on-pet
position is preserved; background files are approximate gradient swatches with the exact live
CSS recorded in each file's `<desc>`. Like the pet assets, these are a static export \u2014 the app
renders from `accessories.js`; edit there for runtime changes, then re-export if you want the
files to match.

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
  Saved fields: `berries` (wallet), `earned` (growth), `records` (stars), `stats` (dashboard),
  `owned` + `equipped` (shop), `readAloud` (setting). Older saves without newer fields are migrated on load.
- **Optional read-aloud** (`speech.js`, Web Speech API): a **Listen** button on each story reads
  the passage aloud, and a speaker button on each question reads the question and choices. It
  uses the browser's built-in voices — no network or API keys — and is hidden on browsers that
  don't support it. A parent toggle in the dashboard turns the whole feature on/off (default on).
  Passage text size is adjustable (A-/A+).
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
