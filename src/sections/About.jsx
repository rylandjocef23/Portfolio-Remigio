const groups = [
  {
    title: 'Frontend & UI',
    items: ['React & Vite', 'Tailwind CSS', 'Vanilla JS & HTML5', 'Visual Graphic Design', 'PPT Presentation Design'],
  },
  {
    title: 'Specialized Interests',
    items: ['Serverless APIs', 'Acoustic Music & Audio'],
  },
];

export default function About() {
  return (
    <section id="about" className="section section-about">
      <div className="container">
        <h2 className="section-title gradient-text">About me</h2>

        <div className="card panel">
          <p className="lead">
            I'm Ryland Jocef Remigio, an optimistic and specialized developer passionate about
            creating websites and systems using HTML, JavaScript, and CSS. I enjoy turning ideas
            into thoughtful, functional, and engaging digital experiences.
          </p>

          <h3 className="panel-heading">Tech stack &amp; expertise</h3>

          <div className="skill-grid">
            {groups.map((group) => (
              <div key={group.title}>
                <h4 className="skill-title gradient-text">{group.title}</h4>
                <ul className="skill-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
