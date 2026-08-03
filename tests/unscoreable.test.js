import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import { normalize, grammarWords, isUnscoreable, UNSCOREABLE, segment, subTokens } from '../miscue.js';
import { CATEGORIES } from '../passages/index.js';

test('normalize lowercases and strips punctuation but keeps internal apostrophes', () => {
  assert.equal(normalize('Beaver,'), 'beaver');
  assert.equal(normalize('"Don\'t!"'), "don't");
  assert.equal(normalize('--'), '');
  assert.equal(normalize('I’m'), "i'm");
});

test('grammarWords splits possessives and drops unscoreable words', () => {
  assert.deepEqual(grammarWords("Mateo's dog ran"), ['mateo', "'s", 'dog', 'ran']);
  assert.deepEqual(grammarWords('YTRAP AZZIP'), []);
});

test('known unscoreable words are flagged', () => {
  for (const w of ['ytrap', 'azzip', 'abuela', 'despacio', 'churro', 'plip']) {
    assert.ok(isUnscoreable(w), `${w} should be unscoreable`);
  }
  assert.ok(!isUnscoreable('beaver'));
});

test('hyphenated compounds split into vocabulary words instead of auto-passing', () => {
  assert.deepEqual(subTokens('great-grandchildren'), ['great', 'grandchildren']);
  assert.deepEqual(subTokens('orange-and-black'), ['orange', 'and', 'black']);
  assert.deepEqual(subTokens("Mateo's"), ['mateo', 's']);
  // They must be scoreable, or a child could skip them silently.
  assert.ok(!isUnscoreable('great-grandchildren'));
  assert.ok(!isUnscoreable('orange-and-black'));
});

/* Documents a KNOWN GAP rather than asserting desired behavior: normalize()
 * strips digits, so numerals have no sub-tokens and auto-pass. A child can skip
 * "1955" and it is never flagged (~20 occurrences, mostly dates in the Amazing
 * People world). Left as-is deliberately: reading numerals aloud is ambiguous
 * ("nineteen fifty-five" vs "one thousand nine hundred fifty-five"), and guessing
 * wrong would produce false corrections — the damaging direction. */
test('numerals auto-pass (known gap, see comment)', () => {
  assert.deepEqual(subTokens('1955,'), []);
  assert.ok(isUnscoreable('1955,'));
});

/* REGRESSION GUARD: this is what stops a future story reintroducing the
 * my-backwards trap, where a child is blocked on a line no recognizer can match.
 * Checks SUB-tokens, since that is the granularity the grammar is built at. */
test('every out-of-vocabulary sub-token in the corpus is marked unscoreable', () => {
  const vocab = new Set(fs.readFileSync('data/model-vocab.txt', 'utf8').split('\n'));
  vocab.add('s');   // possessive suffix; the vocabulary symbol is "'s"
  const missing = new Set();
  for (const c of CATEGORIES) {
    for (const p of c.passages) {
      for (const line of segment(p.paras)) {
        for (const raw of line.split(/\s+/)) {
          for (const t of subTokens(raw)) {
            if (!vocab.has(t) && !UNSCOREABLE.has(t)) missing.add(t);
          }
        }
      }
    }
  }
  assert.deepEqual([...missing], [],
    `sub-tokens the model cannot represent and that are not marked unscoreable: ${[...missing]}`);
});
