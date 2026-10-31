import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <header style={{ borderBottom: '2px solid #eee', paddingBottom: '15px', marginBottom: '30px' }}>
        <nav style={{ display: 'flex', gap: '20px', fontSize: '1.1rem' }}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main style={{ minHeight: '60vh' }}>
        <Outlet />
      </main>

      <footer style={{ borderTop: '2px solid #eee', paddingTop: '15px', marginTop: '40px', textAlign: 'center', color: '#666' }}>
        <p>&copy; {new Date().getFullYear()} Remigio. All rights reserved.</p>
      </footer>
    </div>
  );
}