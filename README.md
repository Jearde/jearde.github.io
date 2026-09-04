# jearde.github.io

Static personal website for René Glitza, built with Next.js and exported for GitHub Pages.

## Development

Use Node `26.8.1` and npm `12.0.2`.

```sh
npm ci
npm run dev
```

Run the production checks with:

```sh
npm run format:check
npm run lint
npm run typecheck
npm run build
npm run test:artifact
npx playwright install chromium
npm run test:e2e
```

## GitHub Pages

Set **Settings → Pages → Source** to **GitHub Actions**. Pushes to `main` and manual workflow dispatches from `main` build, verify, and deploy `out/`; pull requests run the same checks without deploying.

The initial canonical URL is configured once in `src/content/site.ts`. To move to `rene-glitza.de`:

1. Verify the domain in GitHub.
2. Configure the supported apex records and point `www` to `jearde.github.io` with a CNAME DNS record.
3. Set the custom domain in GitHub Pages settings.
4. Change `site.url`, redeploy, wait for the certificate, and enforce HTTPS.
5. Verify canonical metadata, Open Graph, robots, sitemap, JSON-LD, and apex/`www` redirects.

Do not add a `gh-pages` branch. GitHub's Actions-based Pages deployment also does not need a repository `CNAME` file.

## Launch Blockers

The technical build intentionally retains visible TODOs until these inputs are approved:

- Portrait asset, usage rights, crop, and image-specific alt text.
- Current public AI-Gruppe role and final NexuFL wording.
- Final factual and legal copy review.
