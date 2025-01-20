"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/app/firebase"; // Update the path as per your setup
import { collection, getDocs } from "firebase/firestore";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch users from Firestore
  const fetchUsers = async () => {
    try {
      const usersCollection = collection(db, "users");
      const userSnapshot = await getDocs(usersCollection);

      const userList = userSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setUsers(userList);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch users.");
      setLoading(false);
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle loading and error states
  if (loading) {
    return (
      <div className="text-center py-10">
        <div className="text-lg text-gray-600 mb-4">Loading...</div>
        <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-t-4 border-gray-500 rounded-full" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">
        All Users
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {user.name || "N/A"}
            </h2>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Email:</strong> {user.email || "N/A"}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Phone:</strong> {user.phoneNumber || "N/A"}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Address:</strong> {user.address || "N/A"}
            </p>
            {/* Add more fields as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
