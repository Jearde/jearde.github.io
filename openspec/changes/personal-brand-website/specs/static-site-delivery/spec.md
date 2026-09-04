## Purpose

Defines the build, quality, deployment, performance, and domain behavior required for a maintainable static GitHub Pages site.

## ADDED Requirements

### Requirement: Static export artifact
The production build SHALL generate a self-contained `out/` directory through the supported Next.js static-export mode and SHALL require no runtime Node.js server.

#### Scenario: Production build completes
- **WHEN** the pinned production build command runs successfully
- **THEN** `out/index.html` and all required local CSS, JavaScript, image, metadata, and font assets exist

#### Scenario: Unsupported runtime feature is introduced
- **WHEN** code begins depending on request-time rendering, server actions, cookies, dynamic request handlers, ISR, runtime headers, rewrites, or redirects
- **THEN** the quality or production build fails before deployment

### Requirement: Root GitHub Pages deployment
The exported site SHALL work from the root of the GitHub user site `https://jearde.github.io` without a hardcoded `/jearde.github.io` base path.

#### Scenario: GitHub Pages configuration is resolved
- **WHEN** the Pages workflow builds the `Jearde/jearde.github.io` repository
- **THEN** the resolved base path is empty and root HTML, `_next` assets, local images, metadata files, and fragment navigation load successfully

#### Scenario: Visitor refreshes a fragment URL
- **WHEN** a visitor refreshes the root URL with a supported section fragment
- **THEN** the root document loads and the browser resolves the fragment to the intended section

### Requirement: Pull-request quality gate
Every pull request targeting `main` SHALL install from the lockfile and run formatting, linting, strict type checking, focused tests, and the production static build.

#### Scenario: Pull request is valid
- **WHEN** all quality commands pass and the expected static artifact exists
- **THEN** the workflow reports success without deploying the pull request

#### Scenario: Static export becomes incompatible
- **WHEN** a pull request introduces a static-export incompatibility or omits the output artifact
- **THEN** the workflow reports failure before merge

### Requirement: Official Pages deployment
Every push to `main` and permitted manual workflow dispatch SHALL build, verify, upload, and deploy `out/` with the official GitHub Pages actions.

#### Scenario: Main build succeeds
- **WHEN** a commit reaches `main` and all quality checks pass
- **THEN** the workflow uploads `out/` as the Pages artifact and deploys it to the `github-pages` environment

#### Scenario: Manual redeployment is requested
- **WHEN** the deployment workflow is manually dispatched from `main`
- **THEN** it performs the same pinned install, quality, build, verification, upload, and deployment sequence

### Requirement: Deployment permissions and concurrency
Deployment SHALL use least-privilege job permissions and a concurrency group that prevents conflicting Pages deployments without cancelling one already in progress.

#### Scenario: Deployment job starts
- **WHEN** a production artifact is ready
- **THEN** the deployment job has `pages: write` and `id-token: write`, depends on the successful build job, and targets the `github-pages` environment

#### Scenario: Multiple main pushes occur
- **WHEN** another deployment is requested while one is in progress
- **THEN** runs are serialized according to the Pages concurrency policy and the active deployment is allowed to finish

### Requirement: Explicit performance budgets
The deployed site SHALL target Lighthouse scores of at least 90 Performance and 95 Accessibility, Best Practices, and SEO while retaining the required visual experience.

#### Scenario: Production page is audited
- **WHEN** Lighthouse runs against the deployed production build under standard mobile conditions
- **THEN** the target category scores are met without disabling the intended canvas for the normal-motion test

#### Scenario: Core Web Vitals are assessed
- **WHEN** production performance is measured
- **THEN** the design targets LCP below 2.5 seconds, CLS below 0.1, and INP below 200 milliseconds

### Requirement: Bounded asset and JavaScript weight
The implementation SHALL preserve explicit budgets for route JavaScript, site-authored client JavaScript, portrait, social image, fonts, and canvas resolution.

#### Scenario: Build output is reviewed
- **WHEN** the production bundle and assets are measured
- **THEN** total route JavaScript remains at or below 150 KB gzip, site-authored client JavaScript remains at or below 35 KB gzip, the portrait remains at or below 300 KB, the social image remains at or below 250 KB, and fonts remain at or below 100 KB total

### Requirement: Single-source domain migration
Canonical metadata, sitemap, robots, structured data, and genuinely absolute asset URLs SHALL derive from one configured public site URL.

#### Scenario: Initial site is deployed
- **WHEN** the configured public URL is `https://jearde.github.io`
- **THEN** every generated canonical absolute URL uses that origin and the canonical root and sitemap entry serialize as `https://jearde.github.io/`

#### Scenario: Custom domain is activated
- **WHEN** the configured public URL changes to `https://rene-glitza.de` and GitHub Pages and DNS are updated
- **THEN** a rebuild emits the new canonical origin without application architecture changes or a required `CNAME` artifact
