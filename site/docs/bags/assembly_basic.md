# Basic (assemblies)

Put models together. An assembly (`.acaden.py`) brings in model files and places them with constraints. These tools are on the **Assembly** tab of the ribbon, which replaces the Sketch and Features tabs while an assembly is open.

| Tool | What it does |
|---|---|
| [Insert Model](../tools/insert_model.md) | Bring a model (or another assembly) into the assembly. |
| [Coincident](../tools/mate_coincident.md) | Put two flat faces together, with an optional gap. |
| [Parallel](../tools/mate_parallel.md) | Make two flat faces parallel. |
| [Concentric](../tools/mate_concentric.md) | Line up two round faces on one axis. |
| [Between](../tools/mate_between.md) | Centre one model between two parallel faces of another. |

Drag a model to move it, or select it and drag with the right mouse button to turn it. Exporting an assembly to STL writes one file per body by default, named `<prefix>_<model>_<body>.stl`.

Right-click any tool button and choose **Help** to see its demonstration and page.

[← All documentation](../index.md)
