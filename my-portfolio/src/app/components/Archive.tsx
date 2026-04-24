import { PORTFOLIO_DATA } from "../data";

export default function Archive() {
  const D = PORTFOLIO_DATA;
  return (
    <section id="archive" className="sec reveal">
      <div className="container">
        <div className="sec-head">
          <span className="sec-num">03 · Archive</span>
          <h2 className="sec-title">
            Public <span className="ital">repositories</span>.
          </h2>
          <p className="sec-desc">
            A sampling from 33 repos on GitHub: coursework, experiments, and
            side projects.
          </p>
        </div>
        <div className="repo-grid">
          {D.repos.map((r) => (
            <a
              key={r.url}
              href={r.url}
              target="_blank"
              rel="noopener"
              className="repo"
            >
              <div className="repo-head">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.5 2.5 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.5 2.5 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.25.25 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
                </svg>
                <span>{r.name}</span>
              </div>
              <p className="repo-desc">{r.desc}</p>
              <div className="repo-foot">
                <span className="repo-lang">
                  <span
                    className="bullet"
                    style={{ background: r.langColor }}
                  />
                  {r.lang}
                </span>
                <span style={{ marginLeft: "auto" }}>↗ github</span>
              </div>
            </a>
          ))}
        </div>
        <div style={{ marginTop: 32, textAlign: "center" }}>
          <a href={D.github} target="_blank" rel="noopener" className="btn">
            See all 33 repositories <span className="arr">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
