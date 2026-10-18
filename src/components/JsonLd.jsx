/**
 * ============================================================================
 * src/components/JsonLd.jsx  —  DATA THAT HELPERS GOOGLE UNDERSTAND
 * ----------------------------------------------------------------------------
 * "JSON-LD" is a small block of data (address, opening hours, FAQ answers...)
 * that tells search engines exactly what this page is about.
 *
 * It is put inside a <script type="application/ld+json"> tag. React can render
 * that tag directly, and because JSON-LD is just data (the browser does not
 * "run" it), we inject the text with `dangerouslySetInnerHTML`.
 *
 * Pass any plain JavaScript object as `data`.
 * ============================================================================
 */

export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
