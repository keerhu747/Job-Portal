import { useNavigate } from "react-router-dom";
import {
  Bell,
  MessageCircle,
  Trash2,
  SlidersHorizontal,
  Warehouse
} from "lucide-react";

export default function Myappln5() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">

      {/* HEADER */}
      <div className="bg-white px-8 py-4 flex justify-between items-center border-b">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded font-bold">
            TP
          </div>
          <div>
            <h2 className="font-semibold">Hello, Alex !</h2>
            <p className="text-sm text-gray-500">Brisbane</p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Bell size={18} />
          <MessageCircle size={18} />
          <img
            src="https://i.pravatar.cc/40"
            className="w-9 h-9 rounded-full"
            alt=""
          />
        </div>
      </div>

      {/* NAVBAR */}
      <div className="bg-blue-700 text-white px-8 py-3 flex gap-10 text-sm">
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

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-8 py-8">

        {/* TITLE */}
        <h2 className="font-semibold text-lg mb-1">My Application</h2>
        <p className="text-sm text-gray-500 mb-6">
          Manage and track your active job application in one place.
        </p>

        {/* STATUS BOXES */}
        <div className="grid grid-cols-4 gap-5 mb-6">
          <StatusBox title="Total Application" value="24" />
          <StatusBox title="In review" value="8" />
          <StatusBox title="Interviewing" value="4" />
          <StatusBox title="Offer Received" value="1" />
        </div>

        {/* FILTER + SORT */}
        <div className="flex justify-between items-center border-b border-gray-300 pb-4 mb-6">
          <div className="flex gap-3">
            <button
              onClick={() => navigate("/myappln")}
              className="px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-50 text-black"
            >
              All
            </button>

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

            <button className="px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-600 text-white">
              Interviewing
            </button>

            <FilterBtn text="Rejected" />
          </div>

          <div className="flex items-center gap-2 text-sm text-blue-600 bg-blue-50 px-3 py-1.5 rounded border border-blue-200">
            <SlidersHorizontal size={14} />
            Sort by : Date
          </div>
        </div>

        {/* TABLE HEADER */}
        <div className="grid grid-cols-12 text-sm text-gray-500 mb-1 px-2">
          <div className="col-span-6"></div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2">Applied On</div>
          <div className="col-span-2"></div>
        </div>

        {/* JOB ROW - WAREHOUSE HELPER */}
        <div className="grid grid-cols-12 items-center px-2 py-4">

          {/* LEFT SIDE */}
          <div className="col-span-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 rounded flex items-center justify-center">
              <Warehouse size={18} className="text-green-700" />
            </div>

            <div>
              <p className="font-medium">Warehouse Helper</p>
              <p className="text-sm text-gray-500">
                Metro Mall • On-site • Australia
              </p>
            </div>
          </div>

          {/* STATUS */}
          <div className="col-span-2 flex items-center">
            <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
              Interviewing
            </span>
          </div>

          {/* DATE */}
          <div className="col-span-2 text-sm text-gray-600">
            Oct - 12 - 2025
          </div>

          {/* ACTIONS */}
          <div className="col-span-2 flex items-center gap-4">
            <button
              onClick={() => navigate("/myappln2")}
              className="bg-blue-600 text-white px-4 py-1.5 rounded text-xs hover:bg-blue-700"
            >
              View Details
            </button>

            <Trash2 size={16} className="text-red-600 cursor-pointer" />
          </div>
        </div>

      </div>
    </div>
  );
}

/* COMPONENTS */

function StatusBox({ title, value }) {
  const valueColor =
    title === "In review"
      ? "text-blue-600"
      : title === "Interviewing"
      ? "text-green-600"
      : "";

  return (
    <div className="bg-white border border-gray-300 p-4 rounded">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className={`text-xl font-semibold mt-1 ${valueColor}`}>
        {value}
      </h3>
    </div>
  );
}

function FilterBtn({ text }) {
  return (
    <button className="px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-50 text-black">
      {text}
    </button>
  );
}