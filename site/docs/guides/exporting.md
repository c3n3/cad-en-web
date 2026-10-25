# Exporting STL and STEP

**File › Export › STL...** (Ctrl+Shift+E) writes the model's bodies as STL files, for 3D printing and other programs. **File › Export › STEP...** writes exact STEP files the same way (exact engine only).

## What is exported

- The bodies you have selected (a selected face counts as its body); with nothing selected, every body.
- **Export hidden bodies** (unticked at first): hidden bodies are left out unless you tick it -- even ones you selected.
- With only one body to write, the file options aren't shown: it is written as `<export name>.stl`.
- With several, choose **One file with all bodies** (`<export name>.stl`), **One file per body** (`<export name>_<body>.stl`), or both.

## Where it goes

- The first time, CADen asks for a folder, then shows the export options.
- The folder you export to becomes the model's export folder: later exports go straight to the options, already there. It is saved in the model file (relative to it, so the project can move) when you next save the model.
- The folder is listed at the top of the export options. Click its **gear** to pick another; the files go there, and it is the model's export folder from then on. The change only counts once you click **Export**; **Cancel** leaves the folder as it was.

## The other options

- **Export name**: the file name, the model's name to start with.
- **Accuracy**: how many straight pieces a full circle is cut into in the file (8 to 256; the sample circle shows it). On the exact engine, **Chord error** and **Angle** set it instead.
- **Tags**: when the bodies being exported are on different tags, untick a tag to leave its bodies out.
- A model's [Infill](../tools/infill.md) cavities go into its STL files.

[← All documentation](../index.md)
