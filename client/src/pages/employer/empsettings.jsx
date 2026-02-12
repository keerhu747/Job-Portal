import { useState } from "react";
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


export default function EmpSettings() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    companyName: "Global Logistics Hub",
    website: "https://globallogisticshub.com",
    companyType: "Supply Chain & Transport",
    email: "hr@globallogisticshub.com",
    phone: "+1 (555) 000 - 1234",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex min-h-screen bg-[#f5f7fb]">
        {/* Sidebar */}
<aside className="w-64 bg-white border-r px-6 py-6 relative">
  <h1 className="text-xl font-bold mb-8 text-blue-600">Talentpoint</h1>

  <nav className="space-y-4 text-sm">
    <MenuItem
      icon={<Home size={18} />}
      label="Dashboard"
      onClick={() => navigate("/empdashboard")}
    />
    <MenuItem icon={<Briefcase size={18} />} label="Jobs"  onClick={() => navigate("/empjobs")} />
    <MenuItem icon={<Users size={18} />} label="Candidates" />
    <MenuItem icon={<MessageSquare size={18} />} label="Message" />
    <MenuItem
      icon={<Settings size={18} />}
      label="Settings"
      active
    />
  </nav>
</aside>



      {/* Main Content */}
      <div className="flex-1 p-10">

        <h1 className="text-2xl font-semibold mb-8">Account Settings</h1>

        <div className="grid grid-cols-2 gap-8">

          {/* Company Identity */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="font-semibold mb-6">Company Identity</h2>

            <div className="space-y-4">

              <div>
                <label className="block text-sm mb-1">Company Name</label>
                <input
                  name="companyName"
                  value={form.companyName}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Website URL</label>
                <input
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Company Type</label>
                <select
                  name="companyType"
                  value={form.companyType}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                >
                  <option>Supply Chain & Transport</option>
                  <option>IT</option>
                  <option>Finance</option>
                </select>
              </div>

              <div>
                <label className="block text-sm mb-1">Company Logo</label>
                <button className="w-full border-2 border-dashed p-4 rounded text-blue-600">
                  Replace Logo
                </button>
              </div>

            </div>
          </div>

          {/* Account & Security */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="font-semibold mb-6">Account & Security</h2>

            <div className="space-y-4">

              <div>
                <label className="block text-sm mb-1">Office Email</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Phone Number</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Security Action</label>
                <button className="w-full bg-blue-100 text-blue-700 p-3 rounded mb-3">
                  Change Password
                </button>

                <div className="bg-yellow-50 border border-yellow-300 p-3 rounded">
                  <p className="text-sm">
                    Two-factor authentication is recommended for higher security.
                  </p>
                  <button className="text-yellow-700 text-sm mt-2">
                    Enable Now
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

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

