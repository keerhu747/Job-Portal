import { Bookmark, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Home4() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HEADER */}
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
        <img src="https://i.pravatar.cc/40" className="w-10 h-10 rounded-full" />
      </div>

      {/* NAVBAR */}
      <div className="bg-blue-600 text-white px-8 py-3 flex justify-between text-sm">
        <div className="flex gap-8">
          <span className="border-b-2 border-white pb-1">Job search</span>
          <span onClick={() => navigate("/myappln")}>My Application</span>
          <span onClick={() => navigate("/topcompany")}>Top companies</span>
          <span onClick={() => navigate("/upgrade")}>Upgrade Premium</span>
        </div>
        <div className="flex gap-4">
          <MessageCircle size={18} />
        </div>
      </div>

      {/* JOB DETAILS ROW */}
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <p className="text-sm text-gray-600">Job Details</p>
        <div className="flex gap-6 text-sm">
          <span className="flex items-center gap-1">
            <Bookmark size={16} /> Save this job
          </span>
          <span className="flex items-center gap-1">
            <MessageCircle size={16} /> Message with HR
          </span>
        </div>
      </div>

      {/* FORM */}
      <div className="max-w-6xl mx-auto px-6 pb-10">

        {/* JOB INFO */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src="https://images.unsplash.com/photo-1581091870627-3c9c1c1f2a90"
            className="w-16 h-16 rounded object-cover"
          />
          <div>
            <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">
              Top match
            </span>
            <h2 className="text-lg font-semibold">Security Guard</h2>
            <p className="text-sm text-gray-500">Metro mall</p>
          </div>
        </div>

        {/* INPUT GRID */}
        <div className="p-0">
          <div className="grid grid-cols-4 gap-4 text-sm">

            <Input label="First Name" required />
            <Input label="Last Name" />
            <Input label="Education" />
            <Input label="Department" />

            <Input label="Email Address" required />
            <Input label="Phone number" required />
            <Input label="Salary expectation Max" />
            <Input label="Minimum" />

            <div className="col-span-2">
              <Label text="Resume / CV" required />
              <div className="border rounded px-3 py-2 text-xs text-gray-500">
                (Jhonsresume.PDF) or
                <span className="text-blue-600 ml-1 cursor-pointer">
                  Upload new resume
                </span>
              </div>
            </div>

            <div className="col-span-2">
              <Input label="Notice Period" />
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-between items-center mt-6">
          <p className="text-xs text-red-500">
            You have a total of 3 free job applications.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => navigate("/home3")}
              className="border px-6 py-2 rounded text-sm"
            >
              Back
            </button>
            <button
              onClick={() => navigate("/home5")}
              className="bg-blue-600 text-white px-6 py-2 rounded text-sm"
            >
              Apply Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

/* COMPONENTS */
function Label({ text, required }) {
  return (
    <label className="block mb-1 font-semibold text-black">
      {text}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
}

function Input({ label, required }) {
  return (
    <div>
      <Label text={label} required={required} />
      <input
        className="w-full border rounded px-3 py-1.5 text-sm"
        placeholder=""
      />
    </div>
  );
}