import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, update, get, push, set } from "firebase/database"; // Realtime Database
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore"; // Firestore


//Firebase configuration
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

//Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const dbRealtime = getDatabase(app); // Realtime Database
const dbFirestore = getFirestore(app); // Firestore Database

/* Fetch user profile data from Firebase Realtime Database.*/
export const fetchUserProfile = async (userId) => {
    if (!userId) {
        console.error("Error: User ID is required to fetch profile data.");
        return null;
    }

    try {
        const userRef = ref(dbRealtime, `users/${userId}`);
        const snapshot = await get(userRef);
        return snapshot.exists() ? snapshot.val() : null;
    } catch (error) {
        console.error("Error fetching user profile:", error);
        return null;
    }
};

/*Fetch all courses from Firestore.*/
export const fetchCourses = async () => {
    try {
        const coursesRef = collection(dbFirestore, "courses");
        const querySnapshot = await getDocs(coursesRef);
        return querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(), 
        }));
    } catch (error) {
        console.error("Error fetching courses:", error);
        return [];
    }
};

/* Update user profile data in Firebase Realtime Database.*/
export const updateUserProfile = async (userId, updatedData) => {
    if (!userId || !updatedData) {
        console.error("Error: User ID and profile data are required.");
        return;
    }

    try {
        const userRef = ref(dbRealtime, `users/${userId}`);
        await update(userRef, updatedData);
        console.log("Profile updated successfully.");
    } catch (error) {
        console.error("Error updating profile:", error);
    }
};

/*Save resume link in Firebase Realtime Database.*/
export const saveResumeLink = async (userId, link) => {
    if (!userId || !link) {
        console.error("Error: User ID and resume link are required.");
        return;
    }

    try {
        const updateData = { resume: link, resumeTimestamp: Date.now() };
        await update(ref(dbRealtime, `users/${userId}`), updateData);
        console.log("Resume link saved successfully.");
    } catch (error) {
        console.error("Firebase save error:", error);
    }
};

/*Upload multiple courses to Firestore Database.*/
export const uploadCourses = async (courses) => {
    if (!Array.isArray(courses) || courses.length === 0) {
        console.error("Error: Invalid course list.");
        return;
    }

    try {
        const coursesRef = collection(dbFirestore, "courses");
        for (let course of courses) {
            await addDoc(coursesRef, course);
            console.log(`Uploaded: ${course.title}`);
        }
        console.log("All courses uploaded successfully!");
    } catch (error) {
        console.error("Error uploading courses:", error);
    }
};

/* Save a question to Firebase Realtime Database.*/
export const saveQuestion = async (userId, questionText) => {
    if (!userId || !questionText) {
        console.error("Error: User ID and question are required.");
        return;
    }

    try {
        const questionsRef = ref(dbRealtime, "questions");
        const newQuestionRef = push(questionsRef);

        await set(newQuestionRef, {
            question: questionText,
            userId,
            timestamp: Date.now(),
            answers: []
        });

        console.log("Question saved successfully.");
    } catch (error) {
        console.error("Error saving question:", error);
    }
};

/* Fetch all questions from Firebase Realtime Database.*/
export const fetchQuestions = async () => {
    try {
        const questionsRef = ref(dbRealtime, "questions");
        const snapshot = await get(questionsRef);
        return snapshot.exists() ? snapshot.val() : {}; // Return data if exists, else empty object
    } catch (error) {
        console.error("Error fetching questions:", error);
        return {};
    }
};


//Export Firebase instances
export { app, auth, dbRealtime, dbFirestore };
