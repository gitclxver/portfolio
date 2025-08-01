import { useState } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "../components/ui/drawer";
import { Button } from "../components/ui/button";
import { Github } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  details: string;
  github: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [isProjectDrawerOpen, setIsProjectDrawerOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openProjectDrawer = (project: Project) => {
    setSelectedProject(project);
    setIsProjectDrawerOpen(true);
  };

  return (
    <section id="projects" className="space-y-4">
      <h2 className="text-3xl font-bold text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="cursor-pointer transition-transform hover:scale-105"
            onClick={() => openProjectDrawer(project)}
          >
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Project Details Drawer */}
      <Drawer open={isProjectDrawerOpen} onOpenChange={setIsProjectDrawerOpen}>
        <DrawerContent className="w-full h-auto max-h-[90%]">
          <DrawerHeader>
            <DrawerTitle>{selectedProject?.title}</DrawerTitle>
            <DrawerDescription>
              {selectedProject?.description}
            </DrawerDescription>
          </DrawerHeader>
          <div className="space-y-4 p-4 overflow-y-auto">
            <p>{selectedProject?.details}</p>
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
