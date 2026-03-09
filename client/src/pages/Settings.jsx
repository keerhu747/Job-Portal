import { useState } from "react";
import {
  Bell,
  MessageCircle,
  ShieldCheck,
  Settings,
  Sparkles
} from "lucide-react";

export default function settings() {

  const [twoFactor, setTwoFactor] = useState(true);
  const [emailAlert, setEmailAlert] = useState(true);
  const [publicProfile, setPublicProfile] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HEADER */}
      <div className="bg-white px-8 py-4 flex justify-between items-center border-b">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-700 text-white flex items-center justify-center rounded-lg font-bold">
            TP
          </div>

          <div>
            <h2 className="font-semibold">Hello, Alex !</h2>
            <p className="text-sm text-gray-500">📍 Brisbane</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Bell size={18} />
          <MessageCircle size={18} />
          <img
            src="https://i.pravatar.cc/40"
            className="w-9 h-9 rounded-full"
          />
        </div>
      </div>

      {/* NAVBAR */}
      <div className="bg-blue-600 text-white px-8 py-3 flex gap-10 text-sm">
        <span>Job search</span>
        <span>My Application</span>
        <span>Top companies</span>
        <span>Upgrade Premium</span>
      </div>

      {/* MAIN WHITE BOX */}
      <div className="ml-20 mt-10 bg-white p-10 rounded shadow-sm w-[900px]">

        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Account Setting
          </h2>
          <Settings size={18} className="text-blue-600 cursor-pointer" />
        </div>

        <div className="grid grid-cols-2 gap-8">

          {/* SECURITY CARD */}
          <div className="border rounded-lg p-6">

            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck size={18} className="text-blue-600" />
              <h3 className="font-semibold text-sm text-gray-700">
                Security & Password
              </h3>
            </div>

            <label className="text-sm font-semibold text-gray-500">
              Current Password
            </label>
            <input
              value="Sarah Williams@1234"
              className="w-full border rounded px-3 py-2 text-sm mt-1 mb-3"
            />

            <label className="text-sm font-semibold text-gray-500">
              New Password
            </label>
            <input
              placeholder="min 8 character"
              className="w-full border rounded px-3 py-2 text-sm mt-1 mb-3"
            />

            <label className="text-sm font-semibold text-gray-500">
              Confirm Password
            </label>
            <input
              placeholder="Repeat new password"
              className="w-full border rounded px-3 py-2 text-sm mt-1 mb-4"
            />

            {/* TWO FACTOR AUTH */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-gray-400">
                  Two – Fact Auth
                </p>
                <p className="text-xs text-gray-400">
                  Secure your account with sms code
                </p>
              </div>

              <div
                onClick={() => setTwoFactor(!twoFactor)}
                className={`w-10 h-5 rounded-full relative cursor-pointer transition ${
                  twoFactor ? "bg-blue-500" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition ${
                    twoFactor ? "right-1" : "left-1"
                  }`}
                ></div>
              </div>
            </div>

            <div className="bg-yellow-100 text-yellow-700 text-xs p-3 rounded">
              <strong>Last Login :</strong> Yesterday from Brisbane , Au.
              <br />
              <span className="underline cursor-pointer">
                Review Activity
              </span>
            </div>
          </div>

          {/* PREFERENCE CARD */}
          <div className="border rounded-lg p-6">

            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={18} className="text-blue-600" />
              <h3 className="font-semibold text-sm text-gray-700">
                Preference & Privacy
              </h3>
            </div>

            <label className="text-sm font-semibold text-gray-500">
              Language
            </label>

            <select className="w-full border rounded px-3 py-2 text-sm mt-1 mb-4 text-gray-500">
              <option>English (Australia)</option>
            </select>

            {/* DARK MODE */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-black-500">
                Dark mode
              </span>

              <div className="w-10 h-5 bg-gray-300 rounded-full relative">
                <div className="w-4 h-4 bg-white rounded-full absolute left-1 top-0.5"></div>
              </div>
            </div>

            {/* EMAIL ALERT */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-black-500">
                Email Alert
              </span>

              <div
                onClick={() => setEmailAlert(!emailAlert)}
                className={`w-10 h-5 rounded-full relative cursor-pointer transition ${
                  emailAlert ? "bg-blue-500" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition ${
                    emailAlert ? "right-1" : "left-1"
                  }`}
                ></div>
              </div>
            </div>

            {/* PUBLIC PROFILE */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-black-500">
                Public Profile
              </span>

              <div
                onClick={() => setPublicProfile(!publicProfile)}
                className={`w-10 h-5 rounded-full relative cursor-pointer transition ${
                  publicProfile ? "bg-blue-500" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition ${
                    publicProfile ? "right-1" : "left-1"
                  }`}
                ></div>
              </div>
            </div>

            <p className="text-red-500 text-sm cursor-pointer">
              ✖ Deactivate Account
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}