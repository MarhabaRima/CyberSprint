// src/components/HeroSection.jsx
import '../styles/HeroSection.css';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="hero px-6 py-20 sm:py-32 text-center">
      <h1 className="text-4xl sm:text-6xl font-bold text-purple-400 mb-4 leading-tight">
        Welcome to CyberSprint
      </h1>
      <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-6">
        A fast-paced cybersecurity course designed to track your learning, reinforce your skills, and keep you ahead.
      </p>
      <Link to="/dashboard">
        <button className="cta-button bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition">
          Start Learning
        </button>
      </Link>
    </section>
  );
}