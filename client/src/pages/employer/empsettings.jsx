import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Home,
  Briefcase,
  Users,
  MessageSquare,
  Settings,
  ChevronRight,
  Lock,
  Shield,
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
      

      {/* Main Content */}
     <div className="flex-1 px-16 py-14">
        <div className="max-w-6xl">

          <div className="grid grid-cols-2 gap-14">

            {/* LEFT COLUMN */}
            <div className="space-y-10">

              <Input label="Company Name" name="companyName" value={form.companyName} onChange={handleChange} />

              <Input label="Website URL" name="website" value={form.website} onChange={handleChange} />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Company Type
                </label>
                <select
                  name="companyType"
                  value={form.companyType}
                  onChange={handleChange}
                  className="w-full h-[52px] border border-gray-300 rounded-lg px-4 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white"
                >
                  <option>Supply Chain & Transport</option>
                </select>
              </div>

              {/* Logo Section */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Company Logo
                </label>

                <div className="flex items-center gap-6">
                  <div className="w-36 h-36 bg-[#f3e2c7] flex items-center justify-center rounded-md">
                    <Lock className="text-orange-500" size={32} />
                  </div>

                  <div>
                    <p className="text-blue-600 font-medium cursor-pointer">
                      Replace Logo
                    </p>
                    <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                      JPG , PNG or SVG . Max 2.5 MB . 1 : 1 ratio recommended
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-10">

              <Input label="Office Email" name="email" value={form.email} onChange={handleChange} />

              <Input label="Phone number" name="phone" value={form.phone} onChange={handleChange} />

              {/* Security Action */}
              <div>
                <h3 className="text-lg font-semibold mb-6">
                  Security Action
                </h3>

                {/* Change Password Card */}
                <div className="flex items-center justify-between border-2 border-blue-500 bg-blue-50 px-6 py-5 rounded-lg cursor-pointer">
                  <div className="flex items-center gap-4">
                    <Lock className="text-blue-600" size={20} />
                    <div>
                      <p className="font-medium text-gray-800">
                        Change Password
                      </p>
                      <p className="text-sm text-gray-500">
                        Last Updated 2 months ago
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="text-blue-600" size={20} />
                </div>

                {/* 2FA Card */}
                <div className="mt-6 border-2 border-orange-400 bg-orange-50 px-6 py-5 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Shield className="text-orange-500 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-orange-600">
                        Two factor authentication
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        Recommended for higher security. currently disable
                      </p>
                      <p className="text-orange-600 font-medium text-sm mt-3 cursor-pointer">
                        Enable Now
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

function Input({ label, name, value, onChange }) {
  return (
    <div>
      <label className="block text-sm text-gray-600 mb-2">
        {label}
      </label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

function MenuItem({ icon, label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer text-sm
      ${active
        ? "bg-blue-50 text-blue-600 font-medium"
        : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {icon}
      {label}
    </div>
  );
}
