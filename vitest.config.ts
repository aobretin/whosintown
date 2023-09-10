import { defineConfig } from 'vitest/config';
import { ALIASES } from './vite.config';
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte({hot: !process.env.VITEST})],
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
  },
  resolve: {
    alias: ALIASES,
  },
});
