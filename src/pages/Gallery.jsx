/**
 * ============================================================================
 * src/pages/Gallery.jsx  —  THE GALLERY PAGE
 * ----------------------------------------------------------------------------
 * Shows the approved photos. All the interactive behaviour (filters, the
 * full-screen lightbox) lives inside <GalleryGrid>, so this page stays simple.
 * ============================================================================
 */

import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import GalleryGrid from "../components/GalleryGrid";
import WhatsAppLink from "../components/WhatsAppLink";
import Reveal from "../components/Reveal";
import { site } from "../data/site";
import { renderableGalleryItems } from "../data/gallery";

export default function Gallery() {
  return (
    <>
      <Seo
        title={`Gallery | ${site.brandName}, Vadavalli, Coimbatore`}
        description="Selected bridal, hair and salon work from Kalai's beauty & academy, Vadavalli, Coimbatore."
      />

      <PageHero
        eyebrow="Gallery"
        title="Our work"
        intro="A small, hand-picked set of photos. Every image here is one we have cleared for the website."
      >
        <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
          See more on {site.instagramHandle} &rarr;
        </a>
      </PageHero>

      <section className="container section">
        <GalleryGrid items={renderableGalleryItems} />
      </section>

      {/* -------- Call to action -------- */}
      <section className="container section">
        <Reveal
          className="card"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h2 style={{ fontSize: "clamp(1.6rem, 1.4rem + 0.9vw, 2rem)", marginBottom: ".4rem" }}>
              Looking for a specific style?
            </h2>
            <p className="muted" style={{ margin: 0 }}>
              Tell us the look you have in mind and we will share more examples on WhatsApp.
            </p>
          </div>
          <WhatsAppLink intent="bridal" label="Ask to see more" />
        </Reveal>
      </section>
    </>
  );
}
