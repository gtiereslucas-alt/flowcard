"use client";

import React from "react";
import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { LayoutGrid, Share2, Zap, ArrowRight, ShieldCheck, Cpu } from "lucide-react";

const steps = [
  {
    icon: <Zap size={32} />,
    title: "1. Tap & Connect",
    desc: "Approchez simplement. Pas d'app, pas de friction. La magie NFC opère en 0.2s.",
    color: "from-blue-600/10 to-blue-400/5",
    accent: "text-blue-500",
    bgAccent: "bg-blue-500/10"
  },
  {
    icon: <Share2 size={32} />,
    title: "2. Capture IA active",
    desc: "Capturez le contact de votre prospect via notre scan OCR ultra-rapide et intelligent.",
    color: "from-accent/10 to-accent/5",
    accent: "text-accent",
    bgAccent: "bg-accent/10"
  },
  {
    icon: <Cpu size={32} />,
    title: "3. CRM Sync Automatique",
    desc: "Les leads sont synchronisés en temps réel vers HubSpot, Salesforce ou Pipedrive.",
    color: "from-purple-600/10 to-purple-400/5",
    accent: "text-purple-500",
    bgAccent: "bg-purple-500/10"
  }
];

export const StepByStep = () => {
  return (
    <section className="py-24 md:py-48 relative overflow-hidden bg-zinc-50 dark:bg-[#050505]">
      {/* Cinematic Perspective Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <div className="max-w-4xl mx-auto text-center mb-32">
            <FadeIn>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-zinc-300 dark:border-white/10 text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-zinc-600 dark:text-white/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" /> Workflow FlowCard v2.0
                </div>
                <h2 className="text-6xl md:text-[6.5rem] font-black tracking-tighter mb-10 leading-[0.85] text-foreground dark:text-white">
                    L'Expérience <br/> <span className="bg-gradient-to-b from-white to-white/30 text-transparent bg-clip-text">Contact Ultime.</span>
                </h2>
                <p className="text-xl md:text-2xl text-text-muted font-medium max-w-2xl mx-auto leading-relaxed">
                  Finies les cartes oubliées. Automatisez votre prospection avec un objet qui convertit à chaque interaction.
                </p>
            </FadeIn>
        </div>

        {/* GLASS FLOW CARDS */}
        <div className="grid lg:grid-cols-3 gap-10 w-full max-w-7xl">
            {steps.map((step, idx) => (
                <FadeIn key={idx} delay={0.1 * idx} direction="up" className="h-full">
                    <motion.div 
                        whileHover={{ y: -10 }}
                        className={`h-full p-12 rounded-[4rem] border border-border-custom bg-gradient-to-br ${step.color} backdrop-blur-xl relative group flex flex-col items-center text-center shadow-2xl overflow-hidden`}
                    >
                        {/* Decorative background number */}
                        <span className="absolute -top-10 -right-10 text-[12rem] font-black text-white/5 select-none pointer-events-none group-hover:text-white/10 transition-colors duration-700">
                            {idx + 1}
                        </span>

                        {/* Icon Podium */}
                        <div className={`w-24 h-24 ${step.bgAccent} rounded-3xl flex items-center justify-center mb-10 border border-border-custom group-hover:scale-110 group-hover:border-white/20 transition-all duration-500 relative`}>
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity" />
                            <div className={step.accent}>{step.icon}</div>
                        </div>
                        
                        <h3 className="text-3xl font-black mb-6 text-foreground dark:text-white tracking-tight">{step.title}</h3>
                        <p className="text-lg text-text-muted leading-relaxed font-semibold mb-10 flex-1">{step.desc}</p>
                        
                        {/* Feature Tags */}
                        <div className="flex flex-wrap gap-2 justify-center">
                            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-border-custom text-[10px] font-bold text-zinc-500 dark:text-white/40 uppercase tracking-widest">Temps réel</span>
                            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-border-custom text-[10px] font-bold text-zinc-500 dark:text-white/40 uppercase tracking-widest">Sécurisé</span>
                        </div>

                        {/* Shine Effect */}
                        <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-transparent via-white/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
                    </motion.div>
                </FadeIn>
            ))}
        </div>

        {/* BOTTOM CTA */}
        <FadeIn delay={0.4} className="mt-24">
             <div className="flex flex-col items-center gap-8">
                <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <button className="flex items-center gap-4 text-foreground dark:text-white hover:text-accent transition-colors font-black text-sm uppercase tracking-[0.3em] group">
                    Découvrir l'écosystème complet <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button>
             </div>
        </FadeIn>
      </div>
    </section>
  );
};
