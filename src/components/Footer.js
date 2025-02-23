import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Author and Last Updated (First on Mobile, Last on Desktop) */}
        <div className="text-sm md:text-base order-1 md:order-3">
          <p>
            Author: <b>Abhishek Gupta</b>
          </p>
          <p>Last Updated: February 23, 2025</p>
        </div>

        {/* Privacy Policy and Terms (Second on Mobile, First on Desktop) */}
        <div className="text-sm md:text-base flex flex-col md:flex-row items-center md:space-x-2 mb-4 md:mb-0 order-2 md:order-1">
          <a href="privacy" className="hover:underline flex items-center gap-1">
            <i className="bi bi-shield-lock"></i> Privacy Policy
          </a>
          <span className="hidden md:inline">|</span>
          <a href="tos" className="hover:underline flex items-center gap-1">
            <i className="bi bi-file-earmark-text"></i> Terms of Service
          </a>
        </div>

        {/* Copyright and Developer Credit (Last on Mobile, Middle on Desktop) */}
        <div className="text-sm md:text-base order-3 md:order-2">
          <p>
            © {new Date().getFullYear()} Project Management Tool. All rights reserved.
          </p>
          <p>
            Designed, Developed, and Maintained by <b>Abhishek Gupta</b>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
