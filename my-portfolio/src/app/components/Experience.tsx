import { PORTFOLIO_DATA } from "../data";

export default function Experience() {
  const D = PORTFOLIO_DATA;
  return (
    <section className="sec reveal" style={{ paddingTop: 60 }}>
      <div className="container">
        <div className="sec-head">
          <span className="sec-num">· Experience</span>
          <h2 className="sec-title">
            In the <span className="ital">field</span>.
          </h2>
          <p className="sec-desc">
            Early industry exposure at a Karachi-based software agency.
          </p>
        </div>
        {D.experience.map((x, i) => (
          <div className="xp-row" key={i}>
            <div className="xp-date">{x.dates}</div>
            <div>
              <h4>{x.role}</h4>
              <div className="company">{x.company}</div>
              <p>{x.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
