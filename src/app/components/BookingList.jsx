"use client";

import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const bookingsRef = collection(db, "bookings");

  const fetchBookings = async () => {
    try {
      const data = await getDocs(bookingsRef);
      setBookings(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Booking List
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Cottage ID:{" "}
                <span className="text-gray-900">{booking.cottageId}</span>
              </h3>
              <p className="text-sm text-gray-600">
                <strong>User:</strong> {booking.user}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Check-in:</strong> {booking.checkIn}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Check-out:</strong> {booking.checkOut}
              </p>
              <p
                className={`text-sm font-medium mt-2 ${
                  booking.paymentStatus === "Paid"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                Payment Status: {booking.paymentStatus}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-full">
            No bookings found.
          </p>
        )}
      </div>
    </div>
  );
};

export default BookingList;
