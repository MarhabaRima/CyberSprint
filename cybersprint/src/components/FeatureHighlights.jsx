import '../styles/FeatureHighlights.css';

const features = [
  {
    title: "Track Progress",
    description: "Visualize your journey across flashcards, quizzes, and modules.",
    icon: "📈",
  },
  {
    title: "Instant Quizzes",
    description: "Test your understanding on the go — with no pressure.",
    icon: "⚡",
  },
  {
    title: "Cyber Glossary",
    description: "Look up key security terms, instantly and clearly.",
    icon: "📚",
    isClickable: true, 
  },
];

export default function FeatureHighlights({ onGlossaryClick }) {
  return (
    <section className="feature-section">
      <div className="feature-wrapper">
        <h2 className="feature-heading">Why Choose CyberSprint?</h2>

        <div className="feature-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card ${feature.isClickable ? 'cursor-pointer' : ''}`}
              onClick={feature.isClickable ? onGlossaryClick : undefined}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}