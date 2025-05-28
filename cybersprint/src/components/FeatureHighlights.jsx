// src/components/FeatureHighlights.jsx
import '../styles/FeatureHighlights.css';

const features = [
  {
    title: 'Progress Tracking',
    description: 'Real-time feedback on topics, quizzes, and flashcards.',
    icon: '📊',
  },
  {
    title: 'Interactive Quizzes',
    description: 'Test yourself with quick and fun assessments.',
    icon: '🧠',
  },
  {
    title: 'Cyber Glossary',
    description: 'Look up key security concepts instantly.',
    icon: '📚',
  },
];

export default function FeatureHighlights() {
  return (
    <section className="features py-12 px-6 bg-[#1A1A2C]">
      <h2 className="text-3xl font-bold text-center mb-10 text-white">
        Why Choose CyberSprint?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="feature-card bg-[#2A2A40] p-6 rounded-xl text-center hover:bg-purple-600 transition">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}