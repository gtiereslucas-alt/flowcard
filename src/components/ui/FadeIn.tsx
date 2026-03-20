"use client";
import { motion } from "framer-motion";

export function FadeIn({ 
  children, 
  delay = 0, 
  duration = 0.5, 
  className = "", 
  direction = "up" 
}: { 
  children: React.ReactNode, 
  delay?: number, 
  duration?: number, 
  className?: string, 
  direction?: "up" | "down" | "left" | "right" | "none" 
}) {
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }} // Apple-like ease out
      className={className}
    >
      {children}
    </motion.div>
  );
}
