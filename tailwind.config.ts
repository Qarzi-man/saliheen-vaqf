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
        // Не переключаются темой — только для секций, всегда тёмных по дизайну
        // (Шариатская основа, Поддержать, подвал). См. globals.css.
        'fixed-paper': rgb('fixed-paper'),
        'fixed-ink': rgb('fixed-ink'),
      },
      fontFamily: {
        sans: ['"Onest Variable"', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'sans-serif'],
        serif: ['"Source Serif 4 Variable"', 'Georgia', 'Cambria', 'serif'],
        arabic: ['"Noto Naskh Arabic"', '"Amiri"', '"Traditional Arabic"', '"Geeza Pro"', 'serif'],
      },
      maxWidth: { prose2: '42rem' },
      boxShadow: {
        // Намеренно на фиксированном чёрном, а не на токене --ink: в тёмной
        // теме --ink становится светлым, и тень на его основе превратилась
        // бы в белое «свечение» вместо тени.
        soft: '0 1px 0 rgb(0 0 0 / 0.04), 0 18px 40px -22px rgb(0 0 0 / 0.28)',
        lift: '0 1px 0 rgb(0 0 0 / 0.05), 0 28px 60px -28px rgb(0 0 0 / 0.4)',
      },
    },
  },
  plugins: [],
};

export default config;
