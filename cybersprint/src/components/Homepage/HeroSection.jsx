import { Link } from 'react-router-dom';
import '../../styles/Homepage/HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-section flex items-center justify-center min-h-[80vh] px-4 text-center">
      <div className="max-w-3xl w-full mx-auto">
        {/* Headline */}
        <h1 className="hero-heading">
          A Smarter Way to Learn Cybersecurity
        </h1>

        {/* Subheading */}
        <p className="hero-subheading">
          CyberSprint helps you learn fast, track progress, and dominate cybersecurity in a way that feels intuitive and fun.
        </p>

        {/* Call to Action */}
        <Link to="/dashboard">
          <button className="start-button-blend">
            🚀 Start Learning
          </button>
        </Link>
      </div>
    </section>
  );
}