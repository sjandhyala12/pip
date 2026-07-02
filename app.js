/* app.js — The Reading Patch
 * Vanilla-JS single-page app. No framework, no build step.
 *
 * Data comes from ./passages/index.js (CATEGORIES). Pet art from ./pets.js.
 * The app renders one screen at a time into #app and handles clicks via a
 * single delegated listener. Progress is saved to localStorage.
 *
 * Screen flow:  home → cat → read → quiz → done
 */

import { CATEGORIES } from './passages/index.js';
import { petSVG } from './pets/index.js';

/* ---------- constants ---------- */
const STAGES = [10, 25, 50, 80];              // berry thresholds for growth
const STAGE_KEYS = ['egg', 'hatch', 'kid', 'big', 'star'];
const KEY = 'reading-patch-v1';               // localStorage key
const MIN_TEXT = 18, MAX_TEXT = 28;

/* ---------- state ---------- */
const state = {
  screen: 'home',
  catId: null, pid: null,
  qIndex: 0, attempt: 0, wrong: [], results: [],
  runEarned: 0, lastEarned: 0,
  phase: 'answering', lastCorrect: false, quizStarted: false,
  startBerries: 0,
  berries: {}, records: {}, stats: {},
  textSize: 22,
  qStart: 0, qAnswered: false,
  gateOpen: false, gate: null
};

function loadProgress() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const d = JSON.parse(raw);
      state.berries = d.berries || {};
      state.records = d.records || {};
      state.stats = d.stats || {};
    }
  } catch (e) { /* ignore */ }
}
function saveProgress() {
  try { localStorage.setItem(KEY, JSON.stringify({ berries: state.berries, records: state.records, stats: state.stats })); }
  catch (e) { /* ignore */ }
}

/* ---------- helpers ---------- */
const cat = () => CATEGORIES.find(c => c.id === state.catId) || null;
const passage = () => { const c = cat(); return c ? c.passages.find(p => p.id === state.pid) : null; };
const totalBerries = () => Object.values(state.berries).reduce((a, b) => a + b, 0);

function stageIdx(b) { let i = 0; STAGES.forEach((min, k) => { if (b >= min) i = k + 1; }); return i; }
function stageLabel(idx, name) {
  if (idx === 0) return name + '\u2019s Egg';
  if (idx === 1) return 'Baby ' + name;
  return ['Little ', 'Big ', 'Super '][idx - 2] + name;
}
function caption(idx, name) {
  return [
    'Something is wiggling in there\u2026',
    name + ' hatched! Keep reading!',
    name + ' is growing fast!',
    'Look how big ' + name + ' is getting!',
    name + ' is a reading superstar!'
  ][idx];
}
function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

/* small inline SVGs */
function logo(size) {
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}"><circle cx="12" cy="14" r="8.5" fill="#6B79E8" stroke="#35315F" stroke-width="1.6"></circle><path d="M12 5.5 C12 2.5 14 1.5 16.5 1.5" stroke="#5DB075" stroke-width="2.2" fill="none" stroke-linecap="round"></path><circle cx="9" cy="12" r="1.4" fill="#FFFFFF" opacity="0.75"></circle></svg>`;
}
function berryIcon(fill, size) {
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}"><circle cx="12" cy="14" r="8.5" fill="${fill}" stroke="#35315F" stroke-width="1.6"></circle><path d="M12 5.5 C12 2.5 14 1.5 16.5 1.5" stroke="#5DB075" stroke-width="2.2" fill="none" stroke-linecap="round"></path></svg>`;
}
function starRow(n, size) {
  const px = size || 17;
  let out = '';
  for (let i = 0; i < 5; i++) {
    out += `<svg viewBox="0 0 24 24" width="${px}" height="${px}"><path d="M12 2l2.9 6.2 6.6.8-4.9 4.6 1.3 6.6L12 17l-5.9 3.2 1.3-6.6L2.5 9l6.6-.8z" fill="${i < n ? '#FFB93E' : '#E7DFCC'}" ${size ? 'stroke="#35315F" stroke-width="1.2"' : ''}></path></svg>`;
  }
  return out;
}
function catVars(c) { return `--accent:${c.accent};--chip-bg:${c.chipBg};--chip-fg:${c.chipFg};`; }

/* ---------- views ---------- */
function viewHome() {
  const cards = CATEGORIES.map(c => {
    const b = state.berries[c.id] || 0;
    const idx = stageIdx(b);
    const next = STAGES[idx];
    const cur = idx === 0 ? 0 : STAGES[idx - 1];
    const pct = next ? Math.round(((b - cur) / (next - cur)) * 100) : 100;
    const done = c.passages.filter(p => state.records[p.id]).length;
    return `
      <button class="world-card" style="${catVars(c)}" data-action="openCat" data-cat="${c.id}">
        <div class="pet pet-sm">${petSVG(c.species, STAGE_KEYS[idx], c.fill)}</div>
        <div class="world-name">${esc(c.name)}</div>
        <div class="pet-line">${esc(c.petName)} ${esc(c.petKind)} &middot; ${esc(stageLabel(idx, c.petName))}</div>
        <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
        <div class="card-foot">
          <span class="foot-berry">${berryIcon(c.fill, 15)} ${b}</span>
          <span>${done}/${c.passages.length} stories</span>
          <span class="foot-visit">Visit &rarr;</span>
        </div>
      </button>`;
  }).join('');
  return `
    <div class="screen">
      <header class="header">
        <div class="brand">${logo(40)}<div>
          <div class="brand-title">The Reading Patch</div>
          <div class="brand-sub">Six story worlds. Six pets to grow. Read to feed them all!</div>
        </div></div>
        <div class="berry-pill">${logo(20)}<span class="berry-count">${totalBerries()}</span><span class="berry-label">berries in all</span></div>
      </header>
      <main class="home-grid">${cards}</main>
      <div class="parent-corner">Progress is saved on this device &middot; <button class="link" data-action="dashboard">Parent dashboard</button></div>
    </div>`;
}

function viewCat() {
  const c = cat();
  const b = state.berries[c.id] || 0;
  const idx = stageIdx(b);
  const next = STAGES[idx];
  const cur = idx === 0 ? 0 : STAGES[idx - 1];
  const pct = next ? Math.round(((b - cur) / (next - cur)) * 100) : 100;
  const done = c.passages.filter(p => state.records[p.id]).length;
  const nextText = next
    ? (next - b) + ' more berries until ' + stageLabel(idx + 1, c.petName)
    : c.petName + ' is fully grown \u2014 amazing!';
  const cards = c.passages.map((p, i) => {
    const rec = state.records[p.id];
    const st = rec ? rec.stars : 0;
    return `
      <button class="story-card" data-action="openStory" data-pid="${p.id}">
        <div class="story-top"><span class="num-chip">${i + 1}</span><span class="story-title">${esc(p.title)}</span></div>
        <div class="story-bottom">
          <span class="stars">${starRow(st)}</span>
          <span class="status">${rec ? 'Read again' : 'Read'} &rarr;</span>
        </div>
      </button>`;
  }).join('');
  return `
    <div class="screen" style="${catVars(c)}">
      <header class="cat-header">
        <button class="back-btn" data-action="home">&larr; All worlds</button>
        <span class="chip">${esc(c.name)}</span>
      </header>
      <main class="cat-main">
        <div class="pet-panel">
          <div class="pet">${petSVG(c.species, STAGE_KEYS[idx], c.fill)}</div>
          <div class="stage-name">${esc(stageLabel(idx, c.petName))}</div>
          <div class="stage-caption">${esc(caption(idx, c.petName))}</div>
          <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
          <div class="next-stage">${esc(nextText)}</div>
          <div class="pet-hint">Every right answer earns berries that help ${esc(c.petName)} grow.</div>
        </div>
        <div>
          <div class="stories-head">
            <div class="stories-title">Stories</div>
            <div class="stories-count">${done} of ${c.passages.length} finished</div>
          </div>
          <div class="story-grid">${cards}</div>
        </div>
      </main>
    </div>`;
}

