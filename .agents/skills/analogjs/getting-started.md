# Getting Started

Docs: [analogjs.org/docs/getting-started](https://analogjs.org/docs/getting-started)

## Requirements

- Node 20+ (22+ recommended)
- Angular v17+

## Create a project

```bash
pnpm create analog@latest
```

## Scripts

| Script | Command | Notes |
|--------|---------|-------|
| Dev | `pnpm start` / `pnpm dev` | http://localhost:5173 |
| Build | `pnpm build` | SSR enabled by default |
| Preview | `node dist/analog/server/index.mjs` | Production server |
| Test | `pnpm test` | Vitest |

## Build artifacts

| Output | Path |
|--------|------|
| Client (static) | `dist/analog/public` |
| Server (SSR/API) | `dist/analog/server` |

## Key packages

| Package | Purpose |
|---------|---------|
| `@analogjs/platform` | Vite plugin |
| `@analogjs/router` | File-based router (`provideFileRouter`) |
| `@analogjs/content` | Markdown routes and content |
| `@analogjs/vite-plugin-angular` | Angular + Vite integration |
| `@analogjs/vitest-angular` | Vitest setup |

## Migrate existing Angular app

See [migration guide](https://analogjs.org/docs/guides/migrating) — schematic/generator for Angular CLI or Nx.
