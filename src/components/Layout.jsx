import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <header className="header animate-fade-in">
        <div className="container">
          <nav className="nav-links">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>
      </header>

      <main className="container" style={{ minHeight: '70vh' }}>
        <Outlet />
      </main>

      <footer className="container animate-fade-in delay-3" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '20px', marginTop: '60px', textAlign: 'center', color: 'var(--text-secondary)' }}>
        <p>&copy; {new Date().getFullYear()} Ryland Jocef Remigio (Ry). All rights reserved.</p>
        <p style={{ fontSize: '0.9rem', marginTop: '5px' }}>Built with React, Vite & Passion</p>
      </footer>
    </>
  );
}