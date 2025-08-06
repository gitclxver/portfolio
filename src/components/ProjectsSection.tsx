import { useState } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../components/ui/card";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "../components/ui/drawer";
import { Button } from "../components/ui/button";
import { Github, ChevronLeft, ChevronRight } from "lucide-react";
import defaultImage from "../assets/under_construction.jpg";

export interface Project {
  id: string;
  title: string;
  description: string;
  details: string;
  github: string;
  imageUrl?: string;
  images?: string[];
  date?: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [isProjectDrawerOpen, setIsProjectDrawerOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openProjectDrawer = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    setIsProjectDrawerOpen(true);
  };

  const handlePrevImage = () => {
    if (selectedProject?.images && selectedProject.images.length > 0) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedProject.images!.length - 1 : prevIndex - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedProject?.images && selectedProject.images.length > 0) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedProject.images!.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <section id="projects" className="space-y-4">
      <h2 className="text-3xl font-bold text-center">Projects</h2>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="relative cursor-pointer overflow-hidden transition-transform hover:scale-105 mb-6 break-inside-avoid"
          >
            <div onClick={() => openProjectDrawer(project)}>
              <img
                src={
                  project.images && project.images.length > 0
                    ? project.images[0] // Use first image if available
                    : defaultImage
                }
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              {project.date && (
                <CardFooter>
                  <span className="text-sm text-muted-foreground">
                    {project.date}
                  </span>
                </CardFooter>
              )}
            </div>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 p-2 rounded-full bg-gray-800 text-white dark:bg-gray-100 dark:text-black hover:scale-110 transition-transform"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="h-5 w-5" />
              </a>
            )}
          </Card>
        ))}
      </div>

      <Drawer open={isProjectDrawerOpen} onOpenChange={setIsProjectDrawerOpen}>
        <DrawerContent className="w-full h-auto max-h-[90%] bg-white dark:bg-slate-900">
          <DrawerHeader>
            <DrawerTitle className="text-black dark:text-white">
              {selectedProject?.title}
            </DrawerTitle>
            <DrawerDescription className="text-gray-600 dark:text-gray-400">
              {selectedProject?.description}
            </DrawerDescription>
          </DrawerHeader>
          <div className="space-y-4 p-4 overflow-y-auto">
            <div className="relative w-full h-64 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
              <img
                src={
                  selectedProject?.images && selectedProject.images.length > 0
                    ? selectedProject.images[currentImageIndex]
                    : defaultImage
                }
                alt={`${selectedProject?.title} showcase`}
                className="w-full h-full object-cover"
              />
              {selectedProject?.images && selectedProject.images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-white bg-black/50 hover:bg-black/70"
                    onClick={handlePrevImage}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-white bg-black/50 hover:bg-black/70"
                    onClick={handleNextImage}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </div>
                </>
              )}
            </div>
            <p className="text-black dark:text-white">
              {selectedProject?.details}
            </p>
            {selectedProject?.github && (
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full">
                  <Github className="mr-2 h-4 w-4" /> View on GitHub
                </Button>
              </a>
            )}
          </div>
        </DrawerContent>
      </Drawer>
    </section>
  );
}

export default ProjectsSection;
