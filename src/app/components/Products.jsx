"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { useState, useEffect } from "react";
import { db } from "@/app/firebase"; // Ensure Firebase is properly initialized
import { collection, getDocs } from "firebase/firestore";

// Spinner component
const Spinner = () => (
  <div className="flex justify-center items-center h-full">
    <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
  </div>
);

export default function Hotels() {
  const router = useRouter();
  let [hotels, setHotels] = useState([]);
  let [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "cottages"));
        const hotelsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setHotels(hotelsData);
        setLoading(false); // Set loading to false once data is fetched
        console.log(hotelsData);
      } catch (error) {
        console.error("Error fetching hotels:", error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchHotels();
  }, []);

  // Animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.5 },
    }),
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h2
        className="text-2xl font-bold text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Available Cottages
      </motion.h2>

      {/* Show the spinner if data is still loading */}
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel, index) => (
            <motion.div
              key={hotel.id}
              className="border border-gray-300 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              custom={index} // Pass index for staggered animations
            >
              <div>
                <div className="w-full h-48 relative">
                  <Image
                    src={hotel.image}
                    alt={hotel.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-center">
                    {hotel.title}
                  </h3>
                  <p className="text-gray-600 text-center mt-2">
                    {hotel.description}
                  </p>
                  <div className="mt-4">
                    <p className="text-blue-500 font-bold text-lg text-center sm:text-left">
                      ₹{hotel.price}
                    </p>
                    <p className="text-gray-500 text-sm text-center sm:text-left">
                      + GST Taxes
                    </p>
                    <div className="flex justify-center sm:justify-start text-gray-500 text-sm mt-1">
                      <p className="mr-4">{hotel.beds}</p>
                      <p>{hotel.persons}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <button
                  onClick={() => router.push(`/pages/details/${hotel.id}`)}
                  className="w-full px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Explore
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
