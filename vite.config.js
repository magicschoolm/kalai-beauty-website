// =============================================================================
// vite.config.js  —  the build tool settings
// -----------------------------------------------------------------------------
// Vite is what "runs" a React project. `npm run dev` starts it in development
// mode (fast reload), and `npm run build` uses it to bundle the final files.
// You rarely need to change this file.
// =============================================================================

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // The React plugin teaches Vite how to understand JSX (the HTML-inside-JS
  // syntax, like `<div className="...">`).
  plugins: [react()],

  server: {
    // Which port the dev server opens on: http://localhost:5173
    port: 5173,
    // Automatically open the browser when `npm run dev` starts.
    open: true,
  },
});
