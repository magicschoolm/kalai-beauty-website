/**
 * ============================================================================
 * src/components/JewelleryTeaser.jsx  —  THE "COMING SOON" JEWELLERY PANEL
 * ----------------------------------------------------------------------------
 * A small promotional block used on the home page. It links the visitor to
 * WhatsApp until the separate jewellery website exists.
 *
 * Because the whole block is wrapped in <Reveal> with className="card", it
 * fades in and gets the standard white card background automatically.
 * ============================================================================
 */

import Reveal from "./Reveal";
import WhatsAppLink from "./WhatsAppLink";
import teaserImage from "../assets/images/jewellery-teaser/jewellery.png";

export default function JewelleryTeaser() {
  return (
    <Reveal
      as="section"
      className="card"
      style={{
        display: "grid",
        gap: "1.5rem",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(14rem, 100%), 1fr))",
        alignItems: "center",
      }}
    >
      <div className="media media-portrait" style={{ boxShadow: "none", margin: 0 }}>
        <img
          src={teaserImage}
          alt="Jewellery piece featured by the salon"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div>
        <p className="eyebrow">Jewellery</p>
        <h3>Our jewellery collection is coming soon</h3>
        <p className="muted">
          We are putting together a separate jewellery website. Until it launches you can ask us
          about pieces and availability right here on WhatsApp.
        </p>
        <WhatsAppLink intent="jewellery" label="Ask about jewellery" />
      </div>
    </Reveal>
  );
}
