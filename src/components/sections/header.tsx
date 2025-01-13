import React, { useState } from "react";

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle dark mode
  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Toggle mobile menu
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 ">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">
          <a href="#home">Kuma's Portfolio</a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a
              href="#skills"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
            >
              skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
            >
              Experience
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
          onClick={handleMenuToggle}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>

        {/* Dark Mode Toggle */}
        <button
          className="ml-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          onClick={handleDarkModeToggle}
        >
          {isDarkMode ? "☀️" : "🌙"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <ul className="md:hidden bg-white dark:bg-gray-900 shadow-md p-4 space-y-4">
          <li>
            <a
              href="#about"
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
