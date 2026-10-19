# STL import

Turn an STL file into a model you can sketch on and edit. CADen finds the STL's flat faces by
merging coplanar triangles; you sketch on those faces and extrude, cut or add features as you
would on any body.

## Importing an STL

1. Choose **File › Import › STL...**.
2. Pick the `.stl` file. Binary and ASCII STL files both work.
3. Set the import settings (below) and click **Import**.

A progress bar shows the file being read and its faces found. **Cancel** stops the import. When
it finishes, the model opens in a new, unsaved tab named after the STL. Nothing is written until
you save it, as a `.zip.scaden`. The status bar says how many faces were found and how many
triangles are in no face.

## The import settings

- **Units**: the unit the STL's numbers are in (STL files don't say). This becomes the model's
  length unit. The default is mm.
- **Smallest face**: a face smaller than this fraction of the bounding box's surface area is not
  made a face. Its triangles are still drawn, but clicking them selects the whole body. The
  default is 1/1000. Slide it right to keep only the large faces.
- **Angle tolerance**: how far apart, in degrees, two triangles' directions can be and still be
  merged into one face. The default is 0.5°.
- **Plane distance**: how far a triangle's corner can lie off the face's plane, as a fraction of
  the model's size (the bounding box's diagonal). The default is 0.00001.

The settings are saved with the project and used again every time it is opened. Faces are
numbered the same way on every import, so features you add keep pointing at the right faces.

## Working on the model

- The STL is one body, `stl.body-0`, on the mesh engine. The view shows the **Mesh object** mark.
- Its faces are `stl.body-0.stl.face-0`, `stl.body-0.stl.face-1`, and so on. Click a face to
  select it, or sketch on it.
- Triangles that are in no face select the body when clicked.
- Features (Extrude, Cut, Mirror, and the rest) act on the whole body.
- The body has no edges, so Fillet and Chamfer have nothing to work on.
- The **stl** item in the timeline shows the file, units, settings, triangle count and face count
  in the Properties panel.

## Saving and opening

- An STL project saves only as a `.zip.scaden`. **File › Save** (or **Save As...**) writes the
  model and a copy of the original STL into one zip file.
- **File › Open** opens a `.zip.scaden`. The STL is read again with the saved settings, under a
  progress bar you can cancel.
- One STL per project. Exporting back to STL from a project works as it does for any model
  (**File › Export › STL...**).

## From an AI or a script

`caden-ai import-stl part.stl --out part.zip.scaden` makes a project without the app, with the
same settings as options (`--unit`, `--proportion`, `--angle`, `--distance`). `caden-ai inspect`
and `caden-ai export` read `.zip.scaden` files. See [Using CADen with an AI](ai.md).
