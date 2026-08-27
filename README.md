# La Peace ($LAPEACE)

Fun, lightweight landing page for the La Peace memecoin on Solana — born from
Kai Cenat mistaking lapis lazuli for diamonds on IShowSpeed's Minecraft
stream.

## Run locally

No build step needed. Just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Adding images

Drop files into `assets/images/` with these exact names and they'll appear
automatically (placeholders show until then):

- `la-peace-elder.png` — the big portrait in the hero section (the old man /
  Kai's "La Peace" alter ego)
- `meme-1.png` through `meme-6.png` — the meme gallery grid
- `favicon.png` — browser tab icon

You can add more gallery cards by copying a `.gallery__card` block in
`index.html` and pointing it at a new image filename.

## Things to update before launch

- Contract address is already wired in (`CvjSaRcTmcrfutekYzrBEEdTWx1RmRTWDToqtXmCpump`)
  in the hero, Pump.fun, Dexscreener, and Solscan links.
- Twitter/X and Telegram links in the "Join the Peace" section are currently
  `#` placeholders — update the `href` values in `index.html` once those
  exist.
- Tokenomics numbers (`#tokenomics`) are placeholders — edit to match reality.

## Deploy

Static site — works on Vercel, Netlify, GitHub Pages, or Cloudflare Pages
with zero config. Just point them at this repo/folder.
