const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const extractTextFromPDF = require("./extractText");
const recommendJobs = require("./recommendJobs");

require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: "10mb" }));
app.use(cors());

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: "./uploads/",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});
const upload = multer({ storage });

app.get("/", (req, res) => {
    res.send("Backend is running...");
});

app.post("/upload", upload.single("file"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        const filePath = path.join(__dirname, "uploads", req.file.filename);
        const text = await extractTextFromPDF(filePath);

        if (!text) {
            return res.status(400).json({ error: "Failed to extract text" });
        }

        res.json({ url: `/uploads/${req.file.filename}`, text });
    } catch (error) {
        console.error("Upload error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.post("/recommend-jobs", async (req, res) => {
    try {
        console.log("Received request:", req.body);
        const { resume } = req.body;

        if (!resume || resume.trim() === "") {
            return res.status(400).json({ error: "Resume text is required" });
        }

        const recommendations = await recommendJobs(resume);
        res.json({ recommendations });
    } catch (error) {
        console.error("Recommendation error:", error);
        res.status(500).json({ error: "Failed to analyze resume" });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
