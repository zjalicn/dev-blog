import type { Experience } from "./types/experience";

export const SITE_TITLE = "createdbyniko.";
export const SITE_DESCRIPTION = "All my softwareprojects and thoughts";

export const HERO_CONTENT =
  "I'm a Software Engineer with expertise in modern web technologies, specializing in building scalable applications with React, Angular, .NET, and Node.js. Experienced in developing cloud-based architectures and collaborating with cross-functional teams to deliver high-impact solutions.";

export const CONTACT_INFO = {
  address: "Canada 🇨🇦",
  phone: "+1 (226) 975 3182",
  email: "nzjalic@gmail.com",
};

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/zjalicn",
  github: "https://github.com/zjalicn",
  resume:
    "https://fg92krreal8mypv5.public.blob.vercel-storage.com/nikola-zjalic-cv-UEbT0iVY9pHTRUQAIyXqDCjukPuErU.pdf",
  twitter: "https://twitter.com/zjalicn",
};

export const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
];

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
