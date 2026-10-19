/**
 * ============================================================================
 * src/pages/Home.jsx  —  THE HOME PAGE
 * ----------------------------------------------------------------------------
 * A React page is just a component that returns the HTML structure of the
 * page. Notice how it is built from the small pieces we made earlier:
 *   <Seo>, <Reveal>, <WhatsAppLink>, <ServiceCard>, <JewelleryTeaser>.
 *
 * TO EDIT THE TEXT on this page: change the words between the tags below.
 * TO REORDER SECTIONS: move a whole <section> ... </section> block up or down.
 * ============================================================================
 */

import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import WhatsAppLink from "../components/WhatsAppLink";
import ServiceCard from "../components/ServiceCard";
import JewelleryTeaser from "../components/JewelleryTeaser";
import { site } from "../data/site";
import { services } from "../data/services";
import { course } from "../data/course";

// The photos used on this page. Importing an image gives us its URL.
import heroImage from "../assets/images/hero/hero.jpg";
import bridalImage from "../assets/images/bridal/Bridal_2.jpg";
import hairImage from "../assets/images/services/Basic to Advanced Haircuts_1.webp"
import facialImage from "../assets/images/services/FacialS.jpg"
import bridalImages from "../assets/images/bridal/Bridal_1.jpg"
// import piercingImage from "../assets/images/services/ear-piercing-service.webp";
// import facialImage from "../assets/images/skin-care/";

/**
 * Small helper: find a service by its id, or throw a clear error if the id is
 * wrong (so a typo is caught immediately instead of showing a blank card).
 */
function serviceById(id) {
  const found = services.find((service) => service.id === id);
  if (!found) throw new Error(`Unknown service: ${id}`);
  return found;
}

export default function Home() {
  return (
    
    <>
      <Seo
        title={`${site.brandName} | Bridal Makeup, Salon & Beautician Course in Vadavalli, Coimbatore`}
        description="Bridal makeup, hair, skin care and a 10-day beautician course in Vadavalli, Coimbatore. Enquire with Kalai's beauty & academy on WhatsApp."
      />

      {/* ================= HERO ================= */}
      <section className="container hero">
        <Reveal>
          <p className="eyebrow">
            {site.brandName} · {site.locationLabel}
          </p>
          <h1>
            Bridal glow, healthy skin, <em>beautiful hair.</em>
          </h1>
          <p className="lede">
            A salon and makeup studio in Vadavalli, Coimbatore — bridal makeup and styling, everyday
            salon services and a 10-day beautician course.
          </p>
          <div className="btn-row">
            <WhatsAppLink label="Enquire on WhatsApp" />
            <Link className="btn btn-ghost" to="/services">
              See our services
            </Link>
          </div>
          <p className="muted" style={{ fontSize: ".85rem", marginTop: "1rem" }}>
            Message us and we reply personally — the website does not confirm a booking.
          </p>
        </Reveal>

        <Reveal className="media media-portrait hero-media">
          <img
            src={heroImage}
            alt="Finished look photographed in front of a flower-decorated arch"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <span className="pill hero-tag">Vadavalli · Coimbatore</span>
        </Reveal>
      </section>

      {/* ================= BRIDAL ================= */}
      <section className="container section">
        <div className="split">
          <Reveal className="media media-portrait split-media">
            <img
              src={bridalImage}
              alt="Traditional bridal makeup and styling, with jasmine flowers in the hair"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <Reveal>
            <p className="eyebrow">Bridal</p>
            <h2>Your wedding look, planned around your date</h2>
            <p className="muted">
              Bridal makeup and styling is what we are best known for. Tell us your date, your outfit
              and the look you have in mind, and we will take it from there.
            </p>
            <div className="btn-row">
              <Link className="btn" to="/bridal">
                Explore bridal
              </Link>
              <WhatsAppLink intent="bridal" label="Check a date" variant="ghost" />
            </div>
          </Reveal>
        </div>
      </section>

      
{/* ================= SERVICES ================= */}
<section className="container section">
  <Reveal as="p" className="eyebrow">
    Services
  </Reveal>

  <Reveal as="h2">Everything under one roof</Reveal>

  <Reveal as="p" className="lede">
    Prices are shared on request so you always get the current rate.
  </Reveal>

  <div className="grid grid-3" style={{ marginTop: "2rem" }}>
    <ServiceCard
      service={serviceById("haircuts")}
      image={hairImage}
      alt="Hairstyle decorated with fresh flowers, seen from behind"
    />

    <ServiceCard
      service={serviceById("facials")}
      image={facialImage}
      alt="Facial and skin-care service poster"
    />

    <ServiceCard
      service={serviceById("bridal-makeup")}
      image={bridalImages}
      alt="Bridal makeup and styling"
    />
  </div>

  <Reveal as="p" style={{ marginTop: "1.5rem" }}>
    <Link to="/services">View all services</Link>
  </Reveal>
</section>


      {/* ================= BEAUTICIAN COURSE ================= */}
      <section className="container section">
        <Reveal className="card split">
          <div>
            <p className="eyebrow">Beautician course</p>
            <h2>{course.title}</h2>
            <p className="muted">{course.summary}</p>
            <div className="btn-row">
              <Link className="btn" to="/course">
                Course details
              </Link>
              <WhatsAppLink intent="course" label="Ask about batches" variant="ghost" />
            </div>
          </div>
          <div>
            <ul className="list-check">
              <li>Skin care and facials</li>

              <li>Hair care and styling</li>
              <li>Makeup, basics through bridal</li>
              <li>Threading, waxing, manicure &amp; pedicure</li>
            </ul>
            <p className="muted" style={{ fontSize: ".88rem", marginTop: "1rem" }}>
              Batch dates and fees are shared on WhatsApp.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ================= JEWELLERY TEASER ================= */}
      <section className="container section">
        <JewelleryTeaser />
      </section>
    </>
  );
}
