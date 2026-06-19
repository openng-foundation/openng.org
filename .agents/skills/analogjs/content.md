# Content Routes

Docs: [routing/content](https://analogjs.org/docs/features/routing/content)

## Setup

```ts
// app.config.ts
import { provideContent, withMarkdownRenderer } from '@analogjs/content';
import { withPrismHighlighter } from '@analogjs/content/prism-highlighter';

providers: [
  provideContent(withMarkdownRenderer(), withPrismHighlighter()),
]
```

```ts
// vite.config.ts
analog({
  content: { highlighter: 'prism' },
})
```

Import Prism theme in global CSS: `@import 'prismjs/themes/prism.css';`

## Markdown as a route

`src/app/pages/about.md` → `/about`

```md
---
title: About
meta:
  - name: description
    content: About Page Description
---

## About Analog
```

## Content files (`src/content/`)

Blog posts, docs, etc. List with `injectContentFiles()`:

```ts
import { injectContentFiles } from '@analogjs/content';

readonly posts = injectContentFiles<PostAttributes>(
  (f) => f.filename.includes('/src/content/blog/'),
);
```

Returns metadata only (`filename`, `slug`, `attributes`) — not body text.

## Render a content file

```ts
import { injectContent, MarkdownComponent } from '@analogjs/content';

readonly post$ = injectContent<PostAttributes>();

// With subdirectory
readonly project$ = injectContent<ProjectAttributes>({
  param: 'slug',
  subdirectory: 'projects',
});

// Custom filename
readonly post$ = injectContent({ customFilename: 'path/to/file' });
```

Template: `<analog-markdown [content]="post.content"></analog-markdown>`

## Nested content (catch-all route)

```tree
src/app/pages/docs/[...slug].page.ts
src/content/docs/getting-started/welcome.md
```

`/docs/getting-started/welcome` resolves via `injectContent({ param: 'slug', subdirectory: 'docs' })`.

## Route meta from content

```ts
export const routeMeta: RouteMeta = {
  title: postTitleResolver,
  meta: postMetaResolver,  // ResolveFn<MetaTag[]>
};
```

## Mermaid

```ts
withMarkdownRenderer({ loadMermaid: () => import('mermaid') })
```

## Shiki highlighter

Use `withShikiHighlighter()` + `content: { highlighter: 'shiki' }` in vite config. See [official docs](https://analogjs.org/docs/features/routing/content).
