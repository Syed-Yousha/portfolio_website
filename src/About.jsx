// About + Skills section
function About() {
  const D = window.PORTFOLIO_DATA;
  return (
    <section id="about" className="sec reveal">
      <div className="container">
        <div className="sec-head">
          <span className="sec-num">01 · About</span>
          <h2 className="sec-title">Thinking in <span className="ital">systems</span>, <br/>shipping in <span className="ital">production</span>.</h2>
          <p className="sec-desc">A final-year CS student at FAST-NUCES. ML engineer by training, full-stack by necessity.</p>
        </div>
        <div className="about-grid">
          <div className="about-bio">
            {D.about.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="about-side">
            <div className="info-block">
              <h4>Essentials</h4>
              <div className="rows">
                <div className="info-row"><strong>Based in</strong><span>Karachi, PK · UTC+5</span></div>
                <div className="info-row"><strong>Education</strong><span>FAST-NUCES · BSCS · '26</span></div>
                <div className="info-row"><strong>Focus</strong><span>ML + Backend</span></div>
                <div className="info-row"><strong>Status</strong><span>Open · new-grad 2026</span></div>
              </div>
            </div>
            <div className="info-block">
              <h4>Toolbelt</h4>
              <div className="skills-grid">
                {Object.entries(D.skills).map(([cat, items]) => (
                  <div className="skill-row" key={cat}>
                    <span className="cat">{cat}</span>
                    <div className="skill-chips">
                      {items.map(s => <span className="chip" key={s}>{s}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const words = ['Machine Learning', 'Full-Stack Engineering', 'Data Science', 'FastAPI', 'CNNs & LLMs', 'Docker + Redis', 'React & Flutter'];
  const line = [...words, ...words];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {line.map((w, i) => (
          <React.Fragment key={i}>
            <span>{w}</span>
            <span className="sep">✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { About, Marquee });
