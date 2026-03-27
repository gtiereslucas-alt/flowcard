"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { 
  Zap, 
  Dumbbell, 
  UserPlus, 
  ArrowRight, 
  CheckCircle2, 
  Smartphone, 
  Flame, 
  Droplets,
  Calendar,
  Share2,
  Instagram,
  FileText
} from "lucide-react";
import Link from "next/link";

export default function CoachSportifPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500 selection:text-white overflow-x-hidden">
      
      {/* 1. ATHLETIC HERO */}
      <section className="relative pt-40 md:pt-60 pb-32 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="container mx-auto px-8 relative z-10">
          <FadeIn>
             <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-500 mb-12 shadow-2xl">
                <Dumbbell size={16} />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Secteur Performance & Coaching</span>
              </div>
              
              <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter leading-[0.8] mb-16 uppercase italic">
                 VOTRE PROFIL <br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">AU POIGNET.</span>
              </h1>
              
              <p className="text-xl md:text-4xl font-medium max-w-4xl leading-tight italic opacity-60 mb-16">
                "Plus de cartes papier qui s'abîment dans le sac de sport. Un simple 'tap' de votre bracelet FlowCard et vos clients ont accès à votre planning, vos programmes et vos réseaux."
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-10">
                 <Link href="https://calendly.com/lucas-gomestieres-flowcard/30min" target="_blank" className="px-16 py-8 bg-orange-500 text-white rounded-full font-black text-xs uppercase tracking-[0.3em] shadow-[0_20px_100px_rgba(249,115,22,0.4)] hover:scale-105 active:scale-95 transition-all">
                    Commander mon Bracelet Coach
                 </Link>
                 <div className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] text-white/40 italic">
                    <CheckCircle2 size={18} className="text-orange-500" /> 100% Étanche (IP68)
                 </div>
              </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. SPECIFIC BENEFITS FOR COACHES */}
      <section className="py-32 md:py-60 bg-zinc-950">
        <div className="container mx-auto px-8 grid md:grid-cols-3 gap-12">
           {[
             { 
               icon: <Zap />, 
               title: "Partage Instantané", 
               desc: "Pendant l'entraînement, pas besoin de votre téléphone. Donnez votre contact ou programme d'un simple geste." 
             },
             { 
               icon: <Droplets />, 
               title: "Résistance Extrême", 
               desc: "Conçu en silicone soft-touch, le bracelet résiste à la transpiration, au chlore et à l'usage intensif." 
             },
             { 
               icon: <Calendar />, 
               title: "Booking Automatisé", 
               desc: "Liez votre Calendly ou outil de réservation. Vos prospects réservent leur séance d'essai en 5 secondes." 
             }
           ].map((feat, i) => (
             <FadeIn key={i} delay={i * 0.2}>
                <div className="p-12 rounded-[4rem] bg-white/5 border border-white/10 hover:border-orange-500/40 transition-all group">
                   <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center text-white mb-10 group-hover:scale-110 transition-transform duration-500">
                      {feat.icon}
                   </div>
                   <h3 className="text-3xl font-black mb-6 italic">{feat.title}</h3>
                   <p className="text-lg text-white/40 font-medium italic leading-relaxed">{feat.desc}</p>
                </div>
             </FadeIn>
           ))}
        </div>
      </section>

      {/* 3. THE "SOCIAL HUB" PREVIEW */}
      <section className="py-40 bg-black relative overflow-hidden">
        <div className="container mx-auto px-8">
           <div className="grid lg:grid-cols-2 gap-24 items-center">
              <FadeIn direction="left">
                 <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-12 uppercase italic leading-[0.8]">
                    Abonnez vos <br/>
                    <span className="text-orange-500">futurs clients.</span>
                 </h2>
                 <p className="text-xl text-white/40 font-medium italic mb-12 leading-relaxed">
                    Votre bracelet FlowCard redirige vers votre profil digital personnalisé. Affichez votre Transformation Avant/Après, vos liens Instagram, TikTok et vos tarifs de coaching.
                 </p>
                 
                 <div className="space-y-6">
                    {[
                      { icon: <Instagram size={18} />, label: "Instagram & TikTok Sync" },
                      { icon: <FileText size={18} />, label: "Programmes PDF interactifs" },
                      { icon: <Share2 size={18} />, label: "Formulaires de capture Leads" }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 items-center text-sm font-black uppercase tracking-widest text-white/60">
                         <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">{item.icon}</div>
                         {item.label}
                      </div>
                    ))}
                 </div>
              </FadeIn>
              
              <FadeIn direction="right">
                 <div className="relative aspect-[4/5] bg-zinc-900 border border-white/10 rounded-[5rem] overflow-hidden flex items-center justify-center shadow-2xl group">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent pointer-events-none" />
                    <Smartphone size={160} strokeWidth={1} className="text-white/10 group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute bottom-12 px-8 py-4 bg-orange-500 rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl">Digital Hub Preview</div>
                 </div>
              </FadeIn>
           </div>
        </div>
      </section>

      {/* 4. PRICING REDHOC (Niche specific) */}
      <section className="py-40 text-center bg-zinc-950 border-t border-white/5">
        <div className="container mx-auto px-8">
           <FadeIn>
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-16 italic uppercase">L'équipement Pro.</h2>
              <div className="max-w-xl mx-auto p-12 rounded-[4rem] bg-white/5 border border-white/10 relative group hover:border-orange-500/40 transition-all">
                 <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-orange-500 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl">Offre Lancement</div>
                 <div className="text-6xl font-black text-white mb-4 italic">Sur Devis.</div>
                 <p className="text-sm font-medium text-white/40 mb-10 italic">Inclus le bracelet gravé + l'abonnement SaaS à vie pour votre profil coach.</p>
                 <Link href="https://calendly.com/lucas-gomestieres-flowcard/30min" target="_blank" className="block w-full py-6 bg-white text-black rounded-full font-black text-xs uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all">
                    Demander mon Offre Coach
                 </Link>
              </div>
           </FadeIn>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="py-40 md:py-80 text-center relative overflow-hidden bg-black">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.08)_0%,transparent_100%)] pointer-events-none" />
        
        <div className="container mx-auto px-8 relative z-10">
           <FadeIn>
              <h2 className="text-6xl md:text-[10rem] font-black tracking-tighter leading-[0.8] mb-16 text-white uppercase italic">
                 DÉPASSEZ VOS <br />
                 <span className="text-orange-500 underline decoration-white/10 decoration-8 underline-offset-[20px]">LIMITES.</span>
              </h2>
              <p className="text-xl md:text-3xl text-white/40 font-medium max-w-4xl mx-auto mb-20 italic">
                 Le networking pour coachs n'a jamais été aussi simple. Portez votre succès.
              </p>
              
              <Link href="https://calendly.com/lucas-gomestieres-flowcard/30min" target="_blank" className="px-20 py-10 bg-orange-500 text-white rounded-full font-black text-xs uppercase tracking-[0.3em] shadow-[0_30px_100px_rgba(249,115,22,0.5)] hover:scale-105 active:scale-95 transition-all outline outline-white/5 outline-offset-8">
                 Demander une Démo Interactive
              </Link>
           </FadeIn>
        </div>
      </section>

    </div>
  );
}
