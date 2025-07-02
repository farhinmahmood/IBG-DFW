import React from "react";

const Footer = () => (
  <footer className="bg-gray-800 text-white py-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
      <p>&copy; {new Date().getFullYear()} IBG DFW. All Rights Reserved.</p>
      <p className="text-sm mt-1">A Community-Based Nonprofit Organization</p>
    </div>
  </footer>
);

export default Footer;
