// Archive (repos) + Experience + Contact + Footer + Tweaks
function Archive() {
  const D = window.PORTFOLIO_DATA;
  return (
    <section id="archive" className="sec reveal">
      <div className="container">
        <div className="sec-head">
          <span className="sec-num">03 · Archive</span>
          <h2 className="sec-title">Public <span className="ital">repositories</span>.</h2>
          <p className="sec-desc">A sampling from 33 repos on GitHub: coursework, experiments, and side projects.</p>
        </div>
        <div className="repo-grid">
          {D.repos.map(r => (
            <a key={r.name} href={`${D.github}/${r.name}`} target="_blank" rel="noopener" className="repo">
              <div className="repo-head">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.5 2.5 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.5 2.5 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.25.25 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"/></svg>
                <span>{r.name}</span>
              </div>
              <p className="repo-desc">{r.desc}</p>
              <div className="repo-foot">
                <span className="repo-lang"><span className="bullet" style={{background: r.langColor}} />{r.lang}</span>
                <span style={{marginLeft:'auto'}}>↗ github</span>
              </div>
            </a>
          ))}
        </div>
        <div style={{marginTop:32, textAlign:'center'}}>
          <a href={D.github} target="_blank" rel="noopener" className="btn">
            See all 33 repositories <span className="arr">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const D = window.PORTFOLIO_DATA;
  return (
    <section className="sec reveal" style={{paddingTop: 60}}>
      <div className="container">
        <div className="sec-head">
          <span className="sec-num">· Experience</span>
          <h2 className="sec-title">In the <span className="ital">field</span>.</h2>
          <p className="sec-desc">Early industry exposure at a Karachi-based software agency.</p>
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

function Contact() {
  const D = window.PORTFOLIO_DATA;
  return (
    <section id="contact" className="contact reveal">
      <div className="container">
        <div className="sec-head" style={{border:'none',paddingBottom:0,marginBottom:40}}>
          <span className="sec-num">04 · Contact</span>
          <span className="sec-num" style={{textAlign:'right'}}>Let's build something</span>
        </div>
        <div className="contact-inner">
          <div>
            <h2>Let's <span className="ital">talk</span>.</h2>
            <a href={`mailto:${D.email}`} className="mail-link">
              {D.email} <span className="arr">↗</span>
            </a>
            <p style={{color:'var(--ink-3)', fontSize:15, maxWidth:520, margin:0}}>
              Open to new-grad Software Engineer, ML Engineer, and Research Engineer roles, relocating or remote. Typically reply within 24 hours.
            </p>
          </div>
          <div className="contact-side">
            <div className="contact-links">
              <a className="c-link" href={D.github} target="_blank" rel="noopener">
                <span className="lbl">GitHub</span>
                <span className="val">Syed-Yousha <span>↗</span></span>
              </a>
              <a className="c-link" href={D.linkedin} target="_blank" rel="noopener">
                <span className="lbl">LinkedIn</span>
                <span className="val">yousha-mehdi <span>↗</span></span>
              </a>
              <a className="c-link" href={`tel:${D.phone.replace(/\s/g,'')}`}>
                <span className="lbl">Phone</span>
                <span className="val">{D.phone} <span>↗</span></span>
              </a>
              <a className="c-link" href="assets/Syed_Yousha_Resume.pdf" type="application/pdf" download="Syed_Yousha_Resume.pdf" target="_blank" rel="noopener">
                <span className="lbl">Résumé</span>
                <span className="val">PDF · 2025 <span>↓</span></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterBar() {
  return (
    <footer className="footer container">
      <span>© 2026 Syed Yousha · Karachi</span>
      <span className="tick"><span className="dot" />Available for new-grad roles · 2026</span>
      <span>Built with HTML, CSS, React · No templates</span>
    </footer>
  );
}

/* ============ TWEAKS ============ */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#ffd60a",
  "fontPair": "instrument-geist",
  "dark": false
}/*EDITMODE-END*/;

const ACCENTS = [
  { label: 'Amber', val: '#ffd60a' },
  { label: 'Ember', val: '#ff5722' },
  { label: 'Mint', val: '#00d4aa' },
  { label: 'Iris', val: '#7c5cff' },
  { label: 'Ink', val: '#141311' },
];

const FONT_PAIRS = [
  { id: 'instrument-geist', label: 'Instrument + Geist', display: '"Instrument Serif"', body: '"Geist"' },
  { id: 'fraunces-inter', label: 'Fraunces + Inter', display: '"Fraunces"', body: '"Inter"' },
  { id: 'jetbrains-inter', label: 'JetBrains + Inter', display: '"JetBrains Mono"', body: '"Inter"' },
  { id: 'eb-geist', label: 'EB Garamond + Geist', display: '"EB Garamond"', body: '"Geist"' },
];

function Tweaks({ dark, setDark }) {
  const [active, setActive] = React.useState(false);
  const [accent, setAccent] = React.useState(TWEAK_DEFAULTS.accent);
  const [fontPair, setFontPair] = React.useState(TWEAK_DEFAULTS.fontPair);

  React.useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === '__activate_edit_mode') setActive(true);
      if (e.data?.type === '__deactivate_edit_mode') setActive(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({type:'__edit_mode_available'}, '*');
    return () => window.removeEventListener('message', handler);
  }, []);

  React.useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    const soft = accent + '33';
    document.documentElement.style.setProperty('--accent-soft', soft);
    // ink-on-accent — use dark text for light accents, light text for dark
    const dark = accent === '#141311';
    document.documentElement.style.setProperty('--accent-ink', dark ? '#f7f4ee' : '#141311');
  }, [accent]);

  React.useEffect(() => {
    const pair = FONT_PAIRS.find(p => p.id === fontPair) || FONT_PAIRS[0];
    document.documentElement.style.setProperty('--f-display', `${pair.display}, Georgia, serif`);
    document.documentElement.style.setProperty('--f-body', `${pair.body}, -apple-system, sans-serif`);
  }, [fontPair]);

  if (!active) return null;
  return (
    <div className="tweaks">
      <h5>Tweaks <span className="x" onClick={() => setActive(false)}>×</span></h5>
      <div className="tweak-group">
        <label>Accent color</label>
        <div className="swatches">
          {ACCENTS.map(a => (
            <div
              key={a.val}
              className={`swatch ${accent === a.val ? 'active' : ''}`}
              style={{background: a.val}}
              title={a.label}
              onClick={() => {
                setAccent(a.val);
                window.parent.postMessage({type:'__edit_mode_set_keys', edits:{accent: a.val}}, '*');
              }}
            />
          ))}
        </div>
      </div>
      <div className="tweak-group">
        <label>Typography</label>
        <div className="font-options">
          {FONT_PAIRS.map(p => (
            <button
              key={p.id}
              className={`font-opt ${fontPair === p.id ? 'active' : ''}`}
              onClick={() => {
                setFontPair(p.id);
                window.parent.postMessage({type:'__edit_mode_set_keys', edits:{fontPair: p.id}}, '*');
              }}
              style={{fontFamily: p.display + ', serif'}}
            >{p.label}</button>
          ))}
        </div>
      </div>
      <div className="tweak-group">
        <label>Theme</label>
        <div className="font-options">
          <button className={`font-opt ${!dark ? 'active' : ''}`} onClick={() => setDark(false)}>Light</button>
          <button className={`font-opt ${dark ? 'active' : ''}`} onClick={() => setDark(true)}>Dark</button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Archive, Experience, Contact, FooterBar, Tweaks });
