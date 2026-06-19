"use client";

import { useState } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

interface HeroData {
  name: string;
  jobTitle: string;
  position: string;
  location: string;
  age: number | string;
}

interface SocialLinks {
  github: string;
  linkedin: string;
}

interface ContactData {
  email: string;
  phone: string;
}

interface HeroSectionProps {
  data: HeroData;
  socialLinks: SocialLinks;
  contactData: ContactData;
  profileImageUrl?: string;
}

export default function HeroSection({
  data,
  socialLinks,
  contactData,
  profileImageUrl,
}: HeroSectionProps) {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const { scrollY } = useScroll();
  const quoteOpacity = useTransform(scrollY, [0, 300], [0.6, 0]);

  const codeSnippet = `const profile = {
    name: 'T. T. Mpofu',
    title: 'Software Engineer | Founder @ Prysm Learn',
    skills: [
        'React', 'Next.js', 'TypeScript', 'Node.js',
        'Python', 'Flutter', 'Docker', 'Firebase', 'Postgres'
    ],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    yearsOfExperience: 3, 
    hireable: function() {
        return (
            this.hardWorker &&
            this.problemSolver &&
            this.skills.length >= 5 &&
            this.yearsOfExperience >= 2
        );
    }
};`;

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 py-20 px-6 md:px-12 w-full max-w-7xl mx-auto"
    >
      <motion.div 
        style={{ opacity: quoteOpacity }} 
        className="absolute top-10 left-0 w-full text-center pointer-events-none px-4"
      >
        <p className="text-purple-100 font-gloria text-xl md:text-2xl tracking-widest italic drop-shadow-md">
          "Until death all defeat is merely psychological"
        </p>
      </motion.div>

      {/* Left side: Intro */}
      <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 mt-12 lg:mt-0">
        {profileImageUrl ? (
          <div className="comic-panel overflow-hidden rounded-full w-56 h-56 md:w-80 md:h-80">
            <Image
              src={profileImageUrl}
              alt={`Profile picture of ${data.name}`}
              width={320}
              height={320}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        ) : (
          <div className="comic-panel w-56 h-56 md:w-80 md:h-80 rounded-full bg-purple-800 flex items-center justify-center text-5xl md:text-8xl flex-shrink-0 text-purple-200">
            TM
          </div>
        )}

        <div className="space-y-6">
          <h1 className="font-bold text-purple-50 font-gloria leading-tight flex flex-col items-center lg:items-start">
            <span className="text-xl md:text-2xl">Hi, I&apos;m</span>
            <span className="text-amber-400 text-3xl md:text-4xl mt-2">Tinomuvongaishe</span>
            <span className="text-amber-400 text-xl md:text-2xl mt-1">Tawanda</span>
            <span className="text-amber-400 text-3xl md:text-4xl mt-1">Mpofu</span>
          </h1>

          <div className="flex flex-col gap-4 text-lg text-purple-200">
            <div className="comic-panel px-5 py-3 bg-[#3d1a6e] border-2 border-black shadow-[4px_4px_0px_#000] inline-block self-center lg:self-start text-left">
              <p className="text-xl md:text-2xl font-bold text-purple-50 font-sans">
                Owner & Founder
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 self-center lg:self-start">
              <div className="comic-panel px-4 py-2 bg-purple-800 border-2 border-black shadow-[4px_4px_0px_#000] inline-block">
                <p className="text-lg text-amber-300 font-sans font-semibold">Prysm Learn</p>
              </div>
              <div className="comic-panel px-4 py-2 bg-purple-800 border-2 border-black shadow-[4px_4px_0px_#000] inline-block">
                <p className="text-lg text-amber-300 font-sans font-semibold">Edulag Tutoring Academy</p>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm mt-6 font-sans">
              <span className="comic-panel px-4 py-2 bg-purple-900/50 rounded-full text-purple-100 border-2 border-black shadow-[2px_2px_0px_#000] font-bold">
                Software Engineer
              </span>
              <span className="comic-panel px-4 py-2 bg-purple-900/50 rounded-full text-purple-100 border-2 border-black shadow-[2px_2px_0px_#000] font-bold">
                {data.age} Years Old
              </span>
              <span className="comic-panel px-4 py-2 bg-purple-900/50 rounded-full text-purple-100 flex items-center gap-1 border-2 border-black shadow-[2px_2px_0px_#000] font-bold">
                <MapPin className="h-4 w-4 text-amber-400" /> {data.location}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
            <Dialog
              open={isContactDialogOpen}
              onOpenChange={setIsContactDialogOpen}
            >
              <DialogTrigger asChild>
                <Button
                  className="comic-panel font-gloria text-lg px-6 py-6 bg-amber-400 text-black hover:bg-amber-300 border-2 border-black shadow-[4px_4px_0px_#000] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Contact Me
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] comic-panel bg-[#3d1a6e] border-4 border-black">
                <DialogHeader>
                  <DialogTitle className="font-gloria text-2xl text-amber-300">Get in Touch</DialogTitle>
                  <p className="text-purple-100 font-sans">
                    Feel free to reach out to me through any of these platforms.
                  </p>
                </DialogHeader>
                <div className="flex flex-col gap-4 py-4 font-sans">
                  <div className="flex items-center gap-4 comic-panel p-3 bg-purple-900/50 border-2 border-black">
                    <Mail className="h-5 w-5 text-amber-300" />
                    <a
                      href={`mailto:${contactData.email}`}
                      className="text-purple-50 hover:text-amber-300 hover:underline"
                    >
                      {contactData.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-4 comic-panel p-3 bg-purple-900/50 border-2 border-black">
                    <Phone className="h-5 w-5 text-amber-300" />
                    <span className="text-purple-50">{contactData.phone}</span>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <div className="flex gap-3">
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="comic-panel p-3 bg-purple-800 text-purple-50 hover:bg-purple-700 border-2 border-black shadow-[4px_4px_0px_#000] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all rounded-full"
                >
                  <Github className="h-6 w-6" />
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="comic-panel p-3 bg-purple-800 text-purple-50 hover:bg-purple-700 border-2 border-black shadow-[4px_4px_0px_#000] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all rounded-full"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Right side: Code Snippet */}
      <div className="flex-1 w-full max-w-xl hidden lg:block">
        <div className="comic-panel bg-[#1e1e1e] border-4 border-black shadow-[8px_8px_0px_#000] rounded-xl overflow-hidden">
          <div className="flex items-center px-4 py-3 bg-black/40 border-b-2 border-black">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 border border-black"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500 border border-black"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 border border-black"></div>
            </div>
            <div className="mx-auto text-xs text-gray-400 font-mono">profile.js</div>
          </div>
          <div className="p-6 overflow-x-auto">
            <pre className="font-mono text-sm md:text-base text-purple-300 leading-relaxed">
              <code>
                <span className="text-pink-400">const</span> <span className="text-blue-400">profile</span> <span className="text-pink-400">=</span> {"{"}
                <br />
                {"    "}name: <span className="text-green-400">'T. T. Mpofu'</span>,
                <br />
                {"    "}title: <span className="text-green-400">'Software Engineer | Founder @ Prysm Learn'</span>,
                <br />
                {"    "}skills: [
                <br />
                {"        "}<span className="text-green-400">'React'</span>, <span className="text-green-400">'Next.js'</span>, <span className="text-green-400">'TypeScript'</span>, <span className="text-green-400">'Node.js'</span>,
                <br />
                {"        "}<span className="text-green-400">'Python'</span>, <span className="text-green-400">'Flutter'</span>, <span className="text-green-400">'Docker'</span>, <span className="text-green-400">'Firebase'</span>, <span className="text-green-400">'Postgres'</span>
                <br />
                {"    "}],
                <br />
                {"    "}hardWorker: <span className="text-amber-400">true</span>,
                <br />
                {"    "}quickLearner: <span className="text-amber-400">true</span>,
                <br />
                {"    "}problemSolver: <span className="text-amber-400">true</span>,
                <br />
                {"    "}yearsOfExperience: <span className="text-amber-400">3</span>,
                <br />
                {"    "}<span className="text-blue-300">hireable</span>: <span className="text-pink-400">function</span>() {"{"}
                <br />
                {"        "}<span className="text-pink-400">return</span> (
                <br />
                {"            "}<span className="text-pink-400">this</span>.hardWorker <span className="text-pink-400">&&</span>
                <br />
                {"            "}<span className="text-pink-400">this</span>.problemSolver <span className="text-pink-400">&&</span>
                <br />
                {"            "}<span className="text-pink-400">this</span>.skills.length {">="} <span className="text-amber-400">5</span> <span className="text-pink-400">&&</span>
                <br />
                {"            "}<span className="text-pink-400">this</span>.yearsOfExperience {">="} <span className="text-amber-400">2</span>
                <br />
                {"        "});
                <br />
                {"    "}
                {"}"}
                <br />
                {"};"}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
