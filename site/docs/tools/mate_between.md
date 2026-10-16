# Between

Centres one model between two faces of another — a block in a slot, a wheel between two forks. The middle of one model's pair of planes is put on the middle of the other's.

**Where:** Assembly tab › Basic · **Shortcut:** none (available from the command palette, Ctrl+Shift+P)

## How to use
1. Click **Between**. The Properties panel shows its form with the **Plane A1** box active.
2. Click two parallel flat faces of one model (or base planes), for example the two inner walls of a slot.
3. Click two parallel flat faces of another model, for example the two sides of the block that goes in it. The block moves so it sits halfway between the walls.
4. Click **Create**.

## Options
- **Plane A1 / Plane A2** — two parallel planes of the first model.
- **Plane B1 / Plane B2** — two parallel planes of the second model.

## Tips
- Each pair must be parallel and on one model; the form says so when they aren't.
- Only the distance across the planes is set: the model can still slide along them. Add a [Coincident](mate_coincident.md) or [Concentric](mate_concentric.md) to hold the rest.
- A constraint that can't be met together with the others is refused, and the form says so.

## See also
- [Coincident](mate_coincident.md) — put two flat faces together.
- [Parallel](mate_parallel.md) — make two flat faces parallel.

[← Basic](../bags/assembly_basic.md) · [All documentation](../index.md)
