import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Quick Links */}
          <nav
            aria-label="Footer Navigation"
            className="flex flex-col items-center"
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-center">
              <li>
                <a href="#about" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition">
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#certifications"
                  className="hover:text-white transition"
                >
                  Certifications
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Social Media */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="https://linkedin.com/in/kumaleta"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-300 hover:text-white transition transform hover:scale-110"
                >
                  <FaLinkedin size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Kuma-Leta"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-gray-300 hover:text-white transition transform hover:scale-110"
                >
                  <FaGithub size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/KumaLeta"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-gray-300 hover:text-white transition transform hover:scale-110"
                >
                  <FaTwitter size={24} />
                </a>
              </li>
            </ul>
          </div>

          {/* Copyright & Back to Top */}
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Kuma Leta. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="mt-4 bg-gray-700 text-gray-300 py-2 px-4 rounded-lg hover:bg-gray-600 transition"
              aria-label="Back to Top"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
