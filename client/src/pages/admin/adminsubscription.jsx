import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../components/adminlayout";
import { Check, X } from "lucide-react";

export default function Subscription() {
    const navigate = useNavigate();
  const [features, setFeatures] = useState([
    {
      name: "Advanced Filtering",
      basic: true,
      pro: true,
      usage: 85,
      enabled: true,
    },
    {
      name: "Boosted Jobs",
      basic: false,
      pro: true,
      usage: 65,
      enabled: false,
    },
    {
      name: "Priority Support",
      basic: false,
      pro: true,
      usage: 72,
      enabled: true,
    },
    {
      name: "API Integration",
      basic: false,
      pro: true,
      usage: 40,
      enabled: false,
    },
  ]);

  const toggleFeature = (index) => {
    setFeatures((prev) =>
      prev.map((feature, i) =>
        i === index
          ? { ...feature, enabled: !feature.enabled }
          : feature
      )
    );
  };

  return (
     <AdminLayout>
          <h1 className="text-2xl font-semibold mb-6">
            Dashboard
          </h1>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        <h1 className="text-2xl font-semibold mb-2">
          Subscription & Feature Control
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          Manage business logic, pricing tiers, and global premium feature accessibility.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          <StatCard
            title="Active Subscribers"
            value="1,249"
            growth="+12% this month"
          />
          <StatCard
            title="Monthly Revenue"
            value="$42,500"
            growth="+5% vs last month"
          />
          <StatCard
            title="Feature Adoption"
            value="85%"
            growth="+3% utilization"
          />
        </div>

        {/* Subscription Plans */}
        <h2 className="font-semibold mb-4">Subscription Plans</h2>

        <div className="grid grid-cols-3 gap-6 mb-12">
          <PlanCard
            title="Basic / Free"
            price="Au$ 0"
            features={[
              "Essential Job Posting",
              "Community Support",
              "Advanced Filtering (included)",
            ]}
          />

          <PlanCard
            title="Monthly"
            price="Au$ 199"
            highlight
            features={[
              "Advanced Filtering",
              "5 Boosted Jobs / month",
              "Priority Email Support",
            ]}
          />

          <PlanCard
            title="Yearly"
            price="Au$ 1,499"
            features={[
              "Dedicated Account Manager",
              "Unlimited Boosts",
              "Full API Integration",
            ]}
          />
        </div>

        {/* Premium Feature Table */}
        <h2 className="font-semibold mb-4">
          Premium Feature Management
        </h2>

        <div className="bg-white rounded-lg border overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-5 bg-green-50 px-6 py-3 text-sm font-medium">
            <div>Feature Name</div>
            <div>Global Status</div>
            <div>Basic</div>
            <div>Pro</div>
            <div>Usage</div>
          </div>

          {/* Rows */}
          {features.map((feature, index) => (
            <div
              key={index}
              className="grid grid-cols-5 items-center px-6 py-4 border-t text-sm"
            >
              <div className="font-medium">{feature.name}</div>

              {/* Toggle */}
              <div>
                <div
                  onClick={() => toggleFeature(index)}
                  className={`w-10 h-5 rounded-full relative cursor-pointer transition ${
                    feature.enabled
                      ? "bg-blue-500"
                      : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full absolute top-0.5 shadow transition-all ${
                      feature.enabled
                        ? "left-5"
                        : "left-1"
                    }`}
                  ></div>
                </div>
              </div>

              {/* Basic */}
              <div>
                {feature.basic ? (
                  <Check size={16} className="text-green-500" />
                ) : (
                  <X size={16} className="text-red-500" />
                )}
              </div>

              {/* Pro */}
              <div>
                {feature.pro ? (
                  <Check size={16} className="text-green-500" />
                ) : (
                  <X size={16} className="text-red-500" />
                )}
              </div>

              {/* Usage */}
              <div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${feature.usage}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {feature.usage}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </AdminLayout>
  );
}

/* ---------- Components ---------- */

function StatCard({ title, value, growth }) {
  return (
    <div className="bg-white p-6 rounded-lg border">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-xl font-semibold mt-1">{value}</h3>
      <p className="text-xs text-green-600 mt-2">{growth}</p>
    </div>
  );
}

function PlanCard({ title, price, features, highlight }) {
  return (
    <div
      className={`bg-white p-6 rounded-lg border text-center ${
        highlight ? "border-blue-600 shadow-lg" : ""
      }`}
    >
      {highlight && (
        <div className="text-xs text-blue-600 font-medium mb-2">
          Most Popular
        </div>
      )}

      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-lg font-bold mb-4">{price}</p>

      <ul className="text-sm text-gray-600 space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <button
        className={`w-full py-2 rounded-md text-sm ${
          highlight
            ? "bg-black text-white"
            : "border border-blue-500 text-blue-500"
        }`}
      >
        Edit
      </button>
    </div>
  );
}