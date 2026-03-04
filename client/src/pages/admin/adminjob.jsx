import { useState } from "react";
import AdminLayout from "../../components/adminlayout";
import {
  Bell,
  MapPin,
  Building2,
  Trash2,
  CheckCircle,
} from "lucide-react";

export default function AdminJob() {
  const [activeTab, setActiveTab] = useState("pending");

  const jobs = [
    {
      id: "JB-48119",
      title: "Senior Security Officer",
      salary: "$140k – $180k",
      location: "Brisbane",
      type: "Shopping Centre",
      time: "2 hours ago",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600",
    },
    {
      id: "JB-48120",
      title: "Senior Security Officer",
      salary: "$140k – $180k",
      location: "Brisbane",
      type: "Shopping Centre",
      time: "2 hours ago",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600",
    },
  ];

  return (
    <AdminLayout>
      <div className="flex gap-6">

        {/* LEFT SIDE */}
        <div className="flex-1">

          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-semibold">
                Job Moderation
              </h1>
              <p className="text-gray-500 text-sm">
                Real-time monitoring of Talentpoint Activates
              </p>
            </div>
            <Bell className="text-gray-600" />
          </div>

          {/* Tabs */}
          <div className="flex gap-6 border-b mb-6">
            <Tab
              label="Pending (12)"
              active={activeTab === "pending"}
              onClick={() => setActiveTab("pending")}
            />
            <Tab
              label="Approved"
              active={activeTab === "approved"}
              onClick={() => setActiveTab("approved")}
            />
            <Tab
              label="Rejected"
              active={activeTab === "rejected"}
              onClick={() => setActiveTab("rejected")}
            />
          </div>

          {/* Job Cards */}
          <div className="space-y-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-lg shadow-sm p-4 flex gap-4"
              >
                <img
                  src={job.image}
                  alt=""
                  className="w-40 h-32 object-cover rounded-md"
                />

                <div className="flex-1">
                  <div className="flex justify-between">
                    <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                      Pending Review
                    </span>

                    <div className="text-right text-sm">
                      <p className="text-gray-500">{job.time}</p>
                      <p className="font-medium">{job.salary}</p>
                    </div>
                  </div>

                  <h2 className="font-semibold mt-2">
                    {job.title}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    We are looking for an experienced security professional...
                  </p>

                  <div className="flex items-center gap-6 text-sm text-gray-600 mt-3">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Building2 size={14} />
                      {job.type}
                    </span>
                    <span>ID: {job.id}</span>
                  </div>

                  <div className="mt-4 flex gap-3">
                    <button className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded hover:bg-green-200">
                      <CheckCircle size={16} />
                      Approve
                    </button>

                    <button className="flex items-center justify-center bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE ACTIVITY PANEL */}
        <aside className="w-80 bg-white rounded-lg shadow-sm p-6">
          <h2 className="font-semibold mb-6">
            Job Moderation
          </h2>

          <ActivityItem
            color="green"
            text="Approved 'Security Guard' at City Mall"
          />
          <ActivityItem
            color="red"
            text="Rejected 'Electrician' at PowerFix Services"
          />
          <ActivityItem
            color="green"
            text="Approved 'Cook' at Sunrise Restaurant"
          />
          <ActivityItem
            color="green"
            text="Approved 'Warehouse Helper' at FastMove Logistics"
          />
        </aside>

      </div>
    </AdminLayout>
  );
}

/* ---------------- Components ---------------- */

function Tab({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`pb-2 text-sm font-medium ${
        active
          ? "text-blue-600 border-b-2 border-blue-600"
          : "text-gray-500"
      }`}
    >
      {label}
    </button>
  );
}

function ActivityItem({ color, text }) {
  return (
    <div className="flex items-start gap-3 mb-4 text-sm">
      <span
        className={`w-3 h-3 mt-1 rounded-full ${
          color === "green"
            ? "bg-green-500"
            : "bg-red-500"
        }`}
      ></span>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}