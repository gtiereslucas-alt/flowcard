"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { HeroMockup } from "./HeroMockup";
import { ArrowRight } from "lucide-react";

export const Hero3DBackground = () => {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const checkTheme = () => setIsDark(document.documentElement.classList.contains("dark"));
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`relative min-h-[100vh] flex flex-col items-center justify-start overflow-hidden pt-10 transition-colors duration-700 ${isDark ? "bg-[#050505]" : "bg-white"}`}>

      {/* 1. CINEMATIC ATMOSPHERE (PLASMA ANIMATION) */}
      <motion.div
        animate={{
          x: [-100, 100, -100],
          y: [-50, 50, -50],
          opacity: isDark ? [0.4, 0.7, 0.4] : [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] bg-accent/15 blur-[200px] rounded-full pointer-events-none"
      />
      <motion.div
        animate={{
          x: [50, -50, 50],
          y: [100, -100, 100],
          opacity: isDark ? [0.3, 0.6, 0.3] : [0.05, 0.2, 0.05]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[180px] rounded-full pointer-events-none"
      />

      {/* 2. GRID SYSTEM (Subtle Tech Layer) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] pointer-events-none" />

      <div
        className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center z-20"
      >

        {/* 4. TEXT CONTENT (TOP) - COLOSSAL & CINEMATIC */}
        <motion.div
          className="flex flex-col items-center text-center pt-10 md:pt-12 relative z-30 w-full px-4 max-w-full"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotateX: [0, 5, 0],
              rotateY: [0, -5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <h1 className={`text-6xl sm:text-8xl md:text-[15rem] lg:text-[18rem] font-black tracking-[-0.04em] leading-[0.85] mb-2 whitespace-pre-wrap break-words transition-colors duration-700 ${isDark ? "text-white drop-shadow-2xl" : "text-[#050505] shadow-none"}`}>
              <motion.span
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className={`block text-[12px] sm:text-[14px] uppercase tracking-[0.5em] font-bold mb-2 leading-relaxed transition-colors ${isDark ? "text-white/40" : "text-[#050505]/60"}`}
              >
                Carte NFC Connectée
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: isDark ? 0.3 : 0.4, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="block text-[0.55em] italic tracking-tight font-serif mb-0 whitespace-nowrap"
              >
                Accélérez vos
              </motion.span>

              <motion.span
                initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`block pb-2 bg-gradient-to-b text-transparent bg-clip-text ${isDark ? "from-white to-white/40" : "from-[#050505] to-[#050505]/70"}`}
              >
                Échanges.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isDark ? 0.35 : 0.7, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className={`text-[11px] md:text-[13px] font-medium max-w-[340px] mx-auto leading-relaxed mb-8 break-words tracking-tight transition-colors ${isDark ? "text-text-muted" : "text-[#050505]/80"}`}
            >
              Partagez votre univers instantanément <br /> et propulsez vos opportunités.
            </motion.p>

            {/* PREMIUM CTA CLUSTER */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8"
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="https://calendly.com/lucas-gomestieres-flowcard/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-10 py-4 bg-accent rounded-full text-base font-black text-white shadow-[0_20px_60px_-10px_rgba(37,99,235,0.6)] flex items-center gap-3 overflow-hidden whitespace-nowrap"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  Réserver ma démo <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/solution"
                  className={`px-10 py-4 rounded-full text-base font-bold border transition-all backdrop-blur-md ${isDark ? "text-white/70 border-white/10 hover:bg-white/5 hover:text-white" : "text-[#050505]/80 border-[#050505]/20 hover:bg-[#050505]/5 hover:text-[#050505]"}`}
                >
                  En savoir plus
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* 3. HERO MOCKUP (BOTTOM) - The centerpiece */}
        <div
          className="w-full max-w-[450px] flex justify-center relative z-40 min-w-0 pb-10 md:pb-20"
        >
          <FadeIn delay={0.4} duration={1.2} className="w-full relative flex justify-center">
            {/* Ambient light beam behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-accent/5 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <HeroMockup />
          </FadeIn>
        </div>

      </div>
    </section>
  );
};
