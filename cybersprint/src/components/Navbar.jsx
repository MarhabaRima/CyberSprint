import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? 'text-purple-500' : 'text-white';

  return (
    <nav className="bg-[#1A1A2C] px-6 py-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-xl font-bold text-purple-400">
        CyberSprint
      </Link>
      <div className="space-x-4 text-sm sm:text-base">
        <Link to="/" className={isActive('/')}>
          Home
        </Link>
        <Link to="/dashboard" className={isActive('/dashboard')}>
          Dashboard
        </Link>
      </div>
    </nav>
  );
}