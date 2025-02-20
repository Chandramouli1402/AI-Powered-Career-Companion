import React, { useState, useCallback } from "react";
import axios from "axios";
import { auth } from "../../firebase-config";
import { saveResumeLink } from "../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";

const UploadResume = () => {
    const [file, setFile] = useState(null);
    const [resumeText, setResumeText] = useState("");
    const [uploading, setUploading] = useState(false);
    const [resumeLink, setResumeLink] = useState("");
    const [jobRecommendations, setJobRecommendations] = useState([]);
    const [error, setError] = useState("");
    const [progress, setProgress] = useState("");

    const updateProgress = useCallback((message) => {
        setProgress(message);
        console.log(message);
    }, []);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile && selectedFile.type !== "application/pdf") {
            setError("Please upload a PDF file");
            return;
        }
        setFile(selectedFile);
        setError("");
        setProgress("");
    };

    const handleUpload = async () => {
        if (!file) {
            setError("Please select a file first!");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            setUploading(true);
            setError("");
            setProgress("");
            setJobRecommendations([]);

            updateProgress("Uploading resume...");
            const uploadResponse = await axios.post(
                "http://localhost:5000/upload",
                formData,
                { headers: { "Content-Type": "multipart/form-data" }, timeout: 30000 }
            );

            const resumeUrl = uploadResponse.data.url;
            const extractedText = uploadResponse.data.text;
            if (!extractedText) {
                throw new Error("Could not extract text from the PDF");
            }

            setResumeText(extractedText);
            setResumeLink(resumeUrl);
            updateProgress("Resume uploaded successfully!");

            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    try {
                        await saveResumeLink(user.uid, resumeUrl);
                        updateProgress("Resume saved to your profile!");
                    } catch (error) {
                        console.error("Firebase save error:", error);
                    }
                }
            });

            await fetchJobRecommendations(extractedText);

        } catch (error) {
            console.error("Error during upload:", error);
            setError(error.response?.data?.error || error.message || "Failed to process resume");
        } finally {
            setUploading(false);
        }
    };

    const fetchJobRecommendations = async (text = resumeText) => {
        if (!text || text.trim() === "") {
            setError("Please enter or upload a resume.");
            return;
        }

        console.log("Sending resume text for analysis:", text);

        try {
            setProgress("Analyzing your resume...");
            const response = await axios.post(
                "http://localhost:5000/recommend-jobs",
                { resume: text.trim() },
                { headers: { "Content-Type": "application/json" }, timeout: 30000 }
            );

            if (response.data.recommendations?.length) {
                setJobRecommendations(response.data.recommendations);
                updateProgress("Analysis complete!");
            } else {
                throw new Error("No recommendations received");
            }
        } catch (error) {
            console.error("Analysis Error:", error);
            setError(error.response?.data?.error || error.message || "Failed to analyze resume");
        }
    };

    return (
        <div className="container mx-auto px-6 py-10 max-w-3xl bg-white shadow-md rounded-lg">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">AI-Powered Resume Reviewer</h2>

            {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}
            {progress && <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-4">{progress}</div>}

            <div className="mb-6">
                <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="block w-full text-sm text-gray-600 file:mr-4 file:py-3 file:px-5 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200 cursor-pointer"
                />
            </div>

            <button
                onClick={handleUpload}
                disabled={uploading || !file}
                className={`w-full py-3 rounded-lg font-semibold text-white transition duration-200 ${uploading || !file ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-700"}`}
            >
                {uploading ? "Processing..." : "Upload Resume"}
            </button>

            {resumeLink && (
                <div className="mt-6 p-4 bg-green-100 rounded-lg text-center">
                    <p className="text-green-700 font-semibold mb-2">✅ Resume Uploaded Successfully!</p>
                    <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                        View Resume
                    </a>
                </div>
            )}

            {jobRecommendations.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">💼 Recommended Job Roles:</h3>
                    <div className="space-y-3">
                        {jobRecommendations.map((recommendation, index) => (
                            <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md text-gray-700 font-medium">
                                {recommendation}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UploadResume;