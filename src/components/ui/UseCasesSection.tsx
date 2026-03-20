"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { Briefcase, Home, Users, Rocket, ArrowRight } from "lucide-react";

const useCases = [
  {
    icon: Briefcase,
    persona: "Commercial Terrain",
    title: "Vendez sans friction.",
    desc: "En salon ou en RDV, synchronisez vos prospects directement dans votre CRM par un simple contact physique.",
    tags: ["Salesforce", "HubSpot", "Pipedrive"],
    color: "accent",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000&auto=format&fit=crop"
  },
  {
    icon: Home,
    persona: "Agent Immobilier",
    title: "Signez plus de mandats.",
    desc: "Laissez une empreinte digitale indélébile. Vos clients retrouvent vos biens en exclusivité sur leur mobile.",
    tags: ["Visite 3D", "Lien Direct", "Rappel"],
    color: "purple-500",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop"
  },
  {
    icon: Users,
    persona: "Recrutement & RH",
    title: "Attirez les talents.",
    desc: "Simplifiez le sourcing en salon. Capturez les CV et profils sociaux en 0.2 seconde sans papier.",
    tags: ["ATS Sync", "Job Fairs", "Branding"],
    color: "green-400",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2959d43?q=80&w=1000&auto=format&fit=crop"
  },
  {
    icon: Rocket,
    persona: "CEO & Founders",
    title: "Networkez au top 1%.",
    desc: "Votre carte est votre pitch. Suivez qui s'intéresse réellement à votre projet après chaque événement.",
    tags: ["Analytics", "Fundraising", "Exclusif"],
    color: "accent",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop"
  },
];

export const UseCasesSection = () => {
  return (
    <section className="py-24 md:py-48 bg-background border-t border-border-custom relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn className="text-center mb-24">
          <div className="inline-flex items-center gap-2 text-accent font-bold text-[10px] uppercase tracking-[0.4em] mb-6">
            Industries & Secteurs
          </div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.85]">
            Propulsez votre <br />
            <span className="bg-gradient-to-r from-accent to-purple-500 text-transparent bg-clip-text">Influence.</span>
          </h2>
          <p className="text-text-muted text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Peu importe votre domaine, FlowCard transforme chaque poignée de main en une interaction data-driven.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {useCases.map((uc, idx) => (
            <FadeIn key={idx} delay={0.1 * idx}>
              <motion.div
                whileHover={{ y: -10 }}
                className="group relative h-[500px] rounded-[3rem] overflow-hidden border border-border-custom bg-surface transition-all duration-700 hover:shadow-2xl hover:border-accent/30"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <img src={uc.image} alt={uc.persona} className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full p-12 flex flex-col justify-end">
                  <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500`}>
                    <uc.icon size={28} />
                  </div>
                  
                  <div className="space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">{uc.persona}</span>
                    <h3 className="text-3xl font-black text-white">{uc.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed max-w-sm mb-8 transition-colors group-hover:text-white/60">
                      {uc.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 pt-4">
                      {uc.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold text-white/40 group-hover:text-white/80 transition-colors uppercase tracking-widest">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Corner Arrow */}
                  <div className="absolute top-12 right-12 w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-white/20 group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

