import { useState } from "react";
import flashcardData from "../data/flashcardsData";
import FlashcardItem from "./FlashcardItem";
import "../styles/Flashcards.css";

export default function Flashcards() {
  const [index, setIndex] = useState(0);

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % flashcardData.length);
  };

  const prevCard = () => {
    setIndex((prev) => (prev - 1 + flashcardData.length) % flashcardData.length);
  };

  return (
    <section className="flashcard-section">
      <div className="flashcard-wrapper">
        <h2 className="flashcard-heading">Cybersecurity Flashcards</h2>

        <div className="carousel-container">
          <FlashcardItem
            term={flashcardData[index].term}
            definition={flashcardData[index].definition}
          />
        </div>

        <div className="carousel-controls">
          <button onClick={prevCard}>← Prev</button>
          <span>{index + 1} / {flashcardData.length}</span>
          <button onClick={nextCard}>Next →</button>
        </div>
      </div>
    </section>
  );
}