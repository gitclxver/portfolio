"use client";

import { motion } from "framer-motion";

const icons = [
  // Original 8
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", top: "15%", left: "10%", size: 80 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-plain.svg", top: "25%", left: "80%", size: 100 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg", top: "65%", left: "15%", size: 90 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg", top: "75%", left: "75%", size: 85 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg", top: "45%", left: "85%", size: 70 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg", top: "85%", left: "40%", size: 95 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", top: "35%", left: "20%", size: 75 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg", top: "55%", left: "5%", size: 65 },
  
  // New additions
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-plain.svg", top: "10%", left: "40%", size: 70 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-plain.svg", top: "80%", left: "10%", size: 80 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg", top: "20%", left: "60%", size: 85 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg", top: "50%", left: "30%", size: 75 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg", top: "60%", left: "60%", size: 90 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg", top: "5%", left: "75%", size: 80 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg", top: "40%", left: "50%", size: 95 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg", top: "30%", left: "90%", size: 70 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-plain.svg", top: "70%", left: "35%", size: 85 },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg", top: "90%", left: "85%", size: 75 },
];

export default function BackgroundIcons() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map((icon, index) => (
        <motion.img
          key={index}
          src={icon.src}
          alt="tech icon"
          // Increased opacity from 0.05 to 0.15 and removed grayscale so their colors subtly pop
          className="absolute opacity-[0.15]"
          style={{ top: icon.top, left: icon.left, width: icon.size, height: icon.size }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 15 + (index % 5) * 2, // Varied duration so they don't all sync up
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
