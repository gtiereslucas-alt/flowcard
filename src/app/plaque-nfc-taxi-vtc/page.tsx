"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { 
  Zap, 
  Car, 
  Star, 
  ArrowRight, 
  CheckCircle2, 
  Smartphone, 
  ShieldCheck, 
  HandCoins,
  CalendarCheck,
  MapPin,
  ExternalLink,
  SmartphoneIcon,
  Crown,
  Lock,
  Target,
  TrendingUp,
  Coins
} from "lucide-react";
import Link from "next/link";

export default function TaxiVTCPage() {
  const stats = [
    { val: "+45%", label: "D'avis 5*", desc: "Grâce au Tap-and-Review." },
    { val: "0€", label: "Commissions", desc: "Sur vos courses directes." },
    { val: "x3", label: "Pourboires", desc: "Digitalisés & sans friction." }
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-white selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
      {/* 1. ELITE CHAUFFEUR HERO */}
      <section className="relative pt-40 md:pt-60 pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] -z-10 animate-pulse" />
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
             <FadeIn className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 mb-12 shadow-2xl">
                   <Crown size={14} className="animate-bounce" />
                   <span className="text-[10px] font-black uppercase tracking-[0.5em]">Standard Elite Transport</span>
                </div>
                
                <h1 className="text-6xl md:text-[10.5rem] font-[950] tracking-tighter leading-[0.75] mb-16 uppercase italic">
                   DOMINEZ <br />
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-white">L'ALGORITHME.</span>
                </h1>
                
                <p className="text-xl md:text-4xl font-medium leading-[1.1] italic opacity-80 mb-20 text-white/90">
                  "Chaque client qui sort de votre voiture sans avoir scanné votre plaque est un chiffre d'affaires qui s'évapore. **Reprenez le pouvoir sur vos courses.**"
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-10 justify-center lg:justify-start">
                   <Link href="https://calendly.com/lucas-gomestieres-flowcard/30min" target="_blank" className="px-20 py-10 bg-blue-600 text-white rounded-full font-black text-xs uppercase tracking-[0.4em] shadow-[0_30px_100px_rgba(59,130,246,0.5)] hover:scale-105 active:scale-95 transition-all outline outline-white/10 outline-offset-8 group relative overflow-hidden">
                      <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      Digitaliser mon Cab
                   </Link>
                </div>
             </FadeIn>

             <FadeIn delay={0.2} className="flex-1 w-full max-w-[500px]">
                <div className="aspect-[4/5] bg-zinc-900/50 backdrop-blur-3xl border border-white/10 rounded-[5rem] overflow-hidden relative flex flex-col shadow-[0_60px_150px_-20px_rgba(0,0,0,1)] group">
                   <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none" />
                   <div className="p-16 flex-1 flex flex-col justify-center items-center text-center gap-12 group-hover:scale-105 transition-transform duration-1000">
                      <Smartphone size={180} strokeWidth={1} className="text-blue-500 opacity-20" />
                      <div className="space-y-4">
                         <div className="h-2 w-32 bg-blue-500/20 rounded-full mx-auto" />
                         <div className="h-2 w-20 bg-blue-500/10 rounded-full mx-auto" />
                      </div>
                      <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30">Plaque d'Autorité NFC</p>
                   </div>
                   <div className="p-10 bg-white/5 border-t border-white/10 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-blue-400 italic">
                      <span>Standard Limo</span>
                      <div className="flex gap-1">
                         {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="currentColor" />)}
                      </div>
                   </div>
                </div>
             </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. THE THREE REVENUE PILLARS: AGGRESSIVE EDITION */}
      <section className="py-32 md:py-60 bg-zinc-950">
        <div className="container mx-auto px-8 grid lg:grid-cols-3 gap-12 lg:gap-16">
           {[
             { 
               icon: <Target />, 
               title: "Explosion d'Avis 5*", 
               desc: "Si vos clients ne notent pas, votre ranking chute. Un tap sur la plaque et ils atterrissent sur votre Google My Business. Transformez la complaisance en une force algorithmique." 
             },
             { 
               icon: <Coins />, 
               title: "Pourboires Multi-Canaux", 
               desc: "Lydia, Revolut, Cash-App... Ne laissez plus le prétexte du 'pas de monnaie' freiner votre générosité. Le pourboire devient une intention immédiate, sans friction." 
             },
             { 
               icon: <Lock />, 
               title: "Divorce des Plateformes", 
               desc: "Uber et Bolt prennent 25%. Donnez votre lien direct de réservation. Encaissez 100% de la course et fidélisez vos clients pour leurs futurs transferts aéroport." 
             }
           ].map((feat, i) => (
             <FadeIn key={i} delay={i * 0.2}>
                <div className="p-12 rounded-[5rem] bg-[#0c0c0d] border border-white/5 hover:border-blue-500/40 transition-all group overflow-hidden relative shadow-2xl">
                   <div className="relative z-10 h-full flex flex-col">
                      <div className="w-20 h-20 rounded-[2rem] bg-zinc-900 flex items-center justify-center text-blue-500 mb-12 group-hover:scale-110 transition-transform duration-700 shadow-inner">
                         {feat.icon}
                      </div>
                      <h3 className="text-4xl font-[950] mb-8 italic tracking-tight leading-none uppercase">{feat.title}</h3>
                      <p className="text-lg text-white/30 font-medium italic leading-relaxed">{feat.desc}</p>
                   </div>
                </div>
             </FadeIn>
           ))}
        </div>
      </section>

      {/* 3. PERFORMANCE STATS: IMPACT TABLE */}
      <section className="py-40 bg-black relative">
        <div className="container mx-auto px-8">
           <div className="text-center mb-24">
              <FadeIn>
                 <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-10 italic uppercase">L'IMPACT EN CHIFFRES.</h2>
              </FadeIn>
           </div>
           
           <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {stats.map((stat, i) => (
                <div key={i} className="text-center p-12 rounded-[4rem] bg-white/[0.02] border border-white/5">
                   <div className="text-6xl md:text-9xl font-[950] text-blue-500 mb-4 italic tracking-tighter">{stat.val}</div>
                   <div className="text-xs font-black uppercase tracking-[0.4em] text-white italic mb-4">{stat.label}</div>
                   <p className="text-sm text-white/30 font-medium italic">{stat.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 4. THE FINANCIAL ANCHOR: ROBUST ARGUMENT */}
      <section className="py-40 bg-zinc-950 text-white relative overflow-hidden">
        <div className="container mx-auto px-8 relative z-10">
           <div className="grid lg:grid-cols-2 gap-24 items-center">
              <FadeIn direction="left">
                 <h2 className="text-6xl md:text-[9.5rem] font-black tracking-tighter mb-12 uppercase italic leading-[0.8]">
                    UNE SEULE <br/>
                    <span className="text-blue-500 underline decoration-white/10 underline-offset-[20px]">COURSE.</span>
                 </h2>
                 <p className="text-xl md:text-2xl text-white/40 font-medium italic mb-16 leading-relaxed">
                    Le coût d'une plaque FlowCard est amorti dès votre première course en direct sans commission de plateforme. <br/><br/>
                    Une seule réservation aéroport directe pays votre équipement pour l'année. **C'est l'investissement le plus rentable de votre carrière de chauffeur.**
                 </p>
                 
                 <div className="space-y-8">
                    {[
                      "Adieu la dépendance aux algorithmes.",
                      "Bonjour au carnet de clients propriétaires.",
                      "Amélioration drastique de votre ranking.",
                      "Matériau UV-Proof (ne jaunit jamais)."
                    ].map((text, i) => (
                      <div key={i} className="flex gap-6 items-center text-sm font-black uppercase tracking-widest text-white/60 italic">
                         <CheckCircle2 size={24} className="text-blue-500 shrink-0" /> {text}
                      </div>
                    ))}
                 </div>
              </FadeIn>
              
              <FadeIn direction="right">
                 <div className="relative aspect-square bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-[6rem] overflow-hidden group shadow-[0_100px_200px_-50px_rgba(59,130,246,0.2)]">
                    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-blue-500/5 to-transparent" />
                    <div className="flex flex-col items-center justify-center h-full p-20 gap-12">
                       <Car size={160} strokeWidth={1} className="text-blue-500 opacity-30 animate-pulse" />
                       <p className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-400">Connected Hub Experience</p>
                    </div>
                 </div>
              </FadeIn>
           </div>
        </div>
      </section>

      {/* 5. ULTIMATE CTA: SCALE YOUR FLEET */}
      <section className="py-40 md:py-80 text-center relative overflow-hidden bg-black">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160vw] h-[160vw] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_100%)] pointer-events-none" />
        
        <div className="container mx-auto px-8 relative z-10">
           <FadeIn>
              <h2 className="text-6xl md:text-[13rem] font-black tracking-tighter leading-[0.7] mb-16 text-white uppercase italic">
                 VOTRE CAB, <br />
                 <span className="text-blue-500 underline decoration-white/10 decoration-8 underline-offset-[20px]">VOTRE EMPIRE.</span>
              </h2>
              <p className="text-xl md:text-4xl text-white/40 font-medium max-w-4xl mx-auto mb-20 italic px-4">
                 Ne soyez plus un simple rouage des plateformes. Identité digitale, capture de leads et indépendance financière.
              </p>
              
              <div className="flex flex-col gap-16 items-center">
                 <Link href="https://calendly.com/lucas-gomestieres-flowcard/30min" target="_blank" className="px-24 py-12 bg-blue-600 text-white rounded-full font-black text-xs uppercase tracking-[0.4em] shadow-[0_30px_100px_rgba(59,130,246,0.6)] hover:scale-110 active:scale-95 transition-all outline outline-white/5 outline-offset-10 group relative">
                    <span className="relative z-10">Demander mon Audit VTC Elite</span>
                 </Link>
                 
                 <div className="flex flex-wrap justify-center gap-16 opacity-40">
                    <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-white">
                       <SmartphoneIcon size={20} className="text-blue-500" /> Compatible 100% Mobile
                    </div>
                    <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-white">
                       <MapPin size={20} className="text-blue-500" /> Géolocalisation Live
                    </div>
                    <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-white">
                       <TrendingUp size={20} className="text-blue-500" /> ROI Certifié
                    </div>
                 </div>
              </div>
           </FadeIn>
        </div>
      </section>

    </div>
  );
}
