// List recent activity
export default function ActivityCard() {
    return (
      <div className="bg-[#1C1C2E] p-4 rounded-xl space-y-2">
        <h2 className="text-sm font-semibold">Recent Activity</h2>
        <div className="flex items-center text-sm">
          <div className="h-3 w-3 rounded-full bg-purple-500 mr-2"></div>
          Completed Nmap Basics — <span className="ml-auto">Today</span>
        </div>
        <div className="flex items-center text-sm">
          <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
          Started Linux Commands Module — <span className="ml-auto">Yesterday</span>
        </div>
      </div>
    );
  }