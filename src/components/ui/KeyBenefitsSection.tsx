"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { TrendingUp, Award, RefreshCw, Leaf, Rocket } from "lucide-react";

const benefits = [
    {
        title: "Générez plus de business",
        description: "Enregistrement en 1-clic et remontée des statistiques : vous ne perdez plus aucun prospect.",
        icon: <TrendingUp size={24} className="text-green-500" />,
        bg: "bg-green-500/10"
    },
    {
        title: "Image de marque irréprochable",
        description: "Prouvez immédiatement à votre client que vous utilisez les technologies de pointe.",
        icon: <Award size={24} className="text-amber-500" />,
        bg: "bg-amber-500/10"
    },
    {
        title: "Déploiement zéro stress",
        description: "Nous gérons le paramétrage, le design et l'onboarding pour vos équipes commerciales.",
        icon: <Rocket size={24} className="text-blue-500" />,
        bg: "bg-blue-500/10"
    },
    {
        title: "Suivi des équipes simplifié",
        description: "Uniformisez les profils de tous vos collaborateurs et mettez-les à jour globalement.",
        icon: <RefreshCw size={24} className="text-purple-500" />,
        bg: "bg-purple-500/10"
    },
    {
        title: "Engagement RSE mesurable",
        description: "Moins de déchets papier, plus besoin de réimprimer 500 cartes à chaque changement de poste.",
        icon: <Leaf size={24} className="text-emerald-500" />,
        bg: "bg-emerald-500/10"
    }
];

export const KeyBenefitsSection = () => {
    return (
        <section className="py-24 md:py-32 bg-surface border-t border-border-custom relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
                    
                    {/* Colonne Gauche: Titre principal */}
                    <div className="md:w-1/3 sticky top-32">
                        <FadeIn>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground mb-6 leading-[1.1]">
                                Le levier de <br />croissance.<br />
                            </h2>
                            <p className="text-lg text-text-muted font-medium mb-8">
                                Conçu spécifiquement pour maximiser vos prises de contact et valoriser votre entreprise.
                            </p>
                        </FadeIn>
                    </div>

                    {/* Colonne Droite: Liste des bénéfices */}
                    <div className="md:w-2/3 flex flex-col gap-8">
                        {benefits.map((benefit, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="flex items-start gap-6 bg-background rounded-3xl p-8 border border-border-custom hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 group">
                                    <div className={`w-14 h-14 rounded-2xl ${benefit.bg} border border-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                        {benefit.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-foreground mb-3">{benefit.title}</h3>
                                        <p className="text-lg text-text-muted font-medium leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                    
                </div>
            </div>
        </section>
    );
};
