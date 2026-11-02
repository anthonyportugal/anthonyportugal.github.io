import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { flavors, pigments } from '@sanctuary-ds/tokens/palette';

// The layout and the rose window read these parts of the palette. A new release
// of the tokens that renames or drops one must fail here, not at render time.
const HEX = /^#[0-9a-f]{6}$/i;

test('the theme-color flavors expose a surface color', () => {
  assert.match(flavors.compline.colors.surface.hex, HEX);
  assert.match(flavors.lauds.colors.surface.hex, HEX);
});

test('every flavor has a name and a surface color for the rose window', () => {
  for (const [id, flavor] of Object.entries(flavors)) {
    assert.ok(flavor.name, `${id} has no name`);
    assert.match(flavor.colors.surface.hex, HEX, `${id} has no surface hex`);
  }
});

test('every pigment has the shades the rose window paints its glass with', async () => {
  const ids = Object.keys(pigments);
  assert.ok(ids.length > 0, 'the palette has no pigments');

  const require = createRequire(import.meta.url);
  const css = await readFile(require.resolve('@sanctuary-ds/tokens/css'), 'utf8');
  for (const id of ids) {
    for (const shade of [300, 500, 600, 900]) {
      assert.ok(css.includes(`--san-pigment-${id}-${shade}:`), `--san-pigment-${id}-${shade}`);
    }
  }
});
