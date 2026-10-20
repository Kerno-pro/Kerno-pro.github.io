# Kerno website

This directory is a self-contained static landing page for Kerno. It does not depend on the iOS app target or a build toolchain.

Preview it from this directory with any static server, for example:

```bash
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.

The page includes:

- English default copy with German and French language switching
- Responsive navigation and mobile menu
- Inline Kerno knot mark plus a reusable `favicon.svg`
- Local-first / RAG / model shelf product storytelling
- Separate assistant spaces for learning, life, and work
- Opt-in persistent local memory for conversations
- Model shelf tabs for filtering LLM and RAG entries
- Contact CTA wired to `zhuluran@gmail.com`

## GitHub Pages deployment

The publishing repository is `Kerno-pro/Kerno-pro.github.io`. Copy the files in
this directory to the repository root, including `.nojekyll` so GitHub serves
the static assets without a Jekyll build.

In repository **Settings → Pages**, select **Deploy from a branch**, choose the
branch containing these files and **/(root)**, then save. GitHub Pages publishes
the site at `https://kerno-pro.github.io/` once the deployment succeeds.

No package installation or compilation is required. Preview and validate the
static files before pushing changes; pushing the configured branch triggers
the next Pages deployment.
