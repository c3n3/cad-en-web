# Runs the website's local dev server (http://localhost:5173/cad-en-web/).
# Uses the pycad-en submodule's docs when it is checked out, otherwise the sibling ../pycad-en
# checkout in the cad-en super repo.
$ErrorActionPreference = 'Stop'
Set-Location $PSScriptRoot

if (-not (Test-Path 'pycad-en/pycad_en/docs/index.md')) {
    $env:PYCAD_EN_ROOT = '../pycad-en'
}
if (-not (Test-Path 'node_modules')) {
    npm install
}
npm run dev
