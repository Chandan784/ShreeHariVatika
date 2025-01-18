// Import necessary Firebase modules
import { initializeApp } from "firebase/app"; // Core Firebase app
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Firebase authentication and GoogleAuthProvider
import { getFirestore } from "firebase/firestore"; // Firebase Firestore database

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnywy_jgoNjYZfy6mqtugmMTqeLzJcnxM",
  authDomain: "shreeharivatika-a8b34.firebaseapp.com",
  projectId: "shreeharivatika-a8b34",
  storageBucket: "shreeharivatika-a8b34.firebaseapp.com",
  messagingSenderId: "457874846687",
  appId: "1:457874846687:web:02f6608fc2b54104bdca6a",
  measurementId: "G-06HNYWM2X5",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app); // Authentication
export const db = getFirestore(app); // Firestore database
export const googleProvider = new GoogleAuthProvider(); // Google Auth provider
