"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { MouseEvent } from "react";

export function HeroAnimatedBackground({ children }: { children: React.ReactNode }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  // Spotlight gradient following mouse cursor
  const backgroundSpotlight = useMotionTemplate`radial-gradient(700px circle at ${springX}px ${springY}px, rgba(37,99,235,0.12) 0%, transparent 80%)`;

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="w-full flex-col flex items-center relative overflow-hidden group min-h-screen justify-start pt-32 pb-40 border-b border-border-custom"
    >
      {/* 1. MOUSE FOLLOW SPOTLIGHT */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10"
        style={{ background: backgroundSpotlight }}
      />
      
      {/* 2. SUBTLE MASH GRID */}
      <div className="pointer-events-none absolute inset-0 -z-20 opacity-20 transition-opacity" 
           style={{ backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`, backgroundSize: `36px 36px` }} 
      />

      {/* 3. PERMANENT AMBIENT BLOBS */}
      <div className="absolute top-[10%] right-[-10%] w-[800px] h-[800px] bg-accent/5 rounded-full blur-[140px] -z-30 animate-pulse delay-500" />
      <div className="absolute bottom-[20%] left-[-10%] w-[800px] h-[800px] bg-accent/5 rounded-full blur-[140px] -z-30 animate-[pulse_8s_ease-in-out_infinite]" />

      {/* INJECTED HERO CONTENT */}
      <div className="container mx-auto px-8 relative z-10 flex flex-col items-center w-full">
        {children}
      </div>
    </section>
  );
}
