import { blind, cds } from "../assets/images";
import {
  key,
  car,
  contact,
  css,
  estate,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  sass,
  tailwindcss,
  typescript,
  python,
  express,
  weather,
  resume,
  watermelon,
  id,
  game,
  star,
  calculator,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
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
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: python,
    name: "python",
    type: "Database",
  },
  {
    imageUrl: express,
    name: "express",
    type: "Database",
  },
];

export const experiences = [
  {
    title: "Next.js Developer",
    company_name: "Blind",
    icon: blind,
    iconBg: "#accbe1",
    date: "June 2023 - Sept 2023",
    points: [
      "Developing and maintaining web applications using Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Field Operation Technician",
    company_name: "CDS",
    icon: cds,
    iconBg: "#fbc3bc",
    date: "Feb 2017 - April 2020",
    points: [
      "Maintained and optimized Point of Sales (POS) systems and databases using SQL, ensuring data integrity and efficient performance.",
      "Programmed and installed various credit card terminals, such as Verifone, PAX, First Data, and Ingenico, while ensuring compliance with industry standards and regulations.",
      "Managed projects, prioritized tasks, and ensured timely completion while adhering to relevant regulations and client expectations.",
      "Managed on-site installations, including cable organization, network setup, and security measures, to guarantee optimal system performance and reliability.",
    ],
  },
  {
    title: "Client Relationship Management",
    company_name: "CDS",
    icon: cds,
    iconBg: "#b7e4c7",
    date: "Jan 2016 - Feb 2017",
    points: [
      "Provided exceptional customer service by assisting clients with credit card transactions, terminal troubleshooting, and resolving any technical issues promptly.",
      "Actively listened to clients' needs and provided relevant information on credit card terminal options, software updates, and business process improvements.",
      "Maintained organized records of vital customer documents, ensuring easy access and retrieval for future reference.",
      "Developed and delivered comprehensive training programs for new employees in customer service, company procedures, troubleshooting techniques, and professional behavior, contributing to a high-performing and cohesive team.",
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
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/hahjimah",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/elliot-kim-943a42171/",
  },
];

export const projects = [
  {
    iconUrl: id,
    theme: "btn-back-red",
    name: "Personal Portfolio",
    description:
      "Embark on a journey through my professional landscape with my 3D Personal Portfolio. This project transcends traditional online resumes, offering an immersive, interactive 3D world that represents my skills, experiences, and projects.",
    link: "https://github.com/hahjimah/3d_portfolio",
  },
  {
    iconUrl: game,
    theme: "btn-back-green",
    name: "Suika Game",
    description:
      'Step into "Suika," an enthralling game where strategy meets fun, challenging players to skillfully drop fruits into a container, aiming for high scores while avoiding overflow',
    link: "https://github.com/hahjimah/suika-game",
  },
  {
    iconUrl: star,
    theme: "btn-back-yellow",
    name: "TicTacToe",
    description:
      "This endeavor exemplifies my skill in elevating a basic game into a refined and intellectually engaging experience. It's a testament to my proficiency in crafting algorithms that enhance gameplay complexity and in designing interfaces that enrich user interaction, turning a simple pastime into a captivating challenge.",
    link: "https://github.com/hahjimah/TicTacToe",
  },
  {
    iconUrl: key,
    theme: "btn-back-blue",
    name: "Rest API With NodeJS",
    description:
      "This Node.js project is a REST API for a product inventory system, built using Express.js. It allows users to add, retrieve, update, and delete products, each identified by a unique ID, from an in-memory array. The API handles various HTTP requests, providing JSON responses and uses the crypto module for generating unique product IDs.",
    link: "https://github.com/hahjimah/Rest_API_With_NodeJS",
  },
  {
    iconUrl: calculator,
    theme: "btn-back-orange",
    name: "Tip-Calculator",
    description:
      "This project is a simple tip calculator that allows users to enter a bill amount, select a tip percentage, and see the tip and total values. It also includes a feature to calculate the total amount owed, which is calculated by adding the bill amount and the tip amount.",
    link: "https://github.com/hahjimah/tip-calculator-app",
  },
];

export const educations = [
  {
    name: "Bellevue College",
    major: "Computer Science Major",
    icon: resume,
    iconBg: "#BB8FCE",
    date: "Sept 2019 - Dec 2023",
    skills: [
      "C/C++",
      "TypeScript",
      "JavaScript",
      "Java",
      "Python",
      "Kotlin",
      "MySQL",
      "MongoDB",
      "CSS",
      "Project Management",
      "Web Development",
      "Development",
      "Problem Solving",
      "Team Collaboration",
      "Agile Programing",
    ],
  },
];
