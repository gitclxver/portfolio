"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/types/types";
import { RoughNotation } from "react-rough-notation";

const DEFAULT_IMAGE = "/assets/under_construction.jpg";

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openDialog = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsDialogOpen(true);
  };

  return (
    <section id="projects" className="w-full max-w-5xl mx-auto py-20 px-4 md:px-8 space-y-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-gloria text-amber-300 inline-block">
          <RoughNotation type="highlight" show={true} color="#6b21a8" padding={[0, 10]}>
            <span className="text-amber-300">Projects</span>
          </RoughNotation>
        </h2>
      </div>

      <div className="space-y-16">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-10%" }}
            transition={{ duration: 0.5 }}
            className="comic-panel border-4 border-black bg-[#3d1a6e] shadow-[8px_8px_0px_#000] rounded-xl overflow-hidden flex flex-col md:flex-row hover:-translate-y-2 transition-transform duration-300 h-auto md:h-[400px]"
          >
            {/* Left: Image */}
            <div 
              className="w-full md:w-2/5 h-56 md:h-full bg-purple-950 border-b-4 md:border-b-0 md:border-r-4 border-black cursor-pointer overflow-hidden relative group shrink-0"
              onClick={() => openDialog(project)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.images?.[0] || project.imageUrl || DEFAULT_IMAGE}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 comic-panel px-4 py-2 bg-amber-400 text-black font-gloria font-bold transition-opacity duration-300">
                  View Details
                </span>
              </div>
            </div>

            {/* Right: Content */}
            <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col h-full overflow-hidden">
              <div className="flex-grow overflow-y-auto custom-scrollbar pr-2">
                <h3 className="text-2xl md:text-3xl font-bold text-amber-300 font-gloria mb-3">
                  {project.title}
                </h3>
                <p className="text-base md:text-lg text-purple-100 font-sans mb-3 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-sm md:text-md text-purple-300 font-sans">
                  {project.details}
                </p>
              </div>
              
              <div className="mt-4 pt-4 border-t-2 border-purple-800/50 flex justify-between items-center shrink-0">
                <span className="text-amber-400 font-sans font-bold comic-panel px-3 py-1 bg-purple-900/50 border-2 border-black text-sm md:text-base">
                  {project.date}
                </span>
                <div className="flex gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="comic-panel p-2 bg-purple-800 text-purple-50 hover:bg-amber-400 hover:text-black border-2 border-black shadow-[2px_2px_0px_#000] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_#000] transition-all rounded-full"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="comic-panel p-2 bg-purple-800 text-purple-50 hover:bg-amber-400 hover:text-black border-2 border-black shadow-[2px_2px_0px_#000] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_#000] transition-all rounded-full"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {selectedProject && (
          <DialogContent className="w-[95vw] md:w-full max-w-3xl max-h-[90vh] overflow-y-auto comic-panel border-4 border-black bg-[#3d1a6e] p-4 md:p-6">
            <DialogHeader>
              <DialogTitle className="font-gloria text-xl md:text-2xl text-amber-300">{selectedProject.title}</DialogTitle>
              <p className="text-purple-100 font-sans mt-2 text-sm md:text-base">
                {selectedProject.description}
              </p>
            </DialogHeader>

            <div className="space-y-4 pt-4 font-sans">
              <div className="relative w-full h-48 md:h-96 rounded-lg overflow-hidden border-4 border-black comic-panel shadow-[4px_4px_0px_#000]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={
                    selectedProject.images?.[currentImageIndex] || DEFAULT_IMAGE
                  }
                  alt={`${selectedProject.title} showcase`}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-purple-50 bg-purple-900/50 p-4 rounded-lg border-2 border-black comic-panel text-sm md:text-base">
                {selectedProject.details}
              </p>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
