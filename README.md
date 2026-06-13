# Kaviya Rajan — Portfolio

Personal portfolio for **Kaviya Rajan**, an ICT undergraduate at the University of Ruhuna and
aspiring full-stack developer. A routed, animated, fully type-safe single-page app built with React,
TypeScript, and Vite.

**Live:** https://kaviya.me/

---

## Features

- **Single-page feel, real routes** — React Router v7 data router with a route per section
  (`/about`, `/skills`, `/projects`, `/projects/:slug`, `/experience`, `/education`, `/contact`),
  lazy-loaded page modules, scroll restoration, and a 404 route.
- **Motion throughout** — page transitions, scroll-reveal entrances, an animated hero "live
  dashboard" card, project hover-zoom, and a floating detail-page preview — via
  [Motion](https://motion.dev) (Framer Motion) with `LazyMotion` so the feature bundle is
  code-split. Honors `prefers-reduced-motion`.
- **Type-safe content** — all content and untrusted edges are validated with [Zod](https://zod.dev);
  TypeScript types are inferred from the schemas, so data and types can't drift.
- **Validated contact form** — `react-hook-form` + `@hookform/resolvers` (Zod), posting to a real
  endpoint when configured, with a simulated-send fallback.
- **Light / dark theme**, responsive layout, accessible markup, and `react-icons` brand/UI icons.
- **Projects showcase** — project previews as lightweight SVG graphics.

## Tech stack

| Area | Choice |
| --- | --- |
| Framework | React 19 + TypeScript |
| Build tool | Vite 8 |
| Routing | React Router 7 (data router) |
| Animation | Motion 12 (Framer Motion) via `LazyMotion` |
| Validation | Zod 4 |
| Forms | react-hook-form + @hookform/resolvers |
| Styling | CSS Modules |
| Icons | react-icons |
| Hosting | Cloudflare Workers (Static Assets) via GitHub Actions |

## Getting started

**Prerequisites:** Node.js 22+ and npm.

```bash
# install dependencies
npm install

# start the dev server (http://localhost:5173)
npm run dev
```

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR. |
| `npm run build` | Type-check (`tsc -b`) and build to `dist/`. |
| `npm run preview` | Serve the production build locally (http://localhost:4173). |
| `npm run lint` | Run ESLint over the project. |

## Configuration

Client env vars are validated at boot in `src/config/env.ts` (only `VITE_`-prefixed vars are exposed
by Vite). Create a `.env` (or `.env.local`) if you want the contact form to post to a real endpoint:

```bash
# Optional. Where the contact form POSTs. If unset, the form simulates a send.
VITE_CONTACT_ENDPOINT="https://your-form-endpoint.example.com"
```

## Project structure

Feature-first: each section owns its components and styles, with shared primitives and content
factored out.

```
src/
├── app/          # router, root layout, theme provider
├── assets/       # project preview SVGs
├── components/   # layout, ui, motion, errors (shared, cross-feature)
├── config/       # env parsing/validation
├── data/         # content (profile, projects, skills, experience, education, …)
├── features/     # hero, about, skills, projects, experience, education, contact
├── hooks/        # reusable hooks
├── lib/          # validations (Zod), icons, helpers
├── pages/        # lazy route modules (loaders + Component)
├── styles/       # global styles, tokens
└── types/        # inferred content types
```

## Deployment

The site is hosted on **Cloudflare Workers (Static Assets)** and deploys automatically from `main`
via GitHub Actions (`.github/workflows/deploy.yml`), served at the custom domain
[kaviya.me](https://kaviya.me/). Worker config lives in `wrangler.jsonc`. See
[DEPLOYMENT.md](DEPLOYMENT.md) for the required secrets, token scopes, and custom-domain setup.

## License

See [LICENSE](LICENSE).

---

Built by Kaviya Rajan.
