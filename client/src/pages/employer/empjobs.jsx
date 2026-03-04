import { useNavigate } from "react-router-dom";
import {
  Home,
  Briefcase,
  Users,
  MessageSquare,
  Settings,
  Bell
} from "lucide-react";

export default function EmpJobs() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f4f6fb] flex">
      {/* Sidebar */}
     
      {/* Main */}
      <main className="flex-1 p-8">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold">Manage Jobs</h2>
            <p className="text-sm text-gray-500">
              Create and oversee your active job listings across the platform
            </p>
          </div>

          <div className="flex items-center gap-4">
            
            <button 
             onClick={() => navigate("/emplayout/post-job")}
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
              + Post New Jobs
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white border rounded-lg p-6">
          <div className="flex gap-6 text-sm mb-4">
            <button className="text-blue-600 font-medium">
              Active <span className="ml-1 text-xs">(12)</span>
            </button>
            <button className="text-gray-500">
              Closed <span className="ml-1 text-xs">(42)</span>
            </button>
          </div>

          {/* Table */}
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
          </table>
        </div>
      </main>
    </div>
  );
}

/* ---------------- Reusable Components ---------------- */

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
        <button className="bg-blue-600 text-white text-xs px-3 py-1 rounded">
          Manage
        </button>
      </td>
    </tr>
  );
}
