import ProgressBar from '../components/ProgressBar';
import ActivityCard from '../components/ActivityCard';
import RadarChart from '../components/RadarChart';
import NextModuleCard from '../components/NextModuleCard';
import StudyStreak from '../components/StudyStreak';
import Footer from '../components/Footer';

import '../styles/Dashboard.css';

export default function Dashboard() {
  const dashboardData = {
    topicsCovered: 4,
    quizzesTaken: 2,
    flashcardsMastered: 12,
    weeksRemaining: 3,
  };

  return (
    <div className="dashboard">
      <main className="dashboard-container">
        <h1 className="dashboard-title">Your Cybersecurity Journey</h1>

        {/* Top Stats Row */}
        <section className="dashboard-grid dashboard-grid-4 mb-10">
          <div className="dashboard-card">
            <p className="value">{dashboardData.topicsCovered}</p>
            <p className="label">Topics Covered</p>
          </div>
          <div className="dashboard-card">
            <p className="value">{dashboardData.quizzesTaken}</p>
            <p className="label">Quizzes Taken</p>
          </div>
          <div className="dashboard-card">
            <p className="value">{dashboardData.flashcardsMastered}</p>
            <p className="label">Flashcards Mastered</p>
          </div>
          <div className="dashboard-card">
            <p className="value">{dashboardData.weeksRemaining}</p>
            <p className="label">Weeks Remaining</p>
          </div>
        </section>

        {/* Grid: Left = Activity + Progress | Right = Radar + Next Module */}
        <div className="dashboard-grid lg:dashboard-grid-2fr-1fr">
          {/* LEFT COLUMN */}
          <section>
            <h2 className="dashboard-section-title">Recent Activity</h2>
            <ActivityCard title="Completed Nmap Basics" date="Today" icon="✅" />
            <ActivityCard title="Started Linux Commands Module" date="Yesterday" icon="📂" />
          </section>

          {/* RIGHT COLUMN */}
          <aside>
            <div className="mb-6">
              <RadarChart />
            </div>
            <NextModuleCard />
            <div className="mt-6">
              <StudyStreak />
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}