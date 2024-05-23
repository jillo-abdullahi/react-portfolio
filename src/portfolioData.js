import memoryGame from "./static/images/portfolio/memory.png";
import dictionaryGame from "./static/images/portfolio/dictionary.png";
import rockPaperScissors from "./static/images/portfolio/rockPaperScissors.png";
import homestead from "./static/images/portfolio/homestead.png";
import tstkpresale from "./static/images/portfolio/tstkpresale.png";
import devlinks from "./static/images/portfolio/devlinks.png";
import syndicateLogo from "./static/images/experience/syndicateLogo.jpeg";
import iotaLogo from "./static/images/experience/iotaLogo.jpeg";
import cellulantLogo from "./static/images/experience/cellulantLogo.jpeg";
import andelaLogo from "./static/images/experience/andelaLogo.jpeg";
import samaLogo from "./static/images/experience/samaLogo.jpeg";
import jkuatLogo from "./static/images/experience/jkuatLogo.jpeg";

export const externalLinks = {
  github: "https://github.com/jillo-abdullahi",
  linkedIn: "https://www.linkedin.com/in/jilloabdullahi/",
  twitter: "https://x.com/jillo_woche",
  facebook: "https://www.facebook.com/jilloabdullah/",
  stackoverflow: "https://stackoverflow.com/users/7300926/jillo-abdullahi",
  repositories: "https://github.com/jillo-abdullahi?tab=repositories",
  instagram: "https://www.instagram.com/jillo_woche/",
  calLink: "https://cal.com/jillowoche/15min",
};

export const experiences = [
  {
    type: "work",
    title: "Full Stack Software Engineer",
    company: "IOTA",
    companyUrl: "https://www.linkedin.com/company/iotafoundation/",
    companyLogo: iotaLogo,
    location: "Nairobi, Kenya",
    date: "2023 - 2024",
    description: [
      "Wrote high-performance, secure, and maintainable code that met business requirements and followed industry best practices.",
      "Developed a full stack web application using modern technologies such as React, Node.js, and DynamoDB.",
    ],
  },
  {
    type: "work",
    title: "Full Stack Software Engineer",
    company: "Syndicate",
    companyUrl: "https://www.linkedin.com/company/syndicate-protocol/",
    companyLogo: syndicateLogo,
    location: "Global, OO",
    date: "2021 - 2023",
    description: [
      "Successfully built (from the ground up) and deployed a performant web3 dApp within 3 months using TypeScript and React on the Ethereum and Polygon chains.",
      "Successfully built and launched Collectives, a dApp feature focused on creating communities around generative art NFTs.",
      "Collaborated with team members to develop and deploy a GraphQL back-end API to store off-chain data within a month.",
      "Wrote robust tests for the existing smart contracts to ensure reliability and security.",
    ],
  },
  {
    type: "work",
    title: "Front-end Software Engineer",
    company: "Cellulant",
    companyUrl: "https://www.linkedin.com/company/cellulant/",
    companyLogo: cellulantLogo,
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
    companyLogo: andelaLogo,
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
    companyLogo: samaLogo,
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
    companyLogo: samaLogo,
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
    companyLogo: jkuatLogo,
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
    title: "A link sharing app for developers",
    description:
      "A fully-functional link-sharing app for developers. You can now consolidate and share your links to different platforms with just one URL.",
    image: devlinks,
    preview: "https://my-links-amber.vercel.app/",
    github: "https://github.com/jillo-abdullahi/my-links",
    stacks: ["Nest.js", "Vue.js", "TailwindCSS", "TypeScript", "Postgres"],
    completed: true,
  },
  {
    title: "An ERC-20 token pre-sale dApp",
    description:
      "A dApp that allows users to participate in an ERC-20 token pre-sale using the Polygon Mumbai chain.",
    image: tstkpresale,
    preview: "https://tstk-beincrypto.vercel.app/",
    github: "https://github.com/jillo-abdullahi/tstk-beincrypto",
    stacks: ["Mantine UI", "TypeScript", "Connect-kit", "Wagmi"],
    completed: true,
  },
  {
    title: "A real estate listing platform",
    description:
      "An app that allows users to list properties for sale. User can register accounts, login, add, edit, and delete properties.",
    image: homestead,
    preview: "https://homestead-three.vercel.app/",
    github: "https://github.com/jillo-abdullahi/homestead",
    stacks: ["Next.js", "GraphQL", "TypeScript", "Postgres with Prisma"],
    completed: true,
  },
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
    { name: "React.js", level: "90%" },
    { name: "Vue.js", level: "80%" },
    { name: "JavaScript/TypeScript", level: "90%" },
    { name: "NextJS", level: "85%" },
    { name: "Component libraries", level: "85%" },
  ],
  databases: [
    { name: "PostgreSQL", level: "82%" },
    { name: "MySQL", level: "75%" },
    { name: "Google Firestore", level: "80%" },
    { name: "SQLite", level: "70%" },
    { name: "DynamoDB", level: "80%" },
  ],
  devops: [
    { name: "Docker", level: "80%" },
    { name: "Firebase", level: "70%" },
    { name: "Github Actions", level: "80%" },
    { name: "Vercel", level: "80%" },
    { name: "CircleCI", level: "60%" },
  ],
};
