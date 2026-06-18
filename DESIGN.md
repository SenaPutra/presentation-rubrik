# RuBrik HTML Presentation — Design System

## 1. Design Concept

### Theme Name

**“The Living Blackboard Classroom”**

The RuBrik presentation should feel like an energetic classroom session where a passionate teacher explains a smart internal product using a giant blackboard.

The presentation combines:

- Classic classroom blackboard
- Hand-drawn chalk illustrations
- Colorful chalk markers
- Teacher-style explanation boards
- Sticky notes and pinned paper
- Classroom props
- Playful educational diagrams
- Interactive whiteboard behavior
- Modern web animation
- Office humor

The overall experience should feel like:

> “A very smart teacher explains RuBrik to the class, but the class is made of HR, management, developers, and people who only came because there are snacks.”

The presentation must not look childish.

It should feel playful, intelligent, handcrafted, slightly nostalgic, and visually memorable.

---

# 2. Creative Direction

## Core Visual Metaphor

Every slide is treated as a new section of a giant classroom blackboard.

The presenter behaves visually like a teacher moving from one lesson to another.

Instead of traditional corporate cards and boxes, information is presented using:

- Chalk drawings
- Handwritten labels
- Circled keywords
- Underlined statements
- Arrows drawn on the board
- Formulas
- Diagrams
- Sticky notes
- Pinned photographs
- Classroom flashcards
- Teacher check marks
- Small doodles
- Animated chalk strokes

The presentation should create the illusion that content is being written live on the blackboard.

---

# 3. Visual Personality

The visual personality should be:

- Fun
- Smart
- Playful
- Handcrafted
- Warm
- Energetic
- Slightly chaotic
- Still organized
- Friendly for non-technical audiences
- Credible enough for management

The design must avoid:

- Generic PowerPoint templates
- Glassmorphism
- Heavy corporate gradients
- Futuristic neon dashboards
- Excessive realism
- Childish kindergarten visuals
- Too many cartoon characters
- Dense paragraphs
- Over-polished sterile UI

The correct balance is:

```text
60% Blackboard Classroom
20% Modern Product Presentation
10% Office Comedy
10% Interactive Web Experience
```

---

# 4. Blackboard Environment

## Main Background

The default slide background should resemble a dark green or charcoal classroom blackboard.

Recommended base colors:

```css
--board-black: #101817;
--board-dark-green: #132522;
--board-green: #19342f;
--board-light: #23463f;
```

The blackboard should have:

- Subtle chalk dust
- Soft erased marks
- Very light scratches
- Slight color variation
- Faint previous writing traces
- Gentle edge shadow
- Wood frame around the slide

Do not use a flat solid background.

Use CSS texture through:

- Radial gradients
- Noise overlays
- Transparent brush patterns
- Repeating linear gradients
- Soft inner shadows

Example:

```css
.blackboard {
  background:
    radial-gradient(
      circle at 20% 30%,
      rgba(255,255,255,0.025),
      transparent 30%
    ),
    repeating-linear-gradient(
      0deg,
      rgba(255,255,255,0.01) 0px,
      rgba(255,255,255,0.01) 1px,
      transparent 1px,
      transparent 4px
    ),
    #132522;

  box-shadow:
    inset 0 0 80px rgba(0,0,0,0.5),
    inset 0 0 8px rgba(255,255,255,0.04);
}
```

---

# 5. Blackboard Frame

Every slide should have a subtle classroom frame.

Recommended frame:

- Dark walnut wood
- Slight texture
- Thick enough to be visible
- Not excessively realistic

Suggested colors:

```css
--wood-dark: #3b2418;
--wood-mid: #68422c;
--wood-light: #8a5d3c;
```

Frame details may include:

- Small screws
- Chalk tray
- Chalk pieces
- Eraser
- Paper clips
- Tiny sticky notes

The bottom chalk tray may remain persistent across slides.

The chalk tray can contain:

- White chalk
- Yellow chalk
- Pink chalk
- Blue chalk
- Green chalk
- Blackboard eraser
- Tiny coffee cup
- A mysterious USB drive

---

# 6. Color Palette

## Primary Chalk Colors

### White Chalk

Used for:

- Main body text
- Main diagrams
- Normal descriptions
- Structural lines

```css
--chalk-white: #f4f1df;
```

### Yellow Chalk

Used for:

- Important highlights
- Key numbers
- Warning labels
- Titles
- Important callouts

```css
--chalk-yellow: #f4dc72;
```

### Pink Chalk

Used for:

- Funny notes
- Emotional emphasis
- Problem statements
- Human-related features

```css
--chalk-pink: #ff91b8;
```

### Blue Chalk

Used for:

- Technology
- Architecture
- Google Workspace
- Automation
- Data flow

```css
--chalk-blue: #79c7ff;
```

### Green Chalk

Used for:

- Success states
- Approvals
- Savings
- Positive results

```css
--chalk-green: #8ce0a3;
```

### Orange Chalk

Used for:

- Attention
- Action items
- Roadmap stages
- Interactive controls

```css
--chalk-orange: #ffad66;
```

### Red Chalk

Used sparingly for:

- Errors
- Problem alerts
- Rejected content
- Panic mode
- Critical notices

```css
--chalk-red: #ff7474;
```

## Color Usage Rule

Never use every chalk color equally on every slide.

Each slide should have:

- 1 dominant chalk color
- 1 supporting accent color
- White as the main readable color

Example:

```text
Problem slide:
White + Red + Yellow

Technology slide:
White + Blue + Green

Marketplace slide:
White + Orange + Pink

Closing slide:
White + All chalk colors
```

---

# 7. Typography

## Headline Font

Use a handwritten chalk-style font for major headings.

Recommended options:

- `Fredericka the Great`
- `Cabin Sketch`
- `Schoolbell`
- `Patrick Hand SC`
- `Gloria Hallelujah`

Preferred:

```css
font-family: "Fredericka the Great", cursive;
```

Use for:

- Slide titles
- Large statements
- Section headings
- Main jokes
- Closing message

## Body Font

Use a readable handwritten font.

Recommended:

- `Patrick Hand`
- `Kalam`
- `Handlee`
- `Comic Neue`

Preferred:

```css
font-family: "Patrick Hand", cursive;
```

Use for:

- Body content
- Feature explanation
- Labels
- Captions
- List items

## Technical Font

Use a monospace font for:

- Code
- Architecture
- Apps Script names
- Spreadsheet sheet names
- Terminal output

Recommended:

- `IBM Plex Mono`
- `JetBrains Mono`
- `Fira Code`

Preferred:

```css
font-family: "IBM Plex Mono", monospace;
```

## Typography Scale

Recommended for 16:9 presentation:

```css
--text-xs: clamp(14px, 1vw, 18px);
--text-sm: clamp(18px, 1.3vw, 23px);
--text-md: clamp(22px, 1.7vw, 30px);
--text-lg: clamp(34px, 2.8vw, 54px);
--text-xl: clamp(52px, 5vw, 94px);
--text-hero: clamp(68px, 7vw, 130px);
```

## Chalk Text Effect

Text should not look digitally perfect.

Use:

```css
.chalk-text {
  color: var(--chalk-white);
  text-shadow:
    0 0 1px currentColor,
    1px 1px 0 rgba(255,255,255,0.08),
    -1px 0 0 rgba(255,255,255,0.05);
}
```

Optionally apply:

- Tiny rotation
- Slight opacity variation
- Mask texture
- Chalk dust pseudo-element

Avoid blurring text too much.

Readability always wins.

---

# 8. Layout System

## Safe Area

All important content must stay inside:

```text
Top: 7%
Bottom: 10%
Left: 6%
Right: 6%
```

The wooden frame is decorative and should not overlap important content.

## Slide Grid

Use a 12-column responsive grid.

Recommended layout patterns:

### Teacher Board Layout

```text
Left:
Main title and explanation

Right:
Diagram, doodle, or visual demo
```

### Lesson Map Layout

```text
Top:
Lesson title

Middle:
Main diagram

Bottom:
Teacher notes and jokes
```

### Blackboard Equation Layout

```text
Problem + Solution = Result
```

### Classroom Pinboard Layout

```text
Multiple paper notes pinned on the board
```

### Live Teaching Layout

```text
Content is revealed one chalk stroke at a time
```

Avoid placing more than 6 primary objects on one slide.

---

# 9. Slide Title Pattern

Every slide should have a lesson label.

Examples:

```text
LESSON 01
Masalah Informasi Internal
```

```text
LESSON 04
Obrolan Warkop
```

```text
FINAL EXAM
Kapan Kita Mulai?
```

Lesson labels should appear like:

- Chalk label
- Small paper tab
- Teacher-written corner note
- Stamped chapter marker

Example:

```html
<div class="lesson-label">LESSON 03</div>
<h1>Satu Platform, Enam Ruang</h1>
```

---

# 10. Blackboard Drawing Style

All decorative visuals should resemble hand-drawn chalk illustrations.

Use:

- Slightly imperfect lines
- Uneven borders
- Handwritten arrows
- Simple icon outlines
- Sketched circles
- Doodle stars
- Chalk underlines
- Small clouds
- Lightbulbs
- Question marks
- Boxes with uneven corners

Do not use polished 3D icons.

Do not use photorealistic classroom illustrations.

SVG icons should be converted visually into chalk by using:

```css
.chalk-icon {
  fill: none;
  stroke: currentColor;
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  filter: url(#chalkTexture);
}
```

---

# 11. Teacher Character Concept

A recurring teacher character may appear as a small guide.

The teacher should not dominate the presentation.

Recommended character style:

- Simple hand-drawn chalk silhouette
- Stick-figure teacher
- Glasses
- Pointer stick
- Rolled sleeves
- Slightly tired expression
- Coffee cup in one hand

The teacher can appear in:

- Opening slide
- Architecture explanation
- Google Sheets reveal
- Roadmap
- Closing slide

Possible teacher captions:

```text
“Perhatikan papan, bukan grup WhatsApp.”
```

```text
“Yang belakang jangan buka production database.”
```

```text
“Ini akan keluar di ujian audit.”
```

```text
“Database-nya Spreadsheet. Duduk dulu.”
```

The teacher must be represented as an original generic character.

---

# 12. Classroom Props

Use classroom props to add warmth and humor:

- Chalk tray
- Blackboard eraser
- Wooden ruler
- Teacher pointer
- Sticky notes
- Paper clips
- Binder clips
- Pinned paper
- Polaroid-style screenshots
- Exercise book paper
- Report cards
- Gold stars
- Detention notes
- Classroom bell
- Attendance sheet
- Fake test sheet
- “Homework” labels

Examples:

```text
HOMEWORK:
Publish one announcement without forwarding it manually.
```

```text
POP QUIZ:
Where is the latest HR policy?
```

```text
TEACHER'S NOTE:
Please verify business metrics before formal submission.
```

---

# 13. Content Components

## 13.1 Chalk Card

A chalk card is a hand-drawn container directly on the board.

Style:

- Transparent background
- Rough chalk border
- Slight rotation
- Small corner doodle

Use for:

- Feature summaries
- Benefits
- Statistics
- Small explanations

## 13.2 Pinned Paper Card

Use cream paper attached to the board.

Recommended paper colors:

```css
--paper-cream: #fff4cf;
--paper-pink: #ffd6e7;
--paper-blue: #d9efff;
--paper-green: #dbf5dd;
```

Use for:

- Announcement preview
- Marketplace cards
- Admin CMS mockups
- Action items
- Disclaimer notes

Paper style:

```css
.paper-card {
  background: var(--paper-cream);
  color: #302c28;
  box-shadow: 4px 7px 15px rgba(0,0,0,0.35);
  transform: rotate(-1deg);
}
```

## 13.3 Teacher Note

Small yellow sticky note for humor.

Examples:

```text
Teacher's note:
Finance likes the number Rp 0.
```

```text
Reminder:
Do not delete random spreadsheet columns.
```

## 13.4 Chalk Badge

Used for:

- Approved
- Pending
- Published
- Rp 0
- Real-time
- Anonymous

Badge style:

- Oval or rectangular chalk border
- Slight tilt
- Handwritten label

## 13.5 Report Card

Use for the value and savings slide.

Example:

```text
RUBRIK REPORT CARD

Information Distribution: A
Automation: A
Additional Cost: A+
Meeting Reduction: Still Under Investigation
```

## 13.6 Blackboard Formula

Use equations to summarize concepts.

Examples:

```text
Email + Apps Script + CMS = Pengumuman Otomatis
```

```text
Google Workspace + Existing Subscription = Rp 0
```

```text
One Spreadsheet + Two Apps = One Source of Truth
```

```text
Clear Information - Random Chat = Less Confusion
```

---

# 14. Navigation Design

## Bottom Chalk Tray Navigation

The navigation control should look like items on the chalk tray.

Controls:

- Previous slide
- Next slide
- Overview
- Sound
- Fullscreen
- Corporate mode

Icons should resemble:

- Chalk arrows
- Small classroom buttons
- Chalk pieces
- Eraser-shaped controls

The active progress indicator may look like:

- A chalk line gradually drawn along the tray
- A row of colored chalk pieces
- A classroom attendance line

## Progress Bar

Preferred concept:

A long chalk line across the bottom.

As progress increases, the chalk line is drawn from left to right.

At section boundaries, show small icons:

- Bell
- Book
- Lightbulb
- Gear
- Star
- Graduation cap

## Slide Counter

Style:

```text
PAGE 05 / 18
```

or:

```text
LESSON 05 OF 18
```

Place in the upper-right corner.

---

# 15. Animation Direction

Animations should create the illusion of a teacher writing and teaching live.

## Primary Animation Types

### Chalk Write

Used for:

- Titles
- Main labels
- Important statements

Behavior:

- SVG path drawing
- Slight chalk dust
- Letter-by-letter reveal
- Natural timing variation

### Chalk Underline

Animate an underline after the sentence appears.

### Circle Highlight

Draw a chalk circle around important values.

### Teacher Pointer

A ruler or pointer slides toward important content.

### Erase Transition

Previous content is erased before moving to the next lesson.

Use:

- Chalk dust cloud
- Horizontal eraser wipe
- Partial residual marks

### Paper Drop

Pinned notes fall or slide onto the board.

### Stamp Impact

Use for:

- Approved
- Published
- Rp 0
- Completed
- Ready

### Sticky Note Peel

Sticky notes peel or flip to reveal additional information.

### Doodle Pop

Small doodles appear with a hand-drawn bounce.

---

# 16. Slide Transition System

Use 3–4 transition families only.

Do not invent a different transition for every slide.

## Transition A — Blackboard Erase

Best for:

- Section changes
- Large topic changes

Animation:

1. Eraser crosses the screen.
2. Chalk dust appears.
3. New content is written.

## Transition B — Board Slide

The current blackboard panel slides sideways, revealing another board.

Best for:

- Sequential feature slides
- Architecture layers
- Roadmap

## Transition C — Page Pin

A large paper page is pinned onto the board.

Best for:

- Announcement preview
- CMS demo
- Marketplace
- Statistics

## Transition D — Classroom Bell

A bell rings softly.

The slide changes using a quick zoom and chalk redraw.

Best for:

- Opening
- Agenda
- Closing

---

# 17. Gimmick Design Rules

Gimmicks should feel like part of the classroom.

They must not appear as random web effects.

## Approved Gimmicks

### 17.1 Flying Chalk Dust

Use after:

- Big title reveal
- Stamp animation
- Fast board erase

### 17.2 Chalk Confetti

Confetti should resemble:

- Tiny chalk fragments
- Doodle stars
- Mini paper notes
- Colored chalk dust
- Gold classroom stars

### 17.3 Classroom Bell

Use:

- At the presentation opening
- At section changes
- Before the final slide

Do not use repeatedly on every slide.

### 17.4 Pop Quiz Overlay

Occasionally display:

```text
POP QUIZ!

Where does official information live today?
```

Audience options:

- Email
- WhatsApp
- Physical board
- All of the above, unfortunately

### 17.5 Teacher Correction

Cross out old text and replace it.

Example:

```text
Send another email
```

becomes:

```text
Publish through RuBrik
```

### 17.6 Gold Star Achievement

Achievements should look like classroom reward stickers.

Examples:

- Single Source of Truth
- Zero Additional Cost
- Inbox Survivor
- Spreadsheet Wizard
- Warkop Moderator
- Automation Graduate

### 17.7 Detention Mode

Secret mode triggered by Konami code.

Screen becomes dark red.

Text:

```text
DETENTION MODE ACTIVATED

Reason:
You edited production data without backup.
```

### 17.8 Teacher's Red Pen

Use a red chalk or red marker animation to correct a statement.

Example:

```text
“Informasi pasti sudah dibaca semua orang.”
```

Red correction:

```text
“Bold assumption.”
```

### 17.9 Chalk Piece Cursor

Custom cursor shaped like a short chalk stick.

Cursor changes colors based on hover area.

### 17.10 Eraser Button

A draggable eraser can erase decorative doodles.

It must never erase important presentation content.

---

# 18. Slide-Specific Visual Direction

## Slide 1 — Opening

Visual:

- Empty blackboard
- Classroom lights turn on
- Chalk moves by itself
- Title is written live
- Teacher character enters from the side
- Classroom bell rings

Main title:

```text
RuBrik
Ruang Pabrik
```

Subtitle:

```text
Mading Digital Internal Pabrik
```

Button:

```text
MULAI PELAJARAN
```

Small note:

```text
Attendance is optional.
Attention is strongly recommended.
```

## Slide 2 — Problem

Show messy chalk notes everywhere:

- Email
- WhatsApp
- Physical notice board
- Old PDF
- Random links

Teacher writes:

```text
PROBLEM:
Informasi ada di mana-mana,
tapi tidak ada yang tahu versi yang benar.
```

Use red circles and arrows.

## Slide 3 — Six Rooms

Draw one big RuBrik circle in the center.

Draw six colorful chalk branches.

Each branch uses its own chalk color.

## Feature Slides

Each feature should feel like a different classroom lesson.

Examples:

- Pengumuman = pinned paper board
- Koran Harian = chalk newspaper wall
- Warkop = speech bubbles and coffee doodles
- Lapak Jualan = marketplace flashcards
- Agenda = classroom timetable
- Factory Wire = running chalk ticker

## Architecture Slide

Use a large teacher diagram.

Show:

```text
LANDING
   ↓
SHARED SPREADSHEET
   ↑
CMS
```

The teacher pointer follows the flow.

Add:

```text
This will be on the exam.
```

## Google Sheets Slide

Start with:

```text
DATABASE
```

Pause.

Erase it.

Write:

```text
GOOGLE SHEETS
```

Then show audience reaction doodles.

Follow with:

```text
Please remain calm.
```

## Savings Slide

Use a classroom mathematics lesson.

Example:

```text
Existing Google Workspace
+ Apps Script
+ Google Sheets
-------------------------
Rp 0 Additional Platform Cost
```

Circle `Rp 0` using green chalk.

## Roadmap

Use a classroom timetable.

Columns:

- W1
- W2
- W3
- W4+

Each week appears like a school schedule block.

## Closing

Blackboard becomes clean and empty.

Write slowly:

```text
RuBrik siap berjalan.
```

Pause.

Then:

```text
Kapan kita mulai?
```

When CTA is clicked:

- Colored chalk explodes
- Gold stars appear
- Paper planes fly
- Classroom bell rings
- Blackboard fills with celebratory doodles
- Confetti falls
- Final text appears:

```text
RuBrik
Informasi Sekarang Punya Rumah.
```

---

# 19. Interactive Modes

## Fun Classroom Mode

Default mode.

Features:

- Colorful chalk
- Doodles
- Jokes
- Classroom sounds
- Teacher character
- Fun transitions

## Corporate Mode

Optional toggle.

Changes:

- Use mostly white, blue, and yellow chalk
- Hide most jokes
- Hide teacher character
- Reduce decorative doodles
- Disable secret gimmicks
- Use formal wording
- Use simple fade transitions
- Keep the blackboard style

Toggle label:

```text
SERIOUS CLASS MODE
```

When disabled:

```text
FUN CLASS RESTORED
```

## Focus Mode

Hide:

- Navigation labels
- Small jokes
- Decorative props

Keep:

- Slide content
- Progress
- Main diagram

Use keyboard shortcut:

```text
Z
```

---

# 20. Sound Design

Sound must be optional.

Default state:

```text
Muted until user interaction.
```

Allowed sounds:

- Chalk writing
- Blackboard eraser
- Classroom bell
- Paper pin
- Rubber stamp
- Teacher pointer tap
- Applause
- Final celebration

Sound rules:

- Keep volume low
- Never autoplay before user interaction
- No looping classroom ambience
- Avoid annoying high-frequency chalk squeaks
- All sound must have a visible mute toggle

---

# 21. Accessibility

The design must remain readable and usable.

Requirements:

- Minimum contrast ratio of 4.5:1
- Body text should not rely only on chalk texture
- Important states must not rely only on color
- All controls must have accessible labels
- Keyboard navigation must work
- Focus states must be clearly visible
- Reduced motion must be respected
- Sound must not contain essential information
- Decorative SVG must use `aria-hidden="true"`
- Interactive elements require clear focus outlines

Reduced motion behavior:

- Replace chalk drawing with fade-in
- Disable flying dust
- Disable paper flight
- Disable parallax
- Reduce confetti
- Use simple slide transitions

---

# 22. Responsive Behavior

## Desktop Presentation

Primary target:

```text
1920 × 1080
1366 × 768
```

Use full layout and all visual details.

## Tablet

- Reduce decorative props
- Keep two-column layout if possible
- Increase touch target size
- Allow swipe navigation

## Mobile

Mobile is not the primary presentation target.

However:

- Use single-column layout
- Hide persistent chalk tray decorations
- Simplify animations
- Keep essential content readable
- Enable vertical scroll inside the active slide if required
- Keep next and previous buttons visible

---

# 23. Spacing System

Use an 8-point spacing system.

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-7: 48px;
--space-8: 64px;
--space-9: 96px;
```

Cards should have generous padding.

Recommended:

```css
padding: clamp(20px, 2vw, 40px);
```

Avoid cramped blackboard content.

Empty space is part of the visual storytelling.

---

# 24. Chalk Border System

Create reusable chalk borders.

## Thin Chalk Border

Use for small cards.

```css
border: 2px solid rgba(244, 241, 223, 0.72);
```

## Rough Double Border

Use for important summary boxes.

## Dashed Chalk Border

Use for:

- Draft
- Pending
- Optional feature
- Sample content

## Circled Highlight

Use for:

- Rp 0
- 100% Google Workspace
- 6 features
- 10 sheets
- 14-day agenda

---

# 25. Illustration Rules

Illustrations should follow these rules:

- Maximum 3 colors per illustration
- Hand-drawn stroke
- No photorealistic shadows
- No generic stock image look
- Use simple shapes
- Use expressive but clean doodles
- Keep human characters culturally neutral and office-friendly
- Keep illustration detail low enough for projection readability

Photography may be used only as:

- Pinned paper preview
- Polaroid-style product screenshot
- CMS mockup
- Announcement example

Photography must not become the main background.

---

# 26. Data Visualization

Charts should resemble chalk diagrams.

Recommended chart types:

- Hand-drawn bar chart
- Chalk donut chart
- Classroom score board
- Before-vs-after race
- Report card table
- Timeline written on the board
- Formula breakdown
- Meter drawn with chalk

Avoid:

- Complex dashboards
- Tiny legends
- 3D charts
- Detailed axes
- More than 5 data categories in one chart

Example:

```text
OLD PROCESS     ███████████████ 90 min
RUBRIK          ██              <10 min
```

Use animated chalk strokes to draw bars.

---

# 27. Humor Rules

Humor should support the story.

Good humor:

- Office process jokes
- Meeting jokes
- Spreadsheet jokes
- Email overload jokes
- Mild corporate sarcasm
- Technical translation jokes

Avoid:

- Personal insults
- HR insults
- Management insults
- Political jokes
- Sensitive workplace topics
- Offensive stereotypes
- Jokes that undermine the actual product

Humor density:

```text
1 main joke per slide
1–2 tiny background jokes maximum
```

Do not turn every sentence into a joke.

---

# 28. Sample Blackboard Microcopy

Use these phrases throughout the presentation:

```text
“Perhatikan papan. Ini bukan forwarded message.”
```

```text
“Informasi HR seharusnya bukan urban legend.”
```

```text
“Satu sumber kebenaran. Bukan lima versi PDF.”
```

```text
“Powered by Google Workspace.”
```

```text
“Funded by existing subscription.”
```

```text
“Database-nya Spreadsheet. Jangan panik.”
```

```text
“Good ideas finally have an address.”
```

```text
“Anonymous, but not lawless.”
```

```text
“Finance likes this number.”
```

```text
“Please verify this metric before the final exam.”
```

```text
“Class dismissed. Deployment begins.”
```

---

# 29. CSS Token Recommendation

```css
:root {
  --board-black: #101817;
  --board-dark-green: #132522;
  --board-green: #19342f;
  --board-light: #23463f;

  --chalk-white: #f4f1df;
  --chalk-yellow: #f4dc72;
  --chalk-pink: #ff91b8;
  --chalk-blue: #79c7ff;
  --chalk-green: #8ce0a3;
  --chalk-orange: #ffad66;
  --chalk-red: #ff7474;

  --wood-dark: #3b2418;
  --wood-mid: #68422c;
  --wood-light: #8a5d3c;

  --paper-cream: #fff4cf;
  --paper-pink: #ffd6e7;
  --paper-blue: #d9efff;
  --paper-green: #dbf5dd;

  --ink-dark: #302c28;

  --font-display: "Fredericka the Great", cursive;
  --font-hand: "Patrick Hand", cursive;
  --font-code: "IBM Plex Mono", monospace;

  --radius-paper: 3px;
  --radius-card: 12px;

  --shadow-paper: 4px 7px 15px rgba(0,0,0,0.35);
  --shadow-frame: inset 0 0 80px rgba(0,0,0,0.5);
}
```

---

# 30. Recommended Reusable Components

Create reusable CSS and JavaScript components:

```text
BlackboardSlide
LessonLabel
ChalkTitle
ChalkParagraph
ChalkCard
PinnedPaper
StickyNote
TeacherNote
ChalkDiagram
ChalkArrow
TeacherPointer
ReportCard
PopQuiz
GoldStarBadge
ChalkProgress
BoardEraser
ClassroomBell
ChalkConfetti
CorporateModeToggle
SoundToggle
SlideOverview
```

JavaScript animation helpers:

```javascript
writeChalkText()
drawChalkLine()
circleImportantText()
eraseBoard()
dropPinnedPaper()
stampApproval()
showTeacherNote()
launchChalkConfetti()
ringClassroomBell()
activateDetentionMode()
```

---

# 31. Performance Rules

The presentation must feel smooth.

Requirements:

- Prefer CSS transforms and opacity
- Avoid excessive DOM nodes
- Reuse chalk particles
- Limit simultaneous animated doodles
- Lazy-load large assets
- Compress audio files
- Pause animations on inactive slides
- Do not animate hidden slides
- Use `requestAnimationFrame`
- Avoid large canvas rendering when unnecessary

Target:

```text
60 FPS on modern laptops
Acceptable on 1366 × 768 office laptops
```

---

# 32. Final Design Principle

Every slide should answer three questions:

```text
1. What is being taught?
2. What should the audience remember?
3. What visual joke or interaction helps them remember it?
```

The blackboard aesthetic is not decoration only.

It should support the narrative:

- Problems are written and crossed out.
- Solutions are explained visually.
- Architecture is taught like a lesson.
- Metrics are solved like equations.
- The roadmap is presented as a class schedule.
- The closing feels like graduation.

The final feeling should be:

> “This presentation taught us something, made us laugh, and somehow made Google Sheets look impressive.”

---

# 33. Final Closing Visual

The final blackboard should contain:

```text
RuBrik
Informasi Sekarang Punya Rumah.
```

Around the text:

- Colored chalk stars
- Google Workspace-colored doodles
- Gold achievement stickers
- Small paper planes
- Green approval check mark
- A teacher note:

```text
FINAL SCORE: READY TO DEPLOY
```

Final button:

```text
AKTIFKAN RUBRIK
```

On click:

- Classroom bell rings
- Blackboard lights brighten
- Massive colorful chalk confetti launches
- Paper notes fly across the board
- A gold star appears
- Final message:

```text
CLASS DISMISSED.
DEPLOYMENT BEGINS.
```

---

# 34. Chalk-Draw Rendering System

The presentation must not merely use a chalk font.

The visual language must simulate **real chalk being drawn live on a blackboard**.

Every important visual element should appear as if it was created by hand during the presentation:

- Titles are written stroke by stroke
- Arrows are drawn from source to destination
- Boxes are sketched around content
- Important phrases are circled by hand
- Numbers are underlined after they appear
- Diagrams are assembled line by line
- Mistakes can be crossed out and corrected
- Previous lessons can be erased with a board eraser
- Tiny chalk dust particles appear during strong strokes

The desired result is:

> “The board is alive and the teacher is drawing the explanation in real time.”

The chalk-draw system must feel natural, imperfect, and intentional.

It must never look like a generic typewriter animation with a chalk font.

---

# 35. Chalk Stroke Anatomy

Every chalk stroke should combine several visual layers.

## 35.1 Primary Stroke

The main readable line.

Recommended properties:

```css
.chalk-stroke {
  fill: none;
  stroke: currentColor;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
}
```

## 35.2 Secondary Grain

A faint duplicate path placed slightly beside the main stroke.

Purpose:

- Simulate chalk texture
- Prevent lines from looking digitally perfect
- Add visible grain on large screens

```css
.chalk-stroke-grain {
  fill: none;
  stroke: currentColor;
  stroke-width: 1.2;
  stroke-linecap: round;
  opacity: 0.25;
  transform: translate(1px, -0.5px);
}
```

## 35.3 Broken Edge

Use an SVG mask or filter to slightly break the edge of the stroke.

Do not make the line unreadable.

Recommended intensity:

```text
Headlines: Medium texture
Diagrams: Light texture
Small labels: Very light texture
Body text: Almost no texture
```

## 35.4 Chalk Dust

Small particles may appear near the active drawing point.

Dust rules:

- Maximum 8–16 particles per drawing action
- Low opacity
- Very short lifetime
- No dust on every letter
- Use only for titles, circles, stamps, and large diagrams

---

# 36. Required Chalk-Draw Techniques

The implementation should use multiple techniques depending on the content.

## 36.1 SVG Path Drawing

Use for:

- Arrows
- Circles
- Underlines
- Connectors
- Architecture diagrams
- Feature icons
- Decorative doodles

Animate with:

```css
.draw-path {
  stroke-dasharray: var(--path-length);
  stroke-dashoffset: var(--path-length);
  animation: drawPath var(--draw-duration) ease-out forwards;
}

@keyframes drawPath {
  to {
    stroke-dashoffset: 0;
  }
}
```

Path length should be calculated using:

```javascript
const length = path.getTotalLength();

path.style.setProperty("--path-length", length);
path.style.strokeDasharray = length;
path.style.strokeDashoffset = length;
```

## 36.2 Handwriting Reveal

Use for:

- Main slide titles
- Key statements
- Short teacher notes
- Formulas
- Closing message

Preferred approach:

- Use pre-built SVG text paths when available
- Otherwise reveal text by words or short phrases
- Add an animated chalk tip moving along the reveal
- Avoid character-by-character animation for long paragraphs

## 36.3 Rough.js-Style Sketching

Use a hand-drawn rendering library such as Rough.js when appropriate.

Recommended for:

- Rough boxes
- Circles
- Wavy arrows
- Bar charts
- Flowchart nodes
- Timelines
- Highlight marks

If Rough.js is unavailable, create an internal fallback using:

- Double borders
- Slightly offset pseudo-elements
- Uneven SVG paths
- Randomized control points

The presentation must still function without external libraries.

## 36.4 CSS Mask Reveal

Use for:

- Large chalk words
- Illustrations
- Blackboard formulas
- Decorative brush strokes

A horizontal rectangular wipe is not enough.

The reveal mask should have:

- Uneven edge
- Slight vertical jitter
- Soft granular texture

## 36.5 Canvas Chalk Brush

Canvas may be used only for:

- Decorative chalk writing
- Freehand presenter doodles
- Chalk particles
- Eraser interaction

Do not render all slide text using canvas because:

- Accessibility suffers
- Scaling becomes difficult
- Text selection is lost
- Screen readers cannot access it

---

# 37. Chalk Writing Animation Sequence

Every major drawing animation should follow this rhythm:

```text
1. Chalk touches the board
2. Short pause
3. Main stroke is drawn
4. Tiny dust follows the active point
5. Stroke settles
6. Small underline, circle, or tick appears
```

Recommended timing:

```text
Small label: 250–450 ms
Short word: 400–700 ms
Headline: 700–1,500 ms
Arrow: 400–800 ms
Diagram block: 500–900 ms
Full diagram sequence: 2,000–4,000 ms
```

Never animate a full paragraph as handwriting.

Large content should reveal in groups:

```text
Title
→ Main diagram
→ Supporting labels
→ Teacher annotation
```

---

# 38. Chalk Drawing Tool Cursor

During drawing animations, show a small chalk tip near the active drawing point.

The chalk tip should:

- Match the active stroke color
- Rotate according to movement direction
- Leave a small dust trail
- Disappear after the stroke completes
- Never block important text

Suggested element:

```html
<div class="chalk-tip" aria-hidden="true"></div>
```

Suggested dimensions:

```css
.chalk-tip {
  width: 18px;
  height: 7px;
  border-radius: 3px;
  background: currentColor;
  box-shadow:
    0 0 2px currentColor,
    2px 1px 3px rgba(255,255,255,0.15);
  pointer-events: none;
  position: fixed;
  z-index: 100;
}
```

The tip position can be synchronized using:

```javascript
path.getPointAtLength(progress * totalLength)
```

---

# 39. Chalk Line Styles

Create reusable line variants.

## 39.1 Straight Teacher Line

Used for:

- Architecture connectors
- Formal diagrams
- Timelines

Appearance:

- Mostly straight
- Small handmade imperfection
- Light grain

## 39.2 Wobbly Chalk Line

Used for:

- Humor notes
- Informal emphasis
- Feature relationships
- Doodles

Appearance:

- Slight wave
- Uneven pressure
- Two-pass stroke

## 39.3 Double Chalk Line

Used for:

- Final totals
- Important results
- Section boundaries

Example:

```text
Rp 0 Additional Cost
====================
```

## 39.4 Dashed Chalk Line

Used for:

- Pending flows
- Optional steps
- Draft states
- Future roadmap items

## 39.5 Red Correction Line

Used for:

- Cross-outs
- Wrong assumptions
- Old workflow
- Rejected ideas

The red correction line should be drawn quickly with a strong stroke.

---

# 40. Hand-Drawn Container Rules

Normal rectangular UI boxes should be avoided.

Use containers that look drawn on the board.

## 40.1 Rough Rectangle

Use for:

- Feature cards
- Architecture layers
- Summary blocks

The outline should have two slightly different passes.

```css
.rough-box::before,
.rough-box::after {
  content: "";
  position: absolute;
  inset: 0;
  border: 2px solid currentColor;
  pointer-events: none;
}

.rough-box::before {
  transform: rotate(-0.18deg);
  opacity: 0.8;
}

.rough-box::after {
  inset: 2px -1px -1px 1px;
  transform: rotate(0.12deg);
  opacity: 0.32;
}
```

## 40.2 Chalk Circle

Use for:

- Statistics
- Key words
- Important numbers
- Audience poll results

Circles should not be perfectly round.

Use an SVG path or Rough.js ellipse.

## 40.3 Cloud Bubble

Use for:

- Warkop comments
- Teacher jokes
- System thoughts
- Questions

## 40.4 Bracket Grouping

Use hand-drawn brackets to group related information.

Examples:

```text
{ Six Main Features }
```

```text
[ Google Workspace Toolchain ]
```

---

# 41. Chalk Icons and Doodles

All key icons should look hand-drawn.

Recommended doodle library:

- Envelope
- Newspaper
- Coffee cup
- Store awning
- Calendar
- Scrolling ticker
- Spreadsheet grid
- Cloud
- Gear
- Bell
- Lightbulb
- Question mark
- Check mark
- Warning triangle
- Teacher pointer
- Paper plane

Rules:

- Use outline only
- Use round line caps
- Keep each icon under 12 main paths
- Avoid excessive detail
- Use one dominant chalk color
- Draw icon paths sequentially
- Slight overshoot is allowed

Doodles may contain tiny animation loops:

- Steam from coffee cup
- Bell gently swinging
- Lightbulb flickering once
- Paper plane moving slightly
- Check mark drawing itself

Do not use constant looping animation on all icons.

---

# 42. Chalk Diagram Construction

Architecture and workflow diagrams should be built live.

## Required Construction Order

```text
1. Main nodes are sketched
2. Node titles are written
3. Connecting arrows are drawn
4. Data packets move through arrows
5. Teacher annotation appears
6. Important node is circled
```

Example for email integration:

```text
[ HR EMAIL ]
      ↓
[ APPS SCRIPT ]
      ↓
[ CMS DRAFT ]
      ↓
[ ADMIN REVIEW ]
      ↓
[ PUBLISHED ]
```

Visual behavior:

- Each box is drawn with two rough strokes
- Labels appear after the box completes
- Arrows are drawn from top to bottom
- A tiny envelope doodle travels along the flow
- Final `PUBLISHED` box receives a green chalk check mark

---

# 43. Chalk Text Highlight System

Important text should be emphasized using drawn annotations.

## Available Highlights

### Underline

Use for:

- Main takeaway
- Product value
- Technical keyword

### Double Underline

Use only for:

- Rp 0
- 100% Google Workspace
- Final CTA
- Key verified result

### Circle

Use for:

- Numbers
- Answers
- “Single Source of Truth”
- Important module

### Box

Use for:

- Warnings
- Definitions
- Disclaimer
- Teacher notes

### Arrow Callout

Use for:

- Jokes
- Clarification
- Translation between technical and business language

### Red Cross-Out

Use for:

- Old process
- Wrong assumptions
- Repeated manual tasks

Example:

```text
Send another blast email
```

Then draw a red cross-out.

Write below it:

```text
Publish once through RuBrik
```

---

# 44. Chalk Eraser Interaction

The board eraser should be treated as an actual transition device.

## Eraser Behavior

- Moves across the board
- Removes visual content gradually
- Creates subtle chalk dust
- Leaves a faint ghost of previous writing
- Clears only the current transition layer

Implementation ideas:

- CSS clipping mask
- SVG mask
- Canvas overlay
- Animated pseudo-element

## Eraser Direction Variants

```text
Left → Right
Right → Left
Top → Bottom
Circular spot erase
Teacher hand erase
```

Use only one direction per transition.

Do not use eraser transitions for rapid navigation because they become slow and annoying.

When the user jumps directly between slides:

- Use a short fade
- Skip the full eraser animation

---

# 45. Chalk Dust Particle Specification

Chalk dust must be subtle.

Particle types:

- Tiny round specks
- Short white streaks
- Colored powder dots
- Light translucent cloud

Recommended particle values:

```javascript
{
  count: 12,
  minSize: 1,
  maxSize: 4,
  lifetime: 500,
  gravity: 0.08,
  opacity: 0.22
}
```

For final celebration:

```javascript
{
  count: 180,
  colors: [
    "#f4f1df",
    "#f4dc72",
    "#ff91b8",
    "#79c7ff",
    "#8ce0a3",
    "#ffad66"
  ],
  lifetime: 5000
}
```

Avoid using large blurry smoke effects.

The audience should still be able to read the slide.

---

# 46. Chalk Drawing Triggers

Drawing animations should be triggered intentionally.

## On Slide Enter

Draw:

- Lesson label
- Main title
- Main visual
- Primary annotation

## On Presenter Advance

Use one additional key press to reveal:

- Supporting detail
- Teacher note
- Diagram arrow
- Final takeaway

## On Hover

Only draw small decorative effects:

- Underline
- Tick mark
- Tiny icon
- Highlight circle

Do not redraw full text on hover.

## On Click

Allow interactive drawing for:

- Poll selection
- Approve/reject stamp
- Feature activation
- Architecture mode toggle
- Final CTA

---

# 47. Step Reveal System

Each slide should support staged teaching.

Example slide progression:

```text
Step 1:
Show the problem title.

Step 2:
Draw Email, WhatsApp, and physical notice board.

Step 3:
Draw arrows showing information chaos.

Step 4:
Circle “No Single Source of Truth”.

Step 5:
Reveal the RuBrik solution.
```

Recommended HTML structure:

```html
<section class="slide" data-slide="2">
  <div class="step" data-step="1">...</div>
  <div class="step" data-step="2">...</div>
  <div class="step" data-step="3">...</div>
</section>
```

State classes:

```css
.step {
  opacity: 0;
  visibility: hidden;
}

.step.is-visible {
  opacity: 1;
  visibility: visible;
}
```

Drawing actions must start only when their step becomes visible.

---

# 48. Chalk Draw Accessibility

Chalk animations must never block access to information.

Requirements:

- Final text must exist in the DOM before animation
- Screen readers should not wait for drawing completion
- Important text must have sufficient contrast
- SVG diagrams require accessible titles or descriptions
- Reduced-motion users should receive immediate content
- Drawing sound is decorative only
- Interactive drawing elements must remain keyboard accessible

Reduced-motion override:

```css
@media (prefers-reduced-motion: reduce) {
  .draw-path {
    stroke-dashoffset: 0 !important;
    animation: none !important;
  }

  .chalk-tip,
  .chalk-dust {
    display: none !important;
  }

  .handwriting-reveal {
    clip-path: none !important;
    opacity: 1 !important;
  }
}
```

---

# 49. Chalk Draw Performance Budget

Do not draw everything simultaneously.

Per slide recommended limits:

```text
Maximum animated SVG paths: 35
Maximum active dust particles: 40
Maximum active chalk tips: 1
Maximum looping doodles: 2
Maximum canvas layers: 1
Maximum full-board eraser effects: 1
```

Animations on inactive slides must stop.

Use:

```javascript
document.visibilityState
IntersectionObserver
requestAnimationFrame
animation-play-state
```

Pre-calculate SVG path lengths when the slide loads.

Do not recalculate them every animation frame.

---

# 50. Implementation Fallback Rules

The design must remain usable when advanced drawing effects fail.

Fallback hierarchy:

```text
1. SVG path drawing
2. CSS mask reveal
3. Word-by-word fade
4. Immediate static display
```

If JavaScript is disabled:

- All text remains visible
- All diagrams appear statically
- Navigation may fall back to anchor links
- No content is hidden permanently

If Rough.js fails:

- Use static SVG outlines
- Use CSS double-border rough boxes

If audio fails:

- Continue silently
- Do not show an error modal

---

# 51. Recommended Chalk Draw Utility API

Create a reusable internal animation utility.

```javascript
const ChalkDraw = {
  write(element, options = {}),
  drawPath(path, options = {}),
  drawBox(element, options = {}),
  underline(element, options = {}),
  circle(element, options = {}),
  crossOut(element, options = {}),
  pointTo(from, to, options = {}),
  dust(x, y, options = {}),
  erase(container, options = {}),
  stamp(element, label, options = {}),
  clear(container)
};
```

Example usage:

```javascript
await ChalkDraw.write(title, {
  duration: 900,
  color: "var(--chalk-yellow)"
});

await ChalkDraw.drawPath(architectureArrow, {
  duration: 650
});

await ChalkDraw.circle(costValue, {
  color: "var(--chalk-green)",
  duration: 500
});
```

The API should support promises so animations can run sequentially.

---

# 52. Example Chalk Drawing Sequence

Example for the Google Sheets slide:

```javascript
async function playGoogleSheetsLesson() {
  await ChalkDraw.write(
    document.querySelector("#database-label"),
    { duration: 550 }
  );

  await pause(350);

  await ChalkDraw.crossOut(
    document.querySelector("#database-label"),
    {
      color: "var(--chalk-red)",
      duration: 280
    }
  );

  await ChalkDraw.write(
    document.querySelector("#sheets-label"),
    {
      color: "var(--chalk-green)",
      duration: 900
    }
  );

  await ChalkDraw.write(
    document.querySelector("#remain-calm"),
    {
      color: "var(--chalk-yellow)",
      duration: 500
    }
  );

  await ChalkDraw.circle(
    document.querySelector("#ten-sheets"),
    {
      color: "var(--chalk-blue)",
      duration: 450
    }
  );
}
```

Expected visual result:

```text
DATABASE
   ×

GOOGLE SHEETS

Please remain calm.

10 SHEETS
```

---

# 53. Interactive Free-Draw Mode

Add an optional presenter free-draw mode.

Keyboard shortcut:

```text
D
```

Behavior:

- Cursor becomes a chalk piece
- Presenter can draw over the active slide
- Color palette appears near the bottom
- Eraser becomes available
- Drawing can be cleared
- Drawings do not modify the source slide

Available colors:

- White
- Yellow
- Pink
- Blue
- Green
- Red

Controls:

```text
D       Toggle drawing mode
1–6     Select chalk color
E       Eraser
C       Clear presenter drawing
Ctrl+Z  Undo last stroke
```

Drawing mode must use a transparent canvas overlay.

It should be disabled automatically when changing slides unless presenter chooses to preserve notes.

Never intercept navigation keys while the user is not in drawing mode.

---

# 54. Blackboard Screenshot Moment

Provide one special “freeze board” gimmick.

Keyboard shortcut:

```text
P
```

Behavior:

- Current board pauses
- Animated content freezes
- Decorative UI hides
- A small label appears:

```text
BOARD CAPTURE MODE
```

Purpose:

- Allows presenter to take a clean screenshot
- Keeps chalk drawings visible
- Hides slide controls
- Hides cursor
- Hides sound controls

Press `P` again to restore presentation mode.

---

# 55. Final Chalk-Draw Acceptance Checklist

Before considering the design complete, verify:

- Main titles feel handwritten, not typed
- Arrows visibly draw from origin to destination
- Circles are intentionally imperfect
- Rough boxes use at least two irregular strokes
- Important numbers receive chalk emphasis
- Architecture is constructed sequentially
- Old processes can be crossed out
- Eraser transitions leave subtle chalk ghosts
- Dust is visible but never distracting
- Drawing animations stop on inactive slides
- Reduced-motion mode works
- Static fallback remains readable
- Free-draw presenter mode works
- The final slide uses the richest chalk animation
- Massive confetti contains chalk fragments and doodle shapes
- The presentation still feels professional and not like a kindergarten app

The final quality bar is:

> “It should look like a gifted teacher, an illustrator, and a frontend engineer hijacked the same blackboard.”

