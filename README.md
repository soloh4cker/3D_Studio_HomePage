# Your 3D Studio homepage — version 1.0

A responsive homepage for Pegboard Studio, Shelf Studio, and Model Studio.
It uses local files, with no build step, installation, fonts, or third-party runtime dependencies.

## Set your links

1. Extract the ZIP into a NEW folder.
2. Open `settings.js` in Notepad or the GitHub file editor.
3. Paste your full Pegboard Studio link after its `url:`.
4. Paste your full Model Studio link after its `url:`.
5. Check the Shelf Studio link. It is already set to the URL you provided earlier:
   `https://soloh4cker.github.io/skadis_studio_3D/`
6. Optionally change `brandName` from `3D Studio` to your own name.
7. Save. Open `index.html` to view the homepage.

Only change the text BETWEEN the quotes; keep the quotes, commas, and brackets.
Example: `url: "https://soloh4cker.github.io/my-pegboard-tool/",`

A blank or invalid link shows Coming soon. A valid link makes the whole card
clickable and opens the tool in a NEW tab. The homepage remains open.
The homepage links to your existing tools; it does not copy or modify them.

## Host on GitHub Pages

For a separate homepage repository:

1. Create a new public GitHub repository, for example `3d-studio`.
2. Upload `index.html`, `settings.js`, and `.nojekyll` to the repository root.
   Upload the extracted files, not the ZIP itself or a surrounding folder.
3. Open Settings → Pages. Under Build and deployment, select Deploy from a branch.
4. Choose `main` and `/ (root)`, then Save.
5. Open the site URL shown by GitHub when the deployment finishes.
   A repository named `3d-studio` under your account would normally use
   `https://soloh4cker.github.io/3d-studio/`.

To use `https://soloh4cker.github.io/` as your main homepage, use a repository
named `soloh4cker.github.io` instead. Keep your existing tool repositories.

When updating, replace BOTH `index.html` and `settings.js`, then refresh the page.
For ordinary link edits, only `settings.js` needs to change.

## Add more studios later

Copy an object in the `studios` list in `settings.js` and edit its name, URL,
and description. Keep a comma between objects. Choose `pegboard`, `shelf`,
or `model` as its icon style. The grid expands automatically; blank URLs
show Coming soon.

## Traffic

See `ANALYTICS.md`. Tracking is NOT enabled by default. To track visits to
all your studios, install the analytics snippet on EACH studio's page,
as well as this homepage.

## Files

- `index.html`: finished homepage, styles, illustrations, and card rendering.
- `settings.js`: your brand, links, descriptions, and future studio entries.
- `.nojekyll`: asks GitHub Pages to serve the files without Jekyll processing.
- `ANALYTICS.md`: free analytics setup and what the metrics mean.
- `README.md`: this guide.
- `VERSION.txt`: version identifier.
