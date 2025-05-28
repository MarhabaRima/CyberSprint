import { useState } from "react";
import HeroSection from "../components/Homepage/HeroSection";
import FeatureHighlights from "../components/Homepage/FeatureHighlights";
import Glossary from "../components/Glossary/Glossary";
import Flashcards from "../components/Flashcard/Flashcards";
import Footer from "../components/Navbar-Footer/Footer";

export default function Home() {
  const [showGlossary, setShowGlossary] = useState(false);
  const [showFlashcards, setShowFlashcards] = useState(false);

  // Toggle functions for glossary and flashcards
  // These functions handle the visibility of the glossary and flashcards sections
  const toggleGlossary = () => {
    setShowGlossary(prev => !prev);
    setShowFlashcards(false);
    setTimeout(() => {
      document.getElementById("glossary-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const toggleFlashcards = () => {
    setShowFlashcards(prev => !prev);
    setShowGlossary(false);
    setTimeout(() => {
      document.getElementById("flashcard-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div>
      <HeroSection />

      <FeatureHighlights
        onGlossaryClick={toggleGlossary}
        onFlashcardsClick={toggleFlashcards}
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