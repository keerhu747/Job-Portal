import { useNavigate } from "react-router-dom";
import {
  Bell,
  MessageCircle,
  MapPin,
  Mail,
  Download,
  Pencil,
  User,
  Briefcase,
  GraduationCap,
  UserPlus
} from "lucide-react";

export default function ProfilePage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-blue-50">

      {/* HEADER */}
      <div className="bg-white px-10 py-6 flex justify-between items-center border-b">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-700 text-white flex items-center justify-center rounded-lg font-bold">
            TP
          </div>

          <div>
            <h2 className="font-semibold">Hello, Alex !</h2>
            <p className="text-sm text-gray-500 flex items-center gap-1">
              <MapPin size={14}/> Brisbane
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Bell size={18}/>
          <MessageCircle size={18}/>
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

      {/* MAIN CONTENT */}
      <div className="px-24 py-10 flex gap-10">

        {/* LEFT SIDE */}
        <div className="w-[300px]">

          {/* PROFILE CARD */}
          <div className="bg-white p-6 rounded shadow-sm text-center mb-6">

            <img
              src="https://i.pravatar.cc/120"
              className="w-24 h-24 rounded-full mx-auto mb-3"
            />

            <h3 className="font-semibold text-lg">Alex</h3>

            <p className="text-blue-600 text-sm mb-2">
              Personal assistant
            </p>

            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
              <MapPin size={14}/>
              Brisbane, Australia
            </div>

            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-4">
              <Mail size={14}/>
              Alex12@gmail.com
            </div>

            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded text-sm mx-auto">
              <Download size={14}/>
              Resume
            </button>
          </div>

          {/* EDUCATION */}
          <div className="mb-6">
            <div className="flex items-center gap-2 text-blue-700 font-semibold mb-2">
              <GraduationCap size={22}/>
              Education
            </div>

            <p className="text-sm text-gray-600">
              Higher Secondary
            </p>

            <p className="text-sm text-blue-600">
              Sandford University
            </p>
          </div>

          {/* SKILLS */}
          <div>
            <div className="flex items-center gap-2 font-semibold mb-2">
              <UserPlus size={22} className="text-blue-600"/>
              Skills
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-200 text-xs px-3 py-1 rounded">
                Interpersonal skill
              </span>

              <span className="bg-blue-200 text-xs px-3 py-1 rounded">
                Quick Learning
              </span>

              <span className="bg-blue-200 text-xs px-3 py-1 rounded">
                Adaptability
              </span>

              <span className="bg-blue-200 text-xs px-3 py-1 rounded">
                Communication
              </span>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1">

          <div className="bg-white p-6 rounded shadow-sm">

            {/* PERSONAL SUMMARY */}
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <User size={22} className="text-blue-600"/>
                <h3 className="font-semibold">Personal Summary</h3>
              </div>

              <Pencil size={20} className="text-blue-600 cursor-pointer"/>
            </div>

            <p className="text-gray-600 text-sm mb-6">
              Dedicated Personal Assistant with several years of experience
              supporting daily tasks and office operations. Skilled in managing
              schedules, handling communication, and assisting with
              administrative work.
            </p>

            <hr className="mb-6"/>

            {/* EXPERIENCE */}
            <div className="flex items-center gap-2 mb-4">
              <Briefcase size={22} className="text-blue-600"/>
              <h3 className="font-semibold">Experience</h3>
            </div>

            {/* TIMELINE */}
            <div className="relative border-l-2 border-gray-300 pl-6">

              {/* JOB 1 */}
              <div className="mb-10 relative">

                {/* DOT */}
                <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[31px] top-2"></div>


                <div className="flex justify-between">
                  <h4 className="font-semibold text-sm">
                    Senior Assistant
                  </h4>

                  <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                    2020 - PRESENT
                  </span>
                </div>

                <p className="text-blue-600 text-sm">
                  ABC Services Group
                </p>

                <p className="text-gray-600 text-sm mt-1">
                  Handled daily work responsibilities efficiently and followed
                  assigned tasks. Assisted with maintenance, repair, or office
                  support work as required.
                </p>
              </div>

              {/* JOB 2 */}
              <div className="relative">

                {/* DOT */}
                <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[31px] top-2"></div>


                <div className="flex justify-between">
                  <h4 className="font-semibold text-sm">
                    Assistant / Support Staff
                  </h4>

                  <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                    2017 - 2020
                  </span>
                </div>

                <p className="text-blue-600 text-sm">
                  ABC Services Group
                </p>

                <p className="text-gray-600 text-sm mt-1">
                  Supported senior staff with day-to-day duties and general work activities.
                </p>
              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex justify-end gap-4 mt-8">
              <button 
              onClick={() => navigate("/home")}
              className="border px-5 py-2 rounded text-sm">
                Cancel
              </button>

              <button 
              onClick={() => navigate("/profile3")}
              className="bg-blue-600 text-white px-5 py-2 rounded text-sm">
                Save Changes
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}