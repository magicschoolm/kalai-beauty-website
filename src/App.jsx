/**
 * ============================================================================
 * src/App.jsx  —  THE LIST OF PAGES (THE "ROUTER")
 * ----------------------------------------------------------------------------
 * This file is a map: it says "when the address is /services, show the
 * Services page". Each <Route> is one line in that map.
 *
 * The outer <Route element={<Layout />}> wraps ALL the pages, so every page
 * automatically gets the header and footer. Inside it, each <Route> picks the
 * page to show. <Layout /> decides exactly where using <Outlet />.
 *
 * ADD A NEW PAGE
 *   1. Create src/pages/MyPage.jsx.
 *   2. Import it at the top here.
 *   3. Add <Route path="/my-page" element={<MyPage />} /> below.
 *   4. Add it to the menu in src/data/site.js.
 * ============================================================================
 */

import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Bridal from "./pages/Bridal.jsx";
import Course from "./pages/Course.jsx";
import Gallery from "./pages/Gallery.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      {/* Everything inside this Route shares the Layout (header + footer). */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/bridal" element={<Bridal />} />
        <Route path="/course" element={<Course />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* "*" matches any address that did not match above = 404 page. */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
