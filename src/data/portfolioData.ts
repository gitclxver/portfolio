import profileImage from "../assets/profile.png";

import DockerCertificate from "../assets/certificates/DockerCertificate.png";
import GithubCertificate from "../assets/certificates/GithubCertificate.png";
import BasecampCertificate1 from "../assets/certificates/BasecampCertificate1.png";
import BasecampCertificate2 from "../assets/certificates/BasecampCertificate2.png";
import BasecampCertificate3 from "../assets/certificates/BasecampCertificate3.png";


import blogapi from "../assets/projects/blogapi-main.png";

import onehealth from "../assets/projects/one-health-deployment.png";
import onehealthMain from "../assets/projects/onehealth-main.png";

import snakegame from "../assets/projects/snake-game.png";

import stemAI from "../assets/projects/stem-ai.png";
import stemGames from "../assets/projects/stem-games.png";
import stemLib from "../assets/projects/stem-library.png";
import stemMain from "../assets/projects/stem-main.png";

import yodietMain from "../assets/projects/yodiet-main.png";

import evMain from "../assets/projects/ev-era-main.png";
import ev from "../assets/projects/ev-era.png";

const portfolioData = {
  hero: {
    profileImageUrl: profileImage,
    name: "T. Mpofu",
    jobTitle: "Software Engineer",
    age: 18,
    location: "Windhoek, Namibia",
  },
  socialLinks: {
    github: "https://github.com/gitclxver",
    linkedin: "https://www.linkedin.com/in/tinomuvongaishe-mpofu/",
  },
  experience: [
    {
      title: "Open Source Project Manager",
      company: "NUST",
      duration: "2023",
      description:
        "Managed 5+ personal and team coding projects on GitHub, spanning game and web development. Showcased problem-solving, full-stack development, and agile execution.",
    },
    {
      title: "EV-Era Expedition",
      company: "Demola Hub",
      duration: "2024",
      description:
        "Collaborated in a student team to solve real-world industry challenges, applying design thinking, agile methods, and technical skills (coding, UX). Prototyped solutions with stakeholder feedback and pitched to industry partners",
    },
    {
      title: "FossFest Hackathon",
      company: "FossFest International Hackathon",
      duration: "2025",
      description:
        "Built an open-source AI productivity tool in 48 hours at FOSS-Fest 2025, collaborating with a cross-functional team. Used Python, Flask, and NLP to prototype automated task prioritization",
    },
  ],
  education: [
    {
      qualification: "Bachelor of Science in Computer Science",
      institution: "Namibia University of Science and Technology",
      year: "2026",
    },
    {
      qualification: "IGCSE's",
      institution: "Sifundzani High School",
      year: "2022",
    },
  ],
  certificates: [
    {
      title: "Docker Foundations Professional Certificate",
      issuer: "LinkedIn Learning",
      date: "2025",
      imageUrl: DockerCertificate,
    },
    {
      title: "Career Essentials in Github",
      issuer: "LinkedIn Learning",
      date: "2025",
      imageUrl: GithubCertificate,
    },
    {
      title: "Hackathon: Setting Up Camp ",
      issuer: "BaseCamp",
      date: "2024",
      imageUrl: BasecampCertificate1,
    },
    {
      title: "Hackathon: Preparing for Hunt",
      issuer: "BaseCamp",
      date: "2024",
      imageUrl: BasecampCertificate2,
    },
    {
      title: "Hackathon: Building Your Weapon",
      issuer: "BaseCamp",
      date: "2024",
      imageUrl: BasecampCertificate3,
    },
  ],
  technologies: [
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg",
    },
    {
      name: "Kotlin",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-plain.svg",
    },
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
    },
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
    },
    {
      name: "Postgres",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg",
    },
    {
      name: "Supabase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-plain.svg",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
  ],

  projects: [
    {
      id: "1",
      title: "Portfolio Website",
      description:
        "A modern portfolio website built with React and Tailwind CSS",
      details:
        "This project demonstrates my skills in front-end development, responsive design, and component-based architecture",
      github: "https://github.com/gitclxver/portfolio",
      images: ["https://placehold.co/600x800/000000/FFFFFF?text=Portfolio"],
      date: "2024",
    },
    {
      id: "2",
      title: "One Health Society Newsletter",
      description:
        "Newsletter website with React frontend and Java/Spring backend",
      details:
        "My first deployed website bringing awareness to environmental health",
      link: "https://nustonehealthsociety.org",
      github: "https://github.com/gitclxver/one-health",
      images: [onehealthMain, onehealth],
      date: "2025",
    },
    {
      id: "3",
      title: "Yo Diet",
      description: "Kotlin App for health diet tracking",
      details: "Android App built using Jetpack Compose and SQLite database",
      github: "https://github.com/gitclxver/yodiet",
      images: [yodietMain],
      date: "2025",
    },
    {
      id: "4",
      title: "BlogAPI",
      description: "an API I built Using Spring Boot",
      details: "Built for the One Health Society Newsletter",
      github: "https://github.com/gitclxver/one-health",
      images: [blogapi],
      date: "2025",
    },
    {
      id: "5",
      title: "Stem App",
      description: "A modern website built to cater for Students in High Scool",
      details: "This project demonstrates my skills in front-end development",
      github: "https://github.com/diegoGMr/SOFTWARE-PROCESSES-ASSIGNMENT",
      images: [stemGames, stemMain, stemAI, stemLib],
      date: "2024",
    },
    {
      id: "6",
      title: "Java Snake Game",
      description: "Classic Snake game built with Java Swing",
      details: "Built to learn Java fundamentals and game development basics",
      github: "https://github.com/gitclxver/Snake-Game",
      images: [snakegame],
      date: "2022",
    },
    {
      id: "6",
      title: "EV Era Expedition",
      description: "A Project to Utilize EV's in the growing Namibian Economy",
      details:
        "We created an event company that helps to organize a variety of events such as outdoor movie nights, music festivals, and community gatherings powered entirely by electric vehicles (EVs)",
      link: "https://hub.demola.net/team/1776",
      images: [evMain, ev],
      date: "2024",
    },
  ],
  contact: {
    email: "tinompofu06@gmail.com",
    phone: "+264 81 498 9258",
  },
};

export default portfolioData;