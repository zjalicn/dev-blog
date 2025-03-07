import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  speedX: number;
  speedY: number;
  opacity: number;
}

const LogoParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    // Set canvas size to match container
    const resize = () => {
      if (!canvas) return;
      const container = canvas.parentElement;
      if (!container) return;

      // Set canvas dimensions to parent container size
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };

    // Initialize
    const init = () => {
      resize();

      // Create particles
      particles = [];
      // Adjust particle count based on container size
      const area = canvas.width * canvas.height;
      const particleCount = Math.min(Math.floor(area / 400), 30); // Limit to max 30 particles

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5, // Slightly smaller particles
          color: getRandomColor(),
          speedX: Math.random() * 0.3 - 0.15, // Slower movement
          speedY: Math.random() * 0.3 - 0.15, // Slower movement
          opacity: Math.random() * 0.4 + 0.2, // Slightly more transparent
        });
      }

      animate();
    };

    // Random color function - using purple theme
    const getRandomColor = (): string => {
      const colors = [
        "rgba(139, 92, 246, 0.6)", // Purple-400
        "rgba(167, 139, 250, 0.6)", // Purple-300
        "rgba(196, 181, 253, 0.6)", // Purple-200
        "rgba(124, 58, 237, 0.6)", // Purple-600
        "rgba(255, 255, 255, 0.6)", // White
      ];

      return colors[Math.floor(Math.random() * colors.length)];
    };

    // Calculate particle opacity based on position (for edge fading)
    const getEdgeFadedOpacity = (
      x: number,
      y: number,
      baseOpacity: number
    ): number => {
      if (!canvas) return baseOpacity;

      // Edge fade distance (percentage of canvas)
      const fadeDistance = 0.2;

      // Calculate distance from each edge as a percentage (0 to 1)
      const distLeft = x / canvas.width;
      const distRight = 1 - x / canvas.width;
      const distTop = y / canvas.height;
      const distBottom = 1 - y / canvas.height;

      // Find the minimum distance to any edge
      const minDist = Math.min(distLeft, distRight, distTop, distBottom);

      // If within fade distance of an edge, apply fade
      if (minDist < fadeDistance) {
        // Normalize to 0-1 within fade distance
        const fadeRatio = minDist / fadeDistance;
        return baseOpacity * fadeRatio;
      }

      return baseOpacity;
    };

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      particles.forEach((particle) => {
        // Update particle position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Calculate opacity with edge fading
        const fadedOpacity = getEdgeFadedOpacity(
          particle.x,
          particle.y,
          particle.opacity
        );

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = fadedOpacity;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Event listeners
    window.addEventListener("resize", resize);

    init();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default LogoParticles;
