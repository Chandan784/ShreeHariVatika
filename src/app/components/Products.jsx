"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const hotels = [
  {
    id: 1,
    title: "Deluxe Dormitory Tent",
    description:
      "Experience the best of luxury and comfort in our selected hotels.",
    image:
      "https://th.bing.com/th/id/OIP.PZxioylnhWEh35X0w-4ggwHaE7?w=241&h=180&c=7&r=0&o=5&pid=1.7",
    price: "2000",
    beds: "no beds, matress",
    persons: "16 Persons",
  },
  {
    id: 2,
    title: "Premium Dormitory Tent",
    description:
      "Experience the best of luxury and comfort in our selected hotels.",
    image:
      "https://th.bing.com/th/id/OIP.QCyXQX1zYYuIskUjyNW7OwHaFj?w=199&h=180&c=7&r=0&o=5&pid=1.7",
    price: "3000",
    beds: "Folding Beds",
    persons: "8 Persons",
  },
  {
    id: 3,
    title: "Customizable Cottage Tent",
    description:
      "Experience the best of luxury and comfort in our selected hotels..",
    image:
      "https://th.bing.com/th/id/OIP.HOe41EiZMsFtnApO90vonQHaE8?w=241&h=181&c=7&r=0&o=5&pid=1.7",
    price: "As per requirement",
    beds: "Asper requirement",
    persons: "",
  },
  {
    id: 4,
    title: "Luxury Vip Cottage ",
    description: "Affordable comfort for your travel needs.",
    image:
      "https://th.bing.com/th/id/OIP.HOe41EiZMsFtnApO90vonQHaE8?w=241&h=181&c=7&r=0&o=5&pid=1.7",
    price: "21000",
    beds: "1 King Bed",
    persons: " upto 6 Persons",
  },
  {
    id: 5,
    title: "Vip Cottage",
    description: "Affordable comfort for your travel needs.",
    image:
      "https://th.bing.com/th/id/OIP.4gqnBJfd-azejQB6EX2O1gHaE8?w=292&h=195&c=7&r=0&o=5&pid=1.7",
    price: "11000",
    beds: "1 king bed",
    persons: "upto 4 person",
  },
];

export default function Hotels() {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">
        Available Cottages
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="border border-gray-300 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="w-full h-48 relative">
              <Image
                src={hotel.image}
                alt={hotel.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 flex flex-col">
              <h3 className="text-lg font-semibold text-center">
                {hotel.title}
              </h3>
              <p className="text-gray-600 text-center mt-2">
                {hotel.description}
              </p>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-blue-500 font-bold text-lg">
                    ₹{hotel.price}
                  </p>
                  <p className="text-gray-500 text-sm">+ GST Taxes</p>
                  <div className="flex text-gray-500 text-sm mt-1">
                    <p className="mr-4">{hotel.beds}</p>
                    <p>{hotel.persons}</p>
                  </div>
                </div>
                <button
                  onClick={() => router.push(`/pages/details/${hotel.id}`)}
                  className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
