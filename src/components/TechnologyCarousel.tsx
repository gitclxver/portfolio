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
  const itemWidth = 120;
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
    <section id="technologies" className="space-y-4 overflow-hidden">
      <h2 className="text-3xl font-bold text-center">Technologies</h2>
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
              className="flex-none flex flex-col items-center justify-center w-[120px] p-2 transition-transform duration-300 hover:scale-110"
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
    </section>
  );
}

export default TechnologyCarousel;
