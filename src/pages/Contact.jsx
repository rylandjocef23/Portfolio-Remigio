export default function Contact() {
  return (
    <div className="animate-slide-up">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Let's <span className="text-accent">Connect</span></h2>
      
      <div className="card animate-slide-up delay-1" style={{ padding: '40px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <h3 style={{ marginBottom: '15px' }}>Interested in Collaboration?</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
          Whether it's front-end web development, UI/UX design, or discussing retro game reverse engineering, I'm always open to talking.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
          <div style={{ background: 'var(--bg-color)', padding: '15px', borderRadius: '8px', width: '100%', border: '1px solid var(--border-color)' }}>
            <strong className="text-accent">Location:</strong> Olongapo City, Zambales, Philippines
          </div>
          <div style={{ background: 'var(--bg-color)', padding: '15px', borderRadius: '8px', width: '100%', border: '1px solid var(--border-color)' }}>
            <strong className="text-accent">Institution:</strong> Gordon College (CCS)
          </div>
          <div style={{ background: 'var(--bg-color)', padding: '15px', borderRadius: '8px', width: '100%', border: '1px solid var(--border-color)' }}>
            <strong className="text-accent">Email:</strong> <span style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>ryland.remigio@example.com (Update later)</span>
          </div>
        </div>
      </div>
    </div>
  );
}