import { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import ExperienceAndEducation from "../components/ExperienceAndEducation";
import TechnologyCarousel from "../components/TechnologyCarousel";
import ProjectsSection from "../components/ProjectsSection";
import ThemeToggle from "../components/ThemeToggle";
import NeuralNetBackground from "../components/NeuralNetBackground";
import profileImage from "../assets/profile.jpg";

// Import your Base64 certificate data
import {
  DockerCertificate,
  GithubCertificate,
} from "../data/certificateData";

interface PortfolioData {
  hero: {
    profileImageUrl: string;
    name: string;
    jobTitle: string;
    age: number;
    location: string;
  };
  socialLinks: {
    github: string;
    linkedin: string;
  };
  experience: Array<{
    title: string;
    company: string;
    duration: string;
    description: string;
  }>;
  education: Array<{
    qualification: string;
    institution: string;
    year: string;
  }>;
  certificates: Array<{
    title: string;
    issuer: string;
    date: string;
    pdfUrl: string;
  }>;
  technologies: Array<{
    name: string;
    icon: string;
  }>;
  projects: Array<{
    id: string;
    title: string;
    description: string;
    details: string;
    github: string;
    images?: string[];
    date?: string;
  }>;
  contact: {
    email: string;
    phone: string;
  };
}

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  const portfolioData: PortfolioData = {
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
        title: "Innovation Team Leader",
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
        title: "Certified Full-Stack Developer",
        issuer: "LinkedIn Learning",
        date: "2025",
        pdfUrl: DockerCertificate, 
      },
      {
        title: "Machine Learning with Python",
        issuer: "LinkedIn Learning",
        date: "2025",
        pdfUrl: GithubCertificate,
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
        date: "2023",
      },
      {
        id: "2",
        title: "One Health Society Newsletter",
        description:
          "Newsletter website with React frontend and Java/Spring backend",
        details:
          "My first deployed website bringing awareness to environmental health",
        github: "https://github.com/gitclxver/one-health",
        images: [],
        date: "2023",
      },
      {
        id: "3",
        title: "Yo Diet",
        description: "Kotlin app for health diet tracking",
        details: "Android app using Jetpack Compose and SQLite database",
        github: "https://github.com/gitclxver/yodiet",
        images: ["https://placehold.co/600x400/f37622/FFFFFF?text=Yo+Diet"],
        date: "2023",
      },
      {
        id: "4",
        title: "Java Snake Game",
        description: "Classic Snake game built with Java Swing",
        details: "Built to learn Java fundamentals and game development basics",
        github: "https://github.com/gitclxver/Snake-Game",
        images: ["https://placehold.co/600x400/964B00/FFFFFF?text=Snake+Game"],
        date: "2023",
      },
      {
        id: "5",
        title: "Weather Dashboard",
        description: "Real-time weather application with API integration",
        details:
          "Displays current weather and forecasts using OpenWeatherMap API",
        github: "https://github.com/gitclxver/weather-app",
        images: [
          "https://placehold.co/800x600/4287f5/FFFFFF?text=Weather+Dashboard",
          "https://placehold.co/800x600/5d8bf4/FFFFFF?text=5-Day+Forecast",
          "https://placehold.co/800x600/74a2f7/FFFFFF?text=Location+Search",
        ],
        date: "2022",
      },
      {
        id: "6",
        title: "Task Manager API",
        description: "RESTful API for task management",
        details:
          "Built with Node.js, Express and MongoDB with JWT authentication",
        github: "https://github.com/gitclxver/task-api",
        images: [
          "https://placehold.co/800x600/607d8b/FFFFFF?text=API+Endpoints",
          "https://placehold.co/800x600/78909c/FFFFFF?text=JWT+Auth",
        ],
        date: "2022",
      },
      {
        id: "7",
        title: "E-commerce Store",
        description: "Online store with React frontend",
        details:
          "Features product listing, cart functionality, and checkout process",
        github: "https://github.com/gitclxver/ecommerce-store",
        images: [
          "https://placehold.co/1000x500/4CAF50/FFFFFF?text=Product+Page",
          "https://placehold.co/1000x500/66BB6A/FFFFFF?text=Shopping+Cart",
          "https://placehold.co/1000x500/81C784/FFFFFF?text=Checkout",
          "https://placehold.co/1000x500/A5D6A7/FFFFFF?text=Order+Confirmation",
        ],
        date: "2024",
      },
      {
        id: "8",
        title: "Chat Application",
        description: "Real-time chat with Socket.io",
        details: "Instant messaging app with rooms and user authentication",
        github: "https://github.com/gitclxver/chat-app",
        images: [
          "https://placehold.co/400x600/9c27b0/FFFFFF?text=Chat+Interface",
          "https://placehold.co/400x600/ab47bc/FFFFFF?text=Room+Selection",
          "https://placehold.co/400x600/ba68c8/FFFFFF?text=User+Profile",
        ],
        date: "2024",
      },
      {
        id: "9",
        title: "Machine Learning Model",
        description: "Image classification with TensorFlow",
        details: "CNN model trained to recognize handwritten digits",
        github: "https://github.com/gitclxver/ml-digits",
        images: [],
        date: "2023",
      },
      {
        id: "10",
        title: "Blog Platform",
        description: "Full-stack blog with CMS features",
        details: "Includes rich text editing, comments, and user profiles",
        github: "https://github.com/gitclxver/blog-platform",
        images: [
          "https://placehold.co/1200x300/2196F3/FFFFFF?text=Blog+Homepage",
          "https://placehold.co/1200x300/42a5f5/FFFFFF?text=Post+Editor",
          "https://placehold.co/1200x300/64b5f6/FFFFFF?text=User+Dashboard",
        ],
        date: "2024",
      },
      {
        id: "11",
        title: "Fitness Tracker",
        description: "Mobile app for workout tracking",
        details: "Tracks exercises, sets, reps with progress charts",
        github: "https://github.com/gitclxver/fitness-tracker",
        images: [
          "https://placehold.co/500x500/ff5722/FFFFFF?text=Workout+Log",
          "https://placehold.co/500x500/ff7043/FFFFFF?text=Exercise+Library",
          "https://placehold.co/500x500/ff8a65/FFFFFF?text=Progress+Charts",
        ],
        date: "2023",
      },
      {
        id: "12",
        title: "Recipe Finder",
        description: "Search engine for cooking recipes",
        details: "Uses Edamam API to find recipes based on ingredients",
        github: "https://github.com/gitclxver/recipe-finder",
        images: [],
        date: "2022",
      },
    ],
    contact: {
      email: "tinompofu06@gmail.com",
      phone: "+264 81 498 9258",
    },
  };

  return (
    <div className="relative min-h-screen">
      <NeuralNetBackground />

      <div className="relative z-10 max-w-4xl mx-auto space-y-12 p-6 md:p-12 text-gray-900 dark:text-gray-50 transition-colors duration-500">
        <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <HeroSection
          data={portfolioData.hero}
          socialLinks={portfolioData.socialLinks}
          contactData={portfolioData.contact}
          profileImageUrl={portfolioData.hero.profileImageUrl}
        />
        <ExperienceAndEducation
          experience={portfolioData.experience}
          education={portfolioData.education}
          certificates={portfolioData.certificates}
        />
        <TechnologyCarousel technologies={portfolioData.technologies} />
        <ProjectsSection projects={portfolioData.projects} />
      </div>
    </div>
  );
}

export default Home;
