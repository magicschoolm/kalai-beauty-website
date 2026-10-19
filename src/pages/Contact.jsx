/**
 * ============================================================================
 * src/pages/Contact.jsx  —  THE CONTACT PAGE
 * ----------------------------------------------------------------------------
 * Three contact cards (phone, WhatsApp, Instagram), the address with a map
 * link, the enquiry form and the full FAQ.
 * ============================================================================
 */

import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import EnquiryForm from "../components/EnquiryForm";
import FAQList from "../components/FAQList";
import WhatsAppLink from "../components/WhatsAppLink";
import Reveal from "../components/Reveal";
import { site } from "../data/site";
import { faqs } from "../data/faqs";
import { telLink, waLink, intentMessage } from "../lib/whatsapp";
import frontageImage from "../assets/images/gmap/unnamed.jpg";

export default function Contact() {
  return (
    <>
      <Seo
        title={`Contact | ${site.brandName}, Vadavalli, Coimbatore`}
        description="Phone, WhatsApp, Instagram and Google Maps directions for Kalai's beauty & academy in Vadavalli, Coimbatore. Open daily, 10 AM to 8 PM."
      />

      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        intro="WhatsApp is the quickest way to reach us. Call, message or find us on Instagram — whichever suits you."
      />

      {/* -------- Three contact cards -------- */}
      <section className="container section">
        <div className="grid grid-3">
          <Reveal className="card">
            <p className="eyebrow">Phone</p>
            <h3 style={{ fontSize: "1.15rem" }}>Call us</h3>
            <p style={{ marginBottom: ".75rem" }}>
              <a href={telLink()}>{site.phoneDisplay}</a>
            </p>
            <p className="muted" style={{ fontSize: ".88rem", margin: 0 }}>
              Tap to open your dialler.
            </p>
          </Reveal>

          <Reveal className="card">
            <p className="eyebrow">WhatsApp</p>
            <h3 style={{ fontSize: "1.15rem" }}>Message us</h3>
            <p style={{ marginBottom: ".75rem" }}>
              <a href={waLink(intentMessage("general"))} target="_blank" rel="noopener noreferrer">
                Start a chat
              </a>
            </p>
            <p className="muted" style={{ fontSize: ".88rem", margin: 0 }}>
              We reply personally during salon hours.
            </p>
          </Reveal>

          <Reveal className="card">
            <p className="eyebrow">Instagram</p>
            <h3 style={{ fontSize: "1.15rem" }}>Follow our work</h3>
            <p style={{ marginBottom: ".75rem" }}>
              <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
                {site.instagramHandle}
              </a>
            </p>
            <p className="muted" style={{ fontSize: ".88rem", margin: 0 }}>
              Latest work and updates.
            </p>
          </Reveal>
        </div>
      </section>

      {/* -------- Find us -------- */}
      <section className="container section">
        <div className="split">
          <Reveal className="media media-wide">

          <div className="contact-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6781.955511779184!2d76.9083368!3d11.0238513!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85fc48dd71297%3A0xf7de926d8c7698c1!2sKalai's%20beauty%20%26academy%20Coimbatore%20vadavalli!5e1!3m2!1sen!2sin!4v1792420046504!5m2!1sen!2sin"
            width="100%"
            height="380"
            style={{border:0}}
            // allowfullscreen=""
            // loading="lazy" referrerpolicy="strict-origin-when-cross-origin"
            >
            </iframe>
          </div>
            
            {/* <img
              src={frontageImage}
              alt="Salon frontage with the signboard visible"
              loading="lazy"
              decoding="async"
            /> */}
          </Reveal>
          <Reveal>
            <p className="eyebrow">Find us</p>
            <h2>{site.locationLabel}</h2>
            <address className="muted" style={{ fontStyle: "normal", lineHeight: 1.6 }}>
              {site.fullAddress}
            </address>
            <p className="muted">{site.openingHoursText}</p>
            <div className="btn-row">
              <a className="btn" href={site.mapDirectionsUrl} target="_blank" rel="noopener noreferrer">
                Get directions
              </a>
              <WhatsAppLink label="Schedule an Appointment" variant="ghost" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------- Enquiry form -------- */}
      <section className="container section">
        <div className="split">
          <Reveal>
            <p className="eyebrow">Enquiry form</p>
            <h2>Send us the details</h2>
            <p className="muted">
              Fill this in and we will open WhatsApp with your message ready for you to review and
              send.
            </p>
            <p className="note">Your details stay on your device — nothing is stored by this website.</p>
          </Reveal>
          <EnquiryForm context="general" />
        </div>
      </section>

      {/* -------- FAQ -------- */}
      <section className="container section">
        <Reveal as="p" className="eyebrow">
          Questions
        </Reveal>
        <Reveal as="h2">Common questions</Reveal>
        <FAQList items={faqs} />
      </section>
    </>
  );
}
