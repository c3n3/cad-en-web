# Model files

CADen saves models as JSON files. A JSON file is only data, so opening one can't run any code. Older Python model files still open and work.

## The kinds of file

| File | JSON (the default) | Python |
|---|---|---|
| Model | `<name>.caden.json` | `<name>.caden.py` |
| Assembly | `<name>.acaden.json` | `<name>.acaden.py` |
| Template | `<name>.tcaden.json` | `<name>.tcaden.py` |
| Custom feature | `<name>.fcaden.json` | `<name>.fcaden.py` |

## Saving

- A new model is saved as JSON.
- **File › Save As...** offers both formats in the file type list at the bottom right of the dialog. JSON is chosen by default. For a file that is already Python, Python is chosen.
- If you type the extension yourself (`bracket.caden.py`), that format is used.
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
