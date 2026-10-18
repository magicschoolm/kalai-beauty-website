/**
 * ============================================================================
 * src/lib/whatsapp.js  —  EVERYTHING ABOUT WHATSAPP AND PHONE LINKS
 * ----------------------------------------------------------------------------
 * The site never sends data anywhere. Instead, links and forms OPEN WhatsApp
 * with a pre-written message that the visitor can review and send themselves.
 * Keeping all of that logic in one file means there is one place to change it.
 * ============================================================================
 */

import { site } from "../data/site";

/**
 * Build a `wa.me` link that opens a chat with our number and pre-fills
 * `message`. `encodeURIComponent` makes the text safe to put inside a URL
 * (spaces become %20, etc.).
 *
 *   waLink("Hello") -> "https://wa.me/919842023382?text=Hello"
 */
export function waLink(message) {
  return `https://wa.me/${site.whatsappDigits}?text=${encodeURIComponent(message)}`;
}

/** A "tel:" link that opens the phone dialler. Used by the footer. */
export function telLink() {
  return `tel:${site.phoneE164}`;
}

/**
 * Each enquiry has a "reason" (intent). This maps the short code to a
 * friendly phrase that gets dropped into the message.
 */
const INTENT_LABEL = {
  general: "a general enquiry",
  bridal: "bridal makeup and styling",
  salon: "salon services",
  course: "the 10-day beautician course",
  jewellery: "jewellery",
};

/**
 * Create a short opening line for an intent.
 *   intentMessage("bridal")
 *   -> "Hi Kalai's beauty & academy, I'd like to enquire about bridal makeup and styling."
 */
export function intentMessage(intent) {
  const label = INTENT_LABEL[intent] || INTENT_LABEL.general;
  return `Hi ${site.brandName}, I'd like to enquire about ${label}.`;
}

/**
 * Put the enquiry form fields together into one complete WhatsApp message.
 * Called by the form when the visitor presses "Open WhatsApp with my enquiry".
 *
 * `fields` looks like: { name, intent, date, note }
 */
export function composeEnquiry(fields) {
  const firstLine = intentMessage(fields.intent);
  const nameLine = `Name: ${(fields.name || "").trim()}.`;
  const dateLine = `Preferred date: ${fields.date ? fields.date : "not specified"}.`;
  const note = (fields.note || "").trim();
  const noteLine = note ? `Note: ${note}` : "Note: none";

  // Joining with a space puts all four sentences on one line.
  return [firstLine, nameLine, dateLine, noteLine].join(" ");
}
