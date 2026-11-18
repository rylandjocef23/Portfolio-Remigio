import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="animate-slide-up">
      <div style={{ marginTop: '50px', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '3.5rem', lineHeight: '1.2' }}>
          Hi, I'm <span className="text-accent">Ry</span>.<br/>
          I Build <span className="text-accent">Systems</span> & Experiences.
        </h1>
        
        <p className="animate-slide-up delay-1" style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '20px 0 30px' }}>
          BSIT Student | Frontend Developer | IT Support Specialist. 
          I specialize in clean, event-driven web applications, modern UI design, and network infrastructure.
        </p>

        <div className="animate-slide-up delay-2" style={{ display: 'flex', gap: '15px' }}>
          <Link to="/projects" className="btn">Explore My Work</Link>
          <Link to="/about" className="btn" style={{ background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}>About Me</Link>
        </div>
      </div>
    </div>
  );
}