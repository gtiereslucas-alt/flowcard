"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Marc D.",
        role: "Directeur Commercial",
        text: "Depuis qu'on équipe nos commerciaux de FlowCard, le taux de prise de rendez-vous a bondi. Fini les cartes oubliées au fond d'une poche.",
        logo: "TechCorp"
    },
    {
        name: "Sophie R.",
        role: "CEO & Fondatrice",
        text: "L'effet waouh est garanti. Mes prospects retiennent mon entreprise rien qu'en scannant la carte. Une image premium inestimable.",
        logo: "Innov Agency"
    },
    {
        name: "Julien M.",
        role: "Consultant Indépendant",
        text: "Le dashboard me permet de voir exactement combien de contacts j'ai généré lors des salons. Un ROI immédiat par rapport au papier.",
        logo: "Consulting JM"
    }
];

export const TestimonialsSection = () => {
    return (
        <section className="py-24 md:py-32 bg-surface border-t border-border-custom relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="flex flex-col items-center text-center mb-16 md:mb-24">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground mb-6">
                            Ils <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-400">réseautent</span> mieux.
                        </h2>
                        <p className="text-lg md:text-xl text-text-muted font-medium max-w-2xl mx-auto leading-relaxed">
                            Découvrez l'impact business de FlowCard sur les professionnels qui l'ont adopté.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div className="bg-background border border-border-custom rounded-3xl p-8 hover:border-accent/30 transition-colors group relative flex flex-col h-full shadow-lg">
                                <Quote size={40} className="text-accent/20 mb-6 group-hover:text-accent/40 transition-colors" />
                                <p className="text-foreground/90 font-medium leading-relaxed mb-8 flex-grow">
                                    "{t.text}"
                                </p>
                                <div className="mt-auto border-t border-border-custom pt-6 flex items-center justify-between">
                                    <div>
                                        <p className="font-black text-foreground">{t.name}</p>
                                        <p className="text-xs text-text-muted font-bold uppercase tracking-wider">{t.role}</p>
                                    </div>
                                    <div className="bg-surface px-3 py-1 rounded-lg border border-border-custom shadow-sm">
                                        <span className="text-xs font-black text-foreground/50 uppercase tracking-widest">{t.logo}</span>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};
