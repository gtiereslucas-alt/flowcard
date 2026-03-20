"use client";

import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import { FadeIn } from "@/components/ui/FadeIn";
import { Check, Star } from "lucide-react";

export default function TarifsPage() {
  return (
    <div className="container mx-auto px-8 py-32 overflow-hidden">
        <FadeIn>
            <h1 className="text-4xl md:text-6xl text-center mb-6 font-bold tracking-tighter">Des tarifs pensés pour l'échelle couplés à une data robuste.</h1>
            <p className="text-xl text-center text-text-muted max-w-2xl mx-auto mb-24 font-medium tracking-tight">Transparent, sans frais cachés. Débloquez le potentiel de votre réseau professionnel.</p>
        </FadeIn>
        
        <StaggerContainer className="grid md:grid-cols-3 gap-8">
            <StaggerItem className="flex flex-col p-10 bg-surface rounded-[2rem] border border-border-custom hover:border-text-muted/30 transition-colors">
                <h3 className="text-2xl font-bold tracking-tight">Solo</h3>
                <p className="text-text-muted text-sm mb-6">Pour les indépendants.</p>
                <div className="text-6xl font-bold mb-8 tracking-tighter">19€<span className="text-lg text-text-muted font-normal tracking-normal">/mois</span></div>
                <ul className="flex-1 space-y-5 mb-8">
                    <li className="flex gap-3 text-text-muted items-start"><Check className="text-accent mt-0.5 shrink-0" size={20} /> 1 profil digital performant</li>
                    <li className="flex gap-3 text-text-muted items-start"><Check className="text-accent mt-0.5 shrink-0" size={20} /> 1 carte NFC incluse</li>
                    <li className="flex gap-3 text-text-muted items-start"><Check className="text-accent mt-0.5 shrink-0" size={20} /> Analytics de base</li>
                </ul>
                <button className="btn btn-secondary w-full py-4 rounded-xl font-bold">Choisir Solo</button>
            </StaggerItem>

            <StaggerItem className="flex flex-col p-10 bg-background rounded-[2rem] border-2 border-accent shadow-[0_0_40px_-15px_rgba(37,99,235,0.3)] relative transform md:scale-105 z-10 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-1 shadow-lg">
                    <Star size={14} fill="currentColor" /> Le plus choisi
                </div>
                <h3 className="text-2xl font-bold relative z-10 tracking-tight">Équipe</h3>
                <p className="text-text-muted text-sm mb-6 relative z-10">Pour les PME et équipes Sales.</p>
                <div className="text-6xl font-bold mb-8 tracking-tighter relative z-10">69€<span className="text-lg text-text-muted font-normal tracking-normal">/mois</span></div>
                <ul className="flex-1 space-y-5 mb-8 relative z-10">
                    <li className="flex gap-3 text-text-muted items-start"><Check className="text-accent mt-0.5 shrink-0" size={20} /> 10 profils inclus</li>
                    <li className="flex gap-3 text-text-muted items-start"><Check className="text-accent mt-0.5 shrink-0" size={20} /> Cartes personnalisées avec logo</li>
                    <li className="flex gap-3 text-text-muted items-start"><Check className="text-accent mt-0.5 shrink-0" size={20} /> Dashboard d'administration</li>
                    <li className="flex gap-3 text-text-muted items-start"><Check className="text-accent mt-0.5 shrink-0" size={20} /> Intégrations CRM standards</li>
                </ul>
                <button className="btn btn-primary w-full py-4 rounded-xl font-bold relative z-10 group-hover:shadow-lg transition-all shadow-accent/25">Choisir Équipe</button>
            </StaggerItem>

            <StaggerItem className="flex flex-col p-10 bg-surface rounded-[2rem] border border-border-custom hover:border-text-muted/30 transition-colors">
                <h3 className="text-2xl font-bold tracking-tight">Entreprise</h3>
                <p className="text-text-muted text-sm mb-6">Déploiements B2B massifs.</p>
                <div className="text-5xl font-bold mb-8 tracking-tighter mt-1">Sur devis</div>
                <ul className="flex-1 space-y-5 mb-8 mt-3">
                    <li className="flex gap-3 text-text-muted items-start"><Check className="text-accent mt-0.5 shrink-0" size={20} /> Profils illimités</li>
                    <li className="flex gap-3 text-text-muted items-start"><Check className="text-accent mt-0.5 shrink-0" size={20} /> Connexion SSO & gestion AD</li>
                    <li className="flex gap-3 text-text-muted items-start"><Check className="text-accent mt-0.5 shrink-0" size={20} /> Design et accompagnement</li>
                </ul>
                <button className="btn btn-secondary w-full py-4 rounded-xl font-bold">Parler à un expert</button>
            </StaggerItem>
        </StaggerContainer>
    </div>
  );
}
