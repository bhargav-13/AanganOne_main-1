import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar({ simple, isDark }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (isDark) {
      return location.pathname === path ? "text-white font-bold" : "text-gray-200 hover:text-white font-medium";
    }
    return location.pathname === path ? "text-[#473F52] font-semibold" : "text-gray-700 hover:text-gray-900 font-medium";
  };

  const textColor = isDark ? "text-white" : "text-[#473F52]";
  const mobileBtnColor = isDark ? "text-white" : "text-gray-700";

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="container-padding pt-8 pb-6">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2 md:gap-4">
              <img
                src="/images/Aanganone-logo.svg"
                alt="AANGANOne Logo"
                className="h-8 md:h-12 w-auto"
              />
              <span className={`text-xl md:text-2xl font-bold ${textColor}`}>AanganOne</span>
            </Link>
          </div>

          {simple ? (
            <div className="flex items-center">
              <Link
                to="/"
                className="text-[#7B2CBF] font-bold text-xs md:text-lg px-3 py-1.5 md:px-6 md:py-2 border-2 border-[#7B2CBF] rounded-full hover:bg-[#7B2CBF] hover:text-white transition-all duration-300 whitespace-nowrap"
              >
                ← Back
              </Link>
            </div>
          ) : (
            <>
              {/* Navigation Links */}
              <div className="hidden md:flex items-center gap-8">
                <Link
                  to="/"
                  className={`${isActive('/')} transition-colors duration-200 text-lg`}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`${isActive('/about')} transition-colors duration-200 text-lg`}
                >
                  About
                </Link>
                <Link
                  to="/features"
                  className={`${isActive('/features')} transition-colors duration-200 text-lg`}
                >
                  Features
                </Link>
                <Link
                  to="/contact"
                  className={`${isActive('/contact')} transition-colors duration-200 text-lg`}
                >
                  Contact
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                className={`md:hidden ${mobileBtnColor} focus:outline-none`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Overlay and Drawer */}
        {!simple && isMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <div
              className="md:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Sliding Drawer */}
            <div className="md:hidden fixed top-0 right-0 h-screen w-[70%] bg-white shadow-2xl z-50 animate-slide-in-right flex flex-col p-6">
              {/* Close Button Header */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Menu Links */}
              <div className="flex flex-col gap-6">
                <Link
                  to="/"
                  className="text-gray-800 hover:text-[#7b3cff] font-medium text-xl border-b border-gray-100 pb-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-800 hover:text-[#7b3cff] font-medium text-xl border-b border-gray-100 pb-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/features"
                  className="text-gray-800 hover:text-[#7b3cff] font-medium text-xl border-b border-gray-100 pb-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-800 hover:text-[#7b3cff] font-medium text-xl border-b border-gray-100 pb-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
