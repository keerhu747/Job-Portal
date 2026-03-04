import { useNavigate, useLocation } from "react-router-dom";

export default function AdminLayout({ children , showLogout = true }) {
  const navigate = useNavigate();
  const location = useLocation();

  const navItem = (path, label) => (
    <div
      onClick={() => navigate(path)}
      className={`px-4 py-2 rounded-md cursor-pointer ${
        location.pathname === path
          ? "bg-blue-50 text-blue-600"
          : "hover:bg-gray-100"
      }`}
    >
      {label}
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 flex flex-col justify-between">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-md font-bold">
              TP
            </div>
            <div>
              <h2 className="font-semibold">Talentpoint</h2>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-3 text-sm">
            {navItem("/admindashboard", "Dashboard")}
            {navItem("/adminjob", "Job Moderation")}
            {navItem("/adminusermgmt", "User Management")}
            {navItem("/adminsubscription", "Subscription")}
          </nav>
        </div>

        {/* Bottom */}
        {showLogout && (
        
        <div className="text-sm text-gray-600">
          <p 
           onClick={() => navigate("/adminprofile")}
          className="font-medium">Emma !</p>
          <button 
           onClick={() => navigate("/adminprofile")}
          className="text-blue-600 text-xs">
            Log out
          </button>
        </div>
        )}
      </aside>
        
      {/* Page Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}