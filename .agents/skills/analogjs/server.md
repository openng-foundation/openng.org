# SSR, SSG & Deployment

Docs: [SSR](https://analogjs.org/docs/features/server/server-side-rendering) · [SSG](https://analogjs.org/docs/features/server/static-site-generation) · [Deployment](https://analogjs.org/docs/features/deployment/overview)

## Modes (`vite.config.ts`)

| Config | Effect |
|--------|--------|
| `ssr: true` (default) | Full SSR server at build |
| `ssr: false` | Client-only SPA |
| `static: true` | SSG — prerender only, deploy `dist/analog/public` |
| `prerender.routes` | Routes to pre-render at build time |

```ts
analog({
  static: true,
  prerender: {
    routes: async () => ['/', '/about'],
    sitemap: { host: 'https://example.com' },
  },
})
```

## Prerender from content directory

```ts
import analog, { type PrerenderContentFile } from '@analogjs/platform';

prerender: {
  routes: async () => [
    '/',
    {
      contentDir: 'src/content/blog',
      recursive: true,
      transform: (file: PrerenderContentFile) => {
        if (file.attributes.draft) return false;
        const slug = file.attributes.slug || file.name;
        return `/blog/${slug}`;
      },
    },
  ],
}
```

## Prerender server load data

```ts
{ route: '/shipping', staticData: true }
```

Pairs with `shipping.server.ts` to bake data into static HTML.

## Output source markdown alongside HTML

```ts
{
  route: '/overview',
  outputSourceFile: 'src/content/overview.md',
}
// or for contentDir:
outputSourceFile: (file) => file.content,
```

## SPA 404 page

```ts
analog({
  static: true,
  prerender: { routes: async () => ['/', '/404.html'] },
  nitro: { routeRules: { '/404.html': { ssr: false } } },
})
```

## Post-rendering hooks

Modify HTML during prerender via `postRenderingHooks` — inline critical CSS, inject analytics, etc.

## Preview & deploy

```bash
pnpm build
node dist/analog/server/index.mjs   # SSR
# or deploy dist/analog/public       # SSG/static
```

Nitro supports many providers — see [deployment providers](https://analogjs.org/docs/features/deployment/providers).
