import React from "react";

export default function JobCard() {
  return (
    <div className="bg-white p-5 rounded-lg shadow flex justify-between items-center">

      <div>
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-semibold">
            Security Guard
          </h3>

          <span className="text-green-600 text-xs border border-green-600 px-2 py-0.5 rounded">
            Top match
          </span>
        </div>

        <p className="text-gray-500 text-sm">
          Metro mall
        </p>

        <div className="flex gap-4 text-sm text-gray-600 mt-3">
          <span>📍 Gold Coast</span>
          <span>⏰ Full time</span>
          <span>🌙 Night shift</span>
        </div>

        <p className="text-xs text-gray-400 mt-3">
          5 days ago
        </p>

        <div className="flex gap-4 text-sm mt-2">
          <button className="text-blue-600">
            Save job
          </button>
          <button className="text-red-500">
            Hide job
          </button>
        </div>
      </div>

      <img
        src="https://via.placeholder.com/100"
        alt="job"
        className="rounded-md"
      />

    </div>
  );
}
