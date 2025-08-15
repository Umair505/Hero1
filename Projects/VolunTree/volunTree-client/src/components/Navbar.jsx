import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router";
import logo from "../assets/logo.png";
import toast from "react-hot-toast";
import userLogo from "../assets/userImg.png";
import { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Tooltip } from 'react-tooltip'
const Navbar = () => {
  const {user,logout} = use(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);
   const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Logged out successfully");
      })
      .catch((error) => {
        toast.error(error.message || "Logout failed");
      });
  };
  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinkStyle = ({ isActive }) =>
    `relative px-3 py-2 text-sm font-medium transition-colors group ${
      isActive ? "text-[rgb(5,127,104)]" : "text-gray-700 hover:text-[rgb(5,127,104)]"
    }`;

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="mx-auto max-w-screen-xl  px-4 sm:px-6 lg:px-0">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-1 transition-opacity hover:opacity-90 ${
                  isActive ? "text-[rgb(5,127,104)]" : "text-gray-900"
                }`
              }
              aria-label="VolunTree Home"
            >
              <img src={logo} alt="VolunTree Logo" className="w-[35px] lg:w-[40px]" />
              <span className="text-2xl font-bold hidden sm:block tracking-tight">
                VolunTree
              </span>
             
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 relative">
            <div className="flex space-x-1 relative">
              <div className="nav-container relative">
                <div className="container flex space-x-1">
                  <NavLink to="/" className={navLinkStyle}>
                    {({ isActive }) => (
                      <>
                        <span className="relative z-10">Home</span>
                        {isActive && (
                          <div className="absolute inset-0 bg-[rgba(5,127,104,0.1)] rounded-md"></div>
                        )}
                      </>
                    )}
                  </NavLink>
                  <NavLink to="/volunteer-post" className={navLinkStyle}>
                    {({ isActive }) => (
                      <>
                        <span className="relative z-10">Volunteer Need Post</span>
                        {isActive && (
                          <div className="absolute inset-0 bg-[rgba(5,127,104,0.1)] rounded-md"></div>
                        )}
                      </>
                    )}
                  </NavLink>
                  
                  {user && (
                    <NavLink to={`/my-posts/${user?.email}`} className={navLinkStyle}>
                      {({ isActive }) => (
                        <>
                          <span className="relative z-10">My Posts</span>
                          {isActive && (
                            <div className="absolute inset-0 bg-[rgba(5,127,104,0.1)] rounded-md"></div>
                          )}
                        </>
                      )}
                    </NavLink>
                  )}
                  {user && (
                    <NavLink to="/create-post" className={navLinkStyle}>
                      {({ isActive }) => (
                        <>
                          <span className="relative z-10">Create Post</span>
                          {isActive && (
                            <div className="absolute inset-0 bg-[rgba(5,127,104,0.1)] rounded-md"></div>
                          )}
                        </>
                      )}
                    </NavLink>
                  )}
                  {user && (
                    <NavLink to="/volunteer-requests" className={navLinkStyle}>
                      {({ isActive }) => (
                        <>
                          <span className="relative z-10">Volunteer Requests</span>
                          {isActive && (
                            <div className="absolute inset-0 bg-[rgba(5,127,104,0.1)] rounded-md"></div>
                          )}
                        </>
                      )}
                    </NavLink>
                  )}
                  
                </div>

                
              </div>
            </div>
          </nav>

          {/* Auth Buttons / Profile */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="relative" ref={profileRef}>
                <div className="group relative">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="overflow-hidden rounded-full border-2 border-[rgb(5,127,104)] focus:outline-none focus:ring-2 focus:ring-[rgb(5,127,104)]"
                  >
                    <img
                      src={user?.photoURL || userLogo}
                      alt="Profile"
                      className="h-10 w-10 object-cover hover:opacity-90 transition-opacity"
                      onError={(e) => {
                        e.currentTarget.src = userLogo;
                        e.currentTarget.onerror = null;
                      }}
                    />
                  </button>
                </div>

                {/* Dropdown menu */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg py-1 z-50 border border-gray-200">
                    <div className="block px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
                      {user?.displayName || 'Profile'}
                    </div>
                    <NavLink
                      to="/volunteer-requests"
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm hover:bg-[rgb(5,127,104)] hover:text-white ${
                          isActive ? "bg-[rgb(5,127,104)] text-white" : "text-gray-700"
                        }`
                      }
                      onClick={() => setIsProfileOpen(false)}
                    >
                      My Volunteer Requests
                    </NavLink>
                    <NavLink
                      to={`/my-posts/${user.email}`} 
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm hover:bg-[rgb(5,127,104)] hover:text-white ${
                          isActive ? "bg-[rgb(5,127,104)] text-white" : "text-gray-700"
                        }`
                      }
                      onClick={() => setIsProfileOpen(false)}
                    >
                      My Posts
                    </NavLink>
                    <div className="border-t border-gray-200 my-1"></div>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsProfileOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-500 hover:text-white"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `hidden md:inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "border-[rgb(5,127,104)] bg-gray-100 text-[rgb(5,127,104)]"
                        : "border-[rgb(5,127,104)] text-gray-700 hover:bg-gray-50 hover:text-[rgb(5,127,104)]"
                    }`
                  }
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    `hidden md:inline-flex items-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[rgb(4,107,87)] text-white"
                        : "bg-[rgb(5,127,104)] text-white hover:bg-[rgb(4,107,87)]"
                    }`
                  }
                >
                  Join Now
                </NavLink>
              </>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden focus:outline-none focus:ring-2 focus:ring-[rgb(5,127,104)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
{isMenuOpen && (
  <div className="md:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-sm pt-16">
    <div className="container mx-auto px-4">
      {/* Close button */}
      <button 
        onClick={() => setIsMenuOpen(false)}
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Close menu"
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Menu items */}
      <nav className="space-y-1 py-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
              isActive
                ? "text-[rgb(5,127,104)] bg-[rgb(5,127,104,0.1)]"
                : "text-gray-800 hover:bg-gray-100"
            }`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Home
        </NavLink>

        <NavLink
          to="/volunteer-post"
          className={({ isActive }) =>
            `flex items-center px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
              isActive
                ? "text-[rgb(5,127,104)] bg-[rgb(5,127,104,0.1)]"
                : "text-gray-800 hover:bg-gray-100"
            }`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Opportunities
        </NavLink>

        <NavLink
          to="/create-post"
          className={({ isActive }) =>
            `flex items-center px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
              isActive
                ? "text-[rgb(5,127,104)] bg-[rgb(5,127,104,0.1)]"
                : "text-gray-800 hover:bg-gray-100"
            }`
          }
          onClick={() => setIsMenuOpen(false)}
        >
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Create Post
        </NavLink>

        {user && (
          <NavLink
             to={`/my-posts/${user.email}`} 
            className={({ isActive }) =>
              `flex items-center px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                isActive
                  ? "text-[rgb(5,127,104)] bg-[rgb(5,127,104,0.1)]"
                  : "text-gray-800 hover:bg-gray-100"
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            My Posts
          </NavLink>
        )}
      </nav>

      {/* Auth buttons */}
      {!user && (
        <div className="mt-8 border-t border-gray-100 pt-4">
          <div className="space-y-3">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `block w-full px-4 py-3 rounded-lg text-center text-lg font-medium transition-colors ${
                  isActive
                    ? "bg-gray-100 text-[rgb(5,127,104)]"
                    : "bg-gray-50 text-gray-800 hover:bg-gray-100"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `block w-full px-4 py-3 rounded-lg text-center text-lg font-medium text-white transition-colors ${
                  isActive
                    ? "bg-[rgb(4,107,87)]"
                    : "bg-[rgb(5,127,104)] hover:bg-[rgb(4,107,87)]"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Join Now
            </NavLink>
          </div>
        </div>
      )}
    </div>
  </div>
)}
      </div>
    </header>
  );
};

export default Navbar;