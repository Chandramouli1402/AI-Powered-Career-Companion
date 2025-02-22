// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, update } from "firebase/database";  // Realtime Database
import { getFirestore, collection, addDoc } from "firebase/firestore";  // Firestore

// 🔹 Firebase configuration (Replace with your actual credentials)
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
const dbRealtime = getDatabase(app);  // Realtime Database
const dbFirestore = getFirestore(app);  // Firestore Database

/**
 * 🔹 Save resume link in Firebase Realtime Database without overwriting other data.
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
        await update(ref(dbRealtime, `users/${userId}`), updateData);
        console.log("✅ Resume link saved successfully.");
    } catch (error) {
        console.error("❌ Firebase save error:", error);
    }
};

/**
 * 🔹 Upload multiple courses to Firestore Database.
 * @param {Array} courses - List of course objects to upload.
 */
export const uploadCourses = async (courses) => {
    if (!Array.isArray(courses) || courses.length === 0) {
        console.error("❌ Error: Invalid course list.");
        return;
    }

    try {
        const coursesRef = collection(dbFirestore, "courses"); // Firestore collection reference
        for (let course of courses) {
            await addDoc(coursesRef, course);
            console.log(`✅ Uploaded: ${course.title}`);
        }
        console.log("🎉 All courses uploaded successfully!");
    } catch (error) {
        console.error("❌ Error uploading courses:", error);
    }
};

// 🔹 Export required Firebase instances
export { app, auth, dbRealtime, dbFirestore };
