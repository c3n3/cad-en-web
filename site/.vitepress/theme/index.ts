import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import ScreenshotGallery from './components/ScreenshotGallery.vue'
import DownloadButtons from './components/DownloadButtons.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ScreenshotGallery', ScreenshotGallery)
    app.component('DownloadButtons', DownloadButtons)
  },
} satisfies Theme
