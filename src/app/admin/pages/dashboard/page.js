"use client";
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
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}

      {/* Main Content */}
      <div className="flex-1 ml-0  p-6 bg-gray-100">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-green-500 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-white">Total Cottages</h3>
            <p className="text-2xl font-bold text-white">{cottages.length}</p>
          </div>
          <div className="bg-blue-500 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-white">Total Users</h3>
            <p className="text-2xl font-bold text-white">{users.length}</p>
          </div>
          <div className="bg-yellow-500 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-white">Total Bookings</h3>
            <p className="text-2xl font-bold text-white">{bookings.length}</p>
          </div>
        </div>

        {/* Graphs */}
        <div className="mt-8 space-y-6">
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
