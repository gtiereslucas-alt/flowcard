"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Target, Briefcase, Zap, TrendingUp, BarChart, FileCheck, Mail, ArrowRight, MousePointer2 } from "lucide-react";
import Link from "next/link";

export default function ROICalculator() {
  // --- BUSINESS INPUTS ---
  const [employees, setEmployees] = useState(10);
  const [meetingsPerWeek, setMeetingsPerWeek] = useState(5);
  const [meetingToLeadRate, setMeetingToLeadRate] = useState(25); // % of meetings that become leads
  const [avgDealValue, setAvgDealValue] = useState(5000); // 5000€ avg revenue per deal
  const [closeRate, setCloseRate] = useState(20); // 20% lead to close rate

  // --- CALCULATIONS (THE SALES PITCH) ---
  const calculations = useMemo(() => {
    // 1. LEAD VOLUME (Current vs FlowCard)
    const annualMeetings = employees * meetingsPerWeek * 48; // 48 weeks
    const manualLeads = annualMeetings * (meetingToLeadRate / 100);
    
    // IMPACT: FlowCard automation increases conversion by 30% (less loss)
    const automationBoost = 1.3; 
    const automatedLeads = Math.floor(manualLeads * automationBoost);
    const extraLeads = automatedLeads - manualLeads;

    // 2. REVENUE IMPACT
    const revenueManual = manualLeads * (closeRate / 100) * avgDealValue;
    const revenueFlowCard = automatedLeads * (closeRate / 100) * avgDealValue;
    const revenueGain = revenueFlowCard - revenueManual;

    // 3. EFFICIENCY (Time saved)
    // 10 mins saved per lead entry
    const hoursSaved = (automatedLeads * 10) / 60;
    const salaryCost = 45; // 45€ / hour avg staff cost
    const productivityGain = hoursSaved * salaryCost;

    return {
      extraLeads,
      revenueGain,
      productivityGain,
      totalImpact: revenueGain + productivityGain,
      extraDeals: Math.floor(extraLeads * (closeRate / 100))
    };
  }, [employees, meetingsPerWeek, meetingToLeadRate, avgDealValue, closeRate]);

  return (
    <div className="w-full flex flex-col gap-12">
      
      {/* HEADER: Focus on Revenue, not Costs */}
      <div className="text-center md:text-left flex flex-col gap-4 border-b border-border-custom pb-12 mb-4">
          <h2 className="text-4xl md:text-6xl font-[950] tracking-tighter leading-[0.9] italic">ARRÊTEZ L'HÉMORRAGIE <br /> DE LEADS.</h2>
          <p className="text-xl text-text-muted font-medium opacity-70 italic max-w-xl line-clamp-2 italic">Convertissez le CA dormant que vous laissez aujourd'hui sur la table par manque de suivi.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        
        {/* LEFT: Business Metrics */}
        <div className="flex flex-col gap-10">
            {/* Staff Size */}
            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <label className="text-sm font-black uppercase tracking-widest text-accent flex items-center gap-2">
                        <Users size={16} /> Équipe commerciale
                    </label>
                    <span className="text-xl font-black">{employees}</span>
                </div>
                <input 
                    type="range" min="1" max="100" value={employees} 
                    onChange={(e) => setEmployees(parseInt(e.target.value))}
                    className="w-full accent-accent h-2 bg-accent/10 rounded-lg cursor-pointer"
                />
            </div>

            {/* Intensity */}
            <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                    <label className="text-xs font-black uppercase tracking-widest text-text-muted flex items-center gap-2">
                        <Briefcase size={14} /> RDV / Semaine / Pers.
                    </label>
                    <input 
                        type="number" value={meetingsPerWeek} 
                        onChange={(e) => setMeetingsPerWeek(parseInt(e.target.value))}
                        className="bg-background/50 border border-border-custom px-4 py-3 rounded-xl font-bold focus:border-accent outline-none"
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <label className="text-xs font-black uppercase tracking-widest text-text-muted flex items-center gap-2">
                        <TrendingUp size={14} /> Taux Conversion RDV (%)
                    </label>
                    <input 
                        type="number" value={meetingToLeadRate} 
                        onChange={(e) => setMeetingToLeadRate(parseInt(e.target.value))}
                        className="bg-background/50 border border-border-custom px-4 py-3 rounded-xl font-bold focus:border-accent outline-none"
                    />
                </div>
            </div>

            {/* Deal Value */}
            <div className="flex flex-col gap-3">
                <label className="text-xs font-black uppercase tracking-widest text-text-muted flex items-center gap-2">
                    <Target size={14} /> Panier Moyen (€ / Deal)
                </label>
                <div className="relative">
                    <input 
                        type="number" value={avgDealValue} 
                        onChange={(e) => setAvgDealValue(parseInt(e.target.value))}
                        className="w-full bg-background/50 border border-border-custom px-4 py-4 rounded-xl font-black text-xl focus:border-accent outline-none"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 font-black text-accent text-sm">EUR</span>
                </div>
            </div>
        </div>

        {/* RIGHT: Revenue Projection (The Closing Tool) */}
        <div className="relative group">
            {/* Glass Container */}
            <div className="h-full bg-gradient-to-br from-accent/15 to-transparent border border-accent/20 rounded-[3rem] p-10 flex flex-col gap-8 shadow-2xl backdrop-blur-sm overflow-hidden">
                
                <div className="absolute top-0 right-0 p-10 opacity-[0.1] rotate-12 group-hover:rotate-0 transition-transform duration-700">
                    <Zap size={120} className="text-accent" />
                </div>

                <div className="flex flex-col gap-1 relative z-10">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">CA Additionnel annuel estimé</span>
                    <motion.h2 
                        key={calculations.revenueGain}
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white"
                    >
                        +{Math.floor(calculations.revenueGain / 1000)}k€
                    </motion.h2>
                </div>

                <div className="grid gap-6 mt-4 relative z-10">
                    <div className="flex items-center gap-5 bg-black/40 p-5 rounded-3xl border border-white/5">
                        <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center text-green-500 shadow-inner">
                            <Zap size={24} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-black text-white">+{calculations.extraDeals} Deals</span>
                            <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Gagnés par an via l'IA FlowCard</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 bg-black/40 p-5 rounded-3xl border border-white/5">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-500 shadow-inner">
                            <BarChart size={24} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-black text-white">{Math.floor(calculations.productivityGain)}€</span>
                            <span className="text-xs font-bold text-white/40 uppercase tracking-widest">Valeur temps commercial économisé</span>
                        </div>
                    </div>
                </div>

                <div className="mt-auto flex flex-col gap-4 relative z-10">
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                           initial={{ width: 0 }} animate={{ width: "100%" }}
                           transition={{ duration: 2, ease: "easeOut" }}
                           className="h-full bg-gradient-to-r from-accent to-blue-400" 
                        />
                    </div>
                    <p className="text-[10px] font-bold text-white/30 uppercase text-center tracking-widest">Prédictions basées sur un gain d'efficacité de 30%</p>
                </div>
            </div>
        </div>
      </div>

      {/* CALL TO ACTIONS */}
      <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 pt-10 border-t border-border-custom">
          <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                  {[1,2,3].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-surface bg-accent/20 flex items-center justify-center text-[10px] font-black">{i}</div>)}
              </div>
              <p className="text-sm font-bold max-w-[200px] leading-tight text-text-muted italic">"Notre équipe a augmenté son Pipe commercial de 22% en un trimestre."</p>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
              <button className="bg-surface border border-accent/30 text-accent font-black px-8 py-4 rounded-2xl hover:bg-accent/10 transition-all flex items-center gap-2 group">
                  <FileCheck size={20} /> Rapport ROI Complet (PDF)
              </button>
              <Link href="https://calendly.com/lucas-gomestieres-flowcard/30min" target="_blank" rel="noopener noreferrer" className="bg-foreground text-background font-black px-10 py-5 rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_-10px_rgba(255,255,255,0.1)] flex items-center gap-3 group">
                  Réserver ma consultation stratégique <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </Link>
          </div>
      </div>

    </div>
  );
}
