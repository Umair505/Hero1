// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// DANGER: DO NOT PUSH CONFIG TO PUBLIC
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4YaS4F-C8_oGLhGiaJCQKHlCroKOfPwM",
  authDomain: "explore-email-password-auth.firebaseapp.com",
  projectId: "explore-email-password-auth",
  storageBucket: "explore-email-password-auth.firebasestorage.app",
  messagingSenderId: "908405392285",
  appId: "1:908405392285:web:bd50a5c68f633f960be574"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);