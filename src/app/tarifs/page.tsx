"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import { 
  Check, 
  X, 
  Zap, 
  Star, 
  Globe, 
  ShieldCheck, 
  ArrowRight, 
  Info,
  Building2,
  Rocket,
  Crown,
  Calendar
} from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    range: "1 - 4 cartes",
    price: "Sur devis",
    installation: "Accompagnement initial inclus",
    popular: false,
    savings: null,
    features: [
      { text: "Carte NFC premium", included: true },
      { text: "Profil digital personnalisé", included: true },
      { text: "QR code inclus", included: true },
      { text: "Analytics de base", included: true },
      { text: "Support email", included: true },
      { text: "Analytics avancés", included: false },
      { text: "Intégration CRM", included: false },
      { text: "Gestion équipe", included: false },
    ],
    cta: "Réserver une démo",
    color: "from-zinc-500/20 to-zinc-800/20",
    border: "border-white/5",
    icon: <Rocket size={24} className="text-zinc-400" />
  },
  {
    name: "Business",
    range: "5 - 14 cartes",
    price: "Sur devis",
    installation: "Offre la plus équilibrée",
    popular: true,
    savings: "Tarifs Dégressifs",
    features: [
      { text: "Carte NFC premium", included: true },
      { text: "Profil digital personnalisé", included: true },
      { text: "QR code inclus", included: true },
      { text: "Analytics de base", included: true },
      { text: "Support email", included: true },
      { text: "Analytics avancés", included: true },
      { text: "Intégration CRM", included: true },
      { text: "Gestion équipe", included: true },
      { text: "Support prioritaire", included: true },
    ],
    cta: "Réserver une démo",
    color: "from-accent/20 to-blue-600/20",
    border: "border-accent",
    icon: <Zap size={24} className="text-accent" />
  },
  {
    name: "Enterprise",
    range: "15 - 29 cartes",
    price: "Sur devis",
    installation: "Solutions grands comptes",
    popular: false,
    savings: "Optimisation Volume",
    features: [
      { text: "Tout Business inclus", included: true },
      { text: "IA enrichissement contacts", included: true },
      { text: "Accès API", included: true },
      { text: "Account manager dédié", included: true },
      { text: "SLA 99,9 %", included: true },
      { text: "Formation équipe", included: true },
    ],
    cta: "Demander un devis",
    color: "from-purple-500/20 to-purple-800/20",
    border: "border-white/5",
    icon: <Building2 size={24} className="text-purple-400" />
  },
  {
    name: "Corporate",
    range: "30+ cartes",
    price: "Sur devis",
    installation: "Déploiement international",
    popular: false,
    savings: "Architecture Dédiée",
    features: [
      { text: "Toutes les fonctionnalités", included: true },
      { text: "Onboarding sur-mesure", included: true },
      { text: "Contrat personnalisé", included: true },
      { text: "Intégrations sur-mesure", included: true },
      { text: "SLA premium dédié", included: true },
      { text: "Facturation personnalisée", included: true },
    ],
    cta: "Contacter un expert",
    color: "from-emerald-500/20 to-emerald-800/20",
    border: "border-white/5",
    icon: <Crown size={24} className="text-emerald-400" />
  }
];

export default function TarifsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-accent/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-8xl font-[900] tracking-tighter text-foreground mb-8 leading-[0.9]">
              UNE SOLUTION <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-cyan-400">SUR MESURE.</span>
            </h1>
            <p className="text-lg md:text-2xl text-text-muted max-w-3xl mx-auto font-medium leading-relaxed italic opacity-80 mb-16">
              Nos tarifs sont adaptés à vos besoins réels et au volume de votre force de vente.<br className="hidden md:block"/> Chaque projet est unique, c'est pourquoi nous fonctionnons exclusivement sur devis.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. PRICING GRID */}
      <section className="pb-32 container mx-auto px-6">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, idx) => (
            <StaggerItem key={plan.name} className="h-full">
              <div className={`relative h-full flex flex-col p-8 md:p-10 rounded-[3rem] bg-surface/50 border backdrop-blur-xl transition-all duration-500 group ${plan.popular ? "border-accent shadow-[0_40px_100px_rgba(37,99,235,0.15)] scale-[1.03] z-10" : "border-white/5 hover:border-white/20 hover:shadow-2xl"}`}>
                
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent to-blue-600 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl flex items-center gap-2 whitespace-nowrap">
                    <Zap size={12} fill="currentColor" /> Le plus populaire
                  </div>
                )}

                <div className="mb-10 flex items-center justify-between">
                  <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                    {plan.icon}
                  </div>
                  <div className="text-right">
                    <h3 className="text-2xl font-black text-foreground tracking-tight">{plan.name}</h3>
                    <p className="text-[10px] font-black uppercase tracking-widest text-text-muted mt-1">{plan.range}</p>
                  </div>
                </div>

                <div className="mb-10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-black tracking-tighter text-foreground">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-text-muted mt-4 flex items-center gap-2">
                    <Info size={12} className="text-accent" />
                    {plan.installation}
                  </p>
                  
                  {plan.savings && (
                    <div className="mt-6 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 inline-block">
                      <p className="text-[11px] font-black uppercase tracking-widest text-emerald-500 flex items-center gap-2">
                         {plan.savings}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex-1 space-y-5 mb-12">
                  {plan.features.map((feature, i) => (
                    <div key={i} className={`flex items-start gap-4 text-sm font-medium ${feature.included ? "text-foreground" : "text-text-muted/40"}`}>
                      <div className={`mt-0.5 shrink-0 ${feature.included ? "text-accent" : "text-text-muted/30"}`}>
                        {feature.included ? <Check size={18} strokeWidth={3} /> : <X size={18} />}
                      </div>
                      <span className={!feature.included ? "line-through decoration-white/10" : ""}>{feature.text}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-6 rounded-[1.8rem] font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3 group/btn ${plan.popular ? "bg-accent text-white shadow-xl shadow-accent/20 hover:scale-105 active:scale-95" : "bg-white/5 border border-white/10 text-foreground hover:bg-white/10 hover:border-white/20"}`}>
                  {plan.cta}
                  <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 3. TRUST & ROI SECTION */}
      <section className="py-32 bg-surface/30 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <FadeIn direction="left">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground mb-8 leading-[0.9]">
                  Discutons de votre <br/>
                  <span className="text-accent italic">Prochain Succès.</span>
                </h2>
                <p className="text-lg text-text-muted font-medium leading-relaxed mb-12">
                  Notre équipe d'experts vous accompagne dans la définition de votre stratégie networking. Réservez un créneau pour une démonstration personnalisée et recevez un devis en 24h.
                </p>
                <div className="flex flex-col gap-6">
                   <Link href="/roi" className="group flex items-center gap-4 text-sm font-black uppercase tracking-[0.25em] text-accent">
                      Simulateur de ROI <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                   </Link>
                   <div className="flex items-center gap-4 text-sm font-black uppercase tracking-[0.25em] text-foreground/40">
                      <Calendar size={18} /> Disponibilité immédiate
                   </div>
                </div>
             </FadeIn>

             <FadeIn direction="right" className="grid grid-cols-2 gap-6">
                {[
                  { icon: ShieldCheck, title: "Sécurité Bancaire", desc: "Données chiffrées AES-256." },
                  { icon: Globe, title: "Support 24/7", desc: "Une équipe dédiée en France." },
                  { icon: Rocket, title: "Setup Rapide", desc: "Déploiement en moins de 48h." },
                  { icon: Star, title: "N°1 en France", desc: "Élu meilleur support NFC 2025." }
                ].map((item, i) => (
                  <div key={i} className="p-8 rounded-[2.5rem] bg-background border border-border-custom hover:border-accent/40 transition-all group shadow-sm">
                    <item.icon size={32} className="text-accent mb-6 group-hover:scale-110 transition-transform" />
                    <h4 className="text-lg font-black text-foreground mb-2">{item.title}</h4>
                    <p className="text-xs text-text-muted font-medium">{item.desc}</p>
                  </div>
                ))}
             </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. FINAL FAQ/GUARANTEE */}
      <section className="py-40 text-center">
        <FadeIn>
           <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground mb-12">Un projet spécifique ?</h2>
           <p className="text-text-muted font-medium mb-16 text-xl italic max-w-2xl mx-auto opacity-70">
             "Plus de 100 collaborateurs ? Besoins de fonctionnalités sur-mesure ou d'intégration API complexe ? Parlons-en."
           </p>
           <button className="px-16 py-7 bg-foreground text-background dark:bg-white dark:text-zinc-950 rounded-full font-black text-xs uppercase tracking-[0.3em] hover:scale-110 active:scale-95 transition-all shadow-2xl">
              Réserver un appel d'expert
           </button>
        </FadeIn>
      </section>

    </div>
  );
}
