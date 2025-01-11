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
    beds: "no Beds",
    persons: "16 Persons",
    facilities: [
      "TV",
      "Blanket",
      "Pillow",
      "Room hitter",
      "Burn fire",
      "Breakfast",
      "Lunch",
      "Evening Snak",
      "Dinner",
      "Bathroom",
      "Hot water facility",
      "Morning Satsang",
      "Evening Bhajan and Kirtan",
      "Mattress",
      "Bedshit &towel",
      "Wifi",
      "CCTV Servinant",
      "Medical facilities",
      "food coat ",
    ],
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
    facilities: [
      "TV",
      "Blanket",
      "Pillow",
      "Room hitter",
      "Burn fire",
      "Breakfast",
      "Lunch",
      "Evening Snak",
      "Dinner",
      "Bathroom",
      "Hot water facility",
      "Morning Satsang",
      "Evening Bhajan and Kirtan",
      "Mattress",
      "Bedshit &towel",
      "Wifi",
      "CCTV Servinant",
      "Medical facilities",
      "food coat ",
    ],
  },
  {
    id: 3,
    title: "Customizable Cottage Tent",
    description: "Enjoy the finest amenities and exceptional service.",
    image:
      "https://th.bing.com/th/id/OIP.HOe41EiZMsFtnApO90vonQHaE8?w=241&h=181&c=7&r=0&o=5&pid=1.7",
    price: " As per requirement",
    beds: "Custom",
    persons: "",
    facilities: [
      "TV",
      "Blanket",
      "Pillow",
      "Room hitter",
      "Burn fire",
      "Breakfast",
      "Lunch",
      "Evening Snak",
      "Dinner",
      "Bathroom",
      "Hot water facility",
      "Morning Satsang",
      "Evening Bhajan and Kirtan",
      "Mattress",
      "Bedshit &towel",
      "Wifi",
      "CCTV Servinant",
      "Medical facilities",
      "food coat ",
    ],
  },
  {
    id: 4,
    title: "Luxury Vip Cottage",
    description: "Affordable comfort for your travel needs.",
    image:
      "https://th.bing.com/th/id/OIP.HOe41EiZMsFtnApO90vonQHaE8?w=241&h=181&c=7&r=0&o=5&pid=1.7",
    price: "21000",
    beds: "1 King Bed",
    persons: "upto 8 Persons",
    facilities: [
      "TV",
      "Blanket",
      "Pillow",
      "Room hitter",
      "Burn fire",
      "Breakfast",
      "Lunch",
      "Evening Snak",
      "Dinner",
      "Bathroom",
      "Hot water facility",
      "Morning Satsang",
      "Evening Bhajan and Kirtan",
      "Mattress",
      "Bedshit &towel",
      "Wifi",
      "CCTV Servinant",
      "Medical facilities",
      "food coat ",
    ],
  },
  {
    id: 5,
    title: "Vip Cottage",
    description: "Affordable comfort for your travel needs.",
    image:
      "https://th.bing.com/th/id/OIP.4gqnBJfd-azejQB6EX2O1gHaE8?w=292&h=195&c=7&r=0&o=5&pid=1.7",
    price: "11000",
    beds: "1 king Bed",
    persons: "upto 4 Persons",
    facilities: [
      "TV",
      "Blanket",
      "Pillow",
      "Room hitter",
      "Burn fire",
      "Breakfast",
      "Lunch",
      "Evening Snak",
      "Dinner",
      "Bathroom",
      "Hot water facility",
      "Morning Satsang",
      "Evening Bhajan and Kirtan",
      "Mattress",
      "Bedshit &towel",
      "Wifi",
      "CCTV Servinant",
      "Medical facilities",
      "food coat ",
    ],
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
            className="border border-gray-300 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between"
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
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
