import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaHandsHelping,
  FaWarehouse,
  FaCar,
  FaShieldAlt,
  FaBroom,
} from "react-icons/fa";
import { MdRestaurant } from "react-icons/md";

export default function Profile2() {

  const navigate = useNavigate();

  const [role, setRole] = useState("");
  const [passYear, setPassYear] = useState("");
  const [course, setCourse] = useState("");
  const [location, setLocation] = useState("");

  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");

  const [jobPref, setJobPref] = useState([]);

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

  const addSkill = (e) => {
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

  const toggleJob = (job) => {
    if (jobPref.includes(job)) {
      setJobPref(jobPref.filter((j) => j !== job));
    } else {
      setJobPref([...jobPref, job]);
    }
  };

  return (

    <div className="min-h-screen bg-[#e9edf7] flex items-center justify-center">

      <div className="w-[1300px] bg-white rounded-lg shadow-md p-15">

        {/* Header */}

        <h2 className="text-xl font-semibold mb-1">
          Create your Profile
        </h2>

        <p className="text-sm text-gray-500 mb-4">
          Step 2 of 3 · Education & Skills Details
        </p>

        {/* Progress Bar */}

        <div className="w-full bg-gray-200 h-2 rounded mb-2">
          <div className="bg-blue-600 h-2 w-[75%] rounded"></div>
        </div>

        <div className="flex justify-between text-sm text-gray-500 mb-6">
          <span>Basic Info</span>
          <span className="text-blue-600 font-medium">
            Education & Skills
          </span>
          <span>Experience</span>
        </div>

        <h3 className="text-lg font-semibold mb-1">
          Education Details & Skills
        </h3>

        <p className="text-sm text-gray-500 mb-6">
          Tell us about your education & skills
        </p>

        <div className="grid grid-cols-3 gap-8">

          {/* LEFT SIDE */}

          <div className="col-span-2 space-y-4">

            <div className="grid grid-cols-2 gap-4">

              <div>
                <label className="text-sm font-medium">
                  I'm a *
                </label>

                <select
                  className="w-full border rounded p-2 mt-1"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option>Select Year</option>
                  {roles.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">
                  Year Of Pass out *
                </label>

                <select
                  className="w-full border rounded p-2 mt-1"
                  value={passYear}
                  onChange={(e) => setPassYear(e.target.value)}
                >
                  <option>Select Year</option>
                  {years.map((y) => (
                    <option key={y}>{y}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">
                  Course & Department
                </label>

                <input
                  className="w-full border rounded p-2 mt-1"
                  placeholder="Enter the course"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Job Location
                </label>

                <input
                  className="w-full border rounded p-2 mt-1"
                  placeholder="Enter the location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

            </div>

            {/* Skills */}

            <div>

              <label className="text-sm font-medium">
                Skills *
              </label>

              <div className="border rounded p-2 flex flex-wrap gap-2 mt-1">

                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full flex items-center gap-1 text-sm"
                  >
                    {skill}
                    <button onClick={() => removeSkill(skill)}>×</button>
                  </span>
                ))}

                <input
                  className="flex-1 outline-none text-sm"
                  placeholder="Add a skill..."
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyDown={addSkill}
                />

              </div>

              <p className="text-xs text-gray-400 mt-1">
                Add at least 3 skills relevant to your career path.
              </p>

            </div>

          </div>

          {/* RIGHT SIDE JOB BOXES */}

          <div>

            <label className="text-sm font-medium mb-2 block">
              Job Preference *
            </label>

            <div className="grid grid-cols-3 gap-3">

              {jobOptions.map((job) => (

                <button
                  key={job.name}
                  onClick={() => toggleJob(job.name)}
                  className={`h-[75px] rounded flex flex-col justify-center items-center text-white text-sm
                  ${jobPref.includes(job.name)
                      ? "bg-blue-700"
                      : "bg-blue-500 hover:bg-blue-600"}`}
                >

                  <div className="text-xl mb-1">
                    {job.icon}
                  </div>

                  {job.name}

                </button>

              ))}

            </div>

          </div>

        </div>

        {/* Footer */}

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={() => navigate("/Profile")}
            className="border px-6 py-2 rounded text-gray-700"
          >
            Back
          </button>

          <button
            onClick={() => navigate("/Profile3")}
            className="bg-blue-600 text-white px-6 py-2 rounded"
          >
            Continue
          </button>

        </div>

      </div>

    </div>

  );
}