## Purpose

Defines same-document legal access and a privacy posture that accurately reflects a static, tracking-free personal website.

## ADDED Requirements

### Requirement: Same-document legal information
The page SHALL include concise imprint and privacy sections within the root document and SHALL not create separate imprint or privacy content pages.

#### Scenario: Visitor uses footer controls
- **WHEN** a visitor activates the imprint or privacy control in the footer
- **THEN** the corresponding server-rendered legal content becomes readable without leaving the page

#### Scenario: JavaScript is disabled
- **WHEN** a visitor accesses legal information without client-side JavaScript
- **THEN** both disclosures remain keyboard operable and their content remains present in the document

### Requirement: Unknown legal facts remain explicit
Legal content SHALL not invent addresses, contact details, registration facts, legal bases, retention periods, or controller information that René has not supplied or approved.

#### Scenario: Required legal input is unavailable during implementation
- **WHEN** a required fact has not been approved
- **THEN** the source contains a clear TODO placeholder and launch readiness remains incomplete

### Requirement: No consent-requiring site behavior
The site SHALL not add analytics, tracking pixels, advertising trackers, third-party widgets, embedded media, non-essential cookies, persistent browser storage, or user profiling.

#### Scenario: Visitor loads and explores the site
- **WHEN** the visitor scrolls, uses navigation, focuses projects, or moves the pointer
- **THEN** the site stores no preference or behavioral identifier and sends no analytics or advertising request

### Requirement: No unnecessary cookie banner
The site SHALL not display a cookie-consent banner while it performs no consent-requiring tracking or storage.

#### Scenario: Tracking-free version is deployed
- **WHEN** a visitor opens the production site
- **THEN** no speculative cookie banner interrupts the experience

### Requirement: Accurate hosting disclosure
The privacy notice SHALL describe technically necessary delivery through GitHub Pages and provider-controlled request or server-log processing without making unverified claims.

#### Scenario: Visitor reads the privacy notice
- **WHEN** the privacy disclosure is expanded
- **THEN** it distinguishes unavoidable hosting processing from data the site owner intentionally collects and states that the site runs no analytics or contact-form backend

### Requirement: Approved contact information only
The site SHALL publish an email address or other direct personal contact detail only after René explicitly approves it for the website.

#### Scenario: No contact address has been approved
- **WHEN** the contact and legal sections are rendered
- **THEN** approved public profile links are used for contact and the CV phone number and email remain unpublished

#### Scenario: Contact address is later approved
- **WHEN** René supplies an address for publication
- **THEN** the contact and relevant legal content use that one approved value from central content configuration

### Requirement: Local assets and controlled third-party contact
Fonts, scripts, images, and project visuals SHALL be served from the deployed site; ordinary external links SHALL contact third parties only after visitor activation.

#### Scenario: Visitor passively reads the page
- **WHEN** no external link is activated
- **THEN** the browser does not fetch social widgets, remote fonts, remote portraits, repository badges, or embedded third-party media
