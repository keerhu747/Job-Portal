import { Bookmark } from "lucide-react";

export default function Savejobs() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* ===== HEADER ===== */}
      <div className="bg-white px-8 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded font-bold">
            TP
          </div>
          <div>
            <h2 className="font-semibold">Hello, Alex!</h2>
            <p className="text-sm text-gray-500">📍 Brisbane</p>
          </div>
        </div>
        <img
          src="https://i.pravatar.cc/40"
          className="w-10 h-10 rounded-full"
        />
      </div>

      {/* ===== NAVBAR ===== */}
      <div className="bg-blue-600 text-white px-8 py-3 flex gap-8 text-sm">
        <span>Job search</span>
        <div className="flex gap-8">
        <span className="border-b-2 border-white pb-1">My Application</span>
        <span>Top companies</span>
        <span>Upgrade Premium</span>
        </div>
      </div>

      {/* ===== SAVE JOBS SECTION ===== */}
      <div className="px-10 py-6">

        {/* HEADING */}
        <h2 className="font-semibold text-lg mb-1">Save Jobs</h2>
        <p className="text-sm text-gray-500 mb-6">
          Save jobs you're interested in and come back anytime to apply
          with confidence through verified partners.
        </p>

        {/* SAVED JOB CARD (LEFT SIDE) */}
        <div className="bg-white border rounded-lg w-[320px] p-4">

          {/* JOB IMAGE */}
          <img
            src="https://images.pexels.com/photos/842548/pexels-photo-842548.jpeg"
            className="h-32 w-full object-cover rounded mb-3"
          />

          {/* JOB INFO */}
          <h3 className="font-semibold text-sm">Security Guard</h3>
          <p className="text-xs text-gray-500 mb-2">Metro Mall</p>

          <p className="text-xs text-gray-600 mb-3">
            Responsible for maintaining safety and security of people,
            property, and premises.
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 text-xs mb-4">
            <span className="border rounded px-2 py-0.5">📍 Gold Coast</span>
            <span className="border rounded px-2 py-0.5">⏱ Full time</span>
            <span className="border rounded px-2 py-0.5">💰 Monthly</span>
            <span className="border rounded px-2 py-0.5">🌙 Night shift</span>
          </div>

          {/* FOOTER */}
          <div className="flex justify-between items-center">
            <button className="bg-blue-600 text-white text-xs px-4 py-1.5 rounded">
              Apply Now
            </button>

            {/* SAVED ICON (BLACK) */}
            <Bookmark
              size={18}
              className="text-black fill-black cursor-default"
            />
          </div>

        </div>
      </div>
    </div>
  );
}