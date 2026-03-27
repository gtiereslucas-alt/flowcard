"use client";

import React from "react";
import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { Sparkles, Leaf } from "lucide-react";

export const CardShowcaseSection = () => {
    const [mousePos1, setMousePos1] = React.useState({ x: 0, y: 0 });
    const [mousePos2, setMousePos2] = React.useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, setPos: any) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
    <section className="pt-8 pb-16 bg-background transition-colors duration-500 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-accent/5 rounded-full blur-[100px] md:blur-[150px] -translate-y-1/2 translate-x-1/4 md:translate-x-1/2" />
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
                visible: { transition: { staggerChildren: 0.15 } },
                hidden: { transition: { staggerChildren: 0.05 } }
            }}
            className="flex flex-col items-center text-center max-w-5xl mx-auto"
        >
            {/* LE TEXTE VENDEUR - NOW FIRST */}
            <div className="flex flex-col items-center gap-2 md:gap-3 mb-6 md:mb-8">
                <motion.div variants={{
                    visible: { opacity: 0.8, y: 0 },
                    hidden: { opacity: 0, y: 10 }
                }}>
                    <div className="inline-flex items-center gap-2 text-accent font-bold text-[9px] md:text-[10px] uppercase tracking-[0.4em] mb-1 drop-shadow-sm">
                        <Sparkles size={14} /> Votre Support Sur-Mesure
                    </div>
                </motion.div>
                
                <motion.h2 variants={{
                    visible: { opacity: 1, y: 0, scale: 1 },
                    hidden: { opacity: 0, y: 15, scale: 0.98 }
                }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                   className="text-5xl md:text-[5rem] lg:text-[5.5rem] xl:text-[6.5rem] font-black tracking-tighter mb-2 md:mb-3 leading-[1] md:leading-[0.85]"
                >
                    Votre image, <br/> Sans aucune <span className="bg-gradient-to-r from-accent to-accent-hover text-transparent bg-clip-text italic text-[1em]">Limite.</span>
                </motion.h2>

                <motion.p variants={{
                    visible: { opacity: 0.5, y: 0 },
                    hidden: { opacity: 0, y: 5 }
                }} transition={{ duration: 1 }}
                   className="text-[11px] md:text-sm lg:text-base text-text-muted leading-relaxed font-medium max-w-[320px] md:max-w-[480px] mx-auto"
                >
                    FlowCard devient le prolongement de votre identité. <br /> Logo, couleurs, gravure laser ou impression HD :<br />créez une carte qui ne ressemble qu'à vous.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 w-full max-w-4xl lg:max-w-5xl px-2">
                    {/* Feature 1: Personalization */}
                    <motion.div 
                        variants={{
                            visible: { opacity: 1, y: 0, scale: 1 },
                            hidden: { opacity: 0, y: 40, scale: 0.9 }
                        }}
                        onMouseMove={(e) => handleMouseMove(e, setMousePos1)}
                        whileHover={{ y: -8, scale: 1.02 }}
                        animate={{
                            y: [0, -6, 0],
                        }}
                        transition={{ 
                            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                            duration: 0.7,
                            type: "spring",
                            stiffness: 120
                        }}
                        className="group relative flex flex-col items-center gap-4 md:gap-6 text-center p-8 md:p-10 bg-surface/40 backdrop-blur-3xl rounded-[2.5rem] md:rounded-[3rem] border border-border-custom hover:border-accent/40 transition-all duration-500 shadow-2xl overflow-hidden touch-none"
                    >
                        {/* CUSTOM SPOTLIGHT CURSOR EFFECT */}
                        <div 
                            className="absolute inset-0 pointer-events-none opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                                background: `radial-gradient(600px circle at ${mousePos1.x}px ${mousePos1.y}px, rgba(37, 99, 235, 0.15), transparent 40%)`
                            }}
                        />
                        
                        <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 bg-accent rounded-2xl md:rounded-[1.5rem] flex items-center justify-center text-white shadow-[0_10px_20px_-5px_rgba(37,99,235,0.4)] md:group-hover:scale-110 md:group-hover:rotate-12 transition-all duration-500">
                            <Sparkles size={24} className="md:w-[28px]" />
                        </div>
                        
                        <div className="relative z-10">
                            <h4 className="text-xl md:text-2xl font-black text-foreground mb-2 md:mb-4 tracking-tight md:group-hover:text-accent transition-colors duration-500">100% Personnalisable</h4>
                            <p className="text-[13px] md:text-sm text-text-muted leading-relaxed font-medium opacity-80 md:group-hover:opacity-100 transition-opacity">
                                Logo, couleurs et <br /> gravure laser sur-mesure.
                            </p>
                        </div>

                        <div className="absolute inset-0 border border-accent/0 md:group-hover:border-accent/20 rounded-[2.5rem] md:rounded-[3rem] transition-all duration-700" />
                    </motion.div>

                    {/* Feature 2: Materials */}
                    <motion.div 
                        variants={{
                            visible: { opacity: 1, y: 0, scale: 1 },
                            hidden: { opacity: 0, y: 40, scale: 0.9 }
                        }}
                        onMouseMove={(e) => handleMouseMove(e, setMousePos2)}
                        whileHover={{ y: -8, scale: 1.02 }}
                        animate={{
                            y: [0, -6, 0],
                        }}
                        transition={{ 
                            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
                            duration: 0.7,
                            type: "spring",
                            stiffness: 120
                        }}
                        className="group relative flex flex-col items-center gap-4 md:gap-6 text-center p-8 md:p-10 bg-surface/40 backdrop-blur-3xl rounded-[2.5rem] md:rounded-[3rem] border border-border-custom/50 hover:border-foreground/20 transition-all duration-500 shadow-2xl overflow-hidden touch-none"
                    >
                        {/* CUSTOM SPOTLIGHT CURSOR EFFECT */}
                        <div 
                            className="absolute inset-0 pointer-events-none opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                                background: `radial-gradient(600px circle at ${mousePos2.x}px ${mousePos2.y}px, rgba(var(--text-rgb), 0.08), transparent 40%)`
                            }}
                        />
                        
                        <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 bg-foreground rounded-2xl md:rounded-[1.5rem] flex items-center justify-center text-background shadow-lg md:group-hover:scale-110 md:group-hover:-rotate-12 transition-all duration-500">
                            <Leaf size={24} className="md:w-[28px]" />
                        </div>
                        
                        <div className="relative z-10">
                            <h4 className="text-xl md:text-2xl font-black text-foreground mb-2 md:mb-4 tracking-tight md:group-hover:text-foreground transition-colors duration-500">Matériaux <br /> au choix</h4>
                            <p className="text-[13px] md:text-sm text-text-muted leading-relaxed font-medium">
                                PVC recyclé ou <br /> bois upcyclé.
                            </p>
                        </div>
                        
                        <div className="absolute inset-0 border border-foreground/0 md:group-hover:border-foreground/10 rounded-[2.5rem] md:rounded-[3rem] transition-all duration-700" />
                    </motion.div>
                </div>
            </div>

            {/* L'IMAGE / MOCKUP DE LA CARTE PHYSIQUE - NOW SECOND */}
            <motion.div 
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 40 }
                }}
                className="relative group w-full mt-6"
            >
                {/* Glowing light behind card */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] md:w-[120%] h-[140%] md:h-[120%] bg-accent/5 md:bg-accent/10 rounded-full blur-[80px] md:blur-[100px] group-hover:bg-accent/20 transition-all duration-700" />
                
                {/* Physical Card Mockup (Vertical format) */}
                <motion.div 
                    whileHover={{ rotateY: 10, rotateX: -5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="relative w-[280px] md:w-[320px] lg:w-[360px] aspect-[9/14] mx-auto bg-gradient-to-br from-[#1a1a1a] to-[#000000] rounded-[2rem] md:rounded-[2.5rem] border border-border-custom shadow-[0_30px_60px_-15px_rgba(0,0,0,1)] overflow-hidden flex flex-col p-6 md:p-8 transform-gpu"
                >
                    {/* Inner texture */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] blur-[1px]" />
                    
                    <div className="relative z-10 h-full flex flex-col justify-between">
                        <div className="flex justify-center items-center h-1/2 mt-2">
                            <motion.img 
                                whileHover={{ scale: 1.15 }}
                                transition={{ duration: 0.7 }}
                                src="/logo-dark.png" 
                                alt="FlowCard Logo" 
                                className="w-32 md:w-40 h-auto brightness-0 invert opacity-100 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]" 
                            />
                        </div>
                        
                        <div className="flex flex-col gap-1 pb-8 md:pb-10">
                            <span className="text-[9px] md:text-[11px] uppercase tracking-[0.4em] text-white/40 font-bold mb-1 text-center font-sans tracking-widest">Founder & CEO</span>
                            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-accent to-transparent mb-2 md:mb-3 opacity-20" />
                            <h3 className="text-sm md:text-lg whitespace-nowrap font-black text-white italic tracking-tighter text-center">Lucas Gomes Tieres</h3>
                        </div>
                    </div>
                </motion.div>

                {/* Floating Badge (Smaller on mobile) */}
                <motion.div 
                   variants={{
                       visible: { opacity: 1, scale: 1 },
                       hidden: { opacity: 0, scale: 0 }
                   }}
                   animate={{ y: [0, -6, 0] }}
                   transition={{ 
                     y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                     opacity: { duration: 0.8 },
                     scale: { type: "spring" }
                   }}
                   className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white text-black px-3 md:px-5 py-2 md:py-3 rounded-[1rem] md:rounded-[1.5rem] font-bold text-[9px] md:text-xs shadow-xl flex items-center gap-1.5 z-20 whitespace-nowrap"
                >
                    <Sparkles size={14} className="text-accent md:w-[16px]" /> 100% Personnalisable
                </motion.div>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
