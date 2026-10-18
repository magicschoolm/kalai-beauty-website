/**
 * ============================================================================
 * src/data/gallery.js  —  EVERY PHOTO THE GALLERY CAN SHOW
 * ----------------------------------------------------------------------------
 * HOW IMAGES WORK IN VITE (important!)
 *   When you `import` an image file, Vite copies it into the final build and
 *   gives you back the image's web address (a string). So `bridalMakeupStyling`
 *   below is just a URL string like "/assets/bridal-makeup-styling-1a2b3c.webp".
 *   You then use it normally:  <img src={item.src} alt={item.alt} />
 *
 * ADD A PHOTO
 *   1. Put the file in src/assets/images/<a folder>/.
 *   2. Add an import line below.
 *   3. Add a { ... } record to galleryItems using that import as `src`.
 *
 * `category` must be one of: "bridal" | "hair" | "salon"
 *   (these match the filter buttons in src/data/site.js)
 *
 * `approved: true`  -> allowed to appear on the live site.
 * `approved: false` -> kept in the code but NEVER shown to visitors
 *                      (useful while waiting for the owner's permission).
 * ============================================================================
 */

import heroFloralArch from "../assets/images/hero/hero-floral-arch.png";
import bridalMakeupStyling from "../assets/images/bridal/bridal-makeup-styling.webp";
import floralHairstyle from "../assets/images/hair/floral-hairstyle.webp";
// import salonStylingSession from "../assets/images/services/salon-styling-session.webp";
// import earPiercingService from "../assets/images/services/ear-piercing-service.webp";
import salonFrontage from "../assets/images/salon/salon-frontage.webp";

export const galleryItems = [
  {
    id: "bridal-makeup-styling",
    src: bridalMakeupStyling,
    alt: "Traditional bridal makeup and styling, with jasmine flowers in the hair",
    caption: "Bridal makeup & styling",
    category: "bridal",
    approved: true,
  },
  {
    id: "hero-floral-arch",
    src: heroFloralArch,
    alt: "Finished look photographed in front of a flower-decorated arch",
    caption: "", // no caption -> the grey bar is skipped
    category: "bridal",
    approved: true,
  },
  {
    id: "floral-hairstyle",
    src: floralHairstyle,
    alt: "Hairstyle decorated with fresh flowers, seen from behind",
    caption: "Hair styling",
    category: "hair",
    approved: true,
  },
  {
    id: "salon-styling-session",
    // src: salonStylingSession,
    alt: "A styling service being carried out on a client in the salon",
    caption: "",
    category: "salon",
    approved: true,
  },
  {
    id: "ear-piercing-service",
    // src: earPiercingService,
    alt: "Close-up of an ear-piercing service being performed",
    caption: "",
    category: "salon",
    approved: true,
  },
  {
    id: "salon-frontage",
    src: salonFrontage,
    alt: "Salon frontage with the signboard visible",
    caption: "The salon",
    category: "salon",
    approved: true,
  },
];

/**
 * Only the photos that are safe to show right now.
 * The Gallery page uses THIS list, not `galleryItems` directly.
 */
export const renderableGalleryItems = galleryItems.filter((item) => item.approved);
