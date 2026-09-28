# Assignment - User Cards App

A small web app that loads user data from `data.json` and displays each user
as a card (avatar, name, email) in a grid, matching the assignment's mockup.

## Files

- `index.html` - page structure
- `style.css` - card grid styling
- `script.js` - fetches `data.json` and builds the cards
- `data.json` - the user data

## Running it

Because the app uses `fetch()` to load `data.json`, most browsers block that
when you open `index.html` directly from disk (a CORS restriction on the
`file://` protocol). Run it through a local server instead:

**Option A - VS Code Live Server extension**
1. Install the "Live Server" extension in VS Code.
2. Right-click `index.html` -> "Open with Live Server".

**Option B - Python**
```
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.
