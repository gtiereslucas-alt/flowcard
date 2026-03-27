"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { RefreshCw, UserMinus, UserPlus, Database, ArrowRight } from "lucide-react";

const profiles = [
  {
    name: "Thomas Dubois",
    role: "Account Executive",
    status: "Départ",
    action: "Désactivation...",
    color: "from-orange-500/20 to-red-500/10",
    accent: "text-red-500",
    bgAccent: "bg-red-500",
    icon: <UserMinus size={16} className="text-red-500" />
  },
  {
    name: "Sarah Connor",
    role: "Senior Sales",
    status: "Onboarding",
    action: "Réattribution...",
    color: "from-emerald-500/20 to-teal-500/10",
    accent: "text-emerald-500",
    bgAccent: "bg-emerald-500",
    icon: <UserPlus size={16} className="text-emerald-500" />
  }
];

export const ReusableCardSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === 0 ? 1 : 0));
    }, 4000); // Toggle every 4 seconds
    return () => clearInterval(timer);
  }, []);

  const activeProfile = profiles[currentIndex];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-background border-t border-border-custom">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* TEXT CONTENT */}
          <div>
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-accent">
                <RefreshCw size={14} className="animate-spin-slow" /> Flotte 100% Réutilisable
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-[-0.04em] leading-[1] text-foreground mb-8 text-balance">
                Le turnover n'a jamais coûté <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500 italic">
                  aussi peu cher.
                </span>
              </h2>
              <p className="text-xl text-text-muted font-medium leading-relaxed mb-10 max-w-lg">
                Un commercial part ? Ne jetez plus vos lots de cartes en papier. En 1 clic depuis votre espace admin, récupérez la carte physique et **réassignez-la instantanément** à votre nouvelle recrue.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface border border-border-custom flex items-center justify-center shrink-0">
                    <Database size={18} className="text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Base de données synchronisée</h4>
                    <p className="text-sm text-text-muted mt-1">Désactivez un accès le vendredi, transférez la puce le lundi. La sécurité de vos données est absolue.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface border border-border-custom flex items-center justify-center shrink-0">
                    <RefreshCw size={18} className="text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Économies Immédiates</h4>
                    <p className="text-sm text-text-muted mt-1">Éliminez 100% des frais de réimpression liés aux départs et aux changements de postes.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* INTERACTIVE ANIMATION */}
          <div className="relative h-[500px] w-full max-w-lg mx-auto flex flex-col items-center justify-center perspective-1000">
            {/* The Physical Card Mockup */}
            <motion.div 
              animate={{ rotateY: currentIndex === 0 ? 10 : -10, rotateX: 5 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute z-20 w-64 h-96 rounded-2xl bg-gradient-to-br from-zinc-800 to-black border-2 border-border-custom shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center justify-between p-6 overflow-hidden"
            >
              {/* Card Holographic reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
              
              <div className="w-full flex justify-between items-start">
                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20" />
                <div className={`w-2 h-2 rounded-full ${activeProfile.bgAccent} animate-pulse shadow-[0_0_10px_currentColor]`} />
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.1, filter: "blur(4px)" }}
                  transition={{ duration: 0.4 }}
                  className="w-full flex flex-col items-center text-center"
                >
                   <div className="w-20 h-20 rounded-full bg-zinc-900 border-2 border-border-custom mb-4 overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${activeProfile.name}&backgroundColor=transparent`} alt="avatar" />
                   </div>
                   <h3 className="text-lg font-black text-foreground">{activeProfile.name}</h3>
                   <p className="text-xs text-foreground/50 uppercase tracking-widest font-bold">{activeProfile.role}</p>
                </motion.div>
              </AnimatePresence>

              <div className="w-full h-8 flex items-center justify-center">
                 <div className="w-12 h-1.5 rounded-full bg-white/20" />
              </div>
            </motion.div>

            {/* Dashboard UI Overlay (Simulating the Admin Panel action) */}
            <div className={`absolute top-10 right-0 z-30 flex items-center gap-3 px-4 py-3 rounded-xl backdrop-blur-md border border-border-custom bg-gradient-to-br ${activeProfile.color} shadow-2xl transition-colors duration-1000`}>
                <div className="w-8 h-8 rounded-full bg-white dark:bg-black/20 flex items-center justify-center backdrop-blur-xl">
                  {activeProfile.icon}
                </div>
                <div className="flex flex-col">
                  <span className={`text-[10px] uppercase font-black tracking-wider ${activeProfile.accent}`}>
                    Admin Action Active
                  </span>
                  <span className="text-xs font-bold text-foreground tracking-widest">
                     {activeProfile.action}
                  </span>
                </div>
            </div>

            {/* Glowing connection lines simulating the data transfer */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 400 500">
               <motion.path 
                 d="M 350,100 C 250,100 250,250 200,250" 
                 fill="none" 
                 stroke={currentIndex === 0 ? "#ef4444" : "#10b981"} 
                 strokeWidth="2" 
                 strokeDasharray="4 4" 
                 className="opacity-50 transition-colors duration-1000"
               />
               <motion.circle cx="200" cy="250" r="4" fill={currentIndex === 0 ? "#ef4444" : "#10b981"} className="transition-colors duration-1000 animate-ping" />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
};
