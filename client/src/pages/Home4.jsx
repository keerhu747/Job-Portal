import { useNavigate } from "react-router-dom";

export default function Home4() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HEADER */}
      <div className="bg-white px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded font-bold">
            TP
          </div>
          <div>
            <h2 className="font-semibold">Hello, Alex!</h2>
            <p className="text-sm text-gray-500">📍 Brisbane</p>
          </div>
        </div>

        <img
          src="https://i.pravatar.cc/40"
          className="w-10 h-10 rounded-full"
        />
      </div>

      {/* BLUE NAVBAR */}
      <div className="bg-blue-600 px-8 py-3 text-white flex gap-8 text-sm">
        <span className="border-b-2 border-white pb-1">Job search</span>
        <span>My Application</span>
        <span>Top companies</span>
        <span>Upgrade Premium</span>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto bg-white mt-6 p-8 rounded shadow">

        <p className="text-sm text-gray-500 mb-4">Job Details</p>

        {/* JOB TITLE */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src="https://via.placeholder.com/80"
            className="rounded"
          />
          <div>
            <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded">
              Top match
            </span>
            <h2 className="text-xl font-semibold mt-1">Security Guard</h2>
            <p className="text-sm text-gray-500">Metro Mall</p>
          </div>
        </div>

        {/* FORM */}
        <div className="grid grid-cols-2 gap-5 text-sm">

          <Input label="First Name *" placeholder="Jane" />
          <Input label="Last Name" placeholder="Doe" />

          <Input label="Education" placeholder="Graduate" />
          <Input label="Department" placeholder="Arts" />

          <Input label="Email Address *" placeholder="jhon@gmail.com" />
          <Input label="Phone number *" placeholder="9876543210" />

          <Input label="Salary expectation Max" placeholder="Monthly" />
          <Input label="Minimum" placeholder="Monthly" />

          <div className="col-span-2">
            <label className="block mb-1">Resume / CV *</label>
            <div className="border rounded px-4 py-2 text-gray-500">
              (Jhonsresume.PDF) or
              <span className="text-blue-600 ml-1 cursor-pointer">
                Upload new resume
              </span>
            </div>
          </div>

          <div className="col-span-2">
            <Input
              label="Notice Period"
              placeholder="Immediate Joiners Preferred (Fresher Not Apply)"
            />
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
              className="border px-6 py-2 rounded"
            >
              Back
            </button>

            <button className="bg-blue-600 text-white px-6 py-2 rounded">
              Apply Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

/* INPUT COMPONENT */
function Input({ label, placeholder }) {
  return (
    <div>
      <label className="block mb-1">{label}</label>
      <input
        placeholder={placeholder}
        className="w-full border rounded px-3 py-2"
      />
    </div>
  );
}
