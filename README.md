# Lumena Medical & Wellness React Template

A clean React template for medical, clinic, diagnostics, dental, chiropractic, and wellness websites. It uses React, Vite, TypeScript, Tailwind CSS, Framer Motion, and local mock data.

## Setup

```bash
pnpm install
pnpm dev
```

Useful commands:

```bash
pnpm typecheck
pnpm lint
pnpm build
pnpm preview
```

## Where To Edit

Most day-to-day changes live in `src/data`:

- `site-content.ts` controls section headings, paragraphs, CTA labels, and footer text.
- `services.ts` controls service and department cards.
- `team.ts` controls team member cards.
- `testimonials.ts` controls testimonials.
- `stats.ts` controls the metric cards.
- `process-steps.ts` controls the four-step process section.
- `navigation.ts` controls header and footer links.

Page layout lives in `src/pages/Home.tsx`. You can reorder or remove sections there without changing the section components.

## Theme

The default theme is the soft blue medical theme. A bold green theme is also included.

To change the default theme, edit `src/lib/theme.ts`:

```ts
export const defaultTheme: ThemeName = themes.bold;
```

Theme colors are defined as CSS variables in `src/styles/globals.css`. Tailwind maps those variables in `tailwind.config.ts`, so components use readable classes like `bg-primary`, `text-muted`, and `shadow-glass`.

## Project Structure

- `src/components/ui` contains small reusable components.
- `src/components/layout` contains navbar, drawer, newsletter, and footer.
- `src/components/sections` contains complete website sections.
- `src/data` contains all mock content.
- `src/hooks` contains reusable browser hooks.
- `src/lib` contains theme, animation, and class helpers.
- `src/pages` contains route pages.
- `src/styles` contains global styles and theme variables.

Motion settings are centralized in `src/lib/animations.ts` and respect reduced-motion preferences.
