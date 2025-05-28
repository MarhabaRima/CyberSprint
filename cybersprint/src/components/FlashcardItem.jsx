//Flip card component for flashcards
import { useState } from "react";
import "../styles/FlashcardItem.css"; 

export default function FlashcardItem({ term, definition }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flashcard-container" onClick={() => setFlipped(!flipped)}>
      <div className={`flashcard-inner ${flipped ? "flipped" : ""}`}>
        <div className="flashcard-front">
          <h3>{term}</h3>
          <p>Click to reveal definition</p>
        </div>
        <div className="flashcard-back">
          <h3>{definition}</h3>
          <p>Click to flip back</p>
        </div>
      </div>
    </div>
  );
}