import { Home, Briefcase, Users, MessageSquare, Settings, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function EmpCandidates() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-[#f5f7fb]">

      {/* Sidebar */}
      
      {/* Main Content */}
      <div className="flex-1 px-12 py-10">

        {/* Top Search */}
        <div className="flex items-center justify-between mb-8">
          <div className="relative w-[400px]">
            <Search className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search Employer here"
              className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-[2fr_1fr] gap-10">

          {/* Candidate List */}
          <div>
            <h2 className="text-sm font-semibold text-gray-700 mb-6">
              Showing Short listed Candidates
            </h2>

            <div className="space-y-6">
              <CandidateCard name="Alex" location="Brisbane" experience="2+ yrs exps" match="94%" />
              <CandidateCard name="Ben" location="Brisbane" experience="1.5+ yrs exps" match="92%" />
            </div>
          </div>

          {/* Filter Panel */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 h-fit">
            <h3 className="text-sm font-semibold text-blue-600 mb-6">
              EXPERIENCE
            </h3>

            <div className="space-y-3 text-sm text-gray-600">
              <Checkbox label="Entry level" />
              <Checkbox label="1-2 years" />
              <Checkbox label="2-3 years" />
            </div>

            <h3 className="text-sm font-semibold text-blue-600 mt-8 mb-6">
              Education
            </h3>

            <div className="space-y-3 text-sm text-gray-600">
              <Checkbox label="Primary School" />
              <Checkbox label="Higher Secondary" />
              <Checkbox label="Under Graduate" />
              <Checkbox label="Post Graduate" />
              <Checkbox label="Vocational" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/* Candidate Card */
function CandidateCard({ name, location, experience, match }) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex justify-between items-center">

      <div className="flex items-center gap-4">
        <div className="w-14 h-14 bg-gray-200 rounded-full" />

        <div>
          <div className="flex items-center gap-3">
            <h4 className="font-semibold text-gray-800">{name}</h4>
            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
              {match} Match
            </span>
          </div>

          <p className="text-sm text-gray-500 mt-1">
            {location} — {experience}
          </p>

          <div className="flex gap-2 mt-3">
            <Tag label="Quick Learner" />
            <Tag label="Cooking" />
            <Tag label="Helper" />
          </div>
        </div>
      </div>

      <button className="text-blue-600 text-sm font-medium">
        View profile
      </button>
    </div>
  );
}

function Checkbox({ label }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input type="checkbox" className="accent-blue-600" />
      {label}
    </label>
  );
}

function Tag({ label }) {
  return (
    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
      {label}
    </span>
  );
}

function MenuItem({ icon, label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer text-sm
      ${
        active
          ? "bg-blue-50 text-blue-600 font-medium"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {icon}
      {label}
    </div>
  );
}