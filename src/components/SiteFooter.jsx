/**
 * ============================================================================
 * src/components/SiteFooter.jsx  —  THE BOTTOM BAR ON EVERY PAGE
 * ----------------------------------------------------------------------------
 * Shows the address, opening hours, the menu links and the contact links.
 * The `navigation` list is the SAME one the header uses, so you never have to
 * update the menu in two places.
 * ============================================================================
 */

import { Link } from "react-router-dom";
import { navigation, site } from "../data/site";
import { telLink } from "../lib/whatsapp";

export default function SiteFooter() {
  // Always show the current year in the copyright line.
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* -------- Column 1: who we are -------- */}
          <div>
            <h3>{site.brandName}</h3>
            <address className="muted" style={{ fontStyle: "normal", lineHeight: 1.6 }}>
              {site.fullAddress}
            </address>
            <p className="muted">{site.openingHoursText}</p>
            <p className="muted">Bridal makeup, salon services and a 10-day beautician course.</p>
          </div>

          {/* -------- Column 2: menu links -------- */}
          <div>
            <h3>Explore</h3>
            <ul>
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* -------- Column 3: contact -------- */}
          <div>
            <h3>Contact</h3>
            <ul>
              <li>
                <a href={telLink()}>{site.phoneDisplay}</a>
              </li>
              <li>
                <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
                  {site.instagramHandle}
                </a>
              </li>
              <li>
                <a href={site.mapDirectionsUrl} target="_blank" rel="noopener noreferrer">
                  Get directions
                </a>
              </li>
              <li>
                <Link to="/contact">All contact options</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            &copy; {year} {site.brandName}
          </span>
          <span>
            Enquiries are answered personally on WhatsApp — the website does not confirm bookings.
          </span>
        </div>
      </div>
    </footer>
  );
}
