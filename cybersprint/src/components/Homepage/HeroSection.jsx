import { Link } from 'react-router-dom';
import '../../styles/Homepage/HeroSection.css';
import heroVideo from "../Media/Hero-section.mp4"; // Ensure this path is correct

export default function HeroSection() {
  return (
    <section className="hero-section relative flex items-center justify-center min-h-[80vh] px-4 text-center overflow-hidden">
      
      {/* Background Video Effect */}
      <video
        autoPlay
        loop
        muted
        playsInline
        ref={(video) => {
          if (video) video.playbackRate = 0.5; // Slow down playback
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 mb-[30vh] h-[60vh] max-h-[750px] scale-125 mix-blend-screen pointer-events-none z-0"
        src={heroVideo}
/>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-3xl w-full mx-auto">
        <h1 className="hero-heading">
          A Smarter Way to Learn Cybersecurity
        </h1>
        <p className="hero-subheading">
          CyberSprint helps you learn fast, track progress, and dominate cybersecurity in a way that feels intuitive and fun.
        </p>
        <Link to="/dashboard">
          <button className="start-button-blend">
            🚀 Start Learning
          </button>
        </Link>
      </div>
    </section>
  );
}