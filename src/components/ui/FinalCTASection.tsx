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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-black text-[10px] uppercase tracking-[0.4em] mb-12 backdrop-blur-md"
          >
            <Sparkles size={14} className="text-accent" /> Ready for the next level
          </motion.div>
          
          <h2 className="text-6xl md:text-[9rem] lg:text-[11rem] font-black tracking-tighter mb-12 leading-[0.8] text-white">
            Votre Réseau. <br />
            <span className="bg-gradient-to-r from-accent via-purple-400 to-accent text-transparent bg-clip-text bg-[size:200%] animate-gradient">Propulsé.</span>
          </h2>
          
          <p className="text-text-muted text-xl md:text-2xl max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
            Ne distribuez plus jamais une carte qui finira à la poubelle. Rejoignez le standard du networking moderne.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/tarifs"
              className="group relative px-12 py-6 rounded-full bg-accent text-white text-xl font-black flex items-center gap-3 overflow-hidden transition-all hover:scale-105 hover:shadow-[0_20px_50px_rgba(37,99,235,0.4)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              Commander mes cartes <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/solution"
              className="px-12 py-6 rounded-full bg-white/5 border border-white/10 text-white text-xl font-black flex items-center gap-2 hover:bg-white/10 transition-all backdrop-blur-xl"
            >
              Explorer la solution <ChevronRight size={22} />
            </Link>
          </div>
          
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto opacity-40">
            {[
              "Livraison 48h",
              "Sans Abonnement",
              "Eco-Responsable",
              "Support 7/7"
            ].map((text) => (
              <span key={text} className="text-[10px] font-black uppercase tracking-[0.3em] text-white">{text}</span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

