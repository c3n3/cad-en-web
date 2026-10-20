// Copies the CADen documentation out of the pycad-en checkout into the site, and builds the
// docs sidebar from it.
//
// setup_release0.md: pycad-en is private, so the output is committed here and the GitHub
// Pages build uses that copy. The cad-en super repo's tools/release.ps1 refreshes it
// (PYCAD_EN_ROOT=../pycad-en npm run sync); with no pycad-en checkout this keeps the copy.
//
// Source: $PYCAD_EN_ROOT (default: ./pycad-en)
//   pycad_en/docs/**          -> site/docs/**   (tool pages get their demo animation under the title)
//   pycad_en/assets/brand/*   -> site/public/brand/
// Output: site/.vitepress/generated/sidebar.json
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const webRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const pycadRoot = path.resolve(webRoot, process.env.PYCAD_EN_ROOT || 'pycad-en')
const srcDocs = path.join(pycadRoot, 'pycad_en', 'docs')
const srcBrand = path.join(pycadRoot, 'pycad_en', 'assets', 'brand')

const siteDir = path.join(webRoot, 'site')
const outDocs = path.join(siteDir, 'docs')
const outBrand = path.join(siteDir, 'public', 'brand')
const outGenerated = path.join(siteDir, '.vitepress', 'generated')

if (!fs.existsSync(path.join(srcDocs, 'index.md'))) {
  if (fs.existsSync(path.join(outDocs, 'index.md')) && fs.existsSync(path.join(outGenerated, 'sidebar.json'))) {
    console.log(`sync-docs: no pycad-en at ${pycadRoot}; using the committed copy in site/docs`)
    process.exit(0)
  }
  console.error(
    `sync-docs: no documentation at ${srcDocs}, and no committed copy in site/docs\n` +
      '  Set PYCAD_EN_ROOT to a pycad-en checkout (e.g. PYCAD_EN_ROOT=../pycad-en inside the\n' +
      '  cad-en super repo).'
  )
  process.exit(1)
}

fs.rmSync(outDocs, { recursive: true, force: true })
fs.rmSync(outBrand, { recursive: true, force: true })
fs.cpSync(srcDocs, outDocs, { recursive: true })
fs.cpSync(srcBrand, outBrand, { recursive: true })
fs.mkdirSync(outGenerated, { recursive: true })

// Tool pages: show docs/videos/<tool>.webp under the page title, as the app's Help does.
const toolsDir = path.join(outDocs, 'tools')
for (const file of fs.readdirSync(toolsDir).filter((f) => f.endsWith('.md'))) {
  const name = path.basename(file, '.md')
  if (!fs.existsSync(path.join(outDocs, 'videos', `${name}.webp`))) continue
  const page = path.join(toolsDir, file)
  const lines = fs.readFileSync(page, 'utf8').split(/\r?\n/)
  const titleAt = lines.findIndex((l) => l.startsWith('# '))
  const title = titleAt >= 0 ? lines[titleAt].slice(2).trim() : name
  lines.splice(titleAt + 1, 0, '', `![${title} demonstration](../videos/${name}.webp){.tool-demo}`)
  fs.writeFileSync(page, lines.join('\n'))
}

// Sidebar: the index's "## Section" lists, with each bag page's tool table nested under it.
const mdLink = /\[([^\]]+)\]\(([^)]+\.md)\)/
const toLink = (rel) => '/docs/' + rel.replace(/\.md$/, '')

const sidebar = [{ text: 'Overview', link: '/docs/' }]
let section = null
for (const line of fs.readFileSync(path.join(outDocs, 'index.md'), 'utf8').split(/\r?\n/)) {
  const heading = line.match(/^## (.+)$/)
  if (heading) {
    section = { text: heading[1].trim(), items: [] }
    sidebar.push(section)
    continue
  }
  const item = line.match(/^- /) && line.match(mdLink)
  if (!section || !item) continue
  const rel = item[2]
  const entry = { text: item[1], link: toLink(rel) }
  if (rel.startsWith('bags/')) {
    const bag = fs.readFileSync(path.join(outDocs, rel), 'utf8')
    const tools = bag
      .split(/\r?\n/)
      .filter((l) => l.startsWith('|'))
      .map((l) => l.match(mdLink))
      .filter(Boolean)
      .map((m) => ({ text: m[1], link: toLink(path.posix.join('bags', m[2])) }))
    if (tools.length) {
      entry.collapsed = true
      entry.items = tools
    }
  }
  section.items.push(entry)
}
fs.writeFileSync(path.join(outGenerated, 'sidebar.json'), JSON.stringify(sidebar, null, 2))

// designs/common/general_issues3.md: the What's New page (the app's update notice links
// there) -- the newest release's notes, the first entry of the index's Releases list.
const releaseLink = /^- \[([^\]]+)\]\((releases\/[^)]+\.md)\)/
const newest = fs
  .readFileSync(path.join(outDocs, 'index.md'), 'utf8')
  .split(/\r?\n/)
  .map((l) => l.match(releaseLink))
  .find(Boolean)
if (newest) {
  const notes = fs
    .readFileSync(path.join(outDocs, newest[2]), 'utf8')
    .split(/\r?\n/)
    .filter((l) => !/^# /.test(l))
    .join('\n')
    .trim()
  fs.writeFileSync(
    path.join(outGenerated, 'latest-release.md'),
    `## CADen ${newest[1]}\n\n${notes}\n\n[Every release's notes](/docs/#releases)\n`
  )
}

console.log(`sync-docs: copied ${srcDocs} -> ${path.relative(webRoot, outDocs)}`)
