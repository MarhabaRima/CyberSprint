// Visualise learning process

export default function ProgressBar({ progress, stats }) {
    return (
      <div className="bg-[#1C1C2E] p-6 rounded-xl">
        <div className="mb-2 text-sm font-semibold">Week 1 Progress</div>
        <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
          <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="flex justify-between text-xs">
          <span>{stats.topics} Topics</span>
          <span>{stats.quizzes} Quizzes</span>
          <span>{stats.flashcards} Flashcards</span>
          <span>{stats.weeks} Weeks Left</span>
        </div>
      </div>
    );
  }