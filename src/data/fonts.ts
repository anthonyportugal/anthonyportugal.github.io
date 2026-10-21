import palette from '@sanctuary-ds/tokens/palette' with { type: 'json' };

// One entry per type role the core publishes; astro.config.mjs registers each
// role under --font-<role>. The body text is read first, so its regular weight is
// preloaded.
const PRELOADED_ROLE = 'text';
const PRELOADED_WEIGHT = 400;

type Role = keyof typeof palette.fonts;

export const fontRoles = (
  Object.entries(palette.fonts) as [Role, (typeof palette.fonts)[Role]][]
).map(([role, font]) => ({
  cssVariable: `--font-${role}` as const,
  preload:
    role === PRELOADED_ROLE && font.weights.includes(PRELOADED_WEIGHT)
      ? [{ weight: PRELOADED_WEIGHT, style: 'normal' }]
      : false,
}));

// The core's --san-font-family-<role> tokens name bare families, but Astro
// suffixes the families it hosts. ':root:root' outranks the core's ':root', so
// the bridge wins whatever order the stylesheets load in.
export const fontBridge = `:root:root{${Object.keys(palette.fonts)
  .map((role) => `--san-font-family-${role}:var(--font-${role});`)
  .join('')}}`;
