"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Wifi, Sparkles, Zap } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export const MagicTapSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Suivi du scroll
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Lissage extrême pour un effet "doux" digne d'Apple (évite l'aspect robotique linéaire)
    const smoothProgress = useSpring(scrollYProgress, {
        damping: 20,
        mass: 0.5,
        stiffness: 80
    });

    // CHORÉGRAPHIE (Basée sur `smoothProgress` allant de 0 à 1)

    // TÉLÉPHONE (Animation d'apparition au début de la section, indépendant du scroll)
    const phoneInitialY = "40px";
    const phoneInitialOpacity = 0;

    // --- PHASE 1 (0.0 - 0.25) : "Approchez." ---
    const text1Opacity = useTransform(smoothProgress, [0, 0.05, 0.20, 0.25], [0, 1, 1, 0]);
    const text1Y = useTransform(smoothProgress, [0, 0.05, 0.20, 0.25], ["40px", "0px", "0px", "-40px"]);
    const text1Scale = useTransform(smoothProgress, [0, 0.05, 0.20, 0.25], [0.9, 1, 1, 1.05]);

    // --- PHASE 2 (0.25 - 0.55) : "Connectez." + Vol de la carte ---
    const text2Opacity = useTransform(smoothProgress, [0.25, 0.30, 0.50, 0.55], [0, 1, 1, 0]);
    const text2Y = useTransform(smoothProgress, [0.25, 0.30, 0.50, 0.55], ["40px", "0px", "0px", "-40px"]);
    const text2Scale = useTransform(smoothProgress, [0.25, 0.30, 0.50, 0.55], [0.9, 1, 1, 1.05]);

    // Vol de la carte, qui vient du bas droit (invisible) vers le téléphone au centre, puis repart
    const cardX = useTransform(smoothProgress, [0.30, 0.40, 0.55, 0.65], ["150%", "-10%", "-10%", "-150%"]);
    const cardY = useTransform(smoothProgress, [0.30, 0.40, 0.55, 0.65], ["100%", "-20%", "-20%", "-100%"]);
    const cardRotateZ = useTransform(smoothProgress, [0.30, 0.40, 0.55, 0.65], [45, -15, -15, -45]);
    const cardScale = useTransform(smoothProgress, [0.30, 0.40, 0.55, 0.65], [0.5, 1, 1, 0.5]);

    // --- PHASE 3 (0.40 - 0.45) : Le "Tap" / Onde de choc (NFC) ---
    // Ripple se déclenche dès que la carte touche (à 0.40)
    const rippleScale = useTransform(smoothProgress, [0.40, 0.48], [0.2, 3.5]);
    const rippleOpacity = useTransform(smoothProgress, [0.40, 0.42, 0.48], [0, 1, 0]);

    // Le glow du fond s'allume avec le tap
    const glowOpacity = useTransform(smoothProgress, [0.40, 0.45, 1], [0, 1, 0.3]);

    // Allumage de l'écran (Digital Profile) pile au moment du Tap
    const screenOpacity = useTransform(smoothProgress, [0.40, 0.45], [0, 1]);
    const screenScale = useTransform(smoothProgress, [0.40, 0.45], [0.9, 1]);
    const screenY = useTransform(smoothProgress, [0.40, 0.45], ["20px", "0px"]);

    // --- PHASE 4 (0.55 - 1.0) : "Instantané." ---
    const text3Opacity = useTransform(smoothProgress, [0.55, 0.65, 1], [0, 1, 1]);
    const text3Y = useTransform(smoothProgress, [0.55, 0.65, 1], ["40px", "0px", "0px"]);
    const text3Scale = useTransform(smoothProgress, [0.55, 0.65, 1], [0.9, 1, 1]);

    return (
        // Une section IMMENSE de 400vh pour que l'utilisateur ait beaucoup de temps pour scroller et apprécier
        <section ref={containerRef} className="h-[400vh] bg-background relative border-t border-border-custom">

            <div className="sticky top-0 h-[100dvh] w-full overflow-hidden flex flex-col lg:flex-row items-center justify-center pt-16 sm:pt-20 lg:pt-0">

                {/* DÉCOR GLOBAL */}
                <motion.div
                    style={{ opacity: glowOpacity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] bg-accent/20 rounded-full blur-[100px] lg:blur-[150px] pointer-events-none z-0"
                />

                {/* ZONE GAUCHE : LES TEXTES / TITRES */}
                <div className="w-full h-[40vh] sm:h-[45vh] lg:h-full lg:w-1/2 flex items-center justify-center relative z-20 px-4 md:px-8 lg:px-16">

                    {/* TEXT 1 (0.0 -> 0.25) */}
                    <motion.div
                        style={{ opacity: text1Opacity, y: text1Y, scale: text1Scale }}
                        className="absolute flex flex-col items-center lg:items-start text-center lg:text-left w-full max-w-lg"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border-custom text-foreground font-bold text-[10px] uppercase tracking-widest shadow-sm mb-6">
                            <Wifi size={14} className="text-accent" /> Sans app. Sans effort.
                        </div>
                        <h2 className="text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-black tracking-tighter text-foreground leading-[0.9]">
                            Approchez <br className="hidden lg:block" />
                            <span className="text-text-muted">la carte.</span>
                        </h2>
                    </motion.div>

                    {/* TEXT 2 (0.25 -> 0.55) */}
                    <motion.div
                        style={{ opacity: text2Opacity, y: text2Y, scale: text2Scale }}
                        className="absolute flex flex-col items-center lg:items-start text-center lg:text-left w-full max-w-lg"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-[10px] uppercase tracking-widest shadow-sm mb-6">
                            <Zap size={14} className="text-accent animate-pulse" /> La magie NFC
                        </div>
                        <h2 className="text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-accent via-blue-400 to-cyan-300 leading-[0.9]">
                            Connectez <br />
                            <span className="text-foreground">l'audience.</span>
                        </h2>
                    </motion.div>

                    {/* TEXT 3 (0.55 -> 1.0) */}
                    <motion.div
                        style={{ opacity: text3Opacity, y: text3Y, scale: text3Scale }}
                        className="absolute flex flex-col items-center lg:items-start text-center lg:text-left w-full max-w-lg"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 font-bold text-[9px] sm:text-[10px] uppercase tracking-widest shadow-sm mb-4">
                            <Sparkles size={14} /> Le profil s'ouvre
                        </div>
                        <h2 className="text-4xl sm:text-6xl lg:text-[5rem] xl:text-[5.5rem] font-black tracking-tighter text-foreground leading-[0.9] mb-3 lg:mb-6">
                            C'est <br />
                            <span className="text-foreground">Instantané.</span>
                        </h2>
                        <p className="text-text-muted text-[11px] sm:text-sm lg:text-lg mx-auto lg:mx-0 text-center lg:text-left leading-relaxed">
                            Fini les cartes de visite papier qui se perdent. <br className="block lg:hidden" />
                            Votre interlocuteur sauvegarde toutes vos informations <br className="block lg:hidden" />
                            en un toucher, prêt à être recontacté.
                        </p>
                    </motion.div>

                </div>


                {/* ZONE DROITE : L'ANIMATION VISUELLE (TÉLÉPHONE + CARTE) */}
                <div className="w-full h-[55vh] lg:h-full lg:w-1/2 flex items-center justify-center relative z-10 translate-y-8 sm:translate-y-12 lg:translate-y-0">

                    {/* MOCKUP DU TÉLÉPHONE */}
                    <FadeIn delay={0.2} duration={1}>
                        <div className="relative w-[240px] sm:w-[280px] lg:w-[340px] h-[480px] sm:h-[560px] lg:h-[680px] bg-black rounded-[2.5rem] lg:rounded-[3.5rem] border-[6px] lg:border-[10px] border-[#1a1a1a] dark:border-[#111] shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col transform-gpu">

                            {/* Dynamic Island */}
                            <div className="absolute top-2 lg:top-3 left-1/2 -translate-x-1/2 w-[80px] lg:w-[100px] h-[20px] lg:h-[26px] bg-black rounded-full z-40 flex items-center justify-between px-2 shadow-sm border border-border-custom">
                                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                <div className="w-1.5 h-1.5 rounded-full bg-accent/80 shadow-[0_0_5px_currentColor]" />
                            </div>

                            {/* Écran Noir : En Attente */}
                            <div className="absolute inset-0 bg-[#050505] z-10 flex items-center justify-center flex-col">
                                <Wifi size={36} className="text-white/10 mb-4 animate-pulse" />
                            </div>

                            {/* Le Profil Digital (Allumé à la Phase 3) */}
                            <motion.div
                                style={{ opacity: screenOpacity, y: screenY, scale: screenScale }}
                                className="absolute inset-0 w-full h-full bg-background dark:bg-[#050505] flex flex-col pt-10 lg:pt-14 z-30"
                            >
                                {/* Header / Bannière Cover */}
                                <div className="w-full h-32 lg:h-44 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-accent/20 z-10 mix-blend-overlay" />
                                    <div className="absolute inset-0 bg-[url('/profile.jpg')] bg-cover bg-center blur-2xl opacity-50 scale-110" />
                                    <div className="absolute bottom-0 left-0 w-full h-20 lg:h-28 bg-gradient-to-t from-surface dark:from-[#050505] to-transparent z-10" />
                                </div>

                                {/* Photo Avatar */}
                                <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-full border-[4px] lg:border-[6px] border-surface dark:border-[#050505] mx-auto -mt-10 lg:-mt-14 relative z-20 shadow-2xl overflow-hidden bg-background">
                                    <img src="/profile.jpg" alt="Lucas Gomes" className="w-full h-full object-cover" />
                                </div>

                                {/* Contenu (Nom, Titre, Boutons) */}
                                <div className="flex flex-col items-center mt-3 lg:mt-4 px-4 lg:px-6 text-center z-20">
                                    <h3 className="text-xl lg:text-3xl font-black text-foreground mb-1 tracking-tight">Lucas Gomes</h3>

                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/10 text-accent rounded-full mb-4 lg:mb-6 border border-accent/20">
                                        <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-gradient-to-r from-accent to-white animate-pulse" />
                                        <span className="text-[9px] lg:text-[11px] font-bold uppercase tracking-widest">Founder & CEO</span>
                                    </div>

                                    <button className="w-full h-10 lg:h-14 rounded-xl lg:rounded-2xl bg-foreground hover:scale-[1.02] active:scale-[0.98] transition-transform text-background font-black text-xs lg:text-sm shadow-xl flex items-center justify-center mb-4 lg:mb-6">
                                        Ajouter aux contacts
                                    </button>

                                    <div className="w-full grid grid-cols-2 gap-2 lg:gap-3">
                                        <div className="h-12 lg:h-16 rounded-xl bg-surface border border-border-custom text-foreground flex flex-col items-center justify-center gap-1 shadow-sm"><span className="text-[10px] font-bold">Appeler</span></div>
                                        <div className="h-12 lg:h-16 rounded-xl bg-surface border border-border-custom text-foreground flex flex-col items-center justify-center gap-1 shadow-sm"><span className="text-[10px] font-bold">Email</span></div>
                                        <div className="h-12 lg:h-16 rounded-xl bg-sky-600/10 border border-sky-600/20 text-sky-600 flex flex-col items-center justify-center gap-1"><span className="text-[10px] font-bold">LinkedIn</span></div>
                                        <div className="h-12 lg:h-16 rounded-xl bg-accent/10 border border-accent/20 text-accent flex flex-col items-center justify-center gap-1"><span className="text-[10px] font-bold">FlowCard</span></div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Onde de Choc NFC (Ripple) */}
                            <motion.div
                                style={{ scale: rippleScale, opacity: rippleOpacity }}
                                className="absolute top-1/4 right-0 w-24 h-24 lg:w-40 lg:h-40 rounded-full border-[2px] lg:border-[3px] border-accent shadow-[0_0_40px_rgba(37,99,235,0.6)] z-50 translate-x-1/2 -translate-y-1/2 origin-center"
                            />
                        </div>
                    </FadeIn>

                    {/* LA CARTE PHYSIQUE QUI VOLE */}
                    <motion.div
                        style={{
                            x: cardX,
                            y: cardY,
                            rotateZ: cardRotateZ,
                            scale: cardScale,
                            transformPerspective: 1000
                        }}
                        className="absolute top-1/2 right-[10%] lg:right-[15%] w-[120px] sm:w-[150px] lg:w-[220px] h-[190px] sm:h-[240px] lg:h-[350px] bg-[#111] bg-gradient-to-br from-[#222] to-[#000] rounded-2xl lg:rounded-[2rem] border border-white/20 shadow-[0_30px_80px_rgba(37,99,235,0.4)] flex flex-col items-center justify-center p-4 z-40 origin-center"
                    >
                        <div className="absolute inset-0 opacity-40 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] blur-[0.5px] mix-blend-overlay" />

                        {/* Motif NFC à l'arrière de la carte */}
                        <div className="absolute top-6 right-6 opacity-30">
                            <Wifi size={24} className="text-white rotate-90" />
                        </div>

                        <img src="/logo-dark.png" alt="FlowCard" className="w-[50%] invert opacity-90 drop-shadow-xl relative z-10" />
                    </motion.div>
                </div>

            </div>
        </section>
    );
};
