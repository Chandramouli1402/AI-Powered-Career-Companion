import React, { useState, useEffect } from "react";
import { db } from "../../firebase-config"; // Correct path to firebase-config
import { ref, set, get } from "firebase/database"; // Import necessary functions for reading and writing to DB
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Import Firebase Authentication functions
import './Profile.css'; // Import the Profile.css

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    degree: "",
    college: "",
    skills: "",
  });

  const [userId, setUserId] = useState(null); // Holds the authenticated user's ID
  const [loading, setLoading] = useState(true); // Loading state to handle loading data

  useEffect(() => {
    // Check if the user is authenticated when the component mounts
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // If the user is logged in, set the user ID
        setUserId(user.uid);
      } else {
        // If no user is logged in, you can redirect to login or show a message
        console.log("User not authenticated.");
        setUserId(null);
      }
      setLoading(false); // Set loading to false once authentication check is done
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (userId) {
      // Fetch user data from Firebase if userId is available
      const fetchUserData = async () => {
        try {
          const userRef = ref(db, 'users/' + userId); // Reference to the user's data in Realtime Database
          const snapshot = await get(userRef); // Fetch user data from Firebase
          if (snapshot.exists()) {
            setUser(snapshot.val()); // Set user data to state if it exists in the database
          } else {
            console.log("No data available for the user.");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchUserData(); // Call the function to fetch data
    }
  }, [userId]); // Run the effect when the userId changes

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    if (userId) {
      const userRef = ref(db, 'users/' + userId); // Reference to the user's data in the database
      try {
        await set(userRef, user); // Save the updated user data to Firebase
        alert("Profile updated successfully!");
      } catch (error) {
        console.error("Error updating profile: ", error);
        alert("Failed to update profile!");
      }
    } else {
      alert("User not authenticated!");
    }
  };

  // While loading the authentication state or fetching data, show loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Profile Page</h2>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="degree"
        value={user.degree}
        onChange={handleChange}
        placeholder="Degree"
      />
      <input
        type="text"
        name="college"
        value={user.college}
        onChange={handleChange}
        placeholder="College"
      />
      <input
        type="text"
        name="skills"
        value={user.skills}
        onChange={handleChange}
        placeholder="Skills"
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Profile;
