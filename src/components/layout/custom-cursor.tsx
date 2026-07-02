"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window;
    if (isTouchDevice) return;

    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const enter = () => setVisible(true);
    const leave = () => setVisible(false);

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(
        !!target.closest("a, button, [role='button'], input, textarea, select")
      );
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousemove", handleHover);
    document.body.addEventListener("mouseenter", enter);
    document.body.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousemove", handleHover);
      document.body.removeEventListener("mouseenter", enter);
      document.body.removeEventListener("mouseleave", leave);
    };
  }, []);

  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <>
      <div
        className="pointer-events-none fixed z-[9999] hidden mix-blend-difference md:block"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.2s, width 0.2s, height 0.2s",
          width: hovering ? 40 : 8,
          height: hovering ? 40 : 8,
          borderRadius: "50%",
          border: "1px solid white",
        }}
        aria-hidden="true"
      />
    </>
  );
}
