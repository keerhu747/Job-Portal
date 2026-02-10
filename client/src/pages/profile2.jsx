
import { useState } from "react";
import {
  FaHandsHelping,
  FaWarehouse,
  FaCar,
  FaShieldAlt,
  FaBroom,
} from "react-icons/fa";
import { MdRestaurant } from "react-icons/md";

export default function Profile2() {
  const [role, setRole] = useState("");
  const [passYear, setPassYear] = useState("");
  const [course, setCourse] = useState("");
  const [location, setLocation] = useState("");
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [jobPref, setJobPref] = useState("");

  const roles = ["Student", "Fresher", "Experienced"];

  const years = Array.from({ length: 40 }, (_, i) => 1990 + i);

  const jobOptions = [
    { name: "Helping", icon: <FaHandsHelping /> },
    { name: "Warehouse", icon: <FaWarehouse /> },
    { name: "Cooking", icon: <MdRestaurant /> },
    { name: "Driving", icon: <FaCar /> },
    { name: "Security", icon: <FaShieldAlt /> },
    { name: "Cleaning", icon: <FaBroom /> },
  ];

  const handleAddSkill = (e) => {
    if (e.key === "Enter" && skillInput.trim()) {
      if (!skills.includes(skillInput.trim())) {
        setSkills([...skills, skillInput.trim()]);
      }
      setSkillInput("");
    }
  };

  const removeSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f6fb] p-4">
      <div className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-lg">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Create your Profile</h1>
          <p className="text-sm text-gray-400 mb-4">
            Step 2 of 3 · Education & Skills Details
          </p>

          <div className="w-full bg-gray-200 h-2 rounded-full mb-2">
            <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
          </div>

          <div className="flex justify-between text-sm text-gray-500">
            <span>Basic Info</span>
            <span className="text-blue-600 font-medium">Education & Skills</span>
            <span>Experience</span>
          </div>
        </div>

        {/* Form */}
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  {/* LEFT SIDE – INPUTS */}
  <div className="lg:col-span-2 space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium mb-1">I'm a *</label>
        <select
          className="w-full border rounded-md p-2"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select Role</option>
          {roles.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Year of Pass Out *
        </label>
        <select
          className="w-full border rounded-md p-2"
          value={passYear}
          onChange={(e) => setPassYear(e.target.value)}
        >
          <option value="">Select Year</option>
          {years.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Course & Department
        </label>
        <input
          className="w-full border rounded-md p-2"
          placeholder="Enter the course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Job Location
        </label>
        <input
          className="w-full border rounded-md p-2"
          placeholder="Enter the location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
    </div>

    {/* Skills */}
    <div>
      <label className="block text-sm font-medium mb-1">Skills *</label>
      <div className="border rounded-md p-2 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center gap-1"
          >
            {skill}
            <button onClick={() => removeSkill(skill)}>×</button>
          </span>
        ))}
        <input
          className="flex-1 outline-none"
          placeholder="Add a skill and press Enter"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
          onKeyDown={handleAddSkill}
        />
      </div>
      <p className="text-xs text-gray-400 mt-1">
        Add at least 3 skills relevant to your career path.
      </p>
    </div>
  </div>

  {/* RIGHT SIDE – JOB PREFERENCE */}
  <div>
    <label className="block text-sm font-medium mb-3">
      Job Preference *
    </label>
    <div className="grid grid-cols-2 gap-4">
      {jobOptions.map((job) => (
        <button
          key={job.name}
          type="button"
          onClick={() => setJobPref(job.name)}
          className={`border rounded-lg p-4 flex flex-col items-center gap-2 ${
            jobPref === job.name
              ? "border-blue-600 bg-blue-50"
              : "border-gray-300"
          }`}
        >
          <span className="text-2xl">{job.icon}</span>
          <span className="text-sm">{job.name}</span>
        </button>
      ))}
    </div>
  </div>
</div>


        {/* Footer */}
        <div className="mt-8 flex justify-between">
          <button className="border px-6 py-2 rounded-md">Back</button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
