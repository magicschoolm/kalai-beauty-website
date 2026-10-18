/**
 * ============================================================================
 * src/components/Seo.jsx  —  SETS THE PAGE TITLE AND DESCRIPTION
 * ----------------------------------------------------------------------------
 * Every page renders <Seo title={...} description={...} /> once.
 *
 * In a normal website each page has its own <title> in its own HTML file. A
 * React single-page app has only ONE html file, so we set the browser tab
 * title and description with JavaScript instead. That is what this does, using
 * `useEffect` (runs after the page renders).
 *
 * NOTE: because this happens in the browser, some search engines may not read
 * it. That is the known trade-off of a client-rendered React app. See
 * docs/HOW-THE-CODE-WORKS.md for the full explanation.
 * ============================================================================
 */

import { useEffect } from "react";

/**
 * Create a <meta> tag if it is missing, or update it if it already exists.
 * `attribute` is "name" or "property"; `key` is the tag name, e.g. "description".
 */
function setMetaTag(attribute, key, content) {
  if (!content) return;

  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

export default function Seo({ title, description }) {
  useEffect(() => {
    // 1. Browser tab title.
    document.title = title;

    // 2. Standard description + social sharing (Open Graph / Twitter).
    setMetaTag("name", "description", description);
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
  }, [title, description]);

  // This component renders nothing visible.
  return null;
}
