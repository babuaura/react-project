// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDyXuAt6e6e2CADX-NpVYnPuMFXvQFD1nQ",
    authDomain: "react-firebase-auth-2024-1397a.firebaseapp.com",
    projectId: "react-firebase-auth-2024-1397a",
    storageBucket: "react-firebase-auth-2024-1397a.appspot.com",
    messagingSenderId: "59714506106",
    appId: "1:59714506106:web:e70a1518b36913ff585ac3",
    measurementId: "G-RGHMY65EFY"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
//   const analytics = getAnalytics(app);