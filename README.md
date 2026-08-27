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

- `la-peace-elder.jpg` — the big portrait in the hero section (in place)
- `meme-1.jpg`, `meme-2.jpg` — in place (the ascension shot, "I'm in tears bro")
- `meme-3.png` through `meme-6.png` — still placeholders, waiting on more memes
- `favicon.png` — browser tab icon (still a placeholder)

You can add more gallery cards by copying a `.gallery__card` block in
`index.html` and pointing it at a new image filename.

## Video clips

Two TikTok clips of La Peace live in `assets/videos/` (`clip-1.mp4`,
`clip-2.mp4`, transcoded to web-friendly H.264/AAC with poster frames) and
render in the "Sacred Footage" section between Lore and the meme gallery.

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
