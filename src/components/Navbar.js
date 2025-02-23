// import React from 'react'
// import { Link } from "react-router-dom";
// import { FaHome, FaSearch } from "react-icons/fa";

// const Navbar = () => {
//   return (
//     <div >
//       <nav className="bg-white shadow h-14 flex items-center en px-6">
//         {/* <div className="text-xl font-bold">
//           <Link to="/dashboard">Project Manager</Link>
//         </div> */}
//         <div className="flex space-x-4">
//           <Link to="/dashboard" className="text-gray-700 hover:text-blue-500">
//             Dashboard
//           </Link>
//           <Link to="/projects" className="text-gray-700 hover:text-blue-500">
//             Projects
//           </Link>
//           <Link to="/tasks" className="text-gray-700 hover:text-blue-500">
//             Tasks
//           </Link>
//           <Link to="/teams" className="text-gray-700 hover:text-blue-500">
//             Teams
//           </Link>
//           <Link to="/login" className="text-gray-700 hover:text-blue-500">
//             Login
//           </Link>
//         </div>
//       </nav>
//     </div>
//   );
// }

import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaSearch,
  FaBell,
  FaQuestionCircle,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = ({ isAuthenticated, handleLogout }) => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const profileRef = useRef(null);
  const notificationRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
      }
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow h-14 flex items-center justify-between px-6 sticky top-0 z-50">
      {/* Left: Home & Mobile Menu */}
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-500 text-xl">
          <FaHome />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-blue-500 text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Center: Navigation Links (Hidden on Mobile) */}
      <div className="hidden md:flex space-x-4">
        {!isAuthenticated ? (
          <>
            <Link to="/features" className="text-gray-700 hover:text-blue-500">
              Features
            </Link>
            <Link to="/faqs" className="text-gray-700 hover:text-blue-500">
              FAQs
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-500">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-500">
              Contact Us
            </Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" className="text-gray-700 hover:text-blue-500">
              Dashboard
            </Link>
            <Link to="/projects" className="text-gray-700 hover:text-blue-500">
              Projects
            </Link>
            <Link to="/tasks" className="text-gray-700 hover:text-blue-500">
              Tasks
            </Link>
            <Link to="/teams" className="text-gray-700 hover:text-blue-500">
              Teams
            </Link>
          </>
        )}
      </div>

      {/* Right: Search, Notifications, Profile */}
      <div className="flex items-center space-x-6">
        {/* Search Bar (Hidden on Mobile) */}
        <div className="relative w-64 hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
            <FaSearch />
          </button>
        </div>

        {isAuthenticated ? (
          <>
            {/* Notifications */}
            <div className="relative" ref={notificationRef}>
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="text-gray-700 hover:text-blue-500"
              >
                <FaBell size={20} />
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
                  <p className="text-center text-gray-500 p-2">
                    No Notifications Found
                  </p>
                </div>
              )}
            </div>

            {/* Help (FAQs) */}
            <button
              onClick={() => navigate("/faqs")}
              className="text-gray-700 hover:text-blue-500"
            >
              <FaQuestionCircle size={20} />
            </button>

            {/* Profile Dropdown */}
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                className="text-gray-700 hover:text-blue-500"
              >
                <FaUser size={22} />
              </button>

              {showProfileDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <Link to="/login" className="text-gray-700 hover:text-blue-500">
              Login
            </Link>
            <span className="text-gray-500">|</span>
            <Link to="/signup" className="text-gray-700 hover:text-blue-500">
              Sign Up
            </Link>
          </>
        )}
      </div>

      {/* Mobile Menu (Visible when menuOpen is true) */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute top-14 left-0 w-full bg-white shadow-md p-4 flex flex-col md:hidden"
        >
          {!isAuthenticated ? (
            <>
              <Link
                to="/features"
                className="text-gray-700 hover:text-blue-500 py-2"
                onClick={() => setMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                to="/faqs"
                className="text-gray-700 hover:text-blue-500 py-2"
                onClick={() => setMenuOpen(false)}
              >
                FAQs
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-500 py-2"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-500 py-2"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/dashboard"
                className="text-gray-700 hover:text-blue-500 py-2"
                onClick={() => setMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                to="/projects"
                className="text-gray-700 hover:text-blue-500 py-2"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
