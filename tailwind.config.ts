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
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: { '3xl': '1.75rem', '4xl': '2.25rem' },
      boxShadow: {
        glass: '0 28px 70px -32px rgb(var(--color-primary) / .35)',
        card: '0 18px 45px -28px rgb(15 23 42 / .28)',
        glow: '0 16px 38px -18px rgb(var(--color-primary) / .65)',
      },
      spacing: { section: '6rem', 'section-mobile': '3.5rem' },
      backgroundImage: {
        'hero-mesh':
          'radial-gradient(circle at 15% 10%, rgb(var(--color-accent-soft) / .95), transparent 28%), radial-gradient(circle at 90% 15%, rgb(var(--color-primary-soft) / .9), transparent 34%), linear-gradient(145deg, rgb(var(--color-canvas)), rgb(var(--color-surface)))',
        'deep-gradient':
          'linear-gradient(135deg, rgb(var(--color-primary-dark)), rgb(var(--color-primary)))',
      },
    },
  },
  plugins: [],
} satisfies Config;
