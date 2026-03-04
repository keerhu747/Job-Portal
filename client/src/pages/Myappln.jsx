import { useNavigate } from "react-router-dom";
import { Bell, MessageCircle, Trash2 } from "lucide-react";

export default function Myappln(){
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
            <h2 className="font-semibold">Hello, Alex!</h2>
            <p className="text-sm text-gray-500">📍 Brisbane</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Bell size={18} />
          <MessageCircle size={18} />
          <img src="https://i.pravatar.cc/40" className="w-9 h-9 rounded-full" />
        </div>
      </div>

      {/* ===== NAVBAR (ONLY 4 ITEMS) ===== */}
      <div className="bg-blue-600 text-white px-8 py-3 flex gap-10 text-sm">
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

      {/* ===== PAGE CONTENT ===== */}
      <div className="max-w-6xl mx-auto px-6 py-6">

        {/* TITLE */}
        <h2 className="font-semibold text-lg">My Application</h2>
        <p className="text-sm text-gray-500 mb-6">
          Manage and track your active job application in one place.
        </p>

        {/* ===== STATUS BOXES ===== */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <StatusBox title="Total Application" value="24" />
          <StatusBox title="In Review" value="8" blue />
          <StatusBox title="Interviewing" value="4" green />
          <StatusBox title="Offer Received" value="1" />
        </div>

        {/* ===== FILTER BUTTONS ===== */}
        <div className="flex gap-3 mb-6">
          <FilterBtn active text="All" />
          <button
            onClick={() => navigate("/myappln3")}
            className="px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-50 text-black"
          >
            Applied
          </button>
          <button
            onClick={() => navigate("/myappln4")}
            className="px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-50 text-black"
          >
            In review
          </button>
          <button
            onClick={() => navigate("/myappln5")}
            className="px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-50 text-black"
          >
            Interviewing
          </button>
          <FilterBtn text="Rejected" />
        </div>

        {/* ===== JOB LIST ===== */}
        <div className="bg-white rounded shadow-sm divide-y">

          <JobRow
            title="Warehouse Helper"
            place="Metro Mall • On-site • Australia"
            status="Interviewing"
            statusColor="bg-green-100 text-green-700"
            date="Oct - 12 - 2025"
          />

          <JobRow
            title="Cab Driver"
            place="Uber • On-site • Australia"
            status="In Review"
            statusColor="bg-blue-100 text-blue-700"
            date="Nov - 03 - 2025"
          />

          <JobRow
            title="Servant"
            place="Metro Mall • On-site • Australia"
            status="Applied"
            statusColor="bg-gray-200 text-gray-700"
            date="Dec - 12 - 2004"
          />

        </div>
      </div>
    </div>
  );
}

/* ===== COMPONENTS ===== */

function StatusBox({ title, value, blue, green }) {
  return (
    <div className="bg-white border rounded p-4">
      <p className="text-sm text-gray-500">{title}</p>
      <h3
        className={`text-xl font-semibold ${
          blue ? "text-blue-600" : green ? "text-green-600" : ""
        }`}
      >
        {value}
      </h3>
    </div>
  );
}

function FilterBtn({ text, active }) {
  return (
    <button
      className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
        active
          ? "bg-blue-600 text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      {text}
    </button>
  );
}

function JobRow({ title, place, status, statusColor, date }) {
  const navigate = useNavigate();
  
  return (
    <div className="grid grid-cols-6 items-center px-4 py-4 text-sm">
      <div className="col-span-2">
        <p className="font-medium">{title}</p>
        <p className="text-gray-500">{place}</p>
      </div>

      <div>
        <span className={`px-3 py-1 rounded-full text-xs ${statusColor}`}>
          {status}
        </span>
      </div>

      <div className="text-gray-500">{date}</div>

      <div className="flex items-center gap-4">
  {/* View Details Button */}
        <button
          onClick={() => navigate("/myappln2")}
          className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700"
        >
          View Details
        </button>

  {/* Delete Icon */}
        <button
          className="text-red-600 ml-4 hover:text-red-700"
          title="Delete"
        >
          <Trash2 size={18} strokeWidth={1.5}/>
        </button>
      </div>
    </div>
  );
}