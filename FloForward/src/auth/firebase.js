// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5QfX7Sposvh_t7Y--sW99C4UTr-JFQKo",
  authDomain: "floforward-auth.firebaseapp.com",
  projectId: "floforward-auth",
  storageBucket: "floforward-auth.appspot.com",
  messagingSenderId: "651640775252",
  appId: "1:651640775252:web:d9e207e6d8018fa8c6c3c1",
  measurementId: "G-PERGL68VF8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);