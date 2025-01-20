// app/layout.js

import React from "react";
import Sidebar from "../components/Sidebar";
Sidebar;

const Layout = ({ children }) => {
  return (
    <div className="flex ">
      {/* Sidebar Component */}
      <div className="w-full bg-gray-800 text-white fixed h-screen">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-64 ml-0   p-6">
        {children} {/* Dynamic Content goes here */}
      </div>
    </div>
  );
};

export default Layout;
