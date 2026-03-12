import { useState } from "react";
import { Bell, User, Lock } from "lucide-react";
import AdminLayout from "../../components/adminlayout";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function AdminProfile() {
  const navigate = useNavigate();

  const [systemAlerts, setSystemAlerts] = useState(true);
  const [userReports, setUserReports] = useState(true);
  const [maintenance, setMaintenance] = useState(false);
  const [twoFactor, setTwoFactor] = useState(true);

  const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  timezone: ""
});

  const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSave = async () => {

  try {

    await axios.post(
      "http://localhost:5000/api/admin/save-profile",
      form
    );

    alert("Profile saved successfully");

  } catch (error) {

    console.log(error);
    alert("Saving failed");

  }

};

  return (
    <AdminLayout showLogout={false}>
      <h1 className="text-2xl font-semibold mb-6">
        Admin Settings
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-sm">

        {/* Main Content */}
        <main className="flex-1 p-10 overflow-y-auto">

          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="text-blue-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">System Admin</h2>
                <p className="text-sm text-gray-500">
                  Last login: 2 hours ago
                </p>
              </div>
            </div>
            <button 
            onClick={() => navigate("/adminlogin")}
            className="text-blue-600 text-sm">Log out</button>
          </div>

          <div className="grid grid-cols-3 gap-6">

            {/* LEFT SECTION */}
            <div className="col-span-2 space-y-6">

              {/* Personal Information */}
              <div className="bg-white p-6 rounded-lg border border-gray-300">
                <div className="flex items-center gap-2 mb-4">
                  <User size={18} />
                  <h3 className="font-semibold">Personal Information</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                  />
                  <Input
                   label="Email"
                   name="email"
                   value={form.email}
                   onChange={handleChange}
                  />
                  <Input
                    label="Phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                   />
                  <Input
                    label="Timezone"
                    name="timezone"
                    value={form.timezone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Security Settings */}
              <div className="bg-white p-6 rounded-lg border border-gray-300">
                <div className="flex items-center gap-2 mb-4">
                  <Lock size={18} />
                  <h3 className="font-semibold">Security Settings</h3>
                </div>

                <div className="flex justify-between items-center border border-gray-300 rounded-md p-4 mb-4">
                  <div>
                    <p className="font-medium">Update Password</p>
                    <p className="text-xs text-gray-500">
                      Last login: 2 hours ago
                    </p>
                  </div>

                  <button className="border border-gray-300 px-4 py-1 rounded text-sm">
                    Change
                  </button>
                </div>

                <div className="flex justify-between items-center border border-gray-300 rounded-md p-4">
                  <div>
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-xs text-gray-500">
                      Added security for your account
                    </p>
                  </div>

                  <Toggle enabled={twoFactor} setEnabled={setTwoFactor} />
                </div>

                {/* Active Sessions */}
                <div className="mt-6">
                  <p className="text-xs text-gray-500 mb-2">
                    ACTIVE SESSIONS
                  </p>

                  <div className="border border-gray-300 rounded-md p-4 flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium">
                        Chrome on macOS
                      </p>
                      <p className="text-xs text-gray-500">
                        Brisbane, AUS - 192.168.1
                      </p>
                    </div>

                    <span className="text-green-600 text-xs font-medium">
                      Current
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT SECTION - NOTIFICATION */}
            <div className="bg-white p-6 rounded-lg border border-gray-300">

              <div className="flex items-center gap-2 mb-6">
                <Bell size={18} />
                <h3 className="font-semibold">Notification</h3>
              </div>

              <NotificationItem
                title="System Alerts"
                desc="Critical server updates"
                enabled={systemAlerts}
                setEnabled={setSystemAlerts}
              />

              <NotificationItem
                title="User Reports"
                desc="Flagged Job or Candidates"
                enabled={userReports}
                setEnabled={setUserReports}
              />

              <NotificationItem
                title="Maintenance Updates"
                desc="Scheduled platform downtime"
                enabled={maintenance}
                setEnabled={setMaintenance}
              />

              {/* Notification Channel */}
              <div className="mt-6">
                <p className="text-sm font-medium mb-3">
                  Notification Channel
                </p>

                <div className="space-y-2 text-sm">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked />
                    In-app Push Notification
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" defaultChecked />
                    Email Digest (Weekly)
                  </label>

                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    WhatsApp Notifications
                  </label>
                </div>
              </div>

            </div>
            
          </div>
          <div className="mt-6">
            <button 
              onClick={handleSave}
              className="bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700 transition">
                Save
            </button>
          </div>

        </main>

      </div>
    </AdminLayout>
  );
}

/* INPUT COMPONENT */

function Input({ label, name, value, onChange }) {
  return (
    <div>
      <label className="text-sm text-gray-600">{label}</label>

      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

/* TOGGLE SWITCH */

function Toggle({ enabled, setEnabled }) {
  return (
    <div
      onClick={() => setEnabled(!enabled)}
      className={`w-10 h-5 rounded-full relative cursor-pointer transition ${
        enabled ? "bg-blue-600" : "bg-gray-300"
      }`}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition ${
          enabled ? "left-5" : "left-1"
        }`}
      ></div>
    </div>
  );
}

/* NOTIFICATION ITEM */

function NotificationItem({ title, desc, enabled, setEnabled }) {
  return (
    <div className="flex justify-between items-center mb-4">
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-gray-500">{desc}</p>
      </div>

      <Toggle enabled={enabled} setEnabled={setEnabled} />
    </div>
  );
}