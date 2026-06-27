import type { CertificateItem, EducationItem, ExperienceItem, Project } from "@/types/types";

const portfolioData = {
  hero: {
    profileImageUrl: "/assets/profile.png",
    name: "T. T. Mpofu",
    jobTitle: "Software Engineer",
    position: "Owner & Founder at Prysm Learn & Edulag Tutoring Academy",
    age: 19,
    location: "Windhoek, Namibia",
  },
  socialLinks: {
    github: "https://github.com/gitclxver",
    linkedin: "https://www.linkedin.com/in/tinomuvongaishe-mpofu/",
  },
  experience: [
    {
      title: "Software Engineer",
      company: "Sygond AB",
      duration: "Dec 2025 - Present",
      description:
        "Engineered a high-performance e-commerce platform from the ground up for an emerging fashion startup, utilizing Next.js for a seamless, SEO-optimized frontend",
    },
    {
      title: "Solutions Engineer Intern",
      company: "Hangula Technologies",
      duration: "Sep 2025 - Dec 2025",
      description:
        "Developing and maintaining web and mobile applications using Wordpress, Dart, Flutter and Firebase. Collaborating with cross-functional teams to design scalable solutions and improve user experience.",
    },
    {
      title: "NUST Annual Programming Competition - 6th Place",
      company: "Namibia University of Science and Technology",
      duration: "2025",
      description:
        "Developed a Self Diagnosis Medical AI Chatbot using Firebase and React, achieving 6th place among 20+ teams in NUST's Annual Programming Competition.",
    },
    {
      title: "FossFest Hackathon",
      company: "FossFest International Hackathon",
      duration: "2025",
      description:
        "Built an open-source AI productivity tool in 48 hours at FOSS-Fest 2025, collaborating with a cross-functional team. Used Python, Flask, and NLP to prototype automated task prioritization",
    },
    {
      title: "EV-Era Expedition",
      company: "Demola Hub",
      duration: "2024",
      description:
        "Collaborated in a student team to solve real-world industry challenges, applying design thinking, agile methods, and technical skills (coding, UX). Prototyped solutions with stakeholder feedback and pitched to industry partners",
    },
    {
      title: "Open Source Project Manager",
      company: "NUST",
      duration: "2023",
      description:
        "Managed 5+ personal and team coding projects on GitHub, spanning game and web development. Showcased problem-solving, full-stack development, and agile execution.",
    },
  ] satisfies ExperienceItem[],
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
  ] satisfies EducationItem[],

  certificates: [
    {
      title: "Foss Fest International Hackathon Certificate",
      issuer: "Foss Fest",
      date: "2025",
      imageUrl: "/assets/certificates/FossFestCertificate.png",
    },
    {
      title: "Docker Foundations Professional Certificate",
      issuer: "LinkedIn Learning",
      date: "2025",
      imageUrl: "/assets/certificates/DockerCertificate.png",
    },
    {
      title: "Career Essentials in Github",
      issuer: "LinkedIn Learning",
      date: "2025",
      imageUrl: "/assets/certificates/GithubCertificate.png",
    },
    {
      title: "Hackathon: Setting Up Camp ",
      issuer: "BaseCamp",
      date: "2024",
      imageUrl: "/assets/certificates/BasecampCertificate1.png",
    },
    {
      title: "Hackathon: Preparing for Hunt",
      issuer: "BaseCamp",
      date: "2024",
      imageUrl: "/assets/certificates/BasecampCertificate2.png",
    },
    {
      title: "Hackathon: Building Your Weapon",
      issuer: "BaseCamp",
      date: "2024",
      imageUrl: "/assets/certificates/BasecampCertificate3.png",
    },
  ] satisfies CertificateItem[],

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
      title: "Sygond E-commerce Platform",
      description:
        "A full-stack e-commerce platform built with Next.js and Firebase for a fashion startup based in Sweden to cater for a Scandanavian audience built complete with payment and shipment intergrations",
      details:
        "This project showcases my ability to build scalable web applications, implement user authentication, and integrate payment gateways",
      link: "https://sygond.com",
      images: ["assets/projects/sygond-main.png"],
      date: "2026",
    },
    {
      id: "3",
      title: "Prysm Learn",
      description:
        "A Startup I founded and built to provide affordable and accessible studying resources to students in Namibia, South Africa and Eswatini",
      details:
        "What started as an effort to build my tutoring business has now evolved into a more refined learning platform that provides students with a variety of resources such as past exam papers, notes, AI Planning and more to help students reach their full potential",
      link: "https://prysmlearn.com",
      github: "https://github.com/gitclxver/prysm",
      images: ["/assets/projects/prysm-main.png"],
      date: "2026",
    },
    {
      id: "4",
      title: "S1nta Clothing Store",
      description:
        "An online clothing store built with Next.js",
      details:
        "This project demonstrates my skills in front-end development and e-commerce implementation",
      link: "https://s1nta.vercel.app",
      github: "https://github.com/gitclxver/s1nta-clothing-store",
      images: ["assets/projects/s1nta-main.png"],
      date: "2026",
    },
    {
      id: "5",
      title: "One Health Society Newsletter",
      description:
        "Newsletter website with React frontend and Java/Spring backend",
      details:
        "My first deployed website bringing awareness to environmental health",
      link: "https://nustonehealthsociety.org",
      github: "https://github.com/gitclxver/one-health",
      images: ["/assets/projects/onehealth-main.png", "/assets/projects/one-health-deployment.png"],
      date: "2025",
    },
    {
      id: "6",
      title: "Self Diagnosis Medical AI Chatbot",
      description: "AI Chatbot for preliminary medical diagnosis",
      details:
        "Developed using React for the frontend and Firebase for backend services",
      github: "https://github.com/gitclxver/ALT4-MESMTF",
      images: [
        "/assets/projects/ai-home.png",
        "/assets/projects/ai-dashboard.png",
        "/assets/projects/ai-phamarcy.png",
        "/assets/projects/ai-stats.png",
      ],
      date: "2025",
    },
    {
      id: "7",
      title: "Yo Diet",
      description: "Kotlin App for health diet tracking",
      details: "Android App built using Jetpack Compose and SQLite database",
      github: "https://github.com/gitclxver/yodiet",
      images: ["/assets/projects/yodiet-main.png"],
      date: "2025",
    },
    {
      id: "8",
      title: "BlogAPI",
      description: "an API I built Using Spring Boot",
      details: "Built for the One Health Society Newsletter",
      github: "https://github.com/gitclxver/one-health",
      images: ["/assets/projects/blogapi-main.png"],
      date: "2025",
    },
    {
      id: "9",
      title: "Stem App",
      description: "A modern website built to cater for Students in High Scool",
      details: "This project demonstrates my skills in front-end development",
      github: "https://github.com/diegoGMr/SOFTWARE-PROCESSES-ASSIGNMENT",
      images: [
        "/assets/projects/stem-games.png",
        "/assets/projects/stem-main.png",
        "/assets/projects/stem-ai.png",
        "/assets/projects/stem-library.png",
      ],
      date: "2024",
    },
    {
      id: "10",
      title: "Java Snake Game",
      description: "Classic Snake game built with Java Swing",
      details: "Built to learn Java fundamentals and game development basics",
      github: "https://github.com/gitclxver/Snake-Game",
      images: ["/assets/projects/snake-game.png"],
      date: "2022",
    },
    {
      id: "11",
      title: "EV Era Expedition",
      description: "A Project to Utilize EV's in the growing Namibian Economy",
      details:
        "We created an event company that helps to organize a variety of events such as outdoor movie nights, music festivals, and community gatherings powered entirely by electric vehicles (EVs)",
      link: "https://hub.demola.net/team/1776",
      images: ["/assets/projects/ev-era-main.png", "/assets/projects/ev-era.png"],
      date: "2024",
    },
  ] satisfies Project[],
  contact: {
    email: "tinompofu06@gmail.com",
    phone: "+264 81 498 9258",
  },
};

export default portfolioData;
