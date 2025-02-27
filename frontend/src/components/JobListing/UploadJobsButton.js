import React from "react";
import { uploadJobs } from "../../uploadJobs"; // ✅ Correct import

const UploadJobsButton = () => {
    return (
        <button 
            onClick={uploadJobs} 
            style={{
                padding: "10px 15px",
                fontSize: "16px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                margin: "10px"
            }}>
            Upload Jobs
        </button>
    );
};

export default UploadJobsButton;
