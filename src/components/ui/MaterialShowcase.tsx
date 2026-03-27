"use client";

import React from "react";
import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { Leaf, Box, Wind, Sparkles, ShieldCheck, Hexagon } from "lucide-react";

const MaterialCard = ({ title, subtitle, desc, icon: Icon, color, image, features }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group relative h-[500px] md:h-[600px] w-full rounded-[4rem] overflow-hidden border border-zinc-300 dark:border-white/10 bg-[#0a0a0a] shadow-2xl flex flex-col"
  >
    {/* Texture Overlay / Background Pattern */}
    <div className={`absolute inset-0 opacity-20 pointer-events-none ${image}`} />
    <div className={`absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10`} />
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

    {/* Content */}
    <div className="relative z-20 h-full p-12 flex flex-col justify-end">
      <div className={`w-16 h-16 rounded-3xl ${color} flex items-center justify-center mb-8 shadow-xl border border-zinc-300 dark:border-white/10 group-hover:scale-110 transition-transform duration-700`}>
        <Icon size={32} className="text-foreground dark:text-white" />
      </div>
      <span className="text-accent font-black text-xs uppercase tracking-[0.4em] mb-4">{subtitle}</span>
      <h3 className="text-4xl md:text-5xl font-black text-foreground dark:text-white mb-6 leading-[1.1] tracking-tighter">{title}</h3>
      <p className="text-text-muted text-lg leading-relaxed mb-8 max-w-sm">{desc}</p>
      
      <div className="flex flex-wrap gap-3">
        {features.map((f: string, i: number) => (
          <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-border-custom text-[10px] font-bold text-zinc-500 dark:text-white/50 uppercase tracking-widest">
            {f}
          </span>
        ))}
      </div>
    </div>

    {/* Tactical Indicator */}
    <div className="absolute top-12 right-12 z-20">
        <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">Tactile Preview</span>
        </div>
    </div>
  </motion.div>
);

export const MaterialShowcase = () => {
  return (
    <section className="container mx-auto px-8 py-40 overflow-hidden">
      <div className="flex flex-col items-center text-center mb-24">
        <FadeIn>
          <div className="inline-flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-[0.4em] mb-6">
            <Hexagon size={16} /> Nature vs. Tech
          </div>
          <h2 className="text-5xl md:text-[6rem] font-black tracking-[-0.04em] leading-[0.9] text-foreground dark:text-white mb-10">
            Matières <br/>
            <span className="text-white/30 italic">Nobles & Engagées.</span>
          </h2>
          <p className="text-xl text-text-muted max-w-2xl font-medium leading-relaxed">
            Une expérience qui commence dès le premier toucher. Choisissez le support qui incarne le mieux vos valeurs professionnelles.
          </p>
        </FadeIn>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
        <FadeIn delay={0.2} direction="up">
          <MaterialCard 
            title="PVC Recyclé"
            subtitle="Tech Responsable"
            desc="Finition Matte Obsidienne. Une sensation de douceur infinie alliée à une durabilité extrême."
            icon={Box}
            color="bg-slate-800"
            image="bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" // Subtle matte texture
            features={["100% Recyclé", "Impression HD", "Ultra-Résistant"]}
          />
        </FadeIn>

        <FadeIn delay={0.4} direction="up">
          <MaterialCard 
            title="Bois Noble"
            subtitle="Organique & Unique"
            desc="Bambou, Noyer ou Érable. Chaque carte possède son propre veinage, rendant votre identité inimitable."
            icon={Leaf}
            color="bg-emerald-900"
            image="bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" // Subtle wood-like grain
            features={["Fibre Naturelle", "Gravure Laser", "Éco-Conçu"]}
          />
        </FadeIn>
      </div>
      
      {/* Dynamic Divider */}
      <FadeIn delay={0.6} className="mt-20 flex justify-center">
        <div className="flex items-center gap-8 text-white/10 uppercase font-black text-[12vw] leading-none select-none italic tracking-tighter overflow-hidden whitespace-nowrap opacity-50">
           <span>Tactile Quality</span>
           <span className="text-accent underline decoration-accent/20">Tactile Quality</span>
           <span>Tactile Quality</span>
        </div>
      </FadeIn>
    </section>
  );
};
