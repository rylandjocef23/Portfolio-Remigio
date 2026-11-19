import { useEffect, useRef, useState } from 'react';
import Portrait from '../components/Portrait';

export default function Hero() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  // The introduction plays when the visitor scrolls down to it.
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="meet" ref={ref} className={`section hero${inView ? ' in-view' : ''}`}>
      <div className="container hero-grid">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="hero-line">Hi, I'm Ryland!</span>
            <span className="hero-line gradient-text gradient-animated">
              I build systems &amp; experiences.
            </span>
          </h1>

          <p className="hero-copy">
            BSIT Student | Specialized Developer | IT Support Specialist. I specialize in clean,
            event-driven web applications, and modern UI design.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn">Explore my work</a>
            <a href="#contact" className="btn btn-ghost">Contact me</a>
          </div>
        </div>

        <Portrait />
      </div>
    </section>
  );
}
