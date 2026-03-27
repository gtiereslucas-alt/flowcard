"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const PricingSection = () => {
    return (
        <section className="py-24 md:py-32 bg-background border-t border-border-custom relative overflow-hidden" id="pricing">
            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="flex flex-col items-center text-center mb-16 md:mb-24">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground mb-6">
                            Investissez dans <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-400">votre croissance.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-text-muted font-medium max-w-2xl mx-auto leading-relaxed">
                            Une tarification d'entreprise claire et sans surprise. Une seule opportunité transformée grâce à FlowCard suffit à rentabiliser votre équipement.
                        </p>
                    </FadeIn>
                </div>

                <FadeIn delay={0.2}>
                    <div className="mx-auto w-full max-w-4xl bg-surface border border-border-custom rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 group">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-accent/10 transition-colors" />
                        
                        {/* Frais 1: Setup */}
                        <div className="w-full md:w-1/2 relative space-y-6 md:border-r border-border-custom md:pr-12 border-b md:border-b-0 pb-12 md:pb-0">
                            <span className="inline-block px-3 py-1 bg-surface border border-border-custom text-foreground font-bold text-xs uppercase tracking-widest rounded-full">
                                Frais d'ouverture
                            </span>
                            <div>
                                <h3 className="text-5xl lg:text-6xl font-black text-foreground mb-2">
                                    79 €<span className="text-xl text-text-muted font-bold"> HT</span>
                                </h3>
                                <p className="text-text-muted font-medium">Création de la carte</p>
                            </div>
                            <ul className="space-y-4 pt-4">
                                <li className="flex items-center gap-3 font-semibold text-foreground/80">
                                    <CheckCircle2 size={18} className="text-accent" /> Design premium & fabrication
                                </li>
                                <li className="flex items-center gap-3 font-semibold text-foreground/80">
                                    <CheckCircle2 size={18} className="text-accent" /> Paramétrage de A à Z par nos soins
                                </li>
                                <li className="flex items-center gap-3 font-semibold text-foreground/80">
                                    <CheckCircle2 size={18} className="text-accent" /> Envoi des cartes physiques
                                </li>
                            </ul>
                        </div>

                        {/* Frais 2: Abonnement */}
                        <div className="w-full md:w-1/2 relative space-y-6">
                            <span className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 text-accent font-bold text-xs uppercase tracking-widest rounded-full">
                                Accès SaaS
                            </span>
                            <div>
                                <h3 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-400 mb-2">
                                    49 €<span className="text-xl text-text-muted font-bold"> HT / mois</span>
                                </h3>
                                <p className="text-text-muted font-medium">Plateforme & Suivi</p>
                            </div>
                            <ul className="space-y-4 pt-4">
                                <li className="flex items-center gap-3 font-semibold text-foreground/80">
                                    <CheckCircle2 size={18} className="text-accent" /> Accès complet au dashboard
                                </li>
                                <li className="flex items-center gap-3 font-semibold text-foreground/80">
                                    <CheckCircle2 size={18} className="text-accent" /> Mises à jour illimitées (profil et soft)
                                </li>
                                <li className="flex items-center gap-3 font-semibold text-foreground/80">
                                    <CheckCircle2 size={18} className="text-accent" /> Accompagnement stratégique continu
                                </li>
                            </ul>
                            
                            <button className="w-full h-14 bg-foreground text-background font-black text-sm rounded-xl mt-6 shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-2">
                                Contacter pour un devis <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};
