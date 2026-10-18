/**
 * ============================================================================
 * src/pages/Course.jsx  —  THE BEAUTICIAN COURSE PAGE
 * ----------------------------------------------------------------------------
 * Shows what the course covers, three quick facts (duration / batches / fee)
 * and an enquiry form. The course details come from src/data/course.js.
 * ============================================================================
 */

import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import WhatsAppLink from "../components/WhatsAppLink";
import EnquiryForm from "../components/EnquiryForm";
import Reveal from "../components/Reveal";
import { site } from "../data/site";
import { course, courseModules } from "../data/course";

export default function Course() {
  return (
    <>
      <Seo
        title={`10-Day Beautician Course in Coimbatore | ${site.brandName}`}
        description="10-day beautician course in Coimbatore: skin, hair, makeup, threading, nails and bridal makeover. Ask Kalai's beauty & academy for batches."
      />

      <PageHero eyebrow="Beautician course" title={course.title} intro={course.summary}>
        <div className="btn-row">
          <WhatsAppLink intent="course" label="Ask about the next batch" />
          <a className="btn btn-ghost" href="#enrol">
            Enquire about joining
          </a>
        </div>
      </PageHero>

      {/* -------- What you learn -------- */}
      <section className="container section">
        <Reveal className="card">
          <p className="eyebrow">What you learn</p>
          <ul className="list-check">
            {courseModules.map((module) => (
              <li key={module.id}>
                <strong>{module.title}</strong> — {module.summary}
              </li>
            ))}
          </ul>
          <p className="muted" style={{ fontSize: ".88rem", margin: "1.5rem 0 0" }}>
            Topics are confirmed with us before each batch; the exact syllabus is shared when you
            ask.
          </p>
        </Reveal>
      </section>

      {/* -------- Three quick facts -------- */}
      <section className="container section">
        <div className="grid grid-3">
          <Reveal className="card">
            <h3 style={{ fontSize: "1.15rem" }}>Duration</h3>
            <p className="muted" style={{ margin: 0 }}>
              {course.durationText}, full time. Confirm the current schedule with us.
            </p>
          </Reveal>
          <Reveal className="card">
            <h3 style={{ fontSize: "1.15rem" }}>Batch dates</h3>
            <p className="muted" style={{ margin: 0 }}>
              Shared on WhatsApp — ask us for the next start date.
            </p>
          </Reveal>
          <Reveal className="card">
            <h3 style={{ fontSize: "1.15rem" }}>Fee</h3>
            <p className="muted" style={{ margin: 0 }}>
              Ask us for the current course fee before joining.
            </p>
          </Reveal>
        </div>
        <Reveal as="p" className="note" style={{ marginTop: "1.5rem" }}>
          We do not publish fees or start dates on this page so you never see an out-of-date figure.
          Message us and we will send the current details.
        </Reveal>
      </section>

      {/* -------- Enrol form -------- */}
      <section className="container section" id="enrol">
        <div className="split">
          <Reveal>
            <p className="eyebrow">Enrol</p>
            <h2>Ask about joining</h2>
            <p className="muted">
              Tell us your name and when you would like to start. We open WhatsApp with your message
              and reply with batch dates, fee and seats.
            </p>
            <p className="note">Enrolling is confirmed only when we reply — not by sending this form.</p>
          </Reveal>
          <EnquiryForm context="course" />
        </div>
      </section>
    </>
  );
}
