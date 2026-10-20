import { defineConfig, type DefaultTheme } from 'vitepress'
import fs from 'node:fs'

// Written by scripts/sync-docs.mjs (npm run sync) from the pycad-en documentation.
const sidebar: DefaultTheme.SidebarItem[] = JSON.parse(
  fs.readFileSync(new URL('./generated/sidebar.json', import.meta.url), 'utf8')
)

export default defineConfig({
  title: 'CADen',
  description: 'CADen: parametric CAD with constrained sketches, exact solids and assemblies.',
  // GitHub Pages project site: https://c3n3.github.io/cad-en-web/
  base: '/cad-en-web/',
  cleanUrls: true,
  // designs/main_plan.md's `# Corrections`: dark by default, like the app's default theme
  // (the appearance switch still offers light).
  appearance: 'dark',
  lastUpdated: false,
  head: [['link', { rel: 'icon', type: 'image/png', href: '/cad-en-web/brand/caden_icon.png' }]],
  themeConfig: {
    logo: '/brand/caden_icon.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Download', link: '/download' },
      { text: "What's New", link: '/whats-new' },
      { text: 'Documentation', link: '/docs/', activeMatch: '^/docs/' },
    ],
    sidebar: { '/docs/': sidebar },
    search: { provider: 'local' },
    outline: { level: [2, 3] },
    docFooter: { prev: false, next: false },
  },
})
