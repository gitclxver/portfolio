import { Github, ExternalLink } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import type { Project } from "@/types/types";

const DEFAULT_IMAGE = "/assets/under_construction.jpg";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const imageSrc =
    project.imageUrl ??
    (project.images && project.images.length > 0
      ? project.images[0]
      : DEFAULT_IMAGE);

  return (
    <Card
      onClick={onClick}
      className="cursor-pointer w-[300px] h-[380px] flex flex-col overflow-hidden border-none shadow-none bg-transparent"
    >
      <div className="h-[200px] overflow-hidden bg-purple-950 border-b-2 border-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt={project.title}
          className="object-cover w-full h-full"
        />
      </div>

      <CardHeader className="p-5 pb-3 bg-[#3d1a6e]">
        <CardTitle className="text-lg line-clamp-1 text-amber-300 font-gloria">
          {project.title}
        </CardTitle>
        <CardDescription className="line-clamp-3 text-purple-100 font-sans text-sm mt-2">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex justify-between items-center px-5 mt-auto pt-2 bg-[#3d1a6e]">
        {project.date && (
          <span className="text-sm text-purple-300 font-sans font-bold">{project.date}</span>
        )}
        <div className="flex gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-purple-200 hover:text-amber-300 transition-colors"
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
              className="text-purple-200 hover:text-amber-300 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
