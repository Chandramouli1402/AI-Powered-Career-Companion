import React, { useEffect, useState } from "react";
import { dbFirestore } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import "./HackathonList.css"; 

const HackathonList = () => {
    const [hackathons, setHackathons] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState("All"); 

    useEffect(() => {
        const fetchHackathons = async () => {
            try {
                const hackathonsRef = collection(dbFirestore, "hackathons");
                const querySnapshot = await getDocs(hackathonsRef);
                const fetchedHackathons = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setHackathons(fetchedHackathons);
            } catch (error) {
                console.error("❌ Error fetching hackathons:", error);
            }
        };

        fetchHackathons();
    }, []);

    // Filter hackathons based on the "month" field
    const filteredHackathons = hackathons.filter((hackathon) => {
        if (selectedMonth === "All") return true;
        return hackathon.month === selectedMonth; 
    });

    return (
        <div className="hackathon-container">
            <h2>Hackathon List</h2>

            {/* Dropdown to select month */}
            <select
                className="hackathon-select"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
            >
                <option value="All">All</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
                <option value="TBA">TBA</option> 
            </select>

            <ul>
                {filteredHackathons.length > 0 ? (
                    filteredHackathons.map((hackathon) => (
                        <li key={hackathon.id} className="hackathon-item">
                            <strong>📢 {hackathon.title || "No Title"}</strong>
                            <p>📅 {hackathon.dates || "TBA"}</p>
                            <p>📍 {hackathon.location || "Online"}</p>
                            <p>🏆 Prizes: {hackathon.prizes ? hackathon.prizes : "N/A"}</p>
                            <a href={hackathon.link} target="_blank" rel="noopener noreferrer">
                                🔗 Visit
                            </a>
                        </li>
                    ))
                ) : (
                    <p>No hackathons available for {selectedMonth}.</p>
                )}
            </ul>
        </div>
    );
};

export default HackathonList;
