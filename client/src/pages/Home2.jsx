import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Bell,
  MapPin,
  Search,
  Bookmark,
  Briefcase,
  Clock,
  DollarSign,
  Moon,
} from "lucide-react";

export default function Home2() {
  const navigate = useNavigate();

  const [showJobType, setShowJobType] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showDate, setShowDate] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f7fb]">

      {/* WHITE HEADER */}
      <div className="bg-white px-8 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded font-bold">
            TP
          </div>
          <div>
            <h2 className="font-semibold text-sm">Hello, Alex!</h2>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              <MapPin size={12} /> Brisbane
            </p>
          </div>
        </div>

        <img
          src="https://i.pravatar.cc/40"
          className="w-9 h-9 rounded-full"
        />
      </div>

      {/* BLUE NAVBAR */}
      <div className="bg-blue-600 px-8 py-3 text-white flex justify-between items-center text-sm">
        <div className="flex gap-8">
          <span className="border-b-2 border-white pb-1">
            Job search
          </span>
          <span>My Application</span>
          <span>Top companies</span>
          <span>Upgrade Premium</span>
        </div>

        <div className="flex gap-4">
          <Bell size={18} />
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-8 py-6 grid grid-cols-12 gap-6">

        {/* LEFT SIDE */}
        <div className="col-span-9 space-y-6">

          {/* SEARCH BAR */}
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="grid grid-cols-12 gap-3 items-center">

              <div className="col-span-4 flex items-center gap-2 border rounded-md px-3 py-2">
                <Search size={16} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Key words / role"
                  className="outline-none text-sm w-full"
                />
              </div>

              <div className="col-span-3 flex items-center gap-2 border rounded-md px-3 py-2">
                <MapPin size={16} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Location"
                  className="outline-none text-sm w-full"
                />
              </div>

              <button className="col-span-2 border-2 border-blue-600 text-blue-600 rounded-md px-4 py-2 text-sm">
                Filters
              </button>

              <button className="col-span-3 bg-blue-600 text-white rounded-md px-4 py-2 text-sm">
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

        {/* RIGHT SIDEBAR */}
        <div className="col-span-3 space-y-6">

          {/* SAVED SEARCH */}
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold mb-3">
              Saved Search
            </h4>
            <div className="border rounded px-3 py-2 text-sm flex justify-between items-center">
              <span>Security Guard in Gold Coast</span>
              <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">
                2 new
              </span>
            </div>
          </div>

          {/* JOB TYPE */}
          <div className="bg-white p-4 rounded shadow">
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => setShowJobType(!showJobType)}
            >
              <h4 className="font-semibold">Job Type</h4>
              <span>{showJobType ? "−" : "+"}</span>
            </div>

            {showJobType && (
              <div className="mt-3 space-y-2 text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Full Time
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Part Time
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Contract
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Internship
                </label>
              </div>
            )}
          </div>

          {/* EXPERIENCE */}
          <div className="bg-white p-4 rounded shadow">
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => setShowExperience(!showExperience)}
            >
              <h4 className="font-semibold">
                Experience Level
              </h4>
              <span>{showExperience ? "−" : "+"}</span>
            </div>

            {showExperience && (
              <div className="mt-3 space-y-2 text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Fresher
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> 1–3 Years
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> 3–5 Years
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> 5+ Years
                </label>
              </div>
            )}
          </div>

          {/* DATE POSTED */}
          <div className="bg-white p-4 rounded shadow">
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => setShowDate(!showDate)}
            >
              <h4 className="font-semibold">Date Posted</h4>
              <span>{showDate ? "−" : "+"}</span>
            </div>

            {showDate && (
              <div className="mt-3 space-y-2 text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Last 24 hours
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Last 3 days
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Last 7 days
                </label>
              </div>
            )}
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
