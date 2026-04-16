# kerblabs.com

Flagship site for Kerblabs — the site is the pitch.

**Stack:** Next.js 15 (App Router) · React Three Fiber · Framer Motion · Lenis · Tailwind v4.

## Run

```bash
cd kerblabs-site
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy (Vercel)

1. `npm i -g vercel && vercel`
2. In Vercel project settings, set production domain to `kerblabs.com`.
3. In Hostinger DNS for `kerblabs.com`:
   - `A` record `@` → `76.76.21.21`
   - `CNAME` `www` → `cname.vercel-dns.com`
4. Wait for DNS to propagate. Vercel auto-issues the SSL cert.

## Wire up the contact form later

`components/Contact.tsx` currently logs to the console. To send submissions to the Kerblabs agency-level GHL location, replace the `onSubmit` handler body with a `fetch` POST to the GHL form/webhook endpoint once the form ID is created.

## Aesthetic

Option A — refined luxury / brutalist tension. Deep navy (`#0B1F3A`) + electric lime (`#C6FF3D`) + cream. Display font: **Instrument Serif**. Body: **Geist Mono**. Grain overlay, vignette, metallic 3D blob hero.
