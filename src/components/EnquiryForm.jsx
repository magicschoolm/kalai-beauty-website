/**
 * ============================================================================
 * src/components/EnquiryForm.jsx  —  THE ENQUIRY FORM
 * ----------------------------------------------------------------------------
 * IMPORTANT: this form saves NOTHING and sends NOTHING to a server. When the
 * visitor submits, we simply OPEN WhatsApp with their message written out.
 * They read it and press Send there. That is the whole "backend".
 *
 * STATE WE REMEMBER (all with useState)
 *   form            -> the current text in each field
 *   errors          -> the error message for each field (empty = no error)
 *   status          -> the message shown under the button
 *   fallbackMessage -> if WhatsApp cannot open, the text to copy instead
 *   copied          -> whether the "Copy" button was just pressed
 *
 * PROPS
 *   context -> "general" | "bridal" | "course". Chooses which "reason" options
 *              appear first in the dropdown.
 * ============================================================================
 */

import { useState } from "react";
import { composeEnquiry, waLink } from "../lib/whatsapp";
import { site } from "../data/site";

// Simple rules we check before opening WhatsApp.
const NAME_MIN = 2;
const NAME_MAX = 80;
const NOTE_MAX = 500;

// The "What can we help with?" options, ordered by relevance to the page.
const BRIDAL_INTENTS = [
  { value: "bridal", label: "Bridal makeup" },
  { value: "salon", label: "Salon service" },
  { value: "course", label: "Beautician course" },
  { value: "jewellery", label: "Jewellery" },
  { value: "general", label: "General enquiry" },
];

const DEFAULT_INTENTS = [
  { value: "general", label: "General enquiry" },
  { value: "bridal", label: "Bridal makeup" },
  { value: "salon", label: "Salon service" },
  { value: "course", label: "Beautician course" },
  { value: "jewellery", label: "Jewellery" },
];

export default function EnquiryForm({ context = "general" }) {
  const intents = context === "bridal" ? BRIDAL_INTENTS : DEFAULT_INTENTS;

  const [form, setForm] = useState({
    name: "",
    intent: intents[0].value,
    date: "",
    note: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ message: "", state: "ok" });
  const [fallbackMessage, setFallbackMessage] = useState("");
  const [copied, setCopied] = useState(false);

  /** Update one field and clear its error as the visitor types. */
  function updateField(field, value) {
    setForm((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: undefined }));
  }

  /** Return an object of error messages; empty object means "all good". */
  function validate(values) {
    const found = {};

    const name = values.name.trim();
    if (name.length < NAME_MIN) found.name = "Please enter your name.";
    else if (name.length > NAME_MAX)
      found.name = `Please keep your name under ${NAME_MAX} characters.`;

    const date = values.date.trim();
    if (date && Number.isNaN(Date.parse(date))) found.date = "Please enter a valid date.";

    const note = values.note.trim();
    if (note.length > NOTE_MAX)
      found.note = `Please keep your note under ${NOTE_MAX} characters.`;

    return found;
  }

  function handleSubmit(event) {
    event.preventDefault(); // stop the browser reloading the page

    const found = validate(form);
    setErrors(found);

    if (Object.keys(found).length > 0) {
      setStatus({ message: "Please check the highlighted field.", state: "error" });
      return;
    }

    // Build the message text and the WhatsApp URL.
    const message = composeEnquiry({
      name: form.name,
      intent: form.intent,
      date: form.date || undefined,
      note: form.note || undefined,
    });
    const url = waLink(message);

    // Try to open WhatsApp in a new tab.
    const opened = window.open(url, "_blank");

    if (!opened) {
      // Pop-up blocked: give the visitor the text to send manually.
      setFallbackMessage(message);
      setStatus({
        message: `We could not open WhatsApp automatically. Call ${site.phoneDisplay} or copy the message below and send it yourself.`,
        state: "error",
      });
      return;
    }

    opened.opener = null; // small security tidy-up
    setStatus({
      message:
        "WhatsApp should open with your message ready. Review it and press Send there — that is what sends it, and it does not confirm a booking.",
      state: "ok",
    });
  }

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(fallbackMessage);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <form className="form card" onSubmit={handleSubmit} noValidate>
      {/* -------- Name -------- */}
      <div className="field">
        <label htmlFor="enq-name">Your name</label>
        <input
          id="enq-name"
          name="name"
          type="text"
          autoComplete="name"
          maxLength={NAME_MAX}
          value={form.name}
          onChange={(event) => updateField("name", event.target.value)}
          aria-invalid={errors.name ? "true" : undefined}
        />
        <span className="error">{errors.name}</span>
      </div>

      {/* -------- What can we help with? -------- */}
      <div className="field">
        <label htmlFor="enq-intent">What can we help with?</label>
        <select
          id="enq-intent"
          name="intent"
          value={form.intent}
          onChange={(event) => updateField("intent", event.target.value)}
        >
          {intents.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* -------- Preferred date (optional) -------- */}
      <div className="field">
        <label htmlFor="enq-date">
          Preferred date <span className="muted">(optional)</span>
        </label>
        <input
          id="enq-date"
          name="date"
          type="date"
          value={form.date}
          onChange={(event) => updateField("date", event.target.value)}
          aria-invalid={errors.date ? "true" : undefined}
        />
        <span className="error">{errors.date}</span>
      </div>

      {/* -------- Anything else (optional) -------- */}
      <div className="field">
        <label htmlFor="enq-note">
          Anything else <span className="muted">(optional)</span>
        </label>
        <textarea
          id="enq-note"
          name="note"
          rows={3}
          maxLength={NOTE_MAX}
          value={form.note}
          onChange={(event) => updateField("note", event.target.value)}
          aria-invalid={errors.note ? "true" : undefined}
        />
        <span className="error">{errors.note}</span>
      </div>

      <button className="btn" type="submit">
        Open WhatsApp with my enquiry
      </button>

      {/* role="status" makes screen readers announce changes politely. */}
      <p className="form-status" role="status" aria-live="polite" data-state={status.state}>
        {status.message}
      </p>

      {/* Shown only when the browser blocked the WhatsApp pop-up. */}
      {fallbackMessage && (
        <div className="note">
          <p style={{ margin: "0 0 .6rem" }}>{fallbackMessage}</p>
          <button type="button" className="btn btn-ghost" onClick={copyMessage}>
            {copied ? "Copied" : "Copy message"}
          </button>
          <a
            className="btn"
            href={`https://wa.me/${site.whatsappDigits}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginInlineStart: ".6rem" }}
          >
            Open WhatsApp
          </a>
        </div>
      )}

      <p className="muted" style={{ fontSize: ".85rem", margin: 0 }}>
        This opens WhatsApp with your message ready. Nothing is sent to us until you press Send
        there, and it does not confirm a booking.
      </p>
    </form>
  );
}
