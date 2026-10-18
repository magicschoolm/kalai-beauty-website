/**
 * ============================================================================
 * src/components/WhatsAppLink.jsx  —  A BUTTON THAT OPENS WHATSAPP
 * ----------------------------------------------------------------------------
 * Used everywhere a "message us" button appears. It always looks the same, so
 * you only edit it here.
 *
 * PROPS
 *   intent   -> WHY the person is messaging. Controls the pre-written message.
 *               One of: "general" | "bridal" | "salon" | "course" | "jewellery"
 *   label    -> the text on the button
 *   variant  -> "solid" (filled violet) or "ghost" (green outline)
 *   className-> extra Tailwind classes
 * ============================================================================
 */

import { waLink, intentMessage } from "../lib/whatsapp";

export default function WhatsAppLink({
  intent = "general",
  label = "Ask on WhatsApp",
  variant = "solid",
  className = "",
}) {
  // `.btn` is the main button style from index.css.
  // `.btn-ghost` turns it into the green outline version.
  const classes = variant === "ghost" ? `btn btn-ghost ${className}` : `btn ${className}`;

  return (
    <a
      className={classes}
      // Build the WhatsApp link from the intent's message.
      href={waLink(intentMessage(intent))}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
}
