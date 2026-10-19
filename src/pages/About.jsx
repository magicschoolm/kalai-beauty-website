/**
 * ============================================================================
 * src/pages/About.jsx  —  THE ABOUT PAGE
 * ----------------------------------------------------------------------------
 * A short introduction to the business and a photo of the salon frontage.
 * ============================================================================
 */

import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import WhatsAppLink from "../components/WhatsAppLink";
import Reveal from "../components/Reveal";
import { Link } from "react-router-dom";
import { site } from "../data/site";
import frontageImage from "../assets/images/bridal/Bridal_3.jpg";

export default function About() {
  return (
    <>
      <Seo
        title={`About | ${site.brandName}, Vadavalli, Coimbatore`}
        description="Kalai's beauty & academy in Vadavalli, Coimbatore — bridal makeup, salon services and beautician training."
      />

      <PageHero
        eyebrow="About"
        title={site.brandName}
        intro="A salon and makeup studio in Vadavalli, Coimbatore, focused on bridal work, everyday salon services and training the next generation of beauticians."
      />

      <section className="container section">
        <div className="split">
          <Reveal>
            <p className="eyebrow">What we do</p>
            <h2>Bridal work first, everything else too</h2>
            <p className="muted">
              Most of our work is bridal makeup and styling, supported by hair, skin care and ear
              piercing for regular clients. We also run a short beautician course for anyone
              starting out in the trade.
            </p>
            <p className="muted">
              We keep this site deliberately factual. Anything we have not confirmed — prices,
              timings, offers — is something we would rather tell you directly on WhatsApp than
              publish and regret later.
            </p>
            <div className="btn-row">
              <WhatsAppLink label="Talk to us" />
              <Link className="btn btn-ghost" to="/contact">
                Contact details
              </Link>
            </div>
          </Reveal>
          <Reveal className="media media-wide">
            <img
              src={frontageImage}
              alt="Salon frontage with the signboard visible"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
