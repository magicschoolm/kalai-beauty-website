/**
 * ============================================================================
 * src/data/faqs.js  —  FREQUENTLY ASKED QUESTIONS
 * ----------------------------------------------------------------------------
 * Each entry has an `id`, a `question` and an `answer`.
 * The Services page shows all of them; the Bridal page shows only a few.
 *
 * `id` is used to pick a subset. For example, the Bridal page asks for:
 *     faqs.filter((faq) => ["booking", "bridal", "prices"].includes(faq.id))
 * so those ids must exist below.
 *
 * Answers must stay FACTUAL. If something is not confirmed (a price, a date),
 * the answer should invite people to ask on WhatsApp instead of guessing.
 * ============================================================================
 */

export const faqs = [
  {
    id: "location",
    question: "Where is the salon?",
    answer:
      "We are at Seendur Complex, linganur road, Linganoor, vadavalli, Coimbatore, Tamil Nadu 641041, and open daily from 10 AM to 8 PM. Use the “Get directions” link on the contact page for the map.",
  },
  {
    id: "booking",
    question: "How do I book?",
    answer:
      "Send us a WhatsApp message with what you need and your preferred date. We reply personally to confirm — the website does not confirm a booking by itself.",
  },
  {
    id: "bridal",
    question: "Do you take bridal bookings?",
    answer:
      "Yes, bridal makeup and styling is our main focus. Ask us about your date so we can check it for you.",
  },
  {
    id: "course",
    question: "Is the beautician course running?",
    answer:
      "We offer a 10-day beautician course. Message us on WhatsApp for the current batch dates, fee and seats.",
  },
  {
    id: "prices",
    question: "What are your prices and timings?",
    answer:
      "We are open daily from 10 AM to 8 PM. Prices vary by service, so we share the current rates on WhatsApp rather than publishing them here.",
  },
];
