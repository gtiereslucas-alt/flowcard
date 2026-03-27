"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const ExplodedCard = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  // Animations for each layer
  const layer1Y = useTransform(smoothProgress, [0.3, 0.7], [0, -150]); // Top Shell
  const layer2Y = useTransform(smoothProgress, [0.3, 0.7], [0, -50]);  // Antenna
  const layer3Y = useTransform(smoothProgress, [0.3, 0.7], [0, 50]);   // Chip
  const layer4Y = useTransform(smoothProgress, [0.3, 0.7], [0, 150]);  // Base Shell

  const opacity = useTransform(smoothProgress, [0.2, 0.3, 0.7, 0.8], [0, 1, 1, 0]);
  const rotateX = useTransform(smoothProgress, [0.3, 0.7], ["45deg", "60deg"]);

  return (
    <div ref={containerRef} className="h-[150vh] relative flex items-center justify-center">
      <div className="sticky top-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] perspective-1000">
        <motion.div 
          style={{ opacity, rotateX, rotateY: "-10deg", transformStyle: "preserve-3d" }}
          className="relative w-full h-full flex flex-col items-center justify-center"
        >
          {/* LAYER 1: PREMIUM SHELL */}
          <motion.div 
            style={{ y: layer1Y, translateZ: 100 }}
            className="absolute w-80 h-52 rounded-2xl bg-gradient-to-br from-zinc-800 to-black border border-zinc-300 dark:border-zinc-300 dark:border-white/20 shadow-2xl flex items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
            <div className="text-accent font-black text-[10px] tracking-widest uppercase">Premium Finish</div>
          </motion.div>

          {/* LAYER 2: NFC ANTENNA (SVG) */}
          <motion.div 
            style={{ y: layer2Y, translateZ: 50 }}
            className="absolute w-72 h-44 rounded-xl border-4 border-accent/30 flex items-center justify-center"
          >
             <svg width="200" height="120" viewBox="0 0 200 120" className="opacity-50">
                <path 
                  d="M10,10 H190 V110 H10 V20 H180 V100 H20 V30 H170 V90 H30 V40 H160 V80 H40 V50 H150 V70 H50" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  fill="none" 
                  className="text-accent animate-[pulse_2s_infinite]"
                />
             </svg>
             <div className="absolute bottom-2 right-4 text-[8px] font-mono text-accent/40 uppercase font-black">13.56 MHz Coil</div>
          </motion.div>

          {/* LAYER 3: NXP SEMICONDUCTOR CHIP */}
          <motion.div 
            style={{ y: layer3Y, translateZ: 0 }}
            className="absolute w-12 h-12 bg-zinc-900 border border-zinc-300 dark:border-zinc-300 dark:border-white/20 rounded-lg shadow-inner flex items-center justify-center group"
          >
             <div className="w-4 h-4 rounded-sm bg-accent animate-ping opacity-20" />
             <div className="absolute w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_#2563eb]" />
             <div className="absolute -bottom-10 whitespace-nowrap text-[8px] font-mono font-black text-text-muted">Secure Element v4.0</div>
          </motion.div>

          {/* LAYER 4: BASE SHELL */}
          <motion.div 
            style={{ y: layer4Y, translateZ: -100 }}
            className="absolute w-80 h-52 rounded-2xl bg-zinc-950 border border-border-custom shadow-inner"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent" />
          </motion.div>

          {/* CONNECTING LINES (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" style={{ transform: "translateZ(-50px)" }}>
             {/* Lines could go here but let's keep it clean */}
          </svg>
        </motion.div>

        {/* Labels positioned relative to layers */}
        <div className="absolute left-[5%] top-1/4 space-y-32">
           <FadeInLabel activeProgress={smoothProgress} range={[0.3, 0.4]} label="Coque en Polymère Bio-sourcé" />
           <FadeInLabel activeProgress={smoothProgress} range={[0.4, 0.5]} label="Antenne de Résonance Cuivre" />
        </div>
        <div className="absolute right-[5%] bottom-1/4 space-y-32 text-right">
           <FadeInLabel activeProgress={smoothProgress} range={[0.5, 0.6]} label="Puce NXP de Haute Sécurité" />
           <FadeInLabel activeProgress={smoothProgress} range={[0.6, 0.7]} label="Chiffrement AES-256 bits" />
        </div>
      </div>
    </div>
  );
};

const FadeInLabel = ({ activeProgress, range, label }: { activeProgress: any, range: [number, number], label: string }) => {
  const opacity = useTransform(activeProgress, range, [0, 1]);
  const x = useTransform(activeProgress, range, [20, 0]);
  
  return (
    <motion.div style={{ opacity, x }} className="flex flex-col gap-2">
       <div className="h-[1px] w-12 bg-accent/50" />
       <div className="text-xs font-black uppercase tracking-[0.2em] text-text-muted leading-tight max-w-[150px]">
         {label}
       </div>
    </motion.div>
  );
}
