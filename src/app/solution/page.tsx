"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ExplodedCard } from "@/components/ui/ExplodedCard";
import { 
  SmartphoneNfc, 
  Contact, 
  LineChart, 
  ShieldCheck, 
  RefreshCw, 
  Layers, 
  Zap,
  Globe,
  Database,
  ArrowRight,
  Monitor,
  CheckCircle2,
  XCircle,
  Cpu,
  Fingerprint,
  Users
} from "lucide-react";
import Link from "next/link";
import { ShowcaseCardSection } from "@/components/ui/ShowcaseCardSection";

// --- SUB-COMPONENTS ---

const SectionTitle = ({ subtitle, title, description, center = false }: any) => (
  <div className={`mb-20 ${center ? "text-center mx-auto" : ""}`}>
    <FadeIn>
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent font-black text-[10px] md:text-xs uppercase tracking-widest shadow-sm mb-6 ${center ? "mx-auto" : ""}`}>
        {subtitle}
      </div>
      <h2 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter text-foreground mb-8 leading-[0.9]">
        {title}
      </h2>
      {description && (
        <p className="text-lg md:text-2xl text-text-muted font-medium max-w-2xl leading-relaxed whitespace-pre-line">
          {description}
        </p>
      )}
    </FadeIn>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: any) => (
  <FadeIn delay={delay} className="h-full">
    <div className="group h-full bg-surface border border-border-custom p-10 rounded-[3rem] hover:border-accent/40 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5">
      <div className="w-16 h-16 rounded-2xl bg-background border border-border-custom flex items-center justify-center text-foreground mb-8 group-hover:scale-110 group-hover:text-accent transition-all duration-500 shadow-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <Icon size={32} strokeWidth={1.5} className="relative z-10" />
      </div>
      <h3 className="text-2xl font-black text-foreground mb-4 italic flex items-center gap-2">
        {title}
      </h3>
      <p className="text-text-muted font-medium leading-relaxed">
        {description}
      </p>
    </div>
  </FadeIn>
);

// --- MAIN PAGE ---

export default function SolutionPage() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const pillars = [
    {
      id: "physical",
      label: "L'Objet",
      title: "La Carte de Visite, réinventée.",
      desc: "Un condensé de technologie dans un écrin premium. Personnalisez votre support physique pour une première impression inoubliable.",
      features: ["Puce NFC NXP Ntag213", "Revêtement UV Haute Résistance", "Finition Soft-Touch Premium", "Écologique & Durable"],
      icon: <Layers size={40} />
    },
    {
      id: "digital",
      label: "Le Profil",
      title: "Votre Twin Digital Immersif.",
      desc: "Votre interface de destination est pensée pour la conversion. Une fiche contact intelligente qui vit sur le téléphone de vos prospects.",
      features: ["Partage vCard 1-Click", "Liens Réseaux & Portfolio", "Prise de rendez-vous directe", "Zéro App à télécharger"],
      icon: <SmartphoneNfc size={40} />
    },
    {
      id: "platform",
      label: "Le Pilotage",
      title: "Le Dashboard Enterprise.",
      desc: "Prenez le contrôle de votre force de vente. Centralisez, analysez et synchronisez vos leads en temps réel.",
      features: ["Gestion de flotte simplifiée", "Synchronisation CRM native", "Statistiques de performance", "Sécurité & RGPD France"],
      icon: <Monitor size={40} />
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white relative">
      
      {/* Scroll Progress Bar */}
      <motion.div 
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1.5 bg-accent z-[100] origin-left"
      />

      {/* 1. HERO SECTION: L'EXPLOSION TECHNOLOGIQUE */}
      <section className="relative pt-32 md:pt-48 pb-10 overflow-hidden">
        {/* Background Decorative Text */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.03, scale: 1 }}
          className="absolute top-20 left-1/2 -translate-x-1/2 text-[30vw] font-black pointer-events-none select-none -z-10"
        >
          SOLUTION
        </motion.div>

        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08)_0%,transparent_70%)] -z-10 pointer-events-none" />
        
        <div className="container mx-auto px-8 relative z-20">
          <div className="max-w-5xl mx-auto text-center mb-10">
            <FadeIn>
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-border-custom bg-surface/50 backdrop-blur-xl mb-8 shadow-2xl">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-text-muted">High-End Infrastructure</span>
              </div>
              <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter leading-[0.8] mb-12">
                Le Networking<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-cyan-400">Sans Limites.</span>
              </h1>
              <p className="text-xl md:text-3xl text-text-muted font-medium max-w-3xl mx-auto leading-relaxed italic opacity-80 mb-20">
                "Nous avons séparé le support physique de la donnée numérique pour vous offrir une flexibilité totale."
              </p>
            </FadeIn>
          </div>
        </div>

        {/* EXPLODED CARD - SECTION IMMERSIVE */}
        <div className="-mt-40 mb-20">
          <ExplodedCard />
        </div>
      </section>

      {/* PILLARS NAV (Mobile Quick links) maybe? No, let's keep it simple as asked */}

      {/* 2. THE THREE PILLARS: INTERACTIVE TABBED SECTION */}
      <section className="py-32 md:py-60 bg-surface border-y border-border-custom relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            <div className="lg:col-span-12 xl:col-span-5">
              <SectionTitle 
                subtitle="Notre Vision"
                title="Un Écosystème Connecté."
                description="La solution FlowCard repose sur trois piliers indissociables conçus pour maximiser votre impact réseau."
              />
              
              <div className="flex flex-col gap-4">
                {pillars.map((pillar, idx) => (
                  <button
                    key={pillar.id}
                    onClick={() => setActiveTab(idx)}
                    className={`group flex items-center gap-6 p-6 md:p-8 rounded-[2.5rem] text-left transition-all duration-500 border-2 ${activeTab === idx ? "bg-background border-accent shadow-2xl scale-[1.02]" : "bg-transparent border-transparent opacity-40 hover:opacity-100"}`}
                  >
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center transition-all ${activeTab === idx ? "text-accent bg-accent/10" : "text-text-muted bg-white/5"}`}>
                      {pillar.icon}
                    </div>
                    <div>
                      <h4 className={`text-lg md:text-xl font-black uppercase tracking-widest ${activeTab === idx ? "text-foreground" : "text-text-muted"}`}>{pillar.label}</h4>
                      <p className="text-[10px] font-bold text-text-muted/60 mt-1 uppercase tracking-widest">Voir les détails</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-12 xl:col-span-7">
              <div className="relative aspect-[4/3] w-full min-h-[500px] md:min-h-[600px] bg-background rounded-[3rem] md:rounded-[4rem] border border-border-custom overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent pointer-events-none" />
                
                <div className="p-8 md:p-20 h-full flex flex-col justify-center">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-10 md:space-y-12"
                  >
                    <div>
                      <h3 className="text-3xl md:text-6xl lg:text-7xl font-black tracking-tighter text-foreground mb-8 leading-[1]">
                        {pillars[activeTab].title}
                      </h3>
                      <p className="text-lg md:text-2xl text-text-muted font-medium leading-relaxed max-w-2xl italic">
                        {pillars[activeTab].desc}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                      {pillars[activeTab].features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-4 group">
                          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform shadow-lg shadow-accent/10">
                            <CheckCircle2 size={18} strokeWidth={3} />
                          </div>
                          <span className="text-base md:text-lg font-black text-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-8 border-t border-border-custom">
                       <button className="flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-accent rounded-full text-white font-black text-[10px] md:text-xs uppercase tracking-widest shadow-xl shadow-accent/20 hover:scale-105 active:scale-95 transition-all">
                          Demander une démo personnalisée
                       </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. BENTO PREMIUM: PERFORMANCE & SECURITE */}
      <section className="py-32 md:py-48 bg-background relative overflow-hidden">
        <div className="container mx-auto px-8">
          <SectionTitle 
            center
            subtitle="Performance Enterprise"
            title="Conçu pour passer à l'échelle."
            description="De l'indépendant au groupe industriel, notre infrastructure s'adapte à vos besoins de sécurité et de volume."
          />

          <div className="grid md:grid-cols-12 gap-8 max-w-7xl mx-auto">
            {/* Lead Tracking */}
            <div className="md:col-span-7 md:min-h-[500px]">
              <FeatureCard 
                icon={LineChart}
                title="Lead Intelligence"
                description="Visualisez chaque interaction en temps réel. Sachez exactement où, quand et par qui vos profils sont consultés pour optimiser vos cycles de vente."
              />
            </div>

            {/* Security */}
            <div className="md:col-span-5 md:min-h-[500px]">
              <div className="h-full bg-gradient-to-br from-zinc-800 to-black p-12 rounded-[3.5rem] md:rounded-[4rem] border border-border-custom flex flex-col justify-between group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-accent/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent mb-10 shadow-lg relative z-10">
                  <Fingerprint size={32} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-black text-white mb-6 italic">Sécurité Militaire</h3>
                  <p className="text-white/60 font-medium leading-relaxed">
                    FlowCard est la seule solution offrant un chiffrement AES-256 bits conforme aux standards bancaires européens.
                  </p>
                </div>
                <div className="mt-12 flex flex-wrap gap-3 relative z-10">
                  {["AES-256", "RGPD Compliant", "ISO 27001", "SSL Secure"].map(t => (
                    <span key={t} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-white">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* CRM Sync */}
            <div className="md:col-span-4 md:min-h-[450px]">
              <FeatureCard 
                icon={Database}
                title="Sync CRM Native"
                description="Synchronisez HubSpot, Salesforce ou Pipedrive. Plus aucune saisie manuelle n'est requise après un rendez-vous."
                delay={0.1}
              />
            </div>

            {/* Team Fleet */}
            <div className="md:col-span-8 md:min-h-[450px]">
              <div className="h-full bg-surface border border-border-custom p-10 md:p-12 rounded-[3.5rem] md:rounded-[4rem] flex flex-col md:flex-row items-center gap-10 md:gap-12 group hover:border-accent/40 transition-all duration-700">
                <div className="flex-1 space-y-6">
                  <h3 className="text-3xl font-black text-foreground italic flex items-center gap-4">
                    <Users size={32} className="text-accent" />
                    Gestion de Flotte
                  </h3>
                  <p className="text-lg text-text-muted font-medium leading-relaxed">
                    Pilotez l'identité de 10 ou 10 000 collaborateurs depuis un panel unique. Changez les liens, logos et données à l'échelle mondiale instantanément.
                  </p>
                  <div className="pt-4">
                    <div className="flex -space-x-4">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-surface flex items-center justify-center text-[10px] font-bold text-white/40">FC</div>
                      ))}
                      <div className="w-10 h-10 rounded-full bg-accent border-2 border-surface flex items-center justify-center text-[10px] font-black text-white">+5K</div>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex flex-1 flex-col gap-3 opacity-20 group-hover:opacity-100 transition-opacity duration-1000">
                  {[1,2,3].map(i => (
                    <div key={i} className="h-10 rounded-xl bg-background border border-border-custom p-3 flex items-center justify-between">
                      <div className="w-20 h-1.5 bg-white/10 rounded-full" />
                      <div className="w-4 h-4 rounded bg-accent/20" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VS SECTION: QUITTER LE MOYEN-AGE */}
      <section className="py-32 md:py-60 bg-zinc-950 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-20">
            <div className="flex-1">
              <h2 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-10 leading-[0.8] italic">
                Le dinosaure vs <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">Le futur.</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-center gap-6 p-6 md:p-8 rounded-[2.5rem] bg-white/5 border border-white/5 opacity-50">
                  <XCircle size={32} className="text-red-500 shrink-0" />
                  <p className="text-base md:text-lg font-bold text-white/50 italic leading-relaxed">"Ah désolé, j'en ai plus..." — La carte papier classique.</p>
                </div>
                <div className="flex items-center gap-6 p-6 md:p-8 rounded-[2.5rem] bg-accent/20 border border-accent/40 shadow-[0_0_50px_rgba(37,99,235,0.1)]">
                  <CheckCircle2 size={32} className="text-accent shrink-0" />
                  <p className="text-base md:text-lg font-black text-white italic leading-relaxed">"Approchez votre téléphone." — La révolution FlowCard.</p>
                </div>
              </div>
            </div>
            
            <div className="flex-1 relative h-[400px] md:h-[500px] flex items-center justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-[100px]" />
              <motion.div
                animate={{ rotateY: [0, 8, -8, 0], y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="w-[280px] h-[450px] md:w-[300px] md:h-[480px] bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[3rem] shadow-2xl p-10 flex flex-col items-center justify-between">
                   <div className="w-20 h-2 bg-white/10 rounded-full" />
                   <div className="w-full grow flex flex-col items-center justify-center gap-8">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-accent animate-pulse shadow-[0_0_50px_rgba(37,99,235,0.4)] flex items-center justify-center text-white">
                         <Zap size={40} />
                      </div>
                      <div className="space-y-3 w-full">
                         <div className="h-4 w-full bg-white/20 rounded-lg" />
                         <div className="h-4 w-2/3 bg-white/10 rounded-lg mx-auto" />
                      </div>
                   </div>
                   <div className="w-full py-4 bg-accent rounded-2xl text-[9px] font-black uppercase tracking-widest text-center text-white shadow-lg">Save Contact</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA SECTION */}
      <section className="py-40 bg-zinc-50 dark:bg-zinc-950 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.03)_0%,transparent_100%)] pointer-events-none" />
        
        <div className="container mx-auto px-8 relative z-10">
          <FadeIn>
            <h2 className="text-6xl md:text-[9rem] lg:text-[11.5rem] font-black tracking-tighter leading-[0.8] mb-16 text-foreground dark:text-white">
              Prêt pour la <br />
              <span className="text-accent underline decoration-accent/20 decoration-8 underline-offset-[20px]">Victoire ?</span>
            </h2>
            <p className="text-xl md:text-3xl text-text-muted font-medium max-w-2xl mx-auto mb-20 italic">
              Vos concurrents utilisent encore du papier. Prenez l'avantage technologique dès aujourd'hui.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <button className="px-12 md:px-16 py-6 md:py-8 bg-accent text-white rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.3em] shadow-2xl shadow-accent/40 hover:scale-110 active:scale-95 transition-all">
                Demander Une Démo Pro
              </button>
              <Link href="/" className="px-10 md:px-12 py-5 md:py-6 border border-border-custom rounded-full font-black text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-white/5 transition-all text-foreground dark:text-white">
                Retour à l'accueil
              </Link>
            </div>
            
            <div className="mt-40 pt-16 border-t border-border-custom opacity-20 flex flex-wrap justify-center gap-10 md:gap-20">
               {["Premium Material", "Eco-Friendly", "GDPR Certified", "Bank Level Security"].map(t => (
                 <span key={t} className="text-[10px] font-black uppercase tracking-widest">{t}</span>
               ))}
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}

