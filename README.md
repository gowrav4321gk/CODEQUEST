# CodeQuest

A local, responsive educational web-app prototype. Its state is stored in the browser with `localStorage` so XP, unlocked roadmap nodes, and theme preference survive refreshes on the same device.

## Run it

From this folder, run:

```powershell
node server.mjs
```

Then visit `http://127.0.0.1:4173`.

## Security boundary

The playground runs JavaScript only in the visitor's browser and captures console output. It has no server-side execution path. Python, C, C++, and Java would need a separately deployed isolated execution service with strict time, memory, network, filesystem, and per-user rate limits; never run submissions inside this server process.

## Publish on GitHub Pages

This project is a static website, so GitHub Pages can host it directly—no Node.js server is needed after it is published.

1. Create a new GitHub repository, for example `codequest`.
2. Upload the contents of this folder (including `index.html`, `js/`, and all `.css` files) to the repository root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main`, then choose the `/ (root)` folder and save.
5. After GitHub publishes it, open the site address shown on that page. It normally looks like `https://YOUR-USERNAME.github.io/codequest/`.

The `.nojekyll` file prevents GitHub Pages from applying Jekyll processing to the static site.
