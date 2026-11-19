import { useEffect, useState } from 'react';

const reduceMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function Splash({ onLeave }) {
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(() => {
    if (typeof window === 'undefined') return false;
    const navigation = window.performance?.getEntriesByType?.('navigation')[0];
    return navigation?.type === 'reload';
  });

  useEffect(() => {
    if (gone) {
      onLeave?.();
      return;
    }

    const hold = reduceMotion() ? 800 : 2300;
    document.body.style.overflow = 'hidden';

    const leave = setTimeout(() => {
      setLeaving(true);
      onLeave?.();
    }, hold);
    const remove = setTimeout(() => {
      setGone(true);
      document.body.style.overflow = '';
    }, hold + 700);

    return () => {
      clearTimeout(leave);
      clearTimeout(remove);
      document.body.style.overflow = '';
    };
  }, [gone, onLeave]);

  if (gone) return null;

  return (
    <div className={`splash${leaving ? ' leaving' : ''}`} role="presentation" aria-hidden="true">
      <div className="splash-glow" />
      <div className="splash-inner">
        <div className="logo-mark">
          <svg viewBox="0 0 120 120">
            <defs>
              <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#67e8f9" />
                <stop offset="0.55" stopColor="#a78bfa" />
                <stop offset="1" stopColor="#f0abfc" />
              </linearGradient>
            </defs>
            <circle className="logo-track" cx="60" cy="60" r="54" />
            <circle className="logo-ring" cx="60" cy="60" r="54" />
          </svg>
          <span className="logo-letters gradient-text">Ry</span>
        </div>
        <p className="splash-name">Ryland Jocef Remigio</p>
      </div>
    </div>
  );
}
