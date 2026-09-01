# Lumena Medical & Wellness React Template

A reusable, production-ready React scaffold for clinics, hospitals, diagnostics, dental, chiropractic, and wellness brands. The default design uses a soft clinical-blue palette, glass surfaces, organic mesh gradients, bento layouts, and restrained motion. A high-contrast forest-green theme is built in.

## Run locally

```bash
pnpm install
pnpm dev
```

Production checks:

```bash
pnpm typecheck
pnpm lint
pnpm build
```

## Customize content

All visible section copy is centralized in `src/data/site-content.ts`. Collection content lives beside it:

- `services.ts` — service and department cards
- `team.ts` — clinician profiles
- `testimonials.ts` — patient quotes
- `stats.ts` — impact metrics
- `process-steps.ts` — the four-step care journey
- `navigation.ts` — header and footer links

Replace the Picsum URLs in these files with client photography. Components do not require props, so every section can be reordered or removed directly in `src/pages/Home.tsx`.

## Switch themes

Use the palette button in the navbar to switch themes at runtime. The choice is stored in local storage.

For a different default, edit `defaultTheme` in `src/lib/theme.ts`:

```ts
export const defaultTheme: ThemeName = themes.bold;
```

Color values live in `src/styles/globals.css` under `[data-theme='clinical-blue']` and `[data-theme='bold-green']`. Tailwind maps semantic utilities such as `bg-primary`, `text-muted`, and `shadow-glass` to those variables through `tailwind.config.ts`; components never depend on brand-specific hex values.

## Structure

- `src/components/ui` — reusable primitives
- `src/components/layout` — navbar, mobile drawer, newsletter, footer
- `src/components/sections` — complete page sections with default content
- `src/data` — centralized content and typed collections
- `src/hooks` — scroll, viewport, and reduced-motion helpers
- `src/lib` — theme, animation, and class utilities
- `src/pages` — Home plus About, Services, and Contact routes
- `src/styles` — Tailwind layers and runtime theme variables

Motion is centralized in `src/lib/animations.ts` and respects the operating system's reduced-motion preference.

The production build also creates a minimal `dist/server/index.js` asset worker so the Vite SPA can be hosted on OpenAI Sites with client-side route fallbacks.
