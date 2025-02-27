import React from "react";
import UploadJobsButton from "./UploadJobsButton"; // ✅ Correct path

const UploadJobsPage = () => {
    return (
        <div>
            <h1>Job Listings</h1>
            <UploadJobsButton />
        </div>
    );
};

export default UploadJobsPage;
