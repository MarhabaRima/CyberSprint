import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navbar-Footer/Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : 'transparent'}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">CyberSprint</Link>
        <div className="navbar-links">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/dashboard" className="nav-item">Dashboard</Link>
          <Link to="/modules" className="nav-item">Modules</Link>
          <Link to="/quizzes" className="nav-item">Quizzes</Link>
        </div>
      </div>
    </nav>
  );
}