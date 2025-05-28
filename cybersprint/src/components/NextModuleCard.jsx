// Display upcoming modules
export default function NextModuleCard() {
    return (
      <div className="bg-[#1C1C2E] p-4 rounded-xl space-y-2">
        <div className="text-sm font-semibold">Next Up</div>
        <div className="text-xs text-gray-400">Vulnerability Assessment</div>
        <p className="text-sm">Learn how to identify and assess security vulnerabilities in systems.</p>
        <button className="mt-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-sm rounded-xl">
          Continue Learning
        </button>
      </div>
    );
  }