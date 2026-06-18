# Codex Prompt — Redesign RuBrik HTML Presentation into a Zoo Theme

You are a world-class frontend engineer, interaction designer, visual storyteller, and presentation developer.

Your task is to REDESIGN the existing RuBrik HTML presentation using the latest zoo design system.

Read these files first:

- `rubrik.md` — source of truth for the presentation content
- `design-zoo.md` — mandatory zoo visual and interaction system
- Existing HTML, CSS, JavaScript, and assets in the repository

The new theme is:

# RuBrik Wildlife Park — The Information Zoo

RuBrik must be presented as a modern interactive wildlife park where every feature becomes its own habitat.

---

## Main Objective

Redesign the existing HTML presentation into a FUN, colorful, interactive zoo-themed experience.

The final result must feel like:

- A modern digital zoo map
- A wildlife documentary mixed with product storytelling
- A playful internal company event
- An interactive safari through RuBrik
- A polished web presentation for HR, Change Management, and management

It must not look childish.

Do not use famous or copyrighted animal characters.

Create only original, generic animal mascots.

---

## Source-of-Truth Rules

Use `rubrik.md` for all factual presentation content.

Do not remove important content.

Do not invent technical capabilities.

Harmless sample content may be added for visual demonstration.

Preserve these facts:

- RuBrik has six main features
- It is built on Google Workspace
- It uses Google Apps Script
- It uses one Google Spreadsheet with 10 sheets/tabs
- Landing and CMS are separate GAS projects
- Gmail integration creates announcement drafts
- Google Calendar provides the personal agenda
- RSS auto-fetch provides daily news
- Additional platform cost is Rp 0
- Business-impact numbers require a visible verification disclaimer

Read `design-zoo.md` completely before changing the interface.

Do not partially apply the design.

---

## Mandatory Feature-to-Habitat Mapping

Use this mapping consistently:

1. Pengumuman
   - Zone: Eagle Announcement Tower
   - Mascot: Eagle

2. Koran Harian
   - Zone: Owl News Library
   - Mascot: Owl

3. Obrolan Warkop
   - Zone: Meerkat Social Burrow
   - Mascot: Meerkat

4. Lapak Jualan
   - Zone: Monkey Market Street
   - Mascot: Monkey

5. Agenda
   - Zone: Elephant Calendar Garden
   - Mascot: Elephant

6. Factory Wire
   - Zone: Cheetah Express Track
   - Mascot: Cheetah

Additional mapping:

- Admin CMS: Zookeeper Control Center
- Google Sheets: Beaver Data Dam
- Architecture: Wildlife Transport Network
- Roadmap: Safari Trail
- Final slide: Wildlife Festival

---

## Visual Requirements

Use:

- Deep jungle green backgrounds
- Safari sand information cards
- Wooden signboards
- Habitat windows
- Footprint trails
- Zoo map paths
- Original SVG animal mascots
- Leaves and vines as framing elements
- Safari badges
- Ranger notes
- Observation deck panels
- Ticket-style slide counters
- Habitat gates

Avoid:

- Baby cartoon style
- Nursery visuals
- Photorealistic animal backgrounds
- Excessive jungle clutter
- Generic glassmorphism
- Corporate blue dashboard templates
- Random animals unrelated to the content
- Copying Disney, DreamWorks, Nickelodeon, or other recognizable character styles

The design must remain professional enough for an internal company presentation.

---

## Technical Requirements

Keep the current project stack unless it is broken.

Preferred implementation:

- HTML5
- CSS3
- Vanilla JavaScript
- SVG illustrations
- No backend
- No mandatory build step
- Must work by opening `index.html`

Do not replace the project with an unnecessary framework.

External lightweight CDN libraries are allowed, but graceful fallback is mandatory.

Recommended libraries:

- GSAP or Anime.js for motion
- Rough.js for hand-drawn map details
- Canvas Confetti for the final celebration
- Lucide Icons for UI controls

The presentation must still show all content when external libraries fail.

---

## Project Structure

Keep or refactor toward:

```text
/
├── index.html
├── styles.css
├── script.js
├── rubrik.md
├── design-zoo.md
├── README.md
└── assets/
    ├── animals/
    ├── habitats/
    ├── icons/
    ├── sounds/
    └── textures/
```

Use reusable components and utility functions.

---

## Navigation

Support:

- Arrow Left / Right
- Page Up / Page Down
- Spacebar
- Home
- End
- Escape for zoo map overview
- F for fullscreen
- M for sound
- Number keys for direct navigation
- Swipe gestures
- Mouse wheel navigation with debounce

Add:

- Safari trail progress bar
- Small jeep position indicator
- Habitat number
- Current zone name
- Fullscreen control
- Sound control
- Management Tour mode
- Visible focus state for keyboard users

Prevent rapid keypresses from skipping several slides accidentally.

---

## Required 18-Slide Experience

### Slide 1 — Zoo Gate Opening

Create a large RuBrik Wildlife Park entrance.

Text:

```text
RuBrik Wildlife Park
Ruang Pabrik
```

Subtitle:

```text
Mading Digital Internal Pabrik
```

CTA:

```text
ENTER THE PARK
```

Interaction:

- Gate opens after click
- Safari route appears
- Ranger guide welcomes the audience
- Optional ambience starts only after user interaction

Ranger note:

```text
Please keep your information inside designated habitats.
```

---

### Slide 2 — Information Jungle Chaos

Show the current problem as an unorganized wildlife park.

Visuals:

- Lost email birds
- WhatsApp vines
- Old PDF fossils
- Broken direction signs
- Confused employee holding a map
- Multiple conflicting policy boards

Messages:

```text
Informasi ada di mana-mana.
Petunjuknya tidak ada.
```

Highlight:

- Information is scattered
- No single source of truth
- New employees are disoriented
- Ideas have no structured channel

Add a ranger warning:

```text
WARNING:
Unmanaged information may become folklore.
```

---

### Slide 3 — RuBrik Main Zoo Map

Show the central RuBrik plaza connected to six habitats.

Each zone should have:

- Habitat sign
- Animal mascot
- Short feature explanation
- Animated route

Main statement:

```text
One Platform.
Six Habitats.
One Clear Map.
```

---

### Slide 4 — Habitat Activation

Create an interactive park control map.

Each habitat starts inactive.

When clicked:

- Habitat lights turn on
- Mascot reacts
- A park stamp is awarded
- Operational meter increases

When all six are active:

```text
THE PARK IS FULLY OPERATIONAL
```

Trigger only small confetti here.

Save massive confetti for the final slide.

---

### Slide 5 — Eagle Announcement Tower

The eagle delivers official information.

Show the flow:

```text
HR Email
→ RuBrik CC
→ Apps Script Parsing
→ CMS Draft
→ Admin Review
→ Published
```

Animation:

- Eagle carries an envelope through the process
- Draft receives a review stamp
- Final content is pinned at the tower
- Green `PUBLISHED` badge appears

Show:

- Countdown
- Pin feature
- Multi-image gallery
- Category badge
- Gmail integration
- Admin review

Humor:

```text
Forwarded message has officially retired.
```

---

### Slide 6 — Owl News Library

Create an owl-operated wildlife news library.

Show:

- RSS article cards arrive
- Owl sorts them by topic
- Duplicate articles are removed
- Maximum article limit is applied
- News is placed into RuBrik

Topics:

- Financial
- Banking
- Trading
- Loyalty
- Technology
- AI
- Marketing

Sources:

- Kontan
- CNBC Indonesia
- Katadata
- Tech in Asia Indonesia

Add a literacy meter.

Message:

```text
Information diet:
More industry news, fewer meeting invitations.
```

---

### Slide 7 — Meerkat Social Burrow

Create a network of anonymous discussion burrows.

Example aliases:

- Kuli Shift Pagi #7749
- Mandor Blok A #3321
- Operator Mesin Kopi #9921

Flow:

```text
Submitted
→ Pending
→ Admin Review
→ Published
→ Discussion
```

Use moderation flags:

- Approved
- Rejected
- Hidden

Main message:

```text
Anonymous, but not lawless.
```

When comments appear, more meerkats pop out.

---

### Slide 8 — Monkey Market Street

Create an internal employee marketplace.

Sample stalls:

- Risol Shift Pagi
- Kopi Anti Mengantuk
- Jasa Desain Deadline Mendadak
- Tanaman Meja Anti Burnout
- Foto Produk Modal Ring Light

Flow:

```text
Submit Listing
→ Admin Review
→ Published
→ Contact Seller
```

Badges:

```text
0% Platform Fee
100% Support Teman Kantor
```

CTA:

```text
CONTACT SELLER
```

Humor:

```text
In this economy, support UMKM is a survival strategy.
```

---

### Slide 9 — Elephant Calendar Garden

Create a 14-day calendar garden.

Show:

```javascript
CalendarApp.getDefaultCalendar()
```

The elephant places meetings onto a calendar path.

Capabilities:

- Real-time
- Personal calendar
- 14-day range
- Configurable through Settings
- No manual synchronization

Funny sample meetings:

- Meeting Bahas Meeting
- Lunch yang Berubah Jadi Meeting
- Focus Time Tapi Tetap Diinvite
- RuBrik Demo

Add toggle:

```text
SHOW MEETINGS I PRETEND NOT TO SEE
```

---

### Slide 10 — Cheetah Express Track

The cheetah pulls the Factory Wire ticker.

Ticker examples:

- Pengumuman baru diterbitkan
- Risol tersisa tiga
- Meeting pindah ruangan
- Isi timesheet sebelum menjadi sejarah
- Printer kembali normal tanpa alasan jelas

Button:

```text
ACTIVATE BREAKING NEWS MODE
```

When clicked:

- Cheetah accelerates
- Ticker becomes faster
- Warning banner appears

Message:

```text
BREAKING NEWS:
Link presentasi ditemukan di grup yang benar.
```

---

### Slide 11 — Wildlife Architecture Network

Explain the system using paths, bridges, and operational stations.

Show:

- Landing GAS Project
- CMS GAS Project
- Shared Spreadsheet ID
- Google Sheets
- Google Drive
- Gmail API
- Google Calendar API
- RSS Fetcher

Core diagram:

```text
Landing
   ↓
Shared Spreadsheet
   ↑
CMS
```

Add toggle:

```text
ENGINEER VIEW
MANAGEMENT VIEW
```

Engineer View:

- landing.gs
- cms.gs
- rss-fetcher.gs
- email-fetcher.gs

Management View:

- Employee portal
- Admin dashboard
- Automation engine
- Central data source

Footer:

```text
Same ecosystem. Different vocabulary.
```

---

### Slide 12 — Zookeeper Control Center

Turn the Admin CMS into a ranger operations room.

Modules:

- Dashboard
- Announcement CRUD
- News Management
- Forum Moderation
- Marketplace Approval
- Settings
- Quick Links

Add clickable pending content.

When approved:

- Pending count decreases
- Published count increases
- Green ranger stamp appears
- Safari achievement is awarded

Add button:

```text
DO NOT PRESS
```

On click:

```text
Congratulations.
You found the feature requested five minutes before demo.
```

---

### Slide 13 — Beaver Data Dam

Turn Google Sheets into a structured data dam.

Represent the ten sheets as dam sections:

- Settings
- Announcements
- News
- Forum
- ForumComments
- Marketplace
- Ticker
- QuickLinks
- RSS_Sources
- RSS_Topics

Animation:

- Beaver organizes data blocks
- Sheet tabs lock into place
- Duplicates are blocked

Main formula:

```text
One Spreadsheet
+ Two Apps
= One Source of Truth
```

Add a fake button:

```text
DELETE SHEET
```

The button must run away from the cursor.

Warning:

```text
Please do not feed the production spreadsheet.
```

---

### Slide 14 — Google Workspace Ecosystem

Show each Google tool as part of the park operation.

Examples:

- Google Apps Script — Automation Ranger
- Google Sheets — Data Habitat
- Google Sites — Main Entrance
- Google Drive — Storage Warehouse
- Gmail API — Message Carrier
- Google Calendar API — Schedule Keeper

Connect all tools using animated park routes.

Show:

```text
100% Google Workspace
Additional Platform Cost: Rp 0
```

Award:

```text
BUDGET FRIENDLY HABITAT
```

---

### Slide 15 — Budget Mountain

Compare old process and RuBrik.

Use:

```text
OLD PROCESS:
Tortoise Route — 45–90 minutes

RUBRIK:
Cheetah Route — under 10 minutes
```

Show metrics:

- Rp 0 additional platform cost
- Approximately 80% faster distribution
- Approximately 13 HR hours saved per month
- 35% productive hour recovery

Mandatory disclaimer:

```text
RANGER NOTE:
Market and business-impact numbers must be verified before formal proposal use.
```

The disclaimer must be visible and readable.

Humor:

```text
Good numbers are welcome.
Imaginary numbers are not part of the exhibition.
```

---

### Slide 16 — Four Conservation Pillars

Create four interactive habitat pillars:

1. Retention
2. Compliance
3. Innovation
4. Employer Branding

On activation:

Retention:
```text
Better communication, less confusion.
```

Compliance:
```text
One official source. Fewer archaeology expeditions through old emails.
```

Innovation:
```text
Good ideas finally have an address.
```

Employer Branding:
```text
Culture is not a poster. It is an experience.
```

Use a central Organizational Signal Strength gauge.

---

### Slide 17 — Safari Roadmap

A safari jeep travels through:

- W1 — Deploy & Go-Live
- W2 — Admin Onboarding
- W3 — Populate Content
- W4+ — Review & Iterate

Checkpoint labels:

```text
W1: Open the gate.
W2: Train the rangers.
W3: Populate the habitats.
W4+: Improve the park using visitor feedback.
```

End checkpoint:

```text
READY FOR PRODUCTION
```

---

### Slide 18 — Wildlife Festival Closing

Create a sunset wildlife festival.

All mascots gather near the zoo gate.

Text:

```text
RuBrik siap berjalan.
Kapan kita mulai?
```

Show:

```text
Built on Google Workspace.
Additional Platform Cost: Rp 0.
```

CTA:

```text
OPEN RUBRIK WILDLIFE PARK
```

When clicked, trigger a massive final celebration:

- Leaf confetti
- Safari tickets
- Paw prints
- Paper birds
- Fireflies
- Google Workspace-colored particles
- Animal reactions
- Zoo gate opening
- Celebration banner
- Safari achievement stamps

Final message:

```text
RuBrik
Informasi Sekarang Punya Rumah.
```

Then:

```text
THE PARK IS OPEN.
DEPLOYMENT BEGINS.
```

Replay button:

```text
REPLAY THE WILDLIFE FESTIVAL
```

---

## Required Gimmicks

Implement as many as possible without reducing usability.

### 1. Safari Stamp Collection

Award a stamp after each major section.

### 2. Panic Monkey

Button:

```text
RELEASE THE MONKEY
```

Result:

- Monkey runs across the screen
- Sticky notes fall
- Message:

```text
Relax. It is only a presentation.
```

### 3. Sleepy Owl Idle Mode

After 30 seconds without input:

```text
Audience activity not detected.
Possible causes: meeting fatigue or snack shortage.
```

### 4. Hidden Animal Easter Eggs

Allow small background animals to react when clicked.

### 5. Pop Quiz

Question:

```text
Informasi internal paling sering hilang di mana?
```

Options:

- Email
- WhatsApp
- Grup yang salah
- Semua jawaban benar

Fake result:

```text
Semua jawaban benar
```

### 6. Management Tour Mode

When enabled:

- Hide most jokes
- Reduce movement
- Use formal text
- Use simpler transitions
- Preserve the zoo identity

When disabled:

```text
WILDLIFE RESTORED
```

### 7. Safari Achievements

Examples:

- Announcement Tower Visited
- Inbox Survivor
- Anonymous Burrow Explorer
- Spreadsheet Beaver
- Zero Cost Legend
- Wildlife Park Operator

### 8. Console Easter Egg

Print:

```text
====================================
RUBRIK WILDLIFE PARK SYSTEM
====================================
Park Status       : ONLINE
Habitats          : 6
Database          : Google Sheets
Additional Cost   : Rp 0
Ranger Mood       : Depends on audience attention
Warning           : Do not feed production data
====================================
```

### 9. Random Ranger Notes

Examples:

- Please do not feed the old process.
- Information should have a habitat, not a rumor.
- The elephant remembers your meeting. Unfortunately.
- No spreadsheet rows were harmed during this demo.
- Finance has approved this habitat.

---

## Animation Rules

Use:

- Habitat gate opening
- Safari jeep transition
- Leaf wipe
- Binocular focus
- Footprint reveal
- Wooden sign swing
- Animal entrance
- Zoo map route drawing
- Safari stamp impact

Avoid:

- Constant bouncing
- Too many moving animals
- Loud realistic animal sounds
- Slow transitions
- Excessive parallax
- Animation that delays navigation

Pause animations on inactive slides.

Respect `prefers-reduced-motion`.

---

## Sound Rules

Sound is optional and muted before user interaction.

Allowed:

- Soft bird chirp
- Owl hoot
- Monkey market bell
- Elephant trumpet
- Cheetah whoosh
- Gate click
- Final celebration sound

Keep all sounds low volume.

Sound must never contain essential information.

---

## Accessibility

- Use semantic HTML
- Maintain contrast ratio of at least 4.5:1
- Ensure all controls are keyboard accessible
- Add visible focus states
- Use alt text or aria-hidden for animal art
- Do not rely only on color
- Respect reduced motion
- Keep all important text readable without decoration
- Make sound optional

---

## Responsive Requirements

Primary target:

- 1920×1080
- 1366×768

Tablet:

- Reduce decorative animals
- Increase touch targets
- Keep content hierarchy

Mobile:

- Single-column
- One mascot maximum
- Hide non-essential background wildlife
- Preserve navigation
- Allow vertical scrolling if needed

---

## Reusable Components

Create reusable structures:

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

JavaScript utilities:

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

## Performance Requirements

- Animate only the active slide
- Pause animation when the browser tab is inactive
- Prefer SVG animals and habitat graphics
- Prefer transform and opacity animation
- Lazy-load heavy assets
- Reuse particles
- Avoid giant canvas backgrounds
- Avoid excessive DOM nodes
- Target smooth performance on common office laptops

---

## README Update

Update `README.md` with:

- Project overview
- How to run
- Navigation controls
- Fullscreen control
- Sound control
- Management Tour mode
- How to edit content
- How to replace animal SVG assets
- How to add slides
- Browser compatibility
- Troubleshooting

---

## Final Quality Checklist

Verify:

- All important `rubrik.md` content remains accurate
- All six RuBrik features are represented
- Zoo theme is consistent
- Animal mascots are original
- Navigation works
- Fullscreen works
- Sound toggle works
- Management Tour mode works
- Safari stamps work
- Final confetti works
- No console errors
- No missing assets
- No horizontal overflow
- Text is readable at 1366×768
- Reduced-motion mode works
- Business metric disclaimer is visible
- Presentation opens from `index.html`

---

## Final Result

The redesigned presentation should feel like:

> A smart internal product presentation disguised as an interactive wildlife park tour.

It must be:

- Fun
- Memorable
- Colorful
- Professional
- Technically polished
- Easy to present live

Final message:

```text
RuBrik — Informasi Sekarang Punya Rumah.
```
