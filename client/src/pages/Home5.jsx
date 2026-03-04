 import {
  Bookmark,
  MessageCircle,
  Check,
  Clock,
  Bell,
} from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ ADD THIS

export default function Home5() {
  const navigate = useNavigate(); // ✅ ADD THIS

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
        <img
          src="https://i.pravatar.cc/40"
          className="w-10 h-10 rounded-full"
        />
      </div>

      {/* ===== NAVBAR ===== */}
      <div className="bg-blue-600 text-white px-8 py-3 flex justify-between text-sm">
        <div className="flex gap-8">
          <span className="border-b-2 border-white pb-1">Job search</span>
          <span
            onClick={() => navigate("/myappln")}
            className="cursor-pointer"
          >
            My Application
          </span>
          <span>Top companies</span>
          <span>Upgrade Premium</span>
        </div>
        <div className="flex gap-4">
          <Bell size={18} />
          <MessageCircle size={18} />
        </div>
      </div>

      {/* ===== JOB DETAILS BAR ===== */}
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between">
        <p className="text-sm text-gray-600">Job Details</p>

        <div className="flex gap-6 text-sm">
          {/* ✅ THIS IS THE ONLY LINE YOU CHANGE */}
          <span
            onClick={() => navigate("/savejobs")}
            className="flex items-center gap-1 cursor-pointer hover:text-blue-600"
          >
            <Bookmark size={16} /> Save this job
          </span>

          <span className="flex items-center gap-1">
            <MessageCircle size={16} /> Message with HR
          </span>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="max-w-4xl mx-auto px-6">

        {/* APPLICATION SUBMITTED CARD */}
        <div className="bg-white border rounded-lg grid grid-cols-3 overflow-hidden mx-auto">

          {/* LEFT WHITE BOX */}
          <div className="col-span-2 flex flex-col items-center text-center p-8 border-r">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
              <Check className="text-green-600" />
            </div>

            <h2 className="font-semibold text-lg mb-1">
              Application Submitted
            </h2>

            <p className="text-sm text-gray-600">
              Your application for <b>Security Guard</b> at{" "}
              <b>Metro Mall</b> has been successfully sent.
            </p>

            <p className="text-sm text-green-600 mt-2">
              You have 2 free job applications remaining.
            </p>

            <div className="flex gap-3 mt-5">
              <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">
                Search More Jobs
              </button>
              <button className="border px-4 py-2 rounded text-sm">
                Cancel
              </button>
            </div>
          </div>

          {/* RIGHT TRACK BOX */}
          <div className="bg-blue-50 p-6 text-sm relative">
            <h3 className="font-semibold mb-4">What Happens Next?</h3>

            {/* TRACK LINE */}
            <div className="absolute left-[26px] top-16 bottom-8 w-px bg-gray-300"></div>

            <div className="space-y-6">

              {/* STEP 1 */}
              <div className="flex gap-3 relative">
                <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs z-10">
                  ✓
                </span>
                <div>
                  <p className="font-medium">Application Sent</p>
                  <p className="text-xs text-green-600">
                    Completed on Oct 24
                  </p>
                </div>
              </div>

              {/* STEP 2 */}
              <div className="flex gap-3 relative">
                <Clock size={33} className="text-blue-600 z-10" />
                <div>
                  <p className="font-medium">
                    Employer Review{" "}
                    <span className="text-blue-600">(In Progress)</span>
                  </p>
                  <p className="text-xs text-gray-500">
                    The employer is currently reviewing applications.
                    This usually takes 3–5 days.
                  </p>
                </div>
              </div>

              {/* STEP 3 */}
              <div className="flex gap-3 relative">
                <Clock size={18} className="text-blue-600 z-10" />
                <div>
                  <p className="font-medium">Interview Request</p>
                  <p className="text-xs text-gray-500">Pending</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ===== SIMILAR JOBS ===== */}
        <div className="mt-8">
          <div className="flex justify-between mb-3">
            <h3 className="font-semibold text-sm">
              Similar Jobs You Might Like
            </h3>
            <span className="text-blue-600 text-sm cursor-pointer">
              View All
            </span>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <Job
              title="Parking Attendant"
              place="Metro Mall · On-site"
              tag="New"
              img="https://images.pexels.com/photos/842548/pexels-photo-842548.jpeg"
            />
            <Job
              title="Cleaning Staff"
              place="Westfield · On-site"
              img="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg"
            />
            <Job
              title="Parking Attendant"
              place="Metro Cafe · On-site"
              img="https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

/* ===== JOB CARD ===== */
function Job({ title, place, img, tag }) {
  return (
    <div className="bg-white border rounded p-3 text-sm relative">
      {tag && (
        <span className="absolute top-2 left-2 bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded">
          {tag}
        </span>
      )}
      <img
        src={img}
        className="h-24 w-full object-cover rounded mb-2"
      />
      <p className="font-medium">{title}</p>
      <p className="text-xs text-gray-500">{place}</p>
    </div>
  );
} 