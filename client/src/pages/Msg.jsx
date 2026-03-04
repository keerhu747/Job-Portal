import { Bell, MessageCircle, Paperclip, Send } from "lucide-react";

export default function Messages() {
  return (
    <div className="min-h-screen bg-gray-200">

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
          <img
            src="https://i.pravatar.cc/40?img=32"
            className="w-9 h-9 rounded-full"
          />
        </div>
      </div>

      {/* ===== NAVBAR ===== */}
      <div className="bg-blue-600 text-white px-8 py-3 flex gap-10 text-sm">
        <span>Job search</span>
        <span>My Application</span>
        <span>Top companies</span>
        <span>Upgrade Premium</span>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="max-w-8xl mx-auto mt-0 bg-white rounded shadow-sm flex h-[610px]">
        {/* ===== LEFT CHAT LIST ===== */}
        <div className="w-1/3 border-r border-gray-200">

          {/* Search */}
          <div className="p-4">
            <input
              type="text"
              placeholder="Search Employer here"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>

          {/* Chat Items */}
          <div>
            {/* Active Chat */}
            <div className="flex items-center gap-3 px-4 py-3 bg-green-50 border-l-4 border-green-500 cursor-pointer">
              <img
                src="https://i.pravatar.cc/40?img=12"
                className="w-9 h-9 rounded-full"
              />
              <div className="flex-1">
                <p className="font-medium text-sm">CSL Limited HR</p>
                <p className="text-xs text-gray-500 truncate">
                  Hello, your profile has ...
                </p>
              </div>
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            </div>

            {/* Other Chat */}
            <div className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 border-b border-gray-200">
              <img
                src="https://i.pravatar.cc/40?img=45"
                className="w-9 h-9 rounded-full"
              />
              <div>
                <p className="font-medium text-sm">Woolworths Group HR</p>
                <p className="text-xs text-gray-500 truncate">
                  Hi, thank you for...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== RIGHT CHAT WINDOW ===== */}
        <div className="flex-1 flex flex-col">

          {/* Chat Header */}
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/40?img=12"
              className="w-9 h-9 rounded-full"
            />
            <div>
              <p className="font-medium text-sm">CSL Limited HR</p>
            </div>
            <span className="ml-auto w-2 h-2 bg-green-500 rounded-full"></span>
          </div>

          {/* Messages */}
          <div className="flex-1 p-6 overflow-y-auto bg-gray-50">

            <div className="flex justify-center mb-6">
              <span className="text-xs bg-gray-200 px-3 py-1 rounded-full">
                TODAY
              </span>
            </div>

            {/* User Message */}
            <div className="flex justify-end mb-4">
              <div className="max-w-md bg-blue-200 text-sm p-4 rounded-lg">
                <p>
                  Hello, I am applying for a security position.
                  <br />
                  I have previous experience and can join immediately.
                  <br />
                  Please advise on the next steps
                </p>
                <p className="text-xs text-right text-gray-500 mt-1">
                  10 : 30 Am
                </p>
              </div>
            </div>

            {/* HR Message */}
            <div className="flex justify-start">
              <div className="max-w-md bg-green-200 text-sm p-4 rounded-lg">
                <p>Our team will get back to you soon.</p>
                <p className="text-xs text-gray-500 mt-1">11 : 30 Am</p>
              </div>
            </div>
          </div>

          {/* Message Input */}
          <div className="border-t px-4 py-3 flex items-center gap-3">
            <Paperclip size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Type Your Message...."
              className="flex-1 border rounded px-3 py-2 text-sm"
            />
            <button className="bg-blue-600 p-2 rounded text-white">
              <Send size={16} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}