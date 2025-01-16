"use client";
// pages/dashboard/index.js
import React, { useEffect, useState } from "react";
import Sidebar from "@/app/components/Sidebar";
import { db } from "@/app/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [cottages, setCottages] = useState([]);
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);

  const cottagesRef = collection(db, "cottages");
  const usersRef = collection(db, "users");
  const bookingsRef = collection(db, "bookings");

  useEffect(() => {
    const fetchData = async () => {
      const cottageData = await getDocs(cottagesRef);
      setCottages(
        cottageData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );

      const userData = await getDocs(usersRef);
      setUsers(userData.docs.map((doc) => doc.data()));

      const bookingData = await getDocs(bookingsRef);
      setBookings(bookingData.docs.map((doc) => doc.data()));
    };

    fetchData();
  }, []);

  const lineData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Bookings Over Time",
        data: [12, 19, 3, 5, 2],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const barData = {
    labels: ["Paid", "Pending"],
    datasets: [
      {
        label: "Payment Status",
        data: [12, 5], // Change this based on actual data
        backgroundColor: ["#4CAF50", "#FFC107"],
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex">
      <div className="flex-1 p-6">
        <h1 className="text-4xl font-bold">Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-700">
              Total Cottages
            </h3>
            <p className="text-2xl font-bold text-gray-900">
              {cottages.length}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-700">Total Users</h3>
            <p className="text-2xl font-bold text-gray-900">{users.length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-700">
              Total Bookings
            </h3>
            <p className="text-2xl font-bold text-gray-900">
              {bookings.length}
            </p>
          </div>
        </div>

        {/* Graphs */}
        <div className="mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-semibold text-gray-700">
              Bookings Over Time
            </h2>
            <Line data={lineData} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-700">
              Payment Status
            </h2>
            <Bar data={barData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
