# Mark Jacob Nyumba — Portfolio

A static professional portfolio for Mark Jacob Nyumba, a data scientist and AI engineer based in Nairobi, Kenya. The site presents selected work across machine learning, reliable AI systems, software engineering and geospatial analysis through an editorial, content-first interface.

## Technology

- Next.js 16 with the App Router
- TypeScript
- Plain CSS
- Lucide icons
- Static HTML export
- pnpm
- Node.js 24.13.0 LTS

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

Use the pinned Node version with a compatible version manager:

```bash
nvm use
```

## Quality checks

```bash
pnpm lint
pnpm typecheck
pnpm build
git diff --check
```

`pnpm build` writes the fully static site to `out/` and generates every project case-study route from the project data.

## Architecture

```text
app/                    Routes, metadata, sitemap, robots and global styling
  projects/[slug]/      Statically generated case-study route
components/             Shared presentational components
data/                   Typed project and profile content
public/                 Static assets (when needed)
netlify.toml             Static hosting build and security headers
```

Project facts live in `data/projects.ts`; experience, education, skills and certificates live in `data/profile.ts`. This keeps content separate from presentation and makes routine updates possible without editing page layouts.

## Routes

- `/` — overview, featured projects, capabilities, experience and credentials
- `/projects/` — complete project collection grouped into two tracks
- `/projects/[slug]/` — seven statically generated case studies

## Netlify

The included `netlify.toml` runs `pnpm build` and publishes `out/`. No environment variables, server functions or external services are required. Connect the repository in Netlify only after the content and canonical domain are approved.

Canonical URLs are resolved centrally by `lib/site-url.ts` in this order:

1. `NEXT_PUBLIC_SITE_URL`, when an explicit public URL is configured
2. Netlify's build-provided `URL`
3. `http://localhost:3000` during local development

`NEXT_PUBLIC_SITE_URL` is optional, contains no secret, and should be set only after the public domain is confirmed. Netlify supplies `URL` automatically for the production site.

For a future GitHub Pages deployment, set `basePath` and `assetPrefix` in `next.config.ts` if the site is served from a repository subpath.

## Content notes

Project descriptions intentionally avoid unsupported performance metrics, user counts and production claims. Public project destinations are maintained alongside project content in `data/projects.ts`; unapproved links remain absent.
