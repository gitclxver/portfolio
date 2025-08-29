import { motion } from "framer-motion";

/**
 * A responsive and animated background component with a simple grid pattern.
 * It uses the original blue color scheme, a subtle "pop" animation, and
 * straight vertical and horizontal lines to create a clean, modern grid.
 */
function TileBackground() {
  return (
    <motion.div
      className="absolute inset-0 -z-10 bg-blue-950 overflow-hidden"
      // The `animate` prop is used to define the animation keyframes.
      // We are now animating both the background position and a slight scale/box-shadow "pop."
      animate={{
        backgroundPosition: ["0 0", "20px 20px", "0 0"],
        scale: [1, 1.005, 1], // Subtle "pop" effect
        boxShadow: [
          "0 0 0px rgba(0, 0, 0, 0)",
          "0 0 15px rgba(0, 0, 0, 0.1)",
          "0 0 0px rgba(0, 0, 0, 0)",
        ],
      }}
      // All animations are now controlled by a single `transition` prop.
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        // The `style` prop is now only for static CSS properties.
        backgroundImage: `
          linear-gradient(to right, rgba(37,99,235,0.6) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(37,99,235,0.6) 1px, transparent 1px)
        `,
        backgroundSize: "200px 200px",
      }}
    />
  );
}

export default TileBackground;
