// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrRPysdTUl5g4cEw00SXDXnckP7LZpo-8",
  authDomain: "jpsystems1-13940.firebaseapp.com",
  projectId: "jpsystems1-13940",
  storageBucket: "jpsystems1-13940.firebasestorage.app",
  messagingSenderId: "122849924864",
  appId: "1:122849924864:web:73bc68761e74600325c5e5",
  measurementId: "G-5LBDTZ98Z8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);