# The demo workspace

Click **Try a demo!** at the top right of the welcome page. CADen opens a small workspace: a box with a lid that slides on and off. Everything in it is made from parameters, so you can change it and see it rebuild.

## What's in it

| File | What it is |
|---|---|
| `box_with_lid.json.acaden` | The assembly, open first: the box with its lid on. |
| `base.json.caden` | The box. All the sizes live here. |
| `lid.json.caden` | The lid. It reads the box's sizes, so it always fits. |

- The box is 70 mm long, 40 mm wide and 40 mm tall with the lid on. Its corners are cut at 45°.
- The lid drops over a lip at the top of the box. The lip and the inside of the lid are drafted (tapered) by the same angle, so the lid starts easily and seats snugly. With the lid on, its sides are flush with the box's.
- Each wall and the lid's top has a raised border. Inside the border is a pocket with a brick texture.
- The words sit on chamfered blocks inside the pockets: "top" on the lid, "I'm a box" on the front. They are engraved.

## Open and close the lid

In the assembly, drag the lid. It only moves straight up and down: it stays centred over the box and doesn't turn. Nothing stops it at the top or bottom.

## Change it

Open `base.json.caden` and look in the **Config** tab's **Parameters**. Change a value there, or select a parameter and edit it in Properties. The box rebuilds.

| Group | What it sets |
|---|---|
| **walls** | Length, width and height (lid on), wall thickness, floor thickness. |
| **lid** | The lid's height, how far it overlaps the lip, the clearance on each side, the draft angle. |
| **chamfer** | The size of the cut corners. |
| **texture** | The border's width, the pocket's depth, the brick size and height. |
| **text** | The two labels, the font, their sizes and depth, and their blocks. |

- The lid takes its sizes from the box. Save the box, and the lid and the assembly follow.
- The labels and the font are text parameters, used in the Text tool's **Text** and **Font** boxes as `{text::front}` and `{text::font}`.
- The font is Gabriola, which comes with Windows. Where it isn't installed, Times New Roman is used.

## Starting over

The demo is a copy in CADen's cache folder. Each time you click **Try a demo!** you get a fresh copy, as it shipped, and any tabs from the old copy close. It isn't added to the welcome page's **Recent Workspaces**. To keep your changes, use **File › Save As** to save them somewhere else first.
