# API Routes

Docs: [api/overview](https://analogjs.org/docs/features/api/overview)

Filesystem API routes in `src/server/routes/api/`, exposed under `/api` by default. Powered by Nitro and [h3](https://h3.unjs.io/).

## Basic route

```ts
// src/server/routes/api/hello.ts
import { defineEventHandler } from 'h3';

export default defineEventHandler(() => ({ message: 'Hello World' }));
```

## Dynamic routes

```ts
// src/server/routes/api/v1/hello/[name].ts
import { defineEventHandler, getRouterParam } from 'h3';

export default defineEventHandler((event) => {
  const name = getRouterParam(event, 'name');
  return `Hello, ${name}!`;
});
```

## HTTP method suffixes

| File | Method |
|------|--------|
| `users/[id].get.ts` | GET |
| `users.post.ts` | POST |
| `users/[id].put.ts` | PUT |
| `users/[id].delete.ts` | DELETE |

```ts
import { defineEventHandler, readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  return { updated: true };
});
```

## Query parameters

```ts
import { getQuery } from 'h3';

const { param1, param2 } = getQuery(event);
```

## Error handling

```ts
import { createError } from 'h3';

throw createError({ statusCode: 400, statusMessage: 'ID should be an integer' });
```

## Catch-all

```ts
// src/server/routes/api/[...].ts
export default defineEventHandler(() => 'Default page');
```

## Cookies (in page load)

```ts
import { setCookie, parseCookies } from 'h3';

setCookie(event, 'key', 'value');
const cookies = parseCookies(event);
```

## Prerender API routes (SSG)

Add API paths to `prerender.routes` in `vite.config.ts` to emit static files under `dist/analog/public/api/`.

## WebSockets & SSE

See [WebSocket docs](https://analogjs.org/docs/features/api/websockets).
