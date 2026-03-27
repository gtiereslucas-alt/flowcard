"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { ShieldCheck, Lock, Server, FileCheck, ShieldAlert, Cpu } from "lucide-react";

const features = [
  {
    icon: Server,
    title: "Souveraineté Totale",
    desc: "Infrastructure 100% basée en France. Vos données sont protégées par le droit Européen le plus strict.",
  },
  {
    icon: Lock,
    title: "Chiffrement AES-256",
    desc: "Sécurité de niveau bancaire sur chaque transfert. Vos informations sont cryptées du tap jusqu'au cloud.",
  },
  {
    icon: FileCheck,
    title: "GDPR Compliant",
    desc: "Conformité native. Gérez les droits d'accès et la suppression des leads en un seul clic.",
  },
  {
    icon: ShieldAlert,
    title: "Antivol de Données",
    desc: "Contrôlez l'accès de vos collaborateurs. Révoquez une carte instantanément si elle est égarée.",
  },
];

export const SecuritySection = () => {
  return (
    <section className="py-24 md:py-48 bg-zinc-50 dark:bg-[#050505] border-t border-border-custom relative overflow-hidden">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />
      
      {/* Radial Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center max-w-7xl mx-auto">
          
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-[0.4em] mb-10">
              <ShieldCheck size={14} /> Security Protocol
            </div>
            <h2 className="text-6xl md:text-[5.5rem] font-black tracking-tighter text-foreground dark:text-white mb-10 leading-[0.85]">
              Zéro Compromis. <br />
              <span className="text-green-400">Sécurité B2B.</span>
            </h2>
            <p className="text-zinc-500 dark:text-white/40 text-xl leading-relaxed max-w-xl font-medium mb-12">
              Nous avons construit FlowCard comme une infrastructure critique. Vos données sont votre propriété exclusive.
            </p>
            
            <div className="flex items-center gap-8 border-t border-zinc-300 dark:border-white/10 pt-12">
              <div className="flex flex-col">
                <span className="text-foreground dark:text-white font-black text-4xl mb-1">99.9%</span>
                <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Uptime Sévère</span>
              </div>
              <div className="w-[1px] h-12 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-foreground dark:text-white font-black text-4xl mb-1">256bit</span>
                <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Standard AES</span>
              </div>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Visual background for the list */}
            <div className="absolute -inset-10 bg-green-500/5 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="grid sm:grid-cols-2 gap-6 relative">
              {features.map((f, idx) => (
                <FadeIn key={idx} delay={0.1 * idx}>
                  <motion.div 
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="h-full p-8 bg-white/[0.03] rounded-[2.5rem] border border-border-custom hover:border-green-500/30 hover:bg-green-500/5 transition-all duration-500 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 mb-6 group-hover:bg-green-400 group-hover:text-black transition-all duration-500">
                      <f.icon size={22} />
                    </div>
                    <h4 className="text-lg font-black text-foreground dark:text-white mb-3">{f.title}</h4>
                    <p className="text-sm text-white/30 leading-relaxed font-medium transition-colors group-hover:text-white/50">
                      {f.desc}
                    </p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
            
            {/* Pulsing Chip */}
            <motion.div 
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-10 -right-10 hidden lg:flex items-center gap-3 px-6 py-3 rounded-2xl bg-surface border border-zinc-300 dark:border-white/10 shadow-2xl backdrop-blur-xl"
            >
              <Cpu size={16} className="text-green-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-foreground dark:text-white">Encrypted Core</span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

