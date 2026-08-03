import { test } from 'node:test';
import assert from 'node:assert';
import { quotaVerdict } from '../listen.js';

test('ample free space is persistent', () => {
  assert.equal(quotaVerdict({ quota: 500e6, usage: 10e6 }), 'persistent');
});

test('genuinely too little space is insufficient', () => {
  assert.equal(quotaVerdict({ quota: 80e6, usage: 60e6 }), 'insufficient');
});

test('a missing estimate is persistent, not insufficient', () => {
  assert.equal(quotaVerdict(null), 'persistent');
});

test('an empty estimate object is persistent, not insufficient', () => {
  assert.equal(quotaVerdict({}), 'persistent');
});

test('partial estimate data is persistent, not insufficient', () => {
  assert.equal(quotaVerdict({ quota: 500e6 }), 'persistent');
  assert.equal(quotaVerdict({ usage: 10e6 }), 'persistent');
});
