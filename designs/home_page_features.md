October 19 2026 7:10am

# Home page: what CADen offers

Update the home page of the website. We need information about a few things:

* Value parser functionality
* Python + JSON model file formats (Python allows for easy scripting / AI model creation, JSON provides a non scripted model format for security, both provide easy git version tracking)
* Parametric Parameter system (hierarchical import structure)
* Custom Feature creation
* AI API
* No Online login
   * Offline development is easy
* First class workspace environment

# Q/A

**Q: How should the seven topics be laid out on the home page?**
A: Cards, then sections: a grid of short feature cards under the hero (one line each), then a section per topic further down with a paragraph and a small example.

**Q: Where do they go relative to the existing About text and screenshot gallery?**
A: About, then the features, then the screenshots.

**Q: Should topics show small code examples?**
A: You can show a tree of files, then have one file in the tree that is referencing another in a value parser expression: some_model::some_value + 1in or so. Make names make sense. Value expressions too. No other code.

**Q: Should each topic link to its documentation page where one exists?**
A: Yes, link them ("Learn more" to the matching guide).

**Q: What should "No online login" claim?**
A: No account or sign-in; works without internet; nothing sent anywhere (no telemetry; bug reports are files you choose to send); your files, your folders (models are plain files on your disk).

**Q: What should "First class workspace environment" highlight?**
A: Folder + file tree (git status colours), tabs + session (reopening a workspace reopens what was open), quick open (Ctrl+P, Ctrl+Tab), workspace tools (its own custom features, templates, master files and settings).

**Q: What should the value parser topic cover?**
A: Mixed units and parameters.
