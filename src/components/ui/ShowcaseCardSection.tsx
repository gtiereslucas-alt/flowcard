"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { ArrowRight, Zap, Smartphone, Wifi, MousePointer2 } from "lucide-react";

export const ShowcaseCardSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

  // Pivot 3D organique pour simuler le mouvement de la main qui présente la carte
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.5], [15, 0]), springConfig);
  const rotateY = useSpring(useTransform(scrollYProgress, [0, 0.5], [-25, 10]), springConfig);
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5], [0.85, 1]), springConfig);

  return (
    <section ref={containerRef} className="pt-10 bg-background relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-accent/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center gap-6 lg:flex-row lg:gap-20 lg:items-center lg:text-left">

          {/* VISUAL: THE PHYSICAL CARD SHOWCASE */}
          <div className="relative h-[280px] md:h-[360px] lg:h-[440px] flex items-center justify-center perspective-3000 order-1 lg:order-2 lg:flex-1 lg:min-w-0">
            <motion.div
              style={{ rotateX, rotateY, scale }}
              className="relative w-[340px] h-[210px] md:w-[500px] md:h-[300px] lg:w-[600px] lg:h-[370px]"
            >
              {/* Floating Tech Label */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-12 -left-8 px-5 py-2.5 bg-white dark:bg-[#0A0A0B]/80 backdrop-blur-xl border border-border-custom rounded-2xl shadow-2xl z-20 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <Wifi size={16} className="text-accent" />
                </div>
                <span className="text-[10px] font-black uppercase text-foreground tracking-[0.2em]">Puce NFC Intégrée</span>
              </motion.div>

              {/* NFC Signal Waves */}
              <div className="absolute inset-0 z-[-1] flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 2.5], opacity: [0.35, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-48 h-48 border-2 border-accent/20 rounded-full"
                />
              </div>

              {/* The "Business Card" Mockup */}
              <div className="w-full h-full bg-gradient-to-br from-[#121212] to-[#040404] rounded-2xl border-2 border-border-custom shadow-[0_50px_100px_rgba(0,0,0,0.8)] p-10 md:p-14 flex flex-col justify-between relative overflow-hidden group">

                {/* Holographic Swipe Reflection */}
                <motion.div
                  animate={{ left: ["-100%", "250%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 bottom-0 w-40 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent skew-x-[30deg] pointer-events-none"
                />

                <div className="flex justify-between items-start relative z-10">
                  <div>
                    <h3 className="text-2xl md:text-4xl font-black text-white tracking-[-0.03em] leading-none mb-4">
                      LUCAS <br /> GOMES TIERES
                    </h3>
                    <p className="text-[10px] md:text-sm font-bold text-accent uppercase tracking-[0.4em]">Founder & CEO</p>
                  </div>

                  {/* Real FlowCard Logo on Card */}
                  <div className="bg-white/5 p-3 rounded-2xl border border-white/10 backdrop-blur-md">
                    <img src="/logo-dark.png" alt="FlowCard" className="h-6 md:h-8 w-auto filter brightness-0 invert opacity-90" />
                  </div>
                </div>

                {/* NFC Tap Area Visual */}
                <div className="flex items-end justify-between relative z-10">
                  <div className="flex flex-col gap-2">
                    <div className="w-40 h-[1px] bg-gradient-to-r from-accent/40 to-transparent" />
                    <div className="w-24 h-[1px] bg-gradient-to-r from-accent/20 to-transparent" />
                  </div>
                  <div className="flex flex-col items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center">
                      <motion.div
                        animate={{ y: [2, -2, 2] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Smartphone size={18} className="text-white" />
                      </motion.div>
                    </div>
                    <span className="text-[8px] font-black uppercase text-white/50 tracking-widest">Tap to Connect</span>
                  </div>
                </div>

                {/* Vertical accent bar */}
                <div className="absolute top-0 right-0 bottom-0 w-1 bg-accent/20" />
              </div>
            </motion.div>
          </div>

          {/* CONTENT: MARKETING COPY (SELLING THE CONCEPT) */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-6 max-w-3xl mx-auto lg:max-w-none lg:flex-1 order-2 lg:order-1">
            <FadeIn>
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-accent">Zéro Friction. 100% Digital.</span>

              <h2 className="text-4xl md:text-6xl lg:text-5xl xl:text-6xl font-black text-foreground tracking-[-0.05em] leading-[0.9] mt-3 mb-4">
                Un seul <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400 italic">Tap.</span> <br />
                Tout votre univers.
              </h2>

              <p className="text-base md:text-lg text-text-muted font-medium leading-relaxed max-w-xl lg:max-w-lg">
                Finies les cartes perdues ou jetables. Grâce à sa puce NFC intégrée, FlowCard partage instantanément vos informations sans aucune application.
              </p>
            </FadeIn>

            {/* Benefit Check Grid */}
            <div className="grid sm:grid-cols-2 gap-5 w-full max-w-2xl lg:max-w-none">
              {[
                {
                  icon: Wifi,
                  title: "Tap to Open",
                  desc: "Posez la carte sur le smartphone : votre profil s'ouvre magiquement."
                },
                {
                  icon: MousePointer2,
                  title: "Sans Application",
                  desc: "Votre interlocuteur n'a rien à installer. Tout passe par le navigateur."
                }
              ].map((item, idx) => (
                <FadeIn key={idx} delay={0.2 + idx * 0.1}>
                  <div className="flex flex-col items-center lg:items-start gap-3 group">
                    <div className="w-11 h-11 rounded-2xl bg-surface border border-border-custom flex items-center justify-center text-accent group-hover:bg-accent/10 transition-colors shadow-lg">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-base tracking-tight">{item.title}</h4>
                      <p className="text-sm text-text-muted mt-1 leading-relaxed opacity-80">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.5}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                <button className="px-10 py-4 bg-accent rounded-full text-white text-sm font-black uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-[0_25px_60px_-10px_rgba(37,99,235,0.4)] flex items-center gap-3 group">
                  Essayer la carte <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>
                <div className="flex flex-col gap-1 items-center">
                  <span className="text-[10px] font-black uppercase text-accent tracking-widest py-1 rounded bg-accent/10 px-2">Live Demo</span>
                  <p className="text-[10px] uppercase font-black tracking-[0.15em] text-text-muted">Partage en 0.2s</p>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};
