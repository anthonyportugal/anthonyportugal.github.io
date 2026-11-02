import { test } from 'node:test';
import assert from 'node:assert/strict';
import { requiredChain } from '../src/lib/layers.ts';

const layers = [
  { name: 'core', requires: [] },
  { name: 'cli', requires: ['core'] },
  { name: 'desktop', requires: ['cli'] },
  { name: 'wm/mangowm', requires: ['desktop'] },
  { name: 'system', requires: [] },
];

test('follows requirements transitively, nearest first', () => {
  assert.deepEqual(requiredChain('wm/mangowm', layers), ['desktop', 'cli', 'core']);
});

test('a layer without requirements brings nothing with it', () => {
  assert.deepEqual(requiredChain('core', layers), []);
  assert.deepEqual(requiredChain('system', layers), []);
});

test('a shared requirement appears once and a cycle ends', () => {
  const tangled = [
    { name: 'a', requires: ['b', 'c'] },
    { name: 'b', requires: ['c'] },
    { name: 'c', requires: ['a'] },
  ];
  assert.deepEqual(requiredChain('a', tangled), ['b', 'c']);
});
