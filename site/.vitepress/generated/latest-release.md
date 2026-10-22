## CADen 0.5.5 Alpha

- New: slice from CADen with **Bambu Studio** or **Orca Slicer**. The 3D print overlay, top right of the model view, shows the slicer and its print presets; **Slice** gives each body's estimated weight and print time, and a total. The printer and filament are the ones selected in your slicer
- **View › 3D Print Overlay** turns it on for a model; models made from the 3D Print master have it on. It's also a setting, **print.slice_overlay**, for every model
- **Slice View** shows the printed tool paths over see-through bodies, each layer as its own ridge, like the slicer's preview. A slider on the right shows only the layers between its handles
- Results stay after you change the model, greyed as out of date until you Slice again. A preset you save in the slicer shows up in CADen by itself
- Bodies are sliced as the STL export writes them, Infill cavities included, and turned so the model's print_direction points up
- Infill: the preview outlines up to 10,000 cavities, spread through the whole body
- Fix: a model using a custom feature lost its own settings (units, the overlay) when reopened

[Every release's notes](/docs/#releases)
