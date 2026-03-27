import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { X, Check } from "lucide-react";

const TiltWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            whileHover={{ rotateY: 5, rotateX: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ transformStyle: "preserve-3d" }}
            className="h-full"
        >
            {children}
        </motion.div>
    );
};

export const ComparisonSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const vsOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 0.05, 0]);
    const vsScale = useTransform(scrollYProgress, [0.3, 0.7], [0.8, 1.2]);

    return (
        <section ref={sectionRef} className="py-24 md:py-40 bg-background relative border-t border-border-custom overflow-hidden">
            {/* Large Background VS */}
            <motion.div 
                style={{ opacity: vsOpacity, scale: vsScale }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
            >
                <span className="text-[30vw] font-black text-foreground tracking-tighter">VS</span>
            </motion.div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="flex flex-col items-center text-center mb-16 md:mb-32">
                    <FadeIn>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 font-bold text-[10px] md:text-xs uppercase tracking-widest shadow-sm mb-6">
                            Le comparatif
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-foreground mb-10 leading-[1.1]">
                            La carte NFC classique est <br />
                            <span className="line-through text-text-muted/40 decoration-red-500/50 decoration-4">dépassée.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-text-muted font-medium max-w-2xl mx-auto leading-relaxed">
                            Ne confondez pas une simple carte à 10€ sur Amazon avec une solution d'entreprise complète et performante.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 relative">
                    
                    {/* Eux - Basique NFC */}
                    <FadeIn delay={0.1}>
                        <div className="bg-surface/30 backdrop-blur-sm border border-border-custom rounded-[3rem] p-8 md:p-12 relative overflow-hidden group h-full grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl" />
                            <h3 className="text-2xl font-black text-text-muted mb-10 pb-4 border-b border-border-custom">Eux : Une simple carte</h3>
                            <ul className="space-y-8">
                                <li className="flex items-start gap-4 text-text-muted font-medium text-lg">
                                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <X size={18} className="text-red-500" strokeWidth={3} />
                                    </div>
                                    Profil générique non personnalisable
                                </li>
                                <li className="flex items-start gap-4 text-text-muted font-medium text-lg">
                                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <X size={18} className="text-red-500" strokeWidth={3} />
                                    </div>
                                    Aucune statistique de scan
                                </li>
                                <li className="flex items-start gap-4 text-text-muted font-medium text-lg">
                                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <X size={18} className="text-red-500" strokeWidth={3} />
                                    </div>
                                    Gestion manuelle et fastidieuse
                                </li>
                                <li className="flex items-start gap-4 text-text-muted font-medium text-lg">
                                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <X size={18} className="text-red-500" strokeWidth={3} />
                                    </div>
                                    Aucun support, aucun accompagnement
                                </li>
                            </ul>
                        </div>
                    </FadeIn>

                    {/* FlowCard - Solution Premium */}
                    <div className="h-full">
                        <FadeIn delay={0.2}>
                            <TiltWrapper>
                                <div className="bg-foreground text-background border border-foreground rounded-[3rem] p-8 md:p-12 relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] h-full">
                                    <div className="absolute top-0 right-0 w-80 h-80 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
                                    <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
                                    
                                    <h3 className="text-3xl font-black mb-10 pb-4 border-b border-background/10 flex items-center gap-4">
                                        FlowCard <span className="text-[10px] bg-accent text-white px-3 py-1 rounded-full font-black uppercase tracking-widest shadow-lg">Premium Business</span>
                                    </h3>
                                    
                                    <ul className="space-y-8">
                                        <li className="flex items-start gap-5 font-bold text-background/95 text-xl group">
                                            <div className="w-9 h-9 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5 border border-green-500/30 group-hover:scale-110 transition-transform">
                                                <Check size={20} className="text-green-400" strokeWidth={3} />
                                            </div>
                                            Profil web immersif à 100% sur-mesure
                                        </li>
                                        <li className="flex items-start gap-5 font-bold text-background/95 text-xl group">
                                            <div className="w-9 h-9 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5 border border-green-500/30 group-hover:scale-110 transition-transform">
                                                <Check size={20} className="text-green-400" strokeWidth={3} />
                                            </div>
                                            Dashboard SaaS & remontée CRM en temps réel
                                        </li>
                                        <li className="flex items-start gap-5 font-bold text-background/95 text-xl group">
                                            <div className="w-9 h-9 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5 border border-green-500/30 group-hover:scale-110 transition-transform">
                                                <Check size={20} className="text-green-400" strokeWidth={3} />
                                            </div>
                                            Updates illimitées et centralisées des profils
                                        </li>
                                        <li className="flex items-start gap-5 font-bold text-background/95 text-xl group">
                                            <div className="w-9 h-9 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5 border border-green-500/30 group-hover:scale-110 transition-transform">
                                                <Check size={20} className="text-green-400" strokeWidth={3} />
                                            </div>
                                            Service expert : On crée tout pour vous
                                        </li>
                                    </ul>

                                    <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                                        <p className="text-sm font-bold text-background/70 leading-relaxed italic">
                                            "FlowCard n'est pas une simple dépense, c'est l'investissement le plus rentable pour notre force commerciale cette année."
                                        </p>
                                    </div>
                                </div>
                            </TiltWrapper>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    );
};
