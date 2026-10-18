/**
 * ============================================================================
 * src/components/Layout.jsx  —  THE FRAME AROUND EVERY PAGE
 * ----------------------------------------------------------------------------
 * Every page on the site is wrapped in this. It provides:
 *   - the header (always at the top)
 *   - the footer (always at the bottom)
 *   - a "skip to content" link for keyboard users
 *   - the business information Google reads (JSON-LD)
 *   - <Outlet />  <- THIS is where the actual page content appears.
 *
 * <Outlet /> is a react-router placeholder. Think of the layout as a picture
 * frame and <Outlet /> as the empty space where each page's picture is placed.
 * ============================================================================
 */

import { Outlet } from "react-router-dom";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import ScrollToTop from "./ScrollToTop";
import JsonLd from "./JsonLd";
import { site } from "../data/site";

/**
 * Information about the business in the format Google likes ("schema.org").
 * Only confirmed facts go in here - no invented ratings or prices.
 */
const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: site.brandName,
  telephone: site.phoneE164,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.streetAddress,
    addressLocality: site.addressLocality,
    addressRegion: site.addressRegion,
    postalCode: site.postalCode,
    addressCountry: site.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.latitude,
    longitude: site.longitude,
  },
  hasMap: site.mapDirectionsUrl,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: site.openingHoursOpens,
    closes: site.openingHoursCloses,
  },
  sameAs: [site.instagramUrl],
};

export default function Layout() {
  return (
    <>
      {/* Scroll to top on every page change + Google data + skip link */}
      <ScrollToTop />
      <JsonLd data={businessJsonLd} />

      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <SiteHeader />

      {/* The page content is swapped in here by the router. */}
      <main id="main">
        <Outlet />
      </main>

      <SiteFooter />
    </>
  );
}
