/**
 * ============================================================================
 * src/pages/Bridal.jsx  —  THE BRIDAL PAGE
 * ----------------------------------------------------------------------------
 * Focused on weddings: what to send us, an enquiry form, and a short FAQ.
 * The FAQ passes only the booking/bridal/prices questions to <FAQList>.
 * ============================================================================
 */

import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import WhatsAppLink from "../components/WhatsAppLink";
import EnquiryForm from "../components/EnquiryForm";
import FAQList from "../components/FAQList";
import Reveal from "../components/Reveal";
import { site } from "../data/site";
import { faqs } from "../data/faqs";
import bridalImage from "../assets/images/bridal/bridal-makeup-styling.webp";

export default function Bridal() {
  return (
    <>
      <Seo
        title={`Bridal Makeup & Styling in Vadavalli, Coimbatore | ${site.brandName}`}
        description="Bridal makeup and styling in Vadavalli, Coimbatore. Tell us your date and the look you want — Kalai's beauty & academy replies on WhatsApp."
      />

      <PageHero
        eyebrow="Bridal"
        title="Bridal makeup & styling"
        intro="Your date, your outfit, your jewellery — we plan the look around all three. Send an enquiry and we will check the date for you."
      >
        <div className="btn-row">
          <WhatsAppLink intent="bridal" label="Ask about your date" />
          {/* An in-page link: scrolls down to the section with id="enquiry". */}
          <a className="btn btn-ghost" href="#enquiry">
            Send an enquiry
          </a>
        </div>
      </PageHero>

      {/* -------- What to share with us -------- */}
      <section className="container section">
        <div className="split">
          <Reveal className="media media-portrait">
            <img
              src={bridalImage}
              alt="Traditional bridal makeup and styling, with jasmine flowers in the hair"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <Reveal>
            <p className="eyebrow">What to share with us</p>
            <h2>The more we know, the better the fit</h2>
            <ul className="list-check">
              <li>Your wedding or function date</li>
              <li>The function(s) you need makeup for</li>
              <li>Your outfit and jewellery colours</li>
              <li>Any reference looks you like</li>
            </ul>
            <p className="muted" style={{ marginTop: "1.25rem" }}>
              We will confirm what is possible for your date when we reply. Sending an enquiry does
              not hold the date.
            </p>
          </Reveal>
        </div>
      </section>

      {/* -------- Enquiry form -------- */}
      <section className="container section" id="enquiry">
        <div className="split">
          <Reveal>
            <p className="eyebrow">Enquire</p>
            <h2>Check your date</h2>
            <p className="muted">
              Fill this in and we will open WhatsApp with your message ready. You review it and press
              Send — we then reply personally to confirm or suggest alternatives.
            </p>
            <p className="note">This form does not store your details and does not confirm a booking.</p>
          </Reveal>
          <EnquiryForm context="bridal" />
        </div>
      </section>

      {/* -------- FAQ (only a few questions) -------- */}
      <section className="container section">
        <Reveal as="p" className="eyebrow">
          Questions
        </Reveal>
        <Reveal as="h2">Bridal enquiries</Reveal>
        <FAQList items={faqs.filter((faq) => ["booking", "bridal", "prices"].includes(faq.id))} />
      </section>
    </>
  );
}
