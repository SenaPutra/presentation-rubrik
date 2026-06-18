# RuBrik Presentation Design System

## Design Direction

**Theme Name:** Iron Chronicle  
**Visual Style:** 1980s European Industrial × Medieval Foundry  
**Primary Use:** Full-screen HTML presentation for **RuBrik — Ruang Pabrik**

The presentation should feel like an old European steel factory control room built inside a medieval fortress.

The visual world combines:

- 1980s industrial machinery
- Eastern and Western European factory signage
- Medieval ironwork
- Brutalist architecture
- Analog control panels
- Old technical manuals
- Factory archive documents
- Heavy steel doors
- Warning labels
- Monospaced terminal typography
- Worn parchment and oxidized metal textures

The result must look **serious, heavy, mechanical, historical, and premium**.

It must **not** feel like fantasy RPG, steampunk cosplay, cyberpunk, or a medieval castle website.

---

# 1. Core Visual Philosophy

## 1.1 Main Concept

RuBrik should look like a communication machine built by factory engineers in 1986 and preserved inside an ancient European industrial fortress.

Imagine:

- A factory command center in Czechoslovakia, Germany, Poland, or Yugoslavia
- Steel walls covered with operational diagrams
- Thick paper reports stamped by administrators
- Old CRT monitors displaying modern information
- Medieval iron emblems integrated into machine panels
- Mechanical indicator lamps
- Industrial typography printed using old stencil machines
- A sense of authority, durability, and permanence

The presentation should communicate:

> “This system was built to survive bad communication, organizational chaos, and several management rotations.”

---

## 1.2 Design Personality

The design personality must be:

- Heavy
- Disciplined
- Mechanical
- Authoritative
- Functional
- Historical
- Slightly mysterious
- Dryly humorous
- Premium but not luxurious
- Rugged but still readable

Avoid anything cute, glossy, playful, futuristic, or overly polished.

---

## 1.3 Emotional Target

The audience should feel:

1. This is not another generic corporate portal.
2. RuBrik has a strong and memorable identity.
3. The platform feels structured and reliable.
4. The old-industrial visual language makes modern digital communication feel tangible.
5. Every slide feels like part of one large machine.

---

# 2. Historical and Visual References

Use the following references as inspiration:

- European industrial facilities from the late 1970s and 1980s
- Old steel mills and power plants
- Soviet and Eastern European control rooms
- German technical documentation
- British factory warning systems
- Medieval blacksmith workshops
- Fortress gates and iron hinges
- Old government archive folders
- Military field manuals
- Analog measurement instruments
- Industrial safety labels
- Vintage railway signage
- Steel plates with engraved serial numbers

Do not directly copy logos, national symbols, military insignia, or copyrighted visual identities.

---

# 3. Anti-References

The presentation must not look like:

- A fantasy RPG user interface
- A medieval game menu
- A pirate map
- A steampunk convention poster
- A cyberpunk dashboard
- A neon sci-fi spaceship
- A glossy SaaS landing page
- A generic modern corporate template
- A luxury gold-and-black presentation
- A grunge rock concert poster
- A horror game interface
- A Soviet propaganda poster

Avoid excessive gears, decorative pipes, skulls, swords, dragons, crowns, chains, or fantasy ornaments.

Medieval references must appear through **materials, construction, framing, and iron craftsmanship**, not literal fantasy symbols.

---

# 4. Color System

## 4.1 Primary Palette

| Token | Color | Hex | Usage |
|---|---|---:|---|
| `--iron-black` | Iron Black | `#111311` | Main background |
| `--forge-charcoal` | Forge Charcoal | `#1B1E1B` | Panels and cards |
| `--steel-grey` | Steel Grey | `#343936` | Borders and secondary surfaces |
| `--aged-iron` | Aged Iron | `#505650` | Muted controls and dividers |
| `--bone-paper` | Bone Paper | `#D6D0BC` | Main text |
| `--dust-paper` | Dust Paper | `#AAA58F` | Secondary text |
| `--warning-amber` | Warning Amber | `#D99A2B` | Main accent |
| `--oxidized-red` | Oxidized Red | `#8B3429` | Warnings and critical states |
| `--machine-green` | Machine Green | `#73856A` | Active or confirmed states |
| `--cold-steel` | Cold Steel | `#879294` | Technical details |
| `--parchment` | Parchment | `#C2B68E` | Document cards |
| `--oil-shadow` | Oil Shadow | `#080A08` | Deep shadow |

---

## 4.2 Accent Rules

Use `warning-amber` as the dominant accent.

Use amber for:

- Active slide indicator
- Important numbers
- Highlighted labels
- Flow arrows
- Interactive controls
- Key feature icons
- Selected navigation
- Progress bars

Use oxidized red only for:

- Problems
- Rejected states
- Warning labels
- Critical notes
- Before-state metrics

Use machine green only for:

- Published
- Approved
- Active
- Connected
- Completed states

Never use more than two accent colors prominently on one slide.

---

## 4.3 Color Ratio

Recommended visual ratio:

- 65% Iron Black and Forge Charcoal
- 20% Bone Paper and Steel Grey
- 10% Warning Amber
- 5% Red, Green, or other status colors

The deck must remain dark and controlled.

---

# 5. Materials and Surface Language

## 5.1 Main Materials

Use subtle visual representations of:

- Blackened iron
- Brushed steel
- Oxidized metal
- Cast iron
- Old machinery paint
- Thick archival paper
- Worn cardboard labels
- Concrete
- Leather binding
- Riveted steel plates

Textures must remain subtle.

The audience must notice the atmosphere without losing readability.

---

## 5.2 Surface Rules

Panels should feel like physical machine components.

Recommended properties:

- Thick borders
- Slight inner shadow
- Small rivets
- Engraved labels
- Serial numbers
- Uneven but controlled texture
- Mechanical spacing
- Sharp or minimally rounded corners

Avoid:

- Floating glass cards
- Transparent blur panels
- Large soft gradients
- Excessively smooth surfaces
- Plastic-looking UI components
- Large border radiuses

---

## 5.3 Border Radius

Use a restrained radius system:

```css
--radius-xs: 2px;
--radius-sm: 4px;
--radius-md: 6px;
--radius-panel: 8px;
```

Most components should use `2px` to `6px`.

Large cards may use `8px`.

Never use pill-shaped cards except for small status indicators.

---

# 6. Typography

## 6.1 Typography Concept

Typography should combine:

- Heavy industrial headlines
- European editorial serif details
- Technical monospaced labels
- Highly readable body text

The deck should feel like a mix of:

- Factory signage
- Government technical documents
- Medieval archive labels
- 1980s engineering manuals

---

## 6.2 Font Stack

Recommended fonts:

### Display Headline

Use one:

- `Archivo Black`
- `Oswald`
- `Roboto Condensed`
- `Barlow Condensed`
- `League Gothic`

Recommended:

```css
font-family: "Archivo Black", "Arial Black", sans-serif;
```

### Editorial or Historical Accent

Use one:

- `Cormorant Garamond`
- `Libre Baskerville`
- `EB Garamond`

Recommended:

```css
font-family: "Cormorant Garamond", Georgia, serif;
```

Use only for:

- Section numbers
- Quotes
- Historical labels
- Opening slide subtitle
- Decorative captions

### Body

Use:

- `Inter`
- `IBM Plex Sans`
- `Source Sans 3`

Recommended:

```css
font-family: "IBM Plex Sans", Arial, sans-serif;
```

### Technical and Machine Labels

Use:

- `IBM Plex Mono`
- `JetBrains Mono`
- `Space Mono`

Recommended:

```css
font-family: "IBM Plex Mono", monospace;
```

---

## 6.3 Type Scale

For a 1920×1080 viewport:

```css
--text-xs: 14px;
--text-sm: 18px;
--text-md: 22px;
--text-lg: 28px;
--text-xl: 38px;
--text-2xl: 56px;
--text-3xl: 78px;
--text-hero: clamp(80px, 9vw, 160px);
```

Slide titles must be large and visually dominant.

Body content must remain readable from a projector.

Never place body text below `18px` on desktop.

---

## 6.4 Typography Rules

- Use uppercase for industrial labels and section markers.
- Use sentence case for explanatory copy.
- Use monospaced text for technical annotations, status, dates, and numbers.
- Use serif accents sparingly.
- Use wide tracking for navigation labels.
- Avoid center-aligning long text.
- Do not use more than three font styles on one slide.

Recommended label style:

```css
.machine-label {
  font-family: "IBM Plex Mono", monospace;
  font-size: 14px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
```

---

# 7. Layout System

## 7.1 Slide Canvas

Primary presentation ratio:

```text
16:9
1920 × 1080
```

Each slide must fill one viewport.

Recommended safe area:

```css
padding: clamp(48px, 5vw, 96px);
```

Do not place essential content near browser edges.

---

## 7.2 Grid

Use a 12-column grid.

Recommended structure:

```css
display: grid;
grid-template-columns: repeat(12, minmax(0, 1fr));
gap: 24px;
```

Use strict alignment.

The visual style should feel engineered, not casually arranged.

---

## 7.3 Layout Patterns

Preferred slide layouts:

1. **Monumental Title**
   - Large title
   - Small technical metadata
   - One strong visual object

2. **Split Command Panel**
   - Left: narrative or problem
   - Right: diagram, metric, or mockup

3. **Mechanical Grid**
   - 4–6 structured modules
   - Equal spacing
   - Numbered or labeled

4. **Archive Document**
   - One large paper-like panel
   - Stamps, labels, signatures, and notes

5. **Control Room**
   - Multiple metrics and indicators
   - Strong center focal point

6. **Industrial Blueprint**
   - Architecture diagram
   - Thin connecting lines
   - Technical annotations

7. **Steel Gate Closing**
   - Final slide
   - Large central message
   - Heavy visual composition

Avoid placing too many different layout systems in one slide.

---

# 8. Decorative Language

## 8.1 Rivets

Rivets may appear on:

- Large panels
- Navigation rails
- Section title plates
- Architecture blocks
- Closing slide frames

Rules:

- Maximum four visible rivets per component
- Use tiny circles or embossed points
- Keep contrast low
- Do not decorate every card

---

## 8.2 Engraved Plates

Use small metal plates for:

- Slide numbers
- Section names
- Status
- Dates
- Technical labels
- Module IDs

Example:

```text
MODULE 04
FACTORY WIRE
STATUS: ACTIVE
```

---

## 8.3 Stamps

Use document stamps for:

- APPROVED
- PUBLISHED
- VERIFIED
- INTERNAL USE
- ADMIN REVIEW
- NO ADDITIONAL LICENSE

Stamps must look worn and slightly misaligned.

Do not use stamps on every slide.

---

## 8.4 Archive Codes

Add subtle fictional codes such as:

```text
RBK-COMM-1986
UNIT 04
DOC 06-A
REV 1.0
INTERNAL TRANSMISSION
```

These codes are decorative and must not imply real compliance certification.

---

## 8.5 Industrial Icons

Use:

- Megaphone
- Newspaper
- Speech bubble
- Storefront
- Calendar
- Radio signal
- Database
- Wrench
- Shield
- File archive
- Gauge
- Terminal
- Factory
- Mail
- Clock

Icons should be:

- Outline or engraved style
- Thick enough for projector visibility
- Mostly monochrome
- Amber when active

Avoid colorful app-style icons.

---

# 9. Component Design

## 9.1 Feature Card

Feature cards must look like removable machine modules.

Properties:

```css
background: #1B1E1B;
border: 1px solid #505650;
box-shadow:
  inset 0 0 0 1px rgba(255,255,255,0.025),
  0 12px 30px rgba(0,0,0,0.35);
border-radius: 4px;
```

Each card may include:

- Module number
- Icon
- Feature name
- One-line description
- Status light
- Small serial code

Hover behavior:

- Border becomes amber
- Status light activates
- Panel moves upward by a maximum of 4px
- No dramatic scaling

---

## 9.2 Metric Card

Metric cards should look like analog counter modules.

Example:

```text
TIME SAVED
13 HRS / MONTH
```

Visual rules:

- Large monospaced number
- Small uppercase label
- Amber numeric emphasis
- Thin etched divider
- Optional small gauge line

Do not use glossy dashboard cards.

---

## 9.3 Status Badge

Recommended styles:

```text
ACTIVE
PUBLISHED
PENDING
REJECTED
AUTOMATED
INTERNAL
```

Shape:

- Small rectangle
- Minimal corner radius
- Uppercase
- Monospaced
- 1px border
- No bubble-like pills

---

## 9.4 Buttons

Buttons should look like industrial switches or stamped action plates.

Primary button:

```css
background: #D99A2B;
color: #111311;
border: 1px solid #F1BC58;
box-shadow:
  inset 0 -3px 0 rgba(0,0,0,0.25),
  0 6px 18px rgba(0,0,0,0.4);
```

Label examples:

- ENTER RUBRIK
- OPEN MODULE
- NEXT SECTION
- VIEW SYSTEM
- ACTIVATE

Hover behavior:

- Slight brightness increase
- Move upward by 1px
- Stronger border
- Optional mechanical click sound only when explicitly enabled

Never auto-play audio.

---

## 9.5 Progress Indicator

Create a vertical or horizontal progress rail resembling a machine track.

Recommended:

```text
01 ●────02────03────04────05────06
```

The active slide should use amber.

Inactive slides use aged iron.

The progress indicator must remain subtle.

---

## 9.6 Navigation Controls

Navigation controls should resemble physical machine buttons.

Use:

- Previous
- Next
- Overview
- Fullscreen

Style:

- Square buttons
- Thick borders
- Monospaced labels or icons
- Amber focus state
- Visible keyboard focus

---

# 10. Slide-Specific Visual Direction

## Slide 1 — Opening

Visual concept:

A giant steel title plate mounted on a dark factory wall.

Elements:

- Large `RuBrik`
- Serif subtitle `Ruang Pabrik`
- Amber warning light
- Faint moving factory grid
- Serial code
- Small system status
- Slowly moving mechanical ticker

Suggested micro-copy:

> Internal communication infrastructure, forged from tools we already own.

Animation:

- Title reveals like a heavy steel door opening
- Amber lights power on sequentially
- Background machinery moves very slowly

---

## Slide 2 — Problem

Visual concept:

An investigation wall made of pinned emails, screenshots, paper notices, and chat fragments.

Use red thread-like connectors very sparingly.

The composition should feel like:

> “Nobody knows where the latest information actually lives.”

Add stamped text:

```text
INFORMATION LOCATION: UNKNOWN
```

---

## Slide 3 — Solution

Visual concept:

A central machine named `RuBrik`.

Six information pipes feed into one reinforced control unit.

Output labels:

- Clear information
- Shared context
- Employee participation
- Single source of truth

Use industrial flow arrows.

---

## Slide 4 — Six Features

Use a mechanical module rack.

Each feature is one removable module.

Layout:

```text
[01] ANNOUNCEMENT   [02] DAILY NEWS   [03] WARKOP
[04] MARKETPLACE    [05] AGENDA       [06] FACTORY WIRE
```

Hovering a module should activate its indicator lamp.

---

## Slide 5 — Announcement Flow

Use a conveyor-belt visual.

Stages:

```text
EMAIL → PARSE → DRAFT → REVIEW → PUBLISH
```

Each stage looks like an industrial checkpoint.

Published content exits as a clean announcement card.

---

## Slide 6 — Daily News

Use an old newsroom-machine concept.

RSS sources enter through multiple narrow channels.

Articles pass through:

- Topic filter
- Deduplication
- Article limit
- Publishing queue

The result appears on a vintage newspaper panel.

---

## Slide 7 — Warkop

Use a medieval guild notice-board mixed with a factory intercom system.

Messages are attached like stamped paper notes.

Anonymous aliases appear as worker call signs.

Use caution tape only in moderation areas.

---

## Slide 8 — Marketplace

Use an internal factory canteen market-board.

Product cards resemble inventory tags.

Contact buttons resemble order request buttons.

Avoid cheerful marketplace colors.

The mood must remain industrial and internal.

---

## Slide 9 — Agenda

Use a mechanical time-board inspired by old railway station schedules.

Meeting events may flip or slide into place.

Display:

- Date
- Time
- Location
- Status

Do not overuse flip-clock animation.

---

## Slide 10 — Architecture

Use an industrial blueprint on dark paper.

Three layers:

- Presentation
- Logic
- Data and Integration

Nodes must resemble steel equipment plates.

Connections resemble technical wiring.

Use small codes and labels around the diagram.

---

## Slide 11 — Two Access Paths

Use two heavy steel doors:

- EMPLOYEE LANDING
- ADMIN CMS

Both connect to one central reinforced vault:

- SHARED SPREADSHEET

The concept must clearly communicate:

> Two controlled entrances. One data source.

---

## Slide 12 — CMS

Use a factory command center interface.

Dashboard modules resemble analog control instruments.

Pending items use amber.

Published items use green.

Rejected or failed items use oxidized red.

Avoid turning the slide into a tiny unreadable screenshot.

---

## Slide 13 — Google Sheets Backbone

Use a mechanical filing system.

Ten sheets become ten labeled archive drawers.

Each drawer has:

- Sheet name
- Function
- Module code

Connections between drawers may appear as steel rails or document routing lines.

---

## Slide 14 — Google Workspace Engine

Place RuBrik in the center as a foundry furnace.

Around it:

- Apps Script
- Sheets
- Sites
- Drive
- Gmail
- Calendar

Each tool acts like a machine component powering the system.

The `Rp 0` platform cost should appear as a large stamped plate.

Include a smaller note:

> Existing licenses are reused; implementation and maintenance still require human effort.

---

## Slide 15 — Value

Use a before-and-after production line.

Before:

- Scattered
- Manual
- Slow
- Repetitive

After:

- Centralized
- Assisted
- Faster
- Traceable

Metrics should resemble analog counters.

Do not use colorful SaaS charts.

---

## Slide 16 — Closing

Visual concept:

A giant fortress-like steel gate with the RuBrik emblem.

Main line:

> RuBrik siap berjalan. Kapan kita mulai?

Button:

```text
ENTER RUBRIK
```

Animation:

- Gate unlocks slowly
- Internal amber light turns on
- The final button receives a subtle pulse

The final slide must feel like activating a machine, not buying a software subscription.

---

# 11. Background System

## 11.1 Base Background

Recommended:

```css
background:
  radial-gradient(
    circle at 70% 20%,
    rgba(217, 154, 43, 0.06),
    transparent 30%
  ),
  linear-gradient(
    rgba(255,255,255,0.018) 1px,
    transparent 1px
  ),
  linear-gradient(
    90deg,
    rgba(255,255,255,0.014) 1px,
    transparent 1px
  ),
  #111311;
background-size:
  auto,
  48px 48px,
  48px 48px,
  auto;
```

---

## 11.2 Texture Overlay

Add a subtle noise layer.

Maximum opacity:

```css
opacity: 0.035;
```

The noise must not reduce text clarity.

---

## 11.3 Light System

Use amber lights as visual indicators.

Lighting should feel:

- Low-key
- Directional
- Slightly dusty
- Mechanical
- Warm against cold metal

Avoid broad neon glows.

---

# 12. Illustration and Image Treatment

If photos or illustrations are used:

- Convert them to desaturated or low-saturation treatment
- Add warm amber or cold steel tint
- Use strong contrast
- Crop tightly
- Place inside steel frames
- Add archival captions
- Use image grain sparingly

Preferred image subjects:

- Factory interiors
- Steel furnaces
- Control rooms
- Old industrial machinery
- Technical drawings
- Heavy doors
- Archive shelves
- Worker tools
- Mechanical switches

Avoid generic smiling office stock photos.

---

# 13. Animation System

## 13.1 Animation Personality

Animations must feel:

- Mechanical
- Deliberate
- Heavy
- Precise
- Slightly imperfect
- Never floaty or playful

---

## 13.2 Allowed Animations

- Steel panel slide
- Mechanical shutter reveal
- Lamp activation
- Gauge movement
- Stamp impact
- Document feed
- Conveyor motion
- Wire connection drawing
- Counter rotation
- Very subtle dust movement
- Slow parallax between metal layers

---

## 13.3 Timing

Recommended durations:

```css
--motion-fast: 160ms;
--motion-medium: 320ms;
--motion-slow: 650ms;
--motion-cinematic: 1100ms;
```

Use `ease-out` for panels.

Use a slightly heavier easing for doors:

```css
cubic-bezier(0.22, 1, 0.36, 1)
```

---

## 13.4 Motion Rules

- Animate only meaningful elements
- Limit entrance animation to 3–5 groups per slide
- Avoid continuous bouncing
- Avoid large zoom transitions
- Avoid spinning gears
- Avoid excessive parallax
- Respect `prefers-reduced-motion`

---

# 14. Diagram Style

Diagrams must look like engineering plans.

Use:

- Straight lines
- Right-angle connectors
- Small arrowheads
- Labels above connections
- Numbered nodes
- Monospaced annotations
- Amber active paths
- Grey inactive paths

Avoid:

- Rounded bubble diagrams
- Rainbow connectors
- Soft floating nodes
- Cartoon arrows

Recommended node format:

```text
┌───────────────────────────┐
│ UNIT 03                   │
│ GOOGLE SPREADSHEET        │
│ STATUS: CONNECTED         │
└───────────────────────────┘
```

---

# 15. Chart Style

Charts must resemble control-room instrumentation.

Use:

- Thick baseline
- Limited labels
- Large numbers
- Amber primary data
- Grey comparison data
- Red only for problem state
- Grid lines with low opacity
- Monospaced values

Preferred chart types:

- Before versus after bars
- Counter cards
- Horizontal comparison bars
- Timeline rails
- Gauge-like progress
- Step process diagrams

Avoid:

- Pie charts with many colors
- 3D charts
- Donut charts with decorative gradients
- Tiny legends
- Overloaded dashboards

---

# 16. Copy Style

The writing tone should be:

- Direct
- Dry
- Slightly sarcastic
- Professional
- Easy to understand
- Not overly technical
- Not too formal

Examples:

- “Informasinya ada. Lokasinya menjadi misteri organisasi.”
- “Katanya sudah pernah di-share.”
- “One platform. One source of truth. Less archaeology.”
- “Anonymous discussion, moderated chaos.”
- “Your meetings. Unfortunately, still your meetings.”
- “Built from tools we already own.”
- “Admin mengelola konten, bukan rasa takut merusak formula.”
- “The system is modern. The visual identity survived three industrial revolutions.”

Avoid:

- Excessive slang
- Insults
- Department-specific jokes
- Political references
- Military language
- Overly dramatic medieval phrases
- Fantasy vocabulary such as kingdom, dragon, warrior, battle, or throne

---

# 17. Accessibility

The industrial aesthetic must never damage usability.

Requirements:

- Minimum text contrast ratio of 4.5:1
- Visible keyboard focus
- Minimum body size of 18px on desktop
- No text placed directly over complex images
- Status must not rely only on color
- All interactive elements require accessible labels
- Reduced-motion mode
- Clear slide navigation
- Avoid flickering lights
- No rapid CRT effects
- No audio by default

---

# 18. Responsive Behavior

## Desktop and Projector

- Maintain 16:9 composition
- Use large titles
- Preserve multi-column layouts
- Keep decoration visible but secondary

## Tablet

- Reduce side metadata
- Simplify diagrams
- Preserve the main narrative
- Move navigation closer to screen edges

## Mobile

- Stack columns vertically
- Hide non-essential decoration
- Keep one major visual per screen
- Preserve slide-by-slide navigation
- Do not convert the experience into one long page
- Avoid tiny multi-panel dashboards

---

# 19. CSS Token Starter

```css
:root {
  --iron-black: #111311;
  --forge-charcoal: #1B1E1B;
  --steel-grey: #343936;
  --aged-iron: #505650;
  --bone-paper: #D6D0BC;
  --dust-paper: #AAA58F;
  --warning-amber: #D99A2B;
  --oxidized-red: #8B3429;
  --machine-green: #73856A;
  --cold-steel: #879294;
  --parchment: #C2B68E;
  --oil-shadow: #080A08;

  --font-display: "Archivo Black", "Arial Black", sans-serif;
  --font-body: "IBM Plex Sans", Arial, sans-serif;
  --font-editorial: "Cormorant Garamond", Georgia, serif;
  --font-mono: "IBM Plex Mono", monospace;

  --radius-xs: 2px;
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-panel: 8px;

  --motion-fast: 160ms;
  --motion-medium: 320ms;
  --motion-slow: 650ms;
  --motion-cinematic: 1100ms;

  --shadow-panel:
    inset 0 0 0 1px rgba(255,255,255,0.02),
    0 18px 45px rgba(0,0,0,0.38);
}
```

---

# 20. Sample Component Style

## Industrial Panel

```css
.industrial-panel {
  position: relative;
  background:
    linear-gradient(
      180deg,
      rgba(255,255,255,0.025),
      rgba(255,255,255,0)
    ),
    var(--forge-charcoal);
  border: 1px solid var(--aged-iron);
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-panel);
}

.industrial-panel::before,
.industrial-panel::after {
  content: "";
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--aged-iron);
  box-shadow: inset 0 1px 1px rgba(255,255,255,0.15);
}

.industrial-panel::before {
  top: 10px;
  left: 10px;
}

.industrial-panel::after {
  right: 10px;
  bottom: 10px;
}
```

---

## Status Lamp

```css
.status-lamp {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--aged-iron);
  box-shadow:
    inset 0 0 0 1px rgba(0,0,0,0.7),
    0 0 0 2px rgba(255,255,255,0.04);
}

.status-lamp.is-active {
  background: var(--warning-amber);
  box-shadow:
    0 0 12px rgba(217,154,43,0.45),
    inset 0 0 0 1px rgba(255,255,255,0.25);
}
```

---

## Machine Label

```css
.machine-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 9px;
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--dust-paper);
  border: 1px solid var(--aged-iron);
  border-radius: var(--radius-xs);
  background: rgba(0,0,0,0.22);
}
```

---

# 21. Implementation Rules for the AI or Developer

When implementing this design:

1. Preserve the industrial-medieval visual identity across every slide.
2. Do not use random modern SaaS components.
3. Do not use excessive rounded cards.
4. Do not introduce bright gradients.
5. Do not use neon cyberpunk colors.
6. Do not use fantasy symbols.
7. Keep every slide readable from a projector.
8. Use decorative details sparingly.
9. Prioritize storytelling over decoration.
10. Ensure every slide feels like one section of the same machine.
11. Reuse tokens and components consistently.
12. Keep the visual world grounded in real materials.
13. Make diagrams understandable to non-technical audiences.
14. Use humor only as supporting micro-copy.
15. Test the deck at 1920×1080.
16. Check all slides for overflow.
17. Ensure no visual effect reduces readability.
18. Make sure reduced-motion mode remains usable.
19. Keep the final result ready for an internal company presentation.
20. The design should look memorable even when viewed without animation.

---

# 22. Final Creative Standard

The final presentation should feel like:

> An internal communication platform presented through the visual language of a forgotten European industrial fortress from 1986.

It should communicate strength, structure, machinery, history, and operational discipline.

The design must make RuBrik feel like a system that was not merely coded.

It was **forged**.
