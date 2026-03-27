"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView, animate, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { ShieldCheck, Layers, RefreshCw } from "lucide-react";

// The animated counter component
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, value, {
        duration: 3,
        ease: [0.22, 1, 0.36, 1], // Premium easing
        onUpdate(v) {
          if (ref.current) {
            ref.current.textContent = Intl.NumberFormat("fr-FR").format(Math.floor(v)) + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

// Background abstract lines (Centralization theme)
const AbstractDataFlow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.4, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div ref={containerRef} style={{ opacity }} className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center z-0">
      <svg viewBox="0 0 1000 600" className="w-full h-full opacity-[0.25] text-accent drop-shadow-[0_0_20px_rgba(37,99,235,0.4)]">
        {/* Central hub */}
        <circle cx="500" cy="300" r="20" fill="currentColor" className="animate-pulse" />
        
        {/* Lines flowing to center */}
        {[
          "M100,100 Q300,300 480,300",
          "M100,500 Q300,300 480,300",
          "M900,100 Q700,300 520,300",
          "M900,500 Q700,300 520,300",
          "M500,50 V280",
          "M500,550 V320"
        ].map((d, i) => (
          <motion.path 
            key={i}
            d={d}
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"
            style={{ pathLength }}
          />
        ))}
      </svg>
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[150px]" />
    </motion.div>
  );
};

export const EnterpriseImpactSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-20 md:py-28 overflow-hidden bg-background">
      <AbstractDataFlow />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-black uppercase tracking-[0.4em] mb-12 text-accent">
              <Layers size={14} className="animate-pulse" /> Zéro Impression • 100% Centralisé
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="text-4xl md:text-[5rem] font-black tracking-[-0.04em] leading-[1] text-foreground mb-20">
              Une seule carte. <br />
              <span className="bg-gradient-to-r from-blue-300 via-accent to-blue-600 text-transparent bg-clip-text italic">
                Zéro réimpression.
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col items-center justify-center mb-8 relative">
              <div className="text-[6rem] sm:text-[8rem] md:text-[9rem] lg:text-[11rem] font-black text-foreground leading-none tracking-tighter tabular-nums drop-shadow-[0_0_40px_rgba(37,99,235,0.3)]">
                <AnimatedCounter value={850} />
              </div>
              <p className="text-2xl md:text-3xl font-medium text-text-muted mt-4 tracking-tight">
                cartes papier évitées par collaborateur.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20 pt-16 border-t border-blue-900/30">
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-black text-accent mb-2">0€</span>
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest text-center">Coût de<br/>réimpression</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-black text-foreground mb-2"><AnimatedCounter value={100} suffix="%" /></span>
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest text-center">Flotte<br/>Centralisée</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-black text-foreground mb-2"><AnimatedCounter value={1} /></span>
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest text-center">Carte unique<br/>à vie</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl md:text-4xl font-black text-foreground mb-2 flex justify-center items-center h-full">Instantané</span>
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest text-center mt-2">Mise à jour<br/>des profils</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
