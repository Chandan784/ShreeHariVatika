"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaHome, FaBuilding, FaCalendarAlt, FaUsers } from "react-icons/fa";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("dashboard"); // State to track active tab

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const menuItems = [
    { name: "Dashboard", href: "/admin/pages/dashboard", icon: <FaHome /> },
    { name: "Cottage", href: "/admin/pages/cottage", icon: <FaBuilding /> },
    {
      name: "Bookings",
      href: "/admin/pages/booking",
      icon: <FaCalendarAlt />,
    },
    { name: "Users", href: "/admin/pages/user", icon: <FaUsers /> },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar for larger screens */}
      <div className="hidden lg:block w-64 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-semibold mb-8">Admin Panel</h2>
        <nav>
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.name}
                className={`mb-4 flex items-center p-2 rounded-md cursor-pointer ${
                  activeTab === item.name.toLowerCase()
                    ? "bg-gray-700 text-yellow-500"
                    : "hover:bg-gray-700"
                }`}
                onClick={() => handleTabChange(item.name.toLowerCase())}
              >
                <div className="text-lg mr-3">{item.icon}</div>
                <Link
                  href={item.href}
                  className={`text-lg ${
                    activeTab === item.name.toLowerCase()
                      ? "text-yellow-500"
                      : "hover:text-yellow-500"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6 bg-gray-100">
        {/* Content will be rendered here */}
      </div>

      {/* Bottom Navbar for mobile screens */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-gray-800 text-white">
        <div className="flex justify-around items-center py-2">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className={`text-center cursor-pointer ${
                activeTab === item.name.toLowerCase()
                  ? "text-yellow-500"
                  : "hover:text-yellow-500"
              }`}
              onClick={() => handleTabChange(item.name.toLowerCase())}
            >
              <Link href={item.href}>
                <div className="text-2xl">{item.icon}</div>
                <span className="text-sm">{item.name}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
