import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../components/adminlayout";
import { Search, SlidersHorizontal, Check, X } from "lucide-react";

export default function UserManagement() {
    const navigate = useNavigate();
  const users = [
    {
      name: "Alex Reve",
      email: "alexreve.2091@gmail.com",
      role: "Employer",
      status: "Active",
      lastActive: "1 min ago",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Oliver",
      email: "oliver2091@gmail.com",
      role: "Seeker",
      status: "Active",
      lastActive: "2 min ago",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Alex Reve",
      email: "alexreve.2091@gmail.com",
      role: "Employer",
      status: "Active",
      lastActive: "1 min ago",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <AdminLayout>
      <div className="p-8">

      {/* Main Content */}
      <main className="flex-1 p-10">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">User Management</h1>
          <p className="text-gray-500 text-sm">
            Central hub for managing users, roles, and account status across the TalentPoint platform.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center bg-white border border-gray-300 rounded-md px-3 py-2 w-96">
            <Search size={16} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search user by name, or email"
              className="outline-none w-full text-sm"
            />
          </div>

          <select className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm">
            <option>User Type</option>
            <option>Employer</option>
            <option>Seeker</option>
          </select>

          <select className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm">
            <option>Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <button className="bg-black text-white p-2 rounded-md">
            <SlidersHorizontal size={16} />
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-300 overflow-hidden w-full table-fixed">
          {/* Header */}
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr_0.8fr] bg-green-50 text-sm font-medium text-gray-700 px-6 py-4">
            <div>User Information</div>
            <div>Type</div>
            <div>Account Status</div>
            <div>Last activity</div>
            <div>Action</div>
          </div>

          {/* Rows */}
          {users.map((user, index) => (
            <div
              key={index}
              className="grid grid-cols-[2fr_1fr_1fr_1fr_0.8fr] items-center px-5 py-8 border-t border-gray-300 text-sm"
            >
              {/* User Info */}
              <div className="flex items-center gap-3">
                <img
                  src={user.image}
                  alt=""
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">{user.name}</p>
                  <p className="text-gray-500 text-xs">{user.email}</p>
                </div>
              </div>

              {/* Type */}
              <div>
                <span
                  className={`px-2 py-1 text-xs rounded ${
                    user.role === "Employer"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {user.role}
                </span>
              </div>

              {/* Status */}
              <div>
                <span className="px-2 py-1 text-xs rounded bg-green-100 text-green-600">
                  {user.status}
                </span>
              </div>

              {/* Last Activity */}
              <div className="text-gray-500">{user.lastActive}</div>

              {/* Action */}
              <div className="flex gap-3">
                <button className="text-red-500">
                  <X size={16} />
                </button>
                <button className="text-green-500">
                  <Check size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      </div>
    </AdminLayout>
  );
}