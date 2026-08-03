import { test } from 'node:test';
import assert from 'node:assert';
import { segment, MAX_LINE_WORDS } from '../miscue.js';
import { CATEGORIES } from '../passages/index.js';

test('splits on sentence-final punctuation', () => {
  assert.deepEqual(segment(['The cat sat. The dog ran.']),
    ['The cat sat.', 'The dog ran.']);
});

test('does not split mid-abbreviation', () => {
  assert.deepEqual(segment(['Mr. Fox ran home. He was tired.']),
    ['Mr. Fox ran home.', 'He was tired.']);
});

test('keeps a closing quote attached to its sentence', () => {
  assert.deepEqual(segment(['"I am bored," sighed Nora. She sat down.']),
    ['"I am bored," sighed Nora.', 'She sat down.']);
});

test('splits an over-long sentence at a clause boundary', () => {
  const long = 'He had simply found thousands of ways that did not work, '
             + 'and each one brought him closer to the answer.';
  const lines = segment([long]);
  assert.ok(lines.length > 1, 'expected the long sentence to split');
  for (const l of lines) {
    assert.ok(l.split(/\s+/).length <= MAX_LINE_WORDS, `line too long: ${l}`);
  }
});

test('no line in the whole corpus exceeds the cap', () => {
  for (const c of CATEGORIES) {
    for (const p of c.passages) {
      for (const line of segment(p.paras)) {
        assert.ok(line.split(/\s+/).length <= MAX_LINE_WORDS,
          `${p.id}: ${line.split(/\s+/).length} words - ${line}`);
      }
    }
  }
});

test('segmentation loses no words', () => {
  for (const c of CATEGORIES) {
    for (const p of c.passages) {
      const before = p.paras.join(' ').split(/\s+/).filter(Boolean).length;
      const after = segment(p.paras).join(' ').split(/\s+/).filter(Boolean).length;
      assert.equal(after, before, `${p.id}: word count changed`);
    }
  }
});
