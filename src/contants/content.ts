import type { Experience } from "../types/experience";

export const SITE_TITLE = "createdbyniko.";
export const SITE_DESCRIPTION = "All my softwareprojects and thoughts";

export const HERO_CONTENT =
  "I'm a Software Engineer with expertise in modern web technologies, specializing in building scalable applications with React, Angular, .NET, and Node.js. Experienced in developing cloud-based architectures and collaborating with cross-functional teams to deliver high-impact solutions.";

export const EXPERIENCES: Experience[] = [
  {
    year: "2022-06 - 2025-03",
    role: "Full Stack Developer",
    company: "Rocket Mortgage Canada",
    description: [
      "Designed and refactored responsive components with Angular and .NET Rest APIs (with Entity Framework) in an AWS based architecture with dozens of proprietary and third party services, and databases.",
      "Collaborated with stakeholders to define project requirements and plan sprints with the dev team each iteration.",
    ],
    technologies: ["Typescript", "Angular", "C#/.NET", "Postgres", "AWS"],
  },
  {
    year: "2019-10 - 2021-03",
    role: "Full Stack Developer",
    company: "White Whale Analytics",
    description: [
      "Developed responsive UI components and REST API endpoints using React + Redux and Node.js for our proprietary application.",
      "Wrote unit and integration tests using Mocha and Jest to ensure code reliability.",
      "Presented in meetings with stakeholders to provide technical expertise and support.",
    ],
    technologies: ["React", "Redux", "Node.js"],
  },
  {
    year: "2019-01 - 2019-09",
    role: "Frontend Developer",
    company: "Critical Mass",
    description: [
      "Created responsive components and webpages for Blizzard Entertainment and Mazda e-commerce stores using React and Javascript respectively.",
      "Managed product data using Magento e-commerce platform and worked in a cross collaborative team using Jira to manage tasks.",
    ],
    technologies: ["Javascript", "React", "MySQL"],
  },
  {
    year: "2017-09 - 2018-12",
    role: "Full Stack Developer",
    company: "Cor.AI",
    description: [
      "Engineered a cloud-based cardiac rehabilitation app using HTML, CSS, Node.js, MySQL, and various JS frameworks.",
      "Created an interactive dashboard and IBM Watson chatbot to dynamically customize content and data presentation based on user prompts.",
    ],
    technologies: ["HTML/CSS", "Node.js", "MySQL"],
  },
];

export const ABOUT_CONTENT = [
  "I have nearly 5 years of experience building scalable web applications using technologies like Angular, React, Node.js, .NET, and AWS. I've designed responsive frontend UIs, spun up and refactored new REST API services, integrated with complex microservice architectures. I enjoy working in collaborative environments, solving new challenges, and exploring new technologies.",
  "In my free time, I enjoy playing live music, learning new skills (el año pasado aprendí español, and this year my goal is to launch 10 apps), traveling and experiencing new cultures.",
];
