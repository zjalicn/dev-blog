import React, { useEffect, useState } from "react";
import { Trees, Github, File, Menu } from "lucide-react";

const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/zjalicn",
  github: "https://www.github.com/zjalicn",
  resume: "https://example.com/your-resume.pdf",
};

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

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
        <a href="/" className="text-xl font-bold tracking-tight">
          YourName
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
          className="hover:text-purple-400 transition-colors duration-200"
          aria-label="LinkedIn Profile"
        >
          <Trees className="w-6 h-6" />
        </a>
        <a
          href={SOCIAL_LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition-colors duration-200"
          aria-label="GitHub Profile"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href={SOCIAL_LINKS.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition-colors duration-200"
          aria-label="Download Resume"
        >
          <File className="w-6 h-6" />
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
