/**
 * ============================================================================
 * tailwind.config.js  —  YOUR DESIGN SYSTEM IN ONE FILE
 * ----------------------------------------------------------------------------
 * This is the most important file for changing how the site LOOKS.
 *
 * `content`  tells Tailwind which files to scan for class names so it can
 *            include only the CSS you actually use.
 *
 * `theme.extend.colors` names every brand colour. Because they are named here,
 * you can write classes like `bg-primary`, `text-sage`, `border-line` anywhere.
 *   -> To re-brand the site, change the hex values in this one block.
 *
 * Full colour guide is in docs/HOW-THE-CODE-WORKS.md.
 * ============================================================================
 */

/** @type {import('tailwindcss').Config} */
export default {
  // Only these files are scanned for class names.
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      // ------------------------------------------------------------------
      // COLOURS  (the same palette as the old src/styles/tokens.css)
      // ------------------------------------------------------------------
      colors: {
        bg: "#faf8ff", // page background (very light lavender)
        surface: "#ffffff", // cards, header, panels
        ink: "#2a2438", // main text colour
        mute: "#6e6683", // secondary / softer text
        primary: "#6b4fa8", // main brand violet (buttons, links)
        "primary-strong": "#5a4091", // darker violet for hover states
        lav: "#a995e0", // lavender accent
        "lav-tint": "#ede6fa", // pale lavender fill
        sage: "#3f7a5a", // green accent (secondary buttons, eyebrows)
        "sage-soft": "#8fc2a0", // pale green
        line: "#e5ddf1", // thin border / divider colour
        danger: "#a3324a", // form error colour
      },

      // ------------------------------------------------------------------
      // FONTS
      // ------------------------------------------------------------------
      fontFamily: {
        // use with `font-display` - big elegant serif headings
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        // use with `font-body` - clean readable body text
        body: ["Outfit", "system-ui", "sans-serif"],
      },

      // ------------------------------------------------------------------
      // ROUNDED CORNERS   -> `rounded`, `rounded-sm`, `rounded-lg`
      // ------------------------------------------------------------------
      borderRadius: {
        sm: "10px",
        DEFAULT: "18px",
        lg: "28px",
      },

      // ------------------------------------------------------------------
      // SHADOWS   -> `shadow-sm`, `shadow`
      // ------------------------------------------------------------------
      boxShadow: {
        sm: "0 8px 24px -18px rgb(42 36 56 / 0.5)",
        DEFAULT: "0 26px 60px -40px rgb(107 79 168 / 0.75)",
      },

      // ------------------------------------------------------------------
      // LAYOUT WIDTHS
      // ------------------------------------------------------------------
      maxWidth: {
        // `max-w-content` = the 70rem content column used on every section
        content: "70rem",
      },
    },
  },

  plugins: [],
};
