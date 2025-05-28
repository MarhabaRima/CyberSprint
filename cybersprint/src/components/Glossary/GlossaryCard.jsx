export default function GlossaryCard({ term, definition, tags, category }) {
  return (
    <div className="glossary-card">
      <div className="glossary-card-header">
        <h3 className="glossary-term">{term}</h3>
        <span className={`glossary-category ${getCategoryClass(category)}`}>
          {category}
        </span>
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

function getCategoryClass(category) {
  const map = {
    "Core Concept": "category-core",
    "Attack Technique": "category-attack",
    "Vulnerability": "category-vulnerability",
    "Security Strategy": "category-strategy",
    "Security Tool": "category-tool",
    "Best Practice": "category-best",
    "Component": "category-component",
    "Policy & Strategy": "category-policy",
    "Security Mechanism": "category-mechanism",
    "Operational Security": "category-operational",
    "API Architecture": "category-api",
    "Monitoring": "category-monitoring",
    "Security Test": "category-test",
    "Data Format": "category-format",
    "Communication Mechanism": "category-comm",
    "Communication Protocol": "category-protocol",
  };

  return map[category] || "category-default";
}