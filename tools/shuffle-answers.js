/* tools/shuffle-answers.js — one-time migration to fix answer-position bias.
 *
 * 385 of 495 correct answers (77.8%) sat at index 1 ("B"), and 97% in Fables.
 * A child who never read and always tapped B averaged 3.9/5, and 4.9/5 in
 * Fables — enough for full berries and a growing pet without reading a word.
 *
 * This rewrites each question's `choices` order and its `answer` index in
 * place. The correct answer TEXT never changes; only where it sits.
 *
 * Balance without predictability: target positions are drawn from a bag of
 * [0,1,2,3] that is reshuffled whenever it empties. That keeps the global
 * distribution within one of perfectly even while making the next answer
 * genuinely unguessable — a strict A,B,C,D,A,B,C,D cycle would be balanced but
 * just as gameable as all-B.
 *
 * Usage:  node tools/shuffle-answers.js [--dry]
 */

import fs from 'node:fs';

const FILES = [
  ...['animals', 'life', 'space', 'mystery', 'people', 'fables'].map(n => `passages/${n}.js`),
  // NOT dead code: passages/animals.js and passages/life.js import 10 stories
  // (50 questions) from here. Omitting it would leave those questions biased.
  'passages.js'
];
const DRY = process.argv.includes('--dry');
const SEED = 20260803;   // fixed, so the migration is reproducible and reviewable

/* deterministic PRNG (mulberry32) */
function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rand = rng(SEED);
const shuffled = arr => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

let bag = [];
function nextTarget(len) {
  if (!bag.length) bag = shuffled([0, 1, 2, 3]);
  // Guard for the (non-existent) case of a question with fewer than 4 choices.
  let t = bag.pop();
  while (t >= len) t = Math.floor(rand() * len);
  return t;
}

/* Scan a JS array literal starting at `[`, honouring quotes and escapes.
 * Returns { items: [raw source of each element], end: index after `]` }. */
function parseArrayLiteral(src, start) {
  if (src[start] !== '[') throw new Error('expected [ at ' + start);
  const items = [];
  let depth = 0, quote = null, cur = '', i = start;
  for (; i < src.length; i++) {
    const ch = src[i];
    if (quote) {
      cur += ch;
      if (ch === '\\') { cur += src[++i]; continue; }
      if (ch === quote) quote = null;
      continue;
    }
    if (ch === "'" || ch === '"' || ch === '`') { quote = ch; cur += ch; continue; }
    if (ch === '[') { depth++; if (depth === 1) continue; }
    if (ch === ']') { depth--; if (depth === 0) { if (cur.trim()) items.push(cur.trim()); i++; break; } }
    if (ch === ',' && depth === 1) { items.push(cur.trim()); cur = ''; continue; }
    cur += ch;
  }
  if (depth !== 0) throw new Error('unterminated array literal at ' + start);
  return { items, end: i };
}

let totalQ = 0, changed = 0;
const before = [0, 0, 0, 0], after = [0, 0, 0, 0];

for (const file of FILES) {
  const src = fs.readFileSync(file, 'utf8');
  const lines = src.split('\n');

  const out = lines.map(line => {
    const ci = line.indexOf('choices: [');
    if (ci === -1) return line;
    const am = line.match(/answer:\s*(\d+)/);
    if (!am) return line;

    const { items, end } = parseArrayLiteral(line, ci + 'choices: '.length);
    const oldAnswer = Number(am[1]);
    totalQ++;
    before[oldAnswer]++;

    const correct = items[oldAnswer];
    const distractors = shuffled(items.filter((_, i) => i !== oldAnswer));
    const target = nextTarget(items.length);

    const reordered = [];
    let d = 0;
    for (let i = 0; i < items.length; i++) reordered.push(i === target ? correct : distractors[d++]);
    after[target]++;
    if (target !== oldAnswer) changed++;

    const rebuilt = 'choices: [' + reordered.join(', ') + ']';
    const head = line.slice(0, ci) + rebuilt + line.slice(end);
    return head.replace(/answer:\s*\d+/, 'answer: ' + target);
  }).join('\n');

  if (!DRY) fs.writeFileSync(file, out);
  process.stdout.write(`${DRY ? 'would rewrite' : 'rewrote'} ${file}\n`);
}

const pct = a => a.map(n => (n / totalQ * 100).toFixed(1) + '%').join('  ');
console.log(`\nquestions: ${totalQ}   repositioned: ${changed}`);
console.log('before  A/B/C/D:', before.join(' / '), ' -> ', pct.call(null, before));
console.log('after   A/B/C/D:', after.join(' / '), ' -> ', pct.call(null, after));
