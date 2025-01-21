"use client";

import { useState } from "react";
import { auth, googleProvider, db } from "@/app/firebase";
import { signInWithPopup } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isPhoneInputVisible, setPhoneInputVisible] = useState(false);
  const [user, setUser] = useState(null); // Holds the authenticated user
  const [isExistingUser, setIsExistingUser] = useState(false); // Track if user is already in the system
  const router = useRouter();

  // Handle Google Login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Check if the user already exists in Firestore
      const userRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        setMessage("Welcome back!");
        setIsExistingUser(true); // Set flag for existing user
        // Store user data in localStorage
        localStorage.setItem(
          "user",
          JSON.stringify({
            uid: user.uid,
            name: user.displayName,
            email: user.email,
          })
        );
        router.push("/");
      } else {
        // Show phone number input for new users
        setUser(user); // Save the user details
        setPhoneInputVisible(true);
      }
    } catch (error) {
      console.error("Error logging in with Google:", error);
      setMessage("Google login failed. Please try again.");
    }
  };

  // Handle Phone Number Submission
  const handlePhoneNumberSubmit = async (e) => {
    e.preventDefault();

    if (!phoneNumber || !/^\d{10}$/.test(phoneNumber)) {
      setMessage("Please enter a valid 10-digit phone number.");
      return;
    }

    try {
      // Store user data in Firestore (add an empty orders array)
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, {
        name: user.displayName,
        email: user.email,
        phoneNumber,
        orders: [], // Add an empty orders array
        createdAt: new Date(),
      });

      // Save user data to localStorage after signup
      localStorage.setItem(
        "user",
        JSON.stringify({
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          phoneNumber,
          photoURL: user.photoURL,
        })
      );

      setMessage("Signup successful! Redirecting...");
      router.push("/"); // Redirect to homepage or dashboard
    } catch (error) {
      console.error("Error saving user data:", error);
      setMessage("Failed to complete signup. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

        {/* Google Sign-In Button */}
        {!isPhoneInputVisible && (
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-500 shadow-md mb-4"
          >
            Sign in with Google
          </button>
        )}

        {/* Phone Number Input */}
        {isPhoneInputVisible && (
          <form onSubmit={handlePhoneNumberSubmit}>
            <input
              type="text"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-500 shadow-md"
            >
              Complete Signup
            </button>
          </form>
        )}

        {/* Already have an account */}
        {!isPhoneInputVisible && (
          <div className="text-center mt-4">
            <p className="text-gray-700">Already have an account?</p>
            <button
              onClick={() => router.push("/pages/login")}
              className="w-full mt-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-500 shadow-md"
            >
              Login
            </button>
          </div>
        )}

        {/* Display Message */}
        {message && <p className="text-center text-red-500 mt-4">{message}</p>}
      </div>
    </div>
  );
}
