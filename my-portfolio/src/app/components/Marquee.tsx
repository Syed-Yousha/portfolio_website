import { Fragment } from "react";

const WORDS = [
  "Machine Learning",
  "Full-Stack Engineering",
  "Data Science",
  "FastAPI",
  "CNNs & LLMs",
  "Docker + Redis",
  "React & Flutter",
];

export default function Marquee() {
  const line = [...WORDS, ...WORDS];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {line.map((w, i) => (
          <Fragment key={i}>
            <span>{w}</span>
            <span className="sep">✦</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
