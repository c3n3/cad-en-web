## CADen 0.8.0 Alpha

- New: press **N** to look square at a selected flat face, centred and zoomed to fit. With nothing selected, N shows a cube round the model: click any of its faces, edges or corners to look from there (Escape puts it away). The cube button at the top of the view does the same
- New: **quick dimensions**. While drawing a line, polyline or circle (or a wall's centerline), type a length or radius: a box opens at the cursor, and Enter moves the point to it. Enter again places it, and moving the mouse lets the point follow the cursor again. No constraint is made. Enter with nothing typed places the point under the cursor, and a polyline now finishes with Escape or a double-click
- New: the **Wall** tool (Sketch tab, Sketch Advanced). Click the start, then the width, then the centerline's corners. The wall follows its centerline, its corners are mitred and open ends cut square, and it has one width dimension. Click the first corner again to close it into a ring
- **E** is now the Equal constraint's shortcut (it was Shift+E). Ellipse has no shortcut
- Rolling back now includes what the bar stops at, and a feature made while rolled back moves the bar past it, so you see it built
- While a sketch is edited, its surfaces and the bodies' faces, edges and corners pick by depth: what is in front wins, and a body edge in the sketch's plane wins over the surface on it. The sketch's own lines and points still win every click
- Choosing **Entity** for an extrude's Start or End makes its box ready for the pick
- Fix: a tangent from a line to a body's round edge (or a circle equal to one, or a line through the origin between two edges) works in sketches that also use symmetric constraints
- Fix: a point made coincident with an axis that passes straight through the sketch stays where the axis crosses it
- Fix: snapping no longer catches a body edge hidden behind another body
- Fix: a line can be deleted from a sketch whose constraints conflict
- Fix: a region bounded by projected body edges can be extruded (Create was greyed out)
- Fix: a right-click during a feature form no longer adds to its picks, and the Properties panel keeps the form while you use the tree
- Fix: Save As suggests `Untitled.json.caden`, not `Untitled.json.caden.json.caden`

[Every release's notes](/docs/#releases)
