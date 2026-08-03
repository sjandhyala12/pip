import { test } from 'node:test';
import assert from 'node:assert';
import { classify } from '../miscue.js';

const heard = (...ws) => ws.map(w => ({ word: w, conf: 0.95 }));
const kinds = r => r.miscues.map(m => `${m.kind}:${m.word}`);

test('a perfect read produces no miscues', () => {
  const r = classify(['the', 'cat', 'sat'], heard('the', 'cat', 'sat'));
  assert.deepEqual(kinds(r), []);
  assert.deepEqual(r.matched, [0, 1, 2]);
});

test('a skipped word is an omission', () => {
  const r = classify(['the', 'big', 'cat'], heard('the', 'cat'));
  assert.deepEqual(kinds(r), ['omission:big']);
});

test('a wrong word is a substitution', () => {
  const r = classify(['the', 'big', 'cat'], heard('the', 'bad', 'cat'));
  assert.deepEqual(kinds(r), ['substitution:big']);
});

test('an invented word surfaces as [unk] and is a substitution', () => {
  const r = classify(['the', 'big', 'cat'], heard('the', '[unk]', 'cat'));
  assert.deepEqual(kinds(r), ['substitution:big']);
});

test('a self-correction is not an error', () => {
  const r = classify(['the', 'big', 'cat'], heard('the', 'bad', 'big', 'cat'));
  assert.deepEqual(kinds(r), []);
});

test('a repetition is not an error', () => {
  const r = classify(['the', 'big', 'cat'], heard('the', 'the', 'big', 'cat'));
  assert.deepEqual(kinds(r), []);
});

test('fillers are ignored', () => {
  const r = classify(['the', 'cat'], heard('um', 'the', 'uh', 'cat'));
  assert.deepEqual(kinds(r), []);
});

test('low-confidence words never raise a miscue', () => {
  const r = classify(['the', 'big', 'cat'],
    [{ word: 'the', conf: 0.9 }, { word: '[unk]', conf: 0.2 }, { word: 'cat', conf: 0.9 }]);
  assert.deepEqual(kinds(r), []);
});

test('silence is reported as silent, not as miscues', () => {
  const r = classify(['the', 'cat'], []);
  assert.equal(r.silent, true);
  assert.deepEqual(kinds(r), []);
});

test('[unk] aligned to an unscoreable word passes', () => {
  const r = classify(['said', 'abuela'], heard('said', '[unk]'));
  assert.deepEqual(kinds(r), []);
});

test('[unk] one position off from an unscoreable word is absorbed', () => {
  const r = classify(['abuela', 'said', 'yes'], heard('[unk]', '[unk]', 'said', 'yes'));
  assert.deepEqual(kinds(r), []);
});

test('an unscoreable word aligned to a gap passes', () => {
  const r = classify(['said', 'abuela', 'softly'], heard('said', 'softly'));
  assert.deepEqual(kinds(r), []);
});

test('two adjacent unscoreable words with two [unk]s pass', () => {
  const r = classify(['ytrap', 'azzip'], heard('[unk]', '[unk]'));
  assert.deepEqual(kinds(r), []);
});

test('a line that is entirely unscoreable passes with no listening', () => {
  const r = classify(['ytrap', 'azzip'], []);
  assert.deepEqual(kinds(r), []);
  assert.equal(r.silent, false, 'an all-unscoreable line must not report silence');
});

test('a genuine error elsewhere in a line containing an unscoreable word is still caught', () => {
  const r = classify(['abuela', 'made', 'warm', 'tamales'],
    heard('[unk]', 'made', 'cold', 'tamales'));
  assert.deepEqual(kinds(r), ['substitution:warm']);
});

test('punctuation-only tokens hold their position and never block', () => {
  const r = classify(['the', '--', 'cat', 'sat'], heard('the', 'cat', 'sat'));
  assert.deepEqual(kinds(r), []);
  assert.ok(r.matched.includes(3), 'index 3 (sat) must still be index 3');
});

test("a correctly read possessive is not a miscue", () => {
  const r = classify(["Mateo's", 'dog', 'ran'], heard('mateo', "'s", 'dog', 'ran'));
  assert.deepEqual(kinds(r), []);
  assert.deepEqual(r.matched, [0, 1, 2], 'indices must stay aligned to screen tokens');
});

test('a possessive returned already joined is also fine', () => {
  const r = classify(["Mateo's", 'dog'], heard("mateo's", 'dog'));
  assert.deepEqual(kinds(r), []);
});

test('a genuinely misread possessive is still caught', () => {
  const r = classify(["Mateo's", 'dog'], heard('carlos', "'s", 'dog'));
  assert.deepEqual(kinds(r), ["substitution:mateo's"]);
});

test('folding does not swallow a following real word', () => {
  const r = classify(["Mateo's", 'dog', 'ran'], heard('mateo', "'s", 'cat', 'ran'));
  assert.deepEqual(kinds(r), ['substitution:dog']);
});
