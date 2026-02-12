import {
  Bell,
  MessageCircle,
  MapPin,
  DollarSign,
  Clock,
  Bookmark,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Home3() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">

      {/* TOP HEADER */}
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
        <img src="https://i.pravatar.cc/40" className="w-10 h-10 rounded-full" />
      </div>

      {/* NAVBAR */}
      <div className="bg-blue-600 text-white px-8 py-3 flex justify-between">
        <div className="flex gap-8 text-sm">
          <span className="border-b-2 border-white pb-1">Job search</span>
          <span>My Application</span>
          <span>Top companies</span>
          <span>Upgrade Premium</span>
        </div>
        <div className="flex gap-5">
          <Bell size={18} />
          <MessageCircle size={18} />
        </div>
      </div>

      {/* JOB DETAILS HEADER */}
      <div className="max-w-7xl mx-auto px-8 pt-5 flex justify-between">
        <p className="text-sm text-gray-500">Job Details</p>

        <div className="flex gap-6 text-sm">
          <div className="flex items-center gap-1">
            <Bookmark size={16} /> Save this job
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle size={16} /> Message with HR
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-8 py-4 grid grid-cols-12 gap-6">

        {/* LEFT SIDE */}
        <div className="col-span-8 space-y-6">

          {/* SECURITY GUARD CARD */}
          <div className="bg-white p-6 rounded shadow">
            <div className="flex gap-4">
              {/* IMAGE */}
              <img
                src="https://images.unsplash.com/photo-1581091870627-3c9c1c1f2a90"
                className="w-28 h-28 object-cover rounded"
              />

              <div>
                <h2 className="text-xl font-semibold">
                  Security Guard
                  <span className="text-green-600 text-xs ml-2 border px-2 py-0.5 rounded">
                    Top match
                  </span>
                </h2>
                <p className="text-sm text-gray-500">Metro Mall</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-5 text-sm">
              <div className="border rounded p-3 flex gap-2">
                <MapPin size={16} /> Gold Coast
              </div>
              <div className="border rounded p-3 flex gap-2">
                <DollarSign size={16} /> 300–450 / month
              </div>
              <div className="border rounded p-3 flex gap-2">
                <Clock size={16} /> Full Time
              </div>
              <div className="border rounded p-3 flex gap-2">
                🌙 Night Shift
              </div>
            </div>
          </div>

          {/* REQUIRED SKILLS – SEPARATE BOX */}
          <div className="bg-white p-6 rounded shadow">
            <h4 className="font-semibold text-sm mb-3">Required Skills</h4>

            <div className="flex flex-wrap gap-2 text-xs">
              {[
                "Security",
                "Alert",
                "Physical Fitness",
                "Interpersonal skills",
                "Communication",
                "Strong observation",
              ].map((skill) => (
                <span
                  key={skill}
                  className="border px-3 py-1 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-span-4">
          <div className="bg-white p-6 rounded shadow space-y-4">

            <h3 className="font-semibold">Job Description</h3>
            <p className="text-sm text-gray-600">
              Responsible for ensuring the safety and security of shoppers,
              staff, and property at Metro Mall. Duties include patrolling
              premises, monitoring CCTV, controlling access, responding to
              incidents, and assisting customers.
            </p>

            <h3 className="font-semibold">Compensation & Benefits</h3>
            <ul className="text-sm text-gray-600 list-disc pl-5">
              <li>Competitive salary based on experience</li>
              <li>Overtime and shift allowances</li>
              <li>Uniform and equipment provided</li>
              <li>Training opportunities</li>
            </ul>

            <h3 className="font-semibold">Additional Information</h3>
            <p className="text-sm text-gray-600">Posted: 01/03/2026</p>
            <p className="text-sm text-gray-600">Expiry: 12/03/2026</p>
            <p className="text-sm text-gray-600">
              HR Mail: MetromallHR@gmail.com
            </p>

            <div className="flex gap-3 pt-4">
              <button
                onClick={() => navigate("/home")}
                className="border px-4 py-2 rounded w-1/2"
              >
                Back
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded w-1/2">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
