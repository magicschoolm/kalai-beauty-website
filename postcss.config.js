// =============================================================================
// postcss.config.js  —  how CSS gets processed
// -----------------------------------------------------------------------------
// PostCSS is a "CSS transformer". We plug two tools into it:
//   tailwindcss  -> turns the `@tailwind` / `@apply` lines into real CSS
//   autoprefixer -> automatically adds vendor prefixes (-webkit-, etc.)
// You do not need to touch this file.
// =============================================================================

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
