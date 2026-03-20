"use client";

import React from "react";
import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { Play, Sparkles, Smartphone, Layers } from "lucide-react";

export const VideoFeatureSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
            <FadeIn>
                <div className="inline-flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-[0.3em] mb-4">
                    <Sparkles size={16} /> L'Expérience FlowCard
                </div>
                <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
                    Plus qu'une carte. <br/>
                    <span className="text-white/50">Un standard technologique.</span>
                </h2>
            </FadeIn>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
            {/* FEATURE 1: Video Placeholder card */}
            <FadeIn delay={0.1} className="lg:col-span-2 group">
                <div className="relative aspect-video rounded-[3rem] overflow-hidden bg-surface border border-border-custom group-hover:border-accent/30 transition-all duration-700 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                    
                    {/* Placeholder for Video content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div 
                           whileHover={{ scale: 1.1 }}
                           className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-3xl border border-white/20 z-20 cursor-pointer group-hover:bg-accent group-hover:text-white transition-all shadow-2xl"
                        >
                            <Play fill="currentColor" size={32} />
                        </motion.div>
                    </div>

                    {/* Simulation Image Placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 animate-pulse" />
                    
                    <div className="absolute bottom-10 left-10 z-20">
                        <h4 className="text-2xl font-black text-white mb-2">Démo Interactive IA</h4>
                        <p className="text-white/60 font-medium">Découvrez comment notre scan haute précision digitalise vos prospects.</p>
                    </div>
                </div>
            </FadeIn>

            {/* SIDE FEATURES */}
            <div className="flex flex-col gap-6 lg:justify-between">
                <FadeIn delay={0.2} className="bg-surface p-8 rounded-[2.5rem] border border-border-custom hover:border-accent/40 transition-colors">
                    <Smartphone size={32} className="text-accent mb-6" />
                    <h5 className="text-xl font-black mb-3 text-white">Application Native</h5>
                    <p className="text-text-muted text-sm leading-relaxed">Une expérience fluide sur iOS et Android pour gérer votre flotte en temps réel.</p>
                </FadeIn>
                
                <FadeIn delay={0.3} className="bg-surface p-8 rounded-[2.5rem] border border-border-custom hover:border-accent/40 transition-colors">
                    <Layers size={32} className="text-purple-400 mb-6" />
                    <h5 className="text-xl font-black mb-3 text-white">Multi-profils</h5>
                    <p className="text-text-muted text-sm leading-relaxed">Un profil pro et un profil perso sur la même carte. Switch intelligent par NFC.</p>
                </FadeIn>
            </div>
        </div>
      </div>
    </section>
  );
};
