// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv8ZXcDU98aRs88o9Q1G-XNEnyXN3Vp-k",
  authDomain: "coffee-store-app-28f83.firebaseapp.com",
  projectId: "coffee-store-app-28f83",
  storageBucket: "coffee-store-app-28f83.firebasestorage.app",
  messagingSenderId: "969434591804",
  appId: "1:969434591804:web:37fdf8dc3c172819710939"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);