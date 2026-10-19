  /**
   * ============================================================================
   * src/components/ServiceCard.jsx  —  ONE SERVICE CARD
   * ----------------------------------------------------------------------------
   * This is a "presentational" component: it takes props and renders them. It
   * does not fetch or remember anything. The Services page and the Home page
   * both use it, so a service looks identical in both places.
   *
   * PROPS
   *   service -> one object from src/data/services.js
   *   image   -> the image URL to show at the top (optional)
   *   alt     -> text description of the image (required with an image)
   * ============================================================================
   */

  import Reveal from "./Reveal";

export default function ServiceCard({
  service,
  image,
  alt,
  onViewDetails,
}) {    
    return (
      // `card` gives the white box; `service-card` stacks image, title, text.
      <Reveal as="article" className="card service-card">
        {image && alt && (
          <div className="media media-wide">
            <img src={image} alt={alt} loading="lazy" decoding="async" />
          </div>
        )}

        <h3>{service.name}</h3>
        <p>{service.summary}</p>

        {/* Prices are never stored in the data files, so we always invite a
            WhatsApp enquiry instead of showing a number that could go stale. */}
        <p className="muted" style= {{ fontSize: ".9rem" }}>
          Price on request — ask us on WhatsApp.
        </p>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => {
            // console.log(service.id);
            // console.log(onViewDetails);
            onViewDetails?.(service);
          }}
        >
          View Details
        </button>
      </Reveal>
    );
  }
