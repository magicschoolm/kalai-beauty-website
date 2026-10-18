/**
 * ============================================================================
 * src/data/course.js  —  THE BEAUTICIAN COURSE DETAILS
 * ----------------------------------------------------------------------------
 * `course`       -> the headline facts (title, duration, summary).
 * `courseModules` -> the "What you learn" checklist. Add/remove/reorder freely.
 *
 * We deliberately do NOT store a fee, start date or certificate wording here:
 * those change often, so the site tells people to ask on WhatsApp instead.
 * ============================================================================
 */

export const course = {
  title: "10-day beautician course",
  // Shown on the "Duration" card.
  durationText: "10 days",
  summary:
    "A short practical course covering everyday salon skills, from skin and hair basics through to bridal makeover practice.",
};

export const courseModules = [
  {
    id: "skin",
    title: "Skincare & facials",
    summary: "Skin basics, facial steps and the services a salon performs day to day.",
  },
  {
    id: "hair",
    title: "Hair care & styling",
    summary: "Hair care fundamentals, cutting and styling practice.",
  },
  {
    id: "makeup",
    title: "Makeup: basics to advanced",
    summary: "Build from core techniques to fuller occasion and bridal looks.",
  },
  {
    id: "threading",
    title: "Threading & waxing",
    summary: "Shaping and hair-removal techniques used in regular salon work.",
  },
  {
    id: "nails",
    title: "Manicure & pedicure",
    summary: "Hand and foot care routines and finishing.",
  },
  {
    id: "bridal",
    title: "Basic bridal makeover",
    summary: "Putting the pieces together for a complete bridal look.",
  },
];
