import { useNavigate } from "react-router-dom";
import { MapPin, DollarSign, Briefcase, Moon } from "lucide-react";

export default function MyAppln2() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100">

      {/* ===== HEADER ===== */}
      <div className="bg-white px-8 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded font-bold">
            TP
          </div>
          <div>
            <h2 className="font-semibold">Hello, Alex !</h2>
            <p className="text-sm text-gray-500">📍 Brisbane</p>
          </div>
        </div>
        <img src="https://i.pravatar.cc/40" className="w-10 h-10 rounded-full" />
      </div>

      {/* ===== NAVBAR ===== */}
      <div className="bg-blue-600 text-white px-8 py-3 flex justify-between text-sm">
        <div className="flex gap-8">
          <span>Job search</span>
          <span className="border-b-2 border-white pb-1">My Application</span>
          <span
            className="cursor-pointer"
            onClick={() => navigate("/topcompany")}
          >
            Top companies
          </span>
          <span>Upgrade Premium</span>
        </div>
        <div className="flex gap-4">🔔 💬</div>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-3 gap-6">

        {/* ===== LEFT COLUMN ===== */}
        <div className="col-span-2 space-y-6">

          {/* ===== BOX 1 : JOB HEADER ===== */}
           {/* JOB HEADER – NO BOX */}
        {/* JOB HEADER – IMAGE LEFT, TEXT RIGHT */}
       <div className="flex items-start gap-6 mb-6">

        {/* LEFT SIDE – IMAGE */}
        <img
          src="https://images.pexels.com/photos/842548/pexels-photo-842548.jpeg"
          alt="Job"
          className="w-32 h-24 object-cover rounded"
        />

         {/* RIGHT SIDE – TEXT (TOP MATCH) */}
        <div>
          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                Top match
          </span>
          <h2 className="text-xl font-semibold">
            Security Guard
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Metro Mall
          </p>
        </div>

       </div>

          {/* ===== BOX 2 : JOB INFO ===== */}
          <div className="bg-white border rounded-lg p-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            <InfoBox icon={<MapPin size={16} />} title="Location" value="Gold Coast" />
            <InfoBox icon={<DollarSign size={16} />} title="Salary" value="$300–450 / month" green />
            <InfoBox icon={<Briefcase size={16} />} title="Job Type" value="Full time" />
            <InfoBox icon={<Moon size={16} />} title="Shift" value="Night Shift" />
          </div>

          {/* ===== BOX 3 : REQUIRED SKILLS ===== */}
          <div className="bg-white border rounded-lg p-8">
            <h3 className="font-medium mb-4">Required Skills</h3>
            <div className="flex flex-wrap gap-3 text-sm">
              {[
                "Security",
                "Alert",
                "Physical Fitness",
                "Interpersonal skills",
                "Communication",
                "Strong observation",
              ].map((skill) => (
                <span
                  key={skill}
                  className="border px-3 py-1 rounded-full text-xs"
                >
                  ✔ {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ===== RIGHT COLUMN ===== */}
        <div className="bg-white border rounded-lg p-4 flex flex-col justify-between">

          <div>
            <h3 className="font-semibold mb-2">Job Description</h3>
            <p className="text-sm text-gray-600 mb-4">
              Responsible for ensuring the safety and security of shoppers,
              staff, and property at Metro Mall. Duties include patrolling
              premises, monitoring CCTV, controlling access, preventing theft
              or disturbances, responding to incidents, and assisting customers
              when needed.
            </p>

            <h4 className="font-medium mb-1">Compensation & Benefits</h4>
            <ul className="text-sm text-gray-600 list-disc pl-4 mb-4">
              <li>Competitive salary based on experience</li>
              <li>Overtime and shift allowances</li>
              <li>Uniform and required equipment provided</li>
              <li>Training and career development opportunities</li>
            </ul>

            <h4 className="font-medium mb-1">Additional Information</h4>
            <p className="text-sm text-gray-600">
              Posted date : 1/03/2026 <br />
              Expire date : 12/03/2026 <br />
              HR mail ID : MetromallHR@gmail.com
            </p>
          </div>

          <div className="flex gap-3 mt-6">
            <button 
              onClick={() => navigate("/myappln")}
              className="border px-4 py-2 rounded text-sm w-full">
              Cancel
            </button>
            <button
              disabled
              className="bg-gray-300 text-gray-600 px-4 py-2 rounded text-sm w-full cursor-not-allowed"
            >
              Applied
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ===== INFO BOX ===== */
function InfoBox({ icon, title, value, green }) {
  return (
    <div className="border rounded p-3 text-sm">
      <div className="flex items-center gap-2 text-gray-500 mb-1">
        {icon}
        <span>{title}</span>
      </div>
      <p className={`font-medium ${green ? "text-green-600" : ""}`}>
        {value}
      </p>
    </div>
  );
}