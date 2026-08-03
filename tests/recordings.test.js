import { test } from 'node:test';
import assert from 'node:assert';
import { classify } from '../miscue.js';

/* Regression tests built from REAL recorded read-aloud trials (2026-08-03,
 * Firefox 153 / macOS, one adult reader). These are actual Vosk transcripts,
 * not synthetic fixtures — they are the evidence behind the function-word rule,
 * the optional possessive suffix, and the order-insensitive omission check.
 *
 * The clean trials are the important ones: each is a line read CORRECTLY, and
 * flagging any of them is the failure this whole design exists to prevent.
 */

const h = pairs => pairs.map(([word, conf]) => ({ word, conf }));
const run = (line, pairs) => classify(line.split(/\s+/), h(pairs));

/* ---- correctly read lines must never be flagged ---- */

test('clean read: possessive suffix emitted', () => {
  const r = run("Beavers are nature's builders.",
    [['beavers',1],['are',1],['nature',1],["'s",0.772985],['builders',1]]);
  assert.deepEqual(r.miscues, []);
});

test('clean read: recogniser dropped "is"', () => {
  const r = run('That is more than half the day!',
    [['that',1],['more',1],['than',1],['half',1],['than',1],['the',0.908855],['half',1],['the',1],['day',1]]);
  assert.deepEqual(r.miscues, [], 'a dropped function word must not be flagged');
});

test('clean read: duplicated and out-of-order words', () => {
  const r = run("A camel's hump is full of fat, not water.",
    [['a',1],['camel',1],["'s",0.611151],['hump',1],['is',0.5],['full',1],['of',1],['water',1],
     ['a',0.308824],['full',1],['a',0.756144],['fat',1],['not',1],['water',1]]);
  assert.deepEqual(r.miscues, []);
});

test('clean read: hyphenated compound with "and" misheard as "an"', () => {
  const r = run('Millions of orange-and-black monarch butterflies begin an enormous journey south.',
    [['millions',1],['black',1],['an',0.537936],['orange',0.920781],['monarch',1],['butterflies',1],
     ['begin',1],['an',0.867968],['enormous',1],['journey',1],['south',1]]);
  assert.deepEqual(r.miscues, []);
});

test('clean read: fast delivery', () => {
  const r = run('So cats rested to save that energy up.',
    [['so',1],['cats',1],['rested',1],['to',1],['save',1],['that',1],['energy',1],['up',1]]);
  assert.deepEqual(r.miscues, []);
});

test('clean read: quiet voice, leading "and" lost', () => {
  const r = run('and hunting takes a lot of energy.',
    [['hunting',1],['hunting',0.962125],['takes',0.896755],['a',0.452327],['lot',1],['of',1],['energy',1]]);
  assert.deepEqual(r.miscues, []);
});

test('clean read: slow delivery, "up" dropped', () => {
  const r = run('ready to jump up and play.',
    [['ready',1],['to',1],['jump',1],['and',1],['play',1]]);
  assert.deepEqual(r.miscues, []);
});

test('self-correction is not an error', () => {
  const r = run('So cats rested to save that energy up.',
    [['so',1],['so',0.896715],['[unk]',1],['cats',1],['rested',1],['to',1],['save',1],
     ['that',1],['energy',1],['up',1]]);
  assert.deepEqual(r.miscues, []);
});

/* ---- real mistakes must still be caught ---- */

test('skipped content word is caught', () => {
  const r = run("A camel's hump is full of fat, not water.",
    [['a',1],['camel',1],["'s",0.521146],['hump',1],['is',0.5],['a',0.523126],['fat',1],['not',1],['water',1]]);
  assert.deepEqual(r.miscues.map(m => `${m.kind}:${m.word}`), ['omission:full']);
});

test('second skipped content word is caught', () => {
  const r = run('That is more than half the day!',
    [['that',1],['is',1],['more',1],['than',1],['the',0.871868],['day',1]]);
  assert.deepEqual(r.miscues.map(m => `${m.kind}:${m.word}`), ['omission:half']);
});

test('substituted word is caught', () => {
  const r = run('So cats rested to save that energy up.',
    [['so',1],['[unk]',1],['rested',1],['to',1],['save',1],['that',1],['energy',1],['up',1]]);
  assert.deepEqual(r.miscues.map(m => `${m.kind}:${m.word}`), ['substitution:cats']);
});

test('invented word is caught', () => {
  const r = run('That is more than half the day!',
    [['that',1],['is',1],['more',1],['than',0.715501],['[unk]',1],['the',1],['the',0.607947],['day',1]]);
  assert.deepEqual(r.miscues.map(m => `${m.kind}:${m.word}`), ['substitution:half']);
});

test('silence is reported as silence, not as errors', () => {
  const r = run('and hunting takes a lot of energy.', []);
  assert.equal(r.silent, true);
  assert.deepEqual(r.miscues, []);
});

/* ---- the function-word rule must not become blanket amnesty ---- */

test('genuinely missing CONTENT words are still caught (clipped session)', () => {
  // From the earlier session where the mic opened late and clipped the opening.
  const r = run('Millions of orange-and-black monarch butterflies begin an enormous journey south.',
    [['of',1],['orange',1],['and',0.509675],['black',1],['monarch',1],['butterflies',1],
     ['begin',1],['an',0.500351],['enormous',1],['journey',1],['south',1]]);
  assert.ok(r.miscues.some(m => m.word === 'millions'),
    'a missing content word must still be flagged even though function words are exempt');
});
