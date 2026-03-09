import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Home,
  Briefcase,
  Users,
  MessageSquare,
  Settings,
  CheckCircle,
  Lightbulb
} from "lucide-react";

export default function PostJob() {
  const navigate = useNavigate();

  const [workType, setWorkType] = useState("Full-time");

  return (
    <div className="min-h-screen bg-[#f4f6fb] flex">
      {/* ========== Sidebar ========== */}
      

      {/* ========== Main Content ========== */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold">Post the job</h2>
            <p className="relative text-sm text-gray-500">
              Step 1 of 3 | Fill the basic information about the Position
              <p className="absolute top-0 left-235 text-blue-600 ">25%</p>
            </p>
          </div>
        </div>

        {/* Progress */}
          <div className="w-full bg-gray-200 h-2 rounded mb-2">
            <div className="bg-blue-600 h-2 rounded" style={{ width: "25%" }}></div>
          </div>

          <div className="flex justify-between text-xs text-black-500 mb-6">
            <span>Job Info</span>
            <span className="text-blue-600 font-medium">Experience & Skills</span>
            <span>Review</span>
          </div>

        {/* Form Layout */}
        <div className="grid grid-cols-3 gap-8">
          {/* Left Form */}
          <div className="col-span-2 bg-white p-6 rounded-lg shadow-sm space-y-5">

            <Input className="border border-gray-200" label="Job title" placeholder="Enter the Job title" />

            <div className="grid grid-cols-2 gap-5">
              <Select label="Job categories" />
              <Input label="Location" placeholder="Enter the location" />
            </div>

            <Input label="Enter Your Email ID" placeholder="Enter the Email ID" />

            {/* Work Type */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Work Type
              </label>
              <div className="flex gap-4">
                {["Full-time", "Part-time", "Contract"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setWorkType(type)}
                    className={`px-5 py-2 rounded-md border text-sm transition
                      ${
                        workType === type
                          ? "border-blue-600 text-blue-600 bg-blue-50"
                          : "border-gray-300 text-gray-600 hover:border-blue-500"
                      }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bordr border-gray-600 ">
              <label className=" block text-sm font-medium mb-2">
                Job description
              </label>
              <textarea
                className="w-full border rounded-md p-3 h-36 text-sm focus:outline-none "
                placeholder="Describe the roles and responsibility & Benefits..."
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 pt-4">
              <button 
             onClick={() => navigate("/emplayout/empjobs")}
               className="px-5 py-2 border rounded-md text-sm">
                Back
              </button>
              <button 
               onClick={() => navigate("/emplayout/postjob2")}
              className="px-6 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                Continue
              </button>
            </div>
          </div>

          {/* Right Tips Card */}
          <div className="bg-blue-50 border border-blue-300 rounded-lg p-6 space-y-4 h-fit">
            <div className="flex items-center gap-2 text-blue-600 font-semibold">
              <Lightbulb size={18} />
              Job Posting Tips
            </div>

            <Tip
              title="Use clear job titles:"
              text='Precise titles like "Senior Backend Developer" get more qualified applicants.'
            />
            <Tip
              title="List key responsibilities:"
              text="Be specific about daily tasks so candidates understand the role."
            />
            <Tip
              title="Mention culture:"
              text="Briefly talk about the team and environment to attract the right fit."
            />
          </div>
        </div>
      </main>
    </div>
  );
}

/* ================= Components ================= */

function MenuItem({ icon, label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer
      ${
        active
          ? "bg-blue-50 text-blue-600"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}

function Input({ label, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        className="w-full border border-gray-600 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
      />
    </div>
  );
}

function Select({ label }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">
        {label} <span className="text-red-500">*</span>
      </label>
      <select className="w-full border border-gray-600 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option>Select Job categories</option>
      </select>
    </div>
  );
}

function Tip({ title, text }) {
  return (
    <div className="flex gap-3">
      <CheckCircle size={18} className="text-blue-600 mt-1" />
      <div>
        <p className="font-medium text-blue-600 text-sm">{title}</p>
        <p className="text-gray-600 text-sm">{text}</p>
      </div>
    </div>
  );
}
