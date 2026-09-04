## Purpose

Defines the public single-page profile that communicates René Glitza's personal identity, work, and collaboration value without reproducing his full CV.

## ADDED Requirements

### Requirement: Single-page narrative
The site SHALL present its substantive profile content as one scrolling page with sections for hero, about, current roles, featured work, research and engineering interests, community, contact, imprint, and privacy.

#### Scenario: Visitor follows the complete story
- **WHEN** a visitor loads the site and scrolls from the beginning to the footer
- **THEN** the visitor encounters all required profile and legal content without navigating to another content page

#### Scenario: Visitor opens a section directly
- **WHEN** a visitor follows a URL containing a supported section fragment
- **THEN** the browser lands on the corresponding section of the same page

### Requirement: Immediate personal identity
The hero SHALL identify René Glitza by name, display “Nerd with a shirt. 👔” as the primary heading, display “Researcher. Builder. Founder.” as supporting identity, and use no more than one short supporting statement.

#### Scenario: Visitor scans the hero
- **WHEN** the initial page content is visible
- **THEN** René's name, personal hook, three-part identity, and focus on distributed, private, real-world AI are understandable without scrolling

### Requirement: Balanced professional positioning
The profile SHALL connect research, software engineering, startup leadership, industrial R&D, open source, AI-training infrastructure, MLOps, and community work without presenting NexuFed AI as René's only identity.

#### Scenario: Industrial visitor reviews the profile
- **WHEN** an industrial or technical visitor reads the about and roles sections
- **THEN** the content communicates experience carrying measurement, ML, condition-monitoring, and training-infrastructure work from prototypes toward practical deployment

#### Scenario: Research visitor reviews the profile
- **WHEN** a research visitor reads the about and research sections
- **THEN** the content communicates work in federated learning, adaptive or personalized learning, reinforcement learning, heterogeneous and limited-label data, Industrial AI, Edge AI, and distributed ML systems

#### Scenario: Infrastructure visitor reviews the profile
- **WHEN** a visitor looks for engineering depth beyond model development
- **THEN** the content states that René builds Kubernetes-based AI-training clusters and reproducible MLOps workflows without reducing the section to a list of tool badges

### Requirement: Current roles sequence
The profile SHALL present research at Ruhr University Bochum, co-founding NexuFed AI, and applied technical work at AI-Gruppe as a connected sequence rather than conventional employment cards.

#### Scenario: Visitor reads current roles
- **WHEN** the roles section enters the reading flow
- **THEN** each context explains its distinct contribution to René's research-to-industry practice and the sequence reads as one narrative

### Requirement: Featured work
The profile SHALL prominently feature NexuML, NexuFL, pFedMARL, and ASN Database with concise source-backed descriptions and descriptive destinations.

#### Scenario: Visitor reviews NexuML
- **WHEN** the visitor encounters NexuML
- **THEN** it is described as an open-source modular PyTorch framework for composable ML pipelines and reproducible experiments and links to its public repository

#### Scenario: Visitor reviews NexuFL
- **WHEN** the visitor encounters NexuFL
- **THEN** it is described conceptually as adaptive federated-learning infrastructure for distributed private learning and links to NexuFed rather than a nonexistent public repository

#### Scenario: Visitor reviews pFedMARL
- **WHEN** the visitor encounters pFedMARL
- **THEN** it is described as ICASSP 2026 reproduction work using cooperative multi-agent reinforcement learning for adaptive aggregation in semi-supervised federated learning with non-IID data and links to its public repository

#### Scenario: Visitor reviews ASN Database
- **WHEN** the visitor encounters ASN Database
- **THEN** it is described as a public database of simulated room impulse responses for acoustic sensor-network research and links to its public repository

### Requirement: Editorial project presentation
Featured work SHALL use differentiated editorial rows, scale, alignment, or sequencing rather than four visually identical cards, while preserving a predictable reading and focus order.

#### Scenario: Visitor scans projects on a wide screen
- **WHEN** the work section is displayed at desktop width
- **THEN** projects form an asymmetric but readable sequence separated by typographic hierarchy and rules rather than card containers

#### Scenario: Visitor scans projects on a small screen
- **WHEN** the work section is displayed at mobile width
- **THEN** projects use a single logical column with no loss of description, destination, or reading order

### Requirement: Integrated portrait
The profile SHALL introduce René's portrait in the about or roles portion of the page rather than as a centered corporate headshot in the hero.

#### Scenario: Approved portrait is available
- **WHEN** `public/images/rene-glitza.webp` is supplied
- **THEN** the image appears with fixed dimensions, an intentional editorial crop, and alt text based on the actual photograph

#### Scenario: Portrait is not available
- **WHEN** the required portrait asset has not been supplied
- **THEN** the layout preserves its intended composition with an explicit non-photographic placeholder and does not generate or invent a portrait

### Requirement: Community and contact
The page SHALL identify René as an organizer of the Practical Data Science Congress and Vice Chairman of open Skunkforce e.V., then provide approved links to continue the conversation.

#### Scenario: Visitor reaches community
- **WHEN** the visitor reads the community section
- **THEN** the content explains René's role in bringing technical people together and links to the public community destinations

#### Scenario: Visitor reaches contact
- **WHEN** the visitor reaches the contact section
- **THEN** GitHub, LinkedIn, and ORCID are available as descriptive links and no email address or phone number is shown unless René explicitly approves it for this site

### Requirement: Accessible document and navigation
The site SHALL provide semantic landmarks, a single primary heading, logical heading order, a skip link, same-page navigation, visible focus indicators, practical target sizes, and no interaction whose information is available only through color or hover.

#### Scenario: Keyboard-only visitor navigates
- **WHEN** a visitor uses only a keyboard from the top of the document
- **THEN** the visitor can skip to main content, reach every navigation and project link, see current focus, and access the legal disclosures in logical order

#### Scenario: Assistive technology reads the page
- **WHEN** a screen reader traverses the document
- **THEN** landmarks, headings, links, portrait alternative text, and section order communicate the same substantive profile as the visual layout

### Requirement: Content-first fallback
Critical identity, role, project, research, infrastructure, community, contact, and legal information SHALL be present in the initial static HTML and SHALL remain usable without decorative animation or client-side JavaScript.

#### Scenario: JavaScript is unavailable
- **WHEN** the page is loaded with JavaScript disabled or client hydration fails
- **THEN** the complete profile, links, navigation targets, and legal information remain readable and usable
