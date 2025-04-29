// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBV8EFMHo-gY6nxTn-vC_MJlxfYxO1ep0",
  authDomain: "simple-firebase-auth-ff5ac.firebaseapp.com",
  projectId: "simple-firebase-auth-ff5ac",
  storageBucket: "simple-firebase-auth-ff5ac.firebasestorage.app",
  messagingSenderId: "618513480558",
  appId: "1:618513480558:web:e1cde0a7bd5e1ad6e5df7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);