"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  pulse: number;
}

export function WorldMapBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let nodes: Node[] = [];
    let time = 0;

    const hubLocations = [
      { x: 0.22, y: 0.35 },
      { x: 0.48, y: 0.28 },
      { x: 0.72, y: 0.32 },
      { x: 0.55, y: 0.55 },
      { x: 0.35, y: 0.62 },
      { x: 0.78, y: 0.58 },
      { x: 0.15, y: 0.48 },
      { x: 0.62, y: 0.42 },
    ];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = `${canvas.offsetWidth}px`;
      canvas.style.height = `${canvas.offsetHeight}px`;

      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      nodes = hubLocations.map((loc) => ({
        x: loc.x * w,
        y: loc.y * h,
        pulse: Math.random() * Math.PI * 2,
      }));
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      time += 0.02;

      ctx.strokeStyle = "rgba(0, 212, 255, 0.06)";
      ctx.lineWidth = 1;
      for (let i = 0; i < 8; i++) {
        const y = (h / 8) * i;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
      for (let i = 0; i < 12; i++) {
        const x = (w / 12) * i;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = "rgba(59, 130, 246, 0.12)";
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      nodes.forEach((node) => {
        const pulseSize = 3 + Math.sin(time + node.pulse) * 2;
        const glow = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          20
        );
        glow.addColorStop(0, "rgba(0, 212, 255, 0.4)");
        glow.addColorStop(1, "rgba(0, 212, 255, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 20, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = "#00D4FF";
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    const handleResize = () => {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      resize();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-40"
      aria-hidden="true"
    />
  );
}
