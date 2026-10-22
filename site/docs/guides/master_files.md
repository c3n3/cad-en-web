# Master files

A master file is a saved model, assembly or custom feature that new ones start from. CADen comes
with four: **Model**, **Assembly** and **Custom Feature** (empty ones) and **3D Print**. You can
add your own.

## Starting from one

- **File › Create New** lists every master file. Pick one to get an unsaved **Untitled** tab with
  its contents. **Ctrl+N** is **Create New › Model**, an empty model.
- The welcome page shows the same master files as tiles. Your own show a picture of their bodies.
- The welcome page's first tile, **Open Workspace**, isn't a master file: it opens a folder as a workspace, as **File › Open Workspace** does.
- **Try a demo!**, at the top right of the welcome page, opens the [demo workspace](demo.md).
- In the Workspace panel, right-click a folder and choose **Create New**, then a master file.
  Type the new file's name: it is a copy of the master, in the same file format, with your name.
- A custom feature made from a master goes in the workspace's `.caden/custom_features` folder, as a new custom
  feature does.

## 3D Print

A model set up for 3D printing:

- **print_direction** — a vector pointing up (+Z), the way the part is printed.
- The **print** parameter group:
  - `print::hole_tolerance` — `{0.1mm, 0.1mm, 0.1mm}`, the clearance to add to a hole along
    each axis (a [vector](values.md#vectors): `print::hole_tolerance[0]` is X).
  - `print::max_overhang_angle` — `60`, how far from vertical a face can lean before it needs
    support. A new [Overhang](../tools/overhang.md) starts with this as its angle.
- The **support** tag, in blue, for the bodies that hold the part up while it prints.
- The **3D Print Overlay** on: a **Slice** button for each body's print weight and time ([Slicing from CADen](slicing.md)).

## Your own master files

- Choose **File › Install › Master File...** and pick model, assembly or custom feature files.
  Each is copied as it is. With a workspace open you choose where: your user space (every
  workspace) or this workspace.
- Or copy a file into a `master_files` folder yourself: your own is in the CADen settings folder
  (`%APPDATA%\CADen\master_files` on Windows), a workspace's is `.caden/master_files` in the workspace.
- A master file is listed by its file name: `bracket.json.caden` is **bracket**. Two with the same
  name are both listed, the second marked with where it is: **bracket (workspace)**.

## Exporting by tag

When the bodies you export have different tags, **File › Export › STL...** lists the tags, all
ticked. Untick one to leave its bodies out (the supports, for example). Export is greyed out
while no tag is ticked.

## The File menu

- **File › Create New** — every master file (it replaces New, New Assembly and New Custom
  Feature).
- **File › Install** — Custom Feature..., Custom Feature Bag..., Template..., Template Folder...,
  Crate... and Master File...

Back to the [documentation](../index.md).
