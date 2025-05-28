import { Link } from 'react-router-dom';
import '../styles/HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-section flex items-center justify-center min-h-[80vh] px-4 text-center">
      <div className="max-w-3xl w-full mx-auto">
        {/* Bold BlendingSpoons-style headline */}
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
          A Smarter Way to Learn Cybersecurity
        </h1>

        {/* Subheading with confident tone */}
        <p className="text-lg sm:text-xl text-gray-400 mb-10">
          CyberSprint helps you learn fast, track progress, and dominate cybersecurity in a way that feels intuitive and fun.
        </p>

        {/* Modern CTA */}
        <Link to="/dashboard">
          <button className="start-button-blend">
            🚀 Start Learning
          </button>
        </Link>
      </div>
    </section>
  );
}