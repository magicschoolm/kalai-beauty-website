/**
 * ============================================================================
 * src/components/FAQList.jsx  —  THE EXPANDING QUESTIONS LIST
 * ----------------------------------------------------------------------------
 * Each question is a native <details> element, so it opens and closes with no
 * JavaScript at all. We also add FAQ JSON-LD so Google can show the questions
 * directly in search results.
 *
 * PROPS
 *   items -> an array of FAQ objects (from src/data/faqs.js, or a filtered
 *            subset of it). Pass only the questions you want on this page.
 * ============================================================================
 */

import Reveal from "./Reveal";
import JsonLd from "./JsonLd";

export default function FAQList({ items }) {
  // The structured data mirrors exactly the questions shown on the page.
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <div className="faq">
        {items.map((item) => (
          <Reveal as="details" key={item.id}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </Reveal>
        ))}
      </div>

      {items.length > 0 && <JsonLd data={faqJsonLd} />}
    </>
  );
}
