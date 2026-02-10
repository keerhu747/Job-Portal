import {
  Bell,
  Search,
  MapPin,
  Bookmark,
  Briefcase,
  Clock,
  DollarSign,
  Moon,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      {/* TOP HEADER */}
      <div className="bg-white px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-[#1f4ed8] rounded-lg flex items-center justify-center text-white font-bold text-lg">
            TP
          </div>
          <div>
            <h2 className="font-semibold text-sm">Hello, Alex !</h2>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              <MapPin size={12} /> Brisbane
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Bell size={18} />
          <img
            src="https://i.pravatar.cc/40"
            className="w-9 h-9 rounded-full"
          />
        </div>
      </div>

      {/* BLUE NAVBAR */}
      <div className="bg-[#2456e6] px-8 py-3 text-white flex gap-8 text-sm">
        <span className="border-b-2 border-white pb-1">Job search</span>
        <span>My Application</span>
        <span>Top companies</span>
        <span>Upgrade Premium</span>
      </div>

      {/* MAIN CONTENT */}
      <div className="px-8 py-6 grid grid-cols-12 gap-6">
        {/* LEFT CONTENT */}
        <div className="col-span-9">
          {/* SEARCH BAR */}
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="grid grid-cols-12 gap-3 items-center">
              <div className="col-span-4 flex items-center gap-2 border rounded-md px-3 py-2">
                <Search size={16} className="text-gray-400" />
                <input
                  placeholder="Key words / role"
                  className="outline-none text-sm w-full"
                />
              </div>

              <div className="col-span-3 flex items-center gap-2 border rounded-md px-3 py-2">
                <MapPin size={16} className="text-gray-400" />
                <input
                  placeholder="Location"
                  className="outline-none text-sm w-full"
                />
              </div>

              <button className="col-span-2 border rounded-md px-4 py-2 text-sm text-gray-600">
                Filters
              </button>

              <button className="col-span-3 bg-[#2456e6] text-white rounded-md px-4 py-2 text-sm">
                Find Jobs
              </button>
            </div>

            {/* SEARCH TAGS */}
            <div className="flex gap-2 mt-3 text-xs text-gray-600">
              {[
                "Driver , Australia",
                "Cooking , Australia",
                "Office staff , Australia",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* QUICK FILTERS */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold mb-2">Quick Filters</h3>
            <div className="flex gap-3 flex-wrap text-sm">
              <Filter icon={<MapPin size={14} />} label="Nearby" />
              <Filter icon={<Clock size={14} />} label="Part time" />
              <Filter icon={<Briefcase size={14} />} label="Full time" />
              <Filter icon={<DollarSign size={14} />} label="Daily wages" />
              <Filter icon={<Moon size={14} />} label="Night shift" />
            </div>
          </div>

          {/* TOP RECOMMENDED */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold mb-3">
              Top Recommended
            </h3>

            <div className="bg-white rounded-xl p-4 shadow-sm flex justify-between">
              <div>
                <h4 className="font-semibold text-sm flex items-center gap-2">
                  Security Guard
                  <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">
                    Top match
                  </span>
                </h4>
                <p className="text-xs text-gray-500">Metro mall</p>

                <div className="flex gap-2 mt-3 text-xs">
                  <Tag icon={<MapPin size={12} />} label="Gold Coast" />
                  <Tag icon={<Briefcase size={12} />} label="full time" />
                  <Tag icon={<DollarSign size={12} />} label="Monthly" />
                  <Tag icon={<Moon size={12} />} label="Night shift" />
                </div>

                <div className="flex gap-4 text-xs text-gray-500 mt-3">
                  <span>5 days ago</span>
                  <span className="flex items-center gap-1">
                    <Bookmark size={12} /> Save job
                  </span>
                  <span>✕ Hide job</span>
                </div>
              </div>

              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
                className="w-28 h-20 rounded-md object-cover"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="col-span-3">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
              Saved searches <Bookmark size={14} />
            </h3>

            <div className="border rounded-md px-3 py-2 text-sm flex justify-between items-center">
              <span>Security Guard in Gold coast</span>
              <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">
                2 new
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* SMALL COMPONENTS */
function Filter({ icon, label }) {
  return (
    <div className="flex items-center gap-1 border bg-white px-3 py-1.5 rounded-full">
      {icon}
      {label}
    </div>
  );
}

function Tag({ icon, label }) {
  return (
    <div className="flex items-center gap-1 border px-2 py-1 rounded">
      {icon}
      {label}
    </div>
  );
}
