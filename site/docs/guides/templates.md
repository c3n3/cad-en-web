# Templates

A template is a model with some of its parameters left for you to fill in. It is a `<name>.json.tcaden` file (or `.py.tcaden`, see [Model files](model_files.md)). Making a model from a template asks for those values and writes an ordinary model file, as JSON.

## The Templates panel
The **Templates** panel has its own tab in the left side bar, right after **Workspace**. It shows templates from three places, each in its folders:

- **Builtin** — templates that come with CADen. **Gears › spur_gear** makes any spur gear: the number of teeth, the module, the pressure angle (degrees), the face width, the bore, a profile shift, the addendum and dedendum (in modules) and the backlash. Its teeth are true involutes, and its `shape::pitch_diameter` is what a [Geared](../tools/mate_geared.md) constraint takes its ratio from.
  **Gears › helical_gear** is the same with a helix: the module and pressure angle are the normal ones (gears cut with the same module mesh), plus the helix angle, the **hand** (right or left -- gears meshing on parallel shafts have opposite hands) and **herringbone** (no or yes: the helix turns back from the middle of the face width).
  **Gears › gear_rack** is a straight rack along x, teeth up: its length set by **length_by** -- `teeth` (whole teeth, the ends in the middle of a gap) or `length` (as many teeth as fit) -- with the pitch line's height above the bar's bottom. **Gears › helical_rack** slants its teeth at the helix angle; a right-hand rack meshes with a right-hand helical gear set on top of it. A [Rack and Pinion](../tools/mate_rack.md) constraint turns a gear as its rack slides.
- **User** — your own templates folder, `.tcaden` beside your settings. Templates you install go here, and you can use them in any model or workspace.
- **Workspace** — the open workspace's `.tcaden` folder. Only that folder is shown; a template saved elsewhere in the workspace still appears in the Workspace panel.

The User and Workspace headings show only when they hold a template or a folder.

Type in the search box above them to find a template by name: the search also matches its folders' names (`gear` finds `gears/spur_gear`).

## Using a template
- Double-click a template, or right-click it and choose **Create model from template**. Fill in the values (a choice, like the helical gear's hand, from its list) and choose where to save the new model. It then opens in a tab.
- A builtin, user or workspace template's new model is offered in the workspace's root folder. With no workspace open, it is offered where you last opened a file.
- Right-click a user or workspace template and choose **Edit Template** to change which parameters it asks for.
- **Create Template from Model** (right-click a model in the Workspace panel) offers the workspace's `.tcaden` folder when there is one, and the model's own folder otherwise.

## Installing templates
- **File › Install Template...** copies the template files you pick into your own templates folder.
- **File › Install Template Folder...** copies a folder of templates, with its subfolders, as a folder of its own.
- Installing something that is already there asks whether to replace it.
- Right-click a user template, or a folder of them, and choose **Uninstall** to remove it. CADen asks first. A workspace template's **Delete** moves it to the recycle bin.

## Folders
Right-click a folder, or a heading, for:
- **New Folder** — a folder inside it.
- **Install Template here** — install templates straight into that folder (user templates only).
- **Open in file browser** — show the folder on your computer.

## Copying a path
Right-click any template, folder or heading (here or in the Workspace panel) for:
- **Copy Path** — the whole path, onto the clipboard.
- **Copy Relative Path** — the path from the workspace's root folder. Only items inside the open workspace have one, so Builtin and User templates offer Copy Path alone.

[← All documentation](../index.md)
