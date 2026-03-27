"use client";

import Link from "next/link";
import { FadeIn } from "./FadeIn";
import { ArrowRight, Sparkles, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export const FinalCTASection = () => {
  return (
    <section className="py-32 md:py-64 bg-background border-t border-border-custom relative overflow-hidden">
      {/* Intense Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[160px] pointer-events-none opacity-40 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] pointer-events-none opacity-40" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <FadeIn>
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-zinc-300 dark:border-white/10 text-foreground dark:text-white font-black text-[10px] uppercase tracking-[0.4em] mb-12 backdrop-blur-md"
          >
            <Sparkles size={14} className="text-accent" /> Ready for the next level
          </motion.div>
          
          <h2 className="text-6xl md:text-[9rem] lg:text-[11rem] font-black tracking-tighter mb-12 leading-[0.8] text-foreground dark:text-white">
            Passez à <br />
            <span className="bg-gradient-to-r from-accent via-purple-400 to-accent text-transparent bg-clip-text bg-[size:200%] animate-gradient">l'action.</span>
          </h2>
          
          <p className="text-text-muted text-xl md:text-2xl max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
            Testez FlowCard au sein de votre entreprise. Simplifiez votre networking et remontez vos leads efficacement.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link
              href="https://calendly.com/lucas-gomestieres-flowcard/30min" target="_blank"
              className="group relative px-12 py-6 rounded-full bg-accent text-white text-xl font-black flex items-center gap-3 overflow-hidden transition-all hover:scale-105 hover:shadow-[0_20px_50px_rgba(37,99,235,0.4)] shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              Demander une démo <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="http://localhost:3001/register" className="text-sm font-black uppercase tracking-[0.25em] text-foreground dark:text-white/60 hover:text-accent transition-all flex items-center gap-2 group">
               S'inscrire maintenant <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 max-w-4xl mx-auto opacity-70">
            {[
              "Sans engagement",
              "Réponse sous 24h",
              "Accompagnement personnalisé"
            ].map((text) => (
              <span key={text} className="text-xs font-bold uppercase tracking-widest text-foreground dark:text-white flex items-center gap-2">
                <Sparkles size={12} className="hidden md:block"/> {text}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

