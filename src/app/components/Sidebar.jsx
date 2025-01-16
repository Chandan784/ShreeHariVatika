// components/Sidebar.js
import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-semibold mb-8">Admin Panel</h2>
        <nav>
          <ul>
            <li className="mb-4">
              <Link
                href="admin/pages/dashboard"
                className="text-lg hover:text-yellow-500"
              >
                Dashboard
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="/admin/pages/dashboard"
                className="text-lg hover:text-yellow-500"
              >
                Cottage
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/bookings" className="text-lg hover:text-yellow-500">
                Bookings
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1 p-6 bg-gray-100">
        {/* Content will be rendered here */}
      </div>
    </div>
  );
};

export default Sidebar;
