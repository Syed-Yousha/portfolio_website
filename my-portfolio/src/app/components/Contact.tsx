import { PORTFOLIO_DATA } from "../data";

export default function Contact() {
  const D = PORTFOLIO_DATA;
  return (
    <section id="contact" className="contact reveal">
      <div className="container">
        <div
          className="sec-head"
          style={{ border: "none", paddingBottom: 0, marginBottom: 40 }}
        >
          <span className="sec-num">04 · Contact</span>
          <span className="sec-num" style={{ textAlign: "right" }}>
            Let&apos;s build something
          </span>
        </div>
        <div className="contact-inner">
          <div>
            <h2>
              Let&apos;s <span className="ital">talk</span>.
            </h2>
            <a href={`mailto:${D.email}`} className="mail-link">
              {D.email} <span className="arr">↗</span>
            </a>
            <p
              style={{
                color: "var(--ink-3)",
                fontSize: 15,
                maxWidth: 520,
                margin: 0,
              }}
            >
              Open to new-grad Software Engineer, ML Engineer, and Research
              Engineer roles, relocating or remote. Typically reply within 24
              hours.
            </p>
          </div>
          <div className="contact-side">
            <div className="contact-links">
              <a
                className="c-link"
                href={D.github}
                target="_blank"
                rel="noopener"
              >
                <span className="lbl">GitHub</span>
                <span className="val">
                  Syed-Yousha <span>↗</span>
                </span>
              </a>
              <a
                className="c-link"
                href={D.linkedin}
                target="_blank"
                rel="noopener"
              >
                <span className="lbl">LinkedIn</span>
                <span className="val">
                  yousha-mehdi <span>↗</span>
                </span>
              </a>
              <a className="c-link" href={`tel:${D.phone.replace(/\s/g, "")}`}>
                <span className="lbl">Phone</span>
                <span className="val">
                  {D.phone} <span>↗</span>
                </span>
              </a>
              <a
                className="c-link"
                href="/assets/Syed_Yousha_Resume.pdf"
                type="application/pdf"
                download="Syed_Yousha_Resume.pdf"
                target="_blank"
                rel="noopener"
              >
                <span className="lbl">Résumé</span>
                <span className="val">
                  PDF · 2025 <span>↓</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
