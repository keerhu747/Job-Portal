import { useNavigate } from "react-router-dom";
import { Home, Briefcase, Users, MessageSquare, Settings, Send } from "lucide-react";

export default function EmpMessage() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen bg-[#f5f7fb]">

      

      {/* Main Chat Layout */}
      <div className="flex flex-1">

        {/* Chat List Panel */}
        <div className="w-[350px] bg-white border-r flex flex-col">

          {/* Search Bar */}
          <div className="p-4 border-b">
            <input
              type="text"
              placeholder="Search user..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Empty State */}
          <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">
            No conversations yet
          </div>
        </div>

        {/* Chat Window */}
        <div className="flex-1 flex flex-col bg-white">

          {/* Header */}
          <div className="h-[70px] border-b flex items-center px-6">
            <h2 className="text-sm font-medium text-gray-500">
              Select a conversation to start messaging
            </h2>
          </div>

          {/* Messages Area */}
          <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">
            Your messages will appear here
          </div>

          {/* Message Input */}
          <div className="border-t p-4 flex items-center gap-3">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition">
              <Send size={18} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

function MenuItem({ icon, label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer text-sm
      ${
        active
          ? "bg-blue-50 text-blue-600 font-medium"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {icon}
      {label}
    </div>
  );
}