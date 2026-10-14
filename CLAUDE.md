# Project Instructions

## Design usage

- Design files located in designs/**
- When a design is first executed, mark the top of the file with a time in this format:
  - `January 1 2027 10:00pm`
- All designs should have a Q/A session initially
  - Append all questions and answers to a new `# Q/A` section at the bottom of the design
- Once a design is complete, the engineer may have corrections / fixes
  - Append all corrections / fixes to a new `# Corrections` section at the bottom of the design
- The implementation lives in the sub repos (designs/architecture/repo_redesign.md):
  - `cad-en-core/`: the C++ engine and renderer, its PyBind bindings (`cad_en_core`), C++ skill file and engine tests
  - `pycad-en/`: the Python application (`pycad_en`, PyPI `cad-en`), its resources, Python-only skill file and GUI tests
  - This super repo: the designs and plans, the build / run / test control scripts at the root, the full skill file, models/
  - Put each change in the repo it belongs to; the Python sub repo gets no C++ implementation details
- Do not add your descisions into the design plans. Only feedback from the user, Q/A + Corrections

## Rules

- When you are done working on a project, make / update a skills file in the proper location so you can re-read it and reduce AI usage
- When you start a task, search for a skills file first to make things faster
- Do not run `git commit`
- Use uv when possible in place of bare python commands
- Do not make assumptions, instead ask questions 'Q/A'
