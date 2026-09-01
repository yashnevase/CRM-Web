# LifeMed Connect React Template

A maintainable React website scaffold for LifeMed Connect. It follows the supplied healthcare-services brief and uses React, Vite, TypeScript, Tailwind CSS, Framer Motion, and local content data.

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
- `services.ts` controls service cards and the home, corporate, and occupational-health modules.
- `company.ts` controls trust points, technology capabilities, partners, values, and reasons to choose the company.
- `process-steps.ts` controls the four-step process section.
- `navigation.ts` controls header and footer links.

Page layout lives in `src/pages/Home.tsx`. You can reorder or remove sections there without changing the section components.

## Images

The current site does not load placeholder photos from external URLs. Image spaces use the reusable `MediaPlaceholder` component until approved assets are available.

Add final files to `src/assets/images`, import them into the relevant section, and pass the imported file to the component's `src` prop. Keep descriptive `alt` text in the existing `label` prop.

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
- `src/components/layout` contains the navbar, mobile drawer, and footer.
- `src/components/sections` contains complete website sections.
- `src/data` contains all mock content.
- `src/hooks` contains the navbar scroll-position hook.
- `src/lib` contains shared animation and class helpers.
- `src/pages` contains route pages.
- `src/styles` contains global styles and theme variables.

Motion settings are centralized in `src/lib/animations.ts` and respect reduced-motion preferences.

An artificial full-page loader is intentionally not included. The static homepage should render immediately; section reveals and image placeholders provide visual continuity without delaying content or hurting Lighthouse performance.
