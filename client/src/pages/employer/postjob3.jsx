import { useNavigate } from "react-router-dom";
import {
  Home,
  Briefcase,
  Users,
  MessageSquare,
  Settings,
  Bell,
  MapPin,
  Clock,
  DollarSign
} from "lucide-react";

export default function Postjob3() {
  const navigate = useNavigate();

  const MenuItem = ({ icon, label, active, onClick }) => (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 px-3 py-2 rounded cursor-pointer text-sm ${
        active ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {icon}
      {label}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f4f6fb] flex">
      
      {/* ========== Sidebar ========== */}
      <aside className="w-64 bg-white border-r px-6 py-6">
        <h1 className="text-xl font-bold mb-8 text-blue-600">Talentpoint</h1>

        <nav className="space-y-3">
          <MenuItem icon={<Home size={18} />} label="Dashboard" onClick={() => navigate("/empdashboard")} />
          <MenuItem icon={<Briefcase size={18} />} label="Jobs" active />
          <MenuItem icon={<Users size={18} />} label="Candidates" />
          <MenuItem icon={<MessageSquare size={18} />} label="Message" />
          <MenuItem icon={<Settings size={18} />} label="Settings" onClick={() => navigate("/empsettings")} />
        </nav>
      </aside>

      {/* ========== Main Content ========== */}
      <main className="flex-1 p-10">

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-lg font-semibold">Post the job</h2>
            <p className="text-sm text-gray-500">
              Step 3 of 3 | Review and Verify the information before post
            </p>
          </div>
          <Bell className="text-gray-500" />
        </div>

        {/* Progress */}
        <div className="w-full bg-gray-200 h-2 rounded mb-2">
          <div className="bg-blue-600 h-2 rounded" style={{ width: "98%" }} />
        </div>

        {/* Tabs */}
        <div className="flex justify-between text-xs text-gray-500 mb-6">
          <span>Job Info</span>
          <span>Experience & Skills</span>
          <span className="text-blue-600 font-medium">Review</span>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-3 gap-6">

          {/* LEFT SIDE */}
          <div className="col-span-2 space-y-6">

            {/* Job Card */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex gap-4">
                <img
                  src="https://images.unsplash.com/photo-1581091215367-59ab6b3d0a7a"
                  alt="job"
                  className="w-28 h-20 object-cover rounded"
                />

                <div>
                  <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
                    Top match
                  </span>
                  <h3 className="text-lg font-semibold mt-2">
                    Security Guard
                  </h3>
                  <p className="text-sm text-gray-500">Metro mall</p>
                </div>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-4 mt-6 text-sm">

                <InfoBox icon={<MapPin size={16} />} label="Location" value="Gold Coast" />
                <InfoBox icon={<Clock size={16} />} label="Job Type" value="Full time" />
                <InfoBox icon={<DollarSign size={16} />} label="Salary" value="300–450 / month" />
                <InfoBox icon={<Clock size={16} />} label="Shift" value="Night Shift" />

              </div>

              {/* Skills */}
              <div className="mt-6">
                <p className="text-sm font-medium mb-2">Required Skills</p>
                <div className="flex flex-wrap gap-2">
                  {["Security", "Physical Fitness", "Alert", "Communication", "Strong observation"].map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-100 px-3 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Upgrade Banner */}
              <div className="mt-6 bg-blue-600 text-white text-sm p-3 rounded flex justify-between items-center">
                <span>You can post up to 2 jobs for free.</span>
                <button className="underline">Upgrade Now</button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Description */}
          <div className="bg-white rounded-lg shadow p-6 text-sm space-y-4">

            <div>
              <h4 className="font-semibold mb-2">Job Description</h4>
              <p className="text-gray-600">
                Responsible for ensuring the safety and security of shoppers,
                staff, and property. Duties include patrolling premises,
                monitoring CCTV, controlling access, preventing theft or
                disturbances, and assisting customers when needed.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Compensation & Benefits</h4>
              <ul className="list-disc pl-4 text-gray-600 space-y-1">
                <li>Competitive salary based on experience</li>
                <li>Overtime and shift allowances</li>
                <li>Uniform and equipment provided</li>
                <li>Training and career development</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Additional Information</h4>
              <p className="text-gray-600">Posted date : 01/03/2026</p>
              <p className="text-gray-600">Expire date : 12/03/2026</p>
              <p className="text-gray-600">HR mail ID : metromallHR@gmail.com</p>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 pt-4">
              <button
                onClick={() => navigate("/empexperience")}
                className="px-6 py-2 border rounded text-sm"
              >
                Back
              </button>

              <button className="px-6 py-2 bg-blue-600 text-white rounded text-sm">
                Post Now
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

/* ========== Small Components ========== */

function InfoBox({ icon, label, value }) {
  return (
    <div className="border rounded p-3 flex items-center gap-3">
      <div className="text-blue-600">{icon}</div>
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}
