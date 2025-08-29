import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import ProjectCard from "../components/ProjectCard";
import defaultImage from "../assets/under_construction.jpg";

export interface Project {
  id: string;
  title: string;
  description: string;
  details: string;
  github?: string;
  imageUrl?: string;
  images?: string[];
  date?: string;
  link?: string; // Live site link (optional)
}

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

  // Auto-rotate images
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (
      isDialogOpen &&
      selectedProject?.images &&
      selectedProject.images.length > 1
    ) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === selectedProject.images!.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isDialogOpen, selectedProject]);

  return (
    <section id="projects" className="space-y-8 py-8">
      <h2 className="text-3xl font-bold text-center text-gray-100">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center px-4">
        {projects.map((project) => (
          <div key={project.id} className="w-full flex justify-center">
            <ProjectCard
              project={project}
              onClick={() => openDialog(project)}
            />
          </div>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {selectedProject && (
          <DialogContent className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-gray-800 border-gray-700 text-gray-100">
            <DialogHeader>
              <DialogTitle className="text-gray-100">
                {selectedProject.title}
              </DialogTitle>
              <p className="text-gray-300 mt-2">
                {selectedProject.description}
              </p>
            </DialogHeader>

            <div className="space-y-4 pt-4">
              <div className="relative w-full h-64 rounded-lg overflow-hidden border border-gray-600">
                <img
                  src={
                    selectedProject.images?.[currentImageIndex] || defaultImage
                  }
                  alt={`${selectedProject.title} showcase`}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-200">{selectedProject.details}</p>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
