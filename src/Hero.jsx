// Hero + Cursor + Nav components
const { useEffect, useState, useRef } = React;

function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(max-width: 820px)').matches) { setHidden(true); return; }
    let mx = window.innerWidth/2, my = window.innerHeight/2;
    let rx = mx, ry = my;
    let raf;
    const onMove = (e) => { mx = e.clientX; my = e.clientY; };
    const onEnter = (e) => {
      const t = e.target;
      if (!t || !t.matches) return;
      if (t.closest('a, button, .repo, .project, .swatch, .font-opt, .chip')) {
        ringRef.current?.classList.add('hover');
        ringRef.current?.classList.remove('text');
      } else if (t.closest('p, h1, h2, h3, h4, li, .summary')) {
        ringRef.current?.classList.add('text');
        ringRef.current?.classList.remove('hover');
      } else {
        ringRef.current?.classList.remove('hover');
        ringRef.current?.classList.remove('text');
      }
    };
    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (dotRef.current) dotRef.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onEnter);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onEnter);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (hidden) return null;
  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}

function Nav({ onToggleTheme, dark }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', on);
    on();
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <div className="nav-brand">
          <span className="dot" />
          <span>SY·01</span>
          <span style={{color:'var(--ink-4)',marginLeft:8}}>/</span>
          <span>PORTFOLIO</span>
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#archive">Archive</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-right">
          <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
            {dark ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

function Clock() {
  const [t, setT] = useState('');
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const opts = { timeZone: 'Asia/Karachi', hour: '2-digit', minute: '2-digit', hour12: false };
      setT(now.toLocaleTimeString('en-GB', opts) + ' PKT');
    };
    tick();
    const id = setInterval(tick, 1000 * 30);
    return () => clearInterval(id);
  }, []);
  return <span><span className="sq" /> {t}</span>;
}

function Hero() {
  const D = window.PORTFOLIO_DATA;
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-meta">
          <span><span className="sq" /> Available for new-grad roles, 2026</span>
          <Clock />
          <span>Karachi, Pakistan</span>
        </div>
        <div className="hero-grid">
          <div>
            <h1>
              <span className="name-line">Yousha</span><br/>
              <span className="name-line">Mehdi</span><span className="ital">.</span>
            </h1>
            <p className="hero-tagline">
              Software Engineer focused on <em>Machine Learning</em> and <em>Data Science</em>. I build scalable, AI-driven applications from the model all the way to production.
            </p>
            <div className="hero-ctas">
              <a href="#work" className="btn primary">
                View work <span className="arr">↗</span>
              </a>
              <a href="assets/Syed_Yousha_Resume.pdf" type="application/pdf" download="Syed_Yousha_Resume.pdf" target="_blank" rel="noopener" className="btn">
                Download résumé <span className="arr">↓</span>
              </a>
            </div>
          </div>
          <div className="hero-portrait">
            <span className="hero-portrait-label">SY / PORTRAIT 001</span>
            <img src="assets/yousha.jpg" alt="Syed Yousha" />
            <span className="hero-portrait-caption">KHI · 2025</span>
          </div>
        </div>
      </div>
      <div className="scroll-hint">Scroll · 04 sections</div>
    </section>
  );
}

Object.assign(window, { Cursor, Nav, Hero });
