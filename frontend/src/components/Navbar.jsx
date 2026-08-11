import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full shadow-sm sticky top-0 z-50 backdrop-blur-lg">
      <div className="flex justify-between items-center px-5 md:px-10 py-4">

        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold pl-2 md:pl-6 text-white">
            <Link to="/">AJ</Link>
          </h2>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-5 lg:gap-7">

          <li className="cursor-pointer font-medium hover:text-[#11a6e0] transition">
            <Link to="/">Home</Link>
          </li>

          <li className="cursor-pointer font-medium hover:text-[#11a6e0] transition">
            <Link to="/about">About</Link>
          </li>

          <li className="cursor-pointer font-medium hover:text-[#11a6e0] transition">
            <Link to="/skills">Skills</Link>
          </li>

          <li className="cursor-pointer font-medium hover:text-[#11a6e0] transition">
            <Link to="/projects">Projects</Link>
          </li>

          <li className="cursor-pointer font-medium hover:text-[#11a6e0] transition">
            <Link to="/education">Education</Link>
          </li>

          <li className="cursor-pointer font-medium hover:text-[#11a6e0] transition">
            <Link to="/experience">Experience</Link>
          </li>

          <li className="cursor-pointer font-medium hover:text-[#11a6e0] transition">
            <Link to="/certificates">Certificates</Link>
          </li>

          <li className="cursor-pointer font-medium hover:text-[#11a6e0] transition">
            <Link to="/contact">Contact</Link>
          </li>

        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200">
          <ul className="flex flex-col px-6 py-4 gap-1">

            <li
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 cursor-pointer rounded-lg hover:bg-[#11a6e0]/10 hover:text-[#11a6e0]"
            >
              <Link to="/">Home</Link>
            </li>

            <li
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 cursor-pointer rounded-lg hover:bg-[#11a6e0]/10 hover:text-[#11a6e0]"
            >
              <Link to="/about">About</Link>
            </li>

            <li
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 cursor-pointer rounded-lg hover:bg-[#11a6e0]/10 hover:text-[#11a6e0]"
            >
              <Link to="/skills">Skills</Link>
            </li>

            <li
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 cursor-pointer rounded-lg hover:bg-[#11a6e0]/10 hover:text-[#11a6e0]"
            >
              <Link to="/projects">Projects</Link>
            </li>

            <li
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 cursor-pointer rounded-lg hover:bg-[#11a6e0]/10 hover:text-[#11a6e0]"
            >
              <Link to="/education">Education</Link>
            </li>

            <li
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 cursor-pointer rounded-lg hover:bg-[#11a6e0]/10 hover:text-[#11a6e0]"
            >
              <Link to="/experience">Experience</Link>
            </li>

            <li
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 cursor-pointer rounded-lg hover:bg-[#11a6e0]/10 hover:text-[#11a6e0]"
            >
              <Link to="/certificates">Certificates</Link>
            </li>

            <li
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 cursor-pointer rounded-lg hover:bg-[#11a6e0]/10 hover:text-[#11a6e0]"
            >
              <Link to="/contact">Contact</Link>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;