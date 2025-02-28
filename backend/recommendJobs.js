require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function recommendJobs(resumeText) {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

        // Force JSON response
        const prompt = `Analyze the following resume and suggest 3 full-time job roles that best match the skills and experience.
        Do NOT recommend internship roles.
        Only suggest full-time positions.
        Resume: ${resumeText}
        Respond ONLY with a valid JSON array like:
        ["Software Engineer", "Data Analyst", "Backend Developer"].
        Do NOT include any additional text or explanation.`;

        const response = await model.generateContent({ contents: [{ role: "user", parts: [{ text: prompt }] }] });

        // Check raw response
        const text = response.response.text();
        console.log("Raw API Response:", text); 

        // Attempt to parse JSON
        let jobRecommendations;
        try {
            jobRecommendations = JSON.parse(text.trim()); 
        } catch (error) {
            console.error("JSON parsing error:", error);
            jobRecommendations = ["Software Engineer", "Data Analyst", "Backend Developer"];
        }

        return jobRecommendations;
    } catch (error) {
        console.error("Gemini AI Error:", error);
        return ["Error fetching job recommendations"];
    }
}

module.exports = recommendJobs;
