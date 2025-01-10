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
      "https://th.bing.com/th/id/OIP.tFCya-4WhJgvr8TYlfj3WgHaFj?w=230&h=180&c=7&r=0&o=5&pid=1.7",
    price: "2500",
  },
  {
    id: 2,
    title: "Premium Dormitory Tent",
    description:
      "Experience the best of luxury and comfort in our selected hotels.",
    image:
      "data:image/jpeg;base64,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",
    price: "3000",
  },
  {
    id: 3,
    title: "Luxury Dormitory Tent",
    description: "Enjoy the finest amenities and exceptional service.",
    image:
      "https://th.bing.com/th/id/OIP.HOe41EiZMsFtnApO90vonQHaE8?w=241&h=181&c=7&r=0&o=5&pid=1.7",
    price: "5000",
  },
  {
    id: 4,
    title: "Economy Dormitory Tent",
    description: "Affordable comfort for your travel needs.",
    image:
      "https://th.bing.com/th/id/OIP.HOe41EiZMsFtnApO90vonQHaE8?w=241&h=181&c=7&r=0&o=5&pid=1.7",
    price: "1500",
  },
  {
    id: 5,
    title: "Economy Dormitory Tent",
    description: "Affordable comfort for your travel needs.",
    image:
      "https://th.bing.com/th/id/OIP.HOe41EiZMsFtnApO90vonQHaE8?w=241&h=181&c=7&r=0&o=5&pid=1.7",
    price: "1500",
  },
];

export default function Hotels() {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Available Hotels</h2>
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
              <p className="text-blue-500 font-bold text-lg mt-2 text-center">
                ₹{hotel.price}
              </p>
              <button
                onClick={() => router.push(`/hotel/${hotel.id}`)}
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 self-center"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
