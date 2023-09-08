import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      constants: '/src/constants',
      components: '/src/components',
      query: '/src/query',
      lib: '/src/lib',
    }
  }
})
