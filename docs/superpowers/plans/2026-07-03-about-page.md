# About Page in Parent Dashboard Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an "About this app" screen to the parent dashboard that explains how The Reading Patch works and states its privacy posture (no accounts, no network calls, local-only storage).

**Architecture:** One new screen (`about`) rendered by a new `viewAbout()` function in `app.js`, following the exact structural pattern of the existing `viewDashboard()`/`viewGate()` screens (`.dash-wrap` / `.dash-topbar` / `.panel`). Reached via a new button on the dashboard; two new dispatcher cases (`about`, `aboutBack`) wire up navigation.

**Tech Stack:** Plain HTML template literals + vanilla JS (`app.js`), existing CSS classes only (`styles.css` unchanged). No build step, no test framework — this repo has neither `package.json` nor a test runner, so verification is manual via `npx serve .` in a browser, consistent with how the rest of the app is checked.

## Global Constraints

- No new CSS. Reuse `.panel`, `.panel-title`, `.panel-sub`, `.dash-wrap`, `.dash-topbar`, `.back-btn` exactly as they exist today in `styles.css`.
- No changes to scoring, berries, or persisted `localStorage` state shape.
- The About screen is read-only informational content — no settings/toggles on it.
- World names in the "How it works" copy must be derived from `CATEGORIES` (not hardcoded), so the copy can't drift if worlds are added/renamed later (`passages/index.js`).
- Back button on the About screen returns to `dashboard`, not `home`.
- Spec reference: `docs/superpowers/specs/2026-07-03-about-page-design.md`.

---

### Task 1: Add the About screen, wire navigation, verify manually

**Files:**
- Modify: `app.js` (add `viewAbout()` near `viewDashboard()`, register it in the view map, add two dispatcher cases, add a button in `viewDashboard()`)

**Interfaces:**
- Consumes: existing `CATEGORIES` (from `passages/index.js`, imported at top of `app.js`), existing `esc()` helper, existing `state.screen` state machine, existing `render()` function, existing click dispatcher `switch` at the bottom of `app.js`.
- Produces: `viewAbout()` — a zero-argument function returning an HTML string, following the same shape as `viewDashboard()`. No other task depends on this file, so no downstream interface to preserve beyond this.

- [ ] **Step 1: Add the `viewAbout()` function**

Insert immediately after the closing of `viewDashboard()` (the line reading `}` right before `/* ---------- render ---------- */`, i.e. right after this exact block in `app.js`):

```js
      <div class="dash-note">Progress is stored on this device only — no accounts, no cloud sync.</div>
    </div></div>`;
}
```

Add this new function directly after it (before the `/* ---------- render ---------- */` comment):

```js
function viewAbout() {
  const worldNames = CATEGORIES.map(c => c.name).join(', ');
  return `
    <div class="screen"><div class="dash-wrap">
      <div class="dash-topbar">
        <button class="back-btn" data-action="aboutBack">&larr; Dashboard</button>
        <div class="dash-title">About this app</div>
        <span style="width:96px"></span>
      </div>

      <div class="panel">
        <div class="panel-title">How it works</div>
        <div class="panel-sub" style="margin-bottom:0">Kids pick one of six story worlds &mdash; ${esc(worldNames)} &mdash; read a short passage, and answer 5 questions about it. Correct answers earn berries, which grow a pet unique to that world. There's no login or setup required.</div>
      </div>

      <div class="panel">
        <div class="panel-title">Privacy</div>
        <div class="panel-sub">&bull;&nbsp; No accounts, sign-ups, or personal information are ever collected.</div>
        <div class="panel-sub">&bull;&nbsp; All progress (stars, berries, timing stats) is saved using this browser's storage, on this device only.</div>
        <div class="panel-sub">&bull;&nbsp; Nothing is sent to a server &mdash; no analytics, no trackers, no ads.</div>
        <div class="panel-sub">&bull;&nbsp; A different device or browser starts fresh. There's no account to sync, and nothing to delete on our end because nothing ever left this device.</div>
        <div class="panel-sub" style="margin-bottom:0">&bull;&nbsp; The &ldquo;Reset progress&rdquo; option on the dashboard clears this local data at any time.</div>
      </div>
    </div></div>`;
}
```

**Why this content:** matches the approved spec's two panels exactly (`docs/superpowers/specs/2026-07-03-about-page-design.md`). World names come from `CATEGORIES.map(c => c.name)` rather than being typed out, so this can't drift out of sync with `passages/index.js`. The bullet lines use plain `.panel-sub` divs prefixed with `&bull;` rather than a `<ul>`, because a real list would need new CSS (list-style/margin resets) which the spec rules out — stacked `.panel-sub` divs already look right with the existing 16px `margin-bottom` between them.

- [ ] **Step 2: Register `about` in the render view map**

Find this line in `app.js` (in the `render()` function):

```js
  const view = { home: viewHome, cat: viewCat, read: viewRead, quiz: viewQuiz, done: viewDone, dashboard: viewDashboard, shop: viewShop }[state.screen];
```

Replace it with:

```js
  const view = { home: viewHome, cat: viewCat, read: viewRead, quiz: viewQuiz, done: viewDone, dashboard: viewDashboard, shop: viewShop, about: viewAbout }[state.screen];
```

- [ ] **Step 3: Add the two dispatcher cases**

Find this line in the click-dispatcher `switch` statement:

```js
    case 'dashboard': if (!state.gateOpen) state.gate = makeGate(); state.screen = 'dashboard'; render(); break;
```

Add these two new cases directly after it:

```js
    case 'dashboard': if (!state.gateOpen) state.gate = makeGate(); state.screen = 'dashboard'; render(); break;
    case 'about': state.screen = 'about'; render(); break;
    case 'aboutBack': state.screen = 'dashboard'; render(); break;
```

(The first line already exists — only the two `about`/`aboutBack` lines are new.)

- [ ] **Step 4: Add the button to the dashboard**

Find this block in `viewDashboard()`:

```js
      <div class="panel setting-panel">
        <div>
          <div class="panel-title" style="margin-bottom:2px">Read-aloud</div>
          <div class="panel-sub" style="margin-bottom:0">${speechSupported
            ? 'Shows a Listen button on stories and a speaker on questions, so a child can hear the words.'
            : 'This browser does not support read-aloud.'}</div>
        </div>
        <button class="toggle${state.readAloud ? ' on' : ''}" data-action="toggleReadAloud" role="switch" aria-checked="${state.readAloud}"${speechSupported ? '' : ' disabled'}>
          <span class="toggle-track"><span class="toggle-knob"></span></span><span class="toggle-label">${state.readAloud ? 'On' : 'Off'}</span>
        </button>
      </div>

      <div class="panel danger">
```

Insert a new panel between them, so it reads:

```js
      <div class="panel setting-panel">
        <div>
          <div class="panel-title" style="margin-bottom:2px">Read-aloud</div>
          <div class="panel-sub" style="margin-bottom:0">${speechSupported
            ? 'Shows a Listen button on stories and a speaker on questions, so a child can hear the words.'
            : 'This browser does not support read-aloud.'}</div>
        </div>
        <button class="toggle${state.readAloud ? ' on' : ''}" data-action="toggleReadAloud" role="switch" aria-checked="${state.readAloud}"${speechSupported ? '' : ' disabled'}>
          <span class="toggle-track"><span class="toggle-knob"></span></span><span class="toggle-label">${state.readAloud ? 'On' : 'Off'}</span>
        </button>
      </div>

      <div class="panel setting-panel">
        <div>
          <div class="panel-title" style="margin-bottom:2px">About this app</div>
          <div class="panel-sub" style="margin-bottom:0">How it works, and what happens to your child's data.</div>
        </div>
        <button class="back-btn" data-action="about">Learn more &rarr;</button>
      </div>

      <div class="panel danger">
```

- [ ] **Step 5: Manually verify in a browser**

Run:

```bash
npx serve .
```

Open the reported localhost URL, then:
1. Click "Parent dashboard" from the home screen footer, solve the multiplication gate.
2. Confirm a new "About this app" panel appears between "Read-aloud" and "Reset progress", with a "Learn more →" button.
3. Click "Learn more →". Confirm the About screen renders: a "← Dashboard" back button, title "About this app", a "How it works" panel listing all six world names (Animals & Nature, Everyday Life, Space & Our Planet, Mystery, Amazing People, Fables & Folktales), and a "Privacy" panel with the five bullet lines.
4. Click "← Dashboard". Confirm it returns to the dashboard (not the home screen) and the gate does not re-prompt.
5. Resize the browser to a narrow width (~375px) and confirm the About screen's panels reflow the same way the dashboard's panels already do (no new CSS was added, so this should just work).

Expected: all five checks pass with no console errors.

- [ ] **Step 6: Commit**

```bash
git add app.js
git commit -m "$(cat <<'EOF'
feat: add About page to parent dashboard

Explains how the app works and states its privacy posture (no
accounts, no network calls, localStorage-only) for parents.

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
EOF
)"
```

---

## Self-Review Notes

- **Spec coverage:** Navigation (new `about` screen, back to dashboard) ✓ Step 2/3. Visual structure (dash-wrap/topbar/panel, no new CSS) ✓ Step 1/4. "How it works" panel copy ✓ Step 1. "Privacy" panel copy (all 5 bullets from spec) ✓ Step 1. Entry button on dashboard ✓ Step 4. Manual test plan from spec ✓ Step 5.
- **Placeholder scan:** none found — all code blocks are complete and copy-pasteable.
- **Type/name consistency:** `viewAbout` used consistently in Steps 1 and 2; `about`/`aboutBack` action names consistent across Steps 1 (button), 3 (dispatcher), and 4 (button). `CATEGORIES` and `esc()` already exist in `app.js` (confirmed via `viewDashboard`/`viewCat` usage) — no new imports needed.
