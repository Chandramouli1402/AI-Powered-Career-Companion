import { dbFirestore } from "./firebase-config"; // ✅ Ensure correct path
import { collection, addDoc } from "firebase/firestore";
export const jobs = [
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
    },
    {
        company: "AccioJob x Indus Valley Partners",
        role: "MERN Developer",
        location: "Walk-in Drive",
        salary: "7.5 LPA+",
        applyLink: "https://links.acciojob.com/4i3va50"
    },
    {
        company: "Cognizant",
        role: "Associate – Projects",
        location: "Bangalore, India",
        salary: "4.2 LPA (Expected)",
        applyLink: "https://freshercareers.in/cognizant-off-campus-hiring/"
    },
    {
        company: "NatWest",
        role: "Quality Analyst",
        location: "Bangalore, India",
        applyLink: "https://freshercareers.in/natwest-off-campus/"
    },
    {
        company: "D. E. Shaw & Co",
        role: "All Positions in Software Development",
        location: "Hyderabad, Bengaluru, Gurugram",
        salary: "7 – 10 LPA (Expected)",
        applyLink: "https://freshercareers.in/d-e-shaw/"
    },
    {
        company: "AccioJob x Pratiti",
        role: "Software Engineer",
        location: "Walk-in Drive",
        salary: "5 LPA",
        applyLink: "https://links.acciojob.com/41pPRm4"
    },
    {
        company: "Microsoft",
        role: "Software Engineer",
        location: "Bangalore",
        salary: "Up to 15 LPA",
        applyLink: "https://pdlink.in/3XcjRzD"
    },
    {
        company: "Myntra",
        role: "Data Scientist",
        location: "Bengaluru",
        salary: "Up to 14 LPA",
        applyLink: "https://pdlink.in/4i6CVqJ"
    },
    {
        company: "GlobalLogic",
        role: "Associate Software Engineer",
        location: "Gurgaon",
        salary: "Up to 9 LPA",
        applyLink: "https://pdlink.in/3D2jyjS"
    },
    {
        company: "Infosys",
        role: "Customer Support – Voice Process",
        location: "Pune (Walk-in Drive on Feb 24 & 25, 2025)",
        applyLink: "https://pdlink.in/431KvPk"
    },
    {
        company: "Amazon",
        role: "ML Data Associate – II",
        location: "Hyderabad / Karnataka",
        salary: "Up to 6 LPA",
        applyLink: "https://pdlink.in/4hNnsvX"
    },
    {
        company: "Wipro",
        role: "IT Helpdesk",
        location: "Pune (Walk-in Drive)",
        salary: "3 – 3.5 LPA",
        applyLink: "https://pdlink.in/437lVwf"
    },
    {
        company: "American Express",
        role: "Analyst – Data Governance & Management",
        location: "Gurugram & Bengaluru (Hybrid)",
        salary: "Up to 10 LPA",
        applyLink: "https://pdlink.in/41qCiTo"
    },
    {
        company: "Physics Wallah",
        role: "Subject Matter Expert",
        location: "Work From Home",
        applyLink: "https://geeksgod.com/physics-wallah-work-from-home-jobs-subject-matter-expert-recruitment-2025/"
    },
    {
        company: "Go Desi",
        role: "Data Analyst Intern",
        location: "Remote",
        applyLink: "https://geeksgod.com/data-analyst-internship-opportunity-by-go-desi-any-bachelors-degree-holder-can-apply/"
    },
    {
        company: "NatWest",
        role: "Quality Analyst",
        location: "Bangalore",
        applyLink: "https://geeksgod.com/natwest-is-hiring-quality-analyst-bangalore-jobs-for-freshers-2025/"
    }
];

/**
 * 🔹 Upload jobs to Firestore
 */
export const uploadJobs = async () => {
    try {
        const jobsRef = collection(dbFirestore, "jobs");

        for (let job of jobs) {
            await addDoc(jobsRef, job);
            console.log(`✅ Job added: ${job.role} at ${job.company}`);
        }

        console.log("🎉 All jobs uploaded successfully!");
    } catch (error) {
        console.error("❌ Error uploading jobs:", error);
    }
};