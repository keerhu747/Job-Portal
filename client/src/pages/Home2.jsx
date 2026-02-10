import React from "react";

const Home2 = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* ===== HEADER ===== */}
      <div className="bg-white shadow-sm px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded font-bold">
            TP
          </div>
          <div>
            <h2 className="font-semibold">Hello, Alex !</h2>
            <p className="text-sm text-gray-500">📍 Brisbane</p>
          </div>
        </div>

        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="rounded-full"
        />
      </div>

      {/* ===== NAVBAR (BLUE LINE) ===== */}
      <div className="bg-blue-600 text-white px-8 py-3 flex gap-8 text-sm">
        <span className="border-b-2 border-white pb-1 cursor-pointer">
          Job search
        </span>
        <span className="cursor-pointer">My Application</span>
        <span className="cursor-pointer">Top companies</span>
        <span className="cursor-pointer">Upgrade Premium</span>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="p-8 grid grid-cols-12 gap-6">

        {/* ===== LEFT SIDE ===== */}
        <div className="col-span-8 space-y-6">

          {/* Search Bar */}
          <div className="bg-white p-4 rounded shadow flex gap-4">
            <input
              type="text"
              placeholder="Key words / role"
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              placeholder="Location"
              className="border p-2 rounded w-full"
            />
            <button className="bg-blue-600 text-white px-6 rounded">
              Find Jobs
            </button>
          </div>

          {/* Quick Filters */}
          <div className="flex gap-2 flex-wrap">
            {["Nearby", "Part time", "Full time", "Daily wages", "Night shift"].map(
              (item) => (
                <span
                  key={item}
                  className="border px-3 py-1 rounded text-sm bg-white"
                >
                  {item}
                </span>
              )
            )}
          </div>

          {/* Job Card */}
          <div className="bg-white p-5 rounded shadow">
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold text-lg">
                  Security Guard
                  <span className="text-green-600 text-xs ml-2 border px-2 py-0.5 rounded">
                    Top match
                  </span>
                </h3>
                <p className="text-sm text-gray-500">Metro mall</p>
              </div>
              <img
                src="https://via.placeholder.com/80"
                alt="job"
                className="rounded"
              />
            </div>

            <div className="flex gap-3 mt-3 text-sm text-gray-600">
              <span>📍 Gold Coast</span>
              <span>🕒 Full time</span>
              <span>🌙 Night shift</span>
            </div>

            <div className="flex justify-between mt-4 text-sm">
              <span className="text-gray-400">5 days ago</span>
              <div className="flex gap-4">
                <button className="text-blue-600">Save job</button>
                <button className="text-red-500">Hide job</button>
              </div>
            </div>
          </div>
        </div>

        {/* ===== RIGHT SIDE FILTERS ===== */}
        <div className="col-span-4 space-y-4">

          {/* EXPERIENCE LEVEL (THIS IS THE MISSING PART YOU ASKED) */}
          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold mb-3">Experience Level</h4>

            <div className="space-y-2 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Fresher
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> 1 – 3 Years
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> 3 – 5 Years
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> 5+ Years
              </label>
            </div>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold">Job Type</h4>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold">Date Posted</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2;
