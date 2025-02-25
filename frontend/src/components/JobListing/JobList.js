import React, { useEffect, useState } from "react";
import { dbFirestore } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import "./JobList.css"; 

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState("All");

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const jobsRef = collection(dbFirestore, "jobs");
                const querySnapshot = await getDocs(jobsRef);
                const fetchedJobs = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setJobs(fetchedJobs);
                console.log("✅ Jobs fetched:", fetchedJobs);
            } catch (error) {
                console.error("❌ Error fetching jobs:", error);
            }
        };

        fetchJobs();
    }, []);


    const filteredJobs = selectedLocation === "All"
        ? jobs
        : jobs.filter(job => (job.location || "").includes(selectedLocation)); 

    return (
        <div className="job-container">
            <h2 className="job-title">Job Listings</h2>

            {/* Location Filter */}
            <label className="filter-label">Filter by Location: </label>
            <select className="filter-select" onChange={(e) => setSelectedLocation(e.target.value)} value={selectedLocation}>
                <option value="All">All</option>
                <option value="Remote">Remote</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Hyderabad">Hyderabad</option>
            </select>

            <ul className="job-list">
                {filteredJobs.length > 0 ? (
                    filteredJobs.map((job) => (
                        <li key={job.id} className="job-item">
                            <strong>{job.role}</strong> at {job.company}
                            <span>Location: {job.location || "Not Specified"}</span>
                            <a href={job.applyLink} target="_blank" rel="noopener noreferrer">Apply Now</a>
                        </li>
                    ))
                ) : (
                    <p className="no-jobs">No jobs available for {selectedLocation}.</p>
                )}
            </ul>
        </div>
    );
};

export default JobList;
