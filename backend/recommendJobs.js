require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function recommendJobs(resumeText) {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const prompt = `Analyze the following resume and suggest 3 job roles that best match the skills and experience:
        Resume: ${resumeText}
        Format the response as a JSON array, example: ["Software Engineer", "Data Analyst", "Backend Developer"]`;

        const response = await model.generateContent(prompt);
        const text = response.response.text();
        
        let jobRecommendations;
        try {
            jobRecommendations = JSON.parse(text);
        } catch (error) {
            console.error("JSON parsing error:", error);
            jobRecommendations = ["General IT Job"];
        }

        return jobRecommendations;
    } catch (error) {
        console.error("Gemini AI error:", error);
        return ["Error fetching job recommendations"];
    }
}

module.exports = recommendJobs;
