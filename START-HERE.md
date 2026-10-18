# START HERE 👋 — what is every file?

**Don't panic about the number of files.** You do **not** need to understand
all of them. In practice you only ever edit a handful. Read this page once and
the confusion goes away.

---

## 1. The big picture (LEGO idea)

The whole website is built from just **three kinds of files**:

| Kind | Folder | What it is | Real example |
|---|---|---|---|
| **Data** | `src/data/` | The words and numbers people read | the list of services |
| **Pieces** (components) | `src/components/` | Reusable parts of a page | a button, a card, the header |
| **Pages** | `src/pages/` | One file = one page of the website | the Contact page |

A **page** is made by putting **pieces** together and filling them with **data**.

```
data  ──►  pieces  ──►  pages  ──►  what the visitor sees
(what)     (bricks)     (models)     (the screen)
```

---

## 2. The ONLY files you usually edit

If you want to change something, look here first. These cover ~90% of requests.

| File | Edit it to change... |
|---|---|
| `src/data/site.js` | phone number, address, opening hours, menu links |
| `src/data/services.js` | the services offered |
| `src/data/course.js` | the beautician course details |
| `src/data/faqs.js` | the questions & answers |
| `src/data/gallery.js` | the photos, captions and categories |
| `tailwind.config.js` | the brand colours (one block of hex codes) |
| `src/index.css` | buttons, cards, spacing (the general look) |

**Rule of thumb:**
- Change **words / numbers / photos** → edit a file in `src/data/`.
- Change **how it looks** → edit `tailwind.config.js` or `src/index.css`.

---

## 3. Files you can safely IGNORE

These are the "plumbing". They make the site work but you rarely touch them.
**It is completely fine to never open these.**

| File | What it secretly does | Touch it? |
|---|---|---|
| `index.html` | The one empty HTML page React fills in | No |
| `src/main.jsx` | Starts the whole app | No |
| `src/App.jsx` | List of pages (the "router") | Only to add a new page |
| `src/components/Layout.jsx` | Adds header + footer to every page | No |
| `src/components/ScrollToTop.jsx` | Scrolls to top on page change | No |
| `src/components/Seo.jsx` | Sets the browser tab title | No |
| `src/components/JsonLd.jsx` | Data for Google | No |
| `src/lib/whatsapp.js` | Builds the WhatsApp links/messages | Only to change message text |
| `src/lib/approval.js` | "is it OK to publish?" switch | No |
| `vite.config.js` | Build tool settings | No |
| `postcss.config.js` | CSS tool settings | No |
| `.env.example` | Example settings file | No |
| `vercel.json` | Deploy settings for Vercel | No |

---

## 4. The folder tree, with a note on every line

```
react-web/
│
├── index.html              The single HTML page. (ignore)
├── tailwind.config.js      ★ Brand colours + fonts. EDIT to re-brand.
├── vercel.json             Deploy settings. (ignore)
├── vite.config.js          Build settings. (ignore)
├── postcss.config.js       CSS settings. (ignore)
├── package.json            List of tools the project uses. (ignore)
├── START-HERE.md           ← this page
├── README.md               How to run the project
├── docs/
│   └── HOW-THE-CODE-WORKS.md   Full beginner tutorial for React
│
└── src/
    ├── main.jsx            Starts the app. (ignore)
    ├── App.jsx             List of pages. (ignore unless adding a page)
    ├── index.css           ★ Reusable styles: .btn, .card... EDIT to restyle.
    │
    ├── data/               ★★★ THE WORDS LIVE HERE. Start with these.
    │   ├── site.js         ★ phone, address, hours, menu links
    │   ├── services.js     ★ the services
    │   ├── course.js       ★ the course
    │   ├── faqs.js         ★ questions & answers
    │   └── gallery.js      ★ photos
    │
    ├── components/         The reusable "bricks".
    │   ├── SiteHeader.jsx      Top bar + mobile menu
    │   ├── SiteFooter.jsx      Bottom bar
    │   ├── WhatsAppLink.jsx    A WhatsApp button
    │   ├── ServiceCard.jsx     One service card
    │   ├── GalleryGrid.jsx     Photo grid + filters + big viewer
    │   ├── EnquiryForm.jsx     The enquiry form
    │   ├── FAQList.jsx         The dropdown questions
    │   ├── PageHero.jsx        The title block on a page
    │   ├── JewelleryTeaser.jsx The "coming soon" jewellery box
    │   ├── Reveal.jsx          Fade-in-on-scroll animation
    │   ├── Layout.jsx          Header + footer wrapper (ignore)
    │   ├── ScrollToTop.jsx     (ignore)
    │   ├── Seo.jsx             (ignore)
    │   └── JsonLd.jsx          (ignore)
    │
    ├── pages/              One file per page. ★ Edit to change page wording.
    │   ├── Home.jsx        /
    │   ├── Services.jsx    /services
    │   ├── Bridal.jsx      /bridal
    │   ├── Course.jsx      /course
    │   ├── Gallery.jsx     /gallery
    │   ├── About.jsx       /about
    │   ├── Contact.jsx     /contact
    │   └── NotFound.jsx    (the 404 page)
    │
    ├── lib/                Small helper functions. (mostly ignore)
    │   ├── whatsapp.js     Builds WhatsApp links + message text
    │   └── approval.js     Publish switch
    │
    └── assets/
        └── images/         The photos used on the site
```

`★` = you will edit this. No star = safe to ignore.

---

## 5. What actually happens when someone opens the website

```
1. index.html loads and shows an empty box
2. main.jsx starts React
3. App.jsx looks at the web address and picks the right page   (e.g. /contact)
4. Layout.jsx wraps it with the header and the footer
5. The page (Contact.jsx) shows, built from components + data
```

That is the whole flow. Five lines. That is all you need to hold in your head.

---

## 6. If you remember only ONE thing

> **Words live in `src/data/`. Looks live in `index.css` + `tailwind.config.js`.**

Everything else is plumbing you can leave alone.

---

## 7. Your first 5 safe exercises

1. Open `src/data/site.js`, change `phoneDisplay`, save, look at the footer.
2. Open `src/data/services.js`, copy a `{ ... }` block, rename it, save.
3. Open `tailwind.config.js`, change `primary` to `"#b23a48"`, save, look at the buttons.
4. Open `src/pages/Home.jsx`, change the big `<h1>` sentence, save.
5. Open `src/data/faqs.js`, add a new question, save.

If those five worked, you already understand this project.
