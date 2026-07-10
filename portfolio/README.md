# Portfolio

A static HTML/CSS/JS portfolio site. No build tools or frameworks required.

## Preview locally

Open `index.html` directly in a browser, or serve it with a simple static
server (recommended, since some browsers restrict local file access for
things like fetch/modules):

**Using Node (npx serve):**

```
npx serve .
```

**Using Python:**

```
python -m http.server
```

Then visit the URL printed in the terminal (e.g. `http://localhost:3000` or
`http://localhost:8000`).

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. In the repo, go to **Settings > Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
4. Choose the branch (e.g. `main`) and the `/ (root)` folder, then save.
5. GitHub will publish the site at `https://<username>.github.io/<repo-name>/`.

Since this project has no build step, the repo can be deployed as-is —
no compiled output or `dist/` folder needed.
