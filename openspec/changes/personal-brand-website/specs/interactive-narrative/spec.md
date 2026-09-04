## Purpose

Defines the optional interactive visual layer that reinforces the site's research-to-industry narrative without owning content or navigation.

## ADDED Requirements

### Requirement: Coherent distributed signal field
The site SHALL use one subtle distributed network or constellation behind the main content as its primary interactive visual metaphor.

#### Scenario: Animated enhancement is available
- **WHEN** a capable browser loads the page without a reduced-motion preference
- **THEN** a sparse field of nodes and faint relationships appears behind the content without reducing text contrast or obstructing controls

#### Scenario: Visual enhancement is unavailable
- **WHEN** the canvas cannot initialize
- **THEN** the page retains a complete and intentional dark editorial presentation without an error or missing information

### Requirement: Narrative visual progression
The signal field SHALL evolve through four visual states with three primary transitions: independent points, local clusters, connected systems, and an expanded community field.

#### Scenario: Visitor advances through the narrative
- **WHEN** the active content moves from hero through roles, work and research, and community or contact
- **THEN** the field transitions in that order without changing native scroll position or trapping the visitor in an animation

#### Scenario: Visitor scrolls quickly
- **WHEN** multiple narrative sections are crossed before an earlier transition completes
- **THEN** the field moves toward the newest active state without queuing every intermediate animation

### Requirement: Restrained pointer response
Fine-pointer devices SHALL receive a local proximity response while native pointer behavior remains unchanged.

#### Scenario: Pointer approaches nearby nodes
- **WHEN** a fine pointer moves through the viewport near the field
- **THEN** nearby nodes shift only slightly and local connections become more visible without moving page content or replacing the cursor

#### Scenario: Device lacks hover precision
- **WHEN** the primary device reports touch or a coarse pointer
- **THEN** pointer-specific reactions are disabled without removing content or navigation

### Requirement: Accessible project response
Pointer hover and keyboard focus on a featured project SHALL produce the same optional emphasis in a corresponding field region.

#### Scenario: Pointer user explores a project
- **WHEN** the pointer enters a project row
- **THEN** the corresponding field region gains restrained emphasis and clears when the pointer leaves

#### Scenario: Keyboard user explores a project
- **WHEN** keyboard focus enters a project link
- **THEN** the same corresponding field region gains emphasis and clears when focus leaves

#### Scenario: Canvas is absent
- **WHEN** project emphasis cannot be drawn
- **THEN** project title, description, link, and visible focus state remain complete and understandable

### Requirement: Reduced-motion experience
Visitors requesting reduced motion SHALL receive a static or effectively static network and ordinary non-smooth navigation.

#### Scenario: Reduced motion is enabled before load
- **WHEN** `prefers-reduced-motion: reduce` matches at page load
- **THEN** the field draws a stable neutral composition with no continuous physics, pulses, parallax, scroll morphs, or smooth scrolling

#### Scenario: Reduced-motion preference changes
- **WHEN** the operating-system preference changes while the page is open
- **THEN** the visual layer adopts the matching static or animated mode without requiring a reload

### Requirement: Bounded rendering cost
The visual layer SHALL cap node count, frame rate, pixel density, and backing-buffer size and SHALL pause while the document is not visible.

#### Scenario: High-density display loads the site
- **WHEN** device pixel ratio would create an excessive canvas buffer
- **THEN** render scale is capped while the CSS display size still covers the viewport

#### Scenario: Small device loads the site
- **WHEN** the viewport is below the mobile threshold
- **THEN** the field uses fewer nodes, simpler connections, and a lower frame target than the desktop mode

#### Scenario: Document becomes hidden
- **WHEN** the browser marks the document hidden
- **THEN** continuous drawing stops and resumes safely when the document becomes visible

### Requirement: Decorative accessibility
The canvas SHALL be excluded from the accessibility tree and SHALL never contain the only representation of meaningful information.

#### Scenario: Screen reader traverses the visual layer
- **WHEN** assistive technology processes the page
- **THEN** the canvas is ignored and all project and narrative meaning is available in semantic HTML
