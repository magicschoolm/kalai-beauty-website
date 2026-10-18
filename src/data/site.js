/**
 * ============================================================================
 * src/data/site.js  —  THE SINGLE SOURCE OF TRUTH FOR BUSINESS DETAILS
 * ----------------------------------------------------------------------------
 * Change the phone number, address, opening hours or menu links here, ONCE,
 * and the whole site updates. Nothing else in the project hard-codes these.
 *
 * WHERE THIS IS USED
 *   SiteHeader.jsx   -> brand name, area label, nav links
 *   SiteFooter.jsx   -> address, hours, contact links
 *   lib/whatsapp.js  -> which number WhatsApp messages go to
 *   Seo.jsx          -> structured data Google reads
 * ============================================================================
 */

/**
 * The public web address of the site, used for share links and SEO tags.
 *
 * In Vite, anything starting with VITE_ in a `.env` file becomes available on
 * `import.meta.env`. So create a file called `.env` with:
 *     VITE_SITE_URL=https://yourrealdomain.com
 * If you do not set it, this is undefined and SEO tags are simply left out
 * (we never invent a placeholder domain).
 */
function resolvePublicBaseUrl() {
  const explicit = (import.meta.env.VITE_SITE_URL || "").trim().replace(/\/$/, "");
  return explicit || undefined;
}

export const site = {
  // ---- Identity ------------------------------------------------------------
  brandName: "Kalai's beauty & academy",
  instagramHandle: "@kalai_makeupartistry",
  instagramUrl: "https://www.instagram.com/kalai_makeupartistry/",

  // ---- Phone / WhatsApp -----------------------------------------------------
  // phoneDisplay  = what a human reads on screen
  // phoneE164     = the "tel:" link format (starts with +)
  // whatsappDigits = what wa.me needs: country code + number, digits only
  phoneDisplay: "+91 98420 23382",
  phoneE164: "+919842023382",
  whatsappDigits: "919842023382",

  // ---- Location ------------------------------------------------------------
  locationLabel: "Vadavalli, Coimbatore, Tamil Nadu",
  fullAddress:
    "Seendur Complex, linganur road, Linganoor, vadavalli, Coimbatore, Tamil Nadu 641041",
  streetAddress: "Seendur Complex, linganur road, Linganoor, vadavalli",
  addressLocality: "Coimbatore",
  addressRegion: "Tamil Nadu",
  postalCode: "641041",
  addressCountry: "IN",
  mapDirectionsUrl: "https://maps.app.goo.gl/rkbQDb3ueGDbUiiV7",
  latitude: 11.0228381,
  longitude: 76.9082814,

  // ---- Opening hours -------------------------------------------------------
  openingHoursText: "Open daily, 10 AM to 8 PM",
  openingHoursOpens: "10:00",
  openingHoursCloses: "20:00",

  // ---- Language ------------------------------------------------------------
  defaultLanguage: "en",

  // ---- SEO base URL (see function above) -----------------------------------
  publicBaseUrl: resolvePublicBaseUrl(),
};

/**
 * The top navigation menu, in order.
 * Each item is { path, label }. The SiteHeader and SiteFooter both loop over
 * this list, so adding a page here adds it to the menu everywhere.
 *
 * NOTE: this is a React single-page app, so paths have NO trailing slash.
 * (`/services`, not `/services/`.)
 */
export const navigation = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services" },
  { path: "/bridal", label: "Bridal" },
  { path: "/course", label: "Beautician Course" },
  { path: "/gallery", label: "Gallery" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

/**
 * The filter buttons shown on the gallery page.
 * `id` must match the `category` used in src/data/gallery.js.
 */
export const galleryCategories = [
  { id: "all", label: "All" },
  { id: "bridal", label: "Bridal" },
  { id: "hair", label: "Hair" },
  { id: "salon", label: "Salon" },
];
