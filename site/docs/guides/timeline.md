# The timeline

The **Timeline** in the **Model** tree lists a model's sketches, planes and features in the order they are built. In an assembly it lists the models and the constraints between them. Each item is built from the ones above it.

## Rolling back
Drag the bar under the last item up to roll the model back. Items below the bar are greyed: CADen keeps them but doesn't build them. Anything you make while rolled back goes in at the bar. Drag the bar back to the bottom to build everything again.

## Moving an item
Click an item in the timeline and drag it up or down. A dashed line shows where it will go. Let go, and the item moves there. The model is rebuilt in the new order, and the move is one step in **History**, so **Undo** puts it back.

An item can't go above something it uses, and an item can't go below something that uses it. For example:

- An extrude can't go above the sketch it extrudes, and that sketch can't go below the extrude.
- A sketch on a face can't go above the feature that made the face.
- A fillet can't go above the feature that made its edge.
- In an assembly, a constraint can't go above the models it joins.

While you drag over a place the item can't go, the cursor shows "not allowed" and the line turns red. If you let go there, a message names what the item depends on and nothing moves.

A custom feature or an imported model moves as one item, with everything it made. Finish editing a sketch or feature before you move timeline items.
