// Days of the week progress
export default function StudyStreak() {
    const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    const activeDays = [0, 1, 2]; // M, T, W
  
    return (
      <div className="bg-[#1C1C2E] p-4 rounded-xl text-sm">
        <div className="font-semibold mb-2">Study Streak</div>
        <div className="flex space-x-2">
          {days.map((day, i) => (
            <div
              key={i}
              className={`w-6 h-6 flex items-center justify-center rounded-full ${
                activeDays.includes(i) ? 'bg-purple-600' : 'bg-gray-600'
              }`}
            >
              {day}
            </div>
          ))}
        </div>
        <div className="mt-2 text-xs text-gray-400">3 days</div>
      </div>
    );
  }