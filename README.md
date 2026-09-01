# LifeMed Connect React Template

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

## Brand Palette

The project uses one fixed LifeMed Connect palette:

- Primary teal: `#0A7F8F` and `#089BAB`
- Soft blue: `#D6E7F1`
- Warm accent: `#FFAD52` and `#E89940`
- Cream surfaces: `#FFF3E6` and `#FFFBF5`
- Neutral text and borders: `#111111`, `#8A96BC`, `#C5C5C5`, `#F7F8F8`

Theme colors are defined as CSS variables in `src/styles/globals.css`. Tailwind maps those variables in `tailwind.config.ts`, so components use readable classes like `bg-primary`, `text-muted`, `bg-accent`, and `shadow-glass`.

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
