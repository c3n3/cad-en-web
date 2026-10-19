---
layout: home

hero:
  name: CAD Enabled
  text: Parametric 3D CAD
  tagline: Constrained sketches, solid features, assemblies. Alpha.
  actions:
    - theme: brand
      text: Download
      link: /download
    - theme: alt
      text: Documentation
      link: /docs/
---

<div class="vp-doc home-content">

## About

CADen (CAD Enabled) is a parametric 3D CAD program. You draw 2D sketches held in shape by
dimensions and constraints, then build solid parts from them; change a dimension and the part
follows. It is in early development.

<div class="feature-cards">
  <a class="feature-card" href="#values">
    <span class="feature-title">Value expressions</span>
    <span class="feature-line">Units and parameters in every value box.</span>
  </a>
  <a class="feature-card" href="#model-files">
    <span class="feature-title">Python and JSON files</span>
    <span class="feature-line">Scriptable or plain data, both easy to track in git.</span>
  </a>
  <a class="feature-card" href="#parameters">
    <span class="feature-title">Parametric parameters</span>
    <span class="feature-line">Groups, and models importing each other's values.</span>
  </a>
  <a class="feature-card" href="#custom-features">
    <span class="feature-title">Custom features</span>
    <span class="feature-line">Draw it once, use it as a tool in any model.</span>
  </a>
  <a class="feature-card" href="#ai">
    <span class="feature-title">AI API</span>
    <span class="feature-line">Let an AI assistant write and check models for you.</span>
  </a>
  <a class="feature-card" href="#offline">
    <span class="feature-title">No online login</span>
    <span class="feature-line">No account, no internet, nothing sent anywhere.</span>
  </a>
  <a class="feature-card" href="#workspace">
    <span class="feature-title">Workspaces</span>
    <span class="feature-line">A folder of models, with its own tools, as a project.</span>
  </a>
</div>

## Value expressions {#values}

Every box that takes a number takes an expression. Write a value in any unit and CADen converts
it; a number on its own is in the model's unit. Units are checked: a distance box only takes a
length.

```text
8mm + 10in
(40mm - 2 * wall) / 2
shelf_depth - 0.5in
```

Give a value a name and it becomes a parameter that the whole model can use. Change the
parameter and every sketch and feature that uses it follows.

[Learn more about values and parameters →](/docs/guides/values)

## Python and JSON model files {#model-files}

A CADen model is a text file, in one of two formats:

- **Python** (`.py.caden`) — the model is a short script. Loops, functions and calculations make
  families of parts easy, and it is the natural format for scripts and AI assistants to write.
- **JSON** (`.json.caden`) — the model is plain data that never runs anything, so a file from
  anyone is safe to open. It is the default for new files.

Both are readable text: every change shows up as a clear diff, so models live happily in git
alongside the rest of a project.

[Learn more about model files →](/docs/guides/model_files)

## Parametric parameters {#parameters}

Parameters can be grouped (`hardware::clearance`), and a model can import another model's
parameters. Those values then read as `<model>::<name>`, and imports carry their own imports
along, so a project's sizes can live in one place and flow down to every part that needs them.
When the imported file changes, the models using it update.

```text
shelf_unit/
├── hardware/
│   └── m5_bolt.json.caden           length = 20mm
└── brackets/
    └── shelf_bracket.json.caden     imports m5_bolt
                                     hole_depth = m5_bolt::length - 0.25in
```

Lengthen the bolt and the bracket's holes follow.

[Learn more about parameters →](/docs/guides/values#parameters)

## Custom features {#custom-features}

Draw something once — a nut slot, a mounting boss, a vent pattern — and define it as a custom
feature: pick its inputs (the edges, faces and values it is placed with) and it becomes a tool
in the ribbon. Use it in any model like a built-in feature; change the custom feature's file and
every model using it updates. Keep them in a workspace, install them for every project, or share
them as a tool crate.

[Learn more about custom features →](/docs/guides/custom_features)

## AI API {#ai}

CADen comes with an AI API: instructions and a command-line tool that AI assistants (Claude
Code, Codex, Cursor and the like) use to write CADen models without the GUI. An assistant can
make parts, assemblies, templates and custom features, build them, and check what came out
before handing you a file to open. The API always matches your CADen version.

[Learn more about using CADen with an AI →](/docs/guides/ai)

## No online login {#offline}

- **No account or sign-in** — download it, run it. There is no license server.
- **Works without internet** — everything runs on your computer, so working offline is no
  different from working online.
- **Nothing sent anywhere** — no telemetry. Your models never leave your computer; a bug report
  is a file you choose to send.
- **Your files, your folders** — models are plain files on your disk, not in someone else's
  cloud.

## Workspaces {#workspace}

Open a folder as a workspace and CADen works the way a code editor does:

- **A file tree** of the folder's models, coloured by their git status (modified, new).
- **Tabs** for many open models; reopening a workspace reopens what was open.
- **Quick open** with Ctrl+P to find any model in the workspace, and Ctrl+Tab to switch
  between open ones.
- **Its own tools** — the workspace keeps its own custom features, templates, master files and
  settings, so a project carries everything it needs.

<ScreenshotGallery />

</div>

<style>
.home-content {
  max-width: 1152px;
  margin: 48px auto 0;
  padding: 0 24px;
}
@media (min-width: 640px) {
  .home-content {
    padding: 0 48px;
  }
}
@media (min-width: 960px) {
  .home-content {
    padding: 0 64px;
  }
}
</style>
