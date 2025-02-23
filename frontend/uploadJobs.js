const { dbFirestore } = require("./src/firebase-config"); // ✅ Change import to require
const { collection, addDoc } = require("firebase/firestore");
const jobListings = [
    {
        company: "Parexel",
        role: "Customer Insights Analyst",
        education: "Bachelor’s Degree required",
        location: "Remote",
        applyLink: "https://pdlink.in/3XgcFCx"
    },
    {
        company: "KPMG",
        role: "Executive - AI/ML",
        education: "BTech/MTech/MSc/MCA",
        location: "Mumbai, Maharashtra",
        applyLink: "https://pdlink.in/4iaBw2I"
    },
    {
        company: "Amazon",
        role: "SDE-1 FTC",
        location: "Bangalore",
        applyLink: "https://lnkd.in/gPdJrJfu"
    },
    {
        company: "InvestCloud, Inc.",
        role: "Software Engineer (.Net)",
        location: "Bangalore",
        applyLink: "https://lnkd.in/gyfDYwkm"
    },
    {
        company: "Uber",
        role: "Data Scientist I, FinTech",
        location: "Hyderabad",
        applyLink: "https://lnkd.in/ggTYHCGe"
    },
    {
        company: "Zepto",
        role: "Data Engineer",
        applyLink: "https://lnkd.in/gW_n2_6u"
    },
    {
        company: "Myntra",
        role: "Software Engineer-Java Backend",
        location: "Bangalore",
        applyLink: "https://lnkd.in/..."
    }
];

/**
 * 🔹 Upload jobs to Firestore
 */
const uploadJobs = async () => {
    try {
        const jobsCollection = collection(dbFirestore, "jobs");

        for (const job of jobListings) {
            await addDoc(jobsCollection, job);
            console.log(`✅ Uploaded job: ${job.role} at ${job.company}`);
        }

        console.log("🎉 All jobs uploaded successfully!");
    } catch (error) {
        console.error("❌ Error uploading jobs:", error.message);
    }
};

// ✅ Use CommonJS export
module.exports = { uploadJobs };

// Run the function when the script is executed
uploadJobs();