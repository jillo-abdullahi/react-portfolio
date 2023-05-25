const portfolioData = {
  topProjects: [
    {
      id: "1",
      name: "your weather",
      icon: "images/thunder.svg",
      url: "https://your-weather-90.firebaseapp.com/",
      source: "https://github.com/jillo-abdullahi/your-weather",
      description:
        "A weather application for current weather along with a 7-day forecast.",
      stacks: ["React", "Redux", "DarkSky API", "Firebase"],
    },
    {
      id: "6",
      name: "chuck-norris.io",
      icon: "images/cn-jokes.gif",
      url: "https://norris-chuck-sovtech.web.app/",
      source: "https://github.com/jillo-abdullahi/chucknorris.io",
      description:
        "A full stack web app with lots of Chuck Norris jokes to brighten your day.",
      stacks: ["React", "Redux", "Apollo GraphQL", "NodeJS"],
    },
    {
      id: "3",
      name: "stackoverflow lite api",
      icon: "images/stackoverflow-lite.gif",
      url: "https://stackoverflowlite-api.herokuapp.com/",
      source: "https://github.com/jillo-abdullahi/stackoverflow-lite-api",
      description: "An API where people can ask questions and provide answers.",
      stacks: ["Python", "Flask", "Swagger", "Heroku"],
    },
  ],
  otherProjects: [
    {
      id: "2",
      name: "github search",
      icon: "images/github-search.gif",
      url: "https://jillo-abdullahi.github.io/Github-Search/",
      source: "https://github.com/jillo-abdullahi/Github-Search",
      description: "A search application to find users on Github.",
      stacks: ["HTML/CSS", "VanillaJS", "Github API", "Github Pages"],
    },
    {
      id: "4",
      name: "random quotes generator",
      icon: "images/random-quotes.gif",
      url: "https://jillo-abdullahi.github.io/Random-Quote-Machine/",
      source: "https://github.com/jillo-abdullahi/Random-Quote-Machine",
      description:
        "A machine that generates random awesome quotes for your tweeting pleasure.",
      stacks: ["HTML/CSS", "VanillaJS", "forismatic.com API", "Github Pages"],
    },
    {
      id: "5",
      name: "book a meal api",
      icon: "images/book-a-meal.gif",
      source: "https://github.com/jillo-abdullahi/book-a-meal",
      description: "An API that allows customers to make food orders.",
      stacks: ["Python", "Flask", "Github Pages"],
    },
  ],
  socialLinks: {
    github: "https://github.com/jillo-abdullahi",
    linkedIn: "https://www.linkedin.com/in/jilloabdullahi/",
    resume:
      "https://drive.google.com/file/d/1JdngantCJ5_K60eJru1Ariial1U8wJfC/view?usp=sharing",
    facebook: "https://www.facebook.com/jilloabdullah/",
    instagram: "https://www.instagram.com/jillo_abdullah/",
    twitter: "https://twitter.com/jillo_woche",
  },
};

export default portfolioData;

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
    image: "memory.PNG",
    preview: "https://memory-game-green-nine.vercel.app/",
    github: "https://github.com/jillo-abdullahi/memory-game",
    stacks: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    completed: true,
  },
  {
    title: "Supply Chain Management App",
    description:
      "This is the frontend for a Supply Chain Items applicationv. This application interfaces with a Node.js REST API to perform CRUD operations on supply chain items.",
    image: "tlip.PNG",
    preview: "https://tlip-frontend.vercel.app/",
    github: "https://github.com/jillo-abdullahi/tlip-frontend",
    stacks: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    completed: true,
  },
  {
    title: "Supply Chain Management API",
    description:
      "This is a REST API for managing supply chain items and their events using Express.js and PostgreSQL.",
    image: "tlip-api.PNG",
    preview: "https://tlip-api.onrender.com/api-docs/#/",
    github: "https://github.com/jillo-abdullahi/tlip-api",
    stacks: ["NodeJS", "ExpressJS", "PostgreSQL", "Docker"],
    completed: true,
  },
  {
    title: "Dictionary web app solution",
    description:
      "A dictionary web app built with TailwindCSS and Next.js. It uses a free Dictionary API to fetch data for the searched word. It also uses the Web Speech API to play the audio file for the searched word.",
    image: "dictionary.PNG",
    preview: "https://dictionary-web-app-ashy.vercel.app/",
    github: "https://github.com/jillo-abdullahi/dictionary-web-app",
    stacks: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    completed: true,
  },
  {
    title: "Advanced Rock Paper Scissors",
    description:
      "A Rock, Paper, Scissors, Lizard, Spock game you can play against the CPU.",
    image: "rockPaperScissors.PNG",
    preview: "https://advanced-rock-paper-scissors.vercel.app/",
    github: "https://github.com/jillo-abdullahi/advanced-rock-paper-scissors",
    stacks: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    completed: false,
  },
];
