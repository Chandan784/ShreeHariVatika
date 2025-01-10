// pages/index.js
"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const hotels = [
  {
    id: 1,
    title: "Luxury Hotels",
    description:
      "Experience the best of luxury and comfort in our selected hotels.",
    image:
      "https://media.gettyimages.com/id/1254241890/photo/old-naga-sadhu-exhibiting-his-long-dreadlocks.jpg?s=612x612&w=0&k=20&c=a97deER9kA_3RKlOI5bLUPKC_aWbAuTLa8yFYKGBg8o=",
  },
  {
    id: 2,
    title: "Budget Hotels",
    description: "Affordable stays for budget-conscious travelers.",
    image:
      "https://th.bing.com/th?id=OIP.tg5xKPOOv4fpR0oFu2mbBQHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  },
  {
    id: 3,
    title: "Family Hotels",
    description:
      "Perfect hotels for family vacations with amenities for all ages.",
    image:
      "https://th.bing.com/th?id=OIP.Zis2cXdglxbZemS3QNsdZQHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  },
  {
    id: 4,
    title: "Beachfront Hotels",
    description:
      "Enjoy the view of the ocean and the sand right outside your room.",
    image:
      "https://th.bing.com/th?id=OIP.FtudhIBH-HYhxMpS4TU-sAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  },
  {
    id: 5,
    title: "Beachfront Hotels",
    description:
      "Enjoy the view of the ocean and the sand right outside your room.",
    image:
      "https://th.bing.com/th?id=OIP.FtudhIBH-HYhxMpS4TU-sAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  },
];

export default function Products() {
  let router = useRouter();
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        Cottage Categories
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white rounded-lg shadow-lg p-4 hover:transform hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={hotel.image}
              alt={hotel.title}
              width={300}
              height={200}
              className="rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {hotel.title}
            </h2>
            <p className="text-gray-600 mb-4">{hotel.description}</p>

            {/* Price and Book Now Section */}
            <div className="flex items-center justify-between">
              {/* Price */}
              <p className="text-lg font-semibold text-gray-800">
                $199 <span className="text-gray-600 text-sm">/ night</span>
              </p>

              {/* Book Now Button */}
              <button
                onClick={() => {
                  router.push("/pages/details");
                }}
                className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
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
