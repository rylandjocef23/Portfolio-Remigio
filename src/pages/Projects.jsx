const projects = [
  {
    title: 'MindCare Hub',
    image: '/images/mindcare-preview.png',
    alt: 'MindCare Hub preview',
    text: 'A Progressive Web App designed for student wellness tracking, assessment tests, and biometric monitoring.',
    tags: ['React', 'Vite', 'Tailwind', 'Firebase'],
  },
  {
    title: 'Gordon Heights Bulletin',
    image: '/images/gordon-heights-preview.svg',
    alt: 'Barangay Gordon Heights preview',
    text: 'Proposed System: A centralized web-based communication and hazard-monitoring platform for local barangay administration.',
    tags: ['Web App', 'System Analysis', 'UI/UX'],
  },
  {
    title: 'FairTrike',
    image: '/images/fairtrike-preview.svg',
    alt: 'FairTrike preview',
    text: 'Proposed System: A tricycle ride-booking platform focused on trip matching and transparent fare estimation.',
    tags: ['Booking System', 'Fare Estimation', 'JSON Schema'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section section-projects">
      <div className="container">
        <h2 className="section-title gradient-text">Featured systems</h2>
        <p className="section-intro">
          A collection of my projects, including my individual proposed system, group-proposed
          systems, PWAs, and academic work.
        </p>

        <div className="card-grid">
          {projects.map((p) => (
            <article className="card project-card" key={p.title}>
              <div className="card-image-container">
                <img src={p.image} alt={p.alt} className="card-image" loading="lazy" />
              </div>
              <div className="card-content">
                <h3>{p.title}</h3>
                <p className="card-text">{p.text}</p>
                <div className="badge-container">
                  {p.tags.map((t) => (
                    <span className="badge" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
