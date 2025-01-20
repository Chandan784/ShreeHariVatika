"use client";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Link from "next/link";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // State for mobile sidebar toggle

  return (
    <div className="flex">
      {/* Sidebar Component */}
      <div
        className={`lg:w-64 w-48 bg-gray-800 text-white fixed h-screen transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div
        className={`flex-1 p-6 transition-all ${
          sidebarOpen ? "ml-48" : "lg:ml-64 ml-0"
        }`}
      >
        {/* Dynamic Content */}
        {children} {/* Content passed through props */}
      </div>

      {/* Mobile Navigation Bar */}
      <div
        className={`lg:hidden fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-2`}
      >
        <div className="flex justify-around">
          {/* Bottom navigation links */}
          <div className="text-center">
            <Link href="/admin/pages/dashboard">
              <div className="text-2xl">🏠</div>
              <span className="text-sm">Dashboard</span>
            </Link>
          </div>
          <div className="text-center">
            <Link href="/admin/pages/cottage">
              <div className="text-2xl">🏡</div>
              <span className="text-sm">Cottage</span>
            </Link>
          </div>
          <div className="text-center">
            <Link href="/admin/pages/bookings">
              <div className="text-2xl">📅</div>
              <span className="text-sm">Bookings</span>
            </Link>
          </div>
          <div className="text-center">
            <Link href="/admin/pages/users">
              <div className="text-2xl">👥</div>
              <span className="text-sm">Users</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
