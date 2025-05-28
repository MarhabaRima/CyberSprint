// src/components/GlossaryCard.jsx
export default function GlossaryCard({ term, definition, tags, category }) {
    return (
      <div className="glossary-card">
        <div className="glossary-card-header">
          <h3 className="glossary-term">{term}</h3>
          <span className={`glossary-category ${categoryColor(category)}`}>{category}</span>
        </div>
        <p className="glossary-definition">{definition}</p>
        <div className="glossary-tags">
          {tags.map((tag, idx) => (
            <span key={idx} className="glossary-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  }
  
  function categoryColor(category) {
    switch (category) {
      case "Core Concept":
        return "category-core";
      case "Attack Technique":
        return "category-attack";
      case "Vulnerability":
        return "category-vulnerability";
      default:
        return "category-default";
    }
  }