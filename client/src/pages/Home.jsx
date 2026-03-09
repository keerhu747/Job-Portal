import {
  Search,
  MapPin,
  Bell,
  MessageCircle,
  Clock,
  Briefcase,
  Navigation
} from "lucide-react";

export default function Home() {
  return (
    <div className="bg-[#eef2f7] min-h-screen flex justify-center py-10">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow">

        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 text-white px-3 py-2 rounded font-bold">
              TP
            </div>

            <div>
              <h2 className="font-semibold text-lg">Hello, Alex !</h2>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <MapPin size={14} /> Brisbane
              </p>
            </div>
          </div>

          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            className="w-10 h-10 rounded-full"
          />
        </div>

        {/* NAVBAR */}
        <div className="bg-blue-600 text-white px-6 py-3 flex justify-between">
          <div className="flex gap-8 text-sm">
            <span className="border-b-2 border-white pb-1 font-medium">
              Job search
            </span>
            <span>My Application</span>
            <span>Top companies</span>
            <span>Upgrade Premium</span>
          </div>

          <div className="flex gap-4">
            <Bell size={18} />
            <MessageCircle size={18} />
          </div>
        </div>

        <div className="p-6">

          {/* SEARCH BAR */}
          <div className="flex gap-3">
            <div className="flex items-center border rounded px-3 py-2 flex-1">
              <Search size={16} className="text-gray-400 mr-2" />
              <input
                placeholder="Key words / role"
                className="outline-none text-sm w-full"
              />
            </div>

            <div className="flex items-center border rounded px-3 py-2 flex-1">
              <MapPin size={16} className="text-gray-400 mr-2" />
              <input
                placeholder="Location"
                className="outline-none text-sm w-full"
              />
            </div>

            <button className="border px-4 py-2 rounded text-sm">
              Filters
            </button>

            <button className="bg-blue-600 text-white px-6 py-2 rounded text-sm">
              Find Jobs
            </button>
          </div>

          {/* TAGS + SAVED SEARCH ROW */}
          <div className="flex justify-between items-start mt-4">

            {/* TAGS */}
            <div className="flex gap-3 text-xs">

              <span className="bg-gray-100 px-3 py-1 rounded flex items-center gap-1">
                <Clock size={12} />
                Driver , Australia
              </span>

              <span className="bg-gray-100 px-3 py-1 rounded flex items-center gap-1">
                <Clock size={12} />
                Cooking , Australia
              </span>

              <span className="bg-gray-100 px-3 py-1 rounded flex items-center gap-1">
                <Clock size={12} />
                Office staff , Australia
              </span>

            </div>

            {/* SAVED SEARCH */}
            <div className="border rounded-lg p-4 w-64">

              <h3 className="text-sm font-semibold mb-3">
                Saved searches
              </h3>

              <div className="border rounded px-3 py-2 text-xs flex justify-between items-center">

                Security, Guard in Gold coast

                <span className="bg-green-100 text-green-600 px-2 rounded">
                  2 new
                </span>

              </div>

            </div>

          </div>

          {/* QUICK FILTER */}
          <div className="mt-6">

            <h3 className="text-sm font-semibold mb-3">
              Quick Filters
            </h3>

            <div className="flex gap-3 text-xs">

              <span className="border px-3 py-1 rounded flex items-center gap-1">
                <Navigation size={12} /> Nearby
              </span>

              <span className="border px-3 py-1 rounded flex items-center gap-1">
                <Briefcase size={12} /> Part time
              </span>

              <span className="border px-3 py-1 rounded flex items-center gap-1">
                <Briefcase size={12} /> Full time
              </span>

              <span className="border px-3 py-1 rounded flex items-center gap-1">
                <Briefcase size={12} /> Daily wages
              </span>

              <span className="border px-3 py-1 rounded flex items-center gap-1">
                <Clock size={12} /> Night shift
              </span>

            </div>
          </div>

          {/* JOB CARD */}
          <div className="mt-6">

            <h3 className="text-sm font-semibold mb-3">
              Top Recommended
            </h3>

            <div className="border rounded-lg p-4 flex justify-between items-center">

              <div>

                <div className="flex items-center gap-2">

                  <h4 className="font-semibold">
                    Security Guard
                  </h4>

                  <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">
                    Top match
                  </span>

                </div>

                <p className="text-sm text-gray-500">
                  Metro mall
                </p>

                <div className="flex gap-2 mt-3 text-xs">

                  <span className="border px-2 py-1 rounded">
                    Gold Coast
                  </span>

                  <span className="border px-2 py-1 rounded">
                    Full time
                  </span>

                  <span className="border px-2 py-1 rounded">
                    $ Monthly
                  </span>

                  <span className="border px-2 py-1 rounded">
                    Night shift
                  </span>

                </div>

                <p className="text-xs text-gray-400 mt-3">
                  5 days ago
                </p>

              </div>

              <img
                src="https://images.unsplash.com/photo-1581091012184-7e0cdfbb6792"
                className="w-24 h-16 rounded object-cover"
              />

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}