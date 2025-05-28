// src/pages/Home.jsx
import '../styles/Home.css';
import HeroSection from '../components/HeroSection';
import FeatureHighlights from '../components/FeatureHighlights';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="homepage bg-[#0F0F1A] text-white min-h-screen">
      <HeroSection />
      <FeatureHighlights />
      <Footer />
    </main>
  );
}