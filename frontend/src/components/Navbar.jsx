import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Education", id: "education" },
  { name: "Experience", id: "experience" },
  { name: "Certificates", id: "certificates" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      
      navLinks.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Adjust threshold so that when a section reaches 150px from top, it becomes active
          if (rect.top <= 150) {
            current = id;
          }
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount to set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="w-full shadow-sm sticky top-0 z-50 backdrop-blur-lg bg-slate-950/80 border-b border-white/5">
      <div className="flex justify-between items-center px-5 md:px-10 py-4 max-w-7xl mx-auto">

        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold pl-2 md:pl-6 text-white tracking-wider">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="hover:text-cyan-400 transition-colors">AJ</a>
          </h2>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 block ${
                  activeSection === link.id
                    ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                    : "text-slate-300 hover:text-cyan-400 hover:bg-white/5 border border-transparent"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-white/5 transition"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-white/10 bg-slate-900/95 backdrop-blur-xl absolute w-full left-0 shadow-2xl">
          <ul className="flex flex-col px-6 py-4 gap-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`block px-4 py-3 rounded-xl transition-all duration-300 ${
                    activeSection === link.id
                      ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 shadow-[0_0_15px_rgba(34,211,238,0.1)]"
                      : "text-slate-300 hover:text-cyan-400 hover:bg-white/5 border border-transparent"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;