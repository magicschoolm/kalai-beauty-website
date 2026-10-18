/**
 * ============================================================================
 * src/components/SiteHeader.jsx  —  THE STICKY TOP BAR
 * ----------------------------------------------------------------------------
 * Shows the brand, the desktop menu, a WhatsApp button and, on phones, a
 * hamburger button that opens the mobile menu.
 *
 * REACT IDEAS USED HERE
 *   - `useState`  -> remembers whether the mobile menu is open.
 *   - <Link>      -> react-router's version of <a>. It changes the page
 *                    WITHOUT reloading the whole site.
 *   - <NavLink>   -> like <Link> but it automatically adds
 *                    aria-current="page" to the link of the current page, so
 *                    the CSS highlights the active menu item. Free win.
 *   - `useEffect` -> closes the menu on Escape and when the window widens.
 * ============================================================================
 */

import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navigation, site } from "../data/site";
import { waLink, intentMessage } from "../lib/whatsapp";
import logo from "../assets/images/logo/logo_5.png";
export default function SiteHeader() {
  // `true` = mobile menu open, `false` = closed.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Pressing Escape closes the menu (nice for keyboard users).
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") setIsMenuOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Close the menu automatically when the screen becomes desktop-sized.
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 62rem)");
    function onChange(event) {
      if (event.matches) setIsMenuOpen(false);
    }
    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
       

            
{/* -------- Brand logo + location -------- */}
<Link className="brand" to="/" aria-label="Kalai's Beauty Salon and Training Academy home">
  <img
    src={logo}
    alt="Kalai's Beauty Salon and Training Academy"
    className="brand-logo"
  />

  {/* <small className="brand-location">
    {site.locationLabel}
  </small> */}
</Link>


        {/* -------- Desktop menu (hidden on phones by CSS) -------- */}
        <nav aria-label="Main">
          <ul className="nav-list">
            {navigation.map((item) => (
              <li key={item.path}>
                {/* NavLink adds aria-current="page" by itself when active. */}
                <NavLink to={item.path}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* -------- WhatsApp button + hamburger -------- */}
        <div className="header-actions">
          <a
            className="btn"
            href={waLink(intentMessage("general"))}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp us
          </a>

          <button
            className="nav-toggle"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* -------- Mobile menu (shown only when open) -------- */}
      <div className="mobile-nav container" id="mobile-navigation" data-open={isMenuOpen}>
        <nav aria-label="Mobile">
          <ul>
            {navigation.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <a
          className="btn"
          href={waLink(intentMessage("general"))}
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat on WhatsApp
        </a>
      </div>
    </header>
  );
}
