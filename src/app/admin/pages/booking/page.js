"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/app/firebase"; // Ensure Firebase is set up correctly
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

function Page() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch booking data from Firestore and user details
  const fetchBookings = async () => {
    try {
      const bookingsCollection = collection(db, "bookings");
      const bookingSnapshot = await getDocs(bookingsCollection);

      const bookingList = await Promise.all(
        bookingSnapshot.docs.map(async (docSnapshot) => {
          const bookingData = docSnapshot.data();
          const userId = bookingData?.userId;

          let userData = null;

          if (userId) {
            try {
              const userDocRef = doc(db, "users", userId);
              const userDoc = await getDoc(userDocRef);
              if (userDoc.exists()) {
                userData = userDoc.data();
              }
            } catch (userError) {
              console.error(
                `Failed to fetch user with ID: ${userId}`,
                userError
              );
            }
          }

          // Combine the booking data with the user data
          return {
            id: docSnapshot.id,
            ...bookingData,
            cottageType: bookingData.cottageType || "Not specified", // New field
            userName: userData ? userData.name : "User not found",
            userEmail: userData ? userData.email : "Email not found",
            userPhone: userData ? userData.phoneNumber : "Phone not found",
          };
        })
      );

      setBookings(bookingList);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch booking data.");
      setLoading(false);
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // If there is an error or loading, show a message
  if (loading) {
    return (
      <div className="text-center py-10">
        <p className="text-lg text-gray-600">Loading...</p>
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
    <div className="container  px-6 lg:px-0 py-12 lg:py-0">
      <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">
        Bookings
      </h1>

      {/* Table for larger screens */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-2 py-3 text-xs sm:text-base">Name</th>
              <th className="px-2 py-3 text-xs sm:text-base">Email</th>
              <th className="px-2 py-3 text-xs sm:text-base">Phone</th>
              <th className="px-2 py-3 text-xs sm:text-base">Check-In Date</th>
              <th className="px-2 py-3 text-xs sm:text-base">Check-Out Date</th>
              <th className="px-2 py-3 text-xs sm:text-base">Room Count</th>
              <th className="px-2 py-3 text-xs sm:text-base">Bed Count</th>
              <th className="px-2 py-3 text-xs sm:text-base">Cottage Type</th>
              <th className="px-2 py-3 text-xs sm:text-base">Price</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr
                key={booking.id}
                className="hover:bg-indigo-100 transition-colors duration-300"
              >
                <td className="px-2 py-4 border-b text-xs sm:text-sm">
                  {booking.userName}
                </td>
                <td className="px-2 py-4 border-b text-xs sm:text-sm">
                  {booking.userEmail}
                </td>
                <td className="px-2 py-4 border-b text-xs sm:text-sm">
                  {booking.userPhone}
                </td>
                <td className="px-2 py-4 border-b text-xs sm:text-sm">
                  {booking.checkInDate}
                </td>
                <td className="px-2 py-4 border-b text-xs sm:text-sm">
                  {booking.checkOutDate}
                </td>
                <td className="px-2 py-4 border-b text-xs sm:text-sm">
                  {booking.roomCount}
                </td>
                <td className="px-2 py-4 border-b text-xs sm:text-sm">
                  {booking.bedCount}
                </td>
                <td className="px-2 py-4 border-b text-xs sm:text-sm">
                  {booking.cottageType}
                </td>
                <td className="px-2 py-4 border-b text-xs sm:text-sm">
                  ₹{booking.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile-Friendly Cards */}
      <div className="lg:hidden mt-8">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="w-full bg-white p-4 rounded-lg shadow-lg mb-4"
          >
            <div className="text-sm text-gray-600">
              <p>
                <strong>Name:</strong> {booking.userName}
              </p>
              <p>
                <strong>Email:</strong> {booking.userEmail}
              </p>
              <p>
                <strong>Phone:</strong> {booking.userPhone}
              </p>
              <p>
                <strong>Check-In:</strong> {booking.checkInDate}
              </p>
              <p>
                <strong>Check-Out:</strong> {booking.checkOutDate}
              </p>
              <p>
                <strong>Room Count:</strong> {booking.roomCount}
              </p>
              <p>
                <strong>Bed Count:</strong> {booking.bedCount}
              </p>
              <p>
                <strong>Cottage Type:</strong> {booking.cottageType}
              </p>
              <p>
                <strong>Price:</strong> ₹{booking.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
