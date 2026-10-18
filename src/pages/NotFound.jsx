/**
 * ============================================================================
 * src/pages/NotFound.jsx  —  THE "PAGE NOT FOUND" (404) PAGE
 * ----------------------------------------------------------------------------
 * Shown for any address that does not match a page. It offers helpful links
 * so a lost visitor can get back on track.
 * ============================================================================
 */

import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import WhatsAppLink from "../components/WhatsAppLink";
import Reveal from "../components/Reveal";
import { navigation, site } from "../data/site";

export default function NotFound() {
  return (
    <>
      <Seo
        title={`Page not found | ${site.brandName}`}
        description="This page does not exist. Head back to Kalai's beauty & academy."
      />

      <section className="container section">
        <Reveal as="p" className="eyebrow">
          404
        </Reveal>
        <Reveal as="h1">That page has moved or never existed</Reveal>
        <Reveal as="p" className="lede">
          Sorry about that. Try one of the links below, or message us and we will help.
        </Reveal>

        <Reveal className="btn-row">
          <Link className="btn" to="/">
            Back to home
          </Link>
          <Link className="btn btn-ghost" to="/services">
            Our services
          </Link>
          <WhatsAppLink label="Ask on WhatsApp" />
        </Reveal>

        <nav aria-label="Site pages" style={{ marginTop: "2.5rem" }}>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              padding: 0,
              margin: 0,
            }}
          >
            {navigation.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </>
  );
}