function viewRead() {
  const c = cat();
  const p = passage();
  const paras = p.paras.map(t => `<p class="read-p">${esc(t)}</p>`).join('');
  const cta = state.quizStarted ? 'Back to the questions' : 'I\u2019m ready for the questions!';
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
          <h1 class="read-title">${esc(p.title)}</h1>
          ${paras}
        </div>
        <div class="center"><button class="btn-3d btn-primary" data-action="startQuiz">${cta}</button></div>
      </div>
    </div>`;
}

function feedback() {
  const p = passage();
  const q = p.questions[state.qIndex];
  const hint = state.phase === 'hint';
  const title = hint ? 'Almost! Here\u2019s a hint'
    : (state.lastCorrect ? (state.attempt === 0 ? 'Great thinking!' : 'You got it!') : 'Let\u2019s learn it together');
  const text = hint ? q.hint
    : (state.lastCorrect ? q.explain : 'The answer is \u201c' + q.choices[q.answer] + '.\u201d ' + q.explain);
  const bg = hint ? '#FFF4DC' : (state.lastCorrect ? '#E7F5EE' : '#FDECE9');
  const bd = hint ? '#E8A23D' : (state.lastCorrect ? '#3E9B6C' : '#E96A5C');
  return { title, text, bg, bd, showBerry: state.phase === 'revealed' && state.lastCorrect };
}

function viewQuiz() {
  const c = cat();
  const p = passage();
  const q = p.questions[state.qIndex];
  const total = p.questions.length;
  const revealed = state.phase === 'revealed';

  const dots = p.questions.map((_, i) => {
    const bg = i < state.qIndex ? '#5DB075' : (i === state.qIndex ? c.accent : '#E7DFCC');
    return `<span class="dot" style="background:${bg}"></span>`;
  }).join('');

  const choices = q.choices.map((t, i) => {
    const isWrong = state.wrong.includes(i);
    const isAns = i === q.answer;
    let cls = 'choice';
    if (isWrong) cls += ' wrong';
    if (revealed && isAns) cls += ' correct';
    if (revealed && !isAns && !isWrong) cls += ' dim';
    const disabled = (revealed || isWrong) ? 'disabled' : '';
    return `<button class="${cls}" data-action="pick" data-i="${i}" ${disabled}><span class="choice-letter">${'ABCD'[i]}</span><span>${esc(t)}</span></button>`;
  }).join('');

  const skillChip = `<span class="skill-chip">${esc(q.skill)}</span>`;
  const nextRow = revealed
    ? `<div class="next-row"><button class="next-btn" data-action="next">${state.qIndex + 1 >= total ? 'Finish the story!' : 'Next question'}</button></div>`
    : '';

  // feedback speech bubble (pet pops up), shown once the child has answered
  let bubble = '';
  if (state.phase !== 'answering') {
    const f = feedback();
    const idx = stageIdx(state.berries[c.id] || 0);
    const berryLine = f.showBerry
      ? `<div class="bubble-berry">+${state.lastEarned} ${state.lastEarned === 1 ? 'berry' : 'berries'} for ${esc(c.petName)}</div>` : '';
    bubble = `
      <div class="pet-bubble" style="--fb-bg:${f.bg};--fb-bd:${f.bd};">
        <div class="bubble">
          <div class="bubble-title">${esc(f.title)}</div>
          <div class="bubble-text">${esc(f.text)}</div>
          ${berryLine}
        </div>
        <div class="bubble-pet">${petSVG(c.species, STAGE_KEYS[idx], c.fill)}</div>
      </div>`;
  }

  return `
    <div class="screen" style="${catVars(c)}">
      <div class="quiz-wrap">
        <div class="quiz-topbar">
          <button class="back-btn" data-action="backStory">&larr; Read the story again</button>
          <div class="dots">${dots}</div>
        </div>
        <div class="quiz-card">
          <div class="qmeta"><span class="qnum">Question ${state.qIndex + 1} of ${total}</span>${skillChip}</div>
          <div class="question">${esc(q.q)}</div>
          <div class="choices">${choices}</div>
          ${nextRow}
        </div>
      </div>
      ${bubble}
    </div>`;
}

function viewDone() {
  const c = cat();
  const p = passage();
  const total = p.questions.length;
  const starN = state.results.filter(r => r !== 'miss').length;
  const idx = stageIdx(state.berries[c.id] || 0);
  const grew = idx > stageIdx(state.startBerries);

  const recap = state.results.map((r, i) => {
    const badge = r === 'first' ? { t: 'First try!', bg: '#E7F5EE', fg: '#2F7A55' }
      : (r === 'retry' ? { t: 'Second try', bg: '#FFF4DC', fg: '#A86E1F' }
        : { t: 'One to practice', bg: '#FDECE9', fg: '#C04B3C' });
    const explain = r !== 'first'
      ? `<div class="recap-explain">${esc(p.questions[i].explain)}</div>` : '';
    return `
      <div class="recap-item">
        <div class="recap-row">
          <div class="recap-q">${i + 1}. ${esc(p.questions[i].q)}</div>
          <span class="recap-badge" style="background:${badge.bg};color:${badge.fg}">${badge.t}</span>
        </div>
        ${explain}
      </div>`;
  }).join('');

  const grewBanner = grew
    ? `<div class="grew">${esc(c.petName)} grew! Say hello to ${esc(stageLabel(idx, c.petName))}!</div>` : '';

  return `
    <div class="screen" style="${catVars(c)}">
      <div class="done-wrap">
        <div class="done-card">
          <div class="pet">${petSVG(c.species, STAGE_KEYS[idx], c.fill)}</div>
          <h1 class="done-title">You finished the story!</h1>
          <div class="done-sub">${esc(p.title)} &middot; ${starN} out of ${total} correct</div>
          <div class="done-stars">${starRow(starN, 34)}</div>
          <div class="berry-pill-lg">${berryIcon(c.fill, 18)} +${state.runEarned} berries for ${esc(c.petName)}</div>
          ${grewBanner}
        </div>
        <div class="recap-card">
          <div class="recap-head">How you did</div>
          <div class="recap-list">${recap}</div>
        </div>
        <div class="done-actions">
          <button class="btn-3d btn-primary" data-action="backCat">More stories</button>
          <button class="btn-3d btn-ghost" data-action="home">All worlds</button>
        </div>
      </div>
    </div>`;
}

/* ---------- parent dashboard ---------- */
const SKILL_ORDER = [
  ['Main idea', '#6B79E8'], ['Detail', '#5DB075'], ['Why', '#E8A23D'], ['Inference', '#8E6FD0']
];

function mean(a) { return a.length ? a.reduce((x, y) => x + y, 0) / a.length : null; }
function median(a) {
  if (!a.length) return null;
  const s = [...a].sort((x, y) => x - y);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}
function fmtTime(sec) {
  if (sec == null) return '\u2014';
  return (sec >= 100 ? Math.round(sec) : (Math.round(sec * 10) / 10).toFixed(1)) + 's';
}
function skillTotals() {
  const acc = {};
  Object.values(state.stats).forEach(st => {
    Object.entries(st.skills || {}).forEach(([k, v]) => {
      const a = acc[k] || (acc[k] = { total: 0, firstCorrect: 0 });
      a.total += v.total; a.firstCorrect += v.firstCorrect;
    });
  });
  return acc;
}

function viewGate() {
  const g = state.gate;
  return `
    <div class="screen"><div class="dash-wrap">
      <div class="dash-topbar">
        <button class="back-btn" data-action="home">&larr; Home</button>
        <div class="dash-title">Parent dashboard</div>
        <span style="width:96px"></span>
      </div>
      <div class="gate-card">
        <div class="panel-title">Grown-ups only</div>
        <div class="panel-sub">Solve this to open the dashboard.</div>
        <div class="gate-prompt">${g.prompt} = ?</div>
        <input id="gate-input" class="gate-input" type="number" inputmode="numeric" autocomplete="off" aria-label="Answer">
        <div class="gate-err">${esc(g.error || '')}</div>
        <button class="btn-3d btn-primary" data-action="gateSubmit">Enter</button>
      </div>
    </div></div>`;
}

function viewDashboard() {
  if (!state.gateOpen) return viewGate();

  const TOTAL = CATEGORIES.reduce((n, c) => n + c.passages.length, 0);
  const doneCount = Object.keys(state.records).length;
  const totalStars = Object.values(state.records).reduce((n, r) => n + r.stars, 0);
  const allTimes = Object.values(state.stats).flatMap(st => st.times || []);

  const rows = CATEGORIES.map(c => {
    const st = state.stats[c.id] || { times: [], skills: {} };
    const cdone = c.passages.filter(p => state.records[p.id]).length;
    const cstars = c.passages.reduce((n, p) => n + (state.records[p.id] ? state.records[p.id].stars : 0), 0);
    return `
      <div class="cat-row">
        <div class="cat-name-cell"><span class="cat-dot" style="background:${c.fill}"></span>${esc(c.name)}</div>
        <div><span class="cell-num">${cdone}</span><span class="cell-sub">/${c.passages.length}</span></div>
        <div class="cell-num">${cstars}</div>
        <div class="cell-num">${fmtTime(mean(st.times))}</div>
        <div class="cell-num">${fmtTime(median(st.times))}</div>
      </div>`;
  }).join('');

  const skills = skillTotals();
  const skillBars = SKILL_ORDER.map(([name, col]) => {
    const v = skills[name];
    const pct = v && v.total ? Math.round((v.firstCorrect / v.total) * 100) : null;
    return `
      <div class="skill-bar-row">
        <div class="skill-label">${name}</div>
        <div class="bar-track"><div class="bar-fill" style="width:${pct == null ? 0 : pct}%;background:${col}"></div></div>
        <div class="skill-pct">${pct == null ? '\u2014' : pct + '%'}</div>
      </div>`;
  }).join('');

  const hasData = allTimes.length > 0;

  return `
    <div class="screen"><div class="dash-wrap">
      <div class="dash-topbar">
        <button class="back-btn" data-action="home">&larr; Home</button>
        <div class="dash-title">Parent dashboard</div>
        <span style="width:96px"></span>
      </div>

      <div class="summary-row">
        <div class="summary-card"><div class="summary-num">${doneCount}<span class="summary-of">/${TOTAL}</span></div><div class="summary-label">stories completed</div></div>
        <div class="summary-card"><div class="summary-num">${totalStars}</div><div class="summary-label">stars earned</div></div>
        <div class="summary-card"><div class="summary-num">${allTimes.length}</div><div class="summary-label">questions answered</div></div>
      </div>

      <div class="panel">
        <div class="panel-title">Time to answer, by category</div>
        <div class="panel-sub">${hasData
          ? 'Overall: average ' + fmtTime(mean(allTimes)) + ' &middot; median ' + fmtTime(median(allTimes)) + ' across ' + allTimes.length + ' answers'
          : 'No answers recorded yet \u2014 finish a story to see timing here.'}</div>
        <div class="table-scroll"><div class="cat-table">
          <div class="cat-row head">
            <div>World</div><div>Stories</div><div>Stars</div><div>Avg time</div><div>Median</div>
          </div>
          ${rows}
        </div></div>
      </div>

      <div class="panel">
        <div class="panel-title">Comprehension by skill</div>
        <div class="panel-sub">Share of questions answered correctly on the first try.</div>
        <div class="skill-bars">${skillBars}</div>
      </div>

      <div class="panel danger">
        <div>
          <div class="panel-title" style="margin-bottom:2px">Reset progress</div>
          <div class="panel-sub" style="margin-bottom:0">Clears all stars, berries, and stats on this device.</div>
        </div>
        <button class="btn-danger" data-action="reset">Start over</button>
      </div>

      <div class="dash-note">Progress is stored on this device only \u2014 no accounts, no cloud sync.</div>
    </div></div>`;
}

/* ---------- render ---------- */
const root = document.getElementById('app');
function render() {
  const view = { home: viewHome, cat: viewCat, read: viewRead, quiz: viewQuiz, done: viewDone, dashboard: viewDashboard }[state.screen];
  root.innerHTML = view();
  window.scrollTo(0, 0);
}

/* ---------- actions ---------- */
function openStory(pid) {
  Object.assign(state, {
    screen: 'read', pid, qIndex: 0, attempt: 0, wrong: [], results: [],
    runEarned: 0, lastEarned: 0, phase: 'answering', lastCorrect: false,
    quizStarted: false, startBerries: state.berries[state.catId] || 0,
    qStart: 0, qAnswered: false
  });
}

/* Record one answer's timing + skill accuracy into per-category stats.
 * Called once per question, on the child's FIRST pick. */
function recordAnswer(correctFirstTry, skill, durationSec) {
  const st = state.stats[state.catId] || (state.stats[state.catId] = { times: [], skills: {} });
  st.times.push(Math.round(durationSec * 10) / 10);
  const sk = st.skills[skill] || (st.skills[skill] = { total: 0, firstCorrect: 0 });
  sk.total++;
  if (correctFirstTry) sk.firstCorrect++;
}

function pick(i) {
  const q = passage().questions[state.qIndex];
  if (state.phase === 'revealed' || state.wrong.includes(i)) return;
  if (!state.qAnswered) {
    state.qAnswered = true;
    recordAnswer(i === q.answer, q.skill, (Date.now() - state.qStart) / 1000);
  }
  if (i === q.answer) {
    const earned = state.attempt === 0 ? 2 : 1;
    state.phase = 'revealed'; state.lastCorrect = true;
    state.runEarned += earned; state.lastEarned = earned;
  } else if (state.attempt === 0) {
    state.attempt = 1; state.wrong.push(i); state.phase = 'hint';
  } else {
    state.wrong.push(i); state.phase = 'revealed'; state.lastCorrect = false;
  }
  render();
}

function next() {
  const p = passage();
  const total = p.questions.length;
  state.results.push(state.lastCorrect ? (state.attempt === 0 ? 'first' : 'retry') : 'miss');
  if (state.qIndex + 1 >= total) { finish(); return; }
  Object.assign(state, { qIndex: state.qIndex + 1, attempt: 0, wrong: [], phase: 'answering', lastCorrect: false, lastEarned: 0, qStart: Date.now(), qAnswered: false });
  render();
}

function finish() {
  const starN = state.results.filter(r => r !== 'miss').length;
  const prev = state.records[state.pid];
  state.records[state.pid] = { stars: Math.max(prev ? prev.stars : 0, starN) };
  state.berries[state.catId] = (state.berries[state.catId] || 0) + state.runEarned;
  saveProgress();
  state.screen = 'done';
  render();
}

function reset() {
  if (!window.confirm('Start over? This clears all stars, berries, and stats for every pet on this device.')) return;
  state.berries = {}; state.records = {}; state.stats = {};
  saveProgress();
  render();
}

/* grown-ups gate: a small multiplication challenge before the dashboard opens */
function makeGate() {
  const a = 3 + Math.floor(Math.random() * 7);
  const b = 3 + Math.floor(Math.random() * 7);
  return { prompt: a + ' \u00d7 ' + b, answer: a * b, error: '' };
}
function handleGate() {
  const el = document.getElementById('gate-input');
  const val = el ? parseInt(el.value, 10) : NaN;
  if (val === state.gate.answer) { state.gateOpen = true; state.gate.error = ''; }
  else { state.gate = makeGate(); state.gate.error = 'Not quite \u2014 try again.'; }
  render();
}

root.addEventListener('click', e => {
  const el = e.target.closest('[data-action]');
  if (!el) return;
  const a = el.dataset.action;
  switch (a) {
    case 'openCat': state.catId = el.dataset.cat; state.screen = 'cat'; render(); break;
    case 'home': state.screen = 'home'; render(); break;
    case 'openStory': openStory(el.dataset.pid); render(); break;
    case 'backCat': state.screen = 'cat'; render(); break;
    case 'backStory': state.screen = 'read'; render(); break;
    case 'startQuiz': state.quizStarted = true; if (!state.qAnswered) state.qStart = Date.now(); state.screen = 'quiz'; render(); break;
    case 'pick': pick(parseInt(el.dataset.i, 10)); break;
    case 'next': next(); break;
    case 'reset': reset(); break;
    case 'dashboard': if (!state.gateOpen) state.gate = makeGate(); state.screen = 'dashboard'; render(); break;
    case 'gateSubmit': handleGate(); break;
    case 'textUp': state.textSize = Math.min(MAX_TEXT, state.textSize + 2); render(); break;
    case 'textDown': state.textSize = Math.max(MIN_TEXT, state.textSize - 2); render(); break;
  }
});

root.addEventListener('keydown', e => {
  if (e.target && e.target.id === 'gate-input' && e.key === 'Enter') { e.preventDefault(); handleGate(); }
});

/* ---------- start ---------- */
loadProgress();
render();
