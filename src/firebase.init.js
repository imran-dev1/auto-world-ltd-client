// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfhEP9AdzBQ76T92aVRL9UfUYGrzp9Tuw",
  authDomain: "auto-world-65df7.firebaseapp.com",
  projectId: "auto-world-65df7",
  storageBucket: "auto-world-65df7.appspot.com",
  messagingSenderId: "496733107935",
  appId: "1:496733107935:web:cbcd9134ab4e9356c91b6a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
