import React from "react";
import { PORTFOLIO_DATA } from "../data";

const projectVisuals: Record<string, React.FC> = {
  prism: () => (
    <svg
      viewBox="0 0 400 500"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      style={{ display: "block" }}
    >
      <defs>
        <linearGradient id="pg1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#141311" />
          <stop offset="100%" stopColor="#3d3a34" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="url(#pg1)" />
      <polygon
        points="200,120 320,320 80,320"
        fill="none"
        stroke="#f7f4ee"
        strokeWidth="1.2"
        opacity="0.9"
      />
      <line x1="40" y1="220" x2="200" y2="220" stroke="#f7f4ee" strokeWidth="1.2" />
      <line x1="200" y1="220" x2="360" y2="180" stroke="#ffd60a" strokeWidth="1.6" />
      <line x1="200" y1="220" x2="360" y2="210" stroke="#ff5722" strokeWidth="1.4" />
      <line x1="200" y1="220" x2="360" y2="240" stroke="#00d4aa" strokeWidth="1.4" />
      <line x1="200" y1="220" x2="360" y2="270" stroke="#7c5cff" strokeWidth="1.4" />
      <text x="20" y="460" fill="#a8a197" fontFamily="monospace" fontSize="11" letterSpacing="2">
        TEXT → MOTION
      </text>
      <text x="20" y="478" fill="#6b665d" fontFamily="monospace" fontSize="9" letterSpacing="1">
        /prism/render_queue.py
      </text>
    </svg>
  ),
  potato: () => (
    <svg
      viewBox="0 0 400 500"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      style={{ display: "block" }}
    >
      <rect width="400" height="500" fill="#efeae0" />
      {Array.from({ length: 6 }).map((_, i) =>
        Array.from({ length: 6 }).map((_, j) => {
          const cx = 40 + j * 60,
            cy = 60 + i * 60;
          const sick = (i + j) % 4 === 0;
          return (
            <g key={`${i}-${j}`}>
              <ellipse
                cx={cx}
                cy={cy}
                rx="22"
                ry="14"
                fill={sick ? "#8a6d3b" : "#3d5a2c"}
                opacity={sick ? 0.85 : 0.7}
                transform={`rotate(${((i * 7 + j * 3) % 30) - 15} ${cx} ${cy})`}
              />
              {sick && <circle cx={cx - 4} cy={cy - 2} r="3" fill="#141311" opacity="0.7" />}
            </g>
          );
        })
      )}
      <rect x="20" y="420" width="360" height="56" fill="#141311" />
      <text x="32" y="445" fill="#ffd60a" fontFamily="monospace" fontSize="11" letterSpacing="2">
        DETECTED · LATE BLIGHT
      </text>
      <text x="32" y="462" fill="#f7f4ee" fontFamily="monospace" fontSize="10">
        confidence: 0.942  ·  t=0.18s
      </text>
    </svg>
  ),
  inam: () => (
    <svg
      viewBox="0 0 400 500"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      style={{ display: "block" }}
    >
      <rect width="400" height="500" fill="#141311" />
      <rect x="40" y="340" width="320" height="14" rx="2" fill="#3d3a34" />
      <rect x="50" y="348" width="300" height="6" rx="1" fill="#1c1a18" />
      <rect x="70" y="80" width="260" height="260" rx="6" fill="#0e0e0c" stroke="#3d3a34" strokeWidth="1.5" />
      <rect x="78" y="88" width="244" height="244" rx="3" fill="#16140f" />
      <rect x="78" y="88" width="244" height="20" fill="#1c1a18" />
      <circle cx="88" cy="98" r="2.5" fill="#ff5f57" />
      <circle cx="98" cy="98" r="2.5" fill="#febc2e" />
      <circle cx="108" cy="98" r="2.5" fill="#28c840" />
      <rect x="185" y="94" width="60" height="8" rx="1" fill="#3d3a34" />
      <rect x="78" y="108" width="60" height="224" fill="#12110e" />
      <rect x="86" y="120" width="44" height="5" rx="1" fill="#ffd60a" />
      <rect x="86" y="136" width="36" height="4" rx="1" fill="#6b665d" />
      <rect x="86" y="148" width="40" height="4" rx="1" fill="#6b665d" />
      <rect x="86" y="160" width="32" height="4" rx="1" fill="#6b665d" />
      <rect x="86" y="172" width="38" height="4" rx="1" fill="#6b665d" />
      <rect x="148" y="120" width="80" height="7" rx="1" fill="#f7f4ee" />
      <rect x="148" y="132" width="120" height="4" rx="1" fill="#6b665d" />
      <rect x="148" y="150" width="52" height="40" rx="3" fill="#1c1a18" />
      <rect x="154" y="156" width="40" height="20" rx="2" fill="#2b2824" />
      <rect x="154" y="180" width="30" height="3" rx="1" fill="#ffd60a" />
      <rect x="206" y="150" width="52" height="40" rx="3" fill="#1c1a18" />
      <rect x="212" y="156" width="40" height="20" rx="2" fill="#2b2824" />
      <rect x="212" y="180" width="26" height="3" rx="1" fill="#a8a197" />
      <rect x="264" y="150" width="52" height="40" rx="3" fill="#1c1a18" />
      <rect x="270" y="156" width="40" height="20" rx="2" fill="#2b2824" />
      <rect x="270" y="180" width="28" height="3" rx="1" fill="#a8a197" />
      <rect x="148" y="200" width="168" height="24" rx="2" fill="#1c1a18" />
      <rect x="154" y="210" width="60" height="4" rx="1" fill="#f7f4ee" />
      <rect x="220" y="210" width="40" height="4" rx="1" fill="#6b665d" />
      <rect x="266" y="210" width="44" height="4" rx="1" fill="#ffd60a" />
      <rect x="148" y="228" width="168" height="24" rx="2" fill="#1c1a18" />
      <rect x="154" y="238" width="60" height="4" rx="1" fill="#f7f4ee" />
      <rect x="220" y="238" width="40" height="4" rx="1" fill="#6b665d" />
      <rect x="266" y="238" width="36" height="4" rx="1" fill="#a8a197" />
      <rect x="148" y="256" width="168" height="24" rx="2" fill="#1c1a18" />
      <rect x="154" y="266" width="60" height="4" rx="1" fill="#f7f4ee" />
      <rect x="220" y="266" width="40" height="4" rx="1" fill="#6b665d" />
      <rect x="266" y="266" width="40" height="4" rx="1" fill="#a8a197" />
      <rect x="148" y="284" width="168" height="24" rx="2" fill="#1c1a18" />
      <rect x="154" y="294" width="60" height="4" rx="1" fill="#f7f4ee" />
      <rect x="220" y="294" width="40" height="4" rx="1" fill="#6b665d" />
      <rect x="266" y="294" width="38" height="4" rx="1" fill="#a8a197" />
      <text x="20" y="480" fill="#6b665d" fontFamily="monospace" fontSize="9" letterSpacing="1">
        FLUTTER · WINDOWS DESKTOP
      </text>
    </svg>
  ),
};

export default function Featured() {
  const D = PORTFOLIO_DATA;
  return (
    <section id="work" className="sec reveal">
      <div className="container">
        <div className="sec-head">
          <span className="sec-num">02 · Selected Work</span>
          <h2 className="sec-title">
            Three projects, <br />
            <span className="ital">end-to-end</span>.
          </h2>
          <p className="sec-desc">
            From CNN architecture to cross-platform apps. Each one shipped, or
            currently in active development.
          </p>
        </div>
        <div className="projects">
          {D.featured.map((p, i) => {
            const Vis = projectVisuals[p.id];
            return (
              <article className="project" key={p.id}>
                <div className="project-idx">
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="project-year">
                    <span>{p.year}</span>
                    <span className="status">{p.status}</span>
                    <span>Role · {p.role}</span>
                  </span>
                </div>
                <div className="project-body">
                  <h3>{p.title}</h3>
                  <div className="sub">{p.subtitle}</div>
                  <p className="summary">{p.summary}</p>
                  <ul>
                    {p.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                  <div className="project-stack">
                    {p.stack.map((s) => (
                      <span className="stack-tag" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                  {p.repo && (
                    <a
                      className="project-repo"
                      href={p.repo}
                      target="_blank"
                      rel="noopener"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                      View on GitHub <span className="arr">↗</span>
                    </a>
                  )}
                </div>
                <div className="project-visual">{Vis && <Vis />}</div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
