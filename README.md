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

## Content And Contact Configuration

- Bilingual website copy lives in `src/content/siteContent.ts`.
- Public contact links live in `src/config/contact.ts`.
- The logo is stored at `public/logo.jpg`, copied from the current UnboundOcean site.

Update the WhatsApp number and sales email in `src/config/contact.ts` before production launch.
