"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { PenTool, Settings, Rocket, Users2, ShieldCheck, HeartHandshake } from "lucide-react";

const services = [
    {
        title: "Conseil & Stratégie",
        description: "Nous analysons vos besoins pour définir la meilleure structure de profil et les KPIs à suivre.",
        icon: <HeartHandshake size={28} />,
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        title: "Design Sur-Mesure",
        description: "Nos créatifs conçoivent votre carte et votre profil digital pour qu'ils soient le reflet parfait de votre marque.",
        icon: <PenTool size={28} />,
        color: "text-purple-500",
        bg: "bg-purple-500/10"
    },
    {
        title: "Paramétrage Complet",
        description: "On s'occupe de tout : encodage des puces, liens vers vos réseaux, intégration de vos documents.",
        icon: <Settings size={28} />,
        color: "text-amber-500",
        bg: "bg-amber-500/10"
    },
    {
        title: "Déploiement Simplifié",
        description: "Livraison, formation de vos équipes et support dédié pour un lancement sans accroc.",
        icon: <Rocket size={28} />,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10"
    }
];

export const ServiceExpertiseSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section ref={sectionRef} className="py-24 md:py-40 bg-background relative border-t border-border-custom overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-0 w-full h-[600px] bg-accent/5 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />
            
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    
                    {/* Visual Side */}
                    <motion.div 
                        style={{ y: yParallax }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <FadeIn>
                            <div className="relative aspect-square max-w-[500px] mx-auto">
                                {/* Decorative Ring */}
                                <motion.div 
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 border-2 border-dashed border-accent/20 rounded-full"
                                />
                                
                                {/* Center Badge */}
                                <div className="absolute inset-8 bg-surface border border-border-custom rounded-full flex flex-col items-center justify-center p-12 text-center shadow-2xl overflow-hidden group">
                                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <ShieldCheck size={48} className="text-accent mb-6" />
                                    <h3 className="text-3xl font-black text-foreground mb-4 leading-tight">Accompagnement<br />Clé en Main</h3>
                                    <p className="text-text-muted font-medium mb-6">
                                        On ne vous donne pas juste une carte. On vous donne une solution prête à l'emploi.
                                    </p>
                                    <div className="flex -space-x-3">
                                        {[1,2,3,4,5].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-full bg-surface border-2 border-background flex items-center justify-center text-[10px] font-bold text-foreground overflow-hidden shadow-sm">
                                                <div className="w-full h-full bg-zinc-200" />
                                            </div>
                                        ))}
                                    </div>
                                    <p className="mt-4 text-[10px] font-black uppercase tracking-widest text-accent">Déjà +500 entreprises équipées</p>
                                </div>

                                {/* Floating Icons Around */}
                                <motion.div 
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-16 bg-background border border-border-custom rounded-2xl flex items-center justify-center shadow-xl text-accent"
                                >
                                    <Users2 size={28} />
                                </motion.div>
                            </div>
                        </FadeIn>
                    </motion.div>

                    {/* Text Side */}
                    <div className="w-full lg:w-1/2">
                        <FadeIn>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground mb-10 leading-[1.1]">
                                Bien plus qu'un outil.<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">Une expertise complète.</span>
                            </h2>
                        </FadeIn>
                        
                        <div className="grid sm:grid-cols-2 gap-8">
                            {services.map((service, i) => (
                                <FadeIn key={i} delay={i * 0.1}>
                                    <div className="group flex flex-col items-start gap-4">
                                        <div className={`w-14 h-14 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center shrink-0 border border-white/5 group-hover:scale-110 transition-transform`}>
                                            {service.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-black text-foreground mb-2">{service.title}</h4>
                                            <p className="text-sm text-text-muted font-medium leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};
