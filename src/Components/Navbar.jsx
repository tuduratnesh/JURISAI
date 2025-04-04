import React, { useState } from "react";
import profile from "./Profile";

function Navbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const userName = "Ratnesh";

  return (
    <div className="w-full bg-[#334EAC] flex items-center justify-between relative px-5 py-3 ">
        <div className="text-white text-4xl font-semibold">
        JURIS AI
      </div>
      <nav className="bg-[#334EAC] text-white px-4 py-4 ">
      <ul className="flex justify-center space-x-10 pr-8 text-2xl ">
        <li>
          <a href="/" className="hover:text-yellow-400">Dashboard</a>
        </li>
        <li>
          <a href="/documents" className="hover:text-yellow-400">Documents</a>
        </li>
        <li>
          <a href="/analytics" className="hover:text-yellow-400">Analytics</a>
        </li>
        <li>
        <button
          onClick={() => setIsProfileOpen(!isProfileOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

        </button>
        {isProfileOpen && (
          <div className="absolute right-0 mt-4 w-70 h-80 bg-white border border-gray-200 rounded-lg shadow-lg p-2 z-50">
            <div className="bg-blue-400 text-black text-3xl font-semibold px-4 py-2 rounded-t-lg text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-60 h-40">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

              {userName}
            </div>
            <button
              className="flex justify-center items-center mt-4 text-3xl font-semibold w-full px-4 py-2 rounded text-red-600 hover:bg-gray-100"
            >
              <a href="/signup" className="text-blue-600 hover:underline">Logout</a>
            </button>
          </div>
        )}
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar