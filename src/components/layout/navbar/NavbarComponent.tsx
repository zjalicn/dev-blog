import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, NAVBAR_LINKS } from "@/constants/nav";
import PlanetIcon from "./PlanetIcon";
import LogoParticles from "./LogoParticles";

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
      {/* Logo/Home link with contained particles */}
      <div className="relative inline-block">
        {/* This wrapper div controls the area where particles will appear */}
        <div className="relative px-2 py-1">
          <LogoParticles />
          <a href="/" className="flex items-center gap-2 z-10 relative">
            <PlanetIcon width="40" height="40" />
            <p className="text-xl font-bold text-white hover:text-purple-400 transition-colors duration-200">
              createdbyniko.
            </p>
          </a>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8">
        {NAV_LINKS.map((item) => (
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

      {/* Social Links - Desktop */}
      <div className="hidden md:flex items-center justify-center gap-4 text-2xl">
        {NAVBAR_LINKS.map((link) => (
          <a
            key={link.key}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-purple-400 transition-colors duration-200 relative group"
            aria-label={`${link.name} Profile`}
          >
            <link.icon className="w-6 h-6" />
            <span className="tooltip-text absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-neutral-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
              {link.name}
            </span>
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2"
        aria-label="Toggle mobile menu"
        onClick={handleMenuClick}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Menu - Full Screen Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-neutral-950 bg-opacity-95 md:hidden flex items-center justify-center"
          onClick={handleOutsideClick}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-neutral-300 hover:text-purple-400"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex flex-col items-center justify-center w-full max-w-sm px-4">
            {/* Navigation Links */}
            <div className="flex flex-col items-center space-y-6 w-full">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  className={`text-xl transition-colors duration-200 ${
                    currentPath === item.path
                      ? "text-purple-400"
                      : "text-neutral-300 hover:text-purple-400"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Separator */}
            <div className="w-24 h-px bg-neutral-700 my-8"></div>

            {/* Social Links - Mobile */}
            <div className="flex items-center justify-center gap-6 w-full">
              {NAVBAR_LINKS.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-purple-400 transition-colors duration-200"
                  aria-label={`${link.name} Profile`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarComponent;
