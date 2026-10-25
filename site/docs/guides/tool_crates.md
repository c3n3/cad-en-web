# Tool crates

A tool crate packs templates, custom features, [functional features](functional_features.md) and [master files](master_files.md) into one file, `<name>.zip.ccaden`, so you can share them. Inside, it is a zip with folders shaped like your installed ones:

- `templates/` for templates
- `custom_features/` for custom and functional features
- `master_files/` for master files

(Crates made before CADen 0.5, with `.tcaden/` and `.fcaden/` inside, are not read.)

A crate can also have a name and a version: `name.txt` (lowercase letters, digits and dashes, such as `architecture`) and `version.txt` at its root, plus an optional `title.txt` (the name shown) and `description.txt`. A **named crate** installs as a whole, so the Crates panel can list it, update it and delete it.

## The Crates panel
The **Crates** tab in the side bar, next to Workspace and Templates, has three sections:

- **User Crates**: the named crates installed for you, in every workspace.
- **Workspace Crates**: the ones installed in the open workspace.
- **Downloads**: the crates on [CADen's website](https://c3n3.github.io/cad-en-web/crates). Type in the search box to find one. **Refresh** reads the website's list again. Without an internet connection, the panel says it couldn't read the list.

User Crates and Workspace Crates are hidden while they are empty.

- **Install** (the down arrow on a crate in Downloads): with a workspace open, choose **User space** or **Workspace**. With no workspace open, it installs into user space without asking. Its templates, features and master files show straight away. A crate stays in Downloads until it is installed in both places.
- **Update** (the circling arrow, shown when the website has a newer version than the one installed): CADen asks first, then replaces the crate where it is. Models using its features rebuild with the new version.
- **Delete** (the red X): CADen asks first, then deletes the crate. Models using its features show them red with "file not found", without what they made, until the crate is installed again.

Crates from the website install without the Python warning below.

## Installing a crate file
1. Choose **File › Install › Crate...** and pick the `.zip.ccaden` file.
2. If the crate holds Python files (`.py.tcaden`, `.py.fcaden`, `.py.ffcaden` or a `.py` master file), CADen warns you first. Python files run code on your computer, so install the crate only if you trust whoever made it. Answer **No** and nothing is installed.
3. With a workspace open, choose where the crate goes:
   - **User space**: yours, available in every workspace.
   - **Workspace**: the open workspace's `.caden/` folder.

   With no workspace open, the crate goes into user space without asking.
4. A **named crate** is installed as a whole, into `crates/<name>/` (in the CADen settings folder, `%APPDATA%\CADen` on Windows, or in the workspace's `.caden/`). It is then listed in the Crates panel. If it is already installed there, CADen asks whether to replace it.
5. A crate without a name installs its files loose, into your (or the workspace's) `templates`, `custom_features` and `master_files` folders. If some are already there, CADen asks about each one: **Replace**, **Skip**, or **Cancel** to stop the whole install. If every file in the crate is already there, one question covers the whole crate.

The templates show in the Templates panel. A named crate's templates appear in a folder named after the crate. The custom and functional features show as tools in their bags: a named crate's loose features are in a bag named after the crate. The master files show in **File › Create New** and on the welcome page. Folders inside the crate are kept. A custom feature in a folder below a bag's folder, such as `custom_features/Fixings/Deep/trap.json.fcaden`, is a tool in the `Fixings` bag.

Only the files in those three folders are installed. Anything else in the zip, such as a readme or a model at its root, is skipped, and CADen lists what it skipped. A crate holding a path that leads outside it (such as `../`) is refused completely.

A model refers to a feature from a crate installed for you by the crate's name, such as `crate:architecture/floor_plan.py.ffcaden`, so it works on any computer that has the crate.

## Creating a crate
1. Choose **File › Create Crate...**.
2. Check the templates, custom features and master files to include. The dialog lists yours (**User**) and, with a workspace open, the workspace's (**Workspace**). The workspace list includes templates saved anywhere in the workspace, not only in its `.caden/templates/` folder. Built-in ones aren't listed.
3. **Preserve folder structure** (checked by default) keeps the folders they are in. Unchecked, every file goes straight into the crate's `templates/`, `custom_features/` or `master_files/`. A workspace template from outside `.caden/templates/` always goes straight in.
4. To make a named crate, type its **Name** (lowercase letters, digits and dashes), its **Version** and, if you like, a **Title**. With a name that isn't allowed, **Create...** stays off.
5. If two checked items would become the same file in the crate, the dialog names them. Untick one to continue.
6. Click **Create...** and choose where to save the `.zip.ccaden` file.

## See also
- [Templates](templates.md)
- [Custom features](custom_features.md)
- [Functional features](functional_features.md)
- [The Architecture crate](architecture.md)
- [Master files](master_files.md)
- [Model files](model_files.md): JSON (safe) and Python files.

[← All documentation](../index.md)
