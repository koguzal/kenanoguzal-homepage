import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.kenanoguzal.dev',
  integrations: [sitemap(), react()],
  markdown: {},
  vite: {
    plugins: [tailwindcss()]
  }
})
