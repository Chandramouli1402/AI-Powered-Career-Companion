// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, update } from "firebase/database";  // Use update() to avoid overwriting data

// 🔹 Firebase configuration (Replace with your actual config)
const firebaseConfig = {
    apiKey: "AIzaSyCc9qZuTo0PkwIWoQUlhBjpNjc3ENQGTZc",
    authDomain: "ai-powered-career-companion.firebaseapp.com",
    databaseURL: "https://ai-powered-career-companion-default-rtdb.firebaseio.com",
    projectId: "ai-powered-career-companion",
    storageBucket: "ai-powered-career-companion.appspot.com",
    messagingSenderId: "754113344498",
    appId: "1:754113344498:web:60cadb85b008b99382716b",
    measurementId: "G-B4ML4P5DSZ"
};

// 🔹 Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

/**
 * 🔹 Function to save resume link in Firebase without overwriting existing data.
 * @param {string} userId - The user's unique ID.
 * @param {string} link - The resume download URL.
 */
export const saveResumeLink = async (userId, link) => {
    if (!userId || !link) {
        console.error("❌ Error: User ID and resume link are required.");
        return;
    }

    try {
        const updateData = {
            resume: link,
            resumeTimestamp: Date.now(),  // Store the upload time
        };

        // 🔹 Use update() to prevent overwriting other user data
        await update(ref(db, `users/${userId}`), updateData);
        console.log("✅ Resume link saved successfully.");
    } catch (error) {
        console.error("❌ Firebase save error:", error);
    }
};

export { app, auth, db };
