import React from "react";

const PageWrapper = ({ children, className = "" }) => (
  <div className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 mt-20 ${className}`}>
    <div className="max-w-7xl mx-auto">{children}</div>
  </div>
);

export default PageWrapper;
