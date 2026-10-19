# Using CADen with an AI

CADen comes with an AI API: instructions and tools an AI assistant (Claude
Code, Codex, Cursor and the like) uses to write CADen models for you, without
the GUI. It can make parts, assemblies, templates and custom features, then
build them and check what came out.

## Where it is

CADen keeps the AI API in this folder:

`$AI_API_FOLDER`

(`%LOCALAPPDATA%\CADen\ai_api` on Windows, `~/.cache/CADen/ai_api` on Linux.)
CADen puts it there when it starts, and replaces it when CADen is updated, so it
always matches your version.

## Using it

1. Point your AI at the folder: add it to the AI's workspace, or tell it to
   read `SKILL.md` in that folder first. Agents that load skills can use the
   folder as a skill as it is.
2. Ask for what you want: "make a 60 x 40 mm box with 2 mm walls as a CADen
   model in my project folder".
3. Open the file it writes in CADen (**File › Open**).

The AI checks its work with the folder's own `caden-ai` command, which needs
Python 3.12 on your computer (or [uv](https://docs.astral.sh/uv/), which gets
Python itself).

## Tips

- Files the AI writes as Python (`.py.caden`) run when they are opened. Read
  them, or ask for JSON (`.json.caden`), which can't run anything.
- Don't edit the folder: CADen replaces it on update. Keep your own files in
  your project.

[← All documentation](../index.md)
