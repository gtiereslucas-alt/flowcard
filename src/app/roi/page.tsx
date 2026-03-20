"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import ROICalculator from "@/components/ROICalculator";
import { Hero3DBackground } from "@/components/ui/Hero3DBackground";
import { LineChart, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ROIPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* 1. HERO SECTION FOR ROI */}
      <Hero3DBackground>
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
            <FadeIn direction="up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold text-xs uppercase tracking-widest mb-8">
                    <LineChart size={16} /> Optimisation Business
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8 leading-[1.1]">
                    Calculez votre <br/>
                    <span className="bg-gradient-to-r from-accent to-accent-hover text-transparent bg-clip-text">ROI FlowCard.</span>
                </h1>
                <p className="text-xl text-text-muted mb-0 max-w-2xl mx-auto font-medium leading-relaxed">
                    Découvrez combien votre entreprise peut économiser en passant du papier au digital ultra-premium. 
                    Amortissement instantané, efficacité démultipliée.
                </p>
            </FadeIn>
        </div>
      </Hero3DBackground>

      {/* 2. THE CALCULATOR SECTION */}
      <section className="container mx-auto px-6 -mt-20 mb-32 relative z-[30]">
        <FadeIn delay={0.2}>
            <div className="bg-surface p-8 md:p-16 rounded-[3.5rem] border border-border-custom shadow-2xl relative overflow-hidden">
                {/* Subtle highlight */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                
                <ROICalculator />
            </div>
        </FadeIn>
      </section>

      {/* 3. WHY IT MATTERS SECTION */}
      <section className="container mx-auto px-8 py-20 border-t border-border-custom bg-surface/30">
        <div className="grid md:grid-cols-3 gap-12">
            <FadeIn delay={0.3} className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-4 border border-accent/20">
                    <CheckCircle2 size={24} />
                </div>
                <h3 className="text-2xl font-bold">Économie de Coûts</h3>
                <p className="text-text-muted leading-relaxed">Fini les impressions répétées de cartes de visite obsolètes. Une seule FlowCard dure des années.</p>
            </FadeIn>

            <FadeIn delay={0.4} className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-4 border border-accent/20">
                    <CheckCircle2 size={24} />
                </div>
                <h3 className="text-2xl font-bold">Zéro Perte de Leads</h3>
                <p className="text-text-muted leading-relaxed">Synchronisez instantanément vos rencontres dans votre CRM. Ne laissez plus un prospect s'évaporer.</p>
            </FadeIn>

            <FadeIn delay={0.5} className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-4 border border-accent/20">
                    <CheckCircle2 size={24} />
                </div>
                <h3 className="text-2xl font-bold">Gestion Flotte</h3>
                <p className="text-text-muted leading-relaxed">Mettez à jour les informations de toute votre équipe commerciale en un clic depuis le SaaS.</p>
            </FadeIn>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="container mx-auto px-6 py-32 text-center">
        <FadeIn>
            <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tight">Prêt à transformer votre networking ?</h2>
            <div className="flex flex-wrap justify-center gap-6">
                <Link href="/" className="btn btn-primary px-10 py-5 rounded-full text-lg font-bold flex items-center gap-2 shadow-xl hover:-translate-y-1 transition-all">
                    Commander mes cartes <ArrowRight size={22} />
                </Link>
                <Link href="/solution" className="btn btn-secondary px-10 py-5 rounded-full text-lg font-bold flex items-center gap-2 hover:bg-surface border border-border-custom transition-all">
                    Voir la solution
                </Link>
            </div>
        </FadeIn>
      </section>
    </div>
  );
}
