const fs = require("fs");
const pdfParse = require("pdf-parse");

async function extractTextFromPDF(filePath) {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const data = await pdfParse(dataBuffer);
        return data.text;
    } catch (error) {
        console.error("PDF extraction error:", error);
        return "";
    }
}

module.exports = extractTextFromPDF;
