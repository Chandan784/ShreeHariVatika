// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBnywy_jgoNjYZfy6mqtugmMTqeLzJcnxM",
//   authDomain: "shreeharivatika-a8b34.firebaseapp.com",
//   projectId: "shreeharivatika-a8b34",
//   storageBucket: "shreeharivatika-a8b34.firebasestorage.app",
//   messagingSenderId: "457874846687",
//   appId: "1:457874846687:web:02f6608fc2b54104bdca6a",
//   measurementId: "G-06HNYWM2X5",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnywy_jgoNjYZfy6mqtugmMTqeLzJcnxM",
  authDomain: "shreeharivatika-a8b34.firebaseapp.com",
  projectId: "shreeharivatika-a8b34",
  storageBucket: "shreeharivatika-a8b34.firebasestorage.app",
  messagingSenderId: "457874846687",
  appId: "1:457874846687:web:02f6608fc2b54104bdca6a",
  measurementId: "G-06HNYWM2X5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
