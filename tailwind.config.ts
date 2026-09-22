import type { Config } from 'tailwindcss';

// Все цвета берутся из CSS-переменных в src/app/globals.css (блок "BRAND TOKENS").
// Чтобы подогнать палитру под saliheen.tj, достаточно поменять значения там.
const rgb = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: { DEFAULT: rgb('paper'), 2: rgb('paper-2') },
        sand: rgb('sand'),
        ink: { DEFAULT: rgb('ink'), 2: rgb('ink-2') },
        teal: { DEFAULT: rgb('teal'), 2: rgb('teal-2') },
        mist: rgb('mist'),
        gold: { DEFAULT: rgb('gold'), soft: rgb('gold-soft'), ink: rgb('gold-ink') },
        leaf: rgb('leaf'),
      },
      fontFamily: {
        sans: ['"Onest Variable"', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'sans-serif'],
        serif: ['"Source Serif 4 Variable"', 'Georgia', 'Cambria', 'serif'],
        arabic: ['"Noto Naskh Arabic"', '"Amiri"', '"Traditional Arabic"', '"Geeza Pro"', 'serif'],
      },
      maxWidth: { prose2: '42rem' },
      boxShadow: {
        soft: '0 1px 0 rgb(var(--ink) / 0.04), 0 18px 40px -22px rgb(var(--ink) / 0.28)',
        lift: '0 1px 0 rgb(var(--ink) / 0.05), 0 28px 60px -28px rgb(var(--ink) / 0.4)',
      },
    },
  },
  plugins: [],
};

export default config;
