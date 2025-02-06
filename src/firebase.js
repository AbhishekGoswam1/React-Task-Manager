import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk-A_oQENZrwbEyB1twWXJQ9CSAN_HcC4",
  authDomain: "react-task-manager-000.firebaseapp.com",
  projectId: "react-task-manager-000",
  storageBucket: "react-task-manager-000.firebasestorage.app",
  messagingSenderId: "787247077285",
  appId: "1:787247077285:web:2b8543b81a4634e6957a4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };