"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { db } from "@/app/firebase";
// Adjust to your Firebase initialization file

const HotelRoomDetail = ({ params }) => {
  const router = useRouter();
  const { id } = params;

  const today = dayjs().format("YYYY-MM-DD");
  const [checkInDate, setCheckInDate] = useState(today);
  const [checkOutDate, setCheckOutDate] = useState(
    dayjs(today).add(1, "day").format("YYYY-MM-DD")
  );
  const [roomCount, setRoomCount] = useState(1);
  const [bedCount, setBedCount] = useState(1);
  const [price, setPrice] = useState(0);
  const [hotelData, setHotelData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        const docRef = doc(db, "cottages", id); // Replace 'hotels' with your collection name in Firebase
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setHotelData(docSnap.data());
          setLoading(false);
        } else {
          console.log("No such document!");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error getting document:", error);
        setLoading(false);
      }
    };

    fetchHotelData();
  }, [id]);

  const calculatePrice = () => {
    if (!hotelData || !checkInDate || !checkOutDate) return 0;

    const basePrice = hotelData.price || 0;
    const diff = dayjs(checkOutDate).diff(dayjs(checkInDate), "day");
    const days = diff > 0 ? diff : 1;

    const total =
      basePrice *
      (hotelData.type === "dormitory" ? bedCount : roomCount) *
      days;

    const gst = total * 0.18; // 18% GST
    return total + gst;
  };

  const handleDateChange = () => {
    setPrice(calculatePrice());
  };

  useEffect(() => {
    setPrice(calculatePrice());
  }, [checkInDate, checkOutDate, roomCount, bedCount, hotelData]);

  const handleBooking = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("Please log in to continue booking.");
      router.push("/pages/login");
      return;
    }

    const transactionId = `txn_${Date.now()}`;
    const bookingData = {
      userId: user.uid,
      checkInDate,
      checkOutDate,
      roomCount, // This now represents the number of rooms
      bedCount, // This now represents the number of beds
      price,
      transactionId,
      cottageType: hotelData.title,
    };

    // Convert the booking data into a query string
    const bookingQueryString = new URLSearchParams(bookingData).toString();

    try {
      const response = await axios.post("/api/payment", {
        amount: price,
        transactionId,
        userId: user.uid,
        redirectUrl: `https://shreeharivatika.in/pages/payment-status/${transactionId}?${bookingQueryString}`,
        callbackUrl: `https://shreeharivatika.in/pages/payment-status/${transactionId}?${bookingQueryString}`,
      });

      if (response.data.success) {
        const redirectUrl =
          response.data.data.instrumentResponse.redirectInfo.url;
        window.location.href = redirectUrl;
      } else {
        alert("Payment initiation failed.");
      }
    } catch (error) {
      console.error("Error:", error.response || error.message);
      alert("Payment failed. Please try again.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-10 shadow-lg">
        {hotelData?.image && (
          <img
            src={hotelData.image}
            alt={hotelData.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-12 mb-12">
        <div className="flex-1 mb-6 lg:mb-0">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            {hotelData?.title}
          </h1>
          <p className="text-lg text-gray-700 mb-8">{hotelData?.description}</p>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Amenities
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-lg text-gray-600">
            {hotelData?.facilities
              ?.split(",") // Split the string by commas to create an array
              .map((facility, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{facility.trim()}</span>{" "}
                  {/* trim to remove extra spaces */}
                </li>
              ))}
          </ul>
        </div>

        <div className="flex-shrink-0">
          <div className="bg-white shadow-lg rounded-xl p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Price:{" "}
                <span className="text-blue-600 font-bold">
                  ₹{price.toFixed(2)}
                </span>
              </h2>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                  Check-in Date
                </label>
                <input
                  type="date"
                  value={checkInDate}
                  onChange={(e) => {
                    setCheckInDate(e.target.value);
                    handleDateChange();
                  }}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                  Check-out Date
                </label>
                <input
                  type="date"
                  value={checkOutDate}
                  onChange={(e) => {
                    setCheckOutDate(e.target.value);
                    handleDateChange();
                  }}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                  {hotelData?.type === "dormitory" ? "Beds" : "Rooms"}
                </label>
                <div className="flex items-center space-x-4">
                  <button
                    className="px-3 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                    onClick={() => {
                      if (hotelData?.type === "dormitory") {
                        setBedCount((prev) => Math.max(1, prev - 1));
                      } else {
                        setRoomCount((prev) => Math.max(1, prev - 1));
                      }
                      handleDateChange();
                    }}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={
                      hotelData?.type === "dormitory" ? bedCount : roomCount
                    }
                    readOnly
                    className="w-16 text-center border border-gray-300 rounded-lg px-3 py-2 bg-white"
                  />
                  <button
                    className="px-3 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                    onClick={() => {
                      if (hotelData?.type === "dormitory") {
                        setBedCount((prev) => prev + 1);
                      } else {
                        setRoomCount((prev) => prev + 1);
                      }
                      handleDateChange();
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <button
              onClick={handleBooking}
              className="w-full px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-500 shadow-lg transition"
            >
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelRoomDetail;
