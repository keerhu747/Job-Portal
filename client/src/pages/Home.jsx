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
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">

      {/* WHITE HEADER */}
      <div className="bg-white px-8 py-4 flex justify-between items-center shadow">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded font-bold">
            TP
          </div>
          <div>
            <h2 className="font-semibold">Hello, Alex!</h2>
            <p className="text-sm text-gray-500 flex items-center gap-1">
              <MapPin size={14} /> Brisbane
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Bell size={18} />
          <img
            src="https://i.pravatar.cc/40"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>

      {/* BLUE NAVBAR */}
      <div className="bg-blue-600 text-white px-8 py-3 flex gap-8 text-sm">
        <span className="border-b-2 border-white pb-1">
          Job search
        </span>
        <span>My Application</span>
        <span>Top companies</span>
        <span>Upgrade Premium</span>
      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-8 py-6 grid grid-cols-12 gap-6">

        {/* LEFT SIDE */}
        <div className="col-span-9 space-y-6">

          {/* SEARCH BAR */}
          <div className="bg-white p-4 rounded shadow">
            <div className="grid grid-cols-12 gap-3 items-center">

              <div className="col-span-4 flex items-center gap-2 border rounded px-3 py-2">
                <Search size={16} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Key words / role"
                  className="outline-none w-full text-sm"
                />
              </div>

              <div className="col-span-3 flex items-center gap-2 border rounded px-3 py-2">
                <MapPin size={16} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Location"
                  className="outline-none w-full text-sm"
                />
              </div>

              <button
                onClick={() => navigate("/home2")}
                className="col-span-2 border rounded px-4 py-2 text-sm text-gray-600"
              >
                Filters
              </button>

              <button className="col-span-3 bg-blue-600 text-white rounded px-4 py-2 text-sm">
                Find Jobs
              </button>
            </div>
          </div>

          {/* QUICK FILTERS */}
          <div>
            <h3 className="text-sm font-semibold mb-3">
              Quick Filters
            </h3>

            <div className="flex gap-3 flex-wrap text-sm">
              <Filter icon={<MapPin size={14} />} label="Nearby" />
              <Filter icon={<Clock size={14} />} label="Part time" />
              <Filter icon={<Briefcase size={14} />} label="Full time" />
              <Filter icon={<DollarSign size={14} />} label="Daily wages" />
              <Filter icon={<Moon size={14} />} label="Night shift" />
            </div>
          </div>

          {/* JOB CARD (CLICK → HOME3) */}
          <div
            onClick={() => navigate("/home3")}
            className="bg-white p-5 rounded shadow cursor-pointer hover:border-blue-600 border"
          >
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold text-lg">
                  Security Guard
                  <span className="text-green-600 text-xs ml-2 border px-2 py-0.5 rounded">
                    Top match
                  </span>
                </h3>
                <p className="text-sm text-gray-500">
                  Metro mall
                </p>
              </div>

              <img
                src="https://via.placeholder.com/80"
                className="rounded"
              />
            </div>

            <div className="flex gap-4 mt-3 text-sm text-gray-600">
              <span>📍 Gold Coast</span>
              <span>🕒 Full time</span>
              <span>🌙 Night shift</span>
            </div>

            <div className="flex justify-between mt-4 text-sm">
              <span className="text-gray-400">
                5 days ago
              </span>
              <div className="flex gap-4">
                <button className="text-blue-600 flex items-center gap-1">
                  <Bookmark size={14} /> Save job
                </button>
                <button className="text-red-500">
                  Hide job
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="col-span-3">
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold mb-3">
              Saved Searches
            </h4>

            <div className="border rounded px-3 py-2 text-sm flex justify-between items-center">
              <span>Security Guard in Gold Coast</span>
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

/* QUICK FILTER COMPONENT */
function Filter({ icon, label }) {
  return (
    <div className="flex items-center gap-1 border bg-white px-3 py-1.5 rounded-full">
      {icon}
      {label}
    </div>
  );
}
