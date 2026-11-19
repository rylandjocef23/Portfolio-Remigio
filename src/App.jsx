import { useCallback, useState } from 'react';
import Splash from './components/Splash';
import Header from './components/Header';
import Teaser from './sections/Teaser';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  // Hero animations wait until the intro logo starts to fade out.
  const [ready, setReady] = useState(false);
  const handleLeave = useCallback(() => setReady(true), []);

  return (
    <div className={ready ? 'app ready' : 'app'}>
      <Splash onLeave={handleLeave} />

      <div className="aurora" aria-hidden="true">
        <span className="orb orb-cyan" />
        <span className="orb orb-violet" />
        <span className="orb orb-pink" />
      </div>

      <Header />

      <main>
        <Teaser />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Ryland Jocef Remigio (Ry). All rights reserved.</p>
          <p className="footer-sub">Built with React and Vite</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
