# Assignment - User Cards App

A small web app that loads user data from `data.json` and displays each user
as a card (avatar, name, email) in a grid, matching the assignment's mockup.

## Files

- `index.html` - page structure
- `style.css` - card grid styling
- `script.js` - fetches `data.json` and builds the cards
- `data.json` - the user data

## Running it

Recommended: run it through a local server, since `fetch()` works most
reliably that way.

**Option A - VS Code Live Server extension**
1. Install the "Live Server" extension in VS Code.
2. Right-click `index.html` -> "Open with Live Server".

**Option B - Python**
```
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

**Option C - just double-click index.html**
This also works. Most browsers block `fetch()` on a `file://` page (a CORS
restriction), so `script.js` falls back to an embedded copy of the same data
in that case and renders the cards anyway.
