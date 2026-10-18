/**
 * ============================================================================
 * src/components/ScrollToTop.jsx  —  MAKES EACH PAGE OPEN AT THE TOP
 * ----------------------------------------------------------------------------
 * Without this, when you tap a menu link the new page would keep the scroll
 * position from the old page (mid-way down). This small helper listens for a
 * change of URL and scrolls back to the top.
 *
 * EXCEPTION: if the link points at a section on the same page (a "#hash" like
 * "#enquiry"), we scroll to THAT section instead.
 *
 * `useLocation()` is a react-router hook that tells us the current URL.
 * ============================================================================
 */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // A "#hash" was used - try to scroll to that element.
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    // Normal page change - jump to the very top.
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null; // renders nothing
}
