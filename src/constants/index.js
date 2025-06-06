import { meta, School, shopify, starbucks, tesla, Vels } from "../assets/images";
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
} from "../assets/icons";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },

  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },

  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },

  {
    imageUrl: python,
    name: "python",
    type: "Backend",
  },

  {
    imageUrl: SQL,
    name: "SQL",
    type: "Backend",
  },

  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },

  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },

  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },

  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
];

export const experiences = [
  {
    title:
      "Bachelor of Science in Computer Science with Artificial Intelligence and Machine Learning",
    company_name:
      "Vels Institute of Science, Technology & Advanced Studies (VISTAS)",
    location: "Chennai, Tamil Nadu, India",
    icon: Vels,
    iconBg: "#f0f0f0",
    date: "June 2022 -  May 2025",
    points: [
      "Current CGPA: 6.8 (up to fifth semester).",
      "Studied core subjects including Data Structures, Machine Learning, Deep Learning, and AI Applications.",
      "Worked on projects involving data analysis, machine learning algorithms, and programming.",
      "Technologies used: Python, SQL,  R Programming, and more.",
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

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
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
];
