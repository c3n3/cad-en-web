# Skills: cad-en-web (the CADen website)

Design: [designs/main_plan.md](designs/main_plan.md) (with its `# Q/A`). VitePress 1.6.4 site,
deployed to GitHub Pages at https://c3n3.github.io/cad-en-web/ (`base: '/cad-en-web/'`).

## Layout

- `site/` is the VitePress source dir (`vitepress build site`).
  - `index.md`: home (`layout: home` hero = banner + Download/Documentation buttons, then
    `<ScreenshotGallery />` and the About text in a `.vp-doc` wrapper).
  - `download.md`: `<DownloadButtons />`.
  - `.vitepress/config.mts`: nav, base, local search, `/docs/` sidebar read from
    `.vitepress/generated/sidebar.json`.
  - `.vitepress/downloads.ts` (setup_release0.md -- Gumroad is gone): the buttons link to
    `https://github.com/c3n3/cad-en-web/releases/latest/download/<file>` with fixed file names
    (`CADen-windows-x64.exe`, `CADen-windows-x64-portable.zip` -- a second link on the Windows
    card via the entry's `also`, `CADen-linux-x86_64.AppImage`); `DownloadButtons.vue` shows the
    latest release's title (the version, e.g. "0.1.0 Alpha") from
    `api.github.com/repos/c3n3/cad-en-web/releases/latest`, "Alpha" if that fails. Releases are
    made by the super repo's `tools/release.ps1` (not marked pre-release: /latest/ skips those).
  - `.vitepress/theme/`: extends the default theme; registers the two components; `custom.css`
    (purple brand colors, `.tool-demo` image style).
  - `public/screenshots/`: the gallery images (supplied by the user; listed in
    `ScreenshotGallery.vue`).
- `scripts/sync-docs.mjs` (`npm run sync`, run by `dev` and `build`): copies
  `<PYCAD_EN_ROOT>/pycad_en/docs` -> `site/docs/` and `pycad_en/assets/brand` -> `site/public/brand/`,
  inserts `![<Title> demonstration](../videos/<tool>.webp){.tool-demo}` under the H1 of every tool
  page with a matching video, and builds the sidebar from `docs/index.md` (`## Section` + `- [x](y.md)`
  items) with each bag page's table rows nested under it. **That output is committed**
  (setup_release0.md: pycad-en is private, so CI can't fetch it); with no pycad-en checkout the
  script keeps the committed copy. The super repo's `tools/release.ps1` refreshes it
  (`PYCAD_EN_ROOT=../pycad-en npm run sync`).
- `.github/workflows/deploy.yml`: checkout (no submodules) -> `npm ci` -> `npm run build` ->
  upload `site/.vitepress/dist` -> deploy-pages. (Pages source must be "GitHub Actions".)

## Running

- Windows: `powershell -ExecutionPolicy Bypass -File .\dev.ps1` -> dev server at
  http://localhost:5173/cad-en-web/ (npm installs if needed; uses `../pycad-en` when the submodule
  isn't checked out).
- `PYCAD_EN_ROOT` defaults to `pycad-en` (the submodule). Inside the cad-en super repo, without the
  submodule: `PYCAD_EN_ROOT=../pycad-en npm run build` (or `dev`).
- Preview: `.claude/launch.json` `cad-en-web-preview` = `npx vitepress preview site --port 4173`
  -> http://localhost:4173/cad-en-web/ (build first).

## Gotchas

- The pycad-en docs have **CRLF** line endings: split with `/\r?\n/`, or `^## (.+)$` never matches
  (`.` doesn't match `\r`) and the sidebar comes out empty.
- Docs links are relative `.md` links (`../tools/extrude.md`); VitePress rewrites them, no change
  needed. Watch for `{{` in docs text (Vue would interpolate it); none today.
- In the built-in browser, `computer type` into the VitePress search box didn't trigger a search;
  set the input's value and dispatch `input` from JS to test search. Screenshots after scrolling
  the home page came out garbled until the viewport was resized/reloaded.

- Home hero title is the full name "CAD Enabled" (setup_release0.md); CADen everywhere else.
- Docs include `guides/values.md` (the value parser, three inline clips) -- the sidebar's
  "Guides" section comes from `docs/index.md`'s `## Guides`.

## Pending

- "What's New" page (later). pycad-en stays private: no submodule (the docs copy is committed).

## Look (main_plan.md `# Corrections`)

- Technical-drawing style in `theme/custom.css`: graphite on drafting paper (dark by default --
  `appearance: 'dark'` in config.mts, like the app), a faint 10/50 px grid on `body`, square
  corners, thin rules (`.vp-doc h2` top border), Times New Roman (`--lettering`) for headings,
  hero, nav, buttons and figure labels, purple only on links/hovers, ink buttons. Hero has no
  image; "CAD Enabled" in plain case. Screenshots are "Fig. N" figures; the version badge is a
  stamp (orange outline).
- Rebuilding under a running `vitepress preview` swaps the hashed assets: restart the preview.
