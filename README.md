# VitalSym Healthcare Website

A maintainable React website for VitalSym Healthcare Private Limited. The project uses React, TypeScript, Vite, Tailwind CSS, Framer Motion, Lucide icons, and local optimized images.

## Run locally

```bash
pnpm install
pnpm dev
```

Quality checks:

```bash
pnpm typecheck
pnpm lint
pnpm build
```

## Where to edit

- `src/data/site-content.ts` - company name, page messaging, calls to action, and footer copy.
- `src/data/services.ts` - service cards, detailed service lists, and healthcare programs.
- `src/data/company.ts` - trust points, technology capabilities, network groups, values, and differentiators.
- `src/data/navigation.ts` - header and footer navigation.
- `src/pages/Home.tsx` - homepage section order.
- `src/styles/globals.css` - the single source for brand colors and shared glass styling.

## Brand and theme

All brand colors are CSS variables at the top of `src/styles/globals.css`. Tailwind maps those variables to readable classes such as `bg-primary`, `text-primary-dark`, `bg-accent`, and `shadow-glass`. Change the variables once to update the palette across the website; the glass, blur, radius, and shadow system remains unchanged.

The displayed company name and descriptor come from `siteContent.brand`. The code-rendered brand mark is in `src/components/ui/BrandLogo.tsx`, so the header, drawer, and footer always stay consistent.

## Content and images

Website images are stored in `src/assets/images`; components load the smaller web-ready copies from `src/assets/images/optimized`. The original files are retained only as source assets for future cropping or recompression.

The enquiry form is front-end only. Connect its submit handler to the final CRM or lead-management endpoint when that system is selected. The hidden `source` field is already included for lead attribution.

An artificial loading screen is intentionally omitted so visitors see useful content immediately and Lighthouse performance is not delayed.
