import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Optional for hover styling

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo / Brand */}
        <Link to="/" className="navbar-logo">
          CyberSprint
        </Link>

        {/* Navigation Links */}
        <nav className="navbar-links">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/dashboard" className="nav-item">Dashboard</Link>
          <Link to="/modules" className="nav-item">Modules</Link>
          <Link to="/quizzes" className="nav-item">Quizzes</Link>
        </nav>
      </div>
    </header>
  );
}