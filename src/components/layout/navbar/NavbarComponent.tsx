import React, { useEffect, useState } from "react";
import { Linkedin, Github, Menu, FileText, Twitter } from "lucide-react";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/constants";
import { ICONS } from "@/contants/icons";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo/Home link */}
      <div className="flex flex-shrink-0 items-center">
        <a
          href="/"
          className="text-xl font-bold text-white hover:text-purple-400 transition-colors duration-200"
        >
          createdbyniko.
        </a>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.path}
            href={item.path}
            className={`text-sm transition-colors duration-200 ${
              currentPath === item.path
                ? "text-purple-400"
                : "text-neutral-300 hover:text-purple-400"
            }`}
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Social Links */}
      <div className="flex items-center justify-center gap-4 text-2xl">
        <a
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-300 hover:text-purple-400 transition-colors duration-200 relative group"
          aria-label="LinkedIn Profile"
        >
          <ICONS.LINKEDIN className="w-6 h-6" />
          <span className="tooltip-text absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-neutral-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
            LinkedIn
          </span>
        </a>
        <a
          href={SOCIAL_LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-300 hover:text-purple-400 transition-colors duration-200 relative group"
          aria-label="GitHub Profile"
        >
          <ICONS.GITHUB className="w-6 h-6" />
          <span className="tooltip-text absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-neutral-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
            GitHub
          </span>
        </a>
        <a
          href={SOCIAL_LINKS.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-300 hover:text-purple-400 transition-colors duration-200 relative group"
          aria-label="Twitter Profile"
        >
          <ICONS.TWITTER className="w-6 h-6" />
        </a>
        <a
          href={SOCIAL_LINKS.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-300 hover:text-purple-400 transition-colors duration-200 relative group"
        >
          <ICONS.RESUME className="w-6 h-6" />
          <span className="tooltip-text absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-neutral-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
            Download Resume
          </span>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2"
        aria-label="Toggle mobile menu"
        onClick={handleMenuClick}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-neutral-950 bg-opacity-95 md:hidden"
          onClick={handleOutsideClick}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={`text-xl transition-colors duration-200 ${
                  currentPath === item.path
                    ? "text-purple-400"
                    : "text-neutral-300 hover:text-purple-400"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarComponent;
