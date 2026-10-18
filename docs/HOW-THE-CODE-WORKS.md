# How the code works — a gentle guide

This guide teaches the React ideas used in this project, **using this project
as the example**. Read it in order the first time. You do not need to know
React already.

If you can read HTML/CSS and a little JavaScript, you are ready.

---

## Part 0 — The one big idea

In the old Astro site, each page was its own HTML file.

In React there is **one** HTML file (`index.html`) with an empty box:

```html
<div id="root"></div>
```

JavaScript fills that box. Everything you see — header, page, footer — is built
by JavaScript from small reusable pieces called **components**.

A component is just a JavaScript function that returns HTML-like markup. That
markup is called **JSX**. Example:

```jsx
function Greeting() {
  return <h1>Hello</h1>;
}
```

You use a component like an HTML tag: `<Greeting />`.

---

## Part 1 — Reading a component

Open `src/components/WhatsAppLink.jsx`. It is the simplest real component here.

```jsx
export default function WhatsAppLink({ intent = "general", label = "Ask on WhatsApp", variant = "solid" }) {
  const classes = variant === "ghost" ? `btn btn-ghost` : `btn`;
  return (
    <a className={classes} href={waLink(intentMessage(intent))} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}
```

Four things to notice:

1. **`export default function Name()`** — every component file exports one
   function. The name is capitalised (`WhatsAppLink`). Always capitalised.
2. **`{ ... }` in the arguments** — these are **props** (inputs). This component
   accepts `intent`, `label` and `variant`. The `= "general"` parts are default
   values used if the parent does not pass anything.
3. **`className` instead of `class`** — React uses `className` for CSS classes,
   because `class` is a reserved word in JavaScript.
4. **`{label}`** — curly braces mean "insert this JavaScript value here".

You use it like this:

```jsx
<WhatsAppLink intent="bridal" label="Check a date" variant="ghost" />
```

That is **props**: the parent sends values in, the component uses them.

---

## Part 2 — State (things the component remembers)

Some things change while the visitor uses the page — the mobile menu open or
closed, which gallery filter is selected, what is typed in the form. React
remembers these with **`useState`**.

Look at `src/components/SiteHeader.jsx`:

```jsx
import { useState } from "react";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  ...
}
```

Read it like this:

- `isMenuOpen` — the current value (starts as `false`, i.e. closed).
- `setIsMenuOpen` — the function you call to change it.
- `useState(false)` — the starting value.

When you call `setIsMenuOpen(true)`, React **re-renders** the component, and
this time `isMenuOpen` is `true`, so the menu shows.

The hamburger button does exactly that:

```jsx
<button onClick={() => setIsMenuOpen((open) => !open)}>
```

`(open) => !open` means "flip the current value" — open becomes closed and
closed becomes open.

**Golden rule:** never change state by editing the variable directly
(`isMenuOpen = true` ❌). Always use the setter (`setIsMenuOpen(true)` ✅), or
React will not re-render.

---

## Part 3 — Effects (`useEffect`) — doing something after render

Sometimes you need to run code *after* the page appears: start an animation,
listen for the Escape key, change the page title. That is `useEffect`.

`src/components/Reveal.jsx` uses it for the fade-in animation:

```jsx
useEffect(() => {
  const element = elementRef.current;
  if (!element) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });
  }, { threshold: 0.1 });

  observer.observe(element);

  return () => observer.disconnect(); // cleanup when removed
}, []);
```

Key points:

- **`useRef`** (`elementRef`) gives you a direct handle on the real DOM element,
  so you can hand it to the observer.
- **IntersectionObserver** is a browser feature that tells you when an element
  scrolls into view.
- The **`return () => ...`** at the end is *cleanup*. React runs it when the
  component leaves the page, so nothing is left running.
- **The `[]` at the end** means "run this once, when the component first
  appears".

`ScrollToTop.jsx` uses `[pathname, hash]` instead of `[]`, meaning "run again
whenever the URL changes".

---

## Part 4 — Lists: turning data into many elements

Almost every list on the site works the same way. `src/components/ServiceCard.jsx`
is one card; `src/pages/Services.jsx` makes a card for each service:

```jsx
<div className="grid grid-3">
  {services.map((service) => (
    <ServiceCard key={service.id} service={service} image={serviceImages[service.id]?.src} />
  ))}
</div>
```

- **`.map(...)`** loops over the array and returns a new array of elements
  ("for each service, make a card").
- **`key={service.id}`** gives React a stable identity for each item so it can
  update the list efficiently. Always include a `key` in a `.map`.

The menu, the FAQ list and the gallery grid all use this exact pattern.

---

## Part 5 — Showing things conditionally

Curly braces also let you show something only sometimes:

```jsx
{item.caption && <span className="gallery-caption">{item.caption}</span>}
```

"If there is a caption, show the caption bar." If `item.caption` is empty, the
whole line is skipped (empty string is "falsy", so the second half is ignored).

An `if/else` version uses a **ternary**:

```jsx
{variant === "ghost" ? `btn btn-ghost` : `btn`}
```

"IF ghost THEN 'btn btn-ghost' ELSE 'btn'."

And a fuller example from `GalleryGrid.jsx`:

```jsx
{items.length === 0 ? <EmptyMessage /> : <TheGrid />}
```

---

## Part 6 — Pages and routing

`src/App.jsx` is the map from web address to page:

```jsx
<Route path="/services" element={<Services />} />
<Route path="/about" element={<About />} />
<Route path="*" element={<NotFound />} />
```

- `<Route path="/services">` → the Services page.
- `path="*"` → anything that did not match, i.e. the 404 page.

Everything is wrapped in one `<Route element={<Layout />}>`, so every page gets
the header and footer automatically. `Layout.jsx` decides where the page goes
using `<Outlet />`:

```jsx
<SiteHeader />
<main id="main">
  <Outlet />   {/* the current page appears here */}
</main>
<SiteFooter />
```

**To go to another page, use `<Link to="/about">`, not `<a href="/about">`.**
`<Link>` changes the page without reloading the whole site. (Use a normal `<a>`
only for links that leave the site, like WhatsApp or Instagram.)

---

## Part 7 — Where the content comes from (data flow)

This is the most useful pattern in the project. The content is separated from
the design:

```
src/data/*.js          ->   components / pages       ->   what the visitor sees
(the raw content)           (the design)                  (the screen)
```

So to add a service you edit **only** `src/data/services.js`. Every place that
shows services updates automatically, because they all read from that one file.

Try it:

1. Open `src/data/services.js`.
2. Copy a `{ ... }` block and change `name` and `summary`.
3. Save. A new card appears on the Services page and, if `featured: true`, on
   the home page too.

You changed **no** design code. That is the whole point.

---

## Part 8 — Styling: Tailwind vs. normal CSS

The project uses **both**, on purpose. The rule of thumb:

### Tailwind utility classes — for one-off layout

Tailwind gives you tiny single-purpose classes you put straight in the markup:

```jsx
<div className="grid gap-8 items-center">
```

```jsx
<p className="muted" style={{ marginTop: "1rem" }}>
```

Common ones you will see:

| Class | Means |
|---|---|
| `flex` / `grid` | turn the element into a flexbox / grid |
| `gap-8` | 2rem space between children |
| `items-center` | align children to the middle |
| `text-center` | centre the text |
| `mt-4` / `mb-2` | margin top / bottom |
| `opacity-0` / `opacity-100` | invisible / visible |

Numbers are a scale: `1 = 0.25rem`, `2 = 0.5rem`, `4 = 1rem`, `8 = 2rem`, and
so on.

### Component classes — for repeated pieces

When the same look is used in many places, we keep it as a named class in
`src/index.css`, so there is one place to edit it:

```css
.btn { ... }         /* every button */
.card { ... }        /* every white card */
.eyebrow { ... }     /* every small label above a heading */
```

You use them alongside Tailwind: `className="btn btn-ghost mt-4"`.

**Which do I use?** If it is layout you will use once, use Tailwind classes. If
it is a "thing" (a button, a card) that repeats, use a component class.

### Colours

All brand colours are named in `tailwind.config.js`:

```js
colors: {
  primary: "#6b4fa8",   // the violet used for buttons and links
  sage: "#3f7a5a",      // the green accent
  ink: "#2a2438",       // main text
  ...
}
```

Change the hex value there and the colour changes everywhere. In CSS you can
also use the variables, e.g. `color: var(--primary);`.

---

## Part 9 — The enquiry form, step by step

Open `src/components/EnquiryForm.jsx`. Follow the flow:

1. **State:** `form` holds what is typed, `errors` holds any problems.
2. As you type, `updateField` updates `form` **and** clears that field's error:
   ```jsx
   function updateField(field, value) {
     setForm((previous) => ({ ...previous, [field]: value }));
     setErrors((previous) => ({ ...previous, [field]: undefined }));
   }
   ```
   `{ ...previous, name: value }` means "a copy of previous, but with `name`
   replaced" — you never edit state directly.
3. **On submit**, `validate()` checks the rules (name at least 2 characters, a
   real date, note under 500 characters).
4. If there are errors, they are shown and nothing else happens.
5. If it is valid, `composeEnquiry()` (in `src/lib/whatsapp.js`) builds the
   message text, `waLink()` builds the WhatsApp address, and `window.open`
   opens it in a new tab.

There is **no server**. The message is only sent when the visitor presses Send
inside WhatsApp. If the browser blocks the pop-up, the form shows the text with
a Copy button so nothing is lost.

---

## Part 10 — The gallery, step by step

Open `src/components/GalleryGrid.jsx`. It has two pieces of state:

- `activeFilter` — which filter button is selected ("all", "bridal", ...).
- `lightboxItem` — the photo open full-screen, or `null` when closed.

Filtering is one line:

```jsx
const visibleItems =
  activeFilter === "all" ? items : items.filter((item) => item.category === activeFilter);
```

Clicking a photo sets `lightboxItem`; the lightbox CSS shows it because
`data-open` becomes `"true"`:

```jsx
<div className="lightbox" data-open={lightboxItem ? "true" : "false"}>
```

A `useEffect` watches `lightboxItem` and, while it is open, locks the page
scroll and lets the Escape key close the viewer.

Photos come from `src/data/gallery.js`. Each photo has a `category`
("bridal" / "hair" / "salon") and an `approved` flag. Only `approved: true`
photos are shown.

---

## Part 11 — SEO (browser tab + Google data)

- **`src/components/Seo.jsx`** sets the browser tab title and the description
  for each page. You pass them as props:
  ```jsx
  <Seo title="..." description="..." />
  ```
- **`Layout.jsx`** inserts the business details (address, hours, map) as
  JSON-LD, which is a small block of data that helps Google understand the
  business.
- **`FAQList.jsx`** inserts the questions as FAQ JSON-LD.

A reminder: because this is a single-page app, this information is set by
JavaScript in the browser, so search engines see less than with the old Astro
site. Titles and descriptions still work for visitors and for link previews.

---

## Part 12 — Practice exercises (learn by doing)

Try these in order. Everything is reversible with Ctrl+Z.

1. **Change a phone number.** Edit `phoneDisplay` in `src/data/site.js`. Watch
   the footer update.
2. **Add a service.** Copy a block in `src/data/services.js`, rename it, save.
   Find the new card on the Services page.
3. **Change the brand colour.** In `tailwind.config.js`, change `primary` to
   `"#b23a48"` (a red). Save and look at the buttons.
4. **Add a menu item.** Add `{ path: "/services", label: "Prices" }`-style entry
   to `navigation` in `src/data/site.js` (point it at an existing page first).
5. **Edit the WhatsApp message.** In `src/lib/whatsapp.js`, change the wording
   in `INTENT_LABEL` or `intentMessage`.
6. **Reorder home sections.** In `src/pages/Home.jsx`, move a whole
   `<section> ... </section>` block below another one.
7. **Add a FAQ.** Add a `{ id, question, answer }` block in `src/data/faqs.js`.
8. **Add a photo.** Put a `.webp` file in `src/assets/images/salon/`, import it
   at the top of `src/data/gallery.js`, and add a record to `galleryItems`.

If you can do all eight, you understand the project.

---

## Part 13 — Words you will keep seeing

| Word | Plain meaning |
|---|---|
| **Component** | A reusable piece of the page (a function returning JSX). |
| **JSX** | HTML-like syntax inside JavaScript. |
| **Props** | Inputs passed into a component. |
| **State** | Values a component remembers and can change. |
| **Hook** | A special function starting with `use` (`useState`, `useEffect`, `useRef`). |
| **Render** | Turning a component into what is shown on screen. |
| **Router** | The part that swaps pages based on the web address. |
| **Prop drilling** | Passing props down through several layers (avoid by keeping data central, as we do). |
| **SPA** | Single-Page App: one HTML file, JavaScript swaps the content. |
