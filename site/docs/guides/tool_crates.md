# Tool crates

A tool crate packs templates and custom features into one file, `<name>.ccaden.zip`, so you can share them. Inside, it is a zip with two folders shaped like your installed ones: `.tcaden/` for templates and `.fcaden/` for custom features.

## Installing a crate

1. Choose **File › Install Crate...** and pick the `.ccaden.zip` file.
2. If the crate holds Python files (`.tcaden.py` or `.fcaden.py`), CADen warns you first. Python files run code on your computer, so install the crate only if you trust whoever made it. Answer **No** and nothing is installed.
3. With a workspace open, choose where the crate goes:
   - **User space**: your own templates and custom features, available in every workspace.
   - **Workspace**: the open workspace's `.tcaden/` and `.fcaden/` folders.

   With no workspace open, the crate goes into user space without asking.
4. If some of the crate's files are already there, CADen asks about each one: **Replace**, **Skip**, or **Cancel** to stop the whole install. If every file in the crate is already there, one question covers the whole crate.

The templates show in the Templates panel and the custom features show as tools in their bags. Folders inside the crate are kept. A custom feature in a folder below a bag's folder, such as `.fcaden/Fixings/Deep/trap.fcaden.json`, is a tool in the `Fixings` bag.

Only templates in `.tcaden/` and custom features in `.fcaden/` are installed. Anything else in the zip, such as a readme or a model, is skipped, and CADen lists what it skipped. A crate holding a path that leads outside it (such as `../`) is refused completely.

## Creating a crate

1. Choose **File › Create Crate...**.
2. Check the templates and custom features to include. The dialog lists yours (**User**) and, with a workspace open, the workspace's (**Workspace**). The workspace list includes templates saved anywhere in the workspace, not only in its `.tcaden/` folder. Built-in templates aren't listed.
3. **Preserve folder structure** (checked by default) keeps the folders they are in. Unchecked, every file goes straight into the crate's `.tcaden/` or `.fcaden/`. A workspace template from outside `.tcaden/` always goes straight in.
4. If two checked items would become the same file in the crate, the dialog names them. Untick one to continue.
5. Click **Create...** and choose where to save the `.ccaden.zip` file.

## See also

- [Templates](templates.md)
- [Custom features](custom_features.md)
- [Model files](model_files.md): JSON (safe) and Python files.

[← All documentation](../index.md)
