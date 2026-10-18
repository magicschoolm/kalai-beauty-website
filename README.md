# Kalai's beauty & academy — React website

> **New here / confused by the number of files?**
> Read **[START-HERE.md](START-HERE.md)** first — it explains every file in
> plain English in about two minutes.

This is the **React + Tailwind CSS** version of the salon website.
It was rewritten from the original Astro site so that the code is easy to
read, edit and learn from.

Everything on the site is written in plain, commented JavaScript. If you can
read HTML and a little JavaScript, you can change almost anything here.

---

## 1. Getting it running (first time)

You need **Node.js** installed (version 18 or newer). Then, in a terminal,
go into the `react-web` folder and run:

```bash
npm install     # download the tools (only needed once)
npm run dev     # start the site for development
```

The site opens at **http://localhost:5173**. As you save a file, the page
updates by itself — no need to refresh.

When you want the final files to upload, run:

```bash
npm run build     # creates a "dist" folder with the finished website
npm run preview   # check the built version locally
```

---

## 2. The folder tour (what lives where)

```
react-web/
├── index.html            The single HTML page. You will rarely touch this.
├── tailwind.config.js    ALL the brand colours and fonts are named here.
│
└── src/
    ├── main.jsx          Starts the whole app. (Do not edit.)
    ├── App.jsx           The list of pages (the "router").
    ├── index.css         Base styles + reusable classes (.btn, .card, ...).
    │
    ├── data/             <-- The CONTENT lives here. Edit these to change text.
    │   ├── site.js         Phone, address, hours, menu links.
    │   ├── services.js     The list of services.
    │   ├── course.js       The beautician course details.
    │   ├── faqs.js         The questions & answers.
    │   └── gallery.js      The photos and their categories.
    │
    ├── components/       <-- The building blocks (buttons, cards, header...).
    │   ├── Layout.jsx      Header + footer that wrap every page.
    │   ├── SiteHeader.jsx  The sticky top bar and mobile menu.
    │   ├── SiteFooter.jsx  The bottom bar.
    │   ├── WhatsAppLink.jsx A button that opens WhatsApp.
    │   ├── ServiceCard.jsx One service card.
    │   ├── GalleryGrid.jsx The photo grid + filters + full-screen viewer.
    │   ├── EnquiryForm.jsx The enquiry form.
    │   ├── FAQList.jsx     The expanding questions list.
    │   ├── PageHero.jsx    The title block at the top of a page.
    │   ├── JewelleryTeaser.jsx The "coming soon" jewellery panel.
    │   ├── Reveal.jsx      The fade-in-on-scroll animation.
    │   ├── Seo.jsx         Sets the browser tab title/description.
    │   └── JsonLd.jsx      Data that Google reads.
    │
    ├── pages/            <-- One file per page of the website.
    │   ├── Home.jsx
    │   ├── Services.jsx
    │   ├── Bridal.jsx
    │   ├── Course.jsx
    │   ├── Gallery.jsx
    │   ├── About.jsx
    │   ├── Contact.jsx
    │   └── NotFound.jsx    (the 404 page)
    │
    ├── lib/              Small helper functions.
    │   ├── whatsapp.js     Builds WhatsApp links and message text.
    │   └── approval.js     The "is it OK to publish?" switch.
    │
    └── assets/images/    The photos used on the site.
```

**The most important idea:** the words and data live in `src/data/`, and the
*look* lives in `src/components/` and `src/index.css`. To change **what the
site says**, edit `data/`. To change **how it looks**, edit `components/` or
`index.css` (or the colours in `tailwind.config.js`).

---

## 3. "How do I change the ___ ?" — quick answers

| I want to change... | Open this file |
|---|---|
| Phone number, address, opening hours | `src/data/site.js` |
| The menu links in the header/footer | `src/data/site.js` (`navigation`) |
| The services offered | `src/data/services.js` |
| The course details | `src/data/course.js` |
| A question & answer | `src/data/faqs.js` |
| A photo, its caption or category | `src/data/gallery.js` |
| The brand colours | `tailwind.config.js` (the `colors` block) |
| Buttons / cards / general look | `src/index.css` |
| The wording on the home page | `src/pages/Home.jsx` |
| The WhatsApp message wording | `src/lib/whatsapp.js` |

There is a longer, step-by-step guide in
**[docs/HOW-THE-CODE-WORKS.md](docs/HOW-THE-CODE-WORKS.md)** — read that next.
It explains React itself (components, props, state) using this site as the
example.

---

## 4. Two things to know about this version

1. **It is a "single-page app" (SPA).** The whole site is one HTML file and
   JavaScript swaps the pages. This is the classic React way and is what most
   YouTube tutorials teach. The trade-off: search engines see less than they
   did with the old Astro site. Page titles and descriptions are still set by
   `Seo.jsx`, and Google data by `Layout.jsx`, but a tool like Next.js would be
   stronger for SEO. This was a deliberate, agreed choice.

2. **No backend, on purpose.** The enquiry form does not save or send anything.
   It opens WhatsApp with the message ready, and the visitor presses Send. See
   `src/components/EnquiryForm.jsx`.

The original Astro site is still in the folder above this one, untouched, in
case you ever need to compare the two.

---

## 5. Deploying to Vercel (from GitHub)

This repository has **two** apps: the old Astro site at the repo root, and this
React app in `react-web/`. A file called `vercel.json` at the **repo root**
already tells Vercel to build THIS React app, so a normal GitHub → Vercel
deploy works with no extra settings:

- Install: `cd react-web && npm install`
- Build:   `cd react-web && npm run build`
- Output:  `react-web/dist`
- All routes are rewritten to `index.html` so page refreshes work (single-page
  app routing).

**In your Vercel project, check these (Project → Settings → Build and
Deployment):**

1. **Root Directory** — leave it empty (the repo root). Do NOT set it to
   `react-web`; if you do, Vercel reads `react-web/vercel.json` instead and you
   should not need the root file.
2. **Framework Preset** — "Other" (or leave on Auto; `vercel.json` overrides it).
3. Turn **OFF** any "Override" toggles for Build/Install/Output — a dashboard
   override wins over `vercel.json` and can send it back to the Astro build.

**Optional:** add an Environment Variable `VITE_SITE_URL` = your live domain
(see `.env.example`). Everything works without it; it only adds share/canonical
links.

That is the only setup needed. Every push to `main` will now deploy the latest
React code.

> Alternative: if you would rather keep both sites as separate Vercel projects,
> create a second Vercel project for the same repo and set its **Root Directory
> to `react-web`**. In that case delete the root `vercel.json` so it does not
> affect the Astro project.

