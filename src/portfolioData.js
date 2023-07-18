import memoryGame from "./static/images/portfolio/memory.png";
import dictionaryGame from "./static/images/portfolio/dictionary.png";
import rockPaperScissors from "./static/images/portfolio/rockPaperScissors.png";
import tlipApi from "./static/images/portfolio/tlip-api.png";
import tlipWeb from "./static/images/portfolio/tlip.png";

export const externalLinks = {
  github: "https://github.com/jillo-abdullahi",
  linkedIn: "https://www.linkedin.com/in/jilloabdullahi/",
  twitter: "https://twitter.com/jillo_woche",
  repositories: "https://github.com/jillo-abdullahi?tab=repositories",
};

export const experiences = [
  {
    type: "work",
    title: "Full Stack Software Engineer",
    company: "Syndicate",
    companyUrl: "https://www.linkedin.com/company/syndicate-protocol/",
    location: "Global",
    date: "2021 - 2023",
    description: [
      "Developed and maintained complex, scalable web applications using TypeScript, ReactJS, and NextJS.",
      "Worked closely with designers, product managers, and other engineers to deliver high-quality software solutions.",
      "Collaborated with other engineers to build reusable components and libraries for future use.",
      "Interpreted Ethereum smart contracts and integrated Web3 functionality into applications.",
      "Worked with the team to improve the codebase and overall product quality.",
    ],
  },
  {
    type: "work",
    title: "Front-end Software Engineer",
    company: "Cellulant",
    companyUrl: "https://www.linkedin.com/company/cellulant/",
    location: "Nairobi, Kenya",
    date: "2019 - 2021",
    description: [
      "Worked closely with the design team to dramatically improve the accessibility and user-friendliness of applications with React and NextJS.",
      "Continuously iterated over front-end web apps and used observation tools like Hotjar to significantly improve user payment flows for over 6 payment options.",
      "Collaborated with the back-end team to build reusable components and libraries for future use.",
    ],
  },
  {
    type: "work",
    title: "Full Stack Software Engineer",
    company: "Andela",
    companyUrl: "https://www.linkedin.com/company/andela/",
    location: "Nairobi, Kenya",
    date: "2018 - 2019",
    description: [
      "Collaborated with the design team to quickly and efficiently build front-end apps using ReactJS.",
      " Collaborated with team members to build and deploy a performant REST API using Python/Django within a month.",
      "Worked with the team to improve the codebase and overall product quality.",
    ],
  },
  {
    type: "work",
    title: "Team Leader",
    company: "Sama",
    companyUrl: "https://www.linkedin.com/company/sama-ai/",
    location: "Nairobi, Kenya",
    date: "2016 - 2018",
    description: [
      "Supervised and coordinated the work efforts of a team of 22 leading to the success of a major pilot project.",
      "Ensured that the allocated work is done professionally as per the required standards and targets as defined and desired by Sama.",
      "Ensured that the team is motivated and that the team members are working in harmony.",
      "Closely worked with the training and quality departments to achieve targeted SLAs.",
    ],
  },
  {
    type: "work",
    title: "Quality Analyst",
    company: "Sama",
    companyUrl: "https://www.linkedin.com/company/sama-ai/",
    location: "Nairobi, Kenya",
    date: "2015 - 2016",
    description: [
      "Analyzed the levels of quality of work in the different Sama work streams, measuring compliance against set standards and recommending actions to be taken to improve quality based on assessment findings.",
      "Assessed agents transactions and adviced on required measures to improve quality.",
      "compiled and sent reports to the training and quality manager and to other relevant stakeholders and ensured that each work stream is consistently delivering standard work.",
    ],
  },
  {
    type: "education",
    title: "Bachelor of Science in Information Technology",
    company: "Jomo Kenyatta University of Agriculture and Technology",
    companyUrl: "https://www.linkedin.com/school/jkuat/",
    location: "Nairobi, Kenya",
    date: "2012 - 2015",
    description: [
      "Comprehensive technology education.",
      "In-demand Skills.",
      "Problem solving and innovation.",
      "Collaboration and communication",
    ],
  },
];

export const portfolioProjects = [
  {
    title: "Memory Game",
    description:
      "A fun memory game where players try to match pairs against each other or against the CPU.",
    image: memoryGame,
    preview: "https://memory-game-green-nine.vercel.app/",
    github: "https://github.com/jillo-abdullahi/memory-game",
    stacks: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    completed: true,
  },
  {
    title: "Supply Chain Management App",
    description:
      "This is the frontend for a Supply Chain Items application. This application interfaces with a Node.js REST API to perform CRUD operations on supply chain items.",
    image: tlipWeb,
    preview: "https://tlip-frontend.vercel.app/",
    github: "https://github.com/jillo-abdullahi/tlip-frontend",
    stacks: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    completed: true,
  },
  {
    title: "Supply Chain Management API",
    description:
      "This is a REST API for managing supply chain items and their events using Express.js and PostgreSQL.",
    image: tlipApi,
    preview: "https://tlip-api.onrender.com/api-docs/#/",
    github: "https://github.com/jillo-abdullahi/tlip-api",
    stacks: ["NodeJS", "ExpressJS", "PostgreSQL", "Docker"],
    completed: true,
  },
  {
    title: "Dictionary web app solution",
    description:
      "A dictionary web app built with TailwindCSS and Next.js. It uses a free Dictionary API to fetch data for the searched word. It also uses the Web Speech API to play the audio file for the searched word.",
    image: dictionaryGame,
    preview: "https://dictionary-web-app-ashy.vercel.app/",
    github: "https://github.com/jillo-abdullahi/dictionary-web-app",
    stacks: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    completed: true,
  },
  {
    title: "Advanced Rock Paper Scissors",
    description:
      "A Rock, Paper, Scissors, Lizard, Spock game you can play against the CPU.",
    image: rockPaperScissors,
    preview: "https://advanced-rock-paper-scissors.vercel.app/",
    github: "https://github.com/jillo-abdullahi/advanced-rock-paper-scissors",
    stacks: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    completed: false,
  },
];

export const skills = {
  backend: [
    { name: "Node.js", level: "85%" },
    { name: "NestJS/Express.js", level: "89%" },
    { name: "Python - Django", level: "60%" },
    { name: "GraphQL/REST APIs", level: "90%" },
    { name: "Solidity", level: "30%" },
  ],
  frontend: [
    { name: "ReactJS", level: "90%" },
    { name: "JavaScript/TypeScript", level: "90%" },
    { name: "NextJS", level: "85%" },
    { name: "HTML/CSS", level: "89%" },
    { name: "Tailwind CSS", level: "85%" },
  ],
  databases: [
    { name: "PostgreSQL", level: "82%" },
    { name: "MySQL", level: "75%" },
    { name: "Google Firestore", level: "80%" },
    { name: "SQLite", level: "70%" },
    { name: "MongoDB", level: "60%" },
  ],
  devops: [
    { name: "Docker", level: "80%" },
    { name: "Firebase", level: "70%" },
    { name: "Netlify", level: "80%" },
    { name: "Vercel", level: "80%" },
    { name: "CircleCI", level: "60%" },
  ],
};
