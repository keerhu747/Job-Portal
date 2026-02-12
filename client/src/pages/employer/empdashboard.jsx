import { useNavigate } from "react-router-dom";

import {
  Home,
  Briefcase,
  Users,
  MessageSquare,
  Settings,
  Bell,
  Search
} from "lucide-react";

export default function EmpDashboard() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#f4f6fb] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r px-6 py-6 relative">
        <h1 className="text-xl font-bold mb-8 text-blue-600">Talentpoint</h1>

        <nav className="space-y-4 text-sm">
          <MenuItem icon={<Home size={18} />} label="Dashboard" active />
          <MenuItem icon={<Briefcase size={18} />} label="Jobs"  onClick={() => navigate("/empjobs")} />
          <MenuItem icon={<Users size={18} />} label="Candidates" />
          <MenuItem icon={<MessageSquare size={18} />} label="Message" />
          <MenuItem icon={<Settings size={18} />} label="Settings" onClick={() => navigate("/empsettings")}
 />
        </nav>

        <div className="absolute bottom-6 flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            className="rounded-full"
          />
          <div>
            <p className="text-sm font-medium">Alex Rivera</p>
            <p className="text-xs text-gray-500">Hiring Manager</p>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-96">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
            <input
              className="w-full pl-10 pr-4 py-2 border rounded-md text-sm"
              placeholder="Search Employer here"
            />
          </div>
          <Bell className="text-gray-500" />
        </div>

        <h2 className="text-xl font-semibold">Employer Dashboard</h2>
        <p className="text-sm text-gray-500 mb-6">
          Welcome back Alex Rivera, Here’s a summary of your current requirement activities
        </p>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <StatCard title="Active Job Posting" value="12" />
          <StatCard title="Total Applicants" value="1,208" />
          <StatCard title="New Message" value="2" />
          <StatCard title="AI recommended Candidates" badge="BETA" />
        </div>

        {/* Content */}
        <div className="grid grid-cols-3 gap-6">
          {/* Table */}
          <div className="col-span-2 bg-white rounded-lg p-6 border">
            <div className="flex justify-between mb-4">
              <h3 className="font-semibold">Recent Job Posting</h3>
              <button className="text-sm text-blue-600">View All</button>
            </div>

            <table className="w-full text-sm">
              <thead className="text-gray-500 border-b">
                <tr>
                  <th className="text-left py-2">Job Title</th>
                  <th>Posted Date</th>
                  <th>Applicants</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <JobRow
                  title="Warehouse Associate"
                  date="Oct 12, 2025"
                  applicants="55"
                />
                <JobRow
                  title="Customer Service"
                  date="Nov 21, 2025"
                  applicants="83"
                />
              </tbody>
            </table>
          </div>

          {/* Right Panel */}
          <div className="bg-white rounded-lg p-6 border">
            <h3 className="font-semibold mb-4">AI recommended Candidates</h3>

            <CandidateCard />
            <CandidateCard />

            <div className="mt-4 border rounded-lg p-4 text-center">
              <p className="text-sm font-medium mb-1">Upgrade Premium</p>
              <p className="text-xs text-gray-500">
                To unlock more Profiles
              </p>
              <button className="mt-2 text-blue-600 text-sm">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex gap-4">
          <button className="border px-4 py-2 rounded-md text-sm">
            Post a new Job
          </button>
          <button className="border px-4 py-2 rounded-md text-sm">
            View Messages
          </button>
        </div>
      </main>
    </div>
  );
}

/* ---------------- Components ---------------- */

function MenuItem({ icon, label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer
      ${active ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100"}`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}

function StatCard({ title, value, badge }) {
  return (
    <div className="bg-white border rounded-lg p-4">
      <p className="text-xs text-gray-500 mb-1">{title}</p>
      <div className="flex items-center gap-2">
        <h3 className="text-xl font-semibold">{value}</h3>
        {badge && (
          <span className="text-xs bg-blue-100 text-blue-600 px-2 rounded">
            {badge}
          </span>
        )}
      </div>
    </div>
  );
}

function JobRow({ title, date, applicants }) {
  return (
    <tr className="border-b last:border-none">
      <td className="py-3">{title}</td>
      <td className="text-center">{date}</td>
      <td className="text-center">{applicants}</td>
      <td className="text-center">
        <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
          Active
        </span>
      </td>
      <td className="text-center">
        <button className="text-blue-600 text-xs">Manage</button>
      </td>
    </tr>
  );
}

function CandidateCard() {
  return (
    <div className="flex items-center gap-3 mb-4">
      <img src="https://i.pravatar.cc/36" className="rounded-full" />
      <div className="flex-1">
        <p className="text-sm font-medium">Marcus Chen</p>
        <p className="text-xs text-gray-500">
          Previous experience at Amazon
        </p>
      </div>
      <button className="text-xs text-blue-600">View</button>
    </div>
  );
}
