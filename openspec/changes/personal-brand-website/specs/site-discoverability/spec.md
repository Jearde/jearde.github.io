## Purpose

Defines how the static personal profile is identified, indexed, previewed, and represented to search engines and other machine consumers.

## ADDED Requirements

### Requirement: Identity-focused metadata
The exported page SHALL include an identity-focused title, concise description, canonical URL, Open Graph metadata, and Twitter/X large-image metadata derived from the site's central configuration.

#### Scenario: Search engine reads metadata
- **WHEN** a crawler retrieves the exported root document
- **THEN** it finds the title “René Glitza – AI Researcher, NexuFed AI Co-Founder & MLOps”, the approved description, and the canonical URL `https://jearde.github.io/`

#### Scenario: Social service creates a preview
- **WHEN** a supported service expands the public site URL
- **THEN** it receives a local static preview image, the approved Open Graph title and description, profile type and name properties, and the absolute canonical URL

### Requirement: Indexable substantive content
René's name, alternate unaccented name, positioning, roles, featured work, infrastructure/MLOps practice, community activity, and core technical areas SHALL exist as visible text in the initial static HTML.

#### Scenario: Crawler does not execute client JavaScript
- **WHEN** a crawler indexes only the exported HTML
- **THEN** it can understand René's identity and relevance to federated learning, reinforcement learning, Industrial AI, distributed AI, AI-training infrastructure, MLOps, and the named organizations and projects

### Requirement: Structured profile data
The page SHALL publish valid schema.org JSON-LD with a `ProfilePage` whose main entity is a `Person` representing René Glitza.

#### Scenario: Structured-data validator inspects the page
- **WHEN** the exported page is submitted to a schema validator
- **THEN** the graph identifies René by accented name, Jearde handle, alternate unaccented name, stable Person ID, canonical URL, approved image, job title, `worksFor` and `memberOf` relationships, knowledge areas, Bochum locality, and verified public profiles without invented identifiers

#### Scenario: Portrait is pending
- **WHEN** no approved portrait is available
- **THEN** structured data omits the image rather than referencing a placeholder as René's portrait

### Requirement: Crawl support files
The static export SHALL include accessible `robots.txt`, `sitemap.xml`, and `llms.txt` files consistent with the configured public URL and one-page architecture.

#### Scenario: Crawler requests support files
- **WHEN** `/robots.txt`, `/sitemap.xml`, or `/llms.txt` is requested from the deployed domain
- **THEN** each returns a successful static response with the current canonical root URL where applicable

### Requirement: Verified destinations only
Public profile and structured-data links SHALL use verified destinations and SHALL not expose identifiers or personal data merely because they appeared in source material.

#### Scenario: Content is built from CV orientation
- **WHEN** public links and contact fields are assembled
- **THEN** the site includes approved GitHub, LinkedIn, ORCID, institutional, company, project, and community destinations while excluding the CV phone number and any unapproved email address

### Requirement: Semantic discoverability
The page SHALL use meaningful headings, link labels, landmarks, and natural technical language without hidden keyword blocks or keyword stuffing.

#### Scenario: Search and accessibility semantics are audited
- **WHEN** the exported document structure is inspected
- **THEN** the single H1 includes René Glitza and the personal hook, each section and link has a descriptive purpose, and all search-relevant text is also useful visible content for visitors
