import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { CreditCard, Smartphone, LayoutDashboard, CheckCircle2 } from "lucide-react";

const TiltCard = ({ children, delay }: { children: React.ReactNode, delay: number }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <FadeIn delay={delay}>
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateY,
                    rotateX,
                    transformStyle: "preserve-3d",
                }}
                className="relative flex flex-col h-full bg-surface border border-border-custom p-8 rounded-[2.5rem] hover:border-accent/40 transition-colors group overflow-hidden shadow-xl"
            >
                <div style={{ transform: "translateZ(50px)" }} className="relative z-10 h-full flex flex-col">
                    {children}
                </div>
                
                {/* Internal Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors" />
            </motion.div>
        </FadeIn>
    );
};

export const FlowCardTrioSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleSectionMouseMove = (e: React.MouseEvent) => {
        if (!sectionRef.current) return;
        const { left, top } = sectionRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
    };

    return (
        <section 
            ref={sectionRef}
            onMouseMove={handleSectionMouseMove}
            className="py-24 md:py-40 bg-background border-t border-border-custom relative overflow-hidden perspective-[1200px]"
        >
            {/* Ambient Mouse Glow */}
            <motion.div 
                style={{
                    left: mouseX,
                    top: mouseY,
                }}
                className="absolute w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0 opacity-0 group-hover:opacity-100 transition-opacity"
            />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="flex flex-col items-center text-center mb-24">
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-[10px] md:text-xs uppercase tracking-widest shadow-sm mb-6">
                            L'écosystème FlowCard
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-foreground mb-8">
                            Plus qu'une carte.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-cyan-400">Une solution complète.</span>
                        </h2>
                        <p className="text-lg md:text-2xl text-text-muted font-medium max-w-2xl mx-auto leading-relaxed">
                            Le meilleur du monde physique et digital réuni <br className="hidden md:block" /> pour transformer chaque rencontre en opportunité.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
                    {/* Carte 1: Le Support Physique */}
                    <TiltCard delay={0.1}>
                        <div className="w-14 h-14 rounded-2xl bg-background border border-border-custom flex items-center justify-center text-foreground mb-6 shadow-sm group-hover:scale-110 group-hover:text-accent transition-all duration-300">
                            <CreditCard size={28} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-black text-foreground mb-4">1. La Carte NFC</h3>
                        <p className="text-text-muted leading-relaxed font-medium mb-8">
                            Une seule carte connectée, premium et personnalisée. L'outil physique ultime qui remplace pour toujours des milliers de cartes en papier.
                        </p>
                        <ul className="mt-auto space-y-3">
                            <li className="flex items-start gap-3 text-sm font-semibold text-foreground/80">
                                <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" /> Matériaux premium intégrés
                            </li>
                            <li className="flex items-start gap-3 text-sm font-semibold text-foreground/80">
                                <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" /> Puce ultra-réactive
                            </li>
                        </ul>
                    </TiltCard>

                    {/* Carte 2: Profil Digital */}
                    <TiltCard delay={0.2}>
                        <div className="w-14 h-14 rounded-2xl bg-background border border-border-custom flex items-center justify-center text-foreground mb-6 shadow-sm group-hover:scale-110 group-hover:text-accent transition-all duration-300">
                            <Smartphone size={28} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-black text-foreground mb-4">2. Le Profil Digital</h3>
                        <p className="text-text-muted leading-relaxed font-medium mb-8">
                            Au toucher de la carte, votre vitrine s'ouvre sur le téléphone de votre interlocuteur. Sans aucune application à télécharger.
                        </p>
                        <ul className="mt-auto space-y-3">
                            <li className="flex items-start gap-3 text-sm font-semibold text-foreground/80">
                                <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" /> Partage de contact en 1 clic
                            </li>
                            <li className="flex items-start gap-3 text-sm font-semibold text-foreground/80">
                                <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" /> Mise à jour en temps réel
                            </li>
                        </ul>
                    </TiltCard>

                    {/* Carte 3: Plateforme SaaS */}
                    <TiltCard delay={0.3}>
                        <div className="w-14 h-14 rounded-2xl bg-background border border-border-custom flex items-center justify-center text-foreground mb-6 shadow-sm group-hover:scale-110 group-hover:text-accent transition-all duration-300">
                            <LayoutDashboard size={28} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-black text-foreground mb-4">3. La Plateforme SaaS</h3>
                        <p className="text-text-muted leading-relaxed font-medium mb-8">
                            Votre centre de contrôle complet. Suivez vos leads, modifiez vos liens et managez vos équipes de manière centralisée.
                        </p>
                        <ul className="mt-auto space-y-3">
                            <li className="flex items-start gap-3 text-sm font-semibold text-foreground/80">
                                <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" /> Dashboard analytique clair
                            </li>
                            <li className="flex items-start gap-3 text-sm font-semibold text-foreground/80">
                                <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" /> Gestion centralisée des équipes
                            </li>
                        </ul>
                    </TiltCard>
                </div>
            </div>
        </section>
    );
};
