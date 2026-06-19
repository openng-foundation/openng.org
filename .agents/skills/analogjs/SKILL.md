---
name: analogjs
description: >-
  Analog fullstack meta-framework for Angular — file-based routing, SSR/SSG,
  server data fetching, API routes, and markdown content. Use when working with
  Analog, @analogjs packages, .page.ts routes, vite.config analog plugin,
  provideFileRouter, injectLoad, or https://analogjs.org/docs.
metadata:
  version: 2.6.x
  source: https://analogjs.org/docs
---

# AnalogJS

[Analog](https://analogjs.org/docs) is a fullstack meta-framework for Angular (like Next.js/Nuxt for Angular). Built on Vite, Vitest, and Nitro.

## When to run this skill

- Working on routes, pages, layouts, or navigation in `src/app/pages/`
- Configuring `vite.config.ts` (`analog()` plugin), SSR, SSG, or prerender
- Server-side data fetching (`.server.ts` + `injectLoad`)
- API routes in `src/server/routes/api/`
- Markdown content routes or `src/content/`
- `@analogjs/router`, `@analogjs/content`, or `@analogjs/platform` APIs

## Mandatory reference

| Task | Guide |
|------|-------|
| Project setup, scripts, build output | [getting-started.md](getting-started.md) |
| File-based routing, layouts, redirects | [routing.md](routing.md) |
| Route title, guards, meta tags | [routing.md](routing.md#route-metadata) |
| Server load functions | [data-fetching.md](data-fetching.md) |
| REST API endpoints | [api-routes.md](api-routes.md) |
| Markdown pages and `src/content/` | [content.md](content.md) |
| SSR, SSG, prerender, sitemap | [server.md](server.md) |

For topics not covered in these guides, fetch the official doc URL from the index below or read [https://analogjs.org/llms.txt](https://analogjs.org/llms.txt).

## Core conventions

### Pages (`src/app/pages/`)

- Only `*.page.ts` files become routes; **default export** required; all lazy-loaded
- Index: `index.page.ts` or `(home).page.ts` → `/`
- Static: `about.page.ts` → `/about`; nested via folders or dot notation (`about.team.page.ts`)
- Dynamic: `[id].page.ts` → `/:id`
- Layout: parent `products.page.ts` + child folder `products/`
- Route groups: `(auth)/login.page.ts` → `/login` (folder name omitted from URL)
- Catch-all: `[...not-found].page.ts` → `**`
- Redirects: export `routeMeta` with `redirectTo` / `pathMatch` (no component)

### App config (`src/app/app.config.ts`)

```ts
import { provideFileRouter } from '@analogjs/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideFileRouter(),
    // withComponentInputBinding(), withDebugRoutes(), withExtraRoutes(routes)
  ],
};
```

### Vite config (`vite.config.ts`)

```ts
import analog from '@analogjs/platform';

export default defineConfig({
  plugins: [
    analog({
      ssr: true,       // default; set false for SPA-only
      static: true,    // SSG-only (no server bundle)
      prerender: { routes: async () => ['/'] },
      content: { highlighter: 'prism' },
    }),
  ],
});
```

Build output: client → `dist/analog/public`, server → `dist/analog/server`.

## Official documentation index

Source: [analogjs.org/docs](https://analogjs.org/docs) · Machine-readable: [llms.txt](https://analogjs.org/llms.txt)

### Getting started

- [Introduction](https://analogjs.org/docs/introduction)
- [Getting Started](https://analogjs.org/docs/getting-started)
- [Version Compatibility](https://analogjs.org/docs/guides/compatibility)
- [Migrating an Angular app to Analog](https://analogjs.org/docs/guides/migrating)
- [Updating](https://analogjs.org/docs/features/updating/overview)

### Routing

- [Routing overview](https://analogjs.org/docs/features/routing/overview)
- [Route Metadata](https://analogjs.org/docs/features/routing/metadata)
- [Content Routes](https://analogjs.org/docs/features/routing/content)
- [Middleware](https://analogjs.org/docs/features/routing/middleware)

### Data & API

- [Data fetching overview](https://analogjs.org/docs/features/data-fetching/overview)
- [Server-Side Data Fetching](https://analogjs.org/docs/features/data-fetching/server-side-data-fetching)
- [API Routes](https://analogjs.org/docs/features/api/overview)
- [WebSocket](https://analogjs.org/docs/features/api/websockets)
- [OG Image Generation](https://analogjs.org/docs/features/api/og-image-generation)
- [Form Server Actions](https://analogjs.org/docs/guides/forms)

### Server & deployment

- [Server-Side Rendering](https://analogjs.org/docs/features/server/server-side-rendering)
- [Static Site Generation](https://analogjs.org/docs/features/server/static-site-generation)
- [Deployment](https://analogjs.org/docs/features/deployment/overview)
- [Deployment Providers](https://analogjs.org/docs/features/deployment/providers)

### Content & i18n

- [Internationalization](https://analogjs.org/docs/features/i18n/overview)

### Tooling

- [Testing with Vitest](https://analogjs.org/docs/features/testing/overview)
- [Vitest in Angular](https://analogjs.org/docs/features/testing/vitest)
- [Code Generation](https://analogjs.org/docs/features/generation/code-generation)
- [create-analog](https://analogjs.org/docs/packages/create-analog/overview)
- [CSS Pre-processors](https://analogjs.org/docs/packages/vite-plugin-angular/css-preprocessors)

### Integrations

- [Nx](https://analogjs.org/docs/integrations/nx)
- [Angular Material](https://analogjs.org/docs/integrations/angular-material)
- [Ionic](https://analogjs.org/docs/integrations/ionic)
- [Storybook](https://analogjs.org/docs/integrations/storybook)
- [Build with AI](https://analogjs.org/docs/integrations/ai)
- [Building an Angular Library](https://analogjs.org/docs/guides/libraries)
