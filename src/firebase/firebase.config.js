// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/firestore');
require('dotenv').config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJG-_ComjJ2njuct9k-_BwgbIX8E2Qpjg",
  authDomain: "mangrove-hotel-70703.firebaseapp.com",
  projectId: "mangrove-hotel-70703",
  storageBucket: "mangrove-hotel-70703.appspot.com",
  messagingSenderId: "7241539716",
  appId: "1:7241539716:web:bc2e00081c9a12c6c7e2d1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Access Firebase services

const firestore = firebase.firestore();
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
