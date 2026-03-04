import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../components/adminlayout";
import { Users, Briefcase, Gem, DollarSign, Bell } from "lucide-react";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("users");
  const [period, setPeriod] = useState("monthly");

  return (
    <AdminLayout>
      
      {/* Main Content */}
      <div className="flex-1 p-8">

        {/* Top Bar */}
        <div className="flex justify-between items-center mb-8">
          <input
            type="text"
            placeholder="Search Users, jobs, or transaction"
            className="w-1/2 px-4 py-2 border rounded-md text-sm focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <Bell className="text-gray-500" />
        </div>

        <h1 className="text-xl font-semibold mb-6">
          Platform Overview
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">

          <div
            onClick={() => setActiveTab("users")}
            className={`p-5 rounded-lg shadow-sm cursor-pointer transition 
              ${activeTab === "users"
                ? "bg-blue-100 border border-blue-400"
                : "bg-white hover:bg-gray-50"}`}
          >
            <Users className="text-blue-600 mb-2" />
            <p className="text-sm text-gray-600">Total Users</p>
            <h2 className="text-lg font-semibold">12,598</h2>
          </div>

          <div
            onClick={() => setActiveTab("jobs")}
            className={`p-5 rounded-lg shadow-sm cursor-pointer transition 
              ${activeTab === "jobs"
                ? "bg-orange-100 border border-orange-400"
                : "bg-white hover:bg-gray-50"}`}
          >
            <Briefcase className="text-orange-500 mb-2" />
            <p className="text-sm text-gray-600">Active Job Posting</p>
            <h2 className="text-lg font-semibold">1,245</h2>
          </div>

          <div
            onClick={() => setActiveTab("subscription")}
            className={`p-5 rounded-lg shadow-sm cursor-pointer transition 
              ${activeTab === "subscription"
                ? "bg-purple-100 border border-purple-400"
                : "bg-white hover:bg-gray-50"}`}
          >
            <Gem className="text-purple-600 mb-2" />
            <p className="text-sm text-gray-600">Active Subscription</p>
            <h2 className="text-lg font-semibold">450</h2>
          </div>

          <div
            onClick={() => setActiveTab("revenue")}
            className={`p-5 rounded-lg shadow-sm cursor-pointer transition 
              ${activeTab === "revenue"
                ? "bg-green-100 border border-green-400"
                : "bg-white hover:bg-gray-50"}`}
          >
            <DollarSign className="text-green-600 mb-2" />
            <p className="text-sm text-gray-600">Platform Revenue</p>
            <h2 className="text-lg font-semibold">$49,800</h2>
          </div>

        </div>

        {/* Content Section */}
        <div className="flex gap-6">

          {/* Left Panel */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-sm">
            
            {activeTab === "users" && (
              <>
              <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-semibold mb-2">User Growth Overview</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Registration trends for the past 6 months
                </p>
              </div>

              <div className="flex bg-gray-100 rounded-md text-sm p-1">
  <button
    onClick={() => setPeriod("monthly")}
    className={`px-3 py-1 rounded-md transition ${
      period === "monthly"
        ? "bg-blue-600 text-white"
        : "text-gray-600"
    }`}
  >
    Monthly
  </button>

  <button
    onClick={() => setPeriod("weekly")}
    className={`px-3 py-1 rounded-md transition ${
      period === "weekly"
        ? "bg-blue-600 text-white"
        : "text-gray-600"
    }`}
  >
    Weekly
  </button>
</div>

                 
                   </div>
                <div className="h-64 bg-blue-100 rounded-md"></div>
              </>
           
            )}

            {activeTab === "jobs" && (
              <>
              <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-semibold mb-2">Active Job Posting Overview</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Job posting trends for the past 6 months
                </p>
              </div>
                <div className="flex bg-gray-100 rounded-md text-sm p-1">
  <button
    onClick={() => setPeriod("monthly")}
    className={`px-3 py-1 rounded-md transition ${
      period === "monthly"
        ? "bg-blue-600 text-white"
        : "text-gray-600"
    }`}
  >
    Monthly
  </button>

  <button
    onClick={() => setPeriod("weekly")}
    className={`px-3 py-1 rounded-md transition ${
      period === "weekly"
        ? "bg-blue-600 text-white"
        : "text-gray-600"
    }`}
  >
    Weekly
  </button>
</div>
                </div>
                <div className="h-64 bg-orange-100 rounded-md"></div>
              </>
            )}

            {activeTab === "subscription" && (
              <>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-semibold">Active Subscription Overview</h3>
                    <p className="text-sm text-gray-500">
                      Subscription for the past 6 months
                    </p>
                  </div>
                  <div className="flex bg-gray-100 rounded-md text-sm p-1">
  <button
    onClick={() => setPeriod("monthly")}
    className={`px-3 py-1 rounded-md transition ${
      period === "monthly"
        ? "bg-blue-600 text-white"
        : "text-gray-600"
    }`}
  >
    Monthly
  </button>

  <button
    onClick={() => setPeriod("weekly")}
    className={`px-3 py-1 rounded-md transition ${
      period === "weekly"
        ? "bg-blue-600 text-white"
        : "text-gray-600"
    }`}
  >
    Weekly
  </button>
</div>
                </div>
                <div className="h-64 bg-purple-100 rounded-md"></div>
              </>
            )}

            {activeTab === "revenue" && (
              <>
              <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-semibold mb-2">Platform Revenue Overview</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Revenue trends in the past 6 months
                </p>
              </div>
              <div className="flex bg-gray-100 rounded-md text-sm p-1">
  <button
    onClick={() => setPeriod("monthly")}
    className={`px-3 py-1 rounded-md transition ${
      period === "monthly"
        ? "bg-blue-600 text-white"
        : "text-gray-600"
    }`}
  >
    Monthly
  </button>

  <button
    onClick={() => setPeriod("weekly")}
    className={`px-3 py-1 rounded-md transition ${
      period === "weekly"
        ? "bg-blue-600 text-white"
        : "text-gray-600"
    }`}
  >
    Weekly
  </button>
</div>
                </div>
                <div className="h-64 bg-green-100 rounded-md"></div>
              </>
            )}

          </div>

          {/* Right Panel */}
          <div className="w-80 bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-6">Recent Alert</h3>

            <div className="space-y-6 text-sm">

              <div className="flex gap-3">
                <div className="w-8 h-8 bg-red-100 text-red-600 flex items-center justify-center rounded-full">
                  !
                </div>
                <div>
                  <p className="font-medium">Inappropriate Content</p>
                  <p className="text-gray-500">
                    Job posting #3821 flagged for review.
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    12 MINUTES AGO
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 bg-green-100 text-green-600 flex items-center justify-center rounded-full">
                  ✓
                </div>
                <div>
                  <p className="font-medium">New Subscription</p>
                  <p className="text-gray-500">
                    “GrowthTech Inc” upgraded to Enterprise.
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    2 HOURS AGO
                  </p>
                </div>
              </div>

            </div>

            <button className="text-blue-600 text-sm mt-6">
              View All
            </button>
          </div>

        </div>

      </div>
    </AdminLayout>
  );
}
