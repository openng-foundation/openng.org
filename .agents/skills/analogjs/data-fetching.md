# Server-Side Data Fetching

Docs: [server-side-data-fetching](https://analogjs.org/docs/features/data-fetching/server-side-data-fetching)

## Pattern

Pair a `.server.ts` file with each `.page.ts`:

```ts
// index.server.ts
import { PageServerLoad } from '@analogjs/router';

export const load = async ({
  params,
  req,    // H3 Request
  res,    // H3 Response
  fetch,  // internal fetch for API calls
  event,
}: PageServerLoad) => {
  return { loaded: true };
};
```

```ts
// index.page.ts
import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { injectLoad } from '@analogjs/router';
import { load } from './index.server'; // excluded from client bundle

@Component({
  standalone: true,
  template: `Loaded: {{ data().loaded }}`,
})
export default class HomePage {
  data = toSignal(injectLoad<typeof load>(), { requireSync: true });
}
```

## Component input binding alternative

Enable `withComponentInputBinding()` in `provideFileRouter()`, then use `@Input() load`:

```ts
@Input() load(data: LoadResult<typeof load>) {
  this.data = data;
}
```

## Access load data from RouteMeta resolver

```ts
import { getLoadResolver } from '@analogjs/router';

export const routeMeta: RouteMeta = {
  resolve: {
    data: async (route) => {
      const data = await getLoadResolver(route);
      return { ...data };
    },
  },
};
```

## Public base URL

Set in `.env` for SSR fetch context:

```
VITE_ANALOG_PUBLIC_BASE_URL="http://localhost:5173"
```

## Prerender with server data

Set `staticData: true` on the prerender route entry — see [server.md](server.md).

## HTTP client

Use `requestContextInterceptor` with `provideHttpClient` so server requests resolve correctly:

```ts
import { provideFileRouter, requestContextInterceptor } from '@analogjs/router';

provideHttpClient(withInterceptors([requestContextInterceptor]))
```
