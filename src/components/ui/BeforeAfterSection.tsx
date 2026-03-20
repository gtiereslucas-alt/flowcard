"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { X, Check, Wifi, AlertTriangle, Zap, History, TrendingUp } from "lucide-react";

const comparison = {
  before: {
    title: "Le Passé",
    subtitle: "La carte papier statique",
    items: [
      { icon: History, text: "Perdue ou jetée en moins de 24h" },
      { icon: AlertTriangle, text: "Données obsolètes en 1 mois" },
      { icon: X, text: "Aucun suivi, aucune analytics" },
      { icon: X, text: "Cout de réimpression récurrent" }
    ],
    accent: "border-red-500/10 bg-red-500/5",
    iconColor: "text-red-400"
  },
  after: {
    title: "Le Futur",
    subtitle: "L'intelligence FlowCard",
    items: [
      { icon: Zap, text: "Connexion instantanée en 0.2s" },
      { icon: TrendingUp, text: "Mise à jour Cloud en direct" },
      { icon: Check, text: "Tracking des leads & CRM" },
      { icon: Wifi, text: "NFC + QR Code de secours" }
    ],
    accent: "border-accent/20 bg-accent/5 shadow-[0_0_50px_rgba(37,99,235,0.1)]",
    iconColor: "text-accent"
  }
};

export const BeforeAfterSection = () => {
  return (
    <section className="py-24 md:py-48 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      {/* Abstract Background elements */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn className="text-center mb-24">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-8">
            Changez de <br />
            <span className="text-white/20">Dimension.</span>
          </h2>
          <p className="text-white/40 text-xl max-w-xl mx-auto font-medium leading-relaxed">
            La carte de visite n'est plus un morceau de carton, c'est votre terminal de conversion physique.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto relative">
          {/* Decorative center line */}
          <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2" />

          {/* Before Column */}
          <FadeIn delay={0.1}>
            <div className={`group h-full rounded-[3.5rem] border p-12 md:p-16 transition-all duration-700 hover:bg-red-500/[0.08] ${comparison.before.accent}`}>
              <div className="mb-12">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-red-400/60 mb-4 block">Outdated World</span>
                <h3 className="text-4xl font-black text-white/40 group-hover:text-white/60 transition-colors mb-2">{comparison.before.title}</h3>
                <p className="text-sm font-bold text-white/20">{comparison.before.subtitle}</p>
              </div>

              <div className="space-y-8">
                {comparison.before.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6 group/item">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white/20 group-hover/item:text-red-400 group-hover/item:border-red-400/20 transition-all">
                      <item.icon size={20} />
                    </div>
                    <span className="text-white/30 font-medium group-hover/item:text-white/50 transition-colors">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* After Column */}
          <FadeIn delay={0.2}>
            <div className={`group h-full rounded-[3.5rem] border p-12 md:p-16 transition-all duration-700 hover:shadow-[0_0_80px_rgba(37,99,235,0.15)] relative overflow-hidden ${comparison.after.accent}`}>
              {/* Internal Glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/20 blur-[100px] rounded-full pointer-events-none group-hover:bg-accent/30 transition-colors" />
              
              <div className="relative mb-12">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-4 block">Next Generation</span>
                <h3 className="text-4xl font-black text-white mb-2">{comparison.after.title}</h3>
                <p className="text-sm font-bold text-white/40">{comparison.after.subtitle}</p>
              </div>

              <div className="relative space-y-8">
                {comparison.after.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6 group/item">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shadow-[0_0_20px_rgba(37,99,235,0.1)] transition-all"
                    >
                      <item.icon size={20} />
                    </motion.div>
                    <span className="text-white font-medium group-hover:translate-x-1 transition-transform">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 pt-12 border-t border-white/10 relative">
                <div className="flex items-center gap-4 text-accent font-black text-xs uppercase tracking-widest">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  Performance +900%
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

