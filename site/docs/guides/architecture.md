# The Architecture crate

The Architecture crate turns a floor plan sketch into walls with their windows and doors cut. It isn't installed with CADen: install it from the **Crates** panel's **Downloads** (see [Tool crates](tool_crates.md)). It holds:

- **Architecture**, a [master file](master_files.md): a model in feet with the parameters below and the `wall`, `window` and `door` tags.
- **Floor Plan**, a [functional feature](functional_features.md), a tool in the **Architecture** bag on the Features tab.

| Parameter | Default | |
|---|---|---|
| `wall_height` | 8 ft | how high the walls go |
| `window_height` | 4 ft | how tall each window opening is |
| `window_offset` | 3 ft | how high above the floor every window starts |
| `door_height` | 7 ft | how tall each door opening is |

## Drawing a floor plan
1. Choose **File › Create New › Architecture** (or its tile on the welcome page).
2. Make a sketch on the floor plane. Draw the walls as closed outlines with lines on the `wall` tag. A wall's thickness is what you draw: for a room, draw its outside outline and its inside outline. The room inside is left open, and only the band between them is wall.
3. Draw each window as a rectangle on the `window` tag, over the wall where it goes. It can be thinner than the wall: it is widened across the wall so the opening goes all the way through. Its length along the wall is the opening's width.
4. Draw each door the same way on the `door` tag.

## Raising it
1. Click **Floor Plan** in the **Architecture** bag.
2. Click a line of the plan (or the sketch in the Model tab) for **sketch**.
3. The four heights start at the model's parameters. Change them here for this floor plan only, or change the parameters to change every floor plan that uses them.
4. Click **Create**.

Floor Plan makes:
1. **Walls**: the wall surfaces extruded from the floor to the wall height. Walls that touch become one body; walls apart stay separate bodies.
2. **Window cuts**: each window cut through the wall, from the window offset up by the window height. The sketch sets only where it is along the wall.
3. **Door cuts**: each door cut through the wall, from the floor up to the door height.

Floor Plan is one block in the timeline. Open its row to select the walls or a cut. Change the sketch and the walls follow. Add features after it, such as a roof or trim, as on any model.

## See also
- [Functional features](functional_features.md)
- [Tool crates](tool_crates.md)
- [Master files](master_files.md)

[← All documentation](../index.md)
