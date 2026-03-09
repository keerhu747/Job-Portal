import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Emplogin() {
  const [role, setRole] = useState("HR Manager");
  const navigate = useNavigate();

  
  const handleSubmit = () => {
    // later you can add API call here
    navigate("/emplayout/empsettings");
  };

  return (
    <div className="min-h-screen bg-[#f4f6fb] flex justify-center py-10">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-sm p-8">
        {/* Header */}
        <h2 className="text-2xl font-semibold mb-1">
          Let’s Start with the basics
        </h2>
        <p className="text-sm text-gray-500 mb-8">
          Please provide your contact details so candidates can reach you
        </p>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First Name */}
          <div>
            <label className="form-label">
              First Name <span className="text-red-500">*</span>
            </label>
            <input className="form-input" placeholder="Jane" />
          </div>

          {/* Last Name */}
          <div>
            <label className="form-label">Last Name</label>
            <input className="form-input" placeholder="Doe" />
          </div>

          {/* Location */}
          <div>
            <label className="form-label">Location</label>
            <input className="form-input" placeholder="Enter the location" />
          </div>

          {/* Email */}
          <div>
            <label className="form-label">
              Work Email Address <span className="text-red-500">*</span>
            </label>
            <input className="form-input" placeholder="john@gmail.com" />
          </div>

          {/* Phone */}
          <div>
            <label className="form-label">
              Phone number <span className="text-red-500">*</span>
            </label>
            <input className="form-input" placeholder="+91 98765 43210" />
          </div>

          {/* Password */}
          <div>
            <label className="form-label">
              Enter Password <span className="text-red-500">*</span>
            </label>
            <input type="password" className="form-input" />
          </div>

          {/* Company Size */}
          <div className="md:col-span-2">
            <label className="form-label">Company Size</label>
            <select className="form-input">
              <option>Select Company Size</option>
              <option>1–10</option>
              <option>11–50</option>
              <option>51–200</option>
              <option>200+</option>
            </select>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="form-label">Confirm Password</label>
            <input type="password" className="form-input" />
          </div>

          {/* Company Name */}
          <div className="md:col-span-2">
            <label className="form-label">Company Name</label>
            <input className="form-input" placeholder="Company name" />
          </div>

          {/* About Company */}
          <div>
            <label className="form-label">
              About Company <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="4"
              className="form-input resize-none"
            ></textarea>
          </div>
        </div>

        {/* Role */}
        <div className="mt-6">
          <label className="form-label mb-2 block">Role</label>
          <div className="flex gap-6">
            {["HR Manager", "Recruiter", "Founder / Owner"].map((r) => (
              <label key={r} className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="role"
                  checked={role === r}
                  onChange={() => setRole(r)}
                  className="accent-blue-600"
                />
                {r}
              </label>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-4 mt-8">
          <button 
          onClick={() => navigate("/register")}
          className="px-6 py-2 border rounded-md text-sm">
            Cancel
          </button>
          <button 
            onClick={handleSubmit}
            className="px-6 py-2 bg-blue-600 text-white rounded-md text-sm"
          >  
            Save & Continue →
          </button>
        </div>
      </div>
    </div>
  );
}
