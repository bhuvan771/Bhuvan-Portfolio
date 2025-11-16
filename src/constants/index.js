// src/constants/index.js
import { meta, School, shopify, starbucks, tesla, Vels, sutherland, Default } from "../assets/images";

import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  python,
  react,
  redux,
  sass,
  snapgram,
  Gmail,
  SQL,
  summiz,
  tailwindcss,
  threads,
  typescript,
  n8n,
  postgres,
  whatsapp
} from "../assets/icons";

/* ---------------- SKILLS ---------------- */
export const skills = [
  { imageUrl: html, name: "HTML", type: "Frontend" },
  { imageUrl: css, name: "CSS", type: "Frontend" },
  { imageUrl: javascript, name: "JavaScript", type: "Frontend" },
  { imageUrl: python, name: "Python", type: "Backend" },
  { imageUrl: SQL, name: "SQL", type: "Backend" },
  { imageUrl: postgres, name: "PostgreSQL", type: "Database" },
  { imageUrl: nextjs, name: "Next.js", type: "Frontend" },
  { imageUrl: react, name: "React", type: "Frontend" },
  { imageUrl: tailwindcss, name: "Tailwind CSS", type: "Frontend" },
  { imageUrl: git, name: "Git", type: "Version Control" },
  { imageUrl: github, name: "GitHub", type: "Version Control" },
  { imageUrl: n8n, name: "n8n Automation", type: "Automation Tool" },
];

/* ------------- ACADEMIC EXPERIENCES ------------- */
export const experiences = [
  {
    title:
      "Bachelor of Science in Computer Science with Artificial Intelligence and Machine Learning",
    company_name:
      "Vels Institute of Science, Technology & Advanced Studies (VISTAS)",
    location: "Chennai, Tamil Nadu, India",
    icon: Vels,
    iconBg: "#f0f0f0",
    date: "June 2022 - June 2025",
    points: [
      "CGPA: 7.02",
      "Studied core subjects including Data Structures, Machine Learning, Deep Learning, and AI Applications.",
      "Worked on projects involving data analysis, machine learning algorithms, and programming.",
      "Technologies used: Python, SQL, R Programming, and more.",
    ],
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    company_name: "Don Bosco Higher Secondary School",
    location: "Chennai, Tamil Nadu, India",
    icon: School,
    iconBg: "#fbc3bc",
    date: "June 2021 - May 2022",
    points: [
      "Completed HSC in the Science stream with a focus on Mathematics and Computer Science.",
      "Secured 63% in the Tamil Nadu State Board Examination.",
      "Core subjects included Physics, Chemistry, Mathematics, Computer Science, and English.",
    ],
  },
  {
    title: "Secondary School Leaving Certificate (SSLC)",
    company_name: "Don Bosco Higher Secondary School",
    location: "Chennai, Tamil Nadu, India",
    icon: School,
    iconBg: "#b7e4c7",
    date: "June 2019 - May 2020",
    points: [
      "Completed Tamil Nadu State Board SSLC examination with 65% marks.",
      "Core subjects included Mathematics, Science, Social Science, English, and Tamil.",
      "Built a strong academic foundation in Science and Mathematics.",
    ],
  },
];

/* ---------------- WORK EXPERIENCES ----------------
   Advantix (current) + Sutherland internship (Shutterfly process)
*/
export const workExperiences = [
  {
    title: "AI Automation Engineer",
    company_name: "Advantix AGI LLP",
    location: "Chennai, Tamil Nadu, India",
    icon: Default, 
    iconBg: "#4B70F5",
    date: "Sep 15, 2025 - Present",
    points: [
      "Building AI-based workflow automation using n8n.",
      "Developed email automation systems and smart reorder automation.",
      "Created AI assistants for Instagram and WhatsApp using LLaMA 3, Ollama, and fine-tuned models.",
      "Working on an Algo Trading App where AI predicts signals and executes buy/sell using FinGPT.",
      "Integrating real-time AI decision making for stock trades (in progress).",
    ],
  },

  {
  title: "Associate – Chat Support Intern (Shutterfly Process)",
  company_name: "Sutherland Global Services Pvt Ltd",
  location: "Chennai, Tamil Nadu, India",
  icon: sutherland,
  iconBg: "#FFD4D4",
  date: "Oct 28, 2024 - Dec 30, 2024",
  points: [
    "Completed an internship supporting the Shutterfly process through real-time chat assistance.",
    "Handled customer queries related to orders, product issues, and account support.",
    "Maintained high accuracy and ensured timely resolutions across all chats.",
    "Achieved a daily CSAT score of 8/10, earning appreciation from customers and supervisors.",
    "Recognized for sincerity, consistency, and strong work ethic throughout the internship period.",
  ],
},


];

export const socialLinks = [
  { name: "Contact", iconUrl: contact, link: "/contact" },
  {
    name: "Gmail",
    iconUrl: Gmail,
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=bhuvankumar142004@gmail.com",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/bhuvankumar-kumar-0539b2351/",
  },

  {
    name: "WhatsApp",
    iconUrl: whatsapp,
    link: "https://wa.me/919003024825?text=Thank%20you%20for%20taking%20the%20time%20to%20view%20my%20portfolio.%20How%20can%20I%20help%20you%20today%3F",

  },
];

export const ProjectsList = [
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI-Powered Personalized Finance Assistant",
    description:
      "Developed an AI-based finance assistant as part of a startup concept called 'Creatzion'. The app includes features like an AI chatbot, receipt scanner, downloadable financial statements, and Google authentication for secure login. Built to help users manage and understand their finances more effectively.",
    link: "https://creatzion.vercel.app/",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-blue",
    name: "Social Media Automation System",
    description:
      "A fully automated workflow that posts images to Twitter/X. When an image is uploaded to Google Drive, the system fetches its caption from Google Sheets, posts it to Twitter, and logs all activity—including tweet ID—back into Sheets.",
    link: "https://bhuvan-automation-twitter.netlify.app/",
  },
];
