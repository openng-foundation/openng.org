# Routing

Docs: [analogjs.org/docs/features/routing/overview](https://analogjs.org/docs/features/routing/overview)

Filesystem routing in `src/app/pages/`. Only `*.page.ts` files are collected.

## Route types

| Pattern | File example | URL |
|---------|--------------|-----|
| Index | `index.page.ts` or `(home).page.ts` | `/` |
| Static | `about.page.ts` | `/about` |
| Nested static | `about/team.page.ts` or `about.team.page.ts` | `/about/team` |
| Dynamic | `[productId].page.ts` | `/products/:productId` |
| Layout parent | `products.page.ts` + `products/` children | shared layout |
| Route group | `(auth)/login.page.ts` | `/login` |
| Catch-all | `[...page-not-found].page.ts` | `**` |

**Rules:** default export component required; all routes lazy-loaded.

## Layout routes

```tree
src/app/pages/
├── products.page.ts          # layout with <router-outlet>
└── products/
    ├── (product-list).page.ts  # /products
    └── [productId].page.ts     # /products/:productId
```

Pathless layout: `(auth).page.ts` wraps `(auth)/login.page.ts` and `(auth)/signup.page.ts`.

## Component input bindings

```ts
// app.config.ts
provideFileRouter(withComponentInputBinding())

// [productId].page.ts
@Input() productId: string;
```

## Extra & debug routes

```ts
provideFileRouter(
  withExtraRoutes(customRoutes),  // prepended to discovered routes
  withDebugRoutes(),              // visit /__analog/routes
)
```

## Route metadata

Docs: [metadata](https://analogjs.org/docs/features/routing/metadata)

Export `routeMeta: RouteMeta` from any page file:

```ts
import { RouteMeta } from '@analogjs/router';

export const routeMeta: RouteMeta = {
  title: 'About Analog',
  canActivate: [() => true],
  providers: [AboutService],
  meta: [
    { name: 'description', content: 'Page description' },
    { property: 'og:title', content: 'Title' },
  ],
};
```

### Redirect routes

No component export — only `routeMeta`:

```ts
export const routeMeta: RouteMeta = {
  redirectTo: '/home',
  pathMatch: 'full',
};
```

Nested redirects require an **absolute** path.

### 404 with status code (SSR)

```ts
import { injectResponse } from '@analogjs/router/tokens';

export const routeMeta: RouteMeta = {
  canActivate: [() => {
    const response = injectResponse();
    if (import.meta.env.SSR && response) {
      response.statusCode = 404;
      response.end();
    }
    return true;
  }],
};
```

## Middleware

Server-side request middleware: [middleware docs](https://analogjs.org/docs/features/routing/middleware)
