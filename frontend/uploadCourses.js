import { dbFirestore } from "./src/firebase-config.js";  
import { collection, addDoc } from "firebase/firestore"; 
const courses = [
  {
    "courseid": 1,
    "title": "Machine Learning",
    "platform": "Coursera",
    "price": "Paid",
    "link": "https://www.coursera.org/learn/machine-learning",
    "category": "Machine Learning"
},
{
    "courseid": 2,
    "title": "Deep Learning Specialization",
    "platform": "Coursera",
    "price": "Paid",
    "link": "https://www.coursera.org/specializations/deep-learning",
    "category": "Deep Learning"
},
{
    "courseid": 3,
    "title": "Python for Everybody Specialization",
    "platform": "Coursera",
    "price": "Paid",
    "link": "https://www.coursera.org/specializations/python",
    "category": "Programming"
},
{
    "courseid": 4,
    "title": "Algorithms, Part I",
    "platform": "Coursera",
    "price": "Paid",
    "link": "https://www.coursera.org/learn/algorithms-part1",
    "category": "Computer Science"
},
{
    "courseid": 5,
    "title": "CS50's Introduction to Computer Science",
    "platform": "edX",
    "price": "Free",
    "link": "https://www.edx.org/course/cs50s-introduction-to-computer-science",
    "category": "Computer Science"
},
{
    "courseid": 6,
    "title": "SQL for Data Science",
    "platform": "Coursera",
    "price": "Paid",
    "link": "https://www.coursera.org/learn/sql-for-data-science",
    "category": "Data Science"
},
{
    "courseid": 7,
    "title": "Data Analysis with Python",
    "platform": "freeCodeCamp",
    "price": "Free",
    "link": "https://www.freecodecamp.org/learn/data-analysis-with-python/",
    "category": "Data Science"
},
{
    "courseid": 8,
    "title": "The Web Developer Bootcamp",
    "platform": "Udemy",
    "price": "Paid",
    "link": "https://www.udemy.com/course/the-web-developer-bootcamp/",
    "category": "Web Development"
},
{
    "courseid": 9,
    "title": "Complete Python Developer in 2023: From Zero to Mastery",
    "platform": "Zero To Mastery",
    "price": "Paid",
    "link": "https://zerotomastery.io/courses/learn-python/",
    "category": "Programming"
},
{
    "courseid": 10,
    "title": "React - The Complete Guide (incl Hooks, React Router, Redux)",
    "platform": "Udemy",
    "price": "Paid",
    "link": "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    "category": "Web Development"
},
{
    "courseid": 11,
    "title": "AWS Certified Solutions Architect - Associate SAA-C03",
    "platform": "A Cloud Guru",
    "price": "Paid",
    "link": "https://acloudguru.com/course/aws-certified-solutions-architect-associate-saa-c03",
    "category": "Cloud Computing"
},
{
    "courseid": 12,
    "title": "Ethical Hacking Essentials (EHE)",
    "platform": "EC-Council",
    "price": "Paid",
    "link": "https://www.eccouncil.org/programs/ethical-hacking-essentials-ehe/",
    "category": "Cybersecurity"
},
{
    "courseid": 13,
    "title": "Software Testing and Automation",
    "platform": "Udacity",
    "price": "Paid",
    "link": "https://www.udacity.com/course/software-testing--ud825",
    "category": "Software Engineering"
},
{
    "courseid": 14,
    "title": "Digital Marketing Fundamentals",
    "platform": "Google Digital Garage",
    "price": "Free",
    "link": "https://learndigital.withgoogle.com/digitalgarage/course/digital-marketing",
    "category": "Marketing"
},
{
    "courseid": 15,
    "title": "Introduction to Financial Accounting",
    "platform": "FutureLearn",
    "price": "Free/Paid",
    "link": "https://www.futurelearn.com/courses/introduction-to-financial-accounting",
    "category": "Finance"
},
{
    "courseid": 16,
    "title": "Introduction to Mechanical Engineering Design",
    "platform": "MIT OpenCourseWare",
    "price": "Free",
    "link": "https://ocw.mit.edu/courses/2-007-design-and-manufacturing-i-spring-2009/",
    "category": "Mechanical Engineering"
},
{
    "courseid": 17,
    "title": "Circuit Analysis",
    "platform": "Khan Academy",
    "price": "Free",
    "link": "https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic",
    "category": "Electrical Engineering"
},
{
    "courseid": 18,
    "title": "Civil Engineering Materials",
    "platform": "YouTube (various channels)",
    "price": "Free",
    "link": "https://www.youtube.com/",
    "category": "Civil Engineering"
},
{
    "courseid": 19,
    "title": "Game Development with Unity",
    "platform": "Unity Learn",
    "price": "Free/Paid",
    "link": "https://learn.unity.com/",
    "category": "Game Development"
},
{
    "courseid": 20,
    "title": "Unreal Engine 5 C++ Developer: Learn C++ and Make Video Games",
    "platform": "Udemy",
    "price": "Paid",
    "link": "https://www.udemy.com/course/unrealcourse/",
    "category": "Game Development"
},
{
    "courseid": 21,
    "title": "The Complete 2023 Web Development Bootcamp",
    "platform": "Udemy",
    "price": "Paid",
    "link": "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
    "category": "Web Development"
},
{
    "courseid": 22,
    "title": "Angular - The Complete Guide (2023 Edition)",
    "platform": "Udemy",
    "price": "Paid",
    "link": "https://www.udemy.com/course/the-complete-guide-to-angular-2/",
    "category": "Web Development"
},
{
    "courseid": 23,
    "title": "Learn to Code with JavaScript",
    "platform": "Codecademy",
    "price": "Free/Paid",
    "link": "https://www.codecademy.com/learn/introduction-to-javascript",
    "category": "Programming"
},
{
    "courseid": 24,
    "title": "Java Programming Masterclass for Software Developers",
    "platform": "Udemy",
    "price": "Paid",
    "link": "https://www.udemy.com/course/java-the-complete-java-developer-course/",
    "category": "Programming"
},
{
    "courseid": 25,
    "title": "C# Basics for Beginners: Learn C# Fundamentals by Coding",
    "platform": "Udemy",
    "price": "Paid",
    "link": "https://www.udemy.com/course/csharp-tutorial-for-beginners/",
    "category": "Programming"
},
{
    "courseid": 26,
    "title": "Learn C++",
    "platform": "Codecademy",
    "price": "Free/Paid",
    "link": "https://www.codecademy.com/learn/learn-c-plus-plus",
    "category": "Programming"
},
{
    "courseid": 27,
    "title": "iOS & Swift - The Complete iOS App Development Bootcamp",
    "platform": "Udemy",
    "price": "Paid",
    "link": "https://www.udemy.com/course/ios-13-app-development-bootcamp/",
    "category": "Mobile Development"
},
{
    "courseid": 28,
    "title": "Android Development for Beginners",
    "platform": "Udacity",
    "price": "Paid",
    "link": "https://www.udacity.com/course/android-development-for-beginners--ud853",
    "category": "Mobile Development"
},
{
    "courseid": 29,
    "title": "Flutter & Dart - The Complete Guide [2023 Edition]",
    "platform": "Udemy",
    "price": "Paid",
    "link": "https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/",
    "category": "Mobile Development"
},
{
    "courseid": 30,
    "title": "React Native - The Practical Guide [2023 Edition]",
    "platform": "Udemy",
    "price": "Paid",
    "link": "https://www.udemy.com/course/react-native-the-practical-guide/",
    "category": "Mobile Development"
},
{
    "courseid": 31,
    "title": "The Data Science Course: Complete Data Science Bootcamp",
    "platform": "Udemy",
    "price": "Paid",
    "link": "https://www.udemy.com/course/the-data-science-course-complete-data-science-bootcamp/",
    "category": "Data Science"
},
{
    "courseid": 32,
    "title": "Machine Learning A-Z\u2122: Hands-On Python & R In Data Science",
    "platform": "Udemy",
    "price": "Paid",
    "link": "https://www.udemy.com/course/machinelearning/",
    "category": "Machine Learning"
},
{
    "courseid": 33,
    "title": "Deep Learning A-Z\u2122: Hands-On Artificial Neural Networks",
    "platform": "Udemy",
    "price": "Paid",
    "link": "https://www.udemy.com/course/deeplearning/",
    "category": "Deep Learning"
},
{
    "courseid": 34,
    "title": "Python for Data Science and Machine Learning Bootcamp",
    "platform": "Udemy",
    "price": "Paid",
    "link": "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/",
    "category": "Data Science"
},
{
    "courseid": 35,
    "title": "R Programming A-Z\u2122: R For Data Science With Real Exercises!",
    "platform": "Udemy",
    "price": "Paid",
    "link": "https://www.udemy.com/course/r-programming/",
    "category": "Data Science"
},
{
    "courseid": 36,
    "title": "Azure Data Engineer Associate DP-203",
    "platform": "Microsoft Learn",
    "price": "Free/Paid",
    "link": "https://learn.microsoft.com/en-us/certifications/azure-data-engineer/",
    "category": "Data Engineering"
},
{
    "courseid": 37,
    "title": "DevOps Fundamentals",
    "platform": "Linux Academy (now A Cloud Guru)",
    "price": "Paid",
    "link": "https://acloudguru.com/course/devops-fundamentals",
    "category": "DevOps"
},
{
    "courseid": 38,
    "title": "Docker and Kubernetes: The Complete Guide",
    "platform": "Udemy",
    "price": "Paid",
    "link": "https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/",
    "category": "DevOps"
},
{
    "courseid": 39,
    "title": "Complete Machine Learning & Data Science Bootcamp 2023",
    "platform": "Udemy",
    "price": "Paid",
    "link": "https://www.udemy.com/course/complete-machine-learning-and-data-science-zero-to-mastery/",
    "category": "Machine Learning"
},
{
    "courseid": 40,
    "title": "Mathematics for Machine Learning and Data Science",
    "platform": "Khan Academy",
    "price": "Free",
    "link": "https://www.khanacademy.org/math/statistics-probability",
    "category": "Machine Learning"
},
{
    "courseid": 41,
    "title": "Natural Language Processing with Python",
    "platform": "DataCamp",
    "price": "Paid",
    "link": "https://www.datacamp.com/courses/natural-language-processing-fundamentals-in-python",
    "category": "Natural Language Processing"
},
{
    "courseid": 42,
    "title": "100 Days of Code: The Complete Python Pro Bootcamp for 2023",
    "platform": "Udemy",
    "price": "Paid",
    "link": "https://www.udemy.com/course/100-days-of-code/",
    "category": "Programming"
},
{
    "courseid": 43,
    "title": "Learn Java",
    "platform": "Codecademy",
    "price": "Free/Paid",
    "link": "https://www.codecademy.com/learn/learn-java",
    "category": "Programming"
},
{
    "courseid": 44,
    "title": "Learn C#",
    "platform": "Microsoft Learn",
    "price": "Free",
    "link": "https://learn.microsoft.com/en-us/dotnet/csharp/",
    "category": "Programming"
},
{
    "courseid": 45,
    "title": "Beginning C++ Programming - From Beginner to Beyond",
    "platform": "Udemy",
    "price": "Paid",
    "link": "https://www.udemy.com/course/beginning-c-plus-plus-programming/",
    "category": "Programming"
},
{
    "courseid": 46,
    "title": "Data Science Master's Program",
    "platform": "Simplilearn",
    "price": "Paid",
    "link": "https://www.simplilearn.com/big-data-and-analytics/senior-data-scientist-masters-program-training",
    "category": "Data Science"
},
{
    "courseid": 47,
    "title": "SQL Certification Course",
    "platform": "Simplilearn",
    "price": "Paid",
    "link": "https://www.simplilearn.com/big-data-and-analytics/senior-data-scientist-masters-program-training",
    "category": "Data Science"
},
{
    "courseid": 48,
    "title": "Python for Data Science by IBM",
    "platform": "Simplilearn",
    "price": "Paid",
    "link": "https://www.simplilearn.com/big-data-and-analytics/senior-data-scientist-masters-program-training",
    "category": "Data Science"
},
{
    "courseid": 49,
    "title": "Applied Data Science with Python",
    "platform": "Simplilearn",
    "price": "Paid",
    "link": "https://www.simplilearn.com/big-data-and-analytics/senior-data-scientist-masters-program-training",
    "category": "Data Science"
},
{
    "courseid": 50,
    "title": "Machine Learning using Python",
    "platform": "Simplilearn",
    "price": "Paid",
    "link": "https://www.simplilearn.com/big-data-and-analytics/senior-data-scientist-masters-program-training",
    "category": "Machine Learning"
},
{
    "courseid": 51,
    "title": "Tableau Desktop Specialist Certification Training",
    "platform": "Simplilearn",
    "price": "Paid",
    "link": "https://www.simplilearn.com/big-data-and-analytics/senior-data-scientist-masters-program-training",
    "category": "Data Science"
},
{
    "courseid": 52,
    "title": "Post Graduate Program in Cloud Computing",
    "platform": "Simplilearn",
    "price": "Paid",
    "link": "https://www.simplilearn.com/cloud-computing",
    "category": "Cloud Computing"
},
{
    "courseid": 53,
    "title": "Post Graduate Program in DevOps",
    "platform": "Simplilearn",
    "price": "Paid",
    "link": "https://www.simplilearn.com/cloud-computing",
    "category": "DevOps"
},
{
    "courseid": 54,
    "title": "Professional Cloud Architect Training",
    "platform": "Simplilearn",
    "price": "Paid",
    "link": "https://www.simplilearn.com/cloud-computing",
    "category": "Cloud Computing"
},
{
    "courseid": 55,
    "title": "Cybersecurity Bootcamp",
    "platform": "Caltech/Simplilearn",
    "price": "Paid",
    "link": "https://www.simplilearn.com/cyber-security",
    "category": "Cybersecurity"
},
{
    "courseid": 56,
    "title": "Professional Certificate Program in Cybersecurity",
    "platform": "Simplilearn",
    "price": "Paid",
    "link": "https://www.simplilearn.com/cyber-security",
    "category": "Cybersecurity"
},
{
    "courseid": 57,
    "title": "Executive Certificate Program in Cybersecurity",
    "platform": "Simplilearn",
    "price": "Paid",
    "link": "https://www.simplilearn.com/cyber-security",
    "category": "Cybersecurity"
},
{
    "courseid": 58,
    "title": "Google UX Design Professional Certificate",
    "platform": "Coursera",
    "price": "Paid",
    "link": "https://www.coursera.org/courses?query=ux%20design",
    "category": "UX Design"
},
{
    "courseid": 59,
    "title": "Foundations of User Experience (UX) Design",
    "platform": "Google/Coursera",
    "price": "Paid",
    "link": "https://www.coursera.org/courses?query=ux%20design",
    "category": "UX Design"
},
{
    "courseid": 60,
    "title": "Microsoft UX Design Professional Certificate",
    "platform": "Coursera",
    "price": "Paid",
    "link": "https://www.coursera.org/courses?query=ux%20design",
    "category": "UX Design"
},
{
    "courseid": 61,
    "title": "Advanced Process Control",
    "platform": "NPTEL/IIT Bombay",
    "price": "Free",
    "link": "https://nptel.ac.in/",
    "category": "Chemical Engineering"
},
{
    "courseid": 62,
    "title": "Solid-Fluid Operations",
    "platform": "IIT Guwahati/NPTEL",
    "price": "Free",
    "link": "https://nptel.ac.in/",
    "category": "Chemical Engineering"
},
{
    "courseid": 63,
    "title": "Construction Management Professional Certificate",
    "platform": "University of Maryland/edX",
    "price": "Paid",
    "link": "https://www.edx.org/learn/civil-engineering",
    "category": "Civil Engineering"
},
{
    "courseid": 64,
    "title": "Introduction to Engineering and Design",
    "platform": "Brown University/edX",
    "price": "Paid",
    "link": "https://www.edx.org/learn/civil-engineering",
    "category": "Civil Engineering"
},
{
    "courseid": 65,
    "title": "Stability and Design of Structural Frames",
    "platform": "Purdue University/edX",
    "price": "Paid",
    "link": "https://www.edx.org/learn/civil-engineering",
    "category": "Civil Engineering"
},
{
    "courseid": 66,
    "title": "Advanced React Patterns",
    "platform": "Frontend Masters",
    "price": "Paid",
    "link": "https://frontendmasters.com/courses/advanced-react-patterns/",
    "category": "Web Development"
},
{
    "courseid": 67,
    "title": "System Design Interview",
    "platform": "Educative.io",
    "price": "Paid",
    "link": "https://www.educative.io/courses/grokking-the-system-design-interview",
    "category": "Software Engineering"
},
{
    "courseid": 68,
    "title": "Introduction to Internet of Things (IoT)",
    "platform": "Coursera (UC San Diego)",
    "price": "Paid",
    "link": "https://www.coursera.org/specializations/iot",
    "category": "IoT"
},
{
    "courseid": 69,
    "title": "Digital Signal Processing",
    "platform": "MIT OpenCourseWare",
    "price": "Free",
    "link": "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-341-discrete-time-signal-processing-fall-2005/",
    "category": "Electrical Engineering"
},
{
    "courseid": 70,
    "title": "Control Systems",
    "platform": "Stanford Online",
    "price": "Free",
    "link": "https://online.stanford.edu/courses/ee263-introduction-linear-dynamical-systems",
    "category": "Electrical Engineering"
},
{
    "courseid": 71,
    "title": "Data Structures and Algorithms in Python",
    "platform": "YouTube (freeCodeCamp.org)",
    "price": "Free",
    "link": "https://www.youtube.com/watch?v=8hly31xKli0",
    "category": "Computer Science"
},
{
    "courseid": 72,
    "title": "Operating Systems",
    "platform": "YouTube (Neso Academy)",
    "price": "Free",
    "link": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O",
    "category": "Computer Science"
},
{
    "courseid": 73,
    "title": "React Hooks",
    "platform": "YouTube - Codevolution",
    "price": "Free",
    "link": "https://www.youtube.com/playlist?list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A",
    "category": "Web Development"
},
{
    "courseid": 74,
    "title": "Digital Logic",
    "platform": "YouTube - Gate Smashers",
    "price": "Free",
    "link": "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGmXg4NoX6R31AsC5LeCPHe",
    "category": "Electrical Engineering"
},
{
    "courseid": 75,
    "title": "Deep Reinforcement Learning Nanodegree",
    "platform": "Udacity",
    "price": "Paid",
    "link": "https://www.udacity.com/course/deep-reinforcement-learning-nanodegree--nd893",
    "category": "Deep Learning"
},
{
    "courseid": 76,
    "title": "TensorFlow: Advanced Techniques Specialization",
    "platform": "Coursera",
    "price": "Paid",
    "link": "https://www.coursera.org/specializations/tensorflow-advanced-techniques",
    "category": "Deep Learning"
},
{
    "courseid": 77,
    "title": "PyTorch for Deep Learning with Python Bootcamp",
    "platform": "Udemy",
    "price": "Paid",
    "link": "https://www.udemy.com/course/pytorch-for-deep-learning-with-python-bootcamp/",
    "category": "Deep Learning"
},
{
    "courseid": 78,
    "title": "Computer Vision Nanodegree",
    "platform": "Udacity",
    "price": "Paid",
    "link": "https://www.udacity.com/course/computer-vision-nanodegree--nd891",
    "category": "Computer Vision"
},
{
    "courseid": 79,
    "title": "Artificial Intelligence A-Z\u2122: Learn How To Build An AI",
    "platform": "Udemy",
    "price": "Paid",
    "link": "https://www.udemy.com/course/artificial-intelligence-az/",
    "category": "Artificial Intelligence"
},
{
    "courseid": 80,
    "title": "The Complete Self-Driving Car Course - Applied Deep Learning",
    "platform": "Udemy",
    "price": "Paid",
    "link": "https://www.udemy.com/course/applied-deep-learningtm-the-complete-self-driving-car-course/",
    "category": "Artificial Intelligence"
},
{
    "courseid": 81,
    "title": "Robotics Specialization",
    "platform": "Coursera",
    "price": "Paid",
    "link": "https://www.coursera.org/specializations/robotics",
    "category": "Robotics"
},
{
    "courseid": 82,
    "title": "Introduction to Robotics",
    "platform": "Stanford Online",
    "price": "Free",
    "link": "https://online.stanford.edu/courses/cs223a-introduction-robotics",
    "category": "Robotics"
},
{
    "courseid": 83,
    "title": "The Complete Guide to Modern JavaScript",
    "platform": "Frontend Masters",
    "price": "Paid",
    "link": "https://frontendmasters.com/courses/complete-javascript/",
    "category": "Programming"
},
{
    "courseid": 84,
    "title": "Advanced JavaScript",
    "platform": "Pluralsight",
    "price": "Paid",
    "link": "https://www.pluralsight.com/courses/advanced-javascript",
    "category": "Programming"
},
{
    "courseid": 85,
    "title": "Learn Python 3",
    "platform": "Codecademy",
    "price": "Free/Paid",
    "link": "https://www.codecademy.com/learn/learn-python-3",
    "category": "Programming"
},
{
  "courseid": 86,
  "title": "Data Engineering with Google Cloud",
  "platform": "Google Cloud",
  "price": "Free/Paid",
  "link": "https://cloud.google.com/training/courses/data-engineering",
  "category": "Data Engineering"
},
{
  "courseid": 87,
  "title": "Self-Driving Cars Specialization",
  "platform": "Udacity",
  "price": "Paid",
  "link": "https://www.udacity.com/course/self-driving-car-engineer-nanodegree--nd013",
  "category": "Autonomous Vehicles"
},


{
  "courseid": 88,
  "title": "Blockchain Development with Solidity",
  "platform": "Udemy",
  "price": "Paid",
  "link": "https://www.udemy.com/course/blockchain-developer/",
  "category": "Blockchain"
},
{
  "courseid": 89,
  "title": "Certified Kubernetes Administrator (CKA)",
  "platform": "Linux Foundation",
  "price": "Paid",
  "link": "https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/",
  "category": "Cloud Computing"
},
{
  "courseid": 90,
  "title": "AI for Everyone",
  "platform": "Coursera",
  "price": "Free/Paid",
  "link": "https://www.coursera.org/learn/ai-for-everyone",
  "category": "Artificial Intelligence"
},

{
  "courseid": 91,
  "title": "Python for Finance and Algorithmic Trading",
  "platform": "Udemy",
  "price": "Paid",
  "link": "https://www.udemy.com/course/python-for-finance-and-trading-algorithms/",
  "category": "Finance"
},
{
  "courseid": 92,
  "title": "Certified Ethical Hacker (CEH)",
  "platform": "EC-Council",
  "price": "Paid",
  "link": "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/",
  "category": "Cybersecurity"
},

{
  "courseid": 93,
  "title": "Big Data with Hadoop and Spark",
  "platform": "Udacity",
  "price": "Paid",
  "link": "https://www.udacity.com/course/big-data-with-hadoop-and-spark-nanodegree--nd027",
  "category": "Data Engineering"
},
{
  "courseid": 94,
  "title": "Reinforcement Learning Specialization",
  "platform": "Coursera",
  "price": "Paid",
  "link": "https://www.coursera.org/specializations/reinforcement-learning",
  "category": "Machine Learning"
},
{
  "courseid": 95,
  "title": "Introduction to Docker and Kubernetes",
  "platform": "A Cloud Guru",
  "price": "Paid",
  "link": "https://acloudguru.com/course/introduction-to-docker-and-kubernetes",
  "category": "DevOps"
},
{
  "courseid": 96,
  "title": "Advanced Java Programming",
  "platform": "Udemy",
  "price": "Paid",
  "link": "https://www.udemy.com/course/advanced-java-programming/",
  "category": "Programming"
},


{
  "courseid": 97,
  "title": "Introduction to Computer Graphics",
  "platform": "Udacity",
  "price": "Paid",
  "link": "https://www.udacity.com/course/cs291-introduction-to-computer-graphics--ud292",
  "category": "Computer Science"
},
{
  "courseid": 98,
  "title": "Cloud Native Development with Kubernetes",
  "platform": "Linux Academy",
  "price": "Paid",
  "link": "https://acloudguru.com/course/cloud-native-development-with-kubernetes",
  "category": "Cloud Computing"
},
{
  "courseid": 99,
  "title": "Data Visualization with D3.js",
  "platform": "Udacity",
  "price": "Paid",
  "link": "https://www.udacity.com/course/data-visualization-and-d3js--ud507",
  "category": "Data Science"
},
{
  "courseid": 100,
  "title": "Security Engineering Fundamentals",
  "platform": "Stanford Online",
  "price": "Free",
  "link": "https://online.stanford.edu/courses/cs155-computer-and-network-security",
  "category": "Cybersecurity"
},
{
  "courseid": 101,
  "title": "Operating Systems: Principles and Practice",
  "platform": "Udacity",
  "price": "Paid",
  "link": "https://www.udacity.com/course/operating-systems-principles--ud923",
  "category": "Computer Science"
},

{
  "courseid": 102,
  "title": "Artificial Intelligence for Trading",
  "platform": "Udacity",
  "price": "Paid",
  "link": "https://www.udacity.com/course/artificial-intelligence-for-trading--nd880",
  "category": "Artificial Intelligence"
},
{
  "courseid": 103,
  "title": "Microsoft Azure Fundamentals AZ-900",
  "platform": "Microsoft Learn",
  "price": "Free/Paid",
  "link": "https://learn.microsoft.com/en-us/certifications/exams/az-900/",
  "category": "Cloud Computing"
},

{
  "courseid": 104,
  "title": "Rust Programming for Beginners",
  "platform": "Udemy",
  "price": "Paid",
  "link": "https://www.udemy.com/course/rust-programming-for-beginners/",
  "category": "Programming"
},
{
  "courseid": 105,
  "title": "Internet of Things (IoT) Specialization",
  "platform": "Coursera",
  "price": "Paid",
  "link": "https://www.coursera.org/specializations/iot",
  "category": "IoT"
},
{
  "courseid": 106,
  "title": "AWS Certified DevOps Engineer",
  "platform": "A Cloud Guru",
  "price": "Paid",
  "link": "https://acloudguru.com/course/aws-certified-devops-engineer",
  "category": "DevOps"
},
{
  "courseid": 107,
  "title": "Neural Networks and Deep Learning",
  "platform": "Coursera",
  "price": "Paid",
  "link": "https://www.coursera.org/learn/neural-networks-deep-learning",
  "category": "Deep Learning"
},
{
  "courseid": 108,
  "title": "Computer Networks",
  "platform": "Youtube - Neso Academy",
  "price": "Free",
  "link": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx",
  "category": "Computer network"
},
{
  "courseid": 109,
  "title": "Database Management System",
  "platform": "Youtube - Neso Academy",
  "price": "Free",
  "link": "https://www.youtube.com/playlist?list=PLBlnK6fEyqRiyryTrbKHX1Sh9luYI0dhX",
  "category": "Database Management System"
},
{
  "courseid": 110,
  "title": "HTML and CSS Tutorials",
  "platform": "Youtube - freeCodeCamp.org",
  "price": "Free",
  "link": "https://www.youtube.com/playlist?list=PLWKjhJtqVAbnSe1qUNMG7AbPmjIG54u88",
  "category": "HTML and CSS Tutorials"
},
{
  "courseid": 111,
  "title": "Data Structures and Algorithms",
  "platform": "takeUforward A to Z sheet",
  "price": "Free",
  "link": "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/",
  "category": "Data Structures and Algorithms"
},
];

/*Upload multiple courses to Firestore */
const uploadData = async (courses) => {
    try {
        const coursesRef = collection(dbFirestore, "courses");

        for (let course of courses) {
            if (!course.platform) {
                console.warn(`⚠️ Skipping course "${course.title}" due to missing platform.`);
                continue;
            }

            await addDoc(coursesRef, {
                title: course.title,
                platform: extractPlatformName(course.platform), 
                price: course.price,
                link: course.link,
                category: course.category,
            });

            console.log(`Uploaded: ${course.title}`);
        }
        console.log("All courses uploaded successfully!");
    } catch (error) {
        console.error("Error uploading courses:", error);
    }
};


const extractPlatformName = (platform) => {
    if (!platform) return "Unknown Platform";

    const match = platform.match(/\[(.*?)\]/);
    return match ? match[1] : platform; 
};



uploadData(courses);

  
