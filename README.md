# RuBrik Wildlife Park — The Information Zoo

RuBrik Wildlife Park is an interactive HTML presentation for **RuBrik — Ruang Pabrik**, a digital internal factory bulletin board built on Google Workspace. The deck turns each RuBrik feature into a professional zoo habitat so HR, Change Management, and management can tour the product as a modern information park.

## How to Run

Open `index.html` directly in a modern browser. There is no backend, install step, or build process.

## Navigation Controls

- Next / previous: Arrow Left, Arrow Right, Page Up, Page Down, Spacebar
- First / last slide: Home, End
- Zoo map overview: Escape or the **Map** button
- Direct navigation: number keys `1`–`9`, and `0` for slide 10
- Swipe: left / right on touch devices
- Mouse wheel: debounced slide navigation
- Pop quiz: `Q`

## Fullscreen Control

Press `F` or click **Fullscreen**. Press `F` again or use the browser fullscreen escape control to exit.

## Sound Control

Sound is muted before interaction. Click **ENTER THE PARK** or the **Sound** button to enable soft, low-volume presentation tones. Sound is decorative only; no content depends on audio.

## Management Tour Mode

Enable **Management Tour** in the top controls to hide most jokes, reduce motion, and keep the zoo identity in a more formal presentation mode. Disable it to restore the playful wildlife layer.

## How to Edit Content

- Slide content lives in `index.html` inside the 18 `<section class="slide">` elements.
- Styling and the zoo design system implementation live in `styles.css`.
- Navigation, stamps, interactions, confetti, and gimmicks live in `script.js`.
- Factual content should remain aligned with `rubrik.md`.
- Zoo visual rules should remain aligned with `design-zoo.md`.

## How to Replace Animal SVG Assets

The current deck uses lightweight inline mascot placeholders styled as reusable `.mascot` components. To replace them with custom SVG assets:

1. Add files under `assets/animals/`, for example `assets/animals/eagle.svg`.
2. Replace the corresponding mascot `<div>` in `index.html` with an `<img>` tag or CSS background.
3. Include useful `alt` text for informative images or `aria-hidden="true"` for decorative art.
4. Keep silhouettes original and generic; do not copy famous or copyrighted animal characters.

## How to Add Slides

1. Add a new `<section class="slide" data-zone="...">` in `index.html`.
2. Add optional `data-stamp="..."` if the slide should award a safari stamp.
3. Update the narrative count if the deck grows beyond 18 slides.
4. Use existing components such as `.ranger-note`, `.badge`, `.flow`, `.plaque-list`, `.tools`, and `.meter`.

## Browser Compatibility

The presentation targets current Chrome, Edge, Firefox, and Safari. It uses standard HTML, CSS, and vanilla JavaScript. It works without external JavaScript libraries and can be opened as a local file.

## Troubleshooting

- If fullscreen does not start, confirm the browser allows fullscreen for local files.
- If fonts do not load, the browser will fall back to system fonts and the deck remains readable.
- If motion is too strong, enable OS-level reduced motion or use Management Tour mode.
- If content feels cramped, use fullscreen at 1366×768 or larger.
- If a slide appears inactive, click the current slide once and continue with keyboard navigation.
