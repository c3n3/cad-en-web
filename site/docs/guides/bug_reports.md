# Bug reports

When something goes wrong, **Help › Bug Report...** saves one file that shows
what happened, for a developer (or an AI) to work out why.

## Making one

1. Choose **Help › Bug Report...**.
2. Describe what went wrong and what you expected (you can leave it empty).
3. **Include all open models** is ticked: every open model goes in the report,
   unsaved changes included, with its action history. Untick it to leave the
   models out; the rest is still saved.
4. Click **Confirm**, then choose where to save it. The file is
   `bug_<date>_<time>.cadenbug.json.gz`.

## What is in it

- Your description.
- The open models (when ticked) and each one's action history.
- The **session record**: the last 500 things you did in this run of CADen --
  buttons and menu items, tabs, panels docked or undocked, values typed (once
  you press Enter or stop typing), what you selected, keyboard commands and
  where a tool clicked in the 3D view. Moving or resizing windows and moving
  the cursor are not recorded.
- The state of the window: the open model, the tool, the panels, the view.
- CADen's version, your system, and your settings.

Nothing is sent anywhere: you choose where the file goes and who gets it.

## Session recording

Session recording is on by default. Turn it off in **Settings › Settings...**
(**General › general.session_recording**); turning it off clears what was recorded.
When it is off, a bug report still saves, without the session record, and the
dialog offers to turn it back on.

[← All documentation](../index.md)
