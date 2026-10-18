/**
 * ============================================================================
 * src/components/GalleryGrid.jsx  —  PHOTO GRID + FILTERS + FULL-SCREEN VIEW
 * ----------------------------------------------------------------------------
 * This is the most "interactive" component on the site. It has TWO pieces of
 * remembered state:
 *   1. activeFilter  -> which filter button is selected ("all", "bridal", ...)
 *   2. lightboxItem  -> the photo currently open full-screen (or null = closed)
 *
 * REACT IDEAS USED HERE
 *   - `useState`  -> remembers the two values above. Changing them re-renders
 *                    the component with the new UI.
 *   - `useEffect` -> while the lightbox is open, lock background scrolling and
 *                    let Escape close it.
 *   - `.map()`    -> turns an array of data into an array of <button> elements.
 *                    ("For each photo, make a button.")
 * ============================================================================
 */

import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import { galleryCategories, site } from "../data/site";

export default function GalleryGrid({ items }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxItem, setLightboxItem] = useState(null);

  // Only offer filter buttons for categories that actually have photos.
  const usedCategories = new Set(items.map((item) => item.category));
  const filters = galleryCategories.filter(
    (category) => category.id === "all" || usedCategories.has(category.id),
  );

  // The photos to show: all of them, or only the chosen category.
  const visibleItems =
    activeFilter === "all" ? items : items.filter((item) => item.category === activeFilter);

  // Lock page scrolling and enable Escape while the lightbox is open.
  useEffect(() => {
    if (!lightboxItem) return;

    document.body.style.overflow = "hidden";

    function onKeyDown(event) {
      if (event.key === "Escape") setLightboxItem(null);
    }
    document.addEventListener("keydown", onKeyDown);

    // Cleanup when the lightbox closes.
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxItem]);

  // If there are no approved photos at all, show a friendly message instead.
  if (items.length === 0) {
    return (
      <Reveal className="empty-state">
        <p style={{ marginTop: 0 }}>No photos have been cleared for publication yet.</p>
        <p style={{ marginBottom: 0 }}>
          You can still see our latest work on{" "}
          <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
            {site.instagramHandle}
          </a>
          .
        </p>
      </Reveal>
    );
  }

  return (
    <>
      {/* -------- Filter buttons -------- */}
      <Reveal className="filter-bar" role="group" aria-label="Filter gallery by category">
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            // aria-pressed tells screen readers (and our CSS) which is selected.
            aria-pressed={activeFilter === filter.id}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </Reveal>

      {/* -------- Photo grid -------- */}
      <Reveal className="gallery-grid">
        {visibleItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className="gallery-item"
            onClick={() => setLightboxItem(item)}
          >
            <span className="media">
              <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
            </span>
            {item.caption && <span className="gallery-caption">{item.caption}</span>}
          </button>
        ))}
      </Reveal>

      {visibleItems.length === 0 && (
        <p className="empty-state">Nothing in this category yet.</p>
      )}

      {/* -------- Lightbox (full-screen viewer) --------
          data-open controls whether CSS shows it. Clicking the dark backdrop
          closes it; the × button also closes it. */}
      <div
        className="lightbox"
        data-open={lightboxItem ? "true" : "false"}
        role="dialog"
        aria-modal="true"
        aria-label="Image viewer"
        onClick={(event) => {
          // Only close when the click is on the backdrop itself.
          if (event.target === event.currentTarget) setLightboxItem(null);
        }}
      >
        <button
          className="lightbox-close"
          type="button"
          aria-label="Close image viewer"
          onClick={() => setLightboxItem(null)}
        >
          &times;
        </button>
        <div className="lightbox-inner">
          {/* Optional chaining (?.) is safe when lightboxItem is null. */}
          <img src={lightboxItem?.src || ""} alt={lightboxItem?.alt || ""} />
          <p className="lightbox-caption">
            {lightboxItem ? lightboxItem.caption || lightboxItem.alt : ""}
          </p>
        </div>
      </div>
    </>
  );
}
