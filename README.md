# RuBrik — Ruang Pabrik Interactive Presentation

RuBrik is a cinematic, interactive HTML presentation for **“RuBrik — Ruang Pabrik”**, an internal factory digital notice board and employee collaboration platform built entirely on Google Workspace.

The deck uses a fun industrial factory control-room style with tasteful office-friendly humor, motion, keyboard navigation, slide overview, presenter notes, sound toggle, corporate mode, confetti, and multiple interactive demos.

## How to Run

Open `index.html` directly in a modern browser. No backend, build process, or package installation is required.

For the most reliable local testing, you may serve the folder with a static server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Keyboard Controls

| Key | Action |
|---|---|
| Arrow Right / Page Down / Space | Next slide |
| Arrow Left / Page Up | Previous slide |
| Home | First slide |
| End | Final slide |
| Escape | Toggle slide overview |
| F | Toggle fullscreen |
| M | Toggle sound |
| N | Toggle private speaker notes |
| A | Applause/confetti shortcut |
| Number keys | Jump to a specific slide number |
| Konami code | Activates Overtime Mode |

Mouse wheel navigation is debounced to prevent accidental multi-slide skipping. Touch devices support swipe navigation.

## Fullscreen Instructions

Press `F` or click the `⛶` control in the bottom-right presenter controls. Browser fullscreen permission may require user interaction first.

## How to Disable Sounds

Press `M` or click the `Sound On/Sound Off` button in the top HUD. Sounds are generated with Web Audio and are intentionally subtle.

## How to Edit Slide Content

Slide markup lives in `index.html`. Each slide is a `<section class="slide">` with metadata attributes:

```html
<section class="slide" data-section="FITUR" data-title="Feature Control Panel" data-notes="Presenter note here">
```

Edit visible text directly inside the corresponding slide section.

## How to Add or Remove Slides

1. Add or remove a `<section class="slide">` in `index.html`.
2. Keep the first slide marked with `class="slide active"`.
3. The JavaScript automatically rebuilds the progress bar, slide counter, and overview from the slide list.
4. If you add custom interactions, place them in `script.js`.

## How to Customize Colors

Colors are controlled by CSS custom properties at the top of `styles.css`:

```css
:root {
  --charcoal: #111616;
  --yellow: #f6c542;
  --orange: #ff8a2a;
}
```

Change these variables to adjust the theme globally.

## How to Replace Sample Content

Sample Warkop aliases, marketplace cards, calendar events, ticker text, and poll choices are harmless presentation samples. Replace them in `index.html` with approved company-safe content before a formal presentation.

## Browser Compatibility

Recommended browsers:

- Chrome / Edge latest
- Firefox latest
- Safari latest

The presentation uses standard HTML, CSS, and vanilla JavaScript. If Web Audio or Fullscreen APIs are unavailable, the deck still works without those enhancements.

## Troubleshooting

- **Fonts do not load:** the deck falls back to system fonts.
- **Fullscreen does not activate:** click inside the page first, then press `F`.
- **No sound:** check browser audio policy and the RuBrik sound toggle.
- **Animations feel too much:** enable OS-level “reduced motion” or use Corporate Mode.
- **Slide content too large:** present at 16:9 and use browser zoom at 90–100%.

## Recommended Presentation Resolution

Best experience: **1920×1080**. Tested layout target: **1366×768** and larger 16:9 laptop/projector screens.
