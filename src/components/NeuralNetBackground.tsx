import { useEffect, useRef } from "react";

// Define the interface for a particle object
interface Particle {
  x: number;
  y: number;
  vx: number; // velocity x
  vy: number; // velocity y
  radius: number;
}

const NeuralNetBackground = () => {
  // useRef to hold the canvas element and animation frame ID
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Initializing animationFrameId with 0 to prevent the TypeScript error
  const animationFrameId = useRef<number>(0);
  // Use a ref to store particles to prevent re-renders on every update
  const particlesRef = useRef<Particle[]>([]);
  // Use a ref for mouse position for performance
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Function to resize the canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // Re-create particles on resize to keep them within the new boundaries
      createParticles();
    };

    // Create particles with random positions and velocities
    const createParticles = () => {
      // Increased the number of particles for a thicker network
      const numParticles = 200;
      const newParticles: Particle[] = [];
      for (let i = 0; i < numParticles; i++) {
        newParticles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          // Reduced the multiplier for slower movement
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: 2, // Slightly increased the radius for better visibility
        });
      }
      particlesRef.current = newParticles;
    };

    // Event listener for mouse movement to get mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    // Main animation loop
    const animate = () => {
      if (!ctx) return;

      // Check the current theme and set colors accordingly
      const isDarkMode = document.documentElement.classList.contains("dark");
      const networkColor = isDarkMode
        ? "rgba(59, 130, 246, 0.5)"
        : "rgba(30, 64, 175, 0.5)";
      const glowColor = isDarkMode
        ? "rgba(255, 105, 180, 0.5)"
        : "rgba(220, 38, 38, 0.5)";

      // Clear the canvas on each frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      const mouseRepulsionDistance = 100;
      const mouseGlowDistance = 70;

      // Draw lines between particles that are close to each other
      const connectionDistance = 200;
      ctx.lineWidth = 1.0;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            const distToMouse1 = Math.sqrt(
              Math.pow(p1.x - mouse.x, 2) + Math.pow(p1.y - mouse.y, 2)
            );
            const distToMouse2 = Math.sqrt(
              Math.pow(p2.x - mouse.x, 2) + Math.pow(p2.y - mouse.y, 2)
            );

            let color = networkColor;
            if (
              distToMouse1 < mouseGlowDistance ||
              distToMouse2 < mouseGlowDistance
            ) {
              color = glowColor;
            }

            ctx.strokeStyle = color.replace(
              "0.5",
              `${1 - dist / connectionDistance}`
            );
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouseRepulsionDistance) {
          const forceDirectionX = dx / dist;
          const forceDirectionY = dy / dist;
          const force =
            (mouseRepulsionDistance - dist) / mouseRepulsionDistance;
          p.x += forceDirectionX * force * 2;
          p.y += forceDirectionY * force * 2;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        let color = networkColor;
        if (dist < mouseGlowDistance) {
          color = glowColor;
        }
        ctx.fillStyle = color;
        ctx.fill();
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 bg-gray-50 dark:bg-gray-950 transition-colors duration-500"
    />
  );
};

export default NeuralNetBackground;
