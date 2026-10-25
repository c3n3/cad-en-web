# The text editor

CADen has a built-in text editor for model files, functional features, Markdown notes and Python scripts. It works like VS Code: the same keys, multiple cursors, folding, and find and replace.

## Opening a file
- In the **Workspace** panel, right-click a file and choose **Open in Text Editor**. The panel lists models, templates, custom and functional features, and also Markdown (`.md`) and Python (`.py`) files.
- Double-click a Markdown file, a Python file or a functional feature (`.py.ffcaden`) to open it in the editor. A functional feature's menu also has **Open in System Editor**.
- Right-click a model's tab and choose **Open in Text Editor** to see the file behind it.
- Any file that is text can open. CADen checks the content, not the name: UTF-8 text opens, and a binary file such as an STL or an image does not.

The file opens in its own tab, named `[TX] <file name>`, beside the model tabs. While a text tab is in front, the editor fills the middle of the window and the ribbon, the Model and Config tree, **Properties** and **History** are hidden. The side bar (Workspace, Templates, Crates) stays. Click a model tab to get everything back as it was.

JSON, Python and Markdown are coloured. CADen's model files are coloured by their format: `.json.caden` as JSON, `.py.caden` and `.py.ffcaden` as Python.

## Editing
The editor shows line numbers, the current line, matching brackets and indent guides. The status row at the bottom shows the cursor's line and column, the line endings (LF or CRLF) and the language.

| Keys | What it does |
|---|---|
| Ctrl+X / Ctrl+C / Ctrl+V | Cut, copy, paste (a whole line when nothing is selected) |
| Ctrl+Z / Ctrl+Y | Undo, redo |
| Ctrl+/ | Comment or uncomment the line (Shift+Alt+A: a block comment) |
| Ctrl+Shift+K | Delete the line |
| Alt+Up / Alt+Down | Move the line up or down (with Shift: copy it) |
| Ctrl+Enter / Ctrl+Shift+Enter | Insert a line below or above |
| Ctrl+] / Ctrl+[ | Indent, outdent |
| Ctrl+L | Select the line |
| Ctrl+Shift+\ | Jump to the matching bracket |
| Shift+Alt+Right / Left | Grow or shrink the selection |
| Ctrl+G | Go to a line (`line` or `line:column`) |
| Alt+Z | Word wrap on or off |
| Ctrl+= / Ctrl+- / Ctrl+0 | Zoom in, out, reset |

Typing `(`, `[`, `{` or a quote adds its closing partner. Enter keeps the line's indent, and Tab and Shift+Tab indent and outdent the selected lines.

### Multiple cursors
- **Ctrl+D** selects the word at the cursor. Press it again to add the next match as another cursor. **Ctrl+K Ctrl+D** skips a match and moves to the next.
- **Ctrl+Shift+L** puts a cursor on every match of the selection.
- **Ctrl+Alt+Up / Down** adds a cursor on the line above or below. **Shift+Alt+I** adds one at the end of every selected line.
- **Alt+Click** adds a cursor. **Shift+Alt+drag** selects a column.
- Whatever you type goes in at every cursor, as one undo step. **Escape** goes back to one cursor.

### Folding
- Click the arrow beside a line number, or press **Ctrl+Shift+[** to fold and **Ctrl+Shift+]** to unfold.
- **Ctrl+K Ctrl+0** folds everything and **Ctrl+K Ctrl+J** unfolds everything. **Ctrl+K Ctrl+[** and **Ctrl+K Ctrl+]** fold or unfold a block and everything inside it.
- Python folds by indentation, JSON by its brackets, and Markdown by its headings.

### Find and replace
- **Ctrl+F** opens the find box over the editor's top right corner. It shows how many matches there are ("2 of 5"), or "No results" in red.
- The buttons beside the field match case (**Alt+C**), whole words (**Alt+W**) and regular expressions (**Alt+R**).
- **Enter** and **F3** go to the next match. **Shift+Enter** and **Shift+F3** go back. **Alt+Enter** selects every match.
- **Ctrl+H** opens the replace row: replace the current match (**Ctrl+Shift+1**) or all of them (**Ctrl+Alt+Enter**). A regular expression's groups can be used in the replacement as `$1`.
- **Escape** closes it.

## Saving
- **Ctrl+S** (or **File › Save**) saves the text tab in front. A `●` on its tab means unsaved changes.
- Before a model file, assembly, template or custom or functional feature is saved, CADen checks that the text would load: its syntax, the calls it makes and, for a JSON file, its keys. The file itself is never run. If the check fails, nothing is written. A message lists the problems, and the cursor goes to the first one's line.
- A file keeps its line endings (LF or CRLF) and its byte order mark, if it has one.

## When the file changes elsewhere
A file can be open in a text tab and a model tab at once, or changed by another program. CADen watches every open file.
- A tab with no unsaved changes follows the file. A text tab shows the new text. A model tab shows the new model, and **Ctrl+Z** goes back to what it showed before.
- A tab with unsaved changes keeps them and is marked `⚠` (its tooltip says why). When you save it, CADen asks: "The original version has already been overwritten. Would you like to discard changes or overwrite the file?"
  - **Discard changes** shows the file as it is now. This is an undo step, so **Ctrl+Z** brings your changes back.
  - **Overwrite the file** saves your version over it.

## Keys and settings
- Every editor key is a command named `textEditor.…` in **Settings › Keybindings...** and in the command palette, and you can bind each one to other keys. Editor keys only work while a text tab is in front.
- **Settings › Settings...** has an **editor** group, with VS Code's defaults:
  - `editor.font_size` (14)
  - `editor.tab_size` (4)
  - `editor.insert_spaces` (on)
  - `editor.word_wrap` (off)
  - `editor.render_whitespace` (`none` or `all`)
