"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { RoughNotation } from "react-rough-notation";

interface Technology {
  name: string;
  icon: string;
}

interface TechnologyCarouselProps {
  technologies: Technology[];
}

export default function TechnologyCarousel({
  technologies,
}: TechnologyCarouselProps) {
  const [translateX, setTranslateX] = useState(0);
  const [isHoveringRight, setIsHoveringRight] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  const speed = 0.03;
  const hoverSpeed = 0.05;
  const itemWidth = 140;
  const totalWidth = technologies.length * itemWidth;

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
  );

  useEffect(() => {
    lastTimeRef.current = performance.now();
    animationFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [animate]);

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
    <section id="technologies" className="space-y-12 overflow-hidden py-12">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-300 font-gloria">
        <RoughNotation type="bracket" show={true} color="#fbbf24" strokeWidth={3} padding={[0, 10]}>
          Technologies
        </RoughNotation>
      </h2>
      <div
        className="relative flex items-center justify-center w-full py-8"
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
              <div className="comic-panel w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center p-3 border-2 border-black shadow-[4px_4px_0px_#000]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <span className="mt-4 text-md font-bold text-center text-purple-100 font-sans bg-purple-900/50 px-3 py-1 rounded-full border border-black shadow-[2px_2px_0px_#000]">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
