
import { Bell, MessageCircle, Search, Bookmark } from "lucide-react";

export default function TopCompanies() {
  // const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white-100">

      {/* ===== HEADER ===== */}
      <div className="bg-white px-8 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded font-bold">
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
          <img src="https://i.pravatar.cc/40" className="w-9 h-9 rounded-full" />
        </div>
      </div>

      {/* ===== NAVBAR ===== */}
      <div className="bg-blue-600 text-white px-8 py-3 flex gap-10 text-sm">
        <span>Job search</span>
        <span>My Application</span>
        <span>Top companies</span>
        <span>Upgrade Premium</span>
      </div>

      {/* ===== CENTER WHITE AREA ===== */}
      <div className="max-w-[1530px] mx-auto px-10 py-27 bg-white shadow-sm">

        <h2 className="font-semibold text-lg text-black mb-1">
          Featured Companies
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Connect with top-rated and discover your next career move with verified partners.
        </p>

        {/* SEARCH + FILTERS */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center bg-blue-50 px-3 py-2 rounded w-96 border border-blue-100">
            <Search size={16} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search by Company name or keyword."
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>

          <div className="flex gap-3">
            <select className="bg-blue-50 px-3 py-2 rounded text-sm border border-blue-100 outline-none">
              <option>Industry</option>
            </select>
            <select className="bg-blue-50 px-3 py-2 rounded text-sm border border-blue-100 outline-none">
              <option>Company size</option>
            </select>
          </div>
        </div>

        {/* COMPANY CARDS */}
        <div className="grid grid-cols-4 gap-6">
          <CompanyCard
            badge="Active Openings"
            img="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
            name="Global Logistics Hub"
            category="Supply Chain & Transport"
            desc="Global Logistics Hub provides end-to-end logistics and supply chain services."
          />

          <CompanyCard
            img="https://images.pexels.com/photos/37347/office-skyline-buildings-city.jpg?auto=compress&cs=tinysrgb&w=300"
            name="Rio Tinto"
            category="Metals and minerals"
            desc="Specializing in metals and minerals such as iron ore, aluminum, and copper."
          />

          <CompanyCard
            img="https://images.pexels.com/photos/256219/pexels-photo-256219.jpeg"
            name="Woolworths Group"
            category="General merchandise"
            desc="Supermarket and retail company operating grocery and general merchandise businesses."
          />

          <CompanyCard
            img="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg"
            name="Telstra"
            category="Telecommunications"
            desc="Telecommunications company providing mobile, broadband, and enterprise network."
          />
        </div>
      </div>
    </div>
  );
}

/* ===== COMPANY CARD ===== */

function CompanyCard({ img, badge, name, category, desc }) {
  return (
    <div className="relative border rounded bg-white p-4 text-sm flex flex-col">

      {/* BADGE – TOP RIGHT OF CARD */}
      {badge && (
        <span className="absolute top-3 right-3 bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded">
          {badge}
        </span>
      )}

      {/* SQUARE IMAGE */}
      <img
        src={img}
        className="w-20 h-20 object-cover rounded mb-3"
      />

      <h3 className="font-medium mb-1">{name}</h3>
      <p className="text-xs text-blue-600 mb-2">{category}</p>

      <p className="text-xs text-gray-500 mb-4">
        {desc}
      </p>

      {/* BUTTON + ICON (SAME POSITION FOR ALL) */}
      <div className="flex items-center justify-between mt-auto">
        <button className="bg-blue-600 text-white px-3 py-1.5 rounded text-xs">
          View Profile
        </button>
        <Bookmark size={18} className="text-black cursor-pointer" />
      </div>
    </div>
  );
}