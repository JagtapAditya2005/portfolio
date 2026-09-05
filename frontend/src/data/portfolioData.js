// ============================================================
// PORTFOLIO DATA
// All data previously served by the Django backend
// ============================================================

export const profile = {
  id: 1,
  name: "Aditya Jagtap",
  tagline: "Python Full Stack Developer",
  about:
    "Python Full Stack Developer,\nData Analyst,\nAI/ML.",
  profile_image: "/media/profile/profile.png",
  resume: "/media/resume/resume.pdf",
  github_url: "https://github.com/JagtapAditya2005",
  linkedin_url: "https://www.linkedin.com/in/adityajagtap77",
  email: "aditya.a.jagtap77@gmail.com",
  phone: "9699109602",
  location: "Chakan, Pune",
};


export const skills = [
  {
    id: 1,
    name: "Python",
    category: "Programming",
    percentage: 90,
    icon: "🐍",
  },
  {
    id: 2,
    name: "Django",
    category: "Backend",
    percentage: 85,
    icon: "🌐",
  },
  {
    id: 3,
    name: "React.js",
    category: "Frontend",
    percentage: 82,
    icon: "⚛️",
  },
  {
    id: 4,
    name: "JavaScript",
    category: "Frontend",
    percentage: 82,
    icon: "✨",
  },
  {
    id: 5,
    name: "HTML",
    category: "Frontend",
    percentage: 90,
    icon: "📄",
  },
  {
    id: 6,
    name: "CSS",
    category: "Frontend",
    percentage: 89,
    icon: "🎨",
  },
  {
    id: 7,
    name: "REST APIs",
    category: "Other",
    percentage: 80,
    icon: "🔗",
  },
  {
    id: 8,
    name: "Git & GitHub",
    category: "Tools",
    percentage: 78,
    icon: "📦",
  },
  {
    id: 9,
    name: "AI & Machine Learning",
    category: "AI/ML",
    percentage: 75,
    icon: "🤖",
  },
  {
    id: 10,
    name: "Power BI",
    category: "Data Science",
    percentage: 75,
    icon: "📊",
  },
  {
    id: 11,
    name: "PostgreSQL",
    category: "Database",
    percentage: 85,
    icon: "🗄️",
  },
  {
    id: 12,
    name: "Excel",
    category: "Data Science",
    percentage: 80,
    icon: "📈",
  },
  {
    id: 13,
    name: "OpenCV",
    category: "Data Science",
    percentage: 80,
    icon: "👁️",
  },
  {
    id: 14,
    name: "Fast API",
    category: "Backend",
    percentage: 80,
    icon: "⚡",
  },
  {
    id: 15,
    name: "TailwindCSS",
    category: "Frontend",
    percentage: 80,
    icon: "🖌️",
  },
  {
    id: 16,
    name: "MySQL",
    category: "Database",
    percentage: 80,
    icon: "🗄️",
  },
  {
    id: 17,
    name: "MongoDB",
    category: "Database",
    percentage: 80,
    icon: "🗄️",
  },
  {
    id: 18,
    name: "VS Code",
    category: "Tools",
    percentage: 80,
    icon: "</>",
  },
  {
    id: 19,
    name: "Postman",
    category: "Tools",
    percentage: 80,
    icon: "🧪",
  },
  {
    id: 20,
    name: "Problem Solving",
    category: "Other",
    percentage: 80,
    icon: "🧠",
  },
];


export const education = [
  {
    id: 1,
    degree: "10TH Class",
    institution: "Jai Hanuman Vidyalaya, Watephal",
    location: "Watephal, Paranda, Dharashiv",
    start_year: "2020",
    end_year: "2021",
    description: "",
    grade: "83%",
  },
  {
    id: 2,
    degree: "12TH Class",
    institution:
      "Shikshan Maharshi Guruvarya R. G. Shinde Mahavidyalaya , Paranda",
    location: "Paranda, Dharashiv",
    start_year: "2022",
    end_year: "2023",
    description: "",
    grade: "67.33%",
  },
  {
    id: 3,
    degree: "BE",
    institution: "P.K Technical Campus Pune",
    location: "Chakan, Pune",
    start_year: "2023",
    end_year: "2027",
    description: "affiliated to Savitribai Phule Pune University (SPPU)",
    grade: "8.82",
  },
];


export const experience = [
  {
    id: 1,
    job_title: "Python Full Stack Development Intern",
    company: "The Kiran Academy",
    location: "Chinchwad, Pune",
    start_date: "2025-10-07",
    end_date: "2026-01-02",
    is_current: false,
    description:
      "Developed web applications using Python, Django, React.js, REST APIs, and SQL while gaining hands-on experience in full-stack development.",
    technologies:
      "Python, Django, React.js, JavaScript, HTML, CSS, SQL, REST API.",
    company_url: "https://thekiranacademy.com",
  },
  {
    id: 2,
    job_title: "Data Analyst Intern",
    company: "Softhub Yess Infotech Pvt.Ltd.",
    location: "Hadapsar, Pune",
    start_date: "2025-01-01",
    end_date: "2026-02-05",
    is_current: false,
    description:
      "Analyzed and visualized data using Python, Pandas, Excel, and Power BI to generate insights and support data-driven decisions.",
    technologies:
      "Python, Pandas, Excel, Power BI, Data Analysis, Data Visualization, SQL.",
    company_url: "https://www.yessinfotech.com",
  },
];


export const projects = [
  {
    id: 1,
    title: "Exam Portal",
    description:
      "Online examination system built with Python and Django for conducting exams, managing students, and handling examination results.",
    technologies: "Python, Django, HTML, CSS, JavaScript, ReactJS, TailwindCSS",
    image: "/media/projects/exam-app-img.jpeg",
    github_url: "https://github.com/JagtapAditya2005/exam-portal",
    demo_url: "https://exam-portal-by-aditya.vercel.app",
    featured: false,
  },
  {
    id: 2,
    title: "E-Commerce",
    description:
      "Full-stack e-commerce platform built using Django, React.js, MongoDB and Tailwind CSS with a responsive and user-friendly shopping experience.",
    technologies: "Python, Django, React.js, Tailwind CSS, JavaScript",
    image: "/media/projects/exam-app-img.jpeg",
    github_url: "https://github.com/adityajagtap",
    demo_url: "https://google.com",
    featured: false,
  },
];


export const certificates = [
  {
    id: 1,
    title: "Python Full Stack Development",
    issuer: "The Kiran Academy",
    issue_date: "2026-02-12",
    description: "",
    certificate_image:
      "/media/certificates/KiranAcademyInternshipCertificate.png",
    certificate_url: "",
  },
  {
    id: 2,
    title: "Data Analytics",
    issuer: "Softhub Yess Infotech Pvt. Ltd.",
    issue_date: "2026-02-05",
    description: "",
    certificate_image:
      "/media/certificates/yessInfotechIntershipCertificate.png",
    certificate_url: "",
  },
  {
    id: 3,
    title: "Power BI",
    issuer: "Skill Course",
    issue_date: "2026-01-28",
    description: "",
    certificate_image:
      "/media/certificates/Certificate_SC-59521AFCF1.png",
    certificate_url: "",
  },
];
