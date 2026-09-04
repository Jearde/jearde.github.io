## Context

See `proposal.md` for motivation. The repository currently contains only a README and a Next-oriented `.gitignore`; there is no application, legacy behavior, or existing OpenSpec capability to preserve.

The primary audience order is industrial and technical collaborators, research collaborators, then the startup and innovation ecosystem. The website must therefore establish practical engineering credibility early, while retaining enough research specificity to distinguish René from a generic software or AI consultant.

The CV is an orientation source, not a page template. It confirms the useful connecting thread: federated-learning research, PyTorch systems, Kubernetes-based training infrastructure, industrial condition monitoring, technical leadership, and community organization. It must not be converted into a chronology, skill matrix, publication list, or collection of numerical achievements. The supplied phone number, grades, and email addresses are not approved public-site content.

Reference review produced these transferable principles:

- OpenAI Astra: editorial scale, content-led pacing, large statements, restrained controls, and progressive disclosure.
- Eclipse Space: one atmospheric visual system that reacts to pointer and narrative position.
- DagsHub and Huly: polished technical interaction and strong hierarchy, but their dashboard density, card grids, and product chrome do not fit this personal site.
- NexuFed foundation: `#101010` background, white text, `#0da2e7` blue, and `#20cb98` teal.

The supplied NexuFed Google Slides deck returned HTTP 401 during exploration. The palette and stated design principles are sufficient for implementation; final composition and typography should be compared with the deck later if viewer access is provided.

The technical design was checked against current Next.js static-export and GitHub Pages documentation. App Router Server Components can render at build time, while request-time APIs, default runtime image optimization, server actions, ISR, cookies, runtime headers, rewrites, redirects, and request-dependent route handlers are incompatible with this deployment.

## Goals / Non-Goals

**Goals:**

- Make the personal hook and René's name understandable in the first viewport.
- Build one coherent story from research through ML systems and training infrastructure to industrial use and technical community.
- Keep all substantive copy in semantic static HTML.
- Deliver one memorable Canvas2D interaction and three restrained narrative transitions.
- Keep ordinary layout and motion native to CSS and browser APIs.
- Restrict client state and hydration to behavior that genuinely requires it.
- Make content, public URLs, and future edits obvious to one maintainer.
- Meet the behavior contracts in the five change specs and the stated accessibility, privacy, performance, and deployment targets.

**Non-Goals:**

- Recreate the CV, document every employer, list every tool, or expose personal contact details by default.
- Build reusable animation, plugin, component-registry, or design-system frameworks.
- Model federated learning literally or teach its architecture through the decorative field.
- Add continuous scroll progress to React state, a smooth-scroll replacement, or frame-level global state.
- Add a content platform, runtime service, form processor, consent manager, or analytics system.
- Produce optional animation polish before the complete static page, fallbacks, metadata, legal structure, deployment, and QA are finished.

## Decisions

### 1. Positioning and narrative

The page will use first-person copy and an English primary narrative. English fits the supplied hook, daily professional context, international research audience, and public project documentation. Legal content can use approved German wording without adding a localization framework. Changing the primary language later is a content edit, not an architecture change.

The hero copy contract is:

```text
René Glitza

Nerd with a shirt. 👔

Researcher. Builder. Founder.
I build AI systems that learn from distributed, private, real-world data.
```

The name is an eyebrow or small lead-in above the H1 so the personality lands first but identity remains immediate. The supporting statement remains one short sentence. There is no hero biography, portrait, button cluster, or badge row.

The narrative order is:

| Order | Anchor | Purpose |
| --- | --- | --- |
| 1 | `#top` | Personal hook, name, and concise positioning |
| 2 | `#about` | First-person bridge between research, engineering, startup work, and industrial reality; introduce portrait |
| 3 | `#practice` | Three organizational contexts plus the cross-cutting model-to-infrastructure-to-industry practice |
| 4 | `#work` | NexuML, NexuFL, pFedMARL, and ASN Database as evidence |
| 5 | `#research` | Concise research and systems interests, not a publication bibliography |
| 6 | `#community` | Practical Data Science Congress and open Skunkforce e.V. |
| 7 | `#contact` | Direct closing statement and approved public profiles |
| 8 | `#imprint`, `#privacy` | Native same-document legal disclosures |

The `#practice` chapter preserves the three requested roles:

- Research at Ruhr University Bochum: adaptive and personalized federated learning, reinforcement learning, heterogeneous data, limited labels, anomaly detection, and acoustic condition monitoring.
- Co-Founder at NexuFed AI: collaborative private Industrial AI, NexuML, NexuFL, and applications that learn across organizations without centralizing raw data.
- Applied work at AI-Gruppe: software, electronics, measurement systems, condition monitoring, predictive maintenance, and technical projects moving into use.

Infrastructure and MLOps are not presented as a fourth employer or a badge wall. A short visual bridge inside `#practice` shows the operating chain:

```text
Research question → reusable ML system → Kubernetes training infrastructure → industrial application
```

Supporting copy should naturally mention building Kubernetes-based AI-training clusters, reproducible environments, distributed workloads, data paths, and experiment tracking. It may name a small number of relevant technologies in prose when useful, but must not reproduce the CV's complete infrastructure tool inventory.

Alternative considered: a conventional experience timeline. Rejected because it foregrounds dates and employers instead of the research-to-application story.

### 2. Editorial visual identity

The visual system uses a charcoal field, strong white typography, quiet neutral secondary text, fine rules, section numbers, and sparse blue/teal signals. The personal identity comes from the hook, first-person voice, portrait, and editorial composition rather than a logo suite or futuristic typeface.

Core tokens:

| Token | Value or intent |
| --- | --- |
| Background | `#101010` |
| Primary text | `#ffffff` |
| Secondary text | Approximately `#bdbdbd`, adjusted only to pass contrast |
| Blue signal | `#0da2e7` |
| Teal signal | `#20cb98` |
| Content width | Approximately `1440px` maximum |
| Grid | 12 columns on wide screens, simplified progressively |
| Side padding | Fluid from approximately 24px to 64px |
| Hero height | At least `100svh` where practical |
| Hero heading | Approximately `clamp(4rem, 13vw, 12rem)` |
| Section heading | Approximately `clamp(3rem, 7vw, 7rem)` |

Use one Geist variable sans-serif family through `next/font`, with a restrained system monospace only for tiny technical labels if needed. The generated font files are local at runtime. Do not add a second display family merely for novelty.

Sections are composed with substantial vertical space and changing alignment rather than background panels. Fine separators and whitespace replace generic cards. Rounded rectangles are limited to controls that need an obvious target; project and role content remain unboxed.

Alternative considered: a dedicated component-library design system. Rejected because one page needs tokens and explicit components, not a reusable product UI framework.

### 3. Portrait placement and treatment

The portrait appears in `#about`, offset from the text and integrated into the 12-column composition. A rectangular crop with a restrained reveal is preferable to a centered circular headshot. The image uses the contract `public/images/rene-glitza.webp`, a stable aspect ratio near 4:5, explicit dimensions, lazy loading, and an alt description written after viewing the approved photograph.

If absent, render a fixed-aspect editorial placeholder with simple rules and “Portrait asset required.” The placeholder is not Person structured-data imagery and must not imitate a face. The public RUB or AI-Gruppe portraits must not be copied without explicit permission.

Alternative considered: portrait in the hero. Rejected because it makes the opening resemble a corporate biography and competes with the hook.

### 4. Featured-work composition

Projects form an editorial index with an oversized section heading, numerical labels, alternating alignment, thin horizontal rules, concise descriptions, and one clear primary destination each. Desktop may keep the section heading sticky while rows scroll; mobile removes sticky behavior and uses one logical column.

Project wording is constrained by public sources:

| Project | Approved content direction | Destination |
| --- | --- | --- |
| NexuML | Open-source modular PyTorch framework for composable ML pipelines, typed reusable components, and reproducible experiments | `https://github.com/NexuFed/NexuML` |
| NexuFL | NexuFed's adaptive federated-learning platform or framework for distributed private research and production systems | `https://www.nexufed.ai` |
| pFedMARL | ICASSP 2026 reproduction code using TD3-based cooperative multi-agent reinforcement learning for adaptive aggregation with non-IID DCASE Task 2 data | `https://github.com/NexuFed/pFedMARL` |
| ASN Database | Public simulated room impulse-response database for acoustic sensor networks in complex multi-source environments | `https://github.com/Jearde/asn-database` |

The public `NexuFed/NexuFL` repository path currently returns 404, so no GitHub destination is created. Repository badges, star counts, live activity, and embedded screenshots are omitted.

Alternative considered: four project cards with screenshots. Rejected because it creates a template-like portfolio and requires visual assets that add little to the narrative.

### 5. Signal Field canvas

One fixed Canvas2D element sits behind the DOM content. It is decorative, sparse, and low-contrast enough that text remains readable. The field uses deterministic seeded node data so reloads feel authored rather than random.

Each node has normalized target coordinates for four states:

| State | Sections | Visual character |
| --- | --- | --- |
| Independent | Hero | Sparse, mostly unconnected points |
| Clustered | About and practice | Local structures emerge around a few anchors |
| Connected | Work and research | Clusters gain relationships and restrained blue/teal signals |
| Expanded | Community and contact | The field opens outward, then settles and fades near the footer |

This produces exactly three primary state transitions. Active sections switch the target preset; frame-local interpolation moves toward the newest target. If the visitor scrolls quickly, the renderer changes target immediately rather than queueing transitions.

Connections are computed directly between the small bounded node set. An O(n²) distance pass is simpler than a spatial index and remains cheap at the node limits. No generalized scene graph, physics engine, worker protocol, or custom animation framework is introduced.

Pointer behavior runs only when `(hover: hover) and (pointer: fine)` matches. A pointer-nearby field offsets nodes by only a few CSS pixels and adjusts local opacity. The canvas uses `pointer-events: none`; pointer position comes from a passive window listener, and the native cursor is untouched.

Project rows expose stable `data-project` identifiers. Pointer entry and keyboard `focusin` set one active project; exit and `focusout` clear it. The canvas maps each project to a deterministic region and increases that region's emphasis. No content, selection state, or navigation depends on the effect.

Alternative considered: WebGL or Three.js. Rejected because the design needs dozens of 2D points and lines, not shaders, 3D geometry, or a camera.

### 6. Motion and capability fallbacks

Native document scrolling remains intact. `scroll-behavior: smooth` handles anchor navigation and is disabled under reduced motion. Ordinary fades or small translations use CSS. CSS view-timeline effects may be used as progressive enhancement only inside `@supports` and `prefers-reduced-motion: no-preference`; their unsupported state must be fully visible.

Reduced motion renders one stable neutral field, performs no continuous physics, pulses, parallax, or section morphing, and responds if the operating-system preference changes while the page is open.

Touch and small screens use at most 32 nodes, simple links, no pointer field, and a lower frame target. Desktop uses at most 60 nodes and a target no higher than approximately 45 FPS. The backing buffer is bounded around four million pixels by deriving an effective DPR from viewport area rather than trusting the device DPR. Continuous drawing stops on `document.hidden` and restarts on visibility change. Resize work is coalesced to one animation frame.

If canvas initialization fails or JavaScript is disabled, the base `#101010` editorial page remains complete. No warning is shown to visitors because the missing layer is nonessential.

Alternative considered: an animation dependency such as Motion. Rejected because CSS, IntersectionObserver, matchMedia, and requestAnimationFrame cover the required behavior.

### 7. Responsive and accessible layout

Wide layouts use the 12-column grid and occasional sticky labels. Tablet layouts reduce asymmetry and prevent copy from sitting over visually active regions. Mobile uses one content column, removes sticky project behavior, keeps full descriptions, and presents the header as a compact name row plus horizontally scrollable section index rather than a JavaScript hamburger menu.

Accessibility is structural:

- A visible-on-focus skip link targets `#main-content`.
- Semantic `header`, `nav`, `main`, `section`, and `footer` landmarks remain in source order.
- The hero is the only H1 and section headings remain sequential.
- Anchor targets use `scroll-margin-top` for the fixed header.
- Focus is never removed and uses a visible non-color-only treatment.
- Links use descriptive text and practical targets near 44px where layout permits.
- External links do not force a new tab.
- The tie emoji is visually retained but hidden from assistive technology if its spoken name would interrupt the heading.
- The portrait receives accurate alt text based on the final asset.
- Canvas is `aria-hidden`, presentation-only, and has no focus target.
- Hover effects have focus equivalents, and neither carries exclusive information.

### 8. Framework and dependency baseline

The versions verified during proposal research on 2026-09-04 are:

| Dependency | Baseline |
| --- | --- |
| Node.js LTS | `24.20.0` |
| npm bundled with Node | `11.19.0` |
| Next.js | `16.3.4` |
| React and React DOM | `19.2.8` |
| TypeScript | `7.0.2` |
| Tailwind CSS | `4.3.3` |
| Zustand | `5.0.15` |

The implementation should recheck stable releases if it starts much later, then pin selected exact package versions and commit `package-lock.json`. Node `24.20.0` pins the npm version used by local development and Actions. Tailwind 4 uses `@tailwindcss/postcss`, `@import "tailwindcss"`, and CSS-first `@theme` tokens rather than a speculative Tailwind configuration layer.

Required runtime dependencies are only Next.js, React, React DOM, and Zustand. Tailwind tooling, TypeScript, ESLint, Prettier, Playwright, and axe integration are development dependencies. No animation or UI component dependency is proposed.

### 9. Static-first component architecture

The page and ordinary sections remain Server Components rendered during static build. Client behavior is confined to three concerns:

```text
Static App Router page
├── static hero/about/practice/work/research/community/contact/legal markup
├── SiteNav client island
├── NarrativeController client island
└── NetworkCanvas client island
```

Proposed file boundaries:

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   ├── sitemap.ts
│   ├── favicon.ico
│   ├── icon.svg
│   ├── apple-icon.png
│   └── opengraph-image.jpg
├── components/
│   ├── network-canvas.tsx
│   ├── narrative-controller.tsx
│   └── site-nav.tsx
├── content/
│   └── site.ts
└── stores/
    └── narrative.ts
public/
├── images/
│   └── rene-glitza.webp
└── llms.txt
```

`page.tsx` should keep static section markup together unless its final size makes one or two section extractions clearly easier to read. Do not create one component file per heading or semantic tag.

`NarrativeController` observes `[data-narrative-section]` elements, chooses the section with the strongest relevant intersection, and updates discrete state. It also uses event delegation for `[data-project]` pointer and focus behavior, avoiding a client component around every project row.

Alternative considered: making the page a single client component. Rejected because it would hydrate static copy and blur the boundary between content and enhancement.

### 10. Content and configuration ownership

`src/content/site.ts` is the obvious editing surface. A small explicit TypeScript type or `satisfies` expression covers:

- Name, alternate name, title, description, locale, and canonical site URL.
- Hero, about, practice, and closing copy.
- Current roles and concise role descriptions.
- Projects and verified destinations.
- Research and infrastructure interests.
- Community activities.
- Public social and affiliation links.
- Legal and privacy placeholders or approved values.

The same `site.url` value feeds canonical metadata, sitemap, robots, JSON-LD, and genuinely absolute asset URLs. It defaults to `https://jearde.github.io`; migration changes this one value.

The content model does not include generic block registries, arbitrary layout variants, runtime validation, Markdown processing, or a CMS. Components explicitly render the known page structure.

Verified public destinations include:

- `https://github.com/Jearde`
- `https://www.linkedin.com/in/rene-glitza/`
- `https://orcid.org/0009-0002-6437-5912`
- `https://www.ika.ruhr-uni-bochum.de/ika/team/glitza.html.en`
- `https://www.nexufed.ai`
- `https://gruppe.ai`
- `https://pdsc.skunkforce.org/`
- `https://skunkforce.org`

### 11. Zustand scope

Zustand stores only:

```text
activeSection = hero | about | practice | work | research | community | contact
activeProject = nexuml | nexufl | pfedmarl | asn-database | null
```

A simple deterministic client singleton is acceptable because this is a single statically exported page with no user-specific or request-specific state. Components subscribe to primitive selectors. The store has no provider hierarchy, persistence, middleware, devtools integration, per-frame writes, pointer coordinates, or physics state.

Alternative considered: React context or prop drilling. Both could work, but Zustand is an explicit required stack choice and lets the controller, navigation, and canvas share two distant discrete values without lifting the entire page into a client boundary.

### 12. Static export and paths

`next.config.ts` owns these settings:

- `output: "export"`.
- `images.unoptimized: true` because GitHub Pages has no runtime image optimizer.
- `basePath` from build-only `PAGES_BASE_PATH`, defaulting to an empty string locally.
- No `assetPrefix` unless a verified build demonstrates a missing requirement.
- No unnecessary trailing-slash customization because the only content route is `/`.

The GitHub workflow runs `actions/configure-pages` without asking it to mutate the Next configuration. Its documented `base_path` output is passed as `PAGES_BASE_PATH` to `next build`. For `Jearde/jearde.github.io` and for the future custom domain this resolves to an empty string, avoiding a hardcoded repository path.

Local public assets should use Next-aware imports or paths proven against the exported base-path configuration. The PR build and production smoke tests must request `_next` assets and the portrait path, not merely check that files exist.

Static metadata routes use build-time constants only. `robots.ts` and `sitemap.ts` therefore export static responses. `llms.txt` is a plain file under `public`.

### 13. GitHub Actions design

Use one workflow triggered by pull requests to `main`, pushes to `main`, and `workflow_dispatch`. This avoids duplicating quality and build logic.

```text
checkout → setup pinned Node/npm → npm ci
         → format check → lint → typecheck
         → configure Pages metadata → next build
         → verify out/ → Playwright/axe static smoke
         → upload/deploy only for main push or main manual dispatch
```

Official action versions verified during planning are:

- `actions/checkout@v7.0.1`
- `actions/setup-node@v7.0.0`
- `actions/configure-pages@v6.0.0`
- `actions/upload-pages-artifact@v5.0.0`
- `actions/deploy-pages@v5.0.1`

Use the build job with `contents: read`. Use a separate deployment job with `needs: build`, `pages: write`, `id-token: write`, and environment `github-pages`. Upload and deployment steps are skipped for pull requests. Manual deployment is permitted only from `main`.

The deployment job uses concurrency group `pages` and `cancel-in-progress: false`, allowing an active production deployment to complete. Repository Settings → Pages → Source must be set to GitHub Actions.

### 14. SEO and structured data

The base title is `René Glitza — Researcher, Builder, Founder`. The description should mention distributed and private AI, research-to-industry systems, and infrastructure naturally, without enumerating keywords.

Use a static Metadata object with `metadataBase` derived from `site.url`, canonical alternates, Open Graph data, and a Twitter/X large-image card. Use a static 1200×630 local `opengraph-image.jpg` rather than dynamic `ImageResponse` generation.

The root page emits one escaped JSON-LD `@graph`:

- `ProfilePage` identifies the page and points `mainEntity` to the Person.
- `Person` includes `name: René Glitza`, `alternateName: Rene Glitza`, configured URL, approved portrait when present, concise role descriptions, appropriate affiliations, verified `sameAs` profiles, and focused `knowsAbout` values.
- `sameAs` initially contains approved GitHub, LinkedIn, and ORCID profiles only.
- Affiliations can name Ruhr University Bochum, NexuFed AI, AI-Gruppe, and open Skunkforce after final content approval.
- No phone number, unapproved email, street address, or inferred identifier appears in structured data.

Critical visible copy includes René Glitza and Rene Glitza naturally, along with Federated Learning, adaptive or personalized Federated Learning, Reinforcement Learning, Industrial AI, distributed AI, Edge AI, Kubernetes, MLOps, NexuFed AI, NexuML, pFedMARL, Ruhr University Bochum, AI-Gruppe, Practical Data Science Congress, and open Skunkforce. There is no hidden SEO copy.

### 15. Privacy and legal presentation

The footer uses native `<details>` elements with IDs `imprint` and `privacy`. Their `<summary>` elements are the visible controls. This provides keyboard access, progressive enhancement, and server-rendered content without modal focus management or client state.

The privacy notice describes only:

- Static delivery and technically necessary server-log processing by GitHub Pages.
- No owner-operated backend or database.
- No analytics, tracking, advertising, embeds, cookies, local storage, or Zustand persistence.
- Local fonts, scripts, images, and project presentation assets.
- External destinations receiving a request only after link activation.
- Contact processing only if an approved direct contact method is later published.

Legal facts remain explicit TODOs until supplied. The implementation may preserve placeholders during development, but production readiness is not complete until they are replaced and reviewed. No generic legal template is represented as legal advice.

Alternative considered: JavaScript dialog overlays. Rejected because native disclosure is simpler, remains indexable, and works when JavaScript fails.

### 16. Performance budgets and loading

The hero uses text as its likely Largest Contentful Paint element. The portrait appears below the fold, has fixed dimensions to avoid layout shift, is manually optimized WebP, and stays below 300 KB. The Open Graph image stays below 250 KB. One variable font family stays below 100 KB total.

Budgets:

| Measure | Target |
| --- | --- |
| Lighthouse Performance | At least 90 |
| Lighthouse Accessibility | At least 95 |
| Lighthouse Best Practices | At least 95 |
| Lighthouse SEO | At least 95 |
| LCP | Below 2.5 seconds |
| CLS | Below 0.1 |
| INP | Below 200 milliseconds |
| Total route JavaScript | At most 150 KB gzip |
| Site-authored client JavaScript | At most 35 KB gzip |
| Canvas backing buffer | Approximately four million pixels maximum |

The canvas starts after hydration, keeps state in refs, and allocates reusable arrays rather than objects every frame. Client components remain small enough that lazy-loading the background is optional, not mandatory. Avoid an optimization abstraction until measurement shows a problem.

### 17. Testing strategy

Use Playwright with Chromium and `@axe-core/playwright` as the only browser-test stack. Serve the generated `out/` directory so tests cover the actual deployment artifact rather than a development server.

Automated coverage includes:

- Root page and required static files return successfully.
- Critical identity, role, infrastructure, project, community, and legal copy exists in initial HTML.
- JavaScript-disabled mode retains content, links, anchors, and native legal disclosures.
- Anchor navigation resolves all supported IDs.
- Keyboard traversal, focus visibility, project focus behavior, and legal disclosure operation work.
- Mobile viewport has no horizontal page overflow and retains every project.
- Reduced-motion emulation disables smooth scroll and continuous canvas motion.
- Axe reports no serious or critical violations.
- The browser logs no uncaught errors.
- `_next` assets and local images load under the resolved Pages base path.

Do not perform live third-party link requests in every CI run because external availability would make the quality gate flaky. Validate destination syntax in automated tests and perform a manual link check during release QA.

Lighthouse runs against the production build during final QA. It can become a CI gate later if repeated measurements are stable; adding Lighthouse CI now is unnecessary beside the explicit launch audit.

### 18. MVP stop condition and optional polish

MVP is complete only when all five specs, static export, responsive layouts, reduced-motion and no-JavaScript fallbacks, metadata, legal structure, tests, deployment, and performance targets pass. The required visual scope is one Canvas2D field, four states, three transitions, local pointer response, and project focus response.

Optional polish is deliberately outside the implementation task checklist:

- Connection pulses.
- Continuous scroll interpolation between section presets.
- Multi-layer parallax.
- Complex connection bending.
- Portrait clip-path choreography.
- Additional project-specific formations.
- Secondary typographic scroll-speed effects.

Only add an optional item after MVP acceptance, with explicit approval, and only if it preserves accessibility and bundle/rendering budgets.

## Risks / Trade-offs

- [Canvas competes with reading or lowers contrast] → Keep the field sparse and low opacity, audit every section over active states, and treat removal of visual density as the first fix.
- [Canvas consumes too much battery or GPU time] → Bound nodes, FPS, DPR, and buffer area; simplify mobile; stop when hidden; make reduced motion static.
- [Discrete section transitions feel abrupt] → Interpolate toward the newest preset over a restrained duration while skipping queued states.
- [Required Zustand dependency is disproportionate for a one-page site] → Limit it to two primitive discrete values with no provider complexity, middleware, or persistence.
- [Static-export incompatibility enters through a convenient Next.js feature] → Keep the root page build-time only and run the production export on every pull request.
- [Project or role wording becomes stale] → Keep all facts in one typed content file and require a manual public-source review before launch.
- [CV data is accidentally over-published] → Treat the CV as orientation only and explicitly exclude phone, grades, full chronology, and unapproved emails from content and structured data.
- [Legal placeholders reach production] → Track legal approval as a launch task and state that placeholders fail production readiness even when the technical build passes.
- [Portrait is unavailable or rights are unclear] → Preserve composition with a non-photographic placeholder and never copy a public portrait without permission.
- [NexuFed deck remains inaccessible] → Implement from the explicit palette and reference principles, then perform a non-blocking visual audit if access is granted.
- [Action versions or package releases move before implementation] → Start from the recorded verified versions, recheck official stable releases once at foundation time, and commit exact resolved versions.
- [Performance score varies across test environments] → Enforce deterministic asset and bundle budgets first, then confirm Lighthouse targets against the deployed production URL.

## Migration Plan

Initial launch:

1. Build and validate the static export locally and in the pull-request workflow.
2. Resolve portrait, current role, direct contact, imprint, privacy-controller, and final copy approvals.
3. Set repository Settings → Pages → Source to GitHub Actions.
4. Merge to `main` and let the official Pages workflow deploy `out/`.
5. Verify `https://jearde.github.io`, fragment refreshes, `_next` assets, metadata files, JSON-LD, HTTPS, accessibility, and Lighthouse targets.

Rollback:

1. Redeploy the last known-good commit through workflow dispatch or revert the breaking commit normally.
2. Do not modify generated Pages artifacts or introduce a `gh-pages` branch.

Future custom-domain migration:

1. Verify `rene-glitza.de` ownership in GitHub to reduce domain-takeover risk.
2. Configure supported apex DNS records and a `www` CNAME pointing to `jearde.github.io`.
3. Set `rene-glitza.de` as the custom domain in repository Pages settings.
4. Change `site.url` to `https://rene-glitza.de` and redeploy.
5. Wait for certificate provisioning, enable HTTPS enforcement, and verify apex/`www` redirects.
6. Validate canonical metadata, Open Graph, robots, sitemap, JSON-LD, and social previews on the new origin.
7. Update external profile links and optionally register the new property in Google Search Console.

GitHub's current guidance states that a `CNAME` file is ignored and unnecessary for a custom Actions-based Pages deployment, so the migration does not add one.

## Open Questions

These inputs affect final content or assets but do not change the architecture or implementation order:

- Approved portrait file, usage rights, crop, and image-specific alt description.
- Current public-facing AI-Gruppe title; the CV says CPO, while the strongest independently checked company source is from 2022.
- Whether any direct email address is explicitly approved for this personal website.
- Complete imprint identity, postal address, contact route, and any applicable professional or business details.
- Approved privacy-controller contact and reviewed legal wording.
- Final wording for NexuFL and current NexuFed role titles; the page should default to the simpler “Co-Founder” rather than stacking CEO and CTO labels.
- Viewer access to the NexuFed deck for final visual comparison.
