import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import { CATEGORIES } from '../passages/index.js';

test('test harness resolves ESM imports of app modules', () => {
  assert.equal(CATEGORIES.length, 6);
});

test('model vocabulary artifact is present and sane', () => {
  const v = new Set(fs.readFileSync('data/model-vocab.txt', 'utf8').split('\n'));
  for (const w of ['the', 'she', 'with', 'beaver', '[unk]']) {
    assert.ok(v.has(w), `expected ${w} in model vocabulary`);
  }
  assert.ok(v.size > 100000, `expected >100k symbols, got ${v.size}`);
});
