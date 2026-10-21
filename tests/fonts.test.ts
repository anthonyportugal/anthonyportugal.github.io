import { test } from 'node:test';
import assert from 'node:assert/strict';
import palette from '@sanctuary-ds/tokens/palette' with { type: 'json' };
import { fontBridge, fontRoles } from '../src/data/fonts.ts';

// The font setup is derived from the palette, so a new release of the tokens that
// renames a role or drops a weight must fail here, not silently in the browser.
const roles = Object.keys(palette.fonts);

test('every palette role gets a font variable', () => {
  assert.deepEqual(
    fontRoles.map((role) => role.cssVariable),
    roles.map((role) => `--font-${role}`),
  );
});

test('only the regular body text is preloaded', () => {
  const preloaded = fontRoles.filter((role) => role.preload !== false);
  assert.deepEqual(preloaded, [
    { cssVariable: '--font-text', preload: [{ weight: 400, style: 'normal' }] },
  ]);
});

test('the bridge points every family token at its hosted font', () => {
  assert.ok(fontBridge.startsWith(':root:root{'));
  for (const role of roles) {
    assert.ok(
      fontBridge.includes(`--san-font-family-${role}:var(--font-${role});`),
      `missing bridge for ${role}`,
    );
  }
});
