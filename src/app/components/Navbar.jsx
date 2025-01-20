"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null); // Store user info
  const router = useRouter();

  useEffect(() => {
    // Check if user exists in localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Parse and set user data
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/"); // Redirect to home after logout
  };

  return (
    <nav className="bg-white shadow-lg text-black py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-xl">
              <Image
                src="/photos/logo3.png"
                className="object-cover"
                height={90}
                width={160}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link
              href="/"
              className={`text-black px-3 py-2 rounded-md text-sm font-medium ${
                router.pathname === "/" ? "bg-blue-700 text-white" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/pages/about"
              className={`text-black px-3 py-2 rounded-md text-sm font-medium ${
                router.pathname === "/pages/about"
                  ? "bg-blue-700 text-white"
                  : ""
              }`}
            >
              About
            </Link>
            <Link
              href="/pages/contact"
              className={`text-black px-3 py-2 rounded-md text-sm font-medium ${
                router.pathname === "/pages/contact"
                  ? "bg-blue-700 text-white"
                  : ""
              }`}
            >
              Contact
            </Link>
            <Link
              href="/pages/policy"
              className={`text-black px-3 py-2 rounded-md text-sm font-medium ${
                router.pathname === "/pages/policy"
                  ? "bg-blue-700 text-white"
                  : ""
              }`}
            >
              Policy
            </Link>
            {user ? (
              <Link
                href="/pages/myoder"
                className={`text-black px-3 py-2 rounded-md text-sm font-medium ${
                  router.pathname === "/pages/profile"
                    ? "bg-blue-700 text-white"
                    : ""
                }`}
              >
                Profile
              </Link>
            ) : (
              <button
                onClick={() => router.push("/pages/login")}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Login
              </button>
            )}
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-700 focus:outline-none"
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
              className={`block text-black px-3 py-2 rounded-md text-base font-medium ${
                router.pathname === "/" ? "bg-blue-700 text-white" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/pages/about"
              className={`block text-black px-3 py-2 rounded-md text-base font-medium ${
                router.pathname === "/pages/about"
                  ? "bg-blue-700 text-white"
                  : ""
              }`}
            >
              About
            </Link>
            <Link
              href="/pages/contact"
              className={`block text-black px-3 py-2 rounded-md text-base font-medium ${
                router.pathname === "/pages/contact"
                  ? "bg-blue-700 text-white"
                  : ""
              }`}
            >
              Contact
            </Link>
            <Link
              href="/pages/policy"
              className={`block text-black px-3 py-2 rounded-md text-base font-medium ${
                router.pathname === "/pages/policy"
                  ? "bg-blue-700 text-white"
                  : ""
              }`}
            >
              Policy
            </Link>
            {user ? (
              <>
                <Link
                  href="/profile"
                  className="block text-black px-3 py-2 rounded-md text-base font-medium"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left text-black px-3 py-2 rounded-md text-base font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => router.push("/pages/myoder")}
                className="block w-full text-left bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
