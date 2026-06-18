# RuBrik Wildlife Park — Design System

## 1. Theme

**RuBrik Wildlife Park — The Information Zoo**

Transform the RuBrik HTML presentation into a modern interactive wildlife park. Every RuBrik feature becomes a habitat, and every habitat has an original animal mascot that helps explain the product.

The result should feel like:

- A modern zoo map
- A wildlife documentary mixed with a product demo
- A playful internal company event
- A colorful digital safari
- A polished presentation for HR, Change Management, and management

The theme must be fun without becoming childish.

Core narrative:

> Scattered internal information is like a zoo without signs, maps, or keepers. RuBrik gives every piece of information a clear habitat.

---

## 2. Feature-to-Habitat Mapping

| RuBrik Feature | Zoo Zone | Mascot |
|---|---|---|
| Pengumuman | Eagle Announcement Tower | Eagle |
| Koran Harian | Owl News Library | Owl |
| Obrolan Warkop | Meerkat Social Burrow | Meerkat |
| Lapak Jualan | Monkey Market Street | Monkey |
| Agenda | Elephant Calendar Garden | Elephant |
| Factory Wire | Cheetah Express Track | Cheetah |
| Admin CMS | Zookeeper Control Center | Ranger/Owl |
| Google Sheets | Beaver Data Dam | Beaver |
| Architecture | Wildlife Transport Network | Multiple animals |
| Roadmap | Safari Trail | Safari jeep |

Use only original generic mascots. Do not imitate copyrighted characters.

---

## 3. Personality

The visual personality should be:

- Energetic
- Friendly
- Clever
- Colorful
- Organic
- Adventurous
- Slightly humorous
- Professional enough for management

Recommended balance:

```text
45% Modern Wildlife Park
25% Interactive Product Presentation
20% Original Animal Illustration
10% Office Comedy
```

Avoid:

- Baby zoo visuals
- Nursery illustrations
- Photorealistic animal backgrounds
- Excessive jungle clutter
- Generic corporate dashboards
- Too many animals on one slide
- Famous cartoon animal lookalikes

---

## 4. Visual Environment

The presentation should feel like a large illustrated zoo map.

Reusable visual elements:

- Wooden signboards
- Habitat markers
- Footprint trails
- Safari paths
- Ranger badges
- Animal information plaques
- Observation windows
- Ticket-stub slide counters
- Habitat gates
- Binocular overlays
- Leaves and vines
- Small ambient wildlife movement

Decorative elements must frame the content, not cover it.

---

## 5. Color Palette

```css
:root {
  --jungle-900: #10251d;
  --jungle-800: #17372a;
  --jungle-700: #20513c;

  --leaf-500: #55b86b;
  --leaf-300: #8edb91;

  --sand-100: #fff5dc;
  --sand-200: #f5dfb5;
  --sand-400: #d8b277;

  --sky-300: #8ed8f8;
  --sky-500: #4dabd3;

  --sunset-400: #f39a4a;
  --sunset-500: #e8792d;

  --flamingo-300: #f5a6c7;
  --flamingo-500: #df6fa0;

  --warning-500: #db4f4f;

  --night-900: #10202c;
  --night-700: #18384a;

  --font-display: "Bree Serif", serif;
  --font-body: "Nunito Sans", sans-serif;
  --font-code: "IBM Plex Mono", monospace;

  --radius-card: 18px;
  --radius-plaque: 12px;

  --shadow-soft: 0 18px 40px rgba(10, 25, 20, 0.2);
  --shadow-card: 0 10px 24px rgba(10, 25, 20, 0.18);
}
```

Color rules:

- Use one dominant habitat color per slide.
- Use one supporting accent.
- Use safari sand for readable surfaces.
- Use deep green or navy for structural areas.
- Do not use every color equally on every slide.

Suggested feature colors:

```text
Pengumuman: Sky Blue + Golden Yellow
Koran Harian: Night Navy + Owl Gold
Warkop: Flamingo Pink + Sand
Lapak Jualan: Sunset Orange + Leaf Green
Agenda: Sky Blue + Elephant Gray
Factory Wire: Cheetah Yellow + Warning Red
```

---

## 6. Typography

Display font:

```css
font-family: "Bree Serif", serif;
```

Body font:

```css
font-family: "Nunito Sans", sans-serif;
```

Technical font:

```css
font-family: "IBM Plex Mono", monospace;
```

Scale:

```css
--text-xs: clamp(13px, 0.9vw, 17px);
--text-sm: clamp(17px, 1.2vw, 22px);
--text-md: clamp(21px, 1.6vw, 29px);
--text-lg: clamp(34px, 2.8vw, 54px);
--text-xl: clamp(52px, 5vw, 92px);
--text-hero: clamp(68px, 7vw, 126px);
```

Slide labels:

```text
HABITAT 05
Eagle Announcement Tower
```

```text
ZONE 09
Elephant Calendar Garden
```

```text
FINAL SAFARI
Open the Park
```

---

## 7. Layout System

Safe area:

```text
Top: 7%
Bottom: 9%
Left: 6%
Right: 6%
```

Use a 12-column grid.

Primary layouts:

### Habitat Overview

Left:
- Feature name
- Explanation
- Benefit

Right:
- Habitat illustration
- Mascot
- Interactive object

### Zoo Map

Center:
- Connected habitats
- Animated routes
- Central RuBrik plaza

### Observation Deck

Large framed panel for:

- CMS mockup
- Announcement preview
- Architecture diagram
- Google Sheets

### Ranger Briefing

Left:
- Ranger note
- Main takeaway

Right:
- Process or diagram

### Animal Plaque Grid

Use for:

- Metrics
- Tools
- Features
- Benefits

Avoid more than six major objects on one slide.

---

## 8. Navigation

Navigation should look like a zoo map.

Controls:

- Previous habitat
- Next habitat
- Park overview
- Fullscreen
- Sound
- Management Tour mode

Progress:

- Safari route across the bottom
- Small jeep moves as slides advance
- Section markers represent park zones

Slide counter:

```text
HABITAT 05 / 18
```

Use wooden sign arrows, ranger compass icons, or footprint buttons.

---

## 9. Original Animal Mascots

### Eagle — Pengumuman

Behavior:

- Carries an email
- Flies toward Announcement Tower
- Drops a green approval stamp

### Owl — Koran Harian

Behavior:

- Reads newspapers
- Sorts article cards
- Removes duplicates
- Activates topic filters

### Meerkat — Obrolan Warkop

Behavior:

- Pops from discussion burrows
- Holds anonymous speech bubbles
- Carries moderation flags

### Monkey — Lapak Jualan

Behavior:

- Displays product cards
- Rings a marketplace bell
- Celebrates approved listings

### Elephant — Agenda

Behavior:

- Carries a calendar
- Uses its trunk as a timeline pointer
- Places events onto a 14-day path

### Cheetah — Factory Wire

Behavior:

- Pulls the scrolling ticker
- Activates breaking-news mode
- Leaves speed lines

### Beaver — Google Sheets

Behavior:

- Builds a structured data dam
- Organizes spreadsheet tabs
- Prevents duplicate data blocks
- Wears a tiny engineer helmet

Mascots should have a consistent vector illustration style:

- Clear silhouettes
- Friendly expressions
- Medium detail
- No photorealism
- No copyrighted resemblance

---

## 10. Components

### Wooden Sign

Use for:

- Slide titles
- Zone labels
- Important navigation

### Animal Information Plaque

Use for:

- Feature descriptions
- Metrics
- Tool roles
- Business value

Example:

```text
SPECIES:
Google Apps Script

ROLE:
Automation Engine

DIET:
Triggers, APIs, and mild developer anxiety
```

### Habitat Window

Use for:

- UI previews
- Diagrams
- Product mockups

### Ranger Note

Use for:

- Disclaimer
- Important warning
- Small joke

Example:

```text
RANGER NOTE:
Please verify business-impact numbers before formal submission.
```

### Safari Badge

Use for:

- Approved
- Published
- Pending
- Rp 0
- Real-time
- Anonymous

### Footprint Trail

Use for:

- Process flow
- Timeline
- Navigation
- User journey

---

## 11. Animations

Use organic animation.

Primary animation types:

- Habitat gate opening
- Animal entrance
- Footprint reveal
- Safari route drawing
- Leaf wipe
- Binocular zoom
- Wooden sign swing
- Ranger stamp
- Safari jeep transition

Small mascot reactions:

- Owl blinks
- Meerkat pops up
- Elephant nods
- Monkey lifts a product card
- Beaver places a data block
- Cheetah accelerates

Do not animate every mascot constantly.

Maximum looping mascot animations per slide: 2.

---

## 12. Transitions

Use only four transition families.

### Habitat Gate

Use for major section changes.

### Safari Jeep

A jeep crosses the screen and reveals the next zone.

### Leaf Wipe

Leaves sweep across the screen.

### Binocular Focus

The audience zooms into a detail through binocular circles.

Direct slide jumps should use a short fade instead of long transitions.

---

## 13. Gimmicks

### Safari Stamp Collection

Award stamps after completing major zones:

- Announcement Tower Visited
- News Library Explored
- Warkop Burrow Entered
- Marketplace Street Completed
- Calendar Garden Cleared
- Data Dam Engineer

### Panic Monkey

Button:

```text
RELEASE THE MONKEY
```

On click:

- Monkey runs across the screen
- Sticky notes fall
- Message appears:

```text
Relax. It is only a presentation.
```

### Sleepy Owl Idle Mode

After 30 seconds:

- Owl sleeps
- Display:

```text
Audience activity not detected.
Possible causes: meeting fatigue or snack shortage.
```

### Management Tour Mode

Toggle:

```text
MANAGEMENT TOUR MODE
```

When enabled:

- Hide most jokes
- Reduce mascot movement
- Use formal labels
- Use simpler transitions

When disabled:

```text
WILDLIFE RESTORED
```

### Hidden Animal Easter Eggs

Clicking background animals may trigger:

- Tiny fact bubbles
- Small animations
- Bonus safari stamps
- Harmless jokes

Do not hide important content in Easter eggs.

### Pop Quiz

Question:

```text
Informasi internal paling sering hilang di mana?
```

Options:

- Email
- WhatsApp
- Grup yang salah
- Semua jawaban benar

Result:

```text
Semua jawaban benar
```

### Optional Sound

Allowed:

- Soft bird chirp
- Owl hoot
- Market bell
- Elephant trumpet
- Cheetah whoosh
- Zoo gate click

All sound must be low volume, optional, and disabled before user interaction.

---

## 14. Slide Visual Mapping

### Slide 1 — Zoo Gate Opening

Large RuBrik Wildlife Park entrance.

CTA:

```text
ENTER THE PARK
```

Ranger note:

```text
Please keep your information inside designated habitats.
```

### Slide 2 — Information Jungle Chaos

Show:

- Lost email birds
- WhatsApp vines
- Old PDF fossils
- Broken signs
- Confused employee with a zoo map

### Slide 3 — Main Zoo Map

Six feature habitats connected to RuBrik Central Plaza.

### Slide 4 — Habitat Activation

Activate six habitats.

When complete:

```text
THE PARK IS FULLY OPERATIONAL
```

### Slide 5 — Eagle Announcement Tower

The eagle carries an email through:

```text
Email → Parsing → CMS Draft → Review → Published
```

### Slide 6 — Owl News Library

RSS article cards arrive and are filtered by the owl.

### Slide 7 — Meerkat Social Burrow

Anonymous meerkats and moderated speech bubbles.

### Slide 8 — Monkey Market Street

Employee product stalls and listing approval.

### Slide 9 — Elephant Calendar Garden

A 14-day meeting path arranged by the elephant.

### Slide 10 — Cheetah Express Track

Cheetah pulls the Factory Wire ticker.

### Slide 11 — Wildlife Architecture Network

Use trails, bridges, and control centers to explain system architecture.

### Slide 12 — Zookeeper Control Center

CMS appears as an interactive ranger control room.

### Slide 13 — Beaver Data Dam

Ten spreadsheet tabs become organized dam sections.

Add:

```text
Please do not feed the production spreadsheet.
```

### Slide 14 — Google Workspace Ecosystem

Each Google tool has a park operational role.

### Slide 15 — Budget Mountain

Old Process = Tortoise Route

RuBrik = Cheetah Route

Highlight:

```text
Rp 0 Additional Platform Cost
```

### Slide 16 — Four Conservation Pillars

- Retention
- Compliance
- Innovation
- Employer Branding

### Slide 17 — Safari Roadmap

Jeep moves through W1, W2, W3, and W4+.

### Slide 18 — Wildlife Festival

All mascots gather near the zoo gate.

CTA:

```text
OPEN RUBRIK WILDLIFE PARK
```

Final message:

```text
RuBrik
Informasi Sekarang Punya Rumah.
```

---

## 15. Data Visualization

Use wildlife metaphors:

- Tree growth chart
- Animal race comparison
- Habitat occupancy meter
- Safari route timeline
- Ranger scoreboard
- Conservation badge grid

Example:

```text
OLD PROCESS:
Tortoise Route — 45–90 minutes

RUBRIK:
Cheetah Route — under 10 minutes
```

Do not use complex 3D charts or tiny legends.

---

## 16. Humor Rules

Good humor:

- Email overload
- Meeting fatigue
- Spreadsheet anxiety
- Approval flow
- Management vocabulary
- Zoo keeper metaphors

Examples:

```text
“Please do not feed the old process.”
```

```text
“Information should have a habitat, not a rumor.”
```

```text
“The elephant remembers your meeting. Unfortunately.”
```

```text
“No spreadsheet rows were harmed during this demo.”
```

```text
“Finance has approved this habitat.”
```

Avoid:

- Comparing coworkers to animals
- Personal insults
- HR or management attacks
- Offensive stereotypes
- Cruel animal jokes

---

## 17. Accessibility

Requirements:

- Minimum contrast ratio 4.5:1
- Do not rely only on animal icons
- Keyboard navigation must work
- Controls require visible focus states
- Sound must be optional
- Essential information must not depend on animation
- Mascots require alt text or `aria-hidden`
- Respect `prefers-reduced-motion`

Reduced-motion behavior:

- Disable running animals
- Disable leaf wipes
- Disable parallax
- Replace transitions with fades
- Reduce final confetti

---

## 18. Responsive Behavior

Desktop:

- Full zoo map
- Mascots
- Routes
- Transitions

Tablet:

- Reduce habitat decoration
- Increase touch target size
- Preserve content hierarchy

Mobile:

- Single-column
- One mascot maximum
- Hide non-essential animals
- Keep navigation visible
- Allow slide content scrolling if necessary

---

## 19. Reusable Components

```text
ZooSlide
HabitatHeader
WoodenSign
AnimalPlaque
HabitatWindow
RangerNote
SafariBadge
FootprintTrail
ZooMap
AnimalMascot
SafariJeep
BinocularOverlay
HabitatGate
LeafTransition
SafariProgress
StampCollection
ManagementTourToggle
SoundToggle
WildlifeConfetti
```

JavaScript helpers:

```javascript
openHabitatGate()
closeHabitatGate()
animateAnimalEntrance()
drawSafariRoute()
revealFootprints()
swingWoodenSign()
focusBinoculars()
launchWildlifeConfetti()
awardSafariStamp()
activateManagementTour()
releasePanicMonkey()
```

---

## 20. Performance

- Animate only the active slide
- Pause animations when the tab is inactive
- Prefer SVG for mascots
- Prefer transforms and opacity
- Lazy-load large assets
- Avoid giant canvas backgrounds
- Reuse confetti particles
- Target smooth performance on 1366×768 office laptops

---

## 21. Final Principle

Every slide must answer:

```text
1. Which RuBrik concept is being explained?
2. Which zoo habitat represents it?
3. Which interaction makes it memorable?
```

The zoo metaphor must help explain the product.

It should not become decoration without purpose.

Final feeling:

> A smart internal product presentation disguised as an interactive wildlife park tour.

Final status:

```text
PARK STATUS: READY TO OPEN
```

Final CTA:

```text
OPEN RUBRIK WILDLIFE PARK
```

On click:

- Massive leaf confetti
- Safari stamps
- Animal footprints
- Paper birds
- Fireflies
- Celebration banner

Final message:

```text
THE PARK IS OPEN.
DEPLOYMENT BEGINS.
```
