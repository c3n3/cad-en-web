# cad-en-web
Website for the CADen program

A [VitePress](https://vitepress.dev) site, published to GitHub Pages at
https://c3n3.github.io/cad-en-web/. The documentation pages come from the CADen app's own docs
(`pycad_en/docs` in the private pycad-en repo); a copy is committed here (`site/docs`,
`site/public/brand`, `site/.vitepress/generated`), refreshed by the cad-en super repo's
`tools/release.ps1`.

```bash
npm install
npm run dev      # local dev server (http://localhost:5173/cad-en-web/)
npm run build    # static site in site/.vitepress/dist
```

`npm run sync` refreshes the docs copy from a pycad-en checkout: `PYCAD_EN_ROOT=../pycad-en npm run sync`
(inside the super repo). Without one, `dev` and `build` use the committed copy.

## Downloads

The Download page links to the newest release of this repo:
`https://github.com/c3n3/cad-en-web/releases/latest/download/CADen-windows-x64.exe`,
`.../CADen-windows-x64-portable.zip` (a second link on the Windows card) and
`.../CADen-linux-x86_64.AppImage` (`site/.vitepress/downloads.ts`), and shows the release's title
(the version) read from GitHub's API. Releases are made by the super repo's `tools/release.ps1`.

## GitHub Pages setup (once)

1. On GitHub: **Settings > Pages > Build and deployment > Source: GitHub Actions**.
2. Push to `master`: `.github/workflows/deploy.yml` builds the site and deploys it
   (Actions tab shows the run; the first deploy takes a minute or two).
3. The site is at https://c3n3.github.io/cad-en-web/ (the `base` in `site/.vitepress/config.mts`
   must stay `/cad-en-web/` unless you move to a custom domain).
