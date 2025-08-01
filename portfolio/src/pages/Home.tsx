import { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import ExperienceAndEducation from "../components/ExperienceAndEducation";
import TechnologyCarousel from "../components/TechnologyCarousel";
import ProjectsSection from "../components/ProjectsSection";
import ThemeToggle from "../components/ThemeToggle";

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
      profileImageUrl: "../assets/profile.jpg",
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
      //   {
      //     title: "Senior Software Engineer",
      //     company: "Tech Corp",
      //     duration: "2020 - Present",
      //     description:
      //       "Developed and maintained web applications using React, Node.js, and TypeScript.",
      //   }
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
      },
      {
        id: "2",
        title: "One Health Society Newsletter",
        description:
          "A modern newsletter website built with React and Tailwind CSS on the frontend and Java with Spring on the backend",
        details:
          "My First ever deployed Website. It focuses on bringing awareness to the importance of the environment through the One Health NUST Society",
        github: "https://github.com/gitclxver/one-health",
      },
      {
        id: "3",
        title: "Yo Diet",
        description: "A Mordern Kotlin App to help track your health diet",
        details:
          "A mini project to help me learn Kotlin and Android development through the use of the Jetpack Compose framework & a local SQLite database",
        github: "https://github.com/gitclxver/yodiet",
      },
      {
        id: "4",
        title: "Java Snake Game",
        description: "A really basic Snake Game in Java",
        details:
          "A project I built in order to learn Java and Java Swing. It's a really basic game that I built for fun",
        github: "https://github.com/gitclxver/Snake-Game",
      },
    ],
    contact: {
      email: "tinompofu06@gmail.com",
      phone: "+264 81 498 9258",
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-50 font-sans p-6 md:p-12 transition-colors duration-500">
      <div className="max-w-4xl mx-auto space-y-12">
        <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <HeroSection
          data={portfolioData.hero}
          socialLinks={portfolioData.socialLinks}
          contactData={portfolioData.contact}
        />
        <ExperienceAndEducation
          experience={portfolioData.experience}
          education={portfolioData.education}
        />
        <TechnologyCarousel technologies={portfolioData.technologies} />
        <ProjectsSection projects={portfolioData.projects} />
      </div>
    </div>
  );
}

export default Home;
