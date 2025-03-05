import Background_1 from "../assets/Background_1.jpg";
import Edge_iot from "../assets/edge_ML_Certificate.jpg";
import DS from "../assets/python-for-datascience.jpg.png";
import ML from "../assets/ML_certificate.jpg.png";
import java from "../assets/programming-in-java.jpg.png";
import sem_1 from "../assets/1sem_result.png";
import sem_2 from "../assets/sem_2.png";
import sem_3 from "../assets/sem_3.png";
import DBMS from "../assets/DBMS.png";
import ML_internship from "../assets/ML_internship Certificate.png";
import cyber from "../assets/certificate-cyber security .jpg";
import attendance from "../assets/attendance_logo.jpg";
import covid from "../assets/covid-dashboard.jpg";
import waste from "../assets/Waste_Management_logo.png";
import jobsearch from "../assets/JobSearch_logo.jpg";
import atm from "../assets/atm_logo.jpg";
import img_encryption from "../assets/image_encryption_logo.jpg";
import shortlisted from "../assets/Screenshot 2025-02-27 081343.png";
import express from "../assets/Express_Certificate.png";
import leetcode from "../assets/leetcode.png";

const projects = {
  1: {
    image_link: waste,
    project_name: "Waste Management System",
    project_desc:
      "A web application that helps in managing waste collection and disposal in a smart city. The system uses IoT sensors to monitor waste levels in bins and optimize waste collection routes for efficiency and cost savings.",
    specs: {
      1: "GPT integration",
      2: "Report generation",
      3: "Data visualization",
      4: "Real-time monitoring",
    },
    link: "https://github.com/vineetsharma9252/waste-management-system",
  },
  2: {
    image_link: attendance,
    project_name: "Attendance2Excel",
    project_desc:
      "A Django Based Web Application that Extracts Text from Attedance SHeet and stores it in Excel Sheet.",
    specs: {
      1: "OCR",
      2: "Django",
      3: "Excel",
      4: "Python",
    },
    link: "https://github.com/vineetsharma9252/AttendImage2Xcel",
  },
  3: {
    image_link: covid,
    project_name: "Covid 19 DashBoard",
    project_desc:
      "A Web Application that shows the real time data of Covid 19 cases in India. It also shows the data of the world.",
    specs: {
      1: "Covid 19 Analysis",
      2: "Data Visualization",
      3: "Data Analysis",
    },
    link: "https://github.com/vineetsharma9252/COVID-19-Analysis",
  },
  4: {
    image_link: atm,
    project_name: "ATM interface",
    project_desc:
      "A simple ATM interface using Java. The system allows users to check their account balance, withdraw cash, and deposit money and can see Transaction history.",
    specs: {
      1: "Java",
      2: "Transaction History",
      3: "Account Balance",
      3: "SQL",
    },
    link: "https://github.com/vineetsharma9252/BankingSystem",
  },
  5: {
    image_link: jobsearch,
    project_name: "JobSearch Portal",
    project_desc:
      "A web application that helps job seekers find suitable job opportunities. The system allows users to search for jobs based on their preferences and apply for them online.",
    specs: {
      1: "Job Search",
      2: "Job Application",
      3: "API Integration",
    },
    link: "https://github.com/vineetsharma9252/JobSearch",
  },
  6: {
    image_link: img_encryption,
    project_name: "Image Encryption System",
    project_desc:
      "A Python-based system that encrypts and decrypts images using symmetric key encryption algorithms. The system ensures data security and confidentiality of images.",
    specs: {
      1: "Image Encryption",
      2: "Symmetric Key Encryption",
      3: "Data Security",
    },
    link: "https://github.com/vineetsharma9252/image_encryption_system",
  },
};

const blog_post = {
  1: {
    img: shortlisted,
    name: "Shortlisted for Web Development Internship",
    desc: "Dear Vineet Sharma , We are pleased to inform you that you have been shortlisted for the Web Development Internship at Edunutshell .Your Qualifications and experiences stood out among many impressive candidates.",
    category: "Internship",
    date: "2025 Feb",
  },
  2: {
    img: express,
    name: "Express Certification",
    desc: "Completed my Scaler certification in Express, Mastering the concepts of Express, Node.js, and RESTful APIs.",
    category: "Certifications",
    date: "2025 Feb",
  },
  3: {
    img: "",
    name: "SIH Hackathon 2024",
    desc: "Participated in Hackathon 2024 and built a project on waste management system. That project was selected in top 10 projects.",
    category: "Hackathon",
    date: "2024 September",
  },
  4: {
    img: sem_3,
    name: "Third Semester Results",
    desc: "Another step forward! My third-semester results are out, showing steady progress in my studies.",
    category: "Academics",
    date: "2024 December",
  },
  5: {
    img: DBMS,
    name: "Database Management Systems",
    desc: "Studied relational databases, SQL queries, indexing, and transactions for efficient data management.",
    category: "Academics",
    date: "September 2024",
  },
  6: {
    img: ML_internship,
    name: "ML Internship Certificate",
    desc: "This training taught me the real meaning of ML and Data Science. Special thanks to Diginique Techlabs institute for providing the internship.",
    category: "Machine Learning",
    date: "2023 June",
  },
  7: {
    img: leetcode,
    name: "LeetCode 300+ Problems",
    desc: "Solved 300+ problems on LeetCode. The journey was tough but it was worth it.",
    category: "Coding",
    date: "2023 June",
  },
  8: {
    img: sem_2,
    name: "Second Semester Results",
    desc: "Progressing further! Here are my results from the second semester.",
    category: "Academics",
    date: "2024 April",
  },
  9: {
    img: ML,
    name: "Machine Learning Certification",
    desc: "Dived into the world of AI and ML! Learned regression, classification, and model evaluation techniques.",
    category: "Certifications",
    date: "2024 April",
  },
  10: {
    img: java,
    name: "Programming in Java Certification",
    desc: "Completed my NPTEL certification in Java, mastering object-oriented programming and multithreading concepts.",
    category: "Certifications",
    date: "2024 April",
  },
  11: {
    img: DS,
    name: "Python for Data Science",
    desc: "Gained hands-on experience with Python for data science, covering Pandas, NumPy, and visualization techniques.",
    category: "Certifications",
    date: "2023 October",
  },
  12: {
    img: "",
    name: "SIH Hackathon 2023",
    desc: "Participated in SIH Hackathon 2023 and was the youngest participant in the hackathon.",
    category: "Hackathon",
    date: "2023 September",
  },
  13: {
    img: sem_1,
    name: "First Semester Results",
    desc: "An important milestone! Here are my results from my first semester of engineering.",
    category: "Academics",
    date: "2023 August",
  },
  14: {
    img: Edge_iot,
    name: "Completing First NPTEL Course",
    desc: "A new beginning! Successfully completed my first NPTEL course on the Foundation of Edge IoT.",
    category: "Certifications",
    date: "2023 February",
  },
  15: {
    img: cyber,
    name: "Certificate of Cyber Security",
    desc: "Certificate of a cyber security course is a must. Our own college faculty taught it.",
    category: "Cyber Security",
    date: "2023 January",
  },
};
export { blog_post, Background_1, projects };
