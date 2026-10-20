# Infill

![Infill demonstration](../videos/infill.webp){.tool-demo}

Leaves cavities inside a body when it is exported to STL: close-packed spheres, or channels with a round or rectangular section running along a line. The body in the model is not changed.

**Where:** 3D Prints bag (hidden until you add it to a tab) · **Shortcut:** none (available from the command palette, Ctrl+Shift+P)

## How to use
1. The **3D Prints** bag isn't on the ribbon at first: click the gear tab at the end of the ribbon to open the Tool Ribbon Editor, and drag **3D Prints** onto a tab.
2. Click **Infill**. Any sketch being edited is closed. If a face was selected, its body is already in the **Body / feature** box.
3. Otherwise click a face of the body (or a feature in the Model tab) to put it in the box.
4. Choose the **Shape** and its sizes. For channels, click the **Along** box and then a line, an axis or a straight body edge. For rectangles, also click the **Width along** box and then a second line.
5. While the form is open the cavities are drawn as outlines, and **Fits** says how many there are, or why the infill is invalid.
6. Click **Create** (or press Ctrl+Enter). **Cancel** or Escape takes it away again.

## Options
- **Shape** — **Spheres** (close packed), **Circles** (round channels) or **Rectangles** (rectangular channels).
- **Diameter** — the spheres' or the circles' diameter.
- **Width** / **Length** — a rectangle's size: the width points along the **Width along** line.
- **Spacing** — the solid gap left between neighbouring shapes. It must be more than 0: shapes may not touch.
- **Margin** — the wall left between the cavities and the outside of the body.
- **Along** — the line the channels run along. They run from wall to wall, and are split where the body is cut away.
- **Width along** — the line the rectangles' width points along. It must cross the **Along** line.

## Tips
- The cavities only go into STL exports. The body you see, its volume and a STEP export stay solid.
- The grid of shapes is centred on the body's box, taken when the infill is made. Later edits before the infill don't move it.
- Two infills on the same body may not touch each other. If they do, the later one is invalid. An invalid infill is left out of the STL, and the export says so.
- Infill is a step in the timeline: to change it later, right-click it in the Model tab and choose **Edit Feature**.

## See also
- [Overhang](overhang.md) — chamfer overhangs so the part prints without supports.

[← 3D Prints](../bags/3d_prints.md) · [All documentation](../index.md)
