import { useState } from "react";
import { glossaryTerms } from "../../data/glossaryData";
import GlossaryCard from "./GlossaryCard";
import "../../styles/Glossary/Glossary.css";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Glossary() {
  const [activeLetter, setActiveLetter] = useState("A");

  // Filter terms based on selected letter
  const filteredTerms = glossaryTerms.filter(term => term.letter === activeLetter);

  return (
    <section className="glossary">
      <div className="glossary-wrapper">
        <h2 className="glossary-heading">Cyber A–Z Vocabulary</h2>

        {/* Alphabet Navigation */}
        <div className="glossary-letters">
          {alphabet.map(letter => (
            <button
              key={letter}
              className={`glossary-letter ${activeLetter === letter ? "active" : ""}`}
              onClick={() => setActiveLetter(letter)}
              aria-label={`Show terms that start with ${letter}`}
            >
              {letter}
            </button>
          ))}
        </div>

        {/* Term Cards */}
        <div className="glossary-cards">
          {filteredTerms.length > 0 ? (
            filteredTerms.map((item, idx) => (
              <GlossaryCard key={idx} {...item} />
            ))
          ) : (
            <p className="glossary-empty">No terms under “{activeLetter}” yet.</p>
          )}
        </div>
      </div>
    </section>
  );
}