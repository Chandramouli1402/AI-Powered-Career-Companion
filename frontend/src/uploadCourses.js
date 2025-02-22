import { dbFirestore } from "./firebase-config.js";  // ✅ Correct import
import { collection, addDoc } from "firebase/firestore"; 


const courses = [
        {
          "courseid": "594120d3-1345-4f11-b840-c82cf2b68586",
          "title": "Machine Design Course 1",
          "platform": "Udemy",
          "price": "Free",
          "link": "https://www.udemy.com/course/machine-design-course-1",
          "category": "Mechanical Engineering"
        },
        {
          "courseid": "4050220f-6e33-410a-a106-787add24e8a1",
          "title": "Concrete Technology Course 2",
          "platform": "Coursera",
          "price": "Paid",
          "link": "https://www.coursera.com/course/concrete-technology-course-2",
          "category": "Civil Engineering"
        },
        {
          "courseid": "293939e0-fa06-4cbc-b42f-6ce7a25ecd78",
          "title": "Control Systems Course 3",
          "platform": "edX",
          "price": "Free",
          "link": "https://www.edx.com/course/control-systems-course-3",
          "category": "Electrical Engineering"
        },
        {
          "courseid": "7c632017-303c-466c-9280-223aafcf7d52",
          "title": "Data Structures Course 4",
          "platform": "Pluralsight",
          "price": "Paid",
          "link": "https://www.pluralsight.com/course/data-structures-course-4",
          "category": "Computer Science Engineering"
        },
        {
          "courseid": "015c6117-aedf-4bf2-8a4e-b101e7dbb0cd",
          "title": "Cloud Computing Course 5",
          "platform": "LinkedIn Learning",
          "price": "Free",
          "link": "https://www.linkedinlearning.com/course/cloud-computing-course-5",
          "category": "Information Technology"
        },
        {
          "courseid": "0af7b27c-655d-4da9-ab10-f4185f464ab5",
          "title": "VLSI Design Course 6",
          "platform": "Udemy",
          "price": "Paid",
          "link": "https://www.udemy.com/course/vlsi-design-course-6",
          "category": "Electronics and Communication Engineering"
        },
        {
          "courseid": "17df2086-2416-4e2d-a37e-bdfcef087a11",
          "title": "Deep Learning Course 7",
          "platform": "Coursera",
          "price": "Free",
          "link": "https://www.coursera.com/course/deep-learning-course-7",
          "category": "Artificial Intelligence & Machine Learning"
        },
        {
          "courseid": "6726dbc8-0fe9-47cc-a96d-eeb9436e200c",
          "title": "IoT Applications Course 8",
          "platform": "edX",
          "price": "Paid",
          "link": "https://www.edx.com/course/iot-applications-course-8",
          "category": "Robotics & Automation"
        },
        {
          "courseid": "7cd32491-84de-44d8-98ef-1d56f27c7511",
          "title": "Network Security Course 9",
          "platform": "Pluralsight",
          "price": "Free",
          "link": "https://www.pluralsight.com/course/network-security-course-9",
          "category": "Cybersecurity"
        },
        {
          "courseid": "228f9dbe-d08e-4591-8335-cc62c037aae0",
          "title": "Big Data Analytics Course 10",
          "platform": "LinkedIn Learning",
          "price": "Paid",
          "link": "https://www.linkedinlearning.com/course/big-data-analytics-course-10",
          "category": "Data Science & Analytics"
        },
        {
          "courseid": "c7ffe2d5-4162-476d-8573-5ff631da9953",
          "title": "Cryptocurrency Fundamentals Course 11",
          "platform": "Udemy",
          "price": "Free",
          "link": "https://www.udemy.com/course/cryptocurrency-fundamentals-course-11",
          "category": "Blockchain Technology"
        },
        {
          "courseid": "6000aa52-5079-425f-9ef5-84505d1210c6",
          "title": "Thermodynamics Course 12",
          "platform": "Coursera",
          "price": "Paid",
          "link": "https://www.coursera.com/course/thermodynamics-course-12",
          "category": "Mechanical Engineering"
        },
        {
          "courseid": "e5ee17c0-cf9f-4490-807f-f32f8cdfd0b4",
          "title": "Structural Analysis Course 13",
          "platform": "edX",
          "price": "Free",
          "link": "https://www.edx.com/course/structural-analysis-course-13",
          "category": "Civil Engineering"
        },
        {
          "courseid": "b00e8138-1e3b-4387-8b9a-ddd238ebe489",
          "title": "Electric Circuits Course 14",
          "platform": "Pluralsight",
          "price": "Paid",
          "link": "https://www.pluralsight.com/course/electric-circuits-course-14",
          "category": "Electrical Engineering"
        },
        {
          "courseid": "332f33a4-68d6-4e3a-89ad-f378864044b5",
          "title": "Artificial Intelligence Course 15",
          "platform": "LinkedIn Learning",
          "price": "Free",
          "link": "https://www.linkedinlearning.com/course/artificial-intelligence-course-15",
          "category": "Computer Science Engineering"
        },
        {
          "courseid": "75413cd0-e08b-4e76-8dbe-8865143c1b63",
          "title": "Cybersecurity Course 16",
          "platform": "Udemy",
          "price": "Paid",
          "link": "https://www.udemy.com/course/cybersecurity-course-16",
          "category": "Information Technology"
        },
        {
          "courseid": "9f244db1-0a97-486a-9857-ea47cfb8ec9a",
          "title": "Digital Signal Processing Course 17",
          "platform": "Coursera",
          "price": "Free",
          "link": "https://www.coursera.com/course/digital-signal-processing-course-17",
          "category": "Electronics and Communication Engineering"
        },
        {
          "courseid": "3f5fb571-4616-4b92-9048-562d1759be31",
          "title": "AI for Robotics Course 18",
          "platform": "edX",
          "price": "Paid",
          "link": "https://www.edx.com/course/ai-for-robotics-course-18",
          "category": "Artificial Intelligence & Machine Learning"
        },
        {
          "courseid": "62ef08cb-39ad-4492-9e8f-30fed1ef3f61",
          "title": "Industrial Robotics Course 19",
          "platform": "Pluralsight",
          "price": "Free",
          "link": "https://www.pluralsight.com/course/industrial-robotics-course-19",
          "category": "Robotics & Automation"
        },
        {
          "courseid": "842d9404-9f4c-468b-89a8-0fb0b1f3b12d",
          "title": "Cryptography Course 20",
          "platform": "LinkedIn Learning",
          "price": "Paid",
          "link": "https://www.linkedinlearning.com/course/cryptography-course-20",
          "category": "Cybersecurity"
        },
        {
          "courseid": "48a561bc-2f36-4c15-8df1-c3be99c34c9d",
          "title": "Predictive Modeling Course 21",
          "platform": "Udemy",
          "price": "Free",
          "link": "https://www.udemy.com/course/predictive-modeling-course-21",
          "category": "Data Science & Analytics"
        },
        {
          "courseid": "59a7cddc-073f-45e4-8c43-2aa1f8fb5f01",
          "title": "Smart Contracts Course 22",
          "platform": "Coursera",
          "price": "Paid",
          "link": "https://www.coursera.com/course/smart-contracts-course-22",
          "category": "Blockchain Technology"
        },
        {
          "courseid": "db714b17-25be-4a2c-83bd-836b63bd57fb",
          "title": "Manufacturing Processes Course 23",
          "platform": "edX",
          "price": "Free",
          "link": "https://www.edx.com/course/manufacturing-processes-course-23",
          "category": "Mechanical Engineering"
        },
        {
          "courseid": "0d2f44b6-6485-4f72-aa19-2f6946489aaa",
          "title": "Geotechnical Engineering Course 24",
          "platform": "Pluralsight",
          "price": "Paid",
          "link": "https://www.pluralsight.com/course/geotechnical-engineering-course-24",
          "category": "Civil Engineering"
        },
        {
          "courseid": "976dc091-93f8-4f54-8acb-acd749f72de5",
          "title": "Power Systems Course 25",
          "platform": "LinkedIn Learning",
          "price": "Free",
          "link": "https://www.linkedinlearning.com/course/power-systems-course-25",
          "category": "Electrical Engineering"
        },
        {
          "courseid": "ec6213c7-9b4d-46d4-9ae0-165c651833a1",
          "title": "Algorithms Course 26",
          "platform": "Udemy",
          "price": "Paid",
          "link": "https://www.udemy.com/course/algorithms-course-26",
          "category": "Computer Science Engineering"
        },
        {
          "courseid": "5f48f40d-f748-4955-87ae-f819ba17e0fe",
          "title": "Networking Fundamentals Course 27",
          "platform": "Coursera",
          "price": "Free",
          "link": "https://www.coursera.com/course/networking-fundamentals-course-27",
          "category": "Information Technology"
        },
        {
          "courseid": "c99fa1e8-9fc2-499e-9703-e404debbf853",
          "title": "Embedded Systems Course 28",
          "platform": "edX",
          "price": "Paid",
          "link": "https://www.edx.com/course/embedded-systems-course-28",
          "category": "Electronics and Communication Engineering"
        },
        {
          "courseid": "cb485278-b78e-4a7a-a0ca-692cc464bcb2",
          "title": "Natural Language Processing Course 29",
          "platform": "Pluralsight",
          "price": "Free",
          "link": "https://www.pluralsight.com/course/natural-language-processing-course-29",
          "category": "Artificial Intelligence & Machine Learning"
        },
        {
          "courseid": "184af8dc-9116-4e42-8559-3680a422c75c",
          "title": "Autonomous Systems Course 30",
          "platform": "LinkedIn Learning",
          "price": "Paid",
          "link": "https://www.linkedinlearning.com/course/autonomous-systems-course-30",
          "category": "Robotics & Automation"
        },
        {
          "courseid": "0201db72-34ad-4016-bb9f-4dabe6c79edd",
          "title": "Ethical Hacking Course 31",
          "platform": "Udemy",
          "price": "Free",
          "link": "https://www.udemy.com/course/ethical-hacking-course-31",
          "category": "Cybersecurity"
        },
        {
          "courseid": "5337ebc7-036a-43ab-9163-ae20883db9d3",
          "title": "Data Visualization Course 32",
          "platform": "Coursera",
          "price": "Paid",
          "link": "https://www.coursera.com/course/data-visualization-course-32",
          "category": "Data Science & Analytics"
        },
        {
          "courseid": "52b3e2cb-2657-4874-812d-f536913e45ea",
          "title": "Decentralized Applications Course 33",
          "platform": "edX",
          "price": "Free",
          "link": "https://www.edx.com/course/decentralized-applications-course-33",
          "category": "Blockchain Technology"
        },
        {
          "courseid": "68f8234a-f57e-4a69-86c9-f6888943c30c",
          "title": "Machine Design Course 34",
          "platform": "Pluralsight",
          "price": "Paid",
          "link": "https://www.pluralsight.com/course/machine-design-course-34",
          "category": "Mechanical Engineering"
        },
        {
          "courseid": "776831cf-7233-4b34-b902-b7a78d409207",
          "title": "Concrete Technology Course 35",
          "platform": "LinkedIn Learning",
          "price": "Free",
          "link": "https://www.linkedinlearning.com/course/concrete-technology-course-35",
          "category": "Civil Engineering"
        },
        {
          "courseid": "cf06ea71-e6d8-4cb5-87d7-958923a9ab6a",
          "title": "Control Systems Course 36",
          "platform": "Udemy",
          "price": "Paid",
          "link": "https://www.udemy.com/course/control-systems-course-36",
          "category": "Electrical Engineering"
        },
        {
          "courseid": "b4d7f999-2104-4da2-890d-f1484046801b",
          "title": "Data Structures Course 37",
          "platform": "Coursera",
          "price": "Free",
          "link": "https://www.coursera.com/course/data-structures-course-37",
          "category": "Computer Science Engineering"
        },
        {
          "courseid": "66788839-98eb-4eec-8689-e1f96ae82738",
          "title": "Cloud Computing Course 38",
          "platform": "edX",
          "price": "Paid",
          "link": "https://www.edx.com/course/cloud-computing-course-38",
          "category": "Information Technology"
        },
        {
          "courseid": "41f26564-eedf-42bf-a151-9490614ccba2",
          "title": "VLSI Design Course 39",
          "platform": "Pluralsight",
          "price": "Free",
          "link": "https://www.pluralsight.com/course/vlsi-design-course-39",
          "category": "Electronics and Communication Engineering"
        },
        {
          "courseid": "3c3562a1-0701-495c-bf03-afc516787877",
          "title": "Deep Learning Course 40",
          "platform": "LinkedIn Learning",
          "price": "Paid",
          "link": "https://www.linkedinlearning.com/course/deep-learning-course-40",
          "category": "Artificial Intelligence & Machine Learning"
        },
        {
          "courseid": "3804a149-6e57-4b75-823e-b8df74d2f99b",
          "title": "IoT Applications Course 41",
          "platform": "Udemy",
          "price": "Free",
          "link": "https://www.udemy.com/course/iot-applications-course-41",
          "category": "Robotics & Automation"
        },
        {
          "courseid": "f240a5f0-d35e-45ab-9a65-76ad38a7f722",
          "title": "Network Security Course 42",
          "platform": "Coursera",
          "price": "Paid",
          "link": "https://www.coursera.com/course/network-security-course-42",
          "category": "Cybersecurity"
        },
        {
          "courseid": "3314c656-0eea-464d-ac8e-17afa22e1a40",
          "title": "Big Data Analytics Course 43",
          "platform": "edX",
          "price": "Free",
          "link": "https://www.edx.com/course/big-data-analytics-course-43",
          "category": "Data Science & Analytics"
        },
        {
          "courseid": "fde6ae82-f84b-4da4-81bf-3652b8bd328f",
          "title": "Cryptocurrency Fundamentals Course 44",
          "platform": "Pluralsight",
          "price": "Paid",
          "link": "https://www.pluralsight.com/course/cryptocurrency-fundamentals-course-44",
          "category": "Blockchain Technology"
        },
        {
          "courseid": "9ce7b2a9-26e7-4305-8ad3-6eea7710fe8f",
          "title": "Thermodynamics Course 45",
          "platform": "LinkedIn Learning",
          "price": "Free",
          "link": "https://www.linkedinlearning.com/course/thermodynamics-course-45",
          "category": "Mechanical Engineering"
        },
        {
          "courseid": "4ff57f4e-c837-47d5-b830-784327689c4c",
          "title": "Structural Analysis Course 46",
          "platform": "Udemy",
          "price": "Paid",
          "link": "https://www.udemy.com/course/structural-analysis-course-46",
          "category": "Civil Engineering"
        },
        {
          "courseid": "f97e4458-f9b4-4dc9-bc0c-ad7126f2810e",
          "title": "Electric Circuits Course 47",
          "platform": "Coursera",
          "price": "Free",
          "link": "https://www.coursera.com/course/electric-circuits-course-47",
          "category": "Electrical Engineering"
        },
        {
          "courseid": "e4d10d40-7403-49e1-9caf-6022724a5bac",
          "title": "Artificial Intelligence Course 48",
          "platform": "edX",
          "price": "Paid",
          "link": "https://www.edx.com/course/artificial-intelligence-course-48",
          "category": "Computer Science Engineering"
        },
        {
          "courseid": "63b9b9b3-6fd9-4ac1-aa08-0012d3fba477",
          "title": "Cybersecurity Course 49",
          "platform": "Pluralsight",
          "price": "Free",
          "link": "https://www.pluralsight.com/course/cybersecurity-course-49",
          "category": "Information Technology"
        },
        {
          "courseid": "ef08a44e-0fdb-4445-b1f4-34f12d3f82dd",
          "title": "Digital Signal Processing Course 50",
          "platform": "LinkedIn Learning",
          "price": "Paid",
          "link": "https://www.linkedinlearning.com/course/digital-signal-processing-course-50",
          "category": "Electronics and Communication Engineering"
        },
        {
          "courseid": "7852eea1-2f1d-4aca-acdb-47aec529450c",
          "title": "AI for Robotics Course 51",
          "platform": "Udemy",
          "price": "Free",
          "link": "https://www.udemy.com/course/ai-for-robotics-course-51",
          "category": "Artificial Intelligence & Machine Learning"
        },
        {
          "courseid": "cceb1a2d-25af-48dc-b2d8-47defb87e2e8",
          "title": "Industrial Robotics Course 52",
          "platform": "Coursera",
          "price": "Paid",
          "link": "https://www.coursera.com/course/industrial-robotics-course-52",
          "category": "Robotics & Automation"
        },
        {
          "courseid": "228963ce-e2fd-41ae-9e2e-436e2b5a2e9a",
          "title": "Cryptography Course 53",
          "platform": "edX",
          "price": "Free",
          "link": "https://www.edx.com/course/cryptography-course-53",
          "category": "Cybersecurity"
        },
        {
          "courseid": "3c179e4e-a4c6-49c8-8169-523cdd7f71ee",
          "title": "Predictive Modeling Course 54",
          "platform": "Pluralsight",
          "price": "Paid",
          "link": "https://www.pluralsight.com/course/predictive-modeling-course-54",
          "category": "Data Science & Analytics"
        },
        {
          "courseid": "778466d4-2702-4d38-ac8e-0b6b17bdb2ad",
          "title": "Smart Contracts Course 55",
          "platform": "LinkedIn Learning",
          "price": "Free",
          "link": "https://www.linkedinlearning.com/course/smart-contracts-course-55",
          "category": "Blockchain Technology"
        },
        {
          "courseid": "2666bcee-8b09-4074-83c4-b79db9361b64",
          "title": "Manufacturing Processes Course 56",
          "platform": "Udemy",
          "price": "Paid",
          "link": "https://www.udemy.com/course/manufacturing-processes-course-56",
          "category": "Mechanical Engineering"
        },
        {
          "courseid": "7e452693-c404-4cf2-8db7-e2f25b2f8e55",
          "title": "Geotechnical Engineering Course 57",
          "platform": "Coursera",
          "price": "Free",
          "link": "https://www.coursera.com/course/geotechnical-engineering-course-57",
          "category": "Civil Engineering"
        },
        {
          "courseid": "cd66a3f4-8151-48a8-8a41-3e2334ea8600",
          "title": "Power Systems Course 58",
          "platform": "edX",
          "price": "Paid",
          "link": "https://www.edx.com/course/power-systems-course-58",
          "category": "Electrical Engineering"
        },
        {
          "courseid": "e2e1f6f3-c11a-4ab7-a644-cb501ee76306",
          "title": "Algorithms Course 59",
          "platform": "Pluralsight",
          "price": "Free",
          "link": "https://www.pluralsight.com/course/algorithms-course-59",
          "category": "Computer Science Engineering"
        },
        {
          "courseid": "850c659d-445c-4605-a011-0ecae266337c",
          "title": "Networking Fundamentals Course 60",
          "platform": "LinkedIn Learning",
          "price": "Paid",
          "link": "https://www.linkedinlearning.com/course/networking-fundamentals-course-60",
          "category": "Information Technology"
        },
        {
          "courseid": "5015ed78-4ce3-406b-aa6e-fa4459229519",
          "title": "Embedded Systems Course 61",
          "platform": "Udemy",
          "price": "Free",
          "link": "https://www.udemy.com/course/embedded-systems-course-61",
          "category": "Electronics and Communication Engineering"
        },
        {
          "courseid": "d8930515-c35a-4910-a34d-75d4ed73f3bc",
          "title": "Natural Language Processing Course 62",
          "platform": "Coursera",
          "price": "Paid",
          "link": "https://www.coursera.com/course/natural-language-processing-course-62",
          "category": "Artificial Intelligence & Machine Learning"
        },
        {
          "courseid": "8979714a-c489-48c7-88fd-8065fc587aff",
          "title": "Autonomous Systems Course 63",
          "platform": "edX",
          "price": "Free",
          "link": "https://www.edx.com/course/autonomous-systems-course-63",
          "category": "Robotics & Automation"
        },
        {
          "courseid": "6e7e5fe6-bded-4bf1-8bfb-0dcce60c3c2f",
          "title": "Ethical Hacking Course 64",
          "platform": "Pluralsight",
          "price": "Paid",
          "link": "https://www.pluralsight.com/course/ethical-hacking-course-64",
          "category": "Cybersecurity"
        },
        {
          "courseid": "5427ad61-99d4-40b7-927f-b23e679354c6",
          "title": "Data Visualization Course 65",
          "platform": "LinkedIn Learning",
          "price": "Free",
          "link": "https://www.linkedinlearning.com/course/data-visualization-course-65",
          "category": "Data Science & Analytics"
        },
        {
          "courseid": "c8ff9d71-54c3-45aa-b20c-2883dbc3f2a5",
          "title": "Decentralized Applications Course 66",
          "platform": "Udemy",
          "price": "Paid",
          "link": "https://www.udemy.com/course/decentralized-applications-course-66",
          "category": "Blockchain Technology"
        },
        {
          "courseid": "9d578743-502d-4cd8-af54-74fecf4d9116",
          "title": "Machine Design Course 67",
          "platform": "Coursera",
          "price": "Free",
          "link": "https://www.coursera.com/course/machine-design-course-67",
          "category": "Mechanical Engineering"
        },
        {
          "courseid": "2c0fc766-f57a-4a01-986f-5a0df80930a9",
          "title": "Concrete Technology Course 68",
          "platform": "edX",
          "price": "Paid",
          "link": "https://www.edx.com/course/concrete-technology-course-68",
          "category": "Civil Engineering"
        },
        {
          "courseid": "22133937-ec79-497c-b018-14d41e834cb6",
          "title": "Control Systems Course 69",
          "platform": "Pluralsight",
          "price": "Free",
          "link": "https://www.pluralsight.com/course/control-systems-course-69",
          "category": "Electrical Engineering"
        },
        {
          "courseid": "58f90ee7-826d-4b83-9e54-0e2451271b9e",
          "title": "Data Structures Course 70",
          "platform": "LinkedIn Learning",
          "price": "Paid",
          "link": "https://www.linkedinlearning.com/course/data-structures-course-70",
          "category": "Computer Science Engineering"
        },
        {
          "courseid": "772121b0-dfa0-41cb-996f-fadcfa66014b",
          "title": "Cloud Computing Course 71",
          "platform": "Udemy",
          "price": "Free",
          "link": "https://www.udemy.com/course/cloud-computing-course-71",
          "category": "Information Technology"
        },
        {
          "courseid": "d286d02c-8fb8-490a-ba6f-48b2f4234760",
          "title": "VLSI Design Course 72",
          "platform": "Coursera",
          "price": "Paid",
          "link": "https://www.coursera.com/course/vlsi-design-course-72",
          "category": "Electronics and Communication Engineering"
        },
        {
          "courseid": "10a9f1b4-a372-4e26-bfd6-b4f91559f0f0",
          "title": "Deep Learning Course 73",
          "platform": "edX",
          "price": "Free",
          "link": "https://www.edx.com/course/deep-learning-course-73",
          "category": "Artificial Intelligence & Machine Learning"
        },
        {
          "courseid": "d3972cf0-7836-4808-a799-7fde3fe3c96b",
          "title": "IoT Applications Course 74",
          "platform": "Pluralsight",
          "price": "Paid",
          "link": "https://www.pluralsight.com/course/iot-applications-course-74",
          "category": "Robotics & Automation"
        },
        {
          "courseid": "fe8c3ae7-4bf1-4af0-a735-f2eb2611babf",
          "title": "Network Security Course 75",
          "platform": "LinkedIn Learning",
          "price": "Free",
          "link": "https://www.linkedinlearning.com/course/network-security-course-75",
          "category": "Cybersecurity"
        },
        {
          "courseid": "cfd0a302-6f08-4152-8eec-23fb3b9afae7",
          "title": "Big Data Analytics Course 76",
          "platform": "Udemy",
          "price": "Paid",
          "link": "https://www.udemy.com/course/big-data-analytics-course-76",
          "category": "Data Science & Analytics"
        },
        {
          "courseid": "5bc53eb5-efa5-49e9-8592-1ce23af47fdd",
          "title": "Cryptocurrency Fundamentals Course 77",
          "platform": "Coursera",
          "price": "Free",
          "link": "https://www.coursera.com/course/cryptocurrency-fundamentals-course-77",
          "category": "Blockchain Technology"
        },
        {
          "courseid": "8d53a368-884f-49ef-b9ee-1f325748d49a",
          "title": "Thermodynamics Course 78",
          "platform": "edX",
          "price": "Paid",
          "link": "https://www.edx.com/course/thermodynamics-course-78",
          "category": "Mechanical Engineering"
        },
        {
          "courseid": "a240cb29-4461-453e-b12a-1e3bcf5f43ea",
          "title": "Structural Analysis Course 79",
          "platform": "Pluralsight",
          "price": "Free",
          "link": "https://www.pluralsight.com/course/structural-analysis-course-79",
          "category": "Civil Engineering"
        },
        {
          "courseid": "f70f280f-a12c-4e1f-8386-106d3fde38ed",
          "title": "Electric Circuits Course 80",
          "platform": "LinkedIn Learning",
          "price": "Paid",
          "link": "https://www.linkedinlearning.com/course/electric-circuits-course-80",
          "category": "Electrical Engineering"
        },
        {
          "courseid": "c1262a59-6162-4ae0-8c9a-885e8727a7d4",
          "title": "Artificial Intelligence Course 81",
          "platform": "Udemy",
          "price": "Free",
          "link": "https://www.udemy.com/course/artificial-intelligence-course-81",
          "category": "Computer Science Engineering"
        },
        {
          "courseid": "b9e858b5-34c6-4f72-bbcd-6d3b84bd395c",
          "title": "Cybersecurity Course 82",
          "platform": "Coursera",
          "price": "Paid",
          "link": "https://www.coursera.com/course/cybersecurity-course-82",
          "category": "Information Technology"
        },
        {
          "courseid": "e90a8188-bbd9-49b4-9582-f6f122ac2aa7",
          "title": "Digital Signal Processing Course 83",
          "platform": "edX",
          "price": "Free",
          "link": "https://www.edx.com/course/digital-signal-processing-course-83",
          "category": "Electronics and Communication Engineering"
        },
        {
          "courseid": "401f2061-9490-4009-8b37-bd80c49ef811",
          "title": "AI for Robotics Course 84",
          "platform": "Pluralsight",
          "price": "Paid",
          "link": "https://www.pluralsight.com/course/ai-for-robotics-course-84",
          "category": "Artificial Intelligence & Machine Learning"
        },
        {
          "courseid": "b9b19b8a-a6cc-419e-b5ec-88aff9fbd1dc",
          "title": "Industrial Robotics Course 85",
          "platform": "LinkedIn Learning",
          "price": "Free",
          "link": "https://www.linkedinlearning.com/course/industrial-robotics-course-85",
          "category": "Robotics & Automation"
        },
        {
          "courseid": "74926e6b-3a0f-4dab-9335-3b654429332b",
          "title": "Cryptography Course 86",
          "platform": "Udemy",
          "price": "Paid",
          "link": "https://www.udemy.com/course/cryptography-course-86",
          "category": "Cybersecurity"
        },
        {
          "courseid": "33fba8a3-4815-45a7-9393-bf7ece4fce44",
          "title": "Predictive Modeling Course 87",
          "platform": "Coursera",
          "price": "Free",
          "link": "https://www.coursera.com/course/predictive-modeling-course-87",
          "category": "Data Science & Analytics"
        },
        {
          "courseid": "8a46ebd1-33e5-489b-ae2b-22bcd2a5c0a8",
          "title": "Smart Contracts Course 88",
          "platform": "edX",
          "price": "Paid",
          "link": "https://www.edx.com/course/smart-contracts-course-88",
          "category": "Blockchain Technology"
        },
        {
          "courseid": "3226077f-86cc-42ef-a68a-8d3cef08c21a",
          "title": "Manufacturing Processes Course 89",
          "platform": "Pluralsight",
          "price": "Free",
          "link": "https://www.pluralsight.com/course/manufacturing-processes-course-89",
          "category": "Mechanical Engineering"
        },
        {
          "courseid": "76084550-0ecc-401c-8cce-282ad35bdbb3",
          "title": "Geotechnical Engineering Course 90",
          "platform": "LinkedIn Learning",
          "price": "Paid",
          "link": "https://www.linkedinlearning.com/course/geotechnical-engineering-course-90",
          "category": "Civil Engineering"
        },
        {
          "courseid": "e1550285-5b86-491f-91c4-574220999eb7",
          "title": "Power Systems Course 91",
          "platform": "Udemy",
          "price": "Free",
          "link": "https://www.udemy.com/course/power-systems-course-91",
          "category": "Electrical Engineering"
        },
        {
          "courseid": "247e0748-93e0-4bf6-921b-2622f19badd0",
          "title": "Algorithms Course 92",
          "platform": "Coursera",
          "price": "Paid",
          "link": "https://www.coursera.com/course/algorithms-course-92",
          "category": "Computer Science Engineering"
        },
        {
          "courseid": "e543ba65-6815-40a1-83af-5c9da0a2fc08",
          "title": "Networking Fundamentals Course 93",
          "platform": "edX",
          "price": "Free",
          "link": "https://www.edx.com/course/networking-fundamentals-course-93",
          "category": "Information Technology"
        },
        {
          "courseid": "257735fa-cdf6-427b-9335-31f566c1ae0d",
          "title": "Embedded Systems Course 94",
          "platform": "Pluralsight",
          "price": "Paid",
          "link": "https://www.pluralsight.com/course/embedded-systems-course-94",
          "category": "Electronics and Communication Engineering"
        },
        {
          "courseid": "e6f8a25f-7da7-485e-8d80-cbc552ce0e38",
          "title": "Natural Language Processing Course 95",
          "platform": "LinkedIn Learning",
          "price": "Free",
          "link": "https://www.linkedinlearning.com/course/natural-language-processing-course-95",
          "category": "Artificial Intelligence & Machine Learning"
        },
        {
          "courseid": "50e4578b-2911-4535-a2b7-42be01627488",
          "title": "Autonomous Systems Course 96",
          "platform": "Udemy",
          "price": "Paid",
          "link": "https://www.udemy.com/course/autonomous-systems-course-96",
          "category": "Robotics & Automation"
        },
        {
          "courseid": "32e0c721-654e-47ab-8f59-821dab408cef",
          "title": "Ethical Hacking Course 97",
          "platform": "Coursera",
          "price": "Free",
          "link": "https://www.coursera.com/course/ethical-hacking-course-97",
          "category": "Cybersecurity"
        },
        {
          "courseid": "0d1052b8-fbdc-4239-bee9-c663206579f1",
          "title": "Data Visualization Course 98",
          "platform": "edX",
          "price": "Paid",
          "link": "https://www.edx.com/course/data-visualization-course-98",
          "category": "Data Science & Analytics"
        },
        {
          "courseid": "cb81bb91-143f-4cd1-886a-34b06955480f",
          "title": "Decentralized Applications Course 99",
          "platform": "Pluralsight",
          "price": "Free",
          "link": "https://www.pluralsight.com/course/decentralized-applications-course-99",
          "category": "Blockchain Technology"
        },
        {
          "courseid": "811000c3-793a-4489-ba81-d234452096ca",
          "title": "Machine Design Course 100",
          "platform": "LinkedIn Learning",
          "price": "Paid",
          "link": "https://www.linkedinlearning.com/course/machine-design-course-100",
          "category": "Mechanical Engineering"
        },
        {
          "courseid": "e689dd59-e44a-4021-aa56-fd7cc446972b",
          "title": "Concrete Technology Course 101",
          "platform": "Udemy",
          "price": "Free",
          "link": "https://www.udemy.com/course/concrete-technology-course-101",
          "category": "Civil Engineering"
        },
        {
          "courseid": "347a62b0-4314-4032-b714-804cc983ebb3",
          "title": "Control Systems Course 102",
          "platform": "Coursera",
          "price": "Paid",
          "link": "https://www.coursera.com/course/control-systems-course-102",
          "category": "Electrical Engineering"
        },
        {
          "courseid": "2903d145-56a2-4653-996f-141acf4721b0",
          "title": "Data Structures Course 103",
          "platform": "edX",
          "price": "Free",
          "link": "https://www.edx.com/course/data-structures-course-103",
          "category": "Computer Science Engineering"
        },
        {
          "courseid": "b40c9f91-1a88-40cf-93bd-556079f70f17",
          "title": "Cloud Computing Course 104",
          "platform": "Pluralsight",
          "price": "Paid",
          "link": "https://www.pluralsight.com/course/cloud-computing-course-104",
          "category": "Information Technology"
        },
        {
          "courseid": "393a4b60-f120-4d49-bec3-e0b0d96f2b57",
          "title": "VLSI Design Course 105",
          "platform": "LinkedIn Learning",
          "price": "Free",
          "link": "https://www.linkedinlearning.com/course/vlsi-design-course-105",
          "category": "Electronics and Communication Engineering"
        },
        {
          "courseid": "17ea16ea-c94c-40b4-b7fa-faf1c47a7d91",
          "title": "Deep Learning Course 106",
          "platform": "Udemy",
          "price": "Paid",
          "link": "https://www.udemy.com/course/deep-learning-course-106",
          "category": "Artificial Intelligence & Machine Learning"
        },
        {
          "courseid": "c0d67c56-c51c-4641-b630-de7fd9913322",
          "title": "IoT Applications Course 107",
          "platform": "Coursera",
          "price": "Free",
          "link": "https://www.coursera.com/course/iot-applications-course-107",
          "category": "Robotics & Automation"
        },
        {
          "courseid": "79179eb7-bbb6-4778-8d8b-c2e1e6ce549a",
          "title": "Network Security Course 108",
          "platform": "edX",
          "price": "Paid",
          "link": "https://www.edx.com/course/network-security-course-108",
          "category": "Cybersecurity"
        },
        {
          "courseid": "0c363253-5fec-45fc-96fa-8a6f34f9c11b",
          "title": "Big Data Analytics Course 109",
          "platform": "Pluralsight",
          "price": "Free",
          "link": "https://www.pluralsight.com/course/big-data-analytics-course-109",
          "category": "Data Science & Analytics"
        },
        {
          "courseid": "4c08398c-192d-430f-b1d8-1c407b0d3599",
          "title": "Cryptocurrency Fundamentals Course 110",
          "platform": "LinkedIn Learning",
          "price": "Paid",
          "link": "https://www.linkedinlearning.com/course/cryptocurrency-fundamentals-course-110",
          "category": "Blockchain Technology"
        },
        {
          "courseid": "7a271f3f-b409-4504-a1ea-80d762463ca4",
          "title": "Thermodynamics Course 111",
          "platform": "Udemy",
          "price": "Free",
          "link": "https://www.udemy.com/course/thermodynamics-course-111",
          "category": "Mechanical Engineering"
        },
        {
          "courseid": "ebf1ece3-eaf5-4ebb-88a7-fbb43b026f31",
          "title": "Structural Analysis Course 112",
          "platform": "Coursera",
          "price": "Paid",
          "link": "https://www.coursera.com/course/structural-analysis-course-112",
          "category": "Civil Engineering"
        },
        {
          "courseid": "6e686ddc-ec92-4a62-82e2-3749c2bb908f",
          "title": "Electric Circuits Course 113",
          "platform": "edX",
          "price": "Free",
          "link": "https://www.edx.com/course/electric-circuits-course-113",
          "category": "Electrical Engineering"
        },
        {
          "courseid": "3560209a-e7f7-4a63-b9c1-a340060e62e4",
          "title": "Artificial Intelligence Course 114",
          "platform": "Pluralsight",
          "price": "Paid",
          "link": "https://www.pluralsight.com/course/artificial-intelligence-course-114",
          "category": "Computer Science Engineering"
        },
        {
          "courseid": "e27615e5-9d4d-452e-810d-da33e0fe739b",
          "title": "Cybersecurity Course 115",
          "platform": "LinkedIn Learning",
          "price": "Free",
          "link": "https://www.linkedinlearning.com/course/cybersecurity-course-115",
          "category": "Information Technology"
        },
        {
          "courseid": "e9cf8378-feb4-47e9-b604-e0c768322495",
          "title": "Digital Signal Processing Course 116",
          "platform": "Udemy",
          "price": "Paid",
          "link": "https://www.udemy.com/course/digital-signal-processing-course-116",
          "category": "Electronics and Communication Engineering"
        },
        {
          "courseid": "b26111cb-f425-4e07-b894-962bf1fd0fa4",
          "title": "AI for Robotics Course 117",
          "platform": "Coursera",
          "price": "Free",
          "link": "https://www.coursera.com/course/ai-for-robotics-course-117",
          "category": "Artificial Intelligence & Machine Learning"
        },
        {
          "courseid": "372ee4b6-dced-4a2c-bb0d-7c5fb9cafa70",
          "title": "Industrial Robotics Course 118",
          "platform": "edX",
          "price": "Paid",
          "link": "https://www.edx.com/course/industrial-robotics-course-118",
          "category": "Robotics & Automation"
        },
        {
          "courseid": "e4124b0a-2b4f-4587-b1ce-155a0365d343",
          "title": "Cryptography Course 119",
          "platform": "Pluralsight",
          "price": "Free",
          "link": "https://www.pluralsight.com/course/cryptography-course-119",
          "category": "Cybersecurity"
        },
        {
          "courseid": "382c1d7f-6ffe-4c24-9f53-e0b1e4540410",
          "title": "Predictive Modeling Course 120",
          "platform": "LinkedIn Learning",
          "price": "Paid",
          "link": "https://www.linkedinlearning.com/course/predictive-modeling-course-120",
          "category": "Data Science & Analytics"
        },
        {
          "courseid": "0e328738-1b49-440c-a67a-fc18c30f5575",
          "title": "Smart Contracts Course 121",
          "platform": "Udemy",
          "price": "Free",
          "link": "https://www.udemy.com/course/smart-contracts-course-121",
          "category": "Blockchain Technology"
        },
        {
          "courseid": "6f77f61a-6eeb-4a9c-a503-397c9ec46e41",
          "title": "Manufacturing Processes Course 122",
          "platform": "Coursera",
          "price": "Paid",
          "link": "https://www.coursera.com/course/manufacturing-processes-course-122",
          "category": "Mechanical Engineering"
        },
        {
          "courseid": "b46609bb-7caa-420a-9efe-c32138d5daf9",
          "title": "Geotechnical Engineering Course 123",
          "platform": "edX",
          "price": "Free",
          "link": "https://www.edx.com/course/geotechnical-engineering-course-123",
          "category": "Civil Engineering"
        },
        {
          "courseid": "322e512c-8ba0-4248-8cbc-1376dec77cf4",
          "title": "Power Systems Course 124",
          "platform": "Pluralsight",
          "price": "Paid",
          "link": "https://www.pluralsight.com/course/power-systems-course-124",
          "category": "Electrical Engineering"
        },
        {
          "courseid": "5f3d3d6e-f446-45b9-8766-adf22e0e6624",
          "title": "Algorithms Course 125",
          "platform": "LinkedIn Learning",
          "price": "Free",
          "link": "https://www.linkedinlearning.com/course/algorithms-course-125",
          "category": "Computer Science Engineering"
        },
        {
          "courseid": "2687e0ec-cc1f-4f90-af07-531d68d33248",
          "title": "Networking Fundamentals Course 126",
          "platform": "Udemy",
          "price": "Paid",
          "link": "https://www.udemy.com/course/networking-fundamentals-course-126",
          "category": "Information Technology"
        },
        {
          "courseid": "00125ff0-3a70-48ca-9077-f611e4ba8591",
          "title": "Embedded Systems Course 127",
          "platform": "Coursera",
          "price": "Free",
          "link": "https://www.coursera.com/course/embedded-systems-course-127",
          "category": "Electronics and Communication Engineering"
        },
        {
          "courseid": "17a9f6ee-d70b-4c03-943b-2a0e2fc4368b",
          "title": "Natural Language Processing Course 128",
          "platform": "edX",
          "price": "Paid",
          "link": "https://www.edx.com/course/natural-language-processing-course-128",
          "category": "Artificial Intelligence & Machine Learning"
        },
        {
          "courseid": "52e2b955-9541-4261-a705-ac2120059636",
          "title": "Autonomous Systems Course 129",
          "platform": "Pluralsight",
          "price": "Free",
          "link": "https://www.pluralsight.com/course/autonomous-systems-course-129",
          "category": "Robotics & Automation"
        },
        {
          "courseid": "dac824c8-36ff-4431-813d-ce9488f6afeb",
          "title": "Ethical Hacking Course 130",
          "platform": "LinkedIn Learning",
          "price": "Paid",
          "link": "https://www.linkedinlearning.com/course/ethical-hacking-course-130",
          "category": "Cybersecurity"
        },
        {
          "courseid": "9953f9de-751c-49b7-b289-9c53a670b8c1",
          "title": "Data Visualization Course 131",
          "platform": "Udemy",
          "price": "Free",
          "link": "https://www.udemy.com/course/data-visualization-course-131",
          "category": "Data Science & Analytics"
        },
        {
          "courseid": "585cc0e3-2de8-4e60-ad12-a307c2119ef5",
          "title": "Decentralized Applications Course 132",
          "platform": "Coursera",
          "price": "Paid",
          "link": "https://www.coursera.com/course/decentralized-applications-course-132",
          "category": "Blockchain Technology"
        },
        {
          "courseid": "209838f9-0f5f-4a9e-a39e-75f28061499d",
          "title": "Machine Design Course 133",
          "platform": "edX",
          "price": "Free",
          "link": "https://www.edx.com/course/machine-design-course-133",
          "category": "Mechanical Engineering"
        },
        {
          "courseid": "654b00e9-ba9b-4c74-91f0-ec9546bd80d8",
          "title": "Concrete Technology Course 134",
          "platform": "Pluralsight",
          "price": "Paid",
          "link": "https://www.pluralsight.com/course/concrete-technology-course-134",
          "category": "Civil Engineering"
        },
        {
          "courseid": "19bf6a9f-1dc1-4af8-b48a-154fdec22cbd",
          "title": "Control Systems Course 135",
          "platform": "LinkedIn Learning",
          "price": "Free",
          "link": "https://www.linkedinlearning.com/course/control-systems-course-135",
          "category": "Electrical Engineering"
        },
        {
          "courseid": "81794814-b702-45d2-9aa6-9df5f738f381",
          "title": "Data Structures Course 136",
          "platform": "Udemy",
          "price": "Paid",
          "link": "https://www.udemy.com/course/data-structures-course-136",
          "category": "Computer Science Engineering"
        },
        {
          "courseid": "97281fd3-333a-4f45-a5f6-05920b75dfd1",
          "title": "Cloud Computing Course 137",
          "platform": "Coursera",
          "price": "Free",
          "link": "https://www.coursera.com/course/cloud-computing-course-137",
          "category": "Information Technology"
        },
        {
          "courseid": "a7e9e684-0bef-4561-b47b-130258d84ea2",
          "title": "VLSI Design Course 138",
          "platform": "edX",
          "price": "Paid",
          "link": "https://www.edx.com/course/vlsi-design-course-138",
          "category": "Electronics and Communication Engineering"
        },
        {
          "courseid": "cefd7b46-840a-45fe-b814-af55209f395b",
          "title": "Deep Learning Course 139",
          "platform": "Pluralsight",
          "price": "Free",
          "link": "https://www.pluralsight.com/course/deep-learning-course-139",
          "category": "Artificial Intelligence & Machine Learning"
        },
        {
          "courseid": "7ce476ea-d124-42fa-b53d-d2c59a209f38",
          "title": "IoT Applications Course 140",
          "platform": "LinkedIn Learning",
          "price": "Paid",
          "link": "https://www.linkedinlearning.com/course/iot-applications-course-140",
          "category": "Robotics & Automation"
        },
        {
          "courseid": "fbda0b54-d136-41a3-89bf-f53968244d79",
          "title": "Network Security Course 141",
          "platform": "Udemy",
          "price": "Free",
          "link": "https://www.udemy.com/course/network-security-course-141",
          "category": "Cybersecurity"
        },
        {
          "courseid": "26961ba6-f2a3-47dc-a102-b3f2b1d51c21",
          "title": "Big Data Analytics Course 142",
          "platform": "Coursera",
          "price": "Paid",
          "link": "https://www.coursera.com/course/big-data-analytics-course-142",
          "category": "Data Science & Analytics"
        },
        {
          "courseid": "add71afa-7b48-4e88-ac05-a358f1675bfd",
          "title": "Cryptocurrency Fundamentals Course 143",
          "platform": "edX",
          "price": "Free",
          "link": "https://www.edx.com/course/cryptocurrency-fundamentals-course-143",
          "category": "Blockchain Technology"
        },
        {
          "courseid": "a8226a8a-1ec0-4121-9582-989e0dd571b7",
          "title": "Thermodynamics Course 144",
          "platform": "Pluralsight",
          "price": "Paid",
          "link": "https://www.pluralsight.com/course/thermodynamics-course-144",
          "category": "Mechanical Engineering"
        },
        {
          "courseid": "499bd21b-04be-457d-a6df-196d8dfe93c6",
          "title": "Structural Analysis Course 145",
          "platform": "LinkedIn Learning",
          "price": "Free",
          "link": "https://www.linkedinlearning.com/course/structural-analysis-course-145",
          "category": "Civil Engineering"
        },
        {
          "courseid": "d6456ad9-1508-47b2-a929-54b64e465f02",
          "title": "Electric Circuits Course 146",
          "platform": "Udemy",
          "price": "Paid",
          "link": "https://www.udemy.com/course/electric-circuits-course-146",
          "category": "Electrical Engineering"
        },
        {
          "courseid": "8ebc9074-9514-41a1-8a3f-6c11eea5a681",
          "title": "Artificial Intelligence Course 147",
          "platform": "Coursera",
          "price": "Free",
          "link": "https://www.coursera.com/course/artificial-intelligence-course-147",
          "category": "Computer Science Engineering"
        },
        {
          "courseid": "282bd278-eba5-4b13-aaf2-914c56fcc675",
          "title": "Cybersecurity Course 148",
          "platform": "edX",
          "price": "Paid",
          "link": "https://www.edx.com/course/cybersecurity-course-148",
          "category": "Information Technology"
        },
        {
          "courseid": "a77658ac-a508-4ced-aced-a7f34c2c2e11",
          "title": "Digital Signal Processing Course 149",
          "platform": "Pluralsight",
          "price": "Free",
          "link": "https://www.pluralsight.com/course/digital-signal-processing-course-149",
          "category": "Electronics and Communication Engineering"
        },
        {
          "courseid": "c47ecc32-9ca1-4eef-87fe-0908cb59d3f1",
          "title": "AI for Robotics Course 150",
          "platform": "LinkedIn Learning",
          "price": "Paid",
          "link": "https://www.linkedinlearning.com/course/ai-for-robotics-course-150",
          "category": "Artificial Intelligence & Machine Learning"
        },
        {
          "courseid": "0de7fa91-1f42-48d6-b9bf-10330236eb23",
          "title": "Industrial Robotics Course 151",
          "platform": "Udemy",
          "price": "Free",
          "link": "https://www.udemy.com/course/industrial-robotics-course-151",
          "category": "Robotics & Automation"
        },
        {
          "courseid": "3248509d-bc33-4c27-a1df-a1ef7a701620",
          "title": "Cryptography Course 152",
          "platform": "Coursera",
          "price": "Paid",
          "link": "https://www.coursera.com/course/cryptography-course-152",
          "category": "Cybersecurity"
        },
        {
          "courseid": "ce74e63e-a357-4764-83ff-dd9e15338aa7",
          "title": "Predictive Modeling Course 153",
          "platform": "edX",
          "price": "Free",
          "link": "https://www.edx.com/course/predictive-modeling-course-153",
          "category": "Data Science & Analytics"
        },
        {
          "courseid": "e7eb07d3-fa91-4bcd-9899-cd68e3d4a034",
          "title": "Smart Contracts Course 154",
          "platform": "Pluralsight",
          "price": "Paid",
          "link": "https://www.pluralsight.com/course/smart-contracts-course-154",
          "category": "Blockchain Technology"
        },
        {
          "courseid": "7b860816-a9d4-4b1e-9ee3-8481cc226578",
          "title": "Manufacturing Processes Course 155",
          "platform": "LinkedIn Learning",
          "price": "Free",
          "link": "https://www.linkedinlearning.com/course/manufacturing-processes-course-155",
          "category": "Mechanical Engineering"
        },
        {
          "courseid": "ac905266-9f03-4085-a0b1-3777a4cd3a02",
          "title": "Geotechnical Engineering Course 156",
          "platform": "Udemy",
          "price": "Paid",
          "link": "https://www.udemy.com/course/geotechnical-engineering-course-156",
          "category": "Civil Engineering"
        },
        {
          "courseid": "b2efbb9f-82f0-40af-8eeb-c05e70f52804",
          "title": "Power Systems Course 157",
          "platform": "Coursera",
          "price": "Free",
          "link": "https://www.coursera.com/course/power-systems-course-157",
          "category": "Electrical Engineering"
        },
        {
          "courseid": "62cc19fb-0a72-4059-9914-1efb515ebc2a",
          "title": "Algorithms Course 158",
          "platform": "edX",
          "price": "Paid",
          "link": "https://www.edx.com/course/algorithms-course-158",
          "category": "Computer Science Engineering"
        },
        {
          "courseid": "acaa73a3-96d4-4023-8cd6-cbf9b15bc99b",
          "title": "Networking Fundamentals Course 159",
          "platform": "Pluralsight",
          "price": "Free",
          "link": "https://www.pluralsight.com/course/networking-fundamentals-course-159",
          "category": "Information Technology"
        },
        {
          "courseid": "3f3da149-3851-40c2-9467-4c741bb1d621",
          "title": "Embedded Systems Course 160",
          "platform": "LinkedIn Learning",
          "price": "Paid",
          "link": "https://www.linkedinlearning.com/course/embedded-systems-course-160",
          "category": "Electronics and Communication Engineering"
        },
        {
          "courseid": "7b96c3c7-829e-4c80-8c8e-423be872c589",
          "title": "Natural Language Processing Course 161",
          "platform": "Udemy",
          "price": "Free",
          "link": "https://www.udemy.com/course/natural-language-processing-course-161",
          "category": "Artificial Intelligence & Machine Learning"
        },
        {
          "courseid": "f8f212b9-5409-4444-bb3c-c8101b434303",
          "title": "Autonomous Systems Course 162",
          "platform": "Coursera",
          "price": "Paid",
          "link": "https://www.coursera.com/course/autonomous-systems-course-162",
          "category": "Robotics & Automation"
        },
        {
          "courseid": "c7ebc4bf-7fd1-4376-b5f5-a0ff779a2f86",
          "title": "Ethical Hacking Course 163",
          "platform": "edX",
          "price": "Free",
          "link": "https://www.edx.com/course/ethical-hacking-course-163",
          "category": "Cybersecurity"
        },
        {
          "courseid": "2110325f-5072-434b-868c-b65e3599b73b",
          "title": "Data Visualization Course 164",
          "platform": "Pluralsight",
          "price": "Paid",
          "link": "https://www.pluralsight.com/course/data-visualization-course-164",
          "category": "Data Science & Analytics"
        },
        {
          "courseid": "36fb8301-c2b8-458c-89e9-d7af211255e9",
          "title": "Decentralized Applications Course 165",
          "platform": "LinkedIn Learning",
          "price": "Free",
          "link": "https://www.linkedinlearning.com/course/decentralized-applications-course-165",
          "category": "Blockchain Technology"
        },
        {
          "courseid": "5e5ff2d6-42ce-41bd-b475-314cea05d6c3",
          "title": "Machine Design Course 166",
          "platform": "Udemy",
          "price": "Paid",
          "link": "https://www.udemy.com/course/machine-design-course-166",
          "category": "Mechanical Engineering"
        },
        {
          "courseid": "8d85bb50-af22-4d2a-a1f7-d979b2770601",
          "title": "Concrete Technology Course 167",
          "platform": "Coursera",
          "price": "Free",
          "link": "https://www.coursera.com/course/concrete-technology-course-167",
          "category": "Civil Engineering"
        },
        {
          "courseid": "79c436c3-acfc-4ed1-b29a-4a00ba93e860",
          "title": "Control Systems Course 168",
          "platform": "edX",
          "price": "Paid",
          "link": "https://www.edx.com/course/control-systems-course-168",
          "category": "Electrical Engineering"
        },
        {
          "courseid": "2c5701a3-2183-47d8-b4ec-6866d745574f",
          "title": "Data Structures Course 169",
          "platform": "Pluralsight",
          "price": "Free",
          "link": "https://www.pluralsight.com/course/data-structures-course-169",
          "category": "Computer Science Engineering"
        },
        {
          "courseid": "2fc24763-c219-4cf7-a58a-6c45d67ab30b",
          "title": "Cloud Computing Course 170",
          "platform": "LinkedIn Learning",
          "price": "Paid",
          "link": "https://www.linkedinlearning.com/course/cloud-computing-course-170",
          "category": "Information Technology"
        },
        {
          "courseid": "d54dbc4d-bf17-43d7-a976-39cd2ec77a6c",
          "title": "VLSI Design Course 171",
          "platform": "Udemy",
          "price": "Free",
          "link": "https://www.udemy.com/course/vlsi-design-course-171",
          "category": "Electronics and Communication Engineering"
        },
        {
          "courseid": "134cc786-4e2d-467b-9f8c-243e99ad21c7",
          "title": "Deep Learning Course 172",
          "platform": "Coursera",
          "price": "Paid",
          "link": "https://www.coursera.com/course/deep-learning-course-172",
          "category": "Artificial Intelligence & Machine Learning"
        },
        {
          "courseid": "18848a46-35ef-414c-9788-5eeda23f20be",
          "title": "IoT Applications Course 173",
          "platform": "edX",
          "price": "Free",
          "link": "https://www.edx.com/course/iot-applications-course-173",
          "category": "Robotics & Automation"
        },
        {
          "courseid": "75bd6e4c-d089-412a-9406-c10fa1026e8b",
          "title": "Network Security Course 174",
          "platform": "Pluralsight",
          "price": "Paid",
          "link": "https://www.pluralsight.com/course/network-security-course-174",
          "category": "Cybersecurity"
        },
        {
          "courseid": "cc9d16dc-4fe4-493c-a056-53d88f2e85fd",
          "title": "Big Data Analytics Course 175",
          "platform": "LinkedIn Learning",
          "price": "Free",
          "link": "https://www.linkedinlearning.com/course/big-data-analytics-course-175",
          "category": "Data Science & Analytics"
        },
        {
          "courseid": "053c0b6e-a9cd-4225-a5b1-24bb9bd078bd",
          "title": "Cryptocurrency Fundamentals Course 176",
          "platform": "Udemy",
          "price": "Paid",
          "link": "https://www.udemy.com/course/cryptocurrency-fundamentals-course-176",
          "category": "Blockchain Technology"
        },
        {
          "courseid": "b6269e12-8a1f-4a32-ab64-7501c6c6611d",
          "title": "Thermodynamics Course 177",
          "platform": "Coursera",
          "price": "Free",
          "link": "https://www.coursera.com/course/thermodynamics-course-177",
          "category": "Mechanical Engineering"
        },
        {
          "courseid": "fc498b87-3487-4be5-bc1d-6e84883da045",
          "title": "Structural Analysis Course 178",
          "platform": "edX",
          "price": "Paid",
          "link": "https://www.edx.com/course/structural-analysis-course-178",
          "category": "Civil Engineering"
        },
        {
          "courseid": "30c45524-1f7a-4ac2-b366-dc76a65ed342",
          "title": "Electric Circuits Course 179",
          "platform": "Pluralsight",
          "price": "Free",
          "link": "https://www.pluralsight.com/course/electric-circuits-course-179",
          "category": "Electrical Engineering"
        },
        {
          "courseid": "04e7e733-2b7d-47bb-b7db-d0dc497df9fd",
          "title": "Artificial Intelligence Course 180",
          "platform": "LinkedIn Learning",
          "price": "Paid",
          "link": "https://www.linkedinlearning.com/course/artificial-intelligence-course-180",
          "category": "Computer Science Engineering"
        },
        {
          "courseid": "cd09adbf-93a2-45d1-8351-1d77d1a10e4d",
          "title": "Cybersecurity Course 181",
          "platform": "Udemy",
          "price": "Free",
          "link": "https://www.udemy.com/course/cybersecurity-course-181",
          "category": "Information Technology"
        },
        {
          "courseid": "3c8f7219-5cb8-46fd-8ea8-c359fd70ac95",
          "title": "Digital Signal Processing Course 182",
          "platform": "Coursera",
          "price": "Paid",
          "link": "https://www.coursera.com/course/digital-signal-processing-course-182",
          "category": "Electronics and Communication Engineering"
        },
        {
          "courseid": "fb67c2d4-3bb4-437e-8793-ef00bfc3692f",
          "title": "AI for Robotics Course 183",
          "platform": "edX",
          "price": "Free",
          "link": "https://www.edx.com/course/ai-for-robotics-course-183",
          "category": "Artificial Intelligence & Machine Learning"
        },
        {
          "courseid": "5f01194c-3e45-4cfe-b6b9-04ff644bc8c4",
          "title": "Industrial Robotics Course 184",
          "platform": "Pluralsight",
          "price": "Paid",
          "link": "https://www.pluralsight.com/course/industrial-robotics-course-184",
          "category": "Robotics & Automation"
        },
        {
          "courseid": "7188b9c9-5815-4a37-87d9-3a0f383244bf",
          "title": "Cryptography Course 185",
          "platform": "LinkedIn Learning",
          "price": "Free",
          "link": "https://www.linkedinlearning.com/course/cryptography-course-185",
          "category": "Cybersecurity"
        },
        {
          "courseid": "9782ffa5-8976-4f0e-8c28-b20e23abc01e",
          "title": "Predictive Modeling Course 186",
          "platform": "Udemy",
          "price": "Paid",
          "link": "https://www.udemy.com/course/predictive-modeling-course-186",
          "category": "Data Science & Analytics"
        },
        {
          "courseid": "d023ae0a-c024-46a7-9263-a47172120a32",
          "title": "Smart Contracts Course 187",
          "platform": "Coursera",
          "price": "Free",
          "link": "https://www.coursera.com/course/smart-contracts-course-187",
          "category": "Blockchain Technology"
        },
        {
          "courseid": "6b16f901-520b-40f7-aca8-cefa4e50343c",
          "title": "Manufacturing Processes Course 188",
          "platform": "edX",
          "price": "Paid",
          "link": "https://www.edx.com/course/manufacturing-processes-course-188",
          "category": "Mechanical Engineering"
        },
        {
          "courseid": "bd8c740b-471c-4559-bce0-180250abbfea",
          "title": "Geotechnical Engineering Course 189",
          "platform": "Pluralsight",
          "price": "Free",
          "link": "https://www.pluralsight.com/course/geotechnical-engineering-course-189",
          "category": "Civil Engineering"
        },
        {
          "courseid": "6a9ac8ff-680d-4c7d-b7d4-da91c16f6457",
          "title": "Power Systems Course 190",
          "platform": "LinkedIn Learning",
          "price": "Paid",
          "link": "https://www.linkedinlearning.com/course/power-systems-course-190",
          "category": "Electrical Engineering"
        },
        {
          "courseid": "9aa63715-5707-42c2-890c-1c3ec1ea312b",
          "title": "Algorithms Course 191",
          "platform": "Udemy",
          "price": "Free",
          "link": "https://www.udemy.com/course/algorithms-course-191",
          "category": "Computer Science Engineering"
        },
        {
          "courseid": "b919a833-161f-425d-8e06-65179223cc65",
          "title": "Networking Fundamentals Course 192",
          "platform": "Coursera",
          "price": "Paid",
          "link": "https://www.coursera.com/course/networking-fundamentals-course-192",
          "category": "Information Technology"
        },
        {
          "courseid": "d26cf3eb-923c-45bb-8a9d-96391f09c9df",
          "title": "Embedded Systems Course 193",
          "platform": "edX",
          "price": "Free",
          "link": "https://www.edx.com/course/embedded-systems-course-193",
          "category": "Electronics and Communication Engineering"
        },
        {
          "courseid": "a29823be-cc26-49f7-9060-ffb445e4be3f",
          "title": "Natural Language Processing Course 194",
          "platform": "Pluralsight",
          "price": "Paid",
          "link": "https://www.pluralsight.com/course/natural-language-processing-course-194",
          "category": "Artificial Intelligence & Machine Learning"
        },
        {
          "courseid": "20e0eec8-7412-47c5-bdf6-0b79cf9a59af",
          "title": "Autonomous Systems Course 195",
          "platform": "LinkedIn Learning",
          "price": "Free",
          "link": "https://www.linkedinlearning.com/course/autonomous-systems-course-195",
          "category": "Robotics & Automation"
        },
        {
          "courseid": "36ac6e77-99c2-4624-8e84-6fe834f93d37",
          "title": "Ethical Hacking Course 196",
          "platform": "Udemy",
          "price": "Paid",
          "link": "https://www.udemy.com/course/ethical-hacking-course-196",
          "category": "Cybersecurity"
        },
        {
          "courseid": "d22eaa27-c491-4edc-ad1a-8e508d377adb",
          "title": "Data Visualization Course 197",
          "platform": "Coursera",
          "price": "Free",
          "link": "https://www.coursera.com/course/data-visualization-course-197",
          "category": "Data Science & Analytics"
        },
        {
          "courseid": "8a357728-7ee7-4348-8803-457b00feeed4",
          "title": "Decentralized Applications Course 198",
          "platform": "edX",
          "price": "Paid",
          "link": "https://www.edx.com/course/decentralized-applications-course-198",
          "category": "Blockchain Technology"
        },
        {
          "courseid": "1a91fc4e-3122-45b7-a6a6-208f45b63079",
          "title": "Machine Design Course 199",
          "platform": "Pluralsight",
          "price": "Free",
          "link": "https://www.pluralsight.com/course/machine-design-course-199",
          "category": "Mechanical Engineering"
        },
        {
          "courseid": "7ef6b088-018a-4c36-81aa-5e2b55c68ae7",
          "title": "Concrete Technology Course 200",
          "platform": "LinkedIn Learning",
          "price": "Paid",
          "link": "https://www.linkedinlearning.com/course/concrete-technology-course-200",
          "category": "Civil Engineering"
        }
      
];

const uploadData = async () => {
    try {
      const coursesRef = collection(dbFirestore, "courses"); 
      for (let course of courses) {
        await addDoc(coursesRef, course);
        console.log(`✅ Uploaded: ${course.title}`);
      }
      console.log("🎉 All courses uploaded successfully!");
    } catch (error) {
      console.error("❌ Error uploading courses:", error);
    }
  };
  
  uploadData();
