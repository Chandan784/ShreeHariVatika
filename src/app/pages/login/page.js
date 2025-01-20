"use client";

import { useState } from "react";
import { auth, db } from "@/app/firebase"; // Import Firebase services
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [message, setMessage] = useState("");
  const router = useRouter();

  const googleProvider = new GoogleAuthProvider();

  // Handle Google Login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Save user details to localStorage
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

      // Check if the user exists in Firestore (in the 'users' collection)
      const userRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        // User exists, redirect to dashboard
        router.push("/");
      } else {
        // User does not exist, prompt to complete sign-up
        setMessage("User does not exist. Please sign up.");
      }
    } catch (error) {
      console.error("Error logging in with Google:", error);
      setMessage("Google login failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <div className="text-center mt-4">
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-500 shadow-md mt-4"
          >
            Sign in with Google
          </button>
        </div>

        <div className="text-center mt-4">
          <p className="text-gray-700">
            Don’t have an account?{" "}
            <Link
              href="pages/signup"
              className="text-blue-600 hover:underline font-medium"
            >
              Sign up
            </Link>
          </p>
        </div>

        {message && <p className="text-center text-red-500 mt-4">{message}</p>}
      </div>
    </div>
  );
}
