"use client";

import React from "react";
import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { 
  Users, 
  Linkedin, 
  Instagram, 
  Globe, 
  ShoppingBag, 
  Zap, 
  ArrowUpRight,
  ShieldCheck,
  Smartphone
} from "lucide-react";

const NetworkNode = ({ icon: Icon, label, delay = 0, className = "" }: any) => (
  <motion.div 
    initial={{ scale: 0, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ delay, type: "spring", stiffness: 100 }}
    className={`group relative flex flex-col items-center ${className}`}
  >
    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-surface border border-white/5 flex items-center justify-center text-text-muted group-hover:text-accent group-hover:border-accent/40 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-all duration-500 backdrop-blur-xl">
      <Icon size={24} />
      <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-accent rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    <span className="mt-2 text-[8px] font-black uppercase tracking-widest text-white/30 group-hover:text-white transition-colors">{label}</span>
  </motion.div>
);

export const ManagedProfileSection = () => {
  return (
    <section className="container mx-auto px-8 py-32 overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
        {/* TEXT CONTENT - CENTERED */}
        <div className="relative z-10 flex flex-col items-center mb-24 w-full">
          <FadeIn>
            <div className="inline-flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-[0.4em] mb-6">
              <Zap size={16} /> Service Conciergerie
            </div>
            <h2 className="text-5xl md:text-[5.5rem] font-black tracking-tighter leading-[0.9] text-white mb-10">
              Votre Profil <br/> 
              <span className="text-accent underline decoration-accent/20 underline-offset-[12px]">Clef en Main.</span>
            </h2>
            <p className="text-xl text-text-muted mb-12 font-medium leading-relaxed max-w-2xl">
              Ne perdez plus une seconde à configurer vos liens. Nos experts créent pour vous un profil optimisé et ultra-performant.
            </p>

            <div className="grid md:grid-cols-3 gap-8 w-full">
                {[
                    { title: "Configuration", desc: "Réseaux sociaux, catalogues & rdv." },
                    { title: "Design Pro", desc: "Interface alignée sur votre charte." },
                    { title: "Smart Data", desc: "Liens traqués et optimisés." }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex flex-col items-center p-6 bg-surface rounded-[2rem] border border-border-custom group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                           <ShieldCheck size={18} />
                        </div>
                        <h4 className="text-lg font-black text-white mb-2">{item.title}</h4>
                        <p className="text-sm text-text-muted leading-tight">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
          </FadeIn>
        </div>

        {/* INTERACTIVE PROFILE MAP - CENTERED */}
        <div className="relative w-full max-w-[600px] flex justify-center">
            <FadeIn delay={0.3} direction="up" className="w-full">
                <div className="relative aspect-square flex items-center justify-center scale-90 md:scale-100">
                    {/* CENTER NODE: THE PROFILE */}
                    <motion.div 
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="w-28 h-28 md:w-36 md:h-36 rounded-[2.5rem] bg-accent flex flex-col items-center justify-center p-6 shadow-[0_0_80px_rgba(37,99,235,0.5)] z-30 border border-white/20"
                    >
                        <Users size={40} className="text-white mb-2" />
                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white">Central Hub</span>
                    </motion.div>

                    {/* CONNECTIONS (SVG Lines) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                        <circle cx="50%" cy="50%" r="30%" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" className="text-accent" />
                    </svg>

                    {/* ORBITAL NODES */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-full h-full">
                            <NetworkNode icon={Linkedin} label="LinkedIn" delay={0.4} className="absolute top-[5%] left-[15%]" />
                            <NetworkNode icon={Instagram} label="Socials" delay={0.5} className="absolute top-[15%] right-[5%]" />
                            <NetworkNode icon={Globe} label="Website" delay={0.6} className="absolute bottom-[20%] left-[0%]" />
                            <NetworkNode icon={ShoppingBag} label="Catalog" delay={0.7} className="absolute bottom-[5%] right-[20%]" />
                            <NetworkNode icon={Smartphone} label="Contact" delay={0.8} className="absolute top-[50%] right-[0%] translate-x-1/2 -translate-y-1/2" />
                        </div>
                    </div>

                    {/* Pulsing Aura */}
                    <div className="absolute inset-0 border border-accent/20 rounded-full animate-ping opacity-10" />
                </div>
            </FadeIn>

            {/* CTA BUTTON BELOW MAP */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-full flex flex-col items-center">
                <motion.div whileHover={{ scale: 1.05 }}>
                    <button className="btn btn-primary px-10 py-5 rounded-3xl text-lg font-black flex items-center gap-3 shadow-[0_20px_50px_-10px_rgba(37,99,235,0.4)]">
                        Activer mon profil pro <ArrowUpRight size={20} />
                    </button>
                </motion.div>
                
                <div className="mt-8 bg-surface/80 backdrop-blur-2xl px-6 py-4 rounded-2xl border border-white/10 shadow-2xl flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                        <Zap size={20} />
                    </div>
                    <p className="text-xs font-bold text-white leading-tight">Expert dédié assigné dès votre commande.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
