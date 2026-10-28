# CADen documentation

CADen is a parametric CAD program: you draw constrained 2D sketches, then build solid bodies from
them with features. Every tool in the ribbon has a page here; right-click a tool button and choose
**Help** to open its page with a short demonstration.

## Tools

The ribbon's **Sketch** tab:

- [Sketch basics](bags/sketch_basics.md) — Start a sketch, choose the tag new geometry goes on, select and dimension things.
- [Sketch drawing](bags/sketch_drawing.md) — Draw the curves and shapes a sketch is made of.
- [Sketch pattern](bags/sketch_pattern.md) — Copy and repeat sketch geometry.
- [Sketch Advanced](bags/sketch_advanced.md) — Walls of even thickness that follow a centerline.
- [Sketch Other](bags/sketch_other.md) — Measure, join, trim, write and annotate in a sketch.

The ribbon's **Features** tab:

- [3D basics](bags/3d_basics.md) — Turn sketches into solid bodies and shape their edges.
- [3D Advanced](bags/3d_advanced.md) — Wrap sketches and textures onto faces.
- [Reference Geometry](bags/reference_geometry.md) — Construction geometry other features are built from.
- [3D Pattern](bags/3d_pattern.md) — Copy features and bodies.
- [Combine](bags/intersect.md) — Join bodies into one, or split them where they overlap.
- [Basic (assemblies)](bags/assembly_basic.md) — Insert models into an assembly and constrain them together.
- [Mechanical](bags/mechanical.md) — Link how models in an assembly turn, like gears.
- [Custom Feature](bags/custom_feature.md) — Define a custom feature, in a custom feature file.
- [3D Prints](bags/3d_prints.md) — Prepare parts for 3D printing (hidden until added to a tab).

## Guides

- [Orienting the view](guides/orient_view.md) — N: look straight at a flat face, or pick a side of a cube round the model.
- [The timeline](guides/timeline.md) — The order a model is built in: rolling back, and dragging an item to move it (never above what it uses).
- [Values and expressions](guides/values.md) — Units, arithmetic and parameters in any value box, and the value editor.
- [Custom features](guides/custom_features.md) — Make your own features, keep them in a workspace and use them in any model.
- [Templates](guides/templates.md) — Models with values to fill in: the Templates panel, installing them, making models from them.
- [Model files](guides/model_files.md) — The JSON and Python file formats, and how Save As chooses between them.
- [Functional features](guides/functional_features.md) — Features written as a short Python program (`.py.ffcaden`): using one, its timeline block, writing your own.
- [Tool crates](guides/tool_crates.md) — Share templates, custom and functional features and master files as one `.zip.ccaden` file: the Crates panel, installing, updating and creating crates.
- [The Architecture crate](guides/architecture.md) — Floor plans: walls, windows and doors drawn as tagged sketch surfaces, raised and cut by Floor Plan.
- [Master files](guides/master_files.md) — Start new models, assemblies and custom features from saved ones: File › Create New, the 3D Print master, installing your own.
- [Slicing from CADen](guides/slicing.md) — Each body's print weight and time from Bambu Studio or Orca Slicer: View › 3D Print Overlay, Slice, Slice View, File › Connect.
- [Exporting STL and STEP](guides/exporting.md) — File › Export: which bodies (hidden ones too), one file or one per body, the model's export folder (its gear), accuracy.
- [Importing a model](guides/model_import.md) — Bring a whole model into another: File › Import › Model..., placing it with constraints, building on its bodies, the link to its file.
- [STL import](guides/stl_import.md) — Turn an STL into a model to sketch on: File › Import › STL..., the import settings, `.zip.scaden` projects.
- [Using CADen with an AI](guides/ai.md) — Where the AI API folder is, and pointing an AI assistant at it to write models.
- [The demo workspace](guides/demo.md) — Try a demo! on the welcome page: a box and lid made from parameters, and an assembly to slide the lid open.
- [The text editor](guides/text_editor.md) — Edit model files, functional features, Markdown and Python in CADen: VS Code's keys, multiple cursors, folding, find and replace, and files kept in step with the model tabs.
- [Bug reports](guides/bug_reports.md) — Help › Bug Report: what it saves (the session record, the open models) and the session recording setting.

## Releases

What changed in each release:

- [0.8.0 Alpha](releases/0.8.0a1.md) — N to orient the view, quick dimensions while drawing, the Wall tool, E for Equal, rollback that shows what you make.
- [0.7.0 Alpha](releases/0.7.0a1.md) — dragging timeline items to reorder them, Workspace copy / paste, Equal (was Equal length), Measure clicks that add, assembly drags that push.
- [0.6.0 Alpha](releases/0.6.0a1.md) — Import Model, functional features and the Crates panel, the built-in text editor, smoother assemblies.
- [0.5.5 Alpha](releases/0.5.5a1.md) — slicing from CADen (Bambu Studio / Orca Slicer): weights, print times, Slice View.
- [0.5.4 Alpha](releases/0.5.4a1.md) — the Infill tool (cavities in 3D prints), deleting from the Merge with box, a projected item's tag.
- [0.5.3 Alpha](releases/0.5.3a1.md) — the demo workspace, textures in assemblies, faster textured models, the constraint list, moving files in the workspace.
- [0.5.2 Alpha](releases/0.5.2a1.md) — Auto Merge, Change Sketch Plane, Overhang Both, edge-on projection, and fixes.
- [0.5.1 Alpha](releases/0.5.1a1.md) — Joined select, Join Points, box select from a surface, the Rotate preview.
- [0.5.0 Alpha](releases/0.5.0a1.md) — master files, vector parameters, STL import, the Measure tool, curved-edge fillets, file names ending in their kind, one `.caden/` folder per workspace.
- [0.4.0 Alpha](releases/0.4.0a1.md) — the AI API, bug reports, the Overhang tool, ribbon editor and feature-edit fixes.
- [0.3.0 Alpha](releases/0.3.0a1.md) — JSON model files, tool crates, the cup's text and speed.
- [0.2.0 Alpha](releases/0.2.0a1.md) — custom features, templates and gears, new assembly constraints.
- [0.1.2 Alpha](releases/0.1.2a1.md) — the Coincident constraint fix.
- [0.1.1 Alpha](releases/0.1.1a1.md) — showcase video fixes.
- [0.1.0 Alpha](releases/0.1.0a1.md) — the first documented release.
