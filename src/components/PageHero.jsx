/**
 * ============================================================================
 * src/components/PageHero.jsx  —  THE TITLE BLOCK AT THE TOP OF A PAGE
 * ----------------------------------------------------------------------------
 * Every page except Home starts with this: a small "eyebrow" label, a big
 * heading, an intro paragraph and optional buttons/links passed as children.
 *
 * EXAMPLE (from the Bridal page)
 *   <PageHero eyebrow="Bridal" title="Bridal makeup & styling" intro="...">
 *     <div className="btn-row">
 *       <WhatsAppLink intent="bridal" label="Ask about your date" />
 *     </div>
 *   </PageHero>
 * ============================================================================
 */

import Reveal from "./Reveal";

export default function PageHero({ eyebrow, title, intro, children }) {
  return (
    <section className="container section" style={{ paddingBottom: 0 }}>
      {eyebrow && (
        <Reveal as="p" className="eyebrow">
          {eyebrow}
        </Reveal>
      )}
      <Reveal as="h1">{title}</Reveal>
      {intro && (
        <Reveal as="p" className="lede">
          {intro}
        </Reveal>
      )}
      {children && <Reveal>{children}</Reveal>}
    </section>
  );
}
