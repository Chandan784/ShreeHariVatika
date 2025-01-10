"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-xl">
              ShreeHariVatika
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link
              href="/"
              className={`text-white px-3 py-2 rounded-md text-sm font-medium ${router.pathname === "/" ? "bg-blue-700" : ""}`}
            >
              Home
            </Link>
            <Link
              href="pages/about"
              className={`text-white px-3 py-2 rounded-md text-sm font-medium ${router.pathname === "pages/about" ? "bg-blue-700" : ""}`}
            >
              About
            </Link>
            <Link
              href="pages/contact"
              className={`text-white px-3 py-2 rounded-md text-sm font-medium ${router.pathname === "pages/contact" ? "bg-blue-700" : ""}`}
            >
              Contact
            </Link>
            <Link
              href="pages/login"
              className={`text-white px-3 py-2 rounded-md text-sm font-medium ${router.pathname === "/login" ? "bg-blue-700" : ""}`}
            >
              Login
            </Link>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <Link
              href="/"
              className={`block text-white px-3 py-2 rounded-md text-base font-medium ${router.pathname === "/" ? "bg-blue-700" : ""}`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`block text-white px-3 py-2 rounded-md text-base font-medium ${router.pathname === "pages/about" ? "bg-blue-700" : ""}`}
            >
              About
            </Link>

            <Link
              href="pages/contact"
              className={`block text-white px-3 py-2 rounded-md text-base font-medium ${router.pathname === "pages/contact" ? "bg-blue-700" : ""}`}
            >
              Contact
            </Link>

            <Link
              href="pages/login"
              className={`block text-white px-3 py-2 rounded-md text-base font-medium ${router.pathname === "pages/login" ? "bg-blue-700" : ""}`}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
