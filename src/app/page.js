import Link from "next/link";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      {/* <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to the Hotel Booking App
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Book your stay with ease and comfort.
        </p>
        <Link href="pages/login" legacyBehavior>
          <a className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 shadow-lg">
            Get Started
          </a>
        </Link>
      </div> */}

      <Products />
      <Footer />
    </>
  );
}
