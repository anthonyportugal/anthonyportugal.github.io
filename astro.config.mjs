// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import palette from '@sanctuary-ds/tokens/palette' with { type: 'json' };

// Sanctuary publishes, for each type role (display, text, mono, inscription), the
// family, weights and fallbacks it is designed with. Astro downloads them from
// Google Fonts at build time and serves them from this site, so visitors never
// request a third party. src/data/fonts.ts bridges each --font-<role> onto the
// core's --san-font-family-<role>.
const google = fontProviders.google();
// The palette's arrays are plain JSON; Astro's types want them non-empty.
/** @type {NonNullable<import('astro').AstroUserConfig['fonts']>} */
const fonts = Object.entries(palette.fonts).map(([role, font]) => ({
  name: font.family,
  cssVariable: `--font-${role}`,
  provider: google,
  weights: /** @type {[number, ...number[]]} */ (font.weights),
  styles: /** @type {[any, ...any[]]} */ (font.styles),
  fallbacks: [...font.fallbacks, font.generic],
}));

// https://astro.build/config
export default defineConfig({
  site: 'https://anthonyportugal.github.io',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  fonts,
  integrations: [sitemap()],
});
