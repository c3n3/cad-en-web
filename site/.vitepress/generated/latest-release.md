## CADen 0.5.4 Alpha

- New Infill tool in the 3D Prints bag: leaves cavities inside a body in its STL, so the slicer prints walls round them and the part uses less material. Close-packed spheres, or round or rectangular channels running along a line. The model itself stays solid
- Infill's Auto Spacing (on by default) spreads the shapes out to the margin on every side, never closer than the spacing you set. The defaults are tuned for printing: 0.5 mm spheres, a 1.25 mm spacing and a 0.75 mm wall
- Pick a body to fill all of it, or a feature to fill only what that feature added. The cavities follow later changes to the body and always keep the margin inside it
- Infills with the same settings whose areas touch become one seamless grid. If they differ, the form says so and offers to use the other infill's settings
- While the Infill form is open the cavities are drawn as outlines; typing a number waits until you pause before redrawing
- The Merge with and Cut bodies boxes: remove a body with the Delete key or right-click › Delete
- A projected item's tag can be changed; the item it was projected from is left as it is. A projection now also follows its source's tag when the source is retagged

[Every release's notes](/docs/#releases)
