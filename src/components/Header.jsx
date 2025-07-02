import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, LOGO_URL, colors } from "../data";

const Header = ({ currentPage, navigateTo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, pageId) => {
    e.preventDefault();
    navigateTo(pageId);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a
              href="#"
              onClick={(e) => handleNavClick(e, "home")}
              className="flex items-center space-x-2"
            >
              <img className="h-16 w-auto" src={LOGO_URL} alt="IBG DFW Logo" />
            </a>
          </div>
          <div className="hidden md:block">
            <nav className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href="#"
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    currentPage === link.id
                      ? "text-white"
                      : "text-gray-700 hover:text-white"
                  }`}
                  style={{
                    backgroundColor:
                      currentPage === link.id ? colors.accent : "transparent",
                    "--hover-bg": colors.accent,
                  }}
                  onMouseOver={(e) => {
                    if (currentPage !== link.id)
                      e.currentTarget.style.backgroundColor = colors.accent;
                  }}
                  onMouseOut={(e) => {
                    if (currentPage !== link.id)
                      e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href="#"
                onClick={(e) => handleNavClick(e, link.id)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  currentPage === link.id
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
