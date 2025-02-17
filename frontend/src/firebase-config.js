// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";  // Import for Realtime Database

// Firebase configuration (replace with your Firebase project config)
const firebaseConfig = {
    apiKey: "AIzaSyCc9qZuTo0PkwIWoQUlhBjpNjc3ENQGTZc",
    authDomain: "ai-powered-career-companion.firebaseapp.com",
    projectId: "ai-powered-career-companion",
    storageBucket: "ai-powered-career-companion.firebasestorage.app",
    messagingSenderId: "754113344498",
    appId: "1:754113344498:web:60cadb85b008b99382716b",
    measurementId: "G-B4ML4P5DSZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Firebase Realtime Database
const db = getDatabase(app);

export { auth, db };  // Export both 'auth' and 'db'
