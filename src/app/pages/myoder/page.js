"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // To handle the redirection

const ProfilePage = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from localStorage when the component mounts
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      setUser(storedUser); // Set the user data if it exists
    } else {
      router.push("/pages/login"); // Redirect to login if no user data is found
    }
  }, [router]);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user data from localStorage
    router.push("/pages/login"); // Redirect to login page after logout
  };

  // If the user data is not available yet (loading)
  if (!user) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-12 bg-gray-100 min-h-screen">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        {/* Profile Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Profile</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center md:flex-row md:items-start">
          <div className="mb-6 md:mb-0 md:mr-8">
            {/* Show user image or default placeholder */}
            <img
              src={
                user.photoURL ||
                "https://cdn-icons-png.flaticon.com/128/1177/1177568.png"
              } // Default image if no profile image
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover shadow-lg"
            />
          </div>

          <div className="flex flex-col md:flex-1">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-700">
                Personal Information
              </h2>
              <div className="mt-2">
                <p className="text-sm text-gray-600">
                  <strong>Name:</strong> {user.name}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Email:</strong> {user.email}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Phone:</strong> {user.phoneNumber}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Address:</strong> {user.address}
                </p>
              </div>
            </div>

            {/* My Orders Section */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-700">My Orders</h2>
              <div className="mt-2">
                {/* List of orders (you can fetch actual orders from the database) */}
                <div className="bg-gray-50 p-4 rounded-md shadow-sm mb-4">
                  <p className="text-sm text-gray-700">Order #1 - Completed</p>
                  <p className="text-sm text-gray-600">
                    Ordered on: 2023-12-01
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-md shadow-sm mb-4">
                  <p className="text-sm text-gray-700">Order #2 - Pending</p>
                  <p className="text-sm text-gray-600">
                    Ordered on: 2023-12-15
                  </p>
                </div>
                {/* Add more orders as necessary */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
