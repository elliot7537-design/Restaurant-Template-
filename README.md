# Brasa — Modern Mexican Fine Dining

A single-page website template for a high-end Mexican restaurant serving prime steak, lobster, quail and lamb.

## Features

- **Black & red** color scheme inspired by fire and ember
- **Bilingual** EN / ES toggle (auto-detects browser, remembers preference)
- **Scroll-reveal animations** on floating hero images, dining room slider, dish stack and chef portrait
- **Parallax hero** with drifting image cards
- **Responsive layout** from mobile to wide desktop
- **FAQ accordion**, testimonials, location block, and an "Evening at Brasa" CTA

## Structure

```
index.html     markup and content
styles.css     theme, layout, animations
script.js      i18n, reveal observer, parallax, slider
```

## Run locally

Just open `index.html` in a browser, or serve with any static server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Customize

- Restaurant copy lives in `i18n` inside `script.js` (`en` and `es` dictionaries)
- Swap placeholder imagery by editing the `<img src="…">` values in `index.html`
- Tune colors in `:root` at the top of `styles.css`
