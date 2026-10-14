October 13 2026 8:12am

# Final Website Plan

## Pages & Navigation

- Navigation bar with: Home, Download, Documentation

- **Home page:**
  - Banner with app name and brief description
  - Screenshot gallery (pulled from existing docs)
  - Download button linking to the Download page
  - About section

- **Download page:**
  - Separate page with Windows and Linux download buttons
  - Each button opens its own Gumroad overlay

- **Documentation page:**
  - Generated from markdown files in the Python app repo (added as a git submodule)
  - Search functionality
  - "What's New" page (to be added later)

## Technical

- Static site built with Vue
- Hosted on GitHub Pages
- Markdown-to-web conversion at build time
- Separate Gumroad checkout per OS

## Out of Scope (for now)

- FAQ page
- Social links and badges
- Changelog (What's New can come later)
- Contact via GitHub issues only
- I dont have gumroad setup, so we cannot link to my account yet

# Q/A

- **Q:** The only images in the pycad-en docs are the tool demo animations. What should the Home screenshot gallery use?
  **A:** Two screenshots supplied by the user: the Welcome screen and the editor with the picture_frame0 model.
- **Q:** Which Vue setup should the site use? (VitePress, or Vite + Vue 3 + Router with a custom markdown build)
  **A:** VitePress.
- **Q:** How should the GitHub Pages site be served? (c3n3.github.io/cad-en-web, or a custom domain)
  **A:** c3n3.github.io/cad-en-web.
- **Q:** Gumroad isn't set up yet. What should the Windows/Linux buttons do for now?
  **A:** Config placeholder: Gumroad overlay wired up, product URLs read from one config file; while empty the buttons show "Coming soon" and are disabled.
- **Q:** The Welcome screenshot shows local paths in Recent Workspaces/Models. How should it be used in the public gallery?
  **A:** Use as-is.
- **Q:** Is pycad-en a public repo, so the docs submodule can be added via HTTPS for the GitHub Actions build?
  **A:** Public, use HTTPS.
- **Q:** Who writes the Home banner description and About section text?
  **A:** Draft from the docs; the user edits afterwards.
- **Q:** Should each tool's documentation page show its demo animation (docs/videos/<tool>.webp)?
  **A:** Yes, at the top of the page.
- **Q:** github.com/c3n3/pycad-en returns 404 anonymously (private), so the HTTPS submodule clone failed. How should I proceed?
  **A:** The repo will be made public when the website is ready; wait until then to add the submodule.

# Corrections

- Remove the big app image from the home page of the website, and make the website less "Consumery" and more "Engineery".
  - Q: Which look? A: Technical drawing: faint drafting grid behind the page, thin ruled lines, square corners (no pill buttons or rounded cards), a monospace face for headings/labels, graphite greys with the purple as a thin accent only.
  - Q: The words on the home page? A: For the about section, just give a very simple blurb about what the program is. Don't get too into the weeds on features.
  - Q: The two screenshots on the home page: keep them? A: Keep, as figures ("Fig. 1 -- ..."), framed with a thin border, no rounded corners.
- Use Times New Roman (not monospace) for the lettering; the program's title "CAD Enabled" in plain title case, not full caps; tone down the grid a bit.
- Keep the website dark by default, just like the default program.
