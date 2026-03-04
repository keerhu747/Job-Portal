import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Home,
  Briefcase,
  Users,
  MessageSquare,
  Settings,
  Bell,
  CheckCircle,
  Lightbulb
} from "lucide-react";

export default function Postjob2() {
  const navigate = useNavigate();

  const [skills, setSkills] = useState(["Driving", "Helper"]);
  const [newSkill, setNewSkill] = useState("");
  const [negotiable, setNegotiable] = useState(true);

  const addSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

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
    <div className="min-h-screen bg-gray-100 flex">

      
      {/* Main Content */}
      <div className="flex-1 p-10">

        <div className="bg-white rounded-lg shadow p-8 max-w-5xl mx-auto">

          {/* Header */}
          <h2 className="text-lg font-semibold">Post the job</h2>
          <p className="text-sm text-gray-500 mb-4">
            Step 2 of 3 | Fill the Basic information about the Position
          </p>

          {/* Progress */}
          <div className="w-full bg-gray-200 h-2 rounded mb-2">
            <div className="bg-blue-600 h-2 rounded" style={{ width: "75%" }}></div>
          </div>

          <div className="flex justify-between text-xs text-gray-500 mb-6">
            <span>Job Info</span>
            <span className="text-blue-600 font-medium">Experience & Skills</span>
            <span>Review</span>
          </div>

          <div className="grid grid-cols-3 gap-6">

            {/* LEFT SIDE FORM */}
            <div className="col-span-2 space-y-6">

              {/* Required Skills */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Required Skills *
                </label>

                <div className="border rounded p-3 flex flex-wrap gap-2 items-center">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-600 px-3 py-1 text-xs rounded flex items-center gap-2"
                    >
                      {skill}
                      <button onClick={() => removeSkill(index)}>×</button>
                    </span>
                  ))}

                  <input
                    type="text"
                    placeholder="Add a skill..."
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addSkill()}
                    className="outline-none text-sm flex-1"
                  />
                </div>
              </div>

              {/* Education */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Education
                </label>
                <select className="w-full border rounded px-3 py-2 text-sm">
                  <option>Minimum Education Level</option>
                  <option>High School</option>
                  <option>Diploma</option>
                  <option>Bachelor Degree</option>
                  <option>Master Degree</option>
                </select>
              </div>

              {/* Shift & Close Date */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Shift</label>
                  <input
                    type="text"
                    defaultValue="Night"
                    className="w-full border rounded px-3 py-2 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Job Close date
                  </label>
                  <input
                    type="date"
                    className="w-full border rounded px-3 py-2 text-sm"
                  />
                </div>
              </div>

              {/* Compensation */}
              <div>
                <label className="block text-sm font-medium mb-3">
                  Compensation
                </label>

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Min Salary (Monthly AUD)"
                    className="border rounded px-3 py-2 text-sm"
                  />

                  <input
                    type="text"
                    placeholder="Max Salary (Monthly AUD)"
                    className="border rounded px-3 py-2 text-sm"
                  />
                </div>

                {/* Negotiable Toggle */}
                <div className="flex items-center justify-between mt-4 bg-gray-50 p-4 rounded">
                  <div>
                    <p className="text-sm font-medium">Salary is negotiable</p>
                    <p className="text-xs text-gray-500">
                      Marking this show candidates that the range is flexible
                    </p>
                  </div>

                  <button
                    onClick={() => setNegotiable(!negotiable)}
                    className={`w-10 h-5 flex items-center rounded-full p-1 ${
                      negotiable ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`bg-white w-4 h-4 rounded-full shadow transform ${
                        negotiable ? "translate-x-5" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-4 mt-6">
                <button
                  onClick={() => navigate("/emplayout/post-job")}
                  className="px-6 py-2 border rounded text-sm"
                >
                  Back
                </button>

                <button
                  onClick={() => navigate("/emplayout/postjob3")}
                  className="px-6 py-2 bg-blue-600 text-white rounded text-sm"
                >
                  Continue
                </button>
              </div>
            </div>

            {/* RIGHT SIDE JOB TIPS */}
            <div className="bg-blue-50 border border-blue-200 rounded p-4 h-fit">
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
        </div>
      </div>
    </div>
  );
}

function Tip({ title, text }) {
  return (
    <div className="flex gap-3 mt-4">
      <CheckCircle size={16} className="text-blue-600 mt-1" />
      <div>
        <p className="text-sm font-medium text-blue-600">{title}</p>
        <p className="text-xs text-gray-600">{text}</p>
      </div>
    </div>
  );
}
