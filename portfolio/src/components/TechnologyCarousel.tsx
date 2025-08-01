import { useState } from "react";
import { Button } from "../components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Technology {
  name: string;
  icon: string;
}

interface TechnologyCarouselProps {
  technologies: Technology[];
}

function TechnologyCarousel({ technologies }: TechnologyCarouselProps) {
  const [techCarouselIndex, setTechCarouselIndex] = useState(0);
  const technologiesPerView = 4;

  const handlePrevClick = () => {
    setTechCarouselIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNextClick = () => {
    setTechCarouselIndex((prevIndex) =>
      Math.min(technologies.length - technologiesPerView, prevIndex + 1)
    );
  };

  return (
    <section id="technologies" className="space-y-4">
      <h2 className="text-3xl font-bold text-center">Technologies</h2>
      <div className="relative flex items-center justify-center w-full">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrevClick}
          disabled={techCarouselIndex === 0}
          className="absolute left-0 z-10"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="flex overflow-hidden w-full px-12">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                techCarouselIndex * (100 / technologiesPerView)
              }%)`,
            }}
          >
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex-none flex flex-col items-center justify-center w-1/4 p-2"
              >
                <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center p-2">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="mt-2 text-sm text-center">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={handleNextClick}
          disabled={
            techCarouselIndex >= technologies.length - technologiesPerView
          }
          className="absolute right-0 z-10"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}

export default TechnologyCarousel;
