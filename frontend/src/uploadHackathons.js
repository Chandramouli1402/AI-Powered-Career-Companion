import { dbFirestore } from "./firebase-config";
import { collection, addDoc } from "firebase/firestore"; 

const  hackathonData = [
        {
            "title": "Smart India Hackathon 2025",
            "dates": "August–September 2025",
            "month": "August",
            "location": "India",
            "format": "In-Person",
            "prizes": "₹1,00,000 (First), ₹75,000 (Second), ₹50,000 (Third)",
            "link": "https://cse.noticebard.com/hackathon/upcoming-hackathon-2025-in-india/"
        },
        {
            "title": "Google Girl Hackathon 2025",
            "dates": "March–April 2025",
            "month": "March",
            "location": "Online",
            "format": "Virtual",
            "prizes": "N/A",
            "link": "https://cse.noticebard.com/hackathon/upcoming-hackathon-2025-in-india/"
        },
        {
            "title": "HackWithInfy 2025",
            "dates": "To be announced",
            "month": "TBA",
            "location": "Online",
            "format": "Virtual",
            "prizes": "Internships & Job Offers",
            "link": "https://www.infosys.com/careers/hackwithinfy.html"
        },
        {
            "title": "HACKHAZARDS '25",
            "dates": "April 4–13, 2025",
            "month": "April",
            "location": "Online",
            "format": "Virtual",
            "prizes": "₹5,00,000+ in cash & $100,000+ in rewards",
            "link": "https://hackhazards25.devfolio.co/overview"
        },
        {
            "title": "Hack This Fall 2025",
            "dates": "March 21–23, 2025",
            "month": "March",
            "location": "India",
            "format": "In-Person",
            "prizes": "N/A",
            "link": "https://hackthisfall.devfolio.co/"
        },
        {
            "title": "NMIT Hacks 2025",
            "dates": "May 16–18, 2025",
            "month": "May",
            "location": "Bangalore, India",
            "format": "In-Person",
            "prizes": "N/A",
            "link": "https://nmithacks.com/"
        },
        {
            "title": "CODE RED'25 Hackathon",
            "dates": "January 9–10, 2025",
            "month": "January",
            "location": "Bangalore, India",
            "format": "Hybrid",
            "prizes": "N/A",
            "link": "https://ecell-bmsit.github.io/codered25/"
        },
        {
            "title": "InnovateYou Techathon 2025",
            "dates": "To be announced",
            "month": "TBA",
            "location": "Pune, Maharashtra",
            "format": "In-Person",
            "prizes": "₹4,00,000+ in cash",
            "link": "https://innovateyou.in/hackathon/"
        },
        {
            "title": "Code Kshetra 2.0",
            "dates": "February 21–23, 2025",
            "month": "February",
            "location": "New Delhi, India",
            "format": "In-Person",
            "prizes": "₹1,00,00,000+",
            "link": "https://code-kshetra-2.devfolio.co/"
        },
        {
            "title": "Cognizance 2025",
            "dates": "March 21–23, 2025",
            "month": "March",
            "location": "IIT Roorkee, Uttarakhand",
            "format": "In-Person",
            "prizes": "N/A",
            "link": "https://en.wikipedia.org/wiki/Cognizance,_IIT_Roorkee"
        },
        {
            "title": "Techkriti 2025",
            "dates": "March 27–31, 2025",
            "month": "March",
            "location": "IIT Kanpur, Uttar Pradesh",
            "format": "In-Person",
            "prizes": "N/A",
            "link": "https://en.wikipedia.org/wiki/Techkriti"
        },
        {
            "title": "KU Hackathon 25",
            "dates": "February 13, 2025",
            "month": "February",
            "location": "India",
            "format": "In-Person",
            "prizes": "N/A",
            "link": "https://www.airmeet.com/hub/blog/famous-hackathons-of-india/"
        },
        {
            "title": "Prayagraj Mahakumbh 2025 Hackathon",
            "dates": "January–March 2025",
            "month": "January",
            "location": "Prayagraj, India",
            "format": "In-Person",
            "prizes": "N/A",
            "link": "https://cse.noticebard.com/hackathon/upcoming-hackathon-2025-in-india/"
        },
        {
            "title": "IBM Call for Code Hackathon 2025",
            "dates": "To be announced",
            "month": "TBA",
            "location": "Global",
            "format": "Online",
            "prizes": "N/A",
            "link": "https://www.airmeet.com/hub/blog/famous-hackathons-of-india/"
        },
        {
            "title": "Pragyan Hackathon 2025",
            "dates": "January 25–26, 2025",
            "month": "January",
            "location": "Bangalore, India",
            "format": "Offline",
            "prizes": "₹2.25+ Lakhs, internships, project incubation",
            "link": "https://pragyan.org/hackathon/"
        }
];

/*Upload hackathons to Firestore*/
export const uploadHackathons = async () => {
    try {
        const hackathonsCollection = collection(dbFirestore, "hackathons");

        for (const hackathon of hackathonData) {
            await addDoc(hackathonsCollection, hackathon);
            console.log(`✅ Uploaded: ${hackathon.title}`);
        }
        
        console.log("🎉 All hackathons uploaded successfully!");
    } catch (error) {
        console.error("❌ Error uploading hackathons:", error);
    }
};

