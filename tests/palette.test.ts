import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
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

  const css = await readFile(
    fileURLToPath(import.meta.resolve('@sanctuary-ds/tokens/css')),
    'utf8'
  );
  const declared = rootProperties(css);
  for (const id of ids) {
    for (const shade of [300, 500, 600, 900]) {
      const name = `--san-pigment-${id}-${shade}`;
      assert.ok(declared.has(name), `${name} is not declared on :root`);
    }
  }
});

// The custom properties declared in the stylesheet's top-level ':root' rules.
// Comments are dropped first so a name mentioned there does not count, and
// properties scoped to a flavor or accent selector are left out.
function rootProperties(css: string): Set<string> {
  const code = css.replace(/\/\*[\s\S]*?\*\//g, '');
  const names = new Set<string>();
  for (const [, body = ''] of code.matchAll(/(?:^|\})\s*:root\s*\{([^}]*)\}/g)) {
    for (const [, name = ''] of body.matchAll(/(--[\w-]+)\s*:/g)) names.add(name);
  }
  return names;
}
