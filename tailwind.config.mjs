// @ts-check
import { flavors } from '@catppuccin/palette';

const mochaColors = flavors.mocha.colors;
/** @type {Record<string, string>} */
const ctp = {};
for (const [key, value] of Object.entries(mochaColors)) {
  ctp[key] = value.hex;
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ctp,
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
