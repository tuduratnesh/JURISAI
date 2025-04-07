import React, { useState, useEffect } from "react";

function Navbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState({ username: "", email: "" });

  useEffect(() => {
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");
    setUser({ username, email });
  }, []);

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      localStorage.removeItem("token"); 
      navigate("/login");
    }
  };

  return (
    <div className="w-full bg-[#334EAC] relative px-5 py-3">
      <div className="flex items-center justify-between">
       
        <div className="text-white text-3xl font-semibold">JURIS AI</div>

        
        <button
          className="text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        
        <ul className="hidden md:flex space-x-10 text-white text-xl pr-4 items-center">
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
            <button onClick={() => setIsProfileOpen(!isProfileOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0Z" />
              </svg>
            </button>
          </li>
        </ul>
      </div>
      {isMenuOpen && (
        <ul className="flex flex-col space-y-4 text-white mt-4 md:hidden text-xl">
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
            <button onClick={() => setIsProfileOpen(!isProfileOpen)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" fill="none">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM4.5 20.1a7.5 7.5 0 0115 0A17.933 17.933 0 0112 21.75c-2.7 0-5.2-.6-7.5-1.65Z" />
              </svg>
            </button>
          </li>
        </ul>
      )}
      {isProfileOpen && (
        <div className="absolute right-5 mt-4 w-72 bg-white border border-gray-200 rounded-lg shadow-lg p-2 z-50">
          <div className="bg-blue-400 text-black text-2xl font-semibold px-4 py-2 rounded-t-lg text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 mx-auto mb-2" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" fill="none">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM4.5 20.1a7.5 7.5 0 0115 0A17.933 17.933 0 0112 21.75c-2.7 0-5.2-.6-7.5-1.65Z" />
            </svg>
            {user.username}
          </div>
          <button className="w-full text-center text-blue-600 font-semibold py-2 hover:bg-gray-100">
            <a href="/Login">Logout</a>
          </button>
        </div>
      )}
    </div>
  );
}
export default Navbar;
