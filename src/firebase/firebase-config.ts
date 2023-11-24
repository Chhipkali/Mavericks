// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAGOhaJ7d_CWdYSHi62f6xyYQ-X1nWjZhc",
  authDomain: "cipherx-e3311.firebaseapp.com",
  projectId: "cipherx-e3311",
  storageBucket: "cipherx-e3311.appspot.com",
  messagingSenderId: "688336221880",
  appId: "1:688336221880:web:d78f0763d3907fc76e264d"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export default app;
