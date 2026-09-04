## Why

René Glitza needs a personal web presence that connects his research, software engineering, AI-training infrastructure, industrial R&D, startup work, open source, and technical-community involvement into one coherent identity. The existing repository has no website, leaving potential industrial collaborators, research partners, and startup contacts without a concise place to understand his work or follow its public outputs.

## What Changes

- Create a polished single-page personal-brand website centered on René rather than any one employer or venture.
- Lead with the memorable hook “Nerd with a shirt. 👔”, followed by René's name, “Researcher. Builder. Founder.”, and a short statement about distributed, private, real-world AI.
- Tell a continuous scroll narrative covering René's profile, current roles, featured work, research interests, AI-training infrastructure and MLOps, community activity, contact links, and same-document legal information.
- Position infrastructure and MLOps as part of René's engineering practice: building Kubernetes-based training clusters and reproducible workflows that carry ML research into scalable execution.
- Feature NexuML, NexuFL, pFedMARL, and ASN Database through an editorial project sequence rather than identical cards.
- Use an original dark editorial identity based on the supplied NexuFed colors, with Geist typography, sparse technical notation, a portrait outside the hero, and generous negative space.
- Add one fixed Canvas2D “Signal Field” that evolves from isolated points to clustered, connected, and community-oriented structures as the page narrative advances.
- Keep native scrolling and make all animation optional enhancement with keyboard, touch, reduced-motion, low-power, and no-JavaScript fallbacks.
- Build with Next.js App Router, strict TypeScript, Tailwind CSS, and narrowly scoped Zustand state, using static export for GitHub Pages.
- Add first-class metadata, structured data, robots, sitemap, `llms.txt`, social-preview assets, semantic HTML, and accessible navigation.
- Add an accessible same-document imprint and privacy notice describing only the site's actual processing, with explicit placeholders for unprovided legal information.
- Add GitHub Actions validation for pull requests and automatic official GitHub Pages deployment from `main`, including manual redeployment.
- Keep one source of truth for the public site URL so migration from `https://jearde.github.io` to `https://rene-glitza.de` requires no application redesign.
- Deliberately omit the full CV chronology, grades, publication bibliography, phone number, unapproved email addresses, detailed tool inventories, analytics, backend services, blog features, and generic portfolio widgets.

## Capabilities

### New Capabilities

- `personal-brand-profile`: The single-page narrative, personal positioning, roles, infrastructure/MLOps practice, featured work, portrait, community activity, contact paths, responsive content, and accessible navigation.
- `interactive-narrative`: The decorative Canvas2D network, section-aware visual progression, pointer and project response, performance limits, and reduced-motion/touch fallbacks.
- `site-discoverability`: Static metadata, semantic indexable content, social previews, robots, sitemap, `llms.txt`, and verified Person/ProfilePage structured data.
- `legal-and-privacy`: Same-document imprint and privacy access, accurate hosting disclosure, approved contact handling, and tracking-free behavior.
- `static-site-delivery`: Next.js static export, GitHub Pages root-path behavior, quality gates, official Actions deployment, performance budgets, and future domain migration.

### Modified Capabilities

None. The repository has no existing OpenSpec capabilities or website behavior.

## Impact

- Adds a new Next.js application and local static assets to the currently empty repository.
- Adds a small typed content/config source, mostly Server Component markup, three focused client-side concerns, and no backend runtime.
- Adds Next.js, React, Tailwind CSS, Zustand, TypeScript, lint/format tooling, and focused browser-test development dependencies.
- Adds one GitHub Actions workflow for pull-request validation and GitHub Pages deployment.
- Requires René to provide or approve the portrait, portrait alt text, current role wording, public contact details, imprint details, privacy-controller details, final copy, and final domain timing before production launch.
