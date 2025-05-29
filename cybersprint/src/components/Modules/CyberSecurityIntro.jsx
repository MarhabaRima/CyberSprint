import { useState } from 'react';
import CyberIntroContent from '../../data/modules/CyberIntroContent';
import Footer from '../Navbar-Footer/Footer';
import '../../styles/Modules/shared.css';
import '../../styles/Modules/CyberIntro.css';

export default function CyberSecurityIntro() {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="module-page">
      {/* Hero Section */}
      <header className="module-header">
        <h1 className="module-title">🔐 Introduction to Cybersecurity</h1>
        <p className="module-subtitle">Protecting the digital world, one byte at a time.</p>
      </header>

      {/* Content Sections */}
      {CyberIntroContent.sections.map((section, index) => {
        const isAttackSection = section.heading.toLowerCase().includes('cyber attacks');

        return (
          <div key={index}>
            <section className={`module-section fade-in ${index % 2 === 0 ? 'light-bg' : 'dark-bg'}`}>
              <h2 className="section-heading">{section.heading}</h2>
              <ul className="section-points">
                {section.content.map((point, idx) => (
                  <li key={idx} className="point-bullet">💡 {point}</li>
                ))}
              </ul>
            </section>

            {/* Map Toggle */}
            {isAttackSection && (
              <div className="map-section">
                <h2 className="section-heading clickable" onClick={() => setShowMap(!showMap)}>
                  🌍 Live Cyber Attack Map {showMap ? '▲' : '▼'}
                </h2>

                {showMap && (
                  <div className="map-container">
                    <iframe
                      title="Digital Attack Map"
                      src="https://www.digitalattackmap.com/#anim=1&color=0&country=ALL&list=0&time=18763&view=map"
                      className="live-map"
                      allowFullScreen
                    />
                    <p className="map-caption">
                      Real-time global cyber attacks — keep an eye on the digital battlefield.
                    </p>
                  </div>
                )}

                <p className="map-link">
                  🌐 <a href="https://www.digitalattackmap.com" target="_blank" rel="noopener noreferrer">Open full map</a>
                </p>
              </div>
            )}
          </div>
        );
      })}

      {/* Quick Activity */}
      <section className="module-activity">
        <h2 className="section-heading">💡 Quick Activity</h2>
        <p>
          Visit the{' '}
          <a
            href="https://informationisbeautiful.net/visualizations/worlds-biggest-data-breaches-hacks/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Data Breaches Visual
          </a>{' '}
          and pick one case to explore:
        </p>
        <ul className="section-points">
          <li>🕵️ Who was behind it?</li>
          <li>🎯 What was their motive?</li>
          <li>🔓 What vulnerability was exploited?</li>
        </ul>
      </section>

      <Footer />
    </div>
  );
}