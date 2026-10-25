# Functional features

A functional feature is a feature written as a short Python program: given what you pick and type, it decides what to build. Its file is `<name>.py.ffcaden`, Python only, and it lives with your custom features. The [Architecture crate](architecture.md)'s **Floor Plan** is one: it reads a sketch's wall, window and door surfaces and raises the walls with the openings cut.

## Using one
1. A functional feature is a tool in a bag on the **Features** tab, the same bags custom features use. Its tooltip says where it comes from, for example a crate.
2. Click the tool. Its form opens in the Properties panel and shows:
   - its description at the top
   - a box for each thing to pick
   - a value box for each value, filled in with the file's default
3. Click a box, then pick in the view or in the Model tab. A sketch box takes a sketch: click the sketch in the Model tab, or click any of its lines in the view. A pick of the wrong kind is refused, with the reason.
4. Change any values you like. A default can be an expression, such as a parameter of a [master file](master_files.md) (`wall_height`), so the model's own parameter sets it.
5. **Create** adds it. A preview shows while the form is open. **Cancel** or Escape leaves the model as it was.

## In the timeline
- A functional feature is one block in the timeline. Its row opens to list what it made, such as the walls extrusion and the window cuts.
- Click one of those rows to select that item. It is read-only: edit, delete or roll back the functional feature as a whole from its own row (right-click **Edit Functional Feature**, or double-click it).
- The timeline bar can sit before or after the block, never inside it.
- You can add features after it and change what it made, as with any other feature.

## It keeps up
- It is built again every time the model updates, so a change to its sketch changes what it makes.
- When its file changes (edited and saved, or its crate updated), the models using it rebuild with the new version.
- When its file is gone (its crate deleted), it shows red in the timeline with "file not found", and what it made disappears until the file is back.

## Writing one
A functional feature file never opens in the model view. Opening one (double-click it in the Workspace panel, **File › Open**, or **Open Functional Feature File** on its row) opens it in CADen's [text editor](text_editor.md). The Workspace panel's right-click menu also has **Open in System Editor**. Save it, and the models using it update.

```python
DESCRIPTION = "Raises a sketch's surfaces by a height."

ARGUMENTS = [
    ce.Argument("sketch", kind="sketch", description="The sketch to raise"),
    ce.Argument("height", kind="length", default="10mm"),
]

def build(model, sketch, height, name):
    surfaces = [s.name for s in sketch.derived_surfaces()]
    return [ce.Extrude(name=f"{name}__raised", sketch=sketch, surfaces=surfaces,
                       start=ce.Distance(0), end=ce.Distance(height))]
```

- `DESCRIPTION`: shown at the top of its form.
- `ARGUMENTS`: each thing it asks for, in order:
  - things to pick: `sketch`, `body`, `feature`, `face`, `edge`, `line`, `circle`, `point`, `plane`
  - values to type: `length` (in the model's length unit), `angle`, `number`, `integer`, `boolean`, `vector`

  `default` is a value's starting expression, and `description` is its tooltip.
- `build`: gets the model, then each argument by name: the picked item, or the value worked out. If it takes `name`, it also gets this use's own name; start the names of what it makes with it so two uses don't clash. Make the features with `ce.` calls, as a model file does, and **return the list of what it made**. Raise an error to refuse, and the message shows on the feature.

Because it is Python, a functional feature runs code on your computer: use only ones from people you trust. Installing a crate file that holds Python asks first. Crates from CADen's own website don't ask.

## See also
- [Custom features](custom_features.md): features drawn as a model.
- [Tool crates](tool_crates.md): installing functional features from the Crates panel.
- [The Architecture crate](architecture.md): Floor Plan.

[← All documentation](../index.md)
