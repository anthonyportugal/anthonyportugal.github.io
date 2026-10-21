import { test } from 'node:test';
import assert from 'node:assert/strict';
import { durationMs } from '../src/lib/duration.ts';

test('reads milliseconds and seconds', () => {
  assert.equal(durationMs('900ms', 0), 900);
  assert.equal(durationMs('0.9s', 0), 900);
  assert.equal(durationMs(' 1.5s ', 0), 1500);
});

test('falls back when the token is missing or unreadable', () => {
  assert.equal(durationMs('', 900), 900);
  assert.equal(durationMs('slow', 900), 900);
  assert.equal(durationMs('900', 900), 900);
  assert.equal(durationMs('-1s', 900), 900);
});
