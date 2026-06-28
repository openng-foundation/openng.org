/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog, { type PrerenderContentFile } from '@analogjs/platform';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
    tsconfigPaths: true,
  },
  plugins: [
    analog({
      ssr: false,
      static: true,
      nitro: {
        preset: 'vercel',
      },
      content: {
        highlighter: 'prism',
      },
      prerender: {
        routes: async () => [
          '/',
          '/about',
          '/about/contact',
          '/about/governance',
          '/about/history',
          '/about/qa',
          '/blog',
          '/community/get-involved',
          '/community/maintainer-candidates',
          '/community/partnerships',
          '/community/project-intake',
          '/community/security',
          '/community/standards',
          '/community/sustainability',
          '/projects',
          {
            contentDir: 'src/content/posts',
            transform: (file: PrerenderContentFile) => {
              if (file.attributes.draft) {
                return false;
              }

              const slug = file.attributes.slug || file.name;
              return `/blog/${slug}`;
            },
          },
        ],
      },
    }),
    tailwindcss()
  ],
}));
