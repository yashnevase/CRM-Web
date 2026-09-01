import type { Config } from 'tailwindcss';

const color = (name: string) => `rgb(var(--color-${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: color('primary'),
          dark: color('primary-dark'),
          soft: color('primary-soft'),
        },
        accent: {
          DEFAULT: color('accent'),
          strong: color('accent-strong'),
          soft: color('accent-soft'),
        },
        ink: color('ink'),
        muted: color('muted'),
        line: color('line'),
        canvas: color('canvas'),
        surface: color('surface'),
        cream: color('cream'),
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      borderRadius: { '3xl': '1.75rem', '4xl': '2.25rem' },
      boxShadow: {
        glass: '0 30px 80px -42px rgb(var(--color-primary) / .42)',
        card: '0 18px 45px -30px rgb(17 17 17 / .30)',
        glow: '0 18px 42px -20px rgb(var(--color-accent) / .85)',
      },
      spacing: { section: '6rem', 'section-mobile': '3.5rem' },
      backgroundImage: {
        'hero-mesh':
          'linear-gradient(135deg, rgb(var(--color-canvas)), rgb(var(--color-surface)) 46%, rgb(var(--color-accent-soft)))',
        'deep-gradient':
          'linear-gradient(135deg, rgb(8 107 121), rgb(10 127 143) 58%, rgb(10 155 171))',
      },
    },
  },
  plugins: [],
} satisfies Config;
