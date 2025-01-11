"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { use } from "react";

const images = [
  "https://th.bing.com/th/id/OIP.tFCya-4WhJgvr8TYlfj3WgHaFj?w=230&h=180&c=7&r=0&o=5&pid=1.7",
  "https://th.bing.com/th/id/OIP.tFCya-4WhJgvr8TYlfj3WgHaFj?w=230&h=180&c=7&r=0&o=5&pid=1.7",
  "https://th.bing.com/th/id/OIP.HOe41EiZMsFtnApO90vonQHaE8?w=241&h=181&c=7&r=0&o=5&pid=1.7",
];

const HotelRoomDetail = ({ params }) => {
  const router = useRouter();

  // Use React's use() to unwrap the params object
  const { id } = use(params); // Unwrap params before accessing `id`

  const hotels = [
    {
      id: 1,
      title: "Deluxe Dormitory Tent",
      description:
        "Experience the best of luxury and comfort in our selected hotels.",
      image:
        "https://th.bing.com/th/id/OIP.tFCya-4WhJgvr8TYlfj3WgHaFj?w=230&h=180&c=7&r=0&o=5&pid=1.7",
      price: "2500",
      facilities: [
        "King-size bed",
        "Ocean view",
        "Free Wi-Fi",
        "24/7 Room Service",
        "Luxury bath amenities",
      ],
    },
    {
      id: 2,
      title: "Premium Dormitory Tent",
      description:
        "Experience the best of luxury and comfort in our selected hotels.",
      image:
        "https://th.bing.com/th/id/OIP.tFCya-4WhJgvr8TYlfj3WgHaFj?w=230&h=180&c=7&r=0&o=5&pid=1.7",
      price: "3000",
      facilities: [
        "Private Pool",
        "Garden View",
        "Free Breakfast",
        "King-size bed",
      ],
    },
    {
      id: 3,
      title: "Luxury Dormitory Tent",
      description: "Enjoy the finest amenities and exceptional service.",
      image:
        "https://th.bing.com/th/id/OIP.HOe41EiZMsFtnApO90vonQHaE8?w=241&h=181&c=7&r=0&o=5&pid=1.7",
      price: "5000",
      facilities: [
        "Private Balcony",
        "Spa Access",
        "Smart TV",
        "Complimentary Drinks",
      ],
    },
    {
      id: 4,
      title: "Luxury Vip Cottage (2 person)",
      description: "Affordable comfort for your travel needs.",
      image:
        "https://th.bing.com/th/id/OIP.HOe41EiZMsFtnApO90vonQHaE8?w=241&h=181&c=7&r=0&o=5&pid=1.7",
      price: "21000",
    },
    {
      id: 5,
      title: "Vip Cottage (2 family)",
      description: "Affordable comfort for your travel needs.",
      image:
        "https://th.bing.com/th/id/OIP.HOe41EiZMsFtnApO90vonQHaE8?w=241&h=181&c=7&r=0&o=5&pid=1.7",
      price: "11000",
    },
  ];

  const hotelData = hotels.find((hotel) => hotel.id == id);

  const [currentIndex, setCurrentIndex] = useState(0);

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
            {hotelData?.title}
          </h1>
          <p className="text-lg sm:text-xl lg:text-xl text-gray-700 mb-8 tracking-wide leading-relaxed">
            {hotelData?.description}
          </p>

          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Amenities
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-lg sm:text-xl text-gray-600">
            {hotelData?.facilities?.map((facility, index) => (
              <li key={index} className="flex items-center space-x-2">
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
                <span>{facility}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Price and Booking */}
        <div className="flex-1 mt-6 lg:mt-0">
          <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
              Price
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-gray-700 mb-6">
              ₹{hotelData?.price} per night
            </p>
            <a
              href={`https://wa.me/6370302039?text=I%20am%20interested%20in%20booking%20the%20${hotelData?.title}%20at%20₹${hotelData?.price}%20per%20night.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-500 shadow-lg transition duration-300 ease-in-out">
                Book Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelRoomDetail;
