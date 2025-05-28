import { useState } from "react";
import HeroSection from "../components/HeroSection";
import FeatureHighlights from "../components/FeatureHighlights";
import Glossary from "../components/Glossary";
import Flashcards from "../components/Flashcards";
import Footer from "../components/Footer"; // ✅ Add this line

export default function Home() {
  const [showGlossary, setShowGlossary] = useState(false);
  const [showFlashcards, setShowFlashcards] = useState(false);

  // Toggle Cyber Glossary section
  const toggleGlossary = () => {
    setShowGlossary(prev => !prev);
    setShowFlashcards(false); // close flashcards
    setTimeout(() => {
      document.getElementById("glossary-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // Toggle Flashcards section
  const toggleFlashcards = () => {
    setShowFlashcards(prev => !prev);
    setShowGlossary(false); // close glossary
    setTimeout(() => {
      document.getElementById("flashcard-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div>
      <HeroSection />
      
      <FeatureHighlights
        onGlossaryClick={toggleGlossary}
        onFlashcardClick={toggleFlashcards}
      />

      {showGlossary && (
        <div id="glossary-section" className="pt-24">
          <Glossary />
        </div>
      )}

      {showFlashcards && (
        <div id="flashcard-section" className="pt-24">
          <Flashcards />
        </div>
      )}

      <Footer /> 
    </div>
  );
}