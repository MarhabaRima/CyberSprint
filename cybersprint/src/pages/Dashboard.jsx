import ProgressBar from '../components/ProgressBar';
import RadarChart from '../components/RadarChart';
import ActivityCard from '../components/ActivityCard';
import NextModuleCard from '../components/NextModuleCard';
import StudyStreak from '../components/StudyStreak';

export default function Dashboard() {
  return (
    <div className="p-4 md:p-8 bg-[#0F0F1A] text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Your Cybersecurity Journey</h1>

      <div className="space-y-8">
        <ProgressBar progress={25} stats={{ topics: 4, quizzes: 2, flashcards: 12, weeks: 3 }} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <ActivityCard />
          </div>

          <div className="space-y-4">
            <RadarChart />
            <NextModuleCard />
            <StudyStreak />
          </div>
        </div>
      </div>
    </div>
  );
}