import { Github, ExternalLink } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import type { Project } from "./ProjectsSection";
import defaultImage from "../assets/under_construction.jpg";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <Card
      onClick={onClick}
      className="cursor-pointer transition-transform hover:scale-[1.10] w-[300px] h-[380px] flex flex-col overflow-hidden bg-gray-800 border-gray-700"
    >
      {/* Image section - wider proportion */}
      <div className="h-[200px] overflow-hidden bg-gray-700">
        <img
          src={
            project.imageUrl
              ? project.imageUrl
              : project.images && project.images.length > 0
              ? project.images[0]
              : defaultImage
          }
          alt={project.title}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Title & Description */}
      <CardHeader className="p-5 pb-3">
        <CardTitle className="text-lg line-clamp-1 text-gray-100">
          {project.title}
        </CardTitle>
        <CardDescription className="line-clamp-3 text-gray-300">
          {project.description}
        </CardDescription>
      </CardHeader>

      {/* Footer with date and icons */}
      <CardContent className="flex justify-between items-center px-5 mt-auto pt-2">
        {project.date && (
          <span className="text-sm text-gray-400">{project.date}</span>
        )}
        <div className="flex gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-gray-200 hover:text-white transition-colors"
            >
              <ExternalLink className="h-6 w-6" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-gray-200 hover:text-white transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
