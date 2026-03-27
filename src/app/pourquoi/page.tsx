"use client";

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import { 
  X, 
  Target, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  BarChart3,
  Dna,
  Infinity as InfinityIcon,
  Sparkles,
  PieChart,
  HardDrive,
  Cpu,
  Trophy,
  MousePointer2,
  ScanLine,
  Layers,
  FileText,
  Smartphone,
  Leaf,
  Briefcase,
  Globe2,
  Clock,
  TrendingDown,
  ChevronRight,
  ShieldAlert
} from "lucide-react";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

/**
 * COUNTING ANIMATION COMPONENT
 */
const Counter = ({ value, duration = 2, suffix = "", prefix = "" }: { value: number, duration?: number, suffix?: string, prefix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalFrames = duration * 60;
      let frame = 0;

      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = Math.floor(end * progress);
        setCount(currentCount);

        if (frame === totalFrames) {
          clearInterval(timer);
          setCount(end);
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
};

export default function PourquoiPage() {
  const containerRef = useRef(null);

  const financialStats = [
    {
      label: "Économie Print",
      val: 75,
      suffix: "%",
      desc: "Sur votre budget annuel de papeterie.",
      icon: <TrendingDown className="text-emerald-500" />
    },
    {
      label: "Gain Temps / Lead",
      val: 85,
      suffix: "%",
      desc: "Saisie CRM automatisée en 1 seconde.",
      icon: <Clock className="text-blue-500" />
    },
    {
      label: "Pipeline Augmenté",
      val: 37,
      suffix: "%",
      desc: "De leads capturés en plus lors d'événements.",
      icon: <TrendingUp className="text-accent" />
    },
    {
      label: "ROI Immédiat",
      val: 121,
      suffix: "%",
      desc: "Rentabilité moyenne constatée en 3 mois.",
      icon: <Zap className="text-orange-500" />
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white relative">
      
      {/* 1. DATA-DRIVEN HERO */}
      <section className="relative pt-40 md:pt-60 pb-32 overflow-hidden border-b border-border-custom">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[700px] bg-accent/5 rounded-full blur-[180px] -z-10" />
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
             <FadeIn className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-border-custom bg-surface/50 backdrop-blur-xl mb-12 shadow-2xl">
                   <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                   <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Performance Report 2026</span>
                </div>
                
                <h1 className="text-6xl md:text-[9rem] font-[950] tracking-tighter leading-[0.75] mb-12 text-foreground uppercase italic">
                   LE POUVOIR <br />
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-cyan-400">DU CHIFFRE.</span>
                </h1>
                
                <p className="text-xl md:text-3xl font-medium leading-tight italic opacity-70 mb-16 text-text-muted">
                   "Une FlowCard à 50€ qui protège 50k€ de pipeline commercial n'est pas chère. Elle est indispensable."
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-8 justify-center lg:justify-start">
                   <Link href="https://calendly.com/lucas-gomestieres-flowcard/30min" target="_blank" className="px-16 py-8 bg-accent text-white rounded-full font-black text-xs uppercase tracking-[0.3em] shadow-2xl shadow-accent/40 hover:scale-110 active:scale-95 transition-all">
                      Calculer mon ROI Corporate
                   </Link>
                </div>
             </FadeIn>

             <FadeIn delay={0.2} className="flex-1 w-full max-w-[500px]">
                <div className="bg-surface/50 border border-border-custom rounded-[4rem] p-12 shadow-2xl backdrop-blur-xl relative overflow-hidden group">
                   <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                   <div className="relative z-10 space-y-12">
                      <div>
                         <div className="text-7xl font-black text-foreground mb-2 italic">
                            <Counter value={5000} suffix="€" />
                         </div>
                         <p className="text-xs font-black uppercase tracking-widest text-text-muted opacity-40 italic">Coût moyen d'un lead perdu par omission</p>
                      </div>
                      <div className="h-[1px] w-full bg-border-custom" />
                      <div>
                         <div className="text-7xl font-black text-accent mb-2 italic">
                            <Counter value={100} suffix="%" />
                         </div>
                         <p className="text-xs font-black uppercase tracking-widest text-text-muted opacity-40 italic">Taux de capture FlowCard certifié</p>
                      </div>
                   </div>
                </div>
             </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. THE FINANCIAL REALITY GRID */}
      <section className="py-32 md:py-60 bg-surface/20">
         <div className="container mx-auto px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {financialStats.map((stat, idx) => (
                 <FadeIn key={idx} delay={idx * 0.1}>
                    <div className="p-12 rounded-[4rem] bg-background border border-border-custom hover:border-accent shadow-2xl transition-all duration-700 group h-full flex flex-col justify-between">
                       <div className="flex justify-between items-start mb-12">
                          <div className="w-16 h-16 rounded-2xl bg-surface flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-inner">
                             {stat.icon}
                          </div>
                          <ChevronRight size={24} className="text-zinc-500 group-hover:text-accent group-hover:translate-x-2 transition-all" />
                       </div>
                       
                       <div>
                          <div className="text-6xl font-[950] tracking-tighter mb-4 italic group-hover:text-accent transition-colors">
                             <Counter value={stat.val} suffix={stat.suffix} />
                          </div>
                          <h3 className="text-lg font-black uppercase tracking-widest text-foreground italic mb-4">{stat.label}</h3>
                          <p className="text-sm text-text-muted font-medium italic opacity-60 leading-relaxed">
                            {stat.desc}
                          </p>
                       </div>
                    </div>
                 </FadeIn>
               ))}
            </div>
         </div>
      </section>

      {/* 3. CONCISE STRATEGIC BLOCKS (THE "BENTO" OF FACTS) */}
      <section className="py-40 bg-zinc-950 text-white relative overflow-hidden">
        <div className="container mx-auto px-8 relative z-10">
           <div className="text-center mb-32">
              <FadeIn>
                 <h2 className="text-4xl md:text-8xl font-black tracking-tighter mb-8 italic">Stratégie & Souveraineté.</h2>
              </FadeIn>
           </div>
           
           <div className="grid lg:grid-cols-12 gap-8">
              {/* Turn-over Block */}
              <div className="lg:col-span-8 bg-white/5 border border-white/10 rounded-[4rem] p-16 flex flex-col md:flex-row gap-12 items-center hover:bg-white/[0.08] transition-all group">
                 <div className="w-64 h-64 bg-accent/20 rounded-full flex items-center justify-center shrink-0 border-8 border-white/5 shadow-2xl shadow-accent/20 group-hover:scale-105 transition-transform duration-700">
                    <ShieldAlert size={80} className="text-accent animate-pulse" />
                 </div>
                 <div className="flex-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-6 block">Le Pivot RH</span>
                    <h3 className="text-4xl font-black italic mb-6">Contrôle du Turn-over.</h3>
                    <p className="text-lg text-white/40 font-medium italic leading-relaxed">
                       Lorsqu'un commercial quitte l'entreprise, vous reprenez instantanément le contrôle de ses accès. Ses rendez-vous capturés restent la propriété de l'entreprise, pas de l'individu. **Souveraineté totale sur votre actif immatériel.**
                    </p>
                 </div>
              </div>

              {/* RSE Block */}
              <div className="lg:col-span-4 bg-emerald-500/10 border border-emerald-500/20 rounded-[4rem] p-12 flex flex-col justify-between hover:bg-emerald-500/[0.15] transition-all">
                 <Leaf size={40} className="text-emerald-500 mb-10" />
                 <div>
                    <h3 className="text-3xl font-black italic mb-4">Engagement RSE.</h3>
                    <p className="text-sm text-emerald-500/60 font-medium italic mb-10">
                       Réduisez votre empreinte carbone de 150kg/an par collaborateur. Une seule carte pour toute une carrière.
                    </p>
                    <div className="text-4xl font-black text-emerald-500 italic">-12,000L d'eau</div>
                    <div className="text-[10px] uppercase font-black tracking-widest text-emerald-500/40">Économisés / 100 emp. / an</div>
                 </div>
              </div>

              {/* CRM Block */}
              <div className="lg:col-span-4 bg-blue-500/10 border border-blue-500/20 rounded-[4rem] p-12 flex flex-col justify-between hover:bg-blue-500/[0.15] transition-all group">
                 <Dna size={40} className="text-blue-400 mb-10 group-hover:rotate-180 transition-transform duration-1000" />
                 <div>
                    <h3 className="text-3xl font-black italic mb-4">Sync Native.</h3>
                    <p className="text-sm text-blue-400/60 font-medium italic mb-10">Intégration instantanée vers HubSpot, Salesforce & Pipedrive.</p>
                    <div className="text-4xl font-black text-blue-400 italic">100% Data Auto</div>
                 </div>
              </div>

              {/* PLV Block */}
              <div className="lg:col-span-8 bg-white/5 border border-white/10 rounded-[4rem] p-16 flex flex-col md:flex-row gap-12 items-center hover:bg-white/[0.08] transition-all">
                 <div className="flex-1 order-2 md:order-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-6 block">Omnicanalité</span>
                    <h3 className="text-4xl font-black italic mb-6">Hub de Communication.</h3>
                    <p className="text-lg text-white/40 font-medium italic leading-relaxed">
                       Remplacez vos flyers et brochures papier par des portails dynamiques. Mettez à jour vos catalogues instantanément dans le monde entier sans jamais ré-imprimer.
                    </p>
                 </div>
                 <div className="w-48 h-48 bg-white/5 rounded-[2.5rem] flex items-center justify-center shrink-0 order-1 md:order-2">
                    <Layers size={64} className="text-white/20" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. PREMIUM CRAFTSMANSHIP (QUICK FACTS) */}
      <section className="py-40 bg-background overflow-hidden">
         <div className="container mx-auto px-8">
            <div className="flex flex-col lg:flex-row gap-24 items-center">
               <div className="flex-1 text-center lg:text-left">
                  <FadeIn>
                     <h2 className="text-6xl md:text-[8rem] font-[950] tracking-tighter leading-none mb-10 italic">L'INGÉNIERIE <br/> <span className="text-accent underline decoration-accent/10 underline-offset-[20px]">SANS COMPROMIS.</span></h2>
                     <p className="text-xl md:text-2xl text-text-muted font-medium italic opacity-60 max-w-2xl leading-relaxed mb-20">
                        Puces NXP Ntag213 certifiées. Antenne cuivre Hi-Freq. Finition UV Ultra-Hard. Nous ne vendons pas du plastique, nous vendons de la fiabilité.
                     </p>
                     
                     <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {[
                          { val: "NXP", label: "Chip Premium" },
                          { val: "256", label: "AES Encryption" },
                          { val: "48h", label: "Setup Express" },
                          { val: "∞", label: "Mises à jour" }
                        ].map((fact, i) => (
                          <div key={i} className="text-center p-8 rounded-3xl bg-surface border border-border-custom group hover:border-accent transition-all">
                             <div className="text-3xl font-[950] italic mb-1 group-hover:text-accent transition-colors">{fact.val}</div>
                             <div className="text-[9px] font-black uppercase tracking-widest text-text-muted opacity-40">{fact.label}</div>
                          </div>
                        ))}
                     </div>
                  </FadeIn>
               </div>
               
               <div className="flex-1 relative w-full aspect-square max-w-[500px]">
                  <div className="absolute inset-0 bg-accent/20 rounded-[5rem] blur-[120px] animate-pulse" />
                  <div className="relative w-full h-full bg-zinc-900 border border-white/10 rounded-[5rem] overflow-hidden flex items-center justify-center shadow-2xl">
                     <Smartphone size={180} strokeWidth={1} className="text-white/10 animate-pulse" />
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent/20 rounded-full blur-3xl opacity-50" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 5. THE ULTIMATE CTA: DECISION MAKER ONLY */}
      <section className="py-40 md:py-80 text-center bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.06)_0%,transparent_100%)] pointer-events-none" />
        
        <FadeIn className="container mx-auto px-8 relative z-10">
           <h2 className="text-6xl md:text-[11.5rem] font-black tracking-tighter leading-[0.8] mb-16 text-white uppercase italic">
              ZÉRO DOUTE. <br />
              <span className="text-accent underline decoration-white/10 decoration-8 underline-offset-[20px]">ZÉRO PAPIER.</span>
           </h2>
           <p className="text-xl md:text-4xl text-white/40 font-medium max-w-4xl mx-auto mb-20 italic">
              Rejoignez les 500+ entreprises qui ont déjà transformé leur budget "déchet papier" en "actif stratégique".
           </p>
           
           <div className="flex flex-col gap-12 items-center">
              <Link href="https://calendly.com/lucas-gomestieres-flowcard/30min" target="_blank" className="relative px-20 py-10 bg-accent text-white rounded-full font-black text-xs uppercase tracking-[0.4em] shadow-[0_30px_100px_rgba(37,99,235,0.5)] hover:scale-110 active:scale-95 transition-all overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                 Lancer mon Audit Corporate
              </Link>
           </div>
        </FadeIn>
      </section>

    </div>
  );
}
