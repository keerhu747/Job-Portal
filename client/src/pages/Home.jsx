import { Search, Bell, MapPin, Briefcase } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4f6fb]">

      {/* ===== HEADER ===== */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Left */}
          <div>
            <h2 className="text-lg font-semibold text-black">
              Hello, Alex !
            </h2>
            <p className="text-sm text-gray-500 flex items-center gap-1">
              <MapPin size={14} /> Brisbane
            </p>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">
            <Bell className="text-gray-600" />
            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="w-9 h-9 rounded-full"
            />
          </div>
        </div>

        {/* ===== NAV BAR ===== */}
        <div className="bg-blue-600">
          <div className="max-w-7xl mx-auto px-6 flex gap-8 text-white text-sm font-medium">
            <button className="border-b-2 border-white py-3">
              Job search
            </button>
            <button className="py-3 opacity-80">My Application</button>
            <button className="py-3 opacity-80">Top companies</button>
            <button className="py-3 opacity-80">Upgrade Premium</button>
          </div>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* ===== SEARCH BAR ===== */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="grid grid-cols-4 gap-4">
            
            <div className="col-span-1 flex items-center border rounded px-3">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Key words / role"
                className="w-full px-2 py-2 outline-none text-sm"
              />
            </div>

            <div className="col-span-1 flex items-center border rounded px-3">
              <MapPin size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Location"
                className="w-full px-2 py-2 outline-none text-sm"
              />
            </div>

            <button className="border rounded px-4 text-sm text-gray-600">
              Filters
            </button>

            <button className="bg-blue-600 text-white rounded px-6">
              Find Jobs
            </button>
          </div>

          {/* Tags */}
          <div className="flex gap-3 mt-4 flex-wrap">
            {["Driver , Australia", "Cooking , Australia", "Office staff , Australia"].map(
              (item, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-sm px-3 py-1 rounded"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>

        {/* ===== QUICK FILTERS ===== */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold mb-3">Quick Filters</h3>
          <div className="flex gap-3 flex-wrap">
            {["Nearby", "Part time", "Full time", "Daily wages", "Night shift"].map(
              (filter, i) => (
                <button
                  key={i}
                  className="border px-4 py-1 rounded text-sm bg-white"
                >
                  {filter}
                </button>
              )
            )}
          </div>
        </div>

        {/* ===== TOP RECOMMENDED ===== */}
        <div className="mt-8">
          <h3 className="text-sm font-semibold mb-4">
            Top Recommended
          </h3>

          {/* Job Card */}
          <div className="bg-white p-6 rounded-xl shadow-sm flex justify-between">
            
            {/* Left */}
            <div>
              <h4 className="font-semibold text-black">
                Security Guard
              </h4>
              <p className="text-sm text-gray-500">Metro mall</p>

              <div className="flex gap-3 mt-3 flex-wrap">
                <span className="tag">Gold Coast</span>
                <span className="tag">Full time</span>
                <span className="tag">Monthly</span>
                <span className="tag">Night shift</span>
              </div>

              <p className="text-xs text-gray-400 mt-3">
                5 days ago
              </p>
            </div>

            {/* Right */}
            <img
              src="https://images.unsplash.com/photo-1581092334651-ddf26d9b09d3"
              alt="job"
              className="w-28 h-20 rounded object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
