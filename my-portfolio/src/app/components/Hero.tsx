"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";

function Clock() {
  const [t, setT] = useState("");
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const opts: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };
      setT(now.toLocaleTimeString("en-GB", opts) + " PKT");
    };
    tick();
    const id = setInterval(tick, 1000 * 30);
    return () => clearInterval(id);
  }, []);
  return (
    <span>
      <span className="sq" /> {t}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-meta">
          <span>
            <span className="sq" /> Available for new-grad roles, 2026
          </span>
          <Clock />
          <span>Karachi, Pakistan</span>
        </div>
        <div className="hero-grid">
          <div>
            <h1>
              <span className="name-line">Yousha</span>
              <br />
              <span className="name-line">Mehdi</span>
              <span className="ital">.</span>
            </h1>
            <p className="hero-tagline">
              Software Engineer focused on <em>Machine Learning</em> and{" "}
              <em>Data Science</em>. I build scalable, AI-driven applications
              from the model all the way to production.
            </p>
            <div className="hero-ctas">
              <a href="#work" className="btn primary">
                View work <span className="arr">↗</span>
              </a>
              <a
                href="/assets/Syed_Yousha_Resume.pdf"
                type="application/pdf"
                download="Syed_Yousha_Resume.pdf"
                target="_blank"
                rel="noopener"
                className="btn"
              >
                Download résumé <span className="arr">↓</span>
              </a>
            </div>
          </div>
          <div className="hero-portrait">
            <span className="hero-portrait-label">SY / PORTRAIT 001</span>
            <img src="/assets/yousha.jpg" alt="Syed Yousha" />
            <span className="hero-portrait-caption">KHI · 2025</span>
          </div>
        </div>
      </div>
      <div className="scroll-hint">Scroll · 04 sections</div>
    </section>
  );
}
