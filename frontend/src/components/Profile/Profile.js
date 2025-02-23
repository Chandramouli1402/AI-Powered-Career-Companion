import React, { useState, useEffect } from "react";
import { dbRealtime } from "../../firebase-config";
import { ref, set, get } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    degree: "",
    college: "",
    skills: "",
  });

  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [isNewUser, setIsNewUser] = useState(true); // Tracks if user has data

  useEffect(() => {
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
          const userRef = ref(dbRealtime, `users/${userId}`);
          const snapshot = await get(userRef);
          if (snapshot.exists()) {
            setUser(snapshot.val());
            setIsNewUser(false);
          } else {
            setIsNewUser(true);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
        setLoading(false);
      };

      fetchUserData();
    }
  }, [userId]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    if (userId) {
      const userRef = ref(dbRealtime, `users/${userId}`);
      try {
        await set(userRef, user);
        alert("Profile updated successfully!");
        setIsNewUser(false);
        setEditMode(false);
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
    <div className="profile-container">
      <h2>Profile Page</h2>
      {isNewUser || editMode ? (
        <>
          <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Name" />
          <input type="text" name="degree" value={user.degree} onChange={handleChange} placeholder="Degree" />
          <input type="text" name="college" value={user.college} onChange={handleChange} placeholder="College" />
          <input type="text" name="skills" value={user.skills} onChange={handleChange} placeholder="Skills" />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <div className="profile-details">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Degree:</strong> {user.degree}</p>
          <p><strong>College:</strong> {user.college}</p>
          <p><strong>Skills:</strong> {user.skills}</p>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
