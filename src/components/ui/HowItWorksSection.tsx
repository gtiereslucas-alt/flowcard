import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import { Hand, SmartphoneNfc, UserPlus, BarChart3 } from "lucide-react";

const steps = [
    {
        title: "1. Présentez la carte",
        description: "Lors de votre rencontre, approchez simplement votre carte du téléphone de votre interlocuteur.",
        icon: <Hand size={32} strokeWidth={1.5} />,
        color: "bg-blue-500/10 text-blue-500 border-blue-500/20"
    },
    {
        title: "2. Le profil s'ouvre",
        description: "Votre vitrine digitale apparaît instantanément, sans aucune application à télécharger.",
        icon: <SmartphoneNfc size={32} strokeWidth={1.5} />,
        color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
    },
    {
        title: "3. Contact enregistré",
        description: "En un seul clic, votre prospect sauvegarde toutes vos coordonnées dans son répertoire.",
        icon: <UserPlus size={32} strokeWidth={1.5} />,
        color: "bg-amber-500/10 text-amber-500 border-amber-500/20"
    },
    {
        title: "4. Données récoltées",
        description: "La rencontre et les coordonnées échangées remontent automatiquement sur votre plateforme.",
        icon: <BarChart3 size={32} strokeWidth={1.5} />,
        color: "bg-purple-500/10 text-purple-500 border-purple-500/20"
    }
];

export const HowItWorksSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const pathLength = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={containerRef} className="py-24 md:py-40 bg-surface relative border-t border-border-custom overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />
            
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="flex flex-col items-center text-center mb-24 md:mb-40">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-foreground mb-8">
                            La magie opère en <br /><span className="text-accent italic">quelques secondes.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-text-muted font-medium max-w-2xl mx-auto leading-relaxed">
                            Oubliez la saisie manuelle. Voici comment chaque rencontre se transforme en opportunité qualifiée.
                        </p>
                    </FadeIn>
                </div>

                <div className="relative">
                    {/* Animated Connection Path (Desktop only) */}
                    <div className="hidden lg:block absolute top-[48px] left-[12.5%] right-[12.5%] w-[75%] h-[2px] pointer-events-none">
                        <svg width="100%" height="2" viewBox="0 0 100 2" preserveAspectRatio="none" className="overflow-visible">
                            <path 
                                d="M 0 1 L 100 1" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="0.5" 
                                className="text-border-custom"
                            />
                            <motion.path 
                                style={{ pathLength }}
                                d="M 0 1 L 100 1" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="1" 
                                className="text-accent"
                            />
                        </svg>
                    </div>
                    
                    <StaggerContainer>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative">
                            {steps.map((step, index) => (
                                <StaggerItem key={index}>
                                    <div className="relative flex flex-col items-center text-center group">
                                        
                                        {/* Icone circulaire au centre */}
                                        <div className={`w-24 h-24 rounded-[2rem] border flex items-center justify-center mb-8 relative z-10 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl bg-background ${step.color}`}>
                                            {step.icon}
                                            
                                            {/* Progress dot on the line */}
                                            <div className="hidden lg:block absolute -top-[2px] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border border-border-custom z-20">
                                                <motion.div 
                                                    initial={{ scale: 0 }}
                                                    whileInView={{ scale: 1 }}
                                                    className="w-full h-full rounded-full bg-accent scale-[0.6]"
                                                />
                                            </div>
                                        </div>
                                        
                                        {/* Titre et texte */}
                                        <h3 className="text-2xl font-black text-foreground mb-4">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm md:text-base text-text-muted font-medium leading-relaxed max-w-[260px]">
                                            {step.description}
                                        </p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </div>
                    </StaggerContainer>
                </div>
                
                <FadeIn delay={0.4}>
                    <div className="mt-24 md:mt-40 w-full max-w-4xl mx-auto p-1 bg-gradient-to-r from-accent via-blue-400 to-emerald-400 rounded-3xl shadow-2xl">
                        <div className="bg-background rounded-[22px] px-8 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />
                            <div className="relative z-10">
                                <h3 className="text-3xl font-black text-foreground mb-3">Prêt à accélérer vos échanges ?</h3>
                                <p className="text-lg text-text-muted font-medium">Déployez FlowCard pour votre force commerciale dès aujourd'hui.</p>
                            </div>
                            <Link href="http://localhost:3001/register" className="relative z-10 px-10 py-5 bg-foreground text-background font-black rounded-2xl shrink-0 hover:scale-105 transition-transform shadow-2xl uppercase text-[10px] tracking-widest text-center">
                                S'inscrire & Démarrer
                            </Link>
                        </div>
                    </div>
                </FadeIn>

            </div>
        </section>
    );
};
