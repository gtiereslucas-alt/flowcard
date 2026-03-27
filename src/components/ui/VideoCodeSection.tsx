"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { Sparkles, Layers, Zap, Code2, Cpu, Wifi } from "lucide-react";

export const VideoCodeSection = () => {
  const [typing, setTyping] = useState("");
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => setIsDark(document.documentElement.classList.contains("dark"));
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);
  
  const fullCode = `// FlowCard Customization Engine
const card = new FlowCardDesign();

card.configure({
  material: 'Premium_Matte',
  accent: '#3b82f6', // Electric Blue
  logo: 'brand_icon.svg',
  engraving: 'Lucas Gomes T.'
});

await card.deployToNFC();`;

  const hasMaterial = typing.includes("material: 'Premium_Matte'");
  const hasColor = typing.includes("accent: '#3b82f6'");
  const hasLogo = typing.includes("logo: 'brand_icon.svg'");
  const hasText = typing.includes("engraving: 'Lucas");
  const hasDeployed = typing.includes("await card.deployToNFC();");

  useEffect(() => {
    if (!isInView) {
      setTyping("");
      return;
    }

    let index = 0;
    const interval = setInterval(() => {
      setTyping(fullCode.slice(0, index));
      index++;
      if (index > fullCode.length + 20) {
        setTimeout(() => { index = 0; setTyping(""); }, 4000); 
      }
    }, 35);
    return () => clearInterval(interval);
  }, [isInView]);

  const renderCodeLine = (line: string, i: number) => {
    let coloredLine = <span className={isDark ? "text-slate-400" : "text-slate-600"}>{line}</span>;
    if (line.startsWith("//")) {
      coloredLine = <span className="text-slate-500 italic">{line}</span>;
    } else if (line.includes("const ") || line.includes("await ") || line.includes("new ")) {
      const parts = line.split(/(const |await |new )/g);
      coloredLine = (
        <span>
            {parts.map((p, idx) => 
                ['const ', 'await ', 'new '].includes(p) ? <span key={idx} className="text-purple-500 font-bold">{p}</span> : 
                p.includes('FlowCardDesign') ? <span key={idx} className={isDark ? "text-yellow-300" : "text-amber-600"}>{p}</span> :
                <span key={idx} className={isDark ? "text-slate-300" : "text-slate-900"}>{p}</span>
            )}
        </span>
      );
    } else if (line.includes(": '")) {
       const [key, val] = line.split(":");
       coloredLine = (
           <span>
               <span className="text-blue-500">{key}:</span>
               <span className="text-emerald-600 font-bold">{val}</span>
           </span>
       );
    }

    return (
      <div key={i} className="flex gap-6 text-sm font-mono leading-relaxed">
        <span className="text-slate-400 select-none w-4 text-right opacity-50">{i + 1}</span>
        {coloredLine}
      </div>
    );
  };

  return (
    <section ref={containerRef} className={`py-24 md:py-48 relative overflow-hidden transition-colors duration-700 ${isDark ? "bg-zinc-50 dark:bg-[#050505]" : "bg-[#f8fafc]"} border-t border-border-custom`}>
      <div className="absolute top-[20%] left-[20%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24">
            <FadeIn>
                <div className="inline-flex items-center gap-2 text-accent font-bold text-[10px] uppercase tracking-[0.4em] mb-8">
                    <Cpu size={14} /> Design Engine
                </div>
                <h2 className={`text-6xl md:text-[5.5rem] font-black tracking-tighter mb-8 leading-[0.85] ${isDark ? "text-white" : "text-black"}`}>
                    L'Excellence <br />
                    <span className="bg-gradient-to-r from-accent to-purple-500 text-transparent bg-clip-text">Sur Mesure.</span>
                </h2>
                <p className="text-text-muted text-xl max-w-xl mx-auto leading-relaxed font-medium">
                    Prenez le contrôle absolu de votre identité physique. Notre moteur 
                    transcode vos variables de design en réalité physique instantanée.
                </p>
            </FadeIn>
        </div>

        <FadeIn delay={0.2} className="max-w-6xl mx-auto w-full mb-32 relative group">
            <div className="absolute -inset-10 bg-accent/10 blur-[100px] rounded-[5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <motion.div 
                className={`relative rounded-[3rem] border shadow-2xl overflow-hidden flex flex-col lg:flex-row transform-gpu transition-colors duration-700 ${isDark ? "bg-white dark:bg-[#0A0A0B] border-zinc-300 dark:border-white/10" : "bg-white border-black/5"}`}
            >
                <div className={`w-full lg:w-[55%] flex flex-col border-b lg:border-b-0 lg:border-r ${isDark ? "border-zinc-300 dark:border-white/10" : "border-black/5"}`}>
                    <div className={`flex items-center gap-2 px-8 py-5 border-b ${isDark ? "bg-white/5 border-border-custom" : "bg-black/[0.02] border-black/5"}`}>
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/20" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20" />
                        </div>
                        <span className="ml-4 text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                            <Code2 size={12} /> design_system.ts
                        </span>
                    </div>

                    <div className="p-10 flex-1 overflow-hidden min-h-[400px]">
                        <div className="min-w-max">
                            {typing.split('\n').map((line, i) => renderCodeLine(line, i))}
                            <motion.div 
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="inline-block w-2.5 h-5 bg-accent ml-[3.5rem] mt-1 shadow-[0_0_10px_#3b82f6]"
                            />
                        </div>
                    </div>
                </div>

                <div className={`w-full lg:w-[45%] relative overflow-hidden flex items-center justify-center p-20 min-h-[500px] transition-colors duration-700 ${isDark ? "bg-[#111]" : "bg-slate-50"}`}>
                    <div className={`absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:30px_30px] ${!isDark && "invert opacity-10"}`} />

                    <div className={`absolute top-8 right-8 flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-md ${isDark ? "bg-black/50 border-zinc-300 dark:border-white/10" : "bg-white/50 border-black/10"}`}>
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className={`text-[10px] font-black uppercase tracking-widest ${isDark ? "text-white" : "text-black"}`}>Real-time render</span>
                    </div>

                    <motion.div 
                        animate={{ 
                            rotateY: hasDeployed ? 360 : 0, 
                            scale: hasDeployed ? 1.1 : 1,
                            rotateX: 10,
                            boxShadow: hasColor ? "0 30px 60px -15px rgba(37,99,235,0.4)" : "0 30px 60px -15px rgba(0,0,0,0.1)"
                        }}
                        transition={{ duration: hasDeployed ? 2 : 1, type: "spring", bounce: 0.3 }}
                        className={`relative w-[280px] aspect-[1.58/1] rounded-3xl border flex flex-col justify-between p-8 transform-gpu transition-all duration-700 ${hasMaterial ? (isDark ? 'bg-surface border-white/20' : 'bg-white border-black/10 shadow-xl') : 'bg-black/5 border-black/10 border-dashed'} `}
                    >
                        {isDark && <div className={`absolute inset-0 bg-gradient-to-br from-white/10 to-transparent mix-blend-overlay rounded-3xl transition-opacity duration-1000 ${hasMaterial ? 'opacity-100' : 'opacity-0'}`} />}

                        <div className="relative z-10 w-full flex justify-between items-start">
                            <Wifi size={24} className={`${isDark ? "text-white/20" : "text-black/10"} -rotate-90`} />
                            <AnimatePresence>
                                {hasLogo && (
                                    <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-inner">
                                        <div className={`w-4 h-4 rounded-full transition-colors duration-500 ${hasColor ? 'bg-blue-500' : 'bg-black'}`} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="relative z-10 w-full space-y-4">
                            <div className={`h-2 w-10 rounded-full overflow-hidden ${isDark ? "bg-white/10" : "bg-black/5"}`}>
                                <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: hasColor ? "100%" : "0%" }}
                                    className="h-full bg-blue-500 shadow-[0_0_15px_#3b82f6]"
                                />
                            </div>

                            <div className="h-6">
                                <AnimatePresence>
                                    {hasText && (
                                        <motion.span 
                                            initial={{ opacity: 0, x: -10 }} 
                                            animate={{ opacity: 1, x: 0 }} 
                                            className={`text-xs font-black uppercase tracking-[0.3em] drop-shadow-md block ${isDark ? "text-white/90" : "text-black/80"}`}
                                        >
                                            Lucas Gomes T.
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        <AnimatePresence>
                            {hasDeployed && (
                                <motion.div 
                                    initial={{ opacity: 0.8 }}
                                    animate={{ opacity: 0 }}
                                    transition={{ duration: 1 }}
                                    className="absolute inset-0 bg-white rounded-3xl z-50 pointer-events-none"
                                />
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </motion.div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FadeIn delay={0.4} className={`group p-12 rounded-[3rem] border transition-all duration-500 ${isDark ? "bg-surface border-border-custom hover:border-accent/30" : "bg-white border-black/5 hover:border-accent/30 shadow-lg"}`}>
                <Sparkles size={40} className="text-accent mb-8 group-hover:scale-110 transition-transform" />
                <h3 className={`text-3xl font-black mb-4 ${isDark ? "text-white" : "text-black"}`}>Full Identity Control</h3>
                <p className="text-text-muted text-lg leading-relaxed font-medium">Finition mate, gravure laser ou impression HD : créez un objet qui exprime votre succès.</p>
            </FadeIn>
            
            <FadeIn delay={0.5} className={`group p-12 rounded-[3rem] border transition-all duration-500 ${isDark ? "bg-surface border-border-custom hover:border-purple-400/30" : "bg-white border-black/5 hover:border-purple-400/30 shadow-lg"}`}>
                <Layers size={40} className="text-purple-400 mb-8 group-hover:scale-110 transition-transform" />
                <h3 className={`text-3xl font-black mb-4 ${isDark ? "text-white" : "text-black"}`}>Ecological Materials</h3>
                <p className="text-text-muted text-lg leading-relaxed font-medium">Bambou naturel, bois précieux ou PVC recyclé : alliez technologie et respect de l'environnement.</p>
            </FadeIn>
        </div>
      </div>
    </section>
  );
};
