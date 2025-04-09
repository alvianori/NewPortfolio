import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="w-full fixed top-0 bg-[#222831] shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl font-bold text-white hover:text-[#00ADB5] transition-colors"
          >
            Alvianori
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white hover:text-[#00ADB5] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-[#00ADB5] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-white hover:text-[#00ADB5] transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-white hover:text-[#00ADB5] transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-[#00ADB5] transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#222831]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left text-white hover:text-[#00ADB5] transition-colors py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left text-white hover:text-[#00ADB5] transition-colors py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left text-white hover:text-[#00ADB5] transition-colors py-2"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block w-full text-left text-white hover:text-[#00ADB5] transition-colors py-2"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left text-white hover:text-[#00ADB5] transition-colors py-2"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
