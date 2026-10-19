import { useEffect } from "react";
import WhatsAppLink from "./WhatsAppLink";


export default function ServiceDetailsModal({ service, details, image, alt, onClose, }) {
  useEffect(() => {
  document.body.style.overflow = "hidden";

  return () => {
    document.body.style.overflow = "";
  };
}, []);
  if (!service || !details) {
    return null;
  }

  return (
    <div className="service-modal-overlay" onClick={onClose}>
      <section
        className="service-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="service-modal-close"
          onClick={onClose}
          aria-label="Close service details"
        >
          ×
        </button>

            {image && (
      <div className="service-modal-image">
        <img src={image} alt={alt || service.name} />
      </div>
    )}

    <div className="service-modal-content">
      <p className="service-modal-eyebrow">
        KALAI'S BEAUTY SALON & TRAINING ACADEMY
      </p>

      <div className="service-modal-title-row">
  <h2 id="service-modal-title">{service.name}</h2>

  <div className="service-duration">
    <span className="service-duration-label">DURATION</span>
    <span className="service-duration-value">
      {details.duration || "Please enquire"}
    </span>
  </div>
</div>
      <p>{details.overview}</p>

      <h3>What's Included</h3>
      <ul>
        {details.includes?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>How It Works</h3>
      <ol>
        {details.process?.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      <h3>Who Is It Suitable For?</h3>
      <p>{details.suitableFor}</p>
      <h3>Precautions</h3>
      <p>{details.precautions}</p>

      <h3>Aftercare</h3>
      <ul>
        {details.aftercare?.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>

      <div className="service-modal-info">
        
        {/* <p><strong>Price:{}</p> */}

        <WhatsAppLink
          intent={service.category === "bridal" ? "bridal" : "salon"}
          label={service.enquiryLabel}
          variant="ghost"
        />
      </div>
    </div>
      </section>
    </div>
  );
}
