# sdlreo.com

Premium domain sales page for **sdlreo.com** — Scottsdale REO & bank-owned real estate.

## Stack

- [Astro](https://astro.build) static site (`output: 'static'`, no adapter)
- [Tailwind CSS](https://tailwindcss.com)
- [Content Collections](https://docs.astro.build/en/guides/content-collections/) for market stats, use cases, and value props
- [Cloudflare Workers Static Assets](https://developers.cloudflare.com/workers/static-assets/) for global edge delivery
- [Cloudflare Images CDN](https://developers.cloudflare.com/images/) for hero imagery

## Development

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build
npm run deploy
```

The static build outputs to `dist/`. Wrangler deploys it as a Workers Static Assets project — no Worker script required.

## Acquisition

All inquiries route to **sales@desertrich.com**.
