"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import ROICalculator from "@/components/ROICalculator";
import { InteractiveChart } from "@/components/ui/InteractiveChart";
import { PulseMap } from "@/components/ui/PulseMap";
import { Counter } from "@/components/ui/Counter";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import { 
  LineChart, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Zap, 
  TreePalm,
  BarChart3,
  Target,
  Users
} from "lucide-react";
import Link from "next/link";

export default function ROIPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white relative overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-40 overflow-hidden">
        {/* Background Decorative Text */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.03, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-20 left-1/2 -translate-x-1/2 text-[25vw] font-black pointer-events-none select-none -z-10"
        >
          IMPACT
        </motion.div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-accent/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
        
        <div className="container mx-auto px-8 relative z-10">
          <FadeIn>
            <div className="flex justify-center mb-10">
              <span className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-accent font-black text-[10px] tracking-[0.4em] uppercase inline-flex items-center gap-3 shadow-2xl backdrop-blur-xl">
                <Target size={14} /> Intelligence Financière / 2026
              </span>
            </div>
            <h1 className="text-6xl md:text-[10rem] text-center mb-12 font-[900] tracking-tighter leading-[0.85] text-foreground">
              MESUREZ VOTRE <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-cyan-400 italic font-black">CROISSANCE.</span>
            </h1>
            <p className="text-xl md:text-3xl text-center text-text-muted max-w-3xl mx-auto mb-24 font-medium tracking-tight italic opacity-80">
              Découvrez comment la numérisation de vos forces de vente transforme chaque poignée de main en un actif financier mesurable.
            </p>
          </FadeIn>

          {/* VISUAL CHART SHOWCASE */}
          <FadeIn delay={0.3} className="max-w-6xl mx-auto p-1 px-1 bg-gradient-to-b from-white/10 to-transparent rounded-[4rem] shadow-2xl">
            <div className="bg-surface/80 backdrop-blur-3xl rounded-[3.9rem] p-10 md:p-16 border border-white/5">
              <div className="grid lg:grid-cols-3 gap-16 items-center">
                <div className="lg:col-span-2">
                  <div className="p-6 bg-background/50 rounded-3xl border border-white/5 shadow-inner">
                    <InteractiveChart />
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="p-10 rounded-[2.5rem] bg-background border border-border-custom group hover:border-accent/40 transition-all duration-500 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
                    <TrendingUp className="text-accent mb-6 group-hover:scale-110 transition-transform" size={40} />
                    <div className="text-5xl md:text-6xl font-[950] mb-3 tracking-tighter text-foreground">+<Counter value={124} />%</div>
                    <div className="text-xs font-black uppercase tracking-[0.2em] text-text-muted opacity-60">Taux de rétention Leads</div>
                  </div>
                  
                  <div className="p-10 rounded-[2.5rem] bg-background border border-border-custom group hover:border-accent/40 transition-all duration-500 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full blur-3xl" />
                    <Zap className="text-yellow-400 mb-6 group-hover:scale-110 transition-transform" size={40} />
                    <div className="text-5xl md:text-6xl font-[950] mb-3 tracking-tighter text-foreground">-<Counter value={85} />%</div>
                    <div className="text-xs font-black uppercase tracking-[0.2em] text-text-muted opacity-60">Temps de saisie CRM</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. THE CALCULATOR */}
      <section className="container mx-auto px-6 relative z-20 -mt-20 mb-40">
        <FadeIn delay={0.5}>
          <div className="bg-surface/50 backdrop-blur-3xl p-8 md:p-24 rounded-[4rem] border border-border-custom shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="max-w-4xl mx-auto">
               <div className="mb-20 text-center">
                  <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-foreground mb-6">
                    Simulateur de <span className="text-accent italic">Rentabilité.</span>
                  </h2>
                  <p className="text-lg md:text-xl text-text-muted font-medium opacity-80">
                    Ajustez les curseurs pour voir l'impact direct de FlowCard sur vos coûts opérationnels.
                  </p>
               </div>
               <ROICalculator />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 3. ENVIRONMENTAL IMPACT SECTION */}
      <section className="py-40 border-t border-border-custom relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <FadeIn direction="left">
               <div className="w-24 h-24 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 mb-10 shadow-2xl">
                  <TreePalm size={48} strokeWidth={1.5} />
               </div>
               <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-10 leading-[0.9] text-foreground">
                  Moins de 紙. <br/>
                  <span className="text-emerald-500 italic">Plus de Futur.</span>
               </h2>
               <p className="text-xl md:text-2xl text-text-muted leading-relaxed font-medium mb-12 italic opacity-80">
                  "En supprimant les cartes papier, une PME de 50 personnes sauve en moyenne 12 arbres et évite l'émission de 450kg de CO2 par an."
               </p>
               
               <div className="grid grid-cols-2 gap-12 pt-12 border-t border-border-custom">
                  <div className="space-y-2">
                    <div className="text-5xl font-[950] text-foreground">~0</div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted opacity-60">Impact Déchet Réel</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-5xl font-[950] text-foreground">100%</div>
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted opacity-60">Matériaux Recyclables</div>
                  </div>
               </div>
            </FadeIn>
            
            <FadeIn direction="right" className="relative">
               <div className="bg-surface rounded-[3.5rem] border border-border-custom p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="relative z-10">
                     <PulseMap />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-10 relative z-10">
                    {[
                      { icon: CheckCircle2, label: "RSE Compliant" },
                      { icon: BarChart3, label: "Eco Statistics" },
                      { icon: Users, label: "Team Awareness" },
                      { icon: Zap, label: "Zéro Papier" }
                    ].map((item, i) => (
                      <div key={i} className="bg-background/80 backdrop-blur-xl border border-border-custom rounded-2xl p-6 flex flex-col items-center gap-3 hover:border-emerald-500/30 transition-all shadow-sm">
                        <item.icon size={24} className="text-emerald-500" />
                        <span className="text-[9px] font-black uppercase tracking-widest text-text-muted">{item.label}</span>
                      </div>
                    ))}
                  </div>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="py-40 bg-zinc-950 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] h-[140vw] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05)_0%,transparent_100%)] pointer-events-none" />
        
        <div className="container mx-auto px-8 relative z-10">
          <FadeIn>
            <h2 className="text-6xl md:text-[9.5rem] font-black tracking-tighter leading-[0.8] mb-16 text-white">
              Prêt pour la <br />
              <span className="text-accent underline decoration-accent/20 decoration-8 underline-offset-[20px]">Performance ?</span>
            </h2>
            <p className="text-lg md:text-3xl text-white/60 font-medium max-w-2xl mx-auto mb-20 italic">
              Arrêtez de deviner votre ROI. Commencez à le piloter avec une précision chirurgicale.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link href="/tarifs" className="px-16 py-8 bg-accent text-white rounded-full font-black text-xs uppercase tracking-[0.3em] shadow-2xl shadow-accent/40 hover:scale-110 active:scale-95 transition-all">
                Démarrer Mon Essai
              </Link>
              <Link href="/solution" className="px-12 py-7 border border-white/10 text-white rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-white/5 transition-all">
                Voir la Technologie
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
