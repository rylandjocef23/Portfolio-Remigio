import { useEffect, useRef, useState } from 'react';

// 'meet' is the profile intro below the teaser; it counts as Home in the nav.
const sectionIds = ['home', 'meet', 'about', 'projects', 'contact'];

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const [active, setActive] = useState('home');
  const progressRef = useRef(null);

  // Highlight the nav link for whichever section is crossing the middle of the screen.
  useEffect(() => {
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id === 'meet' ? 'home' : entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Scroll progress bar + make sure "Contact" lights up at the very bottom of the page.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${ratio})`;
      if (max > 0 && window.scrollY >= max - 2) setActive('contact');
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#home" className="brand gradient-text" aria-label="Ry Remigio, back to top">
          Ry
        </a>
        <nav className="nav-links" aria-label="Main">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? 'active' : ''}
              aria-current={active === link.id ? 'true' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="progress" ref={progressRef} aria-hidden="true" />
    </header>
  );
}
