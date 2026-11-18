export default function About() {
  return (
    <div className="animate-slide-up">
      <h2 style={{ fontSize: '2.5rem' }}>About <span className="text-accent">Me</span></h2>
      
      <div className="card animate-slide-up delay-1" style={{ padding: '30px', marginTop: '20px' }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '20px', color: 'var(--text-secondary)' }}>
          I'm Ryland Jocef Remigio, a second-year BSIT-2D student at the College of Computer Studies, 
          Gordon College in Olongapo City. I bridge the gap between creative visual design and robust technical infrastructure.
        </p>
        
        <h3 style={{ fontSize: '1.5rem', marginTop: '30px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>Tech Stack & Expertise</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
          <div>
            <h4 className="text-accent" style={{ marginBottom: '10px' }}>Frontend & UI</h4>
            <ul style={{ color: 'var(--text-secondary)', listStyleType: 'none' }}>
              <li>React & Vite</li>
              <li>Tailwind CSS</li>
              <li>Vanilla JS & HTML5</li>
              <li>Visual Graphic Design</li>
              <li>PPT Presentation Design</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-accent" style={{ marginBottom: '10px' }}>Networking & Systems</h4>
            <ul style={{ color: 'var(--text-secondary)', listStyleType: 'none' }}>
              <li>Cisco Packet Tracer</li>
              <li>1941 Routers / 2960 Switches</li>
              <li>IPv4/IPv6 Configurations</li>
              <li>IT Service Support</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-accent" style={{ marginBottom: '10px' }}>Specialized Interests</h4>
            <ul style={{ color: 'var(--text-secondary)', listStyleType: 'none' }}>
              <li>Reverse Engineering</li>
              <li>Serverless APIs</li>
              <li>Retro Game Preservation</li>
              <li>Acoustic Music & Audio</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}