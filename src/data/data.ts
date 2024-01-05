import { FunctionComponent } from "react";
import {
  AllABotIcon,
  DearyIcon,
  ListimoIcon,
} from "../components/icons/icons.component";

export type Experience = {
  title: string;
  subtitle: string;
  text: string;
  timeframe: string;
  technologies: string[];
  link?: string;
};

export const experience: Experience[] = [
  {
    title: "Software Engineer",
    subtitle: "Home Project Funnel Team",
    text: "Spearheading feature development to boost sales, facilitating improved communication between front-end and back-end in system design sessions with our back-end engineers, and collaborating with the Home Omni Tools team to craft internal tools for showrooms and employees, enhancing the customer purchase experience.",
    timeframe: "2023 - PRESENT",
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "GraphQL",
      "Express",
      "Node",
      "Tachyons",
      "Jest",
      "React Testing Library",
    ],
    link: "https://www.build.com/",
  },
  {
    title: "Software Engineer",
    subtitle: "Top of Funnel",
    text: "I led system design sessions, optimizing implementation and fostering collaboration. Built efficient GraphQL resolvers using Express.js and Node.js, preparing data for an efficient client-side consumption. \n My responsibilities encompassed rigorous unit testing, prompt bug resolution, and proactive app performance monitoring, resulting in a 15% downtime reduction. Additionally, I addressed existing bugs and introduced new features to our in-house CMS system. contributed to overall code quality through GitHub reviews and mentorship for team growth.",
    timeframe: "2021 - 2023",
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "GraphQL",
      "Express",
      "Node",
      "Tachyons",
      "Jest",
      "React Testing Library",
    ],
    link: "https://www.build.com/",
  },
  {
    title: "Software Engineer",
    subtitle: "Web Platform",
    text: "Researched third-party libraries to address performance issues, enhancing our web store's efficiency. Contributed to the CI/CD process by adding to our GitHub Actions for improved communication and status updates via Slack/GitHub integration. Elevated the efficiency of our Storybook usage through decorators for cleaner code. Additionally, successfully resolved various bugs affecting the operations of our web store.",
    timeframe: "2021",
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "GraphQL",
      "Express",
      "Node",
      "Tachyons",
      "Jest",
      "GitHub Actions",
      "React Testing Library",
    ],
    link: "https://www.build.com/",
  },
  {
    title: "Adjunct Instructor",
    subtitle: "",
    text: "Instructed classes on Adobe Illustrator tools and vector graphics techniques, guiding students in creating high-quality, realistic artwork. Conducted classes on website development using HTML, CSS, and basic JavaScript, enhancing students' skills through hands-on projects.",
    timeframe: "2021 - 2022",
    technologies: ["JavaScript", "HTML", "CSS", "Illustrator"],
  },
];

export type Project = {
  title: string;
  text: string;
  technologies: string[];
  link: string;
  Logo: FunctionComponent;
};

export const projects: Project[] = [
  {
    title: "Listimo",
    text: "A to-do list mobile app with a messaging feature. Listimo is designed to enable conversations and discussions over specific items within a list. Will be available on the App Store and Google Play.",
    technologies: [
      "JavaScript",
      "TypeScript",
      "React Native",
      "Express",
      "Node",
      "Firebase",
    ],
    Logo: ListimoIcon,
    link: "",
  },
  {
    title: "Deary",
    text: "A social media app built to help people keep in touch with the ones they care about. This was a solo project, all aspects of this app has been developed by me.",
    technologies: [
      "JavaScript",
      "Python",
      "React",
      "Flask",
      "AWS",
      "PostgresQL",
    ],
    Logo: DearyIcon,
    link: "https://github.com/anassri/deary",
  },
  {
    title: "All-A-Bot",
    text: "All-A-Bot is a custom Discord bot generator. AAB is a group project built to help Discord members generate quick bots to serve their needs. I was responsible for Explore Bots page, View Bot, contributed to the system that generates the code for the bot, and the UI/UX development and styling.",
    technologies: [
      "JavaScript",
      "Python",
      "React",
      "Flask",
      "AWS",
      "PostgresQL",
    ],
    Logo: AllABotIcon,
    link: "https://github.com/anassri/All-A-Bot",
  },
];
