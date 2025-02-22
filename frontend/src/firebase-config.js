import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, update, get } from "firebase/database"; // Realtime Database for user profiles
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore"; // Firestore for courses

// 🔹 Firebase configuration
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
const dbRealtime = getDatabase(app); // Realtime Database for user profiles
const dbFirestore = getFirestore(app); // Firestore for courses

/**
 * 🔹 Fetch user profile data from Firebase Realtime Database.
 * @param {string} userId - The user's unique ID.
 * @returns {Promise<Object|null>} - User profile data or null if not found.
 */
export const fetchUserProfile = async (userId) => {
    if (!userId) {
        console.error("❌ Error: User ID is required to fetch profile data.");
        return null;
    }

    try {
        const userRef = ref(dbRealtime, `users/${userId}`);
        const snapshot = await get(userRef);
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            console.warn("⚠️ No profile data found for user:", userId);
            return null;
        }
    } catch (error) {
        console.error("❌ Error fetching user profile:", error);
        return null;
    }
};

/**
 * 🔹 Update user profile data in Firebase Realtime Database.
 * @param {string} userId - The user's unique ID.
 * @param {Object} updatedData - The user profile data to update.
 */
export const updateUserProfile = async (userId, updatedData) => {
    if (!userId || !updatedData) {
        console.error("❌ Error: User ID and profile data are required.");
        return;
    }

    try {
        const userRef = ref(dbRealtime, `users/${userId}`);
        await update(userRef, updatedData); // Use update() to prevent overwriting other fields
        console.log("✅ Profile updated successfully.");
    } catch (error) {
        console.error("❌ Error updating profile:", error);
    }
};

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
            resumeTimestamp: Date.now(), // Store the upload time
        };

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
        const coursesRef = collection(dbFirestore, "courses");
        for (let course of courses) {
            await addDoc(coursesRef, course);
            console.log(`✅ Uploaded: ${course.title}`);
        }
        console.log("🎉 All courses uploaded successfully!");
    } catch (error) {
        console.error("❌ Error uploading courses:", error);
    }
};

/**
 * 🔹 Fetch all courses from Firestore.
 * @returns {Promise<Array>} - List of course objects.
 */
export const fetchCourses = async () => {
    try {
        const coursesRef = collection(dbFirestore, "courses");
        const querySnapshot = await getDocs(coursesRef);
        const courses = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(), // 🔥 Directly retrieve all fields
        }));
        console.log("✅ Courses fetched successfully!", courses);
        return courses;
    } catch (error) {
        console.error("❌ Error fetching courses:", error);
        return [];
    }
};
// 🔹 Export Firebase instances and functions
export { app, auth, dbRealtime, dbFirestore };
