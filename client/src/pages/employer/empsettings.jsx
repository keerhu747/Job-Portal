import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Building2,
  Shield,
  ChevronRight,
  Lock
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

  const handleSave = async () => {

  try {

    const res = await axios.post(
      "http://localhost:5000/api/employer/save-settings",
      form
    );

    alert("Settings Saved Successfully");

  } catch (error) {

    console.log(error);
    alert("Saving Failed");

  }

};

  return (
    <div className="flex min-h-screen bg-[#f5f7fb]">

      {/* Main Content */}
      <div className="flex-1 px-1 py-2">

        <div className="max-w-6xl">

          <h2 className="text-2xl font-semibold pl-3 pb-6">
            Account Settings
          </h2>

          {/* TWO COLUMN GRID */}
          <div className="grid grid-cols-2 gap-14">

            {/* LEFT COLUMN */}
            <div className="space-y-10 border border-gray-300 pl-10 pr-4 py-2">

              <div className="flex items-center gap-2 mb-4 text-gray-700 font-semibold text-sm pb-2">
                <Building2 size={18} className="text-blue-600" />
                <span>COMPANY IDENTITY</span>
              </div>

              <Input
                label="Company Name"
                name="companyName"
                value={form.companyName}
                onChange={handleChange}
              />

              <Input
                label="Website URL"
                name="website"
                value={form.website}
                onChange={handleChange}
              />

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

              {/* LOGO */}
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
            <div className="space-y-10 border border-gray-300 pl-10 pr-4 py-2">

              <div className="flex items-center gap-2 mb-4 text-gray-700 font-semibold text-sm pb-2">
                <Shield size={18} className="text-blue-600" />
                <span>ACCOUNT & SECURITY</span>
              </div>

              <Input
                label="Office Email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />

              <Input
                label="Phone number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />

              {/* SECURITY ACTION */}
              <div>

                <h3 className="text-lg font-semibold mb-6">
                  Security Action
                </h3>

                {/* CHANGE PASSWORD */}
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

                {/* TWO FACTOR AUTH */}
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

          {/* SAVE BUTTON (OUTSIDE GRID) */}
          <div className="flex justify-end mt-8 pr-3">

            <button
              onClick={handleSave}
              className="bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Save
            </button>

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

