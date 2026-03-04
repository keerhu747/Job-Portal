import React from "react";

export default function Navbar() {
  return (
    <div className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">

      {/* LEFT SIDE */}
      <div className="flex items-center gap-4">
        <div className="bg-white text-blue-600 font-bold px-3 py-1 rounded">
          TP
        </div>

        <div>
          <p className="font-semibold">Hello, Alex !</p>
          <p className="text-sm opacity-80">Brisbane</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>

    </div>
  );
}
