# RuBrik — Ruang Pabrik Presentation

Browser-based, full-viewport HTML slide deck for **RuBrik — Mading Digital Internal Pabrik**. The deck transforms `rubrik.md` into a polished internal competition presentation for HR, Change Management, management stakeholders, and non-technical audiences.

## Project Overview

RuBrik is presented as one internal factory space for information, communication, and collaboration. The deck covers:

- Current employee communication pain points.
- The six RuBrik rooms: Pengumuman, Koran Harian, Obrolan Warkop, Lapak Jualan, Agenda, and Factory Wire.
- Google Workspace architecture and data flow.
- Admin CMS and Google Sheets backbone.
- Estimated efficiency value with validation disclaimers.
- Four-week implementation roadmap and closing CTA.

The presentation is a static site: no backend, authentication, build step, or framework required.

## How to Run Locally

Open directly:

```bash
open index.html
```

Or run a simple static server from the project root:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

A local server is recommended because some browsers apply stricter rules to local `file://` pages.

## File Structure

```text
/
├── index.html          # Slide content and semantic presentation structure
├── styles.css          # Industrial dark theme, layouts, responsive styles, animations
├── app.js              # Slide navigation, fullscreen, overview, counters, touch/wheel controls
├── README.md           # Project documentation
├── rubrik.md           # Source Markdown content
└── assets/
    └── README.md       # Notes for optional assets
```

## Navigation Controls

- `Arrow Right` / `Arrow Down`: next slide
- `Space`: next slide
- `Arrow Left` / `Arrow Up`: previous slide
- `Home`: first slide
- `End`: last slide
- `F`: toggle fullscreen
- `O`: toggle slide overview
- `Escape`: close overview
- Mouse wheel: slide navigation with throttling
- Touch swipe: mobile/tablet navigation
- Bottom progress bar: jump to any slide
- Bottom-right controls: previous, overview, fullscreen, next

## How to Edit Slide Content

Slide content lives in `index.html`. Each slide is a `<section class="slide">` inside `<main id="deck">`.

Recommended editing workflow:

1. Keep each slide focused on one main message.
2. Prefer short headlines and concise supporting text.
3. Use existing reusable classes such as `.cards`, `.metrics`, `.flow`, `.split`, `.chips`, `.dashboard`, and `.roadmap`.
4. Keep disclaimers on estimated market and strategic-impact claims.
5. Avoid placing long tables directly into slides; convert them into cards, flows, or metric blocks.

## How to Replace Assets

The current deck uses CSS-generated industrial visuals and Lucide icons loaded via CDN. To use approved company imagery:

1. Add files to `assets/`.
2. Reference them from `index.html` or `styles.css` using paths like `assets/your-image.png`.
3. Add meaningful `alt` text for content images.
4. Compress large images before presenting on projector hardware.

## Deployment

### GitHub Pages

1. Push the repository to GitHub.
2. Go to **Settings → Pages**.
3. Select the current branch and root folder.
4. Save and open the generated Pages URL.

### Netlify

1. Drag the project folder into Netlify Drop, or connect the Git repository.
2. Build command: leave empty.
3. Publish directory: `/`.

### Other Static Hosts

Upload `index.html`, `styles.css`, `app.js`, and `assets/` to any static host. No server-side runtime is required.

## Embed in Google Sites

1. Deploy the deck to a public or organization-accessible static URL.
2. In Google Sites, choose **Embed → Embed code**.
3. Use an iframe similar to:

```html
<iframe
  src="https://your-host.example/rubrik/"
  width="100%"
  height="720"
  style="border:0;"
  allowfullscreen>
</iframe>
```

For best presentation quality, open the deck directly in a browser and use fullscreen mode.

## Known Browser Limitations

- Fullscreen requires a user gesture and may be restricted inside some iframes unless `allowfullscreen` is enabled.
- CDN fonts and Lucide icons require internet access; the deck remains readable if fonts fail, but icons may not render.
- Some mobile browsers hide browser chrome dynamically, changing viewport height during presentation.
- `prefers-reduced-motion` disables non-essential animation for accessibility.
