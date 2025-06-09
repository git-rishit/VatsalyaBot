import React, { useState } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <style>
        {`
          @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient-shift 4s ease infinite;
          }

          @keyframes glow-pulse {
            0%, 100% {
              box-shadow: 0 0 10px rgba(6, 182, 212, 0.3);
            }
            50% {
              box-shadow: 0 0 20px rgba(6, 182, 212, 0.6);
            }
          }

          .animate-glow-pulse {
            animation: glow-pulse 2s ease-in-out infinite;
          }
        `}
      </style>

      <nav className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 backdrop-blur-md border-b border-cyan-400/20 sticky top-0 z-50 shadow-2xl shadow-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Brand */}
            <div className="flex-shrink-0">
              <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent hover:from-cyan-300 hover:via-blue-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 cursor-pointer animate-gradient">
                VatsalyaBot
              </h2>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <ul className="flex items-center space-x-6">
                <li>
                  <a
                    href="/"
                    className="text-slate-200 hover:text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10 hover:shadow-md hover:shadow-cyan-400/20 relative group border border-transparent hover:border-cyan-400/30"
                  >
                    Home
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="/chatbox"
                    className="text-slate-200 hover:text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10 hover:shadow-md hover:shadow-cyan-400/20 relative group border border-transparent hover:border-cyan-400/30"
                  >
                    ChatBox
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-slate-200 hover:text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10 hover:shadow-md hover:shadow-cyan-400/20 relative group border border-transparent hover:border-cyan-400/30"
                  >
                    About
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="/helpandsupport"
                    className="text-slate-200 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group border border-cyan-400/30 hover:border-cyan-400/60 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 hover:from-cyan-500/20 hover:to-purple-500/20 animate-glow-pulse"
                  >
                    Help & Support
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-slate-200 hover:text-cyan-300 p-2 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 border border-transparent hover:border-cyan-400/30"
                aria-label="Toggle menu"
              >
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`lg:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "max-h-64 opacity-100 pb-4"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="pt-4 space-y-2 bg-slate-800/20 backdrop-blur-sm rounded-2xl mt-2 p-4 border border-cyan-400/10">
              <a
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="block text-slate-200 hover:text-cyan-300 hover:bg-cyan-500/10 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 relative group border border-transparent hover:border-cyan-400/30"
              >
                Home
                <span className="absolute inset-x-4 bottom-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
              <a
                href="/chatbox"
                onClick={() => setIsMenuOpen(false)}
                className="block text-slate-200 hover:text-cyan-300 hover:bg-cyan-500/10 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 relative group border border-transparent hover:border-cyan-400/30"
              >
                ChatBox
                <span className="absolute inset-x-4 bottom-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
              <a
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="block text-slate-200 hover:text-cyan-300 hover:bg-cyan-500/10 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 relative group border border-transparent hover:border-cyan-400/30"
              >
                About
                <span className="absolute inset-x-4 bottom-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
              <a
                href="/helpandsupport"
                onClick={() => setIsMenuOpen(false)}
                className="block text-slate-200 hover:text-white hover:bg-cyan-500/10 px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 relative group border border-cyan-400/30 hover:border-cyan-400/60 mt-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"
              >
                Help & Support
                <span className="absolute inset-x-4 bottom-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
