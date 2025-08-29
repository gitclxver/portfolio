import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface SymbioteNode {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  type: "venom" | "spiderman";
  opacity: number;
  trail: { x: number; y: number; opacity: number; size: number }[];
}

interface Connection {
  from: SymbioteNode;
  to: SymbioteNode;
  width: number;
  opacity: number;
}

const NeuralNetBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [nodes, setNodes] = useState<SymbioteNode[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const nodesRef = useRef<SymbioteNode[]>([]); // Ref for performance
  const mousePosition = useRef({ x: 0, y: 0 });
  const grabbedNodeRef = useRef<SymbioteNode | null>(null);
  const grabStartPosRef = useRef({ x: 0, y: 0 });
  const [grabbedNodeId, setGrabbedNodeId] = useState<number | null>(null); // State for animation
  const [hoveredNodeId, setHoveredNodeId] = useState<number | null>(null); // State for hover effect
  const nextNodeId = useRef(0);
  const maxNodes = 25; // Increased to 50 as requested
  const constantSpeed = 0.75; // Slower constant speed for all orbs

  // Check for dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  // Initialize nodes with uniform velocity
  const initializeNodes = useCallback(() => {
    if (!containerRef.current) return;
    const width = containerRef.current.offsetWidth;
    const height = containerRef.current.offsetHeight;
    const initialNodes: SymbioteNode[] = [];
    const numNodes = 5;
    for (let i = 0; i < numNodes; i++) {
      const angle = Math.random() * Math.PI * 2;
      initialNodes.push({
        id: nextNodeId.current++,
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.cos(angle) * constantSpeed,
        vy: Math.sin(angle) * constantSpeed,
        size: Math.random() * 15 + 20,
        type: Math.random() > 0.5 ? "venom" : "spiderman",
        opacity: 0.9 + Math.random() * 0.1,
        trail: [],
      });
    }
    setNodes(initialNodes);
    nodesRef.current = initialNodes; // Initialize the ref
  }, []);

  useEffect(() => {
    initializeNodes();
  }, [initializeNodes]);

  // Animation loop with physics
  useEffect(() => {
    if (nodesRef.current.length === 0) return;

    let animationFrameId: number;

    const animate = () => {
      const nodesToAnimate = nodesRef.current;
      if (!containerRef.current) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      const width = containerRef.current.offsetWidth;
      const height = containerRef.current.offsetHeight;
      const newConnections: Connection[] = [];
      const mouse = mousePosition.current;

      // Update node positions and handle collisions
      for (let i = 0; i < nodesToAnimate.length; i++) {
        const node = nodesToAnimate[i];

        // Check if the node is grabbed or hovered over
        const isStationary =
          (grabbedNodeRef.current && grabbedNodeRef.current.id === node.id) ||
          hoveredNodeId === node.id;

        // Only apply physics if the node is not stationary
        if (!isStationary) {
          // Apply velocity
          node.x += node.vx;
          node.y += node.vy;

          // Add a point to the trail
          node.trail.push({
            x: node.x,
            y: node.y,
            opacity: 1,
            size: node.size,
          });
          if (node.trail.length > 15) {
            // Limit trail length for a fading effect
            node.trail.shift();
          }
        } else {
          node.trail = []; // Clear trail if node is stationary
        }

        // Bounce off walls with damping
        if (node.x <= node.size / 2 || node.x >= width - node.size / 2) {
          if (!isStationary) {
            node.vx *= -0.25; // Slower damping
            node.x = Math.max(
              node.size / 2,
              Math.min(node.x, width - node.size / 2)
            );
          }
        }
        if (node.y <= node.size / 2 || node.y >= height - node.size / 2) {
          if (!isStationary) {
            node.vy *= -0.25; // Slower damping
            node.y = Math.max(
              node.size / 2,
              Math.min(node.y, height - node.size / 2)
            );
          }
        }
      }

      // Node-to-node collision and spawning logic
      for (let i = 0; i < nodesToAnimate.length; i++) {
        for (let j = i + 1; j < nodesToAnimate.length; j++) {
          const node1 = nodesToAnimate[i];
          const node2 = nodesToAnimate[j];
          const dx = node1.x - node2.x;
          const dy = node1.y - node2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const combinedSize = (node1.size + node2.size) / 2;

          if (dist < combinedSize) {
            // Realistic elastic collision physics
            const angle = Math.atan2(dy, dx);
            const sin = Math.sin(angle);
            const cos = Math.cos(angle);

            // Rotate velocity vectors
            const v1_rotated_x = node1.vx * cos + node1.vy * sin;
            const v1_rotated_y = node1.vy * cos - node1.vx * sin;
            const v2_rotated_x = node2.vx * cos + node2.vy * sin;
            const v2_rotated_y = node2.vy * cos - node2.vx * sin;

            // Swap velocities along the axis of collision (x-axis)
            const v1_final_x = v2_rotated_x;
            const v2_final_x = v1_rotated_x;

            // Rotate back to original coordinate system
            node1.vx = v1_final_x * cos - v1_rotated_y * sin;
            node1.vy = v1_rotated_y * cos + v1_final_x * sin;
            node2.vx = v2_final_x * cos - v2_rotated_y * sin;
            node2.vy = v2_rotated_y * cos + v2_final_x * sin;

            // Separate the nodes to prevent re-collision
            const overlap = combinedSize - dist;
            const moveX = overlap * (dx / dist);
            const moveY = overlap * (dy / dist);
            node1.x += moveX / 2;
            node1.y += moveY / 2;
            node2.x -= moveX / 2;
            node2.y -= moveY / 2;

            // Spawn new node at a random location
            if (nodesToAnimate.length < maxNodes) {
              const newType = Math.random() > 0.5 ? "venom" : "spiderman";
              const newAngle = Math.random() * Math.PI * 2;
              const newNode = {
                id: nextNodeId.current++,
                x: Math.random() * width, // Spawn at random x
                y: Math.random() * height, // Spawn at random y
                vx: Math.cos(newAngle) * constantSpeed,
                vy: Math.sin(newAngle) * constantSpeed,
                size: Math.random() * 10 + 15,
                type: newType,
                opacity: 0.9,
                trail: [],
              };
              nodesRef.current = [...nodesRef.current, newNode as SymbioteNode]; ;
              setNodes(nodesRef.current); // Force a re-render
            }
          }
        }
      }

      // Calculate connections
      const connectionDistance = 180;
      for (let i = 0; i < nodesToAnimate.length; i++) {
        for (let j = i + 1; j < nodesToAnimate.length; j++) {
          const node1 = nodesToAnimate[i];
          const node2 = nodesToAnimate[j];
          const dx = node1.x - node2.x;
          const dy = node1.y - node2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const width = Math.max(1.5, 3.5 * (1 - dist / connectionDistance));
            const mouseDist1 = Math.sqrt(
              Math.pow(node1.x - mouse.x, 2) + Math.pow(node1.y - mouse.y, 2)
            );
            const mouseDist2 = Math.sqrt(
              Math.pow(node2.x - mouse.x, 2) + Math.pow(node2.y - mouse.y, 2)
            );
            let opacity = 0.4;
            if (mouseDist1 < 120 || mouseDist2 < 120) {
              opacity = 0.7;
            }
            newConnections.push({
              from: node1,
              to: node2,
              width,
              opacity,
            });
          }
        }
      }
      setConnections(newConnections);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hoveredNodeId]);

  // Mouse interaction handlers
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mousePosition.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
  }, []);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    e.preventDefault();
    if (e.button === 0) {
      // Left-click
      const rect = containerRef.current?.getBoundingClientRect();
      const clickX = e.clientX - (rect?.left || 0);
      const clickY = e.clientY - (rect?.top || 0);

      const grabbed = nodesRef.current.find((node) => {
        const dist = Math.sqrt((node.x - clickX) ** 2 + (node.y - clickY) ** 2);
        return dist < node.size / 2;
      });
      if (grabbed) {
        grabbedNodeRef.current = grabbed;
        grabStartPosRef.current = { x: clickX, y: clickY };
        setGrabbedNodeId(grabbed.id); // Set state for animation
        // Stop the orb's movement immediately and clear its trail
        grabbed.vx = 0;
        grabbed.vy = 0;
        grabbed.trail = [];
      }
    }
  }, []);

  const handleMouseUp = useCallback((e: MouseEvent) => {
    if (e.button === 0 && grabbedNodeRef.current !== null) {
      const grabbedNode = grabbedNodeRef.current;

      // Calculate the launch vector from the grab start position to the mouse's final position
      const launchVectorX = mousePosition.current.x - grabStartPosRef.current.x;
      const launchVectorY = mousePosition.current.y - grabStartPosRef.current.y;

      // Launch the node in the opposite direction for the slingshot effect
      const launchAngle = Math.atan2(-launchVectorY, -launchVectorX); // Reverse direction

      // Update the node's velocity with the constant speed
      grabbedNode.vx = Math.cos(launchAngle) * constantSpeed;
      grabbedNode.vy = Math.sin(launchAngle) * constantSpeed;

      grabbedNodeRef.current = null;
      setGrabbedNodeId(null);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseDown, handleMouseUp]);

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden z-0">
      <svg className="absolute inset-0 w-full h-full">
        {connections.map((conn, index) => {
          const fromType = conn.from.type;
          const toType = conn.to.type;
          let color;
          if (fromType === "venom" && toType === "venom") {
            color = isDarkMode
              ? "rgba(180, 20, 30, 0.6)"
              : "rgba(220, 50, 50, 0.6)";
          } else if (fromType === "spiderman" && toType === "spiderman") {
            color = isDarkMode
              ? "rgba(30, 80, 180, 0.6)"
              : "rgba(50, 100, 220, 0.6)";
          } else {
            color = isDarkMode
              ? "rgba(120, 50, 150, 0.6)"
              : "rgba(150, 70, 180, 0.6)";
          }
          return (
            <motion.line
              key={index}
              x1={conn.from.x}
              y1={conn.from.y}
              x2={conn.to.x}
              y2={conn.to.y}
              stroke={color}
              strokeWidth={conn.width}
              strokeOpacity={conn.opacity}
              initial={{ opacity: 0 }}
              animate={{ opacity: conn.opacity }}
              transition={{ duration: 0.5 }}
            />
          );
        })}
      </svg>

      {/* Render the fading trails behind the orbs */}
      {nodes.map((node) => (
        <div key={`trail-container-${node.id}`} className="absolute">
          {node.trail.map((point, index) => (
            <motion.div
              key={index}
              className={`absolute rounded-full`}
              style={{
                width: point.size * 0.2, // Smaller size for trail
                height: point.size * 0.2,
                x: point.x - (point.size * 0.2) / 2,
                y: point.y - (point.size * 0.2) / 2,
                opacity: index / node.trail.length, // Fades out with index
                backgroundColor: node.type === "venom" ? "#dc2626" : "#2563eb", // Use a solid color for consistency
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: index / node.trail.length }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
      ))}

      {/* Render the main orbs */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className={`absolute rounded-full cursor-pointer ${
            node.type === "venom"
              ? "bg-gradient-to-br from-red-800 to-red-600"
              : "bg-gradient-to-br from-blue-700 to-red-500"
          } ${isDarkMode ? "shadow-lg" : "shadow-md"} ${
            node.type === "venom" ? "shadow-red-900/50" : "shadow-blue-900/50"
          }`}
          style={{
            width: node.size,
            height: node.size,
            x: node.x - node.size / 2,
            y: node.y - node.size / 2,
            opacity: node.opacity,
          }}
          onMouseEnter={() => setHoveredNodeId(node.id)}
          onMouseLeave={() => setHoveredNodeId(null)}
          animate={{
            x: node.x - node.size / 2,
            y: node.y - node.size / 2,
            scale: grabbedNodeId === node.id ? 1.2 : 1, // Grab animation
            rotate: grabbedNodeId === node.id ? 45 : 0,
          }}
          transition={{
            x: { type: "spring", damping: 30, stiffness: 200 },
            y: { type: "spring", damping: 30, stiffness: 200 },
            scale: {
              type: "spring",
              damping: 10,
              stiffness: 100,
            },
            rotate: {
              type: "spring",
              damping: 10,
              stiffness: 100,
            },
          }}
        >
          {/* Add symbiote details */}
          <div
            className={`absolute inset-0 rounded-full ${
              node.type === "venom" ? "bg-white/10" : "bg-white/20"
            }`}
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
              transform: "rotate(45deg)",
            }}
          />
          <div
            className={`absolute inset-0 rounded-full ${
              node.type === "venom" ? "bg-black/20" : "bg-black/10"
            }`}
            style={{
              clipPath: "polygon(0% 100%, 100% 100%, 50% 0%)",
              transform: "rotate(45deg)",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default NeuralNetBackground;
