import { NavLink, Outlet, useLocation } from "react-router-dom";
import { LayoutDashboard, Briefcase, Users, MessageCircle, Settings, Bell, Search } from "lucide-react";

export default function EmpLayout() {
  const location = useLocation();
  const isDashboard = location.pathname.includes("empdashboard");
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition
     ${isActive ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-100"}`;

  return (
    
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-[240px] bg-white border-r border-gray-300 px-6 py-8 flex flex-col">
        <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-md font-bold">
              TP
            </div>
            <div>
            <h2 className="text-xl font-semibold ">TalentPoint</h2>
             <div className="flex text-sm">
              <h6>Employer View</h6>
            </div>
            </div>
           
            </div>
        <nav className="flex flex-col gap-3">
          <NavLink to="empdashboard" className={linkClass}>
            <LayoutDashboard size={18} />
            Dashboard
          </NavLink>

          <NavLink to="empjobs" className={linkClass}>
            <Briefcase size={18} />
            Jobs
          </NavLink>

          <NavLink to="empcandidates" className={linkClass}>
            <Users size={18} />
            Candidates
          </NavLink>

          <NavLink to="empmessage" className={linkClass}>
            <MessageCircle size={18} />
            Message
          </NavLink>

          <NavLink to="empsettings" className={linkClass}>
            <Settings size={18} />
            Settings
          </NavLink>
        </nav>
         <div className="mt-auto pt-6">

      <div className="text-sm text-gray-600">
        <p className="font-medium">Alex Rivera !</p>
        <button className="text-xs">
          Hiring Manager
        </button>
      </div>
    
  </div>
      </aside>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-end bg-white border-b border-gray-300 px-6 py-4">
           {/* Search only on dashboard */}
          {isDashboard && (
            <div className="relative w-96 mr-auto ">
              <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
              <input
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md text-sm"
                placeholder="Search Employer here"
              />
            </div>
          )}
          <div className="flex items-center border-l border-gray-300 pl-4">
            <Bell className="text-gray-500" />
          </div>
        </header>

        
        {/* Page Content */}
        <main className="p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>  
  );
}