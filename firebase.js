// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA40zJeApihD23WzybNy78VEtzLSLxnQwk",
  authDomain: "gil-instagram-nextjs-app.firebaseapp.com",
  projectId: "gil-instagram-nextjs-app",
  storageBucket: "gil-instagram-nextjs-app.appspot.com",
  messagingSenderId: "289619394876",
  appId: "1:289619394876:web:6a149e77b55aa7001b5e39",
  measurementId: "G-1X9EJWMWZM"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
