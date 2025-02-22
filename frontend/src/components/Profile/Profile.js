import React, { useState, useEffect } from "react";
import { dbRealtime } from "../../firebase-config"; // ✅ Correct Firebase import
import { ref, set, get } from "firebase/database"; // ✅ Correct Firebase functions
import { getAuth, onAuthStateChanged } from "firebase/auth"; // ✅ Firebase Auth
import "./Profile.css"; // Import styles

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    degree: "",
    college: "",
    skills: "",
  });

  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ✅ Check user authentication
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        console.log("User not authenticated.");
        setUserId(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (userId) {
      const fetchUserData = async () => {
        try {
          const userRef = ref(dbRealtime, `users/${userId}`); // ✅ Use dbRealtime
          const snapshot = await get(userRef);
          if (snapshot.exists()) {
            setUser(snapshot.val());
          } else {
            console.log("No data available for the user.");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchUserData();
    }
  }, [userId]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    if (userId) {
      const userRef = ref(dbRealtime, `users/${userId}`); // ✅ Use dbRealtime
      try {
        await set(userRef, user);
        alert("Profile updated successfully!");
      } catch (error) {
        console.error("Error updating profile: ", error);
        alert("Failed to update profile!");
      }
    } else {
      alert("User not authenticated!");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Profile Page</h2>
      <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Name" />
      <input type="text" name="degree" value={user.degree} onChange={handleChange} placeholder="Degree" />
      <input type="text" name="college" value={user.college} onChange={handleChange} placeholder="College" />
      <input type="text" name="skills" value={user.skills} onChange={handleChange} placeholder="Skills" />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Profile;
