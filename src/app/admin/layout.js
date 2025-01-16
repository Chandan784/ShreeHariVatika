// app/layout.js

import React from "react";
import Sidebar from "../components/Sidebar";
Sidebar;

const Layout = ({ children }) => {
  return (
    <div className="flex">
      {/* Sidebar Component */}
      <div className="w-64 bg-gray-800 text-white fixed h-screen">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 ml-64 p-6">
        {children} {/* Dynamic Content goes here */}
      </div>
    </div>
  );
};

export default Layout;
