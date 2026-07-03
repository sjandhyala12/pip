# About Page in Parent Dashboard

## Purpose
Give parents a place in the app to understand, at a glance, how The Reading Patch works and what happens to their child's data. No such page exists today; privacy is currently only implied by a single line on the dashboard ("Progress is stored on this device only").

## Navigation
- New screen id: `about`.
- Entry point: a button on the existing dashboard (`viewDashboard` in `app.js`), placed after the "Read-aloud" panel and before the "Reset progress" panel — informational, not an action, so it doesn't compete visually with Reset.
- Button label: "About this app & privacy".
- Back button on the About screen returns to `dashboard` (not `home`), since the multiplication gate (`state.gateOpen`) is already satisfied at this point and About is conceptually a sub-page of the dashboard.
- Dispatcher: add `case 'about': state.screen = 'about'; render(); break;` and `case 'aboutBack': state.screen = 'dashboard'; render(); break;`, following the existing `backCat`/`backStory` naming pattern.

## Visual structure
Reuses the existing dashboard chrome exactly:
- `.screen > .dash-wrap`
- `.dash-topbar` with `.back-btn` (&larr; Dashboard), `.dash-title` ("About this app"), and the spacer span for centering, matching `viewGate`/`viewDashboard`.
- Two `.panel` sections below, using existing `.panel-title` / `.panel-sub` classes. No new CSS.

## Content

### Panel 1 — "How it works"
One short paragraph, parent-facing, no scoring mechanics (confirmed with user — keep it high-level):
> Kids pick one of six story worlds — Animals & Nature, Everyday Life, Space & Our Planet, Mystery, Amazing People, or Fables & Folktales — read a short passage, and answer 5 questions about it. Correct answers earn berries, which grow a pet unique to that world. There's no login or setup required.

### Panel 2 — "Privacy"
Bulleted list, verified accurate against the current codebase (no analytics/tracking/network calls exist anywhere in `app.js` or `index.html`):
- No accounts, sign-ups, or personal information are ever collected.
- All progress (stars, berries, timing stats) is saved using the browser's `localStorage`, on this device only.
- Nothing is sent to a server — no analytics, no trackers, no ads.
- A different device or browser starts fresh; there is no account to sync, and nothing exists on our end to delete because nothing ever left this device.
- Mentions that the "Reset progress" option on the dashboard clears this local data at any time.

## Out of scope
- No new CSS — reuses `.panel`, `.panel-title`, `.panel-sub`, `.dash-wrap`, `.dash-topbar`, `.back-btn` as-is.
- No changes to scoring, berries, or persisted state shape.
- No settings/toggles on this screen — it's read-only informational content.

## Testing
Manual verification via local server (`npx serve .`): open dashboard → click "About this app & privacy" → confirm content renders and reads correctly → click back → confirm it returns to the dashboard (not home) with gate still open.
