"use client";

import { useRouter } from "next/navigation";

const HotelRoomDetail = ({ params }) => {
  const router = useRouter();
  const { id } = params;

  const hotels = [
    {
      id: 1,
      title: "Deluxe Dormitory Tent",
      description:
        "Experience the best of luxury and comfort in our selected hotels.",
      image: "/photos/deluxtent.jpg",
      price: "2000",
      beds: "No bed only floor mattress",
      persons: "16 Persons",
      facilities: [
        "TV",
        "Blanket",
        "Pillow",
        "Bonfire",
        "Breakfast",
        "Lunch",
        "Evening Snack",
        "Dinner",
        "Bathroom",
        "Morning Satsang",
        "Evening Bhajan and Kirtan",
        "Mattress",
        "Bedsheet & Towel",
        "Wifi",
        "Medical facilities",
        "Food Court",
      ],
    },
    {
      id: 2,
      title: "Premium Dormitory Tent",
      description:
        "Experience the best of luxury and comfort in our selected hotels.",
      image: "/photos/dormitory.jpg",
      price: "3000",
      beds: "Folding Beds",
      persons: "8 Persons",
      facilities: [
        "TV",
        "Blanket",
        "Pillow",
        "Bonfire",
        "Breakfast",
        "Lunch",
        "Evening Snack",
        "Dinner",
        "Bathroom",
        "Morning Satsang",
        "Evening Bhajan and Kirtan",
        "Mattress",
        "Bedsheet & Towel",
        "Wifi",
        "Medical facilities",
        "Food Court",
      ],
    },
    {
      id: 3,
      title: "Customizable Cottage Tent",
      description: "Enjoy the finest amenities and exceptional service.",
      image:
        "https://th.bing.com/th/id/OIP.HOe41EiZMsFtnApO90vonQHaE8?w=241&h=181&c=7&r=0&o=5&pid=1.7",
      price: "As per requirement",
      beds: "Custom",
      persons: "",
      facilities: [
        "TV",
        "Blanket",
        "Pillow",
        "Bonfire",
        "Breakfast",
        "Lunch",
        "Evening Snack",
        "Dinner",
        "Bathroom",
        "Morning Satsang",
        "Evening Bhajan and Kirtan",
        "Mattress",
        "Bedsheet & Towel",
        "Wifi",
        "Medical facilities",
        "Food Court",
      ],
    },
    {
      id: 4,
      title: "Luxury Vip Cottage",
      description: "Affordable comfort for your travel needs.",
      image: "/photos/luxuryvip.jpg",
      price: "21000",
      beds: "2 double beds",
      persons: "Up to 8 Persons",
      facilities: [
        "TV",
        "Blanket",
        "Pillow",
        "Bonfire",
        "Breakfast",
        "Lunch",
        "Evening Snack",
        "Dinner",
        "Bathroom",
        "Morning Satsang",
        "Evening Bhajan and Kirtan",
        "Mattress",
        "Bedsheet & Towel",
        "Wifi",
        "Medical facilities",
        "Food Court",
      ],
    },
    {
      id: 5,
      title: "Vip Cottage",
      description: "Affordable comfort for your travel needs.",
      image: "/photos/vipcottage.jpg",
      price: "11000",
      beds: "1 King Bed",
      persons: "Up to 4 Persons",
      facilities: [
        "TV",
        "Blanket",
        "Pillow",
        "Bonfire",
        "Breakfast",
        "Lunch",
        "Evening Snack",
        "Dinner",
        "Bathroom",
        "Morning Satsang",
        "Evening Bhajan and Kirtan",
        "Mattress",
        "Bedsheet & Towel",
        "Wifi",
        "Medical facilities",
        "Food Court",
      ],
    },
  ];
  const hotelData = hotels.find((hotel) => hotel.id == id);

  const whatsappLink = `https://wa.me/9438368531?text=I%20am%20interested%20in%20booking%20the%20${hotelData?.title}%20at%20₹${hotelData?.price}%20per%20night.`;

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Image Section */}
        <div className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-10 shadow-lg">
          {hotelData?.image && (
            <img
              src={hotelData.image}
              alt={hotelData.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Details Section */}
        <div className="flex flex-col lg:flex-row lg:space-x-12 mb-12">
          <div className="flex-1 mb-6 lg:mb-0">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              {hotelData?.title}
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              {hotelData?.description}
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Amenities
            </h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-lg text-gray-600">
              {hotelData?.facilities?.map((facility, index) => (
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
                  <span>{facility}</span>
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
                    ₹{hotelData?.price}
                  </span>
                  <span> / bed or mattress</span>
                </h2>
                <p className="text-gray-600 text-lg">
                  Beds: {hotelData?.beds || "Not Specified"}
                </p>
                <p className="text-gray-600 text-lg">
                  Persons: {hotelData?.persons || "Not Specified"}
                </p>
              </div>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <button className="w-full px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-500 shadow-lg transition">
                  Book On WhatsApp
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelRoomDetail;
