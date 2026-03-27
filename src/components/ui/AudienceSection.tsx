"use client";

import React, { useState, useEffect } from "react";
import { FadeIn } from "./FadeIn";
import { ArrowRight, ShieldCheck, Database, LayoutDashboard, Globe2, BadgeCheck, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const audiences = [
  {
    type: "independant",
    title: "Indépendants",
    description: "Une identité numérique premium, gravée sur une seule carte connectée pour marquer les esprits.",
    action: "Créer votre profil",
    color: "from-blue-500/10 to-blue-600/5",
    accent: "text-blue-400",
    glow: "bg-blue-500/20",
    border: "border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.05)] hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]",
    badge: "Solo"
  },
  {
    type: "pme",
    title: "Startups & PME",
    description: "Structurez votre croissance. Centralisez l'identité de vos équipes et réduisez le turnover matériel.",
    action: "Gérer mes équipes",
    color: "from-accent/10 to-accent/5",
    accent: "text-accent",
    glow: "bg-accent/20",
    border: "border-accent/30 shadow-[0_0_30px_rgba(37,99,235,0.1)] hover:border-accent hover:shadow-[0_0_50px_rgba(37,99,235,0.2)]",
    featured: true,
    badge: "Business"
  },
  {
    type: "enterprise",
    title: "Grands Groupes",
    description: "Unifiez votre marque monde. Architecture certifiée, synchronisation AD et sécurité bancaire.",
    action: "Démo Corporate",
    color: "from-emerald-500/10 to-emerald-600/5",
    accent: "text-emerald-400",
    glow: "bg-emerald-500/20",
    border: "border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.05)] hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)]",
    badge: "Enterprise"
  }
];

// Extremely high quality corporate Unsplash portraits (Costumes cravate & blazers stricts)
const PRO_AVATARS = {
  ceo_man: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop", // Homme costume bleu
  exec_woman: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop", // Femme blazer Corporate
  tech_lead: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&auto=format&fit=crop", // Homme costume cravate
  sales_woman: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=256&auto=format&fit=crop", // Femme veste costume stricte
  vp_man: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=256&auto=format&fit=crop" // Homme ajustant sa cravate
};

const VisualIndependant = () => (
  <div className="w-full h-56 bg-[#050505] rounded-tl-xl rounded-tr-xl border-b border-border-custom p-4 mb-6 relative overflow-hidden flex items-center justify-center perspective-1000">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:10px_10px]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2),transparent_70%)]" />

    {/* Animated NFC ripples behind card */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
      <motion.div
        animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
        className="w-24 h-24 rounded-full border border-blue-500/40"
      />
      <motion.div
        animate={{ scale: [1, 3.5], opacity: [0.2, 0] }}
        transition={{ duration: 2.5, delay: 0.6, repeat: Infinity, ease: "easeOut" }}
        className="absolute w-24 h-24 rounded-full border border-blue-500/20"
      />
    </div>

    {/* Premium 3D Rotating Digital Profile Card */}
    <motion.div
      initial={{ y: 5, rotateY: -15, rotateX: 5 }}
      animate={{ y: -5, rotateY: 15, rotateX: 10 }}
      transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      className="relative z-10 w-48 h-[140px] bg-[#0A0A0B] backdrop-blur-xl rounded-2xl border border-border-custom shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col items-center pt-5"
    >
      <div className="absolute top-0 left-0 w-full h-[45px] bg-gradient-to-r from-blue-700 to-indigo-900 border-b border-border-custom overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 mix-blend-overlay" />
        <div className="absolute -inset-10 bg-white/20 blur-2xl transform -translate-y-10 rounded-full" />
      </div>

      {/* High-end corporate avatar popping out of header */}
      <div className="relative z-20 w-14 h-14 rounded-full border-2 border-[#0A0A0B] bg-zinc-100 dark:bg-zinc-800 shadow-2xl overflow-hidden -mt-1 group-hover:scale-110 transition-transform duration-500">
        <img src={PRO_AVATARS.vp_man} alt="Executive Profile" className="w-full h-full object-cover" />
      </div>

      {/* Verified Badge */}
      <div className="absolute top-[42px] right-[65px] z-30 w-5 h-5 bg-blue-500 rounded-full border-2 border-[#0A0A0B] flex items-center justify-center shadow-lg">
        <BadgeCheck size={10} className="text-foreground" />
      </div>

      {/* Fake UI Skeleton */}
      <div className="mt-3 flex flex-col items-center gap-2 w-full px-4">
        <div className="w-24 h-2 bg-white/70 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
        <div className="w-14 h-1.5 bg-blue-400/80 rounded-full" />
      </div>

      <div className="absolute bottom-3 w-full px-4 flex justify-between items-center">
        <div className="w-6 h-6 rounded-full bg-white/5 border border-border-custom flex items-center justify-center">
          <div className="w-2.5 h-2.5 bg-blue-500/50 rounded-full" />
        </div>
        <div className="flex gap-1.5">
          <div className="w-4 h-1 bg-white/10 rounded-full" />
          <div className="w-2 h-1 bg-white/10 rounded-full" />
        </div>
      </div>
    </motion.div>
  </div>
);

const VisualPME = () => {
  const team = [
    { img: PRO_AVATARS.ceo_man, role: "Director", name: "Marc D." },
    { img: PRO_AVATARS.exec_woman, role: "Sales Lead", name: "Sophie L." },
    { img: PRO_AVATARS.sales_woman, role: "Account Exec", name: "Claire V." }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % team.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-56 bg-[#050505] rounded-tl-xl rounded-tr-xl border-b border-border-custom p-4 mb-6 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.2),transparent_70%)]" />

      {/* Mini CRM Admin Dashboard Layout */}
      <div className="relative z-10 w-full h-full max-w-[260px] bg-[#0A0A0B] backdrop-blur-xl rounded-xl border border-border-custom shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden">

        {/* Dashboard Header */}
        <div className="w-full h-10 border-b border-border-custom flex items-center justify-between px-4 bg-white/[0.03]">
          <div className="flex items-center gap-2">
            <LayoutDashboard size={12} className="text-accent" />
            <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Team Sync</div>
          </div>
          <div className="px-2 py-0.5 rounded-full bg-accent/20 border border-accent/40 text-[8px] font-black text-accent uppercase tracking-wider">
            Active
          </div>
        </div>

        {/* CRM List */}
        <div className="flex-1 p-3 flex flex-col gap-2.5 justify-center relative">
          {team.map((user, i) => {
            const isActive = activeIndex === i;
            return (
              <motion.div
                key={i}
                initial={false}
                animate={{
                  scale: isActive ? 1.02 : 1,
                  backgroundColor: isActive ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.02)",
                  borderColor: isActive ? "rgba(59,130,246,0.4)" : "rgba(255,255,255,0.05)"
                }}
                transition={{ duration: 0.3 }}
                className="w-full rounded-lg p-1.5 flex items-center gap-3 border shadow-sm relative overflow-hidden"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-accent shadow-[0_0_10px_#3b82f6]"
                  />
                )}
                <div className={`w-8 h-8 rounded-full overflow-hidden bg-zinc-100 dark:bg-zinc-100 dark:bg-zinc-800 shrink-0 border-2 transition-colors duration-300 ${isActive ? 'border-accent shadow-[0_0_10px_rgba(37,99,235,0.3)]' : 'border-transparent'}`}>
                  <img src={user.img} alt={user.name} className={`w-full h-full object-cover transition-all duration-300 ${isActive ? 'grayscale-0' : 'grayscale brightness-75'}`} />
                </div>
                <div className="flex flex-col gap-1 w-full relative z-10">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-bold transition-colors ${isActive ? 'text-foreground' : 'text-text-muted'}`}>{user.name}</span>
                    {isActive && <CheckCircle2 size={8} className="text-accent" />}
                  </div>
                  <span className="text-[8px] text-text-muted uppercase tracking-wider">{user.role}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const VisualEnterprise = () => {
  const avatars = [
    PRO_AVATARS.ceo_man, // Global Admin
    PRO_AVATARS.exec_woman, // VP Europe
    PRO_AVATARS.tech_lead,  // CTO 
    PRO_AVATARS.sales_woman, // VP Sales
  ];

  return (
    <div className="w-full h-56 bg-[#050505] rounded-tl-xl rounded-tr-xl border-b border-border-custom p-4 mb-6 relative overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15),transparent_80%)]" />

      <div className="relative z-10 flex flex-col items-center w-full h-full justify-center">

        {/* Glowing Data Backbone */}
        <svg className="absolute inset-0 w-full h-full opacity-60 z-10 drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]" viewBox="0 0 200 150">
          {/* Trunk line */}
          <motion.path
            d="M 100,50 L 100,110"
            stroke="url(#gradient-line)"
            strokeWidth="2"
            fill="none"
          />
          {/* Branch lines */}
          <motion.path
            d="M 100,65 C 100,80 40,80 40,110 M 100,65 C 100,80 160,80 160,110"
            stroke="url(#gradient-line)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="4 6"
            animate={{ strokeDashoffset: [20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          <defs>
            <linearGradient id="gradient-line" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="1" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>

        {/* Central Identity Hub (Azure AD / SSO) */}
        <motion.div
          animate={{ boxShadow: ["0 0 20px rgba(16,185,129,0.2)", "0 0 45px rgba(16,185,129,0.6)", "0 0 20px rgba(16,185,129,0.2)"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-6 w-14 h-14 rounded-2xl border-2 border-emerald-500 bg-[#0A0A0B] flex items-center justify-center z-30 overflow-hidden"
        >
          <img src={avatars[0]} alt="Global Admin" className="w-full h-full object-cover opacity-90 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-emerald-500/20 mix-blend-color" />
          {/* Security Badge overlapping */}
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-900 border-2 border-emerald-400 rounded-full flex items-center justify-center shadow-lg">
            <ShieldCheck size={12} className="text-emerald-400" />
          </div>
        </motion.div>

        {/* Synchronized Department Nodes */}
        <div className="absolute bottom-6 flex justify-between w-[90%] z-20">
          {[1, 2, 3].map(i => (
            <motion.div
              key={i}
              initial={{ y: 0 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.5, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-12 h-12 rounded-full border-2 border-emerald-500/50 p-0.5 bg-black/80 backdrop-blur-sm relative shadow-lg">
                <div className="w-full h-full rounded-full overflow-hidden transition-all duration-300">
                  <img src={avatars[i]} alt={`Node ${i}`} className="w-full h-full object-cover opacity-90" />
                </div>
                <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 border-2 border-black rounded-full shadow-[0_0_8px_#22c55e]" />
              </div>

              {/* Server Icon beneath node */}
              <div className="flex gap-1.5 items-center bg-white/5 border border-border-custom rounded-md px-2 py-1 shadow-sm backdrop-blur-md">
                <Database size={10} className="text-emerald-400/80" />
                <div className="w-5 h-1 bg-emerald-500/60 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const AudienceSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden border-t border-border-custom">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <FadeIn>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-text-muted mb-4 block">Scalable & Flexible</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-[-0.04em] text-foreground mb-6">
              Pensé pour <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400 italic">votre croissance.</span>
            </h2>
            <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto font-medium">
              Quel que soit votre volume, FlowCard structure et unifie vos échanges professionnels avec une précision chirurgicale.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {audiences.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div
                className={`group h-full rounded-[2.5rem] bg-surface backdrop-blur-xl border transition-all duration-500 flex flex-col overflow-hidden ${item.border}`}
              >
                {/* Elevated UI Component Mockups */}
                <div className="w-full bg-[#050505] relative z-10 border-b border-border-custom">
                  {item.type === "independant" && <VisualIndependant />}
                  {item.type === "pme" && <VisualPME />}
                  {item.type === "enterprise" && <VisualEnterprise />}
                </div>

                <div className="p-8 md:p-10 flex flex-col flex-1 relative z-20 -mt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-black text-foreground">{item.title}</h3>
                    <span className={`px-2 py-0.5 rounded-md text-[10px] uppercase font-black tracking-wider ${item.glow} ${item.accent} border border-border-custom`}>
                      {item.badge}
                    </span>
                  </div>

                  <p className="text-text-muted leading-relaxed font-medium mb-10 flex-1">
                    {item.description}
                  </p>

                  <div className="mt-auto pt-6 border-t border-border-custom">
                    <button className={`flex items-center gap-2 font-bold text-sm tracking-wide ${item.accent} group/btn`}>
                      {item.action}
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
