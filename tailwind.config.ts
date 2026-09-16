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
        display: [
          'Avenir Next',
          'SF Pro Display',
          'Segoe UI Variable Display',
          'Segoe UI',
          'sans-serif',
        ],
        body: ['Inter', 'SF Pro Text', 'Segoe UI Variable Text', 'Segoe UI', 'sans-serif'],
      },
      borderRadius: { '3xl': '1.75rem', '4xl': '2.25rem' },
      boxShadow: {
        glass:
          '0 36px 90px -48px rgb(var(--color-primary-dark) / .42), 0 16px 38px -30px rgb(17 17 17 / .28)',
        card: '0 20px 55px -38px rgb(17 17 17 / .32)',
        glow: '0 20px 44px -22px rgb(var(--color-accent-strong) / .72)',
      },
      spacing: { section: '6rem', 'section-mobile': '3.5rem' },
      backgroundImage: {
        'hero-mesh':
          'linear-gradient(125deg, rgb(var(--color-primary-soft)) 0%, rgb(var(--color-canvas)) 34%, rgb(var(--color-surface)) 66%, rgb(var(--color-accent-soft)) 100%)',
        'deep-gradient':
          'linear-gradient(135deg, rgb(var(--color-primary-dark)), rgb(var(--color-primary)) 58%, rgb(var(--color-primary) / .78))',
      },
    },
  },
  plugins: [],
} satisfies Config;
