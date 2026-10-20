# Measure

Reads distances, angles and sizes off what you select, without changing anything. It works with or without a sketch open, on sketch geometry and on bodies.

**Where:** Sketch tab › Sketch Other · **Shortcut:** M

## How to use
1. Click **Measure** (or press M while the 3D view has the keyboard and no tool form is open in the Properties panel). The cursor becomes a measuring stick and the Properties panel opens with the Measure options. An open sketch stays open.
2. Select one or two items the normal way: click, Shift- or Ctrl-click to add, or drag a box.
3. The measurement is drawn in the view with labels next to the geometry, and every value is listed in the Properties panel.
4. Double-click a label to copy its number. A small box opens at the label with the number selected; Escape or a click elsewhere closes it.
5. Leaving the tool (Escape, or another tool) clears the measurement and the selection.

## Options
What you select decides what is measured:
- **One line** — its length; its angles to the axes are in Properties.
- **One circle** — its diameter and circumference. **One arc** — its radius, arc length and angle.
- **An ellipse** — both axes and the perimeter. **A spline, polyline or body edge** — its length.
- **A body face** — its area, and the perimeter of a flat one. **A point** — its X, Y and Z.
- **Two points** — the direct distance, drawn in the accent colour, and the X, Y (and Z) distances, drawn in the axis colours. An axis line is only drawn when that distance isn't zero.
- **A point and a line** — the shortest distance to the line, with its X / Y / Z distances.
- **Two lines** — parallel: the gap between them. Not parallel: the angle between them (0–90°) and the shortest distance.
- **An arc or circle with a point, a line, or another arc or circle** — the distance from the centre, the minimum and the maximum. All three are listed; the one chosen under **Arc distance** is drawn.
- **Anything with a face, spline or body edge** — the shortest distance, drawn in the view. Two faces show the minimum distance between them; two flat faces also show the angle between them, and parallel ones the gap between their planes (listed in the Properties panel).
- Three or more items selected: nothing is measured.

Properties panel:
- **Axis measurements** — untick to show only the direct distance between two points, without the X / Y / Z distances.
- **Arc distance** — Centre, Minimum or Maximum: which arc / circle distance is drawn.
- **Significant figures** — how many the labels and the panel show (3 to start with).

The options are remembered between sessions.

## Tips
- While you edit a sketch and both items are in it, X and Y are the sketch's own horizontal and vertical. Otherwise they are the world's X, Y and Z.
- Labels show the model's length unit; angles are in degrees.
- The axis colours are part of the theme: Settings › Theme…, the view.axis_x, view.axis_y and view.axis_z colours.

## See also
- [Select](select.md) — the same selection, without the measurements
- [Dimension](dimension.md) — a dimension that drives the sketch

[← Sketch Other](../bags/sketch_other.md) · [All documentation](../index.md)
