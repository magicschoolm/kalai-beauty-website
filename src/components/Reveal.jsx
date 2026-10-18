/**
 * ============================================================================
 * src/components/Reveal.jsx  —  FADE-AND-SLIDE ANIMATION ON SCROLL
 * ----------------------------------------------------------------------------
 * Wrap anything in <Reveal> ... </Reveal> and it starts slightly transparent
 * and 24px lower, then slides into place the first time it scrolls into view.
 *
 * WHY A COMPONENT? So every section on the site animates the same way and you
 * change the effect in ONE place.
 *
 * HOW IT WORKS
 *   - `useRef`    keeps a reference to the real DOM element.
 *   - `useState`  remembers whether the element has been seen yet.
 *   - `useEffect` runs after the element is on the page and starts watching it
 *     with an IntersectionObserver (a browser tool that tells you when an
 *     element enters the screen).
 *
 * ACCESSIBILITY: if the visitor has "reduce motion" switched on, we skip the
 * animation entirely and show the content immediately.
 *
 * PROPS
 *   children  -> what to animate
 *   className -> extra Tailwind classes to add
 *   as        -> which HTML tag to render (default "div"), e.g. as="h1"
 *   ...rest   -> any other HTML attribute (id, style, onClick...) is passed
 *                straight through to the element.
 * ============================================================================
 */

import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, className = "", as: Tag = "div", ...rest }) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Respect the visitor's "reduce motion" setting.
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // animate once, then stop watching
          }
        });
      },
      { threshold: 0.1 },
    );

    observer.observe(element);

    // Cleanup: stop watching if the component is removed from the page.
    return () => observer.disconnect();
  }, []);

  // When hidden: transparent + pushed down. When visible: fully shown.
  // These are ordinary Tailwind utility classes.
  const stateClasses = isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6";

  return (
    <Tag
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${stateClasses} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
