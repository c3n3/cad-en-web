// setup_release0.md: the downloads are the files of the newest GitHub release of this
// repo (c3n3/cad-en-web). Every release carries them under these fixed names (the super
// repo's tools/release.ps1 uploads them), so GitHub's ".../releases/latest/download/<file>"
// link always gets the newest one and the site never changes per release.
export const REPO = 'c3n3/cad-en-web'

export interface Download {
  os: string
  note: string
  file: string
  // setup_release0.md's `# Corrections`: a second file for the same OS (the portable zip).
  also?: { label: string; file: string }
}

export const downloads: Download[] = [
  {
    os: 'Windows',
    note: 'Windows 10 / 11, 64-bit -- one .exe, nothing to install',
    file: 'CADen-windows-x64.exe',
    also: { label: 'Portable zip (no .exe)', file: 'CADen-windows-x64-portable.zip' },
  },
  { os: 'Linux', note: '64-bit AppImage -- make it executable, then run it', file: 'CADen-linux-x86_64.AppImage' },
]

export const downloadUrl = (file: string) => `https://github.com/${REPO}/releases/latest/download/${file}`
export const releasesUrl = `https://github.com/${REPO}/releases`
