// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdshSQnPt5v6bjXXky7TgRuBU82B9pfp8",
  authDomain: "skyfire-news.firebaseapp.com",
  projectId: "skyfire-news",
  storageBucket: "skyfire-news.firebasestorage.app",
  messagingSenderId: "116942164668",
  appId: "1:116942164668:web:5344edeae41cfdf3ab36b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;