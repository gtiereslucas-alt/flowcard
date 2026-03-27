"use client";

import React from "react";
import { FadeIn } from "./FadeIn";
import { X, Check } from "lucide-react";

const features = [
  {
    name: "Mise à jour des coordonnées",
    paper: "Impossible (Réimpression)",
    flowcard: "Instantanée (Via Cloud)"
  },
  {
    name: "En cas de perte",
    paper: "Fichu (Risque sécurité)",
    flowcard: "Désactivable en 1 clic"
  },
  {
    name: "Bilan Carbone & Déchets",
    paper: "Lourd & Polluant",
    flowcard: "Zéro Papier"
  },
  {
    name: "Gestion de flotte (Équipe)",
    paper: "Chacun dans son coin",
    flowcard: "Dashboard Centralisé"
  },
  {
    name: "Tracking & Analytics",
    paper: "Aucun suivi possible",
    flowcard: "Stats en temps réel"
  }
];

export const BattleTableSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <div className="text-center mb-20">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black tracking-[-0.04em] text-foreground mb-6">
              Le match est <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">terminé.</span>
            </h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto font-medium">
              Comparez par vous-même. Pourquoi s'entêter à utiliser une technologie du 19ème siècle ?
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="rounded-3xl border border-border-custom bg-white/[0.02] backdrop-blur-xl overflow-hidden shadow-2xl">
            {/* Table Header */}
            <div className="grid grid-cols-3 items-center border-b border-border-custom p-6 md:p-8 bg-surface">
              <div className="col-span-1">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-foreground/30 hidden md:block">Les Critères</span>
              </div>
              <div className="col-span-1 text-center">
                <span className="text-sm md:text-xl font-black text-foreground/50 tracking-tight">Carte en Papier</span>
              </div>
              <div className="col-span-1 text-center relative">
                <div className="absolute inset-0 bg-accent/10 rounded-xl blur-lg pointer-events-none" />
                <span className="relative text-sm md:text-xl font-black text-foreground tracking-tight flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_#2563eb]" /> 
                  FlowCard
                </span>
              </div>
            </div>

            {/* Table Body */}
            <div className="flex flex-col">
              {features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className={`grid grid-cols-3 items-center p-6 md:p-8 transition-colors duration-300 hover:bg-white/5 ${ idx !== features.length - 1 ? "border-b border-border-custom" : "" }`}
                >
                  {/* Feature Name */}
                  <div className="col-span-1 pr-4">
                    <span className="text-sm md:text-base font-bold text-foreground/80 leading-snug block">
                      {feature.name}
                    </span>
                  </div>

                  {/* Paper (Loser) */}
                  <div className="col-span-1 text-center flex flex-col items-center justify-center gap-2 px-2">
                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                      <X className="text-red-500" size={16} strokeWidth={3} />
                    </div>
                    <span className="text-xs md:text-sm font-medium text-text-muted text-center leading-tight">
                      {feature.paper}
                    </span>
                  </div>

                  {/* FlowCard (Winner) */}
                  <div className="col-span-1 text-center flex flex-col items-center justify-center gap-2 px-2 relative">
                    <div className="absolute inset-0 bg-accent/[0.03] rounded-2xl pointer-events-none" />
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center border border-accent/30 shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                      <Check className="text-accent" size={16} strokeWidth={4} />
                    </div>
                    <span className="relative text-xs md:text-sm font-bold text-foreground text-center leading-tight">
                      {feature.flowcard}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Table Footer / Summary */}
            <div className="border-t border-accent/20 bg-accent/5 p-6 md:p-8 text-center flex flex-col items-center justify-center">
               <span className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-3">Verdict</span>
               <p className="text-lg md:text-xl font-bold text-foreground leading-relaxed max-w-lg">
                 Ne laissez plus votre image de marque (et vos leads) s'envoler à la poubelle.
               </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
