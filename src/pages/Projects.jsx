export default function Projects() {
  return (
    <div className="animate-slide-up">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Featured <span className="text-accent">Systems</span></h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
        A collection of my proposed systems, PWAs, and academic projects. 
        (Images can be replaced in the /public/images folder).
      </p>

      <div className="card-grid">
        
        {/* Project 1 */}
        <div className="card animate-slide-up delay-1">
          <div className="card-image-container">
            <img src="/images/mindcare-preview.svg" alt="MindCare Hub Preview" className="card-image" />
          </div>
          <div className="card-content">
            <h3>MindCare Hub</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              A mobile-first Progressive Web App designed for student wellness tracking and biometric monitoring.
            </p>
            <div className="badge-container">
              <span className="badge">React</span>
              <span className="badge">Vite</span>
              <span className="badge">Tailwind</span>
              <span className="badge">Firebase</span>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="card animate-slide-up delay-2">
          <div className="card-image-container">
            <img src="/images/gordon-heights-preview.svg" alt="Barangay Gordon Heights Preview" className="card-image" />
          </div>
          <div className="card-content">
            <h3>Gordon Heights Bulletin</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Proposed System: A centralized web-based communication and hazard-monitoring platform for local barangay administration.
            </p>
            <div className="badge-container">
              <span className="badge">Web App</span>
              <span className="badge">System Analysis</span>
              <span className="badge">UI/UX</span>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="card animate-slide-up delay-3">
          <div className="card-image-container">
            <img src="/images/fairtrike-preview.svg" alt="FairTrike Preview" className="card-image" />
          </div>
          <div className="card-content">
            <h3>FairTrike & TrikeAssist</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Proposed System: A tricycle ride-booking and fare-estimation system featuring an integrated AI conversational assistant.
            </p>
            <div className="badge-container">
              <span className="badge">JSON Schema</span>
              <span className="badge">AI Integration</span>
              <span className="badge">Booking System</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}