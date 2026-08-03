import { test } from 'node:test';
import assert from 'node:assert';
import { CATEGORIES } from '../passages/index.js';

/* Guards against answer-position bias returning.
 *
 * Before the 2026-08-03 migration, 385 of 495 correct answers (77.8%) sat at
 * index 1 — 97% in Fables, where C and D were never correct even once. A child
 * who never read and always tapped B averaged 3.9/5, and 4.9/5 in Fables:
 * enough for full berries and a growing pet without reading a word. That made
 * stars, comprehension-by-skill and the practice word list meaningless.
 *
 * New content must keep the spread even. See tools/shuffle-answers.js.
 */

function distribution(questions) {
  const d = [0, 0, 0, 0];
  questions.forEach(q => d[q.answer]++);
  return d;
}

const ALL = CATEGORIES.flatMap(c => c.passages.flatMap(p => p.questions));

test('no answer position is over-represented overall', () => {
  const d = distribution(ALL);
  const n = ALL.length;
  d.forEach((count, i) => {
    const pct = count / n * 100;
    assert.ok(pct > 15 && pct < 35,
      `position ${'ABCD'[i]} holds ${pct.toFixed(1)}% of answers (${count}/${n}); expected roughly 25%`);
  });
});

test('every answer position is used in every world', () => {
  for (const c of CATEGORIES) {
    const d = distribution(c.passages.flatMap(p => p.questions));
    d.forEach((count, i) => {
      assert.ok(count > 0,
        `${c.id}: position ${'ABCD'[i]} is never correct — a child can rule it out`);
    });
  }
});

test('always picking one position scores no better than chance', () => {
  const n = ALL.length;
  const d = distribution(ALL);
  const best = Math.max(...d) / n * 5;
  assert.ok(best < 2.0,
    `always picking the most common position scores ${best.toFixed(1)}/5 without reading; must stay near chance (1.25/5)`);
});

test('answer indices are in range and choices are intact', () => {
  for (const q of ALL) {
    assert.equal(q.choices.length, 4);
    assert.ok(q.answer >= 0 && q.answer < 4, `answer ${q.answer} out of range`);
    assert.equal(new Set(q.choices).size, 4, `duplicate choices in: ${q.q}`);
  }
});
