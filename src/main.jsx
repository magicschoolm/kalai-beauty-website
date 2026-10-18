/**
 * ============================================================================
 * src/main.jsx  —  THE STARTING POINT OF THE WHOLE APP
 * ----------------------------------------------------------------------------
 * This is the first JavaScript file that runs. Its only job is to put the
 * React app into the empty <div id="root"> in index.html.
 *
 *   createRoot(...)   -> finds that div and prepares it for React.
 *   .render(<App />)  -> draws the app inside it.
 *
 * <StrictMode> is a development helper that warns about common mistakes. It
 * has no effect in the final build, and it never appears to the visitor.
 * <BrowserRouter> lets the app change pages without reloading (see App.jsx).
 * ============================================================================
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

// Load the stylesheet once, for the whole site.
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
