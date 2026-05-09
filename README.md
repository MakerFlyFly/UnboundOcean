# UnboundOcean Website

Commercial homepage rebuild for UnboundOcean, a cross-border sales and local deployment partner for enterprise intelligent service solutions entering Southeast Asia.

## Stack

- React
- TypeScript
- Vite
- Canvas-based gray pixel globe animation

## Local Development

```bash
npm install
npm run dev
```

## Quality Checks

```bash
npm run lint
npm run build
```

## Production Routes

The production build generates static HTML for each public route:

- `/`
- `/chat`
- `/zh`
- `/zh/chat`

`npm run build` runs Vite and then `scripts/write-route-html.mjs` to write
route-specific metadata for canonical URLs, hreflang alternates, Open Graph, and
Twitter cards.

## Content And Contact Configuration

- Bilingual website copy lives in `src/content/siteContent.ts`.
- Public contact links live in `src/config/contact.ts`.
- The logo is copied from the current UnboundOcean site and served through optimized local assets.
- Optimized logo and favicon assets live in `public/logo-mark.jpg` and `public/favicon.png`.

Update the sales email and WhatsApp workflow in `src/config/contact.ts` before production launch. Until a real WhatsApp number is available, the WhatsApp CTA routes to an email request.
