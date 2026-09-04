## 1. Foundation

- [x] 1.1 Recheck the recorded stable Node, npm, Next.js, React, TypeScript, Tailwind CSS, and Zustand versions, pin the selected versions, and verify the versions are recorded in `package.json`, the Node version file, and `package-lock.json`.
- [x] 1.2 Create the minimal Next.js App Router and strict TypeScript project with Tailwind 4, Biome, and focused test tooling, and verify `npm ci`, formatting, linting, and `tsc --noEmit` succeed.
- [x] 1.3 Configure `output: "export"`, unoptimized local images, and build-only `PAGES_BASE_PATH` handling, and verify a local production build creates `out/index.html` with an empty default base path.
- [x] 1.4 Create `src/content/site.ts` with explicit types for site metadata, hero, roles, projects, research and infrastructure interests, community, links, and legal placeholders, and verify TypeScript rejects an incomplete required content entry.
- [x] 1.5 Add the planned app, component, content, store, public-asset, and test boundaries without speculative wrappers or registries, and verify the resulting tree matches `design.md` or documents a smaller equivalent.

## 2. Static Content

- [x] 2.1 Build the server-rendered page shell with skip link, semantic landmarks, hero, and anchor targets, and verify the exported HTML contains one H1 with René's name, “Nerd with a shirt. 👔”, “Researcher. Builder. Founder.”, and the short positioning statement.
- [x] 2.2 Build the about composition with the local portrait contract and intentional missing-portrait placeholder, and verify the placeholder preserves layout without referencing or generating a remote portrait.
- [x] 2.3 Build the `#practice` narrative for Ruhr University Bochum, NexuFed AI, and AI-Gruppe plus the research-to-ML-system-to-Kubernetes-infrastructure-to-industry bridge, and verify the visible copy communicates MLOps depth without reproducing the CV tool list.
- [x] 2.4 Build the editorial `#work` sequence for NexuML, NexuFL, pFedMARL, and ASN Database, and verify descriptions and destinations match the approved source-backed wording with no NexuFL GitHub link.
- [x] 2.5 Build concise `#research`, `#community`, and `#contact` sections, and verify the page names the required research areas, Practical Data Science Congress, open Skunkforce role, GitHub, LinkedIn, and ORCID without adding a publication bibliography, phone number, or unapproved email.
- [x] 2.6 Add native same-document `#imprint` and `#privacy` disclosures with explicit unresolved legal placeholders, and verify both remain operable and readable with JavaScript disabled.

## 3. Editorial Visual System

- [x] 3.1 Define the NexuFed-derived color tokens, tested secondary text, Geist font, fluid type scale, spacing, rules, and focus treatment in the Tailwind CSS-first stylesheet, and verify contrast and local font loading in the browser.
- [x] 3.2 Implement the wide editorial grid, asymmetric section compositions, large negative space, and mobile single-column fallback, and verify no narrative section becomes a generic repeated card grid.
- [x] 3.3 Style the project index with numerical labels, alternating desktop alignment, fine separators, and predictable source order, and verify every project remains fully readable at mobile width.
- [x] 3.4 Implement the fixed site navigation, active-section styling, anchor offsets, and compact mobile section index, and verify all links have practical targets, visible focus, and no horizontal page overflow.
- [x] 3.5 Add only progressive CSS reveals supported by native browser features and reduced-motion guards, and verify unsupported or reduced-motion modes leave content fully visible in its final position.

## 4. Core Canvas

- [x] 4.1 Implement one fixed, `aria-hidden`, pointer-transparent Canvas2D layer with deterministic seeded nodes, and verify reloads produce the same authored composition and the canvas has no focus or accessibility-tree presence.
- [x] 4.2 Implement direct bounded connection drawing and reusable frame-local node state without a scene graph, worker, or animation dependency, and verify the canvas renders the intended sparse field with no React state update per frame.
- [x] 4.3 Implement viewport sizing, effective-DPR and four-million-pixel caps, resize coalescing, desktop/mobile node limits, and frame-rate limits, and verify backing-buffer and node counts stay within the design budgets across tested viewports.
- [x] 4.4 Pause the animation while the document is hidden and resume safely when visible, and verify the requestAnimationFrame loop does not continue accumulating work in a hidden-tab test.
- [x] 4.5 Implement restrained fine-pointer proximity response through passive browser events and canvas-local refs, and verify coarse-pointer mode has no pointer response and the native cursor and page content remain unchanged.

## 5. Narrative Transitions And Project Response

- [x] 5.1 Implement the minimal Zustand store with only `activeSection` and `activeProject`, and verify it has no persistence, middleware, pointer coordinates, physics state, or frame-frequency writes.
- [x] 5.2 Implement IntersectionObserver-based active-section selection for hero, about, practice, work, research, community, and contact, and verify the navigation and canvas receive the correct discrete section while scrolling in both directions.
- [x] 5.3 Define independent, clustered, connected, and expanded deterministic node targets and interpolation toward the latest state, and verify the page produces exactly three primary narrative transitions without scroll locking or queued animations.
- [x] 5.4 Add delegated project pointer and focus handling using stable project identifiers, and verify pointer hover and keyboard focus produce equivalent temporary canvas-region emphasis that clears on exit.
- [x] 5.5 Settle and lower canvas emphasis near contact and legal content, and verify the final reading area remains visually quiet without introducing a fifth narrative state.

## 6. Responsive, Reduced-Motion, And Accessibility Behavior

- [x] 6.1 Tune wide, tablet, mobile, and orientation-change layouts, and verify the full narrative, project descriptions, portrait area, navigation, and legal controls work at representative 320px, 768px, and desktop widths.
- [x] 6.2 Implement live `prefers-reduced-motion` handling with a stable neutral field and non-smooth navigation, and verify changing the emulated preference updates behavior without a reload.
- [x] 6.3 Implement touch/coarse-pointer canvas simplification and remove sticky behavior where unsuitable, and verify touch interaction never depends on hover or precise pointing.
- [x] 6.4 Audit landmarks, heading order, alternative text contract, link labels, target sizes, focus order, color independence, and canvas exclusion, and verify keyboard traversal reaches all interactive content in logical order.
- [x] 6.5 Verify the exported page with JavaScript disabled, and fix any missing copy, navigation target, project destination, portrait placeholder, or legal disclosure before continuing.

## 7. Discoverability, Assets, And Legal Accuracy

- [x] 7.1 Add static Metadata API configuration using the central public URL for title, description, canonical, Open Graph, and Twitter/X metadata, and verify those values are present in `out/index.html`.
- [x] 7.2 Create local favicon, icon, Apple icon, and 1200×630 social-preview assets within their size budgets, and verify the static export references successful local files with no copied third-party branding assets.
- [x] 7.3 Add build-time `robots.ts`, `sitemap.ts`, and `public/llms.txt`, and verify the exported files return the configured `https://jearde.github.io` origin where applicable.
- [x] 7.4 Add escaped `ProfilePage` and `Person` JSON-LD from central content, and verify schema validation passes with approved affiliations and `sameAs` values while omitting portrait imagery when the approved portrait is absent.
- [x] 7.5 Review visible identity and technical copy for natural inclusion of the required names, projects, research areas, Kubernetes, and MLOps, and verify no hidden keyword list or keyword stuffing was introduced.
- [x] 7.6 Replace legal and contact placeholders with approved values when supplied, otherwise retain explicit TODOs and record the unresolved production-launch blocker; verify no CV phone number, unapproved email, or invented legal claim is emitted.
- [x] 7.7 Inspect the built page's network requests during passive reading, and verify it loads no analytics, trackers, remote fonts, remote portraits, badges, embeds, cookies, or persistent browser storage and displays no cookie banner.
- [x] 7.8 Consolidate the approved SEO metadata, H1 identity, canonical root, and linked ProfilePage/Person graph with specific work, membership, profile, expertise, and locality signals, and verify the exact static export values.

## 8. Automated Verification

- [x] 8.1 Configure Playwright Chromium and axe tests against a local server for `out/`, and verify the test command exercises the static artifact rather than the Next.js development server.
- [x] 8.2 Add a static-content and JavaScript-disabled smoke test for identity, practice, infrastructure, all four projects, community, anchors, and legal disclosures, and verify the test passes against a production export.
- [x] 8.3 Add keyboard, focus-visible, anchor-navigation, project-focus, and native legal-disclosure tests, and verify mouse-only behavior is not required for any tested outcome.
- [x] 8.4 Add mobile, coarse-pointer, and reduced-motion tests covering overflow, project order, navigation, and canvas fallback state, and verify all representative modes pass.
- [x] 8.5 Add an axe audit and browser-console failure check, and verify no serious or critical accessibility violations or uncaught runtime errors remain.
- [x] 8.6 Add artifact assertions for `out/index.html`, `_next` assets, local imagery or placeholder behavior, robots, sitemap, and `llms.txt`, and verify a missing deployment file fails the test command.

## 9. GitHub Pages CI/CD

- [x] 9.1 Add one workflow for pull requests to `main`, pushes to `main`, and manual dispatch using the recorded official action versions, and verify its build job runs pinned install, format, lint, typecheck, static build, artifact assertions, and browser tests.
- [x] 9.2 Pass `actions/configure-pages` `base_path` output to the build as `PAGES_BASE_PATH` without action-driven config mutation, and verify the user-site build produces root-relative working assets with an empty base path.
- [x] 9.3 Upload `out/` and deploy only for `main` push or manual dispatch from `main`, and verify pull-request workflow evaluation contains no deploy path.
- [x] 9.4 Configure the deployment job with `needs: build`, `pages: write`, `id-token: write`, the `github-pages` environment, deployment URL output, and non-cancelling `pages` concurrency, and verify the workflow structure matches current official Pages requirements.
- [x] 9.5 Document repository Settings → Pages → Source as GitHub Actions plus the initial and custom-domain procedures, and verify the documentation explicitly rejects a `gh-pages` branch and unnecessary `CNAME` file.

## 10. Final QA And Launch Readiness

- [ ] 10.1 Review final role, NexuFL, infrastructure, community, and contact copy with René and verify every published factual claim and external destination is approved and current.
- [x] 10.2 Replace the portrait placeholder when an approved asset and alt description are available, and verify dimensions, crop, lazy loading, rights, structured-data image, and the 300 KB budget.
- [ ] 10.3 Manually test current desktop and mobile browsers with keyboard, pointer, touch, reduced motion, JavaScript disabled, hidden-tab resume, and fast scrolling, and record that every acceptance scenario passes.
- [ ] 10.4 Run production Lighthouse and verify Performance is at least 90 and Accessibility, Best Practices, and SEO are each at least 95 while the normal-motion canvas remains enabled.
- [ ] 10.5 Measure route and site-authored JavaScript, fonts, portrait, social image, canvas buffer, LCP, CLS, and INP, and verify every explicit budget in `design.md` and `static-site-delivery/spec.md` is met.
- [ ] 10.6 Deploy from `main` and verify `https://jearde.github.io`, direct fragment refreshes, `_next` and local assets, robots, sitemap, `llms.txt`, canonical metadata, social preview, JSON-LD, HTTPS, and manual workflow redeployment.
- [ ] 10.7 Stop after the required MVP is accepted; verify none of the optional polish listed in `design.md` was added without explicit approval and a fresh performance/accessibility check.
