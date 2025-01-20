"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "@/app/firebase"; // Firebase configuration (ensure Firebase is set up in your project)
import { doc, setDoc, updateDoc, collection, addDoc } from "firebase/firestore";

const PaymentStatusPage = ({ params }) => {
  const { transactionId } = params;
  const router = useRouter();
  const [status, setStatus] = useState("loading"); // 'loading', 'success', 'failure'
  const [errorMessage, setErrorMessage] = useState("");
  const [bookingData, setBookingData] = useState(null);

  // Extract query parameters
  const getQueryParams = () => {
    const params = new URLSearchParams(window.location.search);
    const bookingData = {
      userId: params.get("userId"),
      checkInDate: params.get("checkInDate"),
      checkOutDate: params.get("checkOutDate"),
      roomCount: params.get("roomCount"),
      bedCount: params.get("bedCount"),
      price: params.get("price"),
      transactionId: params.get("transactionId"),
      cottageType: params.get("cottageType"),
    };
    return bookingData;
  };

  const fetchPaymentStatus = async () => {
    const bookingData = getQueryParams(); // Get the booking data from query params
    setBookingData(bookingData); // Set the booking data to state

    try {
      const response = await fetch("/api/ps", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ transactionId }), // Using the transactionId from params
      });

      if (!response.ok) {
        throw new Error("Failed to fetch payment status");
      }

      const data = await response.json();
      console.log("Payment Status:", data);

      if (data.success) {
        setStatus("success");

        // Once payment is successful, save booking data to Firebase
        await saveBookingDataToFirebase(bookingData);
      } else {
        setStatus("failure");
        setErrorMessage(data.message || "Payment failed or incomplete.");
      }
    } catch (error) {
      console.error("Error fetching payment status:", error);
      setStatus("failure");
      setErrorMessage(error.message || "An unexpected error occurred.");
    }
  };

  // Save the booking data to Firebase when payment is successful
  const saveBookingDataToFirebase = async (bookingData) => {
    try {
      // Add the booking data to Firestore's 'bookings' collection
      const bookingRef = await addDoc(collection(db, "bookings"), bookingData);
      console.log("Booking data saved to Firebase with ID:", bookingRef.id);

      // Update the user's 'orders' array with the booking ID
      const userRef = doc(db, "users", bookingData.userId);
      await updateDoc(userRef, {
        orders: [...(bookingData.orders || []), bookingRef.id],
      });
      console.log("User's orders updated with booking ID.");
    } catch (error) {
      console.error("Error saving booking data to Firebase:", error);
    }
  };

  useEffect(() => {
    fetchPaymentStatus();
  }, [transactionId]);

  // Render content based on payment status
  const renderContent = () => {
    switch (status) {
      case "loading":
        return (
          <div className="text-center py-10">
            <p className="text-lg text-gray-600">Checking payment status...</p>
          </div>
        );

      case "success":
        return (
          <div className="text-center py-10">
            <h1 className="text-3xl font-bold text-green-600">
              Payment Successful!
            </h1>
            <p className="text-lg text-gray-700 mt-4">
              Thank you for your payment. Your booking is confirmed.
            </p>
            <button
              onClick={() => router.push("/")}
              className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
            >
              View My Bookings
            </button>
          </div>
        );

      case "failure":
        return (
          <div className="text-center py-10">
            <h1 className="text-3xl font-bold text-red-600">Payment Failed</h1>
            <p className="text-lg text-gray-700 mt-4">{errorMessage}</p>
            <button
              onClick={() => router.push("/")}
              className="mt-6 px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-500"
            >
              Try Again
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return <div className="container mx-auto px-6 py-12">{renderContent()}</div>;
};

export default PaymentStatusPage;
