"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const PulseMap = () => {
  const [pulses, setPulses] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPulse = {
        id: Date.now(),
        x: Math.random() * 80 + 10, // 10% to 90%
        y: Math.random() * 60 + 20, // 20% to 80%
      };
      setPulses((prev) => [...prev.slice(-10), newPulse]);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-[2/1] bg-white/[0.02] rounded-[3rem] border border-border-custom overflow-hidden group shadow-2xl">
      {/* ABSTRACT WORLD MAP (SVG) */}
      <svg viewBox="0 0 1000 500" className="absolute inset-0 w-full h-full opacity-10 grayscale invert group-hover:opacity-20 transition-opacity duration-1000">
        <path 
           d="M150,150 Q200,100 250,150 T350,150 T450,100 T550,150 T650,200 T750,150 T850,200" 
           stroke="currentColor" strokeWidth="1" fill="none" className="text-foreground/20"
        />
        {/* Simplified continents dots */}
        <circle cx="200" cy="200" r="2" fill="currentColor" />
        <circle cx="300" cy="150" r="2" fill="currentColor" />
        <circle cx="500" cy="300" r="2" fill="currentColor" />
        <circle cx="700" cy="250" r="2" fill="currentColor" />
        <circle cx="850" cy="180" r="2" fill="currentColor" />
      </svg>

      {/* PULSING TAPS */}
      <AnimatePresence>
        {pulses.map((pulse) => (
          <motion.div
            key={pulse.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 2, opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            style={{ left: `${pulse.x}%`, top: `${pulse.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
          >
            <div className="w-4 h-4 rounded-full bg-accent shadow-[0_0_20px_#2563eb]" />
            <div className="absolute inset-0 w-full h-full rounded-full bg-accent animate-ping opacity-20" />
            
            {/* CONNECTION TO CLOUD */}
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 100, opacity: [0, 1, 0] }}
              transition={{ duration: 1.5 }}
              className="absolute bottom-full left-1/2 w-[1px] bg-gradient-to-t from-accent to-transparent origin-bottom"
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* HUD OVERLAY */}
      <div className="absolute top-8 left-8 p-6 rounded-2xl bg-white dark:bg-black/40 border border-border-custom dark:border-border-custom backdrop-blur-md">
         <div className="text-[10px] font-black uppercase tracking-[.3em] text-accent mb-2">Live Network Status</div>
         <div className="flex items-center gap-4">
            <div className="flex flex-col">
               <span className="text-2xl font-black">12.4k</span>
               <span className="text-[8px] font-bold text-foreground/20 uppercase">Taps / Hour</span>
            </div>
            <div className="w-[1px] h-8 bg-white/10" />
            <div className="flex flex-col">
               <span className="text-2xl font-black">99.9%</span>
               <span className="text-[8px] font-bold text-foreground/20 uppercase">Uptime</span>
            </div>
         </div>
      </div>

      <div className="absolute bottom-8 right-8">
         <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-black text-[9px] uppercase tracking-widest">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Global Sync Active
         </div>
      </div>
    </div>
  );
};
