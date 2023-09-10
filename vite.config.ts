import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export const ALIASES = {
  constants: '/src/constants',
  components: '/src/components',
  query: '/src/query',
  lib: '/src/lib',
  models: '/src/models',
  store: '/src/store',
  testing: '/src/testing',
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: ALIASES
  }
})
