# Model files

CADen saves models as JSON files. A JSON file is only data, so opening one can't run any code. Older Python model files still open and work.

## The kinds of file

| File | JSON (the default) | Python |
|---|---|---|
| Model | `<name>.json.caden` | `<name>.py.caden` |
| Assembly | `<name>.json.acaden` | `<name>.py.acaden` |
| Template | `<name>.json.tcaden` | `<name>.py.tcaden` |
| Custom feature | `<name>.json.fcaden` | `<name>.py.fcaden` |

An [STL project](stl_import.md) is a `<name>.zip.scaden`: a JSON model file and its STL, zipped together.

The kind of file is the last part of the name (`.caden`, `.acaden` ...), so Windows can open each kind in CADen. Files with the older names (`bracket.caden.json`, `gear.tcaden.py`, `part.scaden.zip`) still open; saving one writes it under the new name and removes the old file. Files that refer to another file by its older name (an assembly's parts, imported parameters) still find it.

## Saving

- A new model is saved as JSON.
- **File › Save As...** offers both formats in the file type list at the bottom right of the dialog. JSON is chosen by default. For a file that is already Python, Python is chosen.
- The first time a new model is saved, the dialog starts in the open workspace (with no workspace open, where **File › Open** starts).
- In the Workspace panel, select one or more files (Ctrl or Shift click) and press Delete to move them to the recycle bin. CADen asks first, once for all of them; a file open in a tab closes.
- Right-click a file or folder in the Workspace panel and choose **Reveal in File Explorer** to show it in the system's file navigator.
- Drag files and folders in the Workspace panel to move them. Drop them on a folder, on a file to use that file's folder, or below the list for the workspace's top level. CADen asks first, and lists the files whose references change: an assembly's models, imported parameters, custom feature files and texture images. Those paths are updated so nothing breaks. A move can't be undone. If the folder already has something with the same name, choose **Replace** (the old one goes to the recycle bin) or **Skip**. Open tabs follow their files and keep their unsaved changes.
- If you type the extension yourself (`bracket.py.caden`), that format is used.
- **File › Save** keeps a file in the format it was opened in: a Python model stays Python.
- A model made from a template is saved as JSON, whatever format the template is.

## What is in a JSON file

The file is one JSON object:

- `version`: the version of CADen that wrote it.
- The model's own settings: `name`, `settings`, `parameters`, `tags` and so on.
- `items`: the sketches, features, components and constraints, in order. A sketch holds its own lines, points and constraints in its `items`.

Each object names its type and lists its values, the same way the Python file calls it. For example, `ce.Line(name="l0", a=ce.Point(x=0, y=0), b="l1.b")` in a Python file is this in JSON:

```json
{"type": "Line", "name": "l0", "a": {"type": "Point", "x": 0, "y": 0}, "b": "l1.b"}
```

A JSON file that names anything other than CADen's own objects is refused when it is opened, with a message naming the file.

## Tips

- Python model files run when they are opened. Only open Python files you trust.
- Comments and anything hand-written in a Python file, such as loops or variables, are not kept in JSON. Save As JSON writes the model those lines build.

[← All documentation](../index.md)
