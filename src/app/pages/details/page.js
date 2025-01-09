"use client";
import { useState } from "react";
import Link from "next/link";

// Example images for the slider
const images = [
  "https://source.unsplash.com/1920x1080/?hotel,room",
  "https://source.unsplash.com/1920x1080/?hotel,interior",
  "https://source.unsplash.com/1920x1080/?hotel,bed",
];

const HotelRoomDetail = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image based on user interaction
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Image Slider */}
      <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-10 shadow-lg">
        <div
          className="absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black opacity-40"></div>

        {/* Navigation Arrows */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl p-4 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition duration-300 ease-in-out"
          onClick={prevSlide}
        >
          &#8249;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl p-4 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition duration-300 ease-in-out"
          onClick={nextSlide}
        >
          &#8250;
        </button>
      </div>

      {/* Details Section */}
      <div className="flex flex-col lg:flex-row lg:space-x-12 mb-12">
        {/* Left Section: Room Details */}
        <div className="flex-1 mb-6 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6 hover:text-blue-600 transition duration-300">
            Luxury Suite Room
          </h1>
          <p className="text-lg sm:text-xl lg:text-xl text-gray-700 mb-8 tracking-wide leading-relaxed">
            Experience the ultimate in luxury and comfort with our Luxury Suite.
            Featuring elegant decor, modern amenities, and panoramic views, it's
            the perfect space for relaxation and rejuvenation.
          </p>

          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Amenities
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-lg sm:text-xl text-gray-600">
            <li className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 1110-10 10 10 0 01-10 10z"
                  clipRule="evenodd"
                />
              </svg>
              <span>King-size bed</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 1110-10 10 10 0 01-10 10z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Ocean view</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 1110-10 10 10 0 01-10 10z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Free Wi-Fi</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 1110-10 10 10 0 01-10 10z"
                  clipRule="evenodd"
                />
              </svg>
              <span>24/7 Room Service</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 1110-10 10 10 0 01-10 10z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Luxury bath amenities</span>
            </li>
          </ul>
        </div>

        {/* Right Section: Price and Booking */}
        <div className="flex-1 mt-6 lg:mt-0">
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
              Price
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-gray-700 mb-6">
              $299 per night
            </p>
            <Link href="/booking">
              <button className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-500 shadow-lg transition duration-300 ease-in-out">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelRoomDetail;
