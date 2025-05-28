import { useState } from "react";
import HeroSection from "../components/HeroSection";
import FeatureHighlights from "../components/FeatureHighlights";
import Glossary from "../components/Glossary";

export default function Home() {
  const [showGlossary, setShowGlossary] = useState(false);

  const toggleGlossary = () => {
    setShowGlossary(prev => !prev);
    setTimeout(() => {
      document.getElementById("glossary-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div>
      <HeroSection />
      <FeatureHighlights onGlossaryClick={toggleGlossary} />

      {showGlossary && (
        <div id="glossary-section" className="pt-24">
          <Glossary />
        </div>
      )}
    </div>
  );
}