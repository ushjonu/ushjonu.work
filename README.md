# ushjonu.work

Portfolio site for Jo — Product Designer. Five case studies (fintech/KYC,
antifraud, international tax, Mexican regulatory compliance, physical
products/e-commerce), a professional and academic timeline, and contact info.
Content is in Brazilian Portuguese.

Live at **https://ushjonu.work**.

## Stack

Plain HTML, CSS and JavaScript. No framework, no build step, no dependencies.
Open `index.html` in a browser or serve the folder with any static server:

```sh
python3 -m http.server 8000
# → http://localhost:8000
```

Deploy by uploading the folder as-is (GitHub Pages, Cloudflare Pages, Netlify…).

## Layout

```
index.html      page structure, metadata (OG/Twitter), case viewer dialog, menu drawer
styles.css      design tokens, light/dark themes, all layout and typography
app.js          case data + rendering (cards, viewer), sort, load-more, sticky offsets, menu
assets/
  fonts/        self-hosted Space Grotesk, Asimovian, Cedarville Cursive, Pixelify Sans (all OFL)
  img/          portrait, favicon, OG image, case covers and section images
  video/        case videos (H.264 MP4, 1920 wide, faststart)
```

Fraunces is loaded from Google Fonts; everything else is self-hosted.

## Editing content

### Case studies

All case content lives in the `CASES` array at the top of `app.js`. Each entry:

```js
{
  key: 4, sortYear: 2026,                 // key is stable and used in URLs (#case-4)
  tagA: "Regulatório", tagAColor: "…", tagAChip: "…",
  tagB: "México", dateLabel: "2026",
  title: "…",
  cover: { src, width, height, alt },     // card thumbnail + first image in the viewer
  media: [ … ],                           // optional: more items at the top of the viewer
  sectionMedia: {                         // optional: media under a section's text
    context: [ … ], process: [ … ], hypothesis: [ … ], design: [ … ]
  },
  context: "…", process: "…", hypothesis: "…", design: "…"
}
```

A media item is `{ type: "image" | "video", src, width, height, alt }`. Give the
real pixel size — the viewer uses it to keep proportions (portrait images are
capped at 80vh, landscape media spans the column). Cases without a `cover`
show an "imagem em breve" placeholder.

Each case is deep-linkable at `/#case-<key>`; the Back button closes the viewer.

### Experience and contact

Plain HTML in `index.html` (`#experiencia`, `#contato`). Timeline entries
marked `class="timeline-extra" hidden` are revealed by "Carregar mais".

### Colours and fonts

Tokens at the top of `styles.css` (`:root`). Dark mode follows the OS
preference; set `data-theme="light"` or `"dark"` on `<html>` to force one.
`--gutter-m` is the mobile side margin.

## Media guidelines

- Images: PNG/JPG, at least 1920 wide for landscape; card thumbnails are
  cropped to the card, the viewer shows the full image.
- Video: MP4 (H.264), 1920 wide, `-movflags +faststart`. For screen
  recordings with variable frame rate encode with `-fps_mode vfr` so no frames
  are dropped. Reference encode:

  ```sh
  ffmpeg -i in.mov -vf "scale='min(1920,iw)':-2" -c:v libx264 -crf 20 -preset slow \
    -pix_fmt yuv420p -fps_mode vfr -c:a aac -b:a 96k -movflags +faststart out.mp4
  ```

## Browser support

Modern evergreen browsers. Relies on `<dialog>`, `:has()`, `aspect-ratio`,
`ResizeObserver` and CSS `clamp()` (Safari 15.4+, Chrome/Edge 105+, Firefox 121+).
