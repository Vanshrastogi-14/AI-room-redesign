// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-room--redesign.firebaseapp.com",
  projectId: "ai-room--redesign",
  storageBucket: "ai-room--redesign.firebasestorage.app",
  messagingSenderId: "353086055322",
  appId: "1:353086055322:web:469b981cd8d940a0911023",
  measurementId: "G-4PFBS64158"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage =getStorage(app);
