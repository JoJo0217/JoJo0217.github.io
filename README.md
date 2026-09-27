# Mingyu Jo Personal Website

This repo is set up as a very small static personal webpage.

## Edit Content

Most updates happen in `content.js`.

- Change `basics` for name, headline, contacts, focus tags, and CV link.
- Change `bio`, `news`, `publications`, `experience`, `education`, `activities`, `skills`, and `honors` for the page sections.
- Put a profile image in the repo, then set `photo` in `content.js`, for example:

```js
photo: "assets/files/profile.jpg";
```

## Edit Design

Use `styles.css` for colors, spacing, and layout.

## Preview Locally

Open `index.html` in a browser, or run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## CV

The downloadable CV is maintained in [`cv/Mingyu_Jo_CV.tex`](cv/Mingyu_Jo_CV.tex).

1. [Edit the LaTeX source on GitHub](https://github.com/JoJo0217/JoJo0217.github.io/edit/main/cv/Mingyu_Jo_CV.tex), or edit it locally and push to `main`.
2. The **Deploy site** GitHub Actions workflow compiles the source into a PDF, then publishes the website.
3. The **PDF** button opens the compiled document; **Download** saves it as `Mingyu_Jo_CV.pdf`.

The published PDF stays at `assets/files/Mingyu_Jo_CV.pdf`. It is generated during deployment and is not edited or committed separately. If compilation fails, the previously deployed website and PDF stay available. Check the failed **Compile CV** step in [GitHub Actions](https://github.com/JoJo0217/JoJo0217.github.io/actions/workflows/deploy.yml) for the error.

The CV tab's short HTML summary still uses `content.js`; it is separate from the downloadable LaTeX CV.

To build a local PDF with TeX Live installed:

```bash
latexmk -pdf -interaction=nonstopmode -halt-on-error -outdir=cv cv/Mingyu_Jo_CV.tex
cp cv/Mingyu_Jo_CV.pdf assets/files/Mingyu_Jo_CV.pdf
```

GitHub Pages uses **GitHub Actions** as its publishing source. Only the built static website and compiled PDF are deployed.
