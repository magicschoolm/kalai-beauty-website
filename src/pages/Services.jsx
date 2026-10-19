
/**
 * src/pages/Services.jsx
 * E-commerce-style services page for Kalai's Beauty & Academy.
 */

import { useState } from "react";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import ServiceCard from "../components/ServiceCard";
import FAQList from "../components/FAQList";
import WhatsAppLink from "../components/WhatsAppLink";
import Reveal from "../components/Reveal";
import { site } from "../data/site";
import { serviceCategories } from "../data/services";
import { faqs } from "../data/faqs";
import stylingImage from "../assets/images/services/ask-first.png";
import hairImage from "../assets/images/hair/floral-hairstyle.webp";
import bridalImage from "../assets/images/bridal/bridal-makeup-styling.webp";
import facialImage from "../assets/images/skin-care/facial-service-poster.webp";
// Automatically load every image in src/assets/images/services.
// Filenames are matched to service names without spaces/punctuation/case.
import ServiceDetailsModal from "../components/ServiceDetailsModal";
import { serviceDetails } from "../data/serviceDetails";
// import { serviceDetails } from "../data/serviceDetails";
const imageModules = import.meta.glob(
  "../assets/images/services/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const normalizeName = (value) =>
  value.toLowerCase().replace(/[^a-z0-9]/g, "");

const serviceImages = Object.fromEntries(
  Object.entries(imageModules).map(([path, imageUrl]) => {
    const filename = path.split("/").pop().replace(/\.[^.]+$/, "");
    const key = normalizeName(filename);

    return [
      key,
      {
        src: imageUrl,
        alt: `${filename} beauty service`,
      },
    ];
  })
);

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedService, setSelectedService] = useState(null);
  const [activeService, setActiveService] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState([
    "skin-care",
  ]);

  // Convert the grouped category data into one flat list.
  const allServices = serviceCategories.flatMap((category) =>
    category.services.map((service) => ({
      ...service,
      category: category.id,
      categoryName: category.name,
    }))
  );

  // Filter services by category or individual service.
  const filteredServices = allServices.filter((service) => {
    const matchesCategory =
      selectedCategory === "all" ||
      service.category === selectedCategory;

    const matchesService =
      selectedService === null ||
      service.id === selectedService;

    return matchesCategory && matchesService;
  });

  const currentCategory = serviceCategories.find(
    (category) => category.id === selectedCategory
  );

  const toggleCategory = (categoryId) => {
    setExpandedCategories((previous) =>
      previous.includes(categoryId)
        ? previous.filter((id) => id !== categoryId)
        : [...previous, categoryId]
    );
  };

  const showAllServices = () => {
    setSelectedCategory("all");
    setSelectedService(null);
  };

  const selectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    setSelectedService(null);
  };

  const selectService = (categoryId, serviceId) => {
    setSelectedCategory(categoryId);
    setSelectedService(serviceId);
  };

  return (
    <>
      <Seo
        title={`Salon Services in Vadavalli, Coimbatore | ${site.brandName}`}
        description="Explore bridal makeup, haircuts, hair colouring, facials, skincare, nail art and beauty treatments at Kalai's Beauty & Academy in Vadavalli, Coimbatore. Prices on request."
      />

      <PageHero
        eyebrow="Our Services"
        title="Discover Your Beauty"
        intro="Explore our hair, skin, nail and makeup services. Choose a service and contact us on WhatsApp to enquire about availability and pricing."
      />

      {/* Services shopping layout */}
      <section className="container section">
        <div className="services-shop-layout">

          {/* LEFT SIDEBAR */}
          <aside className="services-sidebar">
            <div className="services-sidebar-header">
              <h2 className="services-filter-title">
                Browse Services
              </h2>

              <p className="muted">
                Find the right service for you.
              </p>
            </div>

            {/* Show all services */}
            <button
              type="button"
              className={`services-category-button ${
                selectedCategory === "all" ? "active" : ""
              }`}
              onClick={showAllServices}
              aria-pressed={selectedCategory === "all"}
            >
              <span>All Services</span>
              <span className="services-count">
                {allServices.length}
              </span>
            </button>

            {/* Category dropdowns */}
            {serviceCategories.map((category) => {
              const isExpanded = expandedCategories.includes(
                category.id
              );

              const isActive = selectedCategory === category.id;

              return (
                <div
                  key={category.id}
                  className="services-filter-group"
                >
                  <div className="services-filter-heading">
                    <button
                      type="button"
                      className={`services-category-button ${
                        isActive ? "active" : ""
                      }`}
                      onClick={() => selectCategory(category.id)}
                      aria-pressed={isActive}
                    >
                      <span>{category.name}</span>

                      <span className="services-count">
                        {category.services.length}
                      </span>
                    </button>

                    <button
                      type="button"
                      className="services-expand-button"
                      onClick={() => toggleCategory(category.id)}
                      aria-label={`${
                        isExpanded ? "Collapse" : "Expand"
                      } ${category.name}`}
                      aria-expanded={isExpanded}
                    >
                      <span aria-hidden="true">
                        {isExpanded ? "−" : "+"}
                      </span>
                    </button>
                  </div>

                  {/* Individual services */}
                  {isExpanded && (
                    <ul className="services-subcategory-list">
                      {category.services.map((service) => (
                        <li key={service.id}>
                          <button
                            type="button"
                            className={`services-subcategory-button ${
                              selectedService === service.id
                                ? "active"
                                : ""
                            }`}
                            onClick={() =>
                              selectService(
                                category.id,
                                service.id
                              )
                            }
                          >
                            {service.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </aside>

          {/* RIGHT CONTENT */}
          <div className="services-results">
            <div className="services-results-header">
              <div>
                {/* <p className="eyebrow">
                  Kalai's Beauty & Academy
                </p> */}

                <h2>
                  {selectedService
                    ? filteredServices[0]?.name
                    : currentCategory?.name || "All Services"}
                </h2>

                <p className="muted">
                  Showing {filteredServices.length}{" "}
                  {filteredServices.length === 1
                    ? "service"
                    : "services"}
                </p>
              </div>

              {(selectedCategory !== "all" ||
                selectedService !== null) && (
                <button
                  type="button"
                  className="services-reset-button"
                  onClick={showAllServices}
                >
                  View all services
                </button>
              )}
            </div>

            {/* Service cards */}
            {filteredServices.length > 0 ? (
              <div className="services-product-grid">
                
{filteredServices.map((service) => {
  const image = serviceImages[normalizeName(service.name)];

  return (
    <ServiceCard
      key={service.id}
      service={service}
      image={image?.src}
      alt={image?.alt}
      onViewDetails={setActiveService}
    />
  );
})}

              </div>
            ) : (
              <p className="services-empty-state">
                No services found in this category.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
        <section className="container section">
        <div className="split">
          <Reveal className="media media-wide">
            <img
              src={stylingImage}
              alt="A styling service being carried out on a client in the salon"
              loading="lazy"
              decoding="async"
            />
          </Reveal>

          <Reveal>
            <p className="eyebrow">How it works</p>

            <h2>Ask first, then book</h2>

            <p className="muted">
              Send us the service you want and your preferred
              date. We will check availability and confirm the
              details and price on WhatsApp. Nothing is booked
              until we confirm it.
            </p>

            <WhatsAppLink
              intent="salon"
              label="Ask about a service"
            />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="container section">
        <Reveal as="p" className="eyebrow">
          Questions
        </Reveal>

        <Reveal as="h2">
          Before you visit
        </Reveal>

        <FAQList items={faqs} />
      </section>
      
{activeService && (
  <>
    {/* {console.log("Active service:", activeService)}
    {console.log(
      "Details found:",
      serviceDetails[activeService.id]
    )} */}

    <ServiceDetailsModal
      service={activeService}
      details={serviceDetails[activeService.id]}
      image={
        serviceImages[normalizeName(activeService.name)]?.src
      }
      alt={
        serviceImages[normalizeName(activeService.name)]?.alt
      }
      onClose={() => setActiveService(null)}
    />
  </>
)}

    </>
  );
}
