import { useState, useRef, useEffect, useCallback } from "react";

interface Technology {
  name: string;
  icon: string;
}

interface TechnologyCarouselProps {
  technologies: Technology[];
}

function TechnologyCarousel({ technologies }: TechnologyCarouselProps) {
  const [translateX, setTranslateX] = useState(0);
  const [isHoveringRight, setIsHoveringRight] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  const speed = 0.03;
  const hoverSpeed = 0.05;
  const itemWidth = 140; // Increased to accommodate larger icons
  const totalWidth = technologies.length * itemWidth;

  // Memoize animate with useCallback
  const animate = useCallback(
    (time: number) => {
      if (lastTimeRef.current != null) {
        const deltaTime = time - lastTimeRef.current;
        setTranslateX((prev) => {
          let newTranslateX = prev;
          if (isHovered && isHoveringRight) {
            newTranslateX = newTranslateX + hoverSpeed * deltaTime;
          } else if (!isHovered) {
            newTranslateX = newTranslateX - speed * deltaTime;
          }

          if (newTranslateX <= -totalWidth) {
            newTranslateX += totalWidth;
          }
          if (newTranslateX > 0) {
            newTranslateX -= totalWidth;
          }

          return newTranslateX;
        });
      }
      lastTimeRef.current = time;
      animationFrameRef.current = requestAnimationFrame(animate);
    },
    [isHovered, isHoveringRight, totalWidth]
  ); // Dependencies that affect animation

  useEffect(() => {
    lastTimeRef.current = performance.now();
    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [animate]); // Now animate is stable when dependencies don't change

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (carouselRef.current) {
        const carouselWidth = carouselRef.current.clientWidth;
        const mouseX =
          e.clientX - carouselRef.current.getBoundingClientRect().left;
        setIsHoveringRight(mouseX > carouselWidth / 2);
      }
    },
    []
  );

  const loopedTechnologies = [
    ...technologies,
    ...technologies,
    ...technologies,
  ];

  return (
    <section id="technologies" className="space-y-6 overflow-hidden py-4">
      <h2 className="text-3xl font-bold text-center text-gray-100">
        Technologies
      </h2>
      <div
        className="relative flex items-center justify-center w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsHoveringRight(false);
        }}
        onMouseMove={handleMouseMove}
        ref={carouselRef}
      >
        <div
          className="flex w-max"
          style={{
            transform: `translateX(${translateX}px)`,
          }}
        >
          {loopedTechnologies.map((tech, index) => (
            <div
              key={index}
              className="flex-none flex flex-col items-center justify-center w-[140px] p-3 transition-all duration-300 hover:scale-110"
            >
              <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center p-3 shadow-md">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-12 w-12 object-contain" // Increased icon size
                />
              </div>
              <span className="mt-3 text-md font-medium text-center text-gray-200">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechnologyCarousel;
