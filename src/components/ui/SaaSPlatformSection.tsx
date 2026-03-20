"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { 
  UserCircle, 
  Zap, 
  Database, 
  Smartphone, 
  MousePointer2,
  CheckCircle2,
  Globe,
  Settings,
  Monitor,
  Activity,
  ArrowUpRight,
  MapPin,
  Flame,
  Search,
  Plus,
  Lock,
  ShieldCheck,
  FileSearch
} from "lucide-react";

/**
 * FEATURE BUTTON COMPONENT - THEME AWARE
 */
const FeatureTab = ({ active, onClick, icon: Icon, label, desc, isDark }: any) => (
  <button
    onClick={onClick}
    className={`w-full group flex items-start gap-5 p-7 rounded-[2.5rem] transition-all duration-700 text-left border-2 ${
      active 
        ? "bg-accent/5 border-accent shadow-[0_20px_50px_-15px_rgba(37,99,235,0.15)] scale-[1.02]" 
        : `border-white/5 opacity-50 hover:opacity-100 ${isDark ? "bg-surface/30" : "bg-black/[0.03]"}`
    }`}
  >
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-700 shrink-0 ${
      active ? "bg-accent text-white shadow-xl shadow-accent/20" : "bg-white/5 text-text-muted"
    }`}>
      <Icon size={26} />
    </div>
    <div className="flex-1">
      <h4 className={`font-black text-xl mb-1.5 flex items-center gap-2 ${active ? (isDark ? "text-white" : "text-black") : "text-text-muted"}`}>
        {label}
      </h4>
      <p className="text-sm text-text-muted font-medium leading-relaxed">{desc}</p>
    </div>
  </button>
);

/**
 * ANALYTICS AREA CHART COMPONENT
 */
const AreaChart = () => (
  <svg viewBox="0 0 400 150" className="w-full h-full drop-shadow-2xl">
    <defs>
      <linearGradient id="gradientSaaS" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2563eb" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path
      d="M0,120 Q50,110 80,130 T150,80 T220,100 T300,40 T400,60 L400,150 L0,150 Z"
      fill="url(#gradientSaaS)"
    />
    <motion.path
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
      d="M0,120 Q50,110 80,130 T150,80 T220,100 T300,40 T400,60"
      fill="none"
      stroke="#2563eb"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <motion.circle cx="300" cy="40" r="4" fill="#2563eb" animate={{ r: [4, 7, 4] }} transition={{ repeat: Infinity, duration: 2 }} />
  </svg>
);

export const SaaSPlatformSection = () => {
  const [activeTab, setActiveTab] = useState("analytics");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => setIsDark(document.documentElement.classList.contains("dark"));
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`py-32 md:py-64 relative overflow-hidden transition-colors duration-700 ${isDark ? "bg-[#050505]" : "bg-white"}`}>
      {/* Structural Accent Lines */}
      <div className={`absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none opacity-20 ${!isDark && "invert opacity-[0.05]"}`} />
      
      <div className="container mx-auto px-6 relative z-10 text-center lg:text-left">
        
        {/* HEADER AREA */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-32 max-w-7xl mx-auto">
          <FadeIn className="max-w-3xl text-center lg:text-left">
            <div className={`inline-flex items-center gap-3 px-6 py-2 rounded-full border mb-10 ${isDark ? "bg-accent/10 border-accent/20 text-accent" : "bg-accent/5 border-accent/10 text-accent font-bold"}`}>
              <Monitor size={14} />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">FlowCard Suite Enterprise</span>
            </div>
            
            <h2 className={`text-6xl md:text-[8rem] font-black tracking-tighter leading-[0.8] mb-12 ${isDark ? "text-white" : "text-black"}`}>
              Pilotez votre <br />
              <span className={`opacity-40 ${isDark ? "text-white" : "text-black"}`}>Impact</span> <span className="text-accent italic">Réseau.</span>
            </h2>
            
            <p className="text-text-muted text-xl md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Une station de travail cloud unifiée. Prenez le contrôle total de vos rencontres, de la personnalisation à l'intégration CRM automatisée.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className={`hidden lg:flex gap-8 border-l pl-12 h-32 items-center ${isDark ? "border-white/10" : "border-black/10"}`}>
            <div className="text-center">
               <div className={`text-4xl font-black ${isDark ? "text-white" : "text-black"}`}>99%</div>
               <div className="text-[10px] text-text-muted font-bold uppercase tracking-widest mt-2">Délivrabilité CRM</div>
            </div>
            <div className="text-center">
               <div className={`text-4xl font-black text-accent`}>+150</div>
               <div className="text-[10px] text-text-muted font-bold uppercase tracking-widest mt-2">Intégrations Natives</div>
            </div>
          </FadeIn>
        </div>

        {/* MAIN WORKSTATION GRID */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-stretch max-w-7xl mx-auto">
          
          {/* LEFT COLUMN: NAVIGATION */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <FadeIn className="space-y-4">
              <FeatureTab 
                active={activeTab === 'analytics'} 
                onClick={() => setActiveTab('analytics')}
                icon={Activity}
                label="Analytics & Statistiques"
                desc="Intelligence prédictive et analytics de conversion. Mesurez le ROI exact de chaque rencontre."
                isDark={isDark}
              />
              <FeatureTab 
                active={activeTab === 'profile'} 
                onClick={() => setActiveTab('profile')}
                icon={UserCircle}
                label="Édition du Profil"
                desc="Modifiez votre carte et votre profil instantanément. Changez de matériaux ou de liens en un éclair."
                isDark={isDark}
              />
              <FeatureTab 
                active={activeTab === 'crm'} 
                onClick={() => setActiveTab('crm')}
                icon={Database}
                label="Automatisation CRM"
                desc="Leads qualifiés synchronisés vers HubSpot et Salesforce sans aucune saisie manuelle."
                isDark={isDark}
              />
            </FadeIn>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE WINDOW (Workstation stays dark for PRO feel) */}
          <div className="lg:col-span-8 relative min-h-[600px] lg:h-[750px]">
            <FadeIn delay={0.2} className="h-full">
               <div className="relative w-full h-full bg-[#0c0c0d] border border-white/10 rounded-[3rem] overflow-hidden shadow-[0_60px_100px_-20px_rgba(0,0,0,0.8)] flex flex-col">
                  {/* Window Bar */}
                  <div className="px-8 py-5 bg-white/5 border-b border-white/5 flex items-center justify-between">
                     <div className="flex gap-2 shrink-0">
                        <div className="w-3 h-3 rounded-full bg-red-400/20" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400/20" />
                        <div className="w-3 h-3 rounded-full bg-green-400/20" />
                     </div>
                     <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-black/40 border border-white/5 text-[9px] font-black text-white/40 uppercase tracking-[0.2em] overflow-hidden">
                        <Globe size={10} className="shrink-0" /> <span className="truncate">app.flowcard.com / {activeTab}</span>
                     </div>
                     <div className="flex items-center gap-4 shrink-0">
                        <Search size={14} className="text-white/20" />
                        <Settings size={14} className="text-white/20" />
                     </div>
                  </div>

                  {/* Window Content - ALWAYS DARK FOR PRO CONTRAST */}
                  <div className="flex-1 overflow-hidden relative bg-[#050505]">
                    <AnimatePresence mode="wait">
                      {activeTab === 'profile' && (
                        <motion.div 
                          key="profile"
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.02 }}
                          transition={{ duration: 0.5 }}
                          className="h-full flex flex-col md:grid md:grid-cols-2"
                        >
                          <div className="p-10 border-r border-white/5 bg-[#0a0a0b]/50 overflow-y-auto">
                             <div className="flex items-center justify-between mb-10">
                                <h5 className="text-lg font-black text-white">Personnalisation</h5>
                                <div className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-lg text-[9px] font-black text-accent uppercase tracking-widest leading-none">V-Matériaux v2</div>
                             </div>

                             <div className="space-y-10 text-white">
                                <div className="space-y-4">
                                   <label className="text-[10px] font-black uppercase text-white/40 tracking-widest">Matériau de la Carte</label>
                                   <div className="grid grid-cols-4 gap-3">
                                      <div className="aspect-square rounded-xl bg-[#1a1a1a] ring-2 ring-accent border-2 border-black cursor-pointer shadow-lg" />
                                      <div className="aspect-square rounded-xl bg-[#2a2a2a] opacity-30 cursor-pointer" />
                                      <div className="aspect-square rounded-xl bg-[#d4af37] opacity-30 cursor-pointer" />
                                      <div className="aspect-square rounded-xl bg-surface border border-white/10 flex items-center justify-center"><Plus size={16} className="text-white/20" /></div>
                                   </div>
                                </div>

                                <div className="space-y-4">
                                   <label className="text-[10px] font-black uppercase text-white/40 tracking-widest">Action par défaut</label>
                                   <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between group cursor-pointer hover:border-accent/40 transition-colors">
                                      <div className="flex items-center gap-3">
                                         <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent"><Smartphone size={14} /></div>
                                         <span className="text-xs font-bold text-white">Ajouter aux contacts</span>
                                      </div>
                                      <MousePointer2 size={12} className="text-accent" />
                                   </div>
                                </div>

                                <div className="pt-8 border-t border-white/5">
                                   <button className="w-full py-4 bg-accent hover:bg-blue-500 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-accent/20 transition-all active:scale-95 text-white">Mettre à jour ma carte</button>
                                </div>
                             </div>
                          </div>

                          <div className="relative flex flex-col items-center justify-center p-8 bg-black overflow-hidden">
                             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08)_0%,transparent_70%)]" />
                             
                             <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="relative group mb-12 z-10">
                                <div className="absolute -inset-10 bg-accent/20 rounded-full blur-[80px] opacity-30" />
                                <img 
                                  src="/premium_flowcard_black_gold_1774016622269.png" 
                                  alt="FlowCard Premium" 
                                  className="w-64 lg:w-80 h-auto rounded-[1.5rem] shadow-2xl transform-gpu -rotate-6 group-hover:rotate-0 transition-transform duration-1000" 
                                />
                                <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-black border border-white/20 rounded-full text-[9px] font-black text-white/50 uppercase tracking-widest backdrop-blur-xl">Physical Layer</div>
                             </motion.div>
                          </div>
                        </motion.div>
                      )}

                      {activeTab === 'crm' && (
                        <motion.div 
                          key="crm"
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.02 }}
                          className="h-full p-8 lg:p-12 flex flex-col overflow-y-auto"
                        >
                           <div className="grid grid-cols-12 gap-8 h-full">
                              <div className="col-span-12 lg:col-span-7 space-y-12">
                                 <div className="space-y-4">
                                    <h5 className="text-3xl font-black text-white italic underline decoration-accent decoration-4 underline-offset-8">CRM Sync Engine</h5>
                                    <p className="text-sm text-white/40 font-medium tracking-tight">Injection automatique des leads qualifiés.</p>
                                 </div>

                                 <div className="relative flex items-center justify-between gap-4 p-10 bg-[#0a0a0b] rounded-[2.5rem] border border-white/5 shadow-2xl">
                                    <div className="absolute top-1/2 left-10 right-10 h-[2px] bg-gradient-to-r from-accent via-accent to-emerald-500 -translate-y-1/2 opacity-20" />
                                    {[
                                      { icon: Zap, label: 'Capture', color: 'bg-accent' },
                                      { icon: Database, label: 'Enrich', color: 'bg-accent' },
                                      { icon: CheckCircle2, label: 'Sync', color: 'bg-emerald-500' }
                                    ].map((step, i) => (
                                      <div key={i} className="relative z-10 flex flex-col items-center gap-4">
                                         <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border-4 border-[#0c0c0d] shadow-2xl ${step.color} text-white`}>
                                            <step.icon size={28} />
                                         </div>
                                         <span className="text-[10px] font-black uppercase tracking-widest text-white/30">{step.label}</span>
                                      </div>
                                    ))}
                                 </div>

                                 <div className="grid grid-cols-3 gap-4">
                                    {[
                                      { name: 'HubSpot', color: 'text-orange-500' },
                                      { name: 'Salesforce', color: 'text-blue-500' },
                                      { name: 'Pipedrive', color: 'text-emerald-500' }
                                    ].map((crm, i) => (
                                      <div key={i} className="p-6 rounded-2xl bg-[#0a0a0b] border border-white/5 flex flex-col items-center gap-4 group hover:border-accent/40 transition-all duration-500">
                                         <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${crm.color}`}><Database size={24} /></div>
                                         <div className="text-xs font-black text-white">{crm.name}</div>
                                      </div>
                                    ))}
                                 </div>
                              </div>

                              <div className="col-span-12 lg:col-span-5 bg-[#0a0a0b] border border-white/5 rounded-[2.5rem] p-8 flex flex-col shadow-2xl">
                                 <div className="flex items-center justify-between mb-8">
                                    <span className="text-[10px] font-black text-white uppercase tracking-widest">Flux en Temps Réel</span>
                                    <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full">
                                       <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                       <span className="text-[8px] font-black text-emerald-500 uppercase tracking-widest">Live Flow</span>
                                    </div>
                                 </div>

                                 <div className="space-y-4">
                                    {[
                                      { name: 'Thomas D.', company: 'BMW France', score: '98' },
                                      { name: 'Sophie L.', company: 'Publicis', score: '85' },
                                      { name: 'Marc A.', company: 'LVMH', score: '92' },
                                      { name: 'Julie P.', company: 'TotalEnergies', score: '78' }
                                    ].map((lead, i) => (
                                      <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.1 }} key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between group hover:bg-white/10 transition-colors">
                                         <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[10px] font-black text-white/20 uppercase">{lead.name[0]}</div>
                                            <div>
                                               <div className="text-[10px] font-black text-white">{lead.name}</div>
                                               <div className="text-[8px] text-white/30 font-medium">{lead.company}</div>
                                            </div>
                                         </div>
                                         <div className="text-right"><div className="text-[9px] font-black text-accent uppercase tracking-tighter">{lead.score} pts</div></div>
                                      </motion.div>
                                    ))}
                                 </div>
                              </div>
                           </div>
                        </motion.div>
                      )}

                      {activeTab === 'analytics' && (
                        <motion.div 
                          key="analytics"
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.02 }}
                          className="h-full p-8 lg:p-12 flex flex-col overflow-y-auto"
                        >
                           <div className="flex justify-between items-end mb-12">
                              <div>
                                 <h5 className="text-4xl font-black text-white tracking-tighter mb-1 uppercase italic">Votre SaaS Perso</h5>
                                 <p className="text-sm text-white/40 font-medium">Monitoring prédictif activé.</p>
                              </div>
                              <div className="flex gap-2">
                                 <div className="px-5 py-2.5 bg-accent/20 border border-accent/20 rounded-xl text-[10px] font-black uppercase text-accent">Rapport Hebdo</div>
                              </div>
                           </div>

                           <div className="grid grid-cols-12 gap-6 grow">
                              <div className="col-span-12 lg:col-span-8 bg-[#0a0a0b] rounded-[2.5rem] border border-white/5 p-10 flex flex-col shadow-2xl">
                                 <div className="flex justify-between items-center mb-10">
                                    <div className="flex items-center gap-3">
                                       <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                                       <span className="text-[10px] font-black text-white uppercase tracking-widest">Volume d'Engagement</span>
                                    </div>
                                    <div className="flex gap-6">
                                       <div className="text-[10px] font-black text-white underline decoration-accent decoration-2 underline-offset-4">30 JOURS</div>
                                       <div className="text-[10px] font-bold text-white/30">ANNUEL</div>
                                    </div>
                                 </div>
                                 <div className="grow relative min-h-[200px]">
                                    <AreaChart />
                                 </div>
                              </div>

                              <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
                                 {[
                                   { label: 'Conversion', val: '24.8%', color: 'text-emerald-500', icon: Flame },
                                   { label: 'Hot Leads', val: '184', color: 'text-accent', icon: ArrowUpRight },
                                   { label: 'Top City', val: 'Paris', color: 'text-white', icon: MapPin }
                                 ].map((stat, i) => (
                                   <div key={i} className="flex-1 bg-[#0a0a0b] border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between group hover:border-white/10 transition-all shadow-2xl">
                                      <div className="flex justify-between items-start text-white/40">
                                         <span className="text-[10px] font-black uppercase tracking-widest group-hover:text-white transition-colors">{stat.label}</span>
                                         <stat.icon size={16} className={`${stat.color} group-hover:scale-110 transition-transform`} />
                                      </div>
                                      <div className={`text-4xl font-black ${stat.color}`}>{stat.val}</div>
                                   </div>
                                 ))}
                              </div>
                           </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
               </div>

               <div className="absolute -top-6 -right-6 px-6 py-4 bg-accent rounded-2xl text-[10px] font-black text-white uppercase tracking-widest shadow-2xl rotate-3 border-4 border-black z-30">Live Syncing</div>
               <div className="absolute -bottom-6 -left-6 px-6 py-4 bg-white rounded-2xl text-[10px] font-black text-black uppercase tracking-widest shadow-2xl -rotate-3 border-4 border-black z-30">B2B Optimized</div>
            </FadeIn>
          </div>
        </div>

        {/* SECURITY & COMPLIANCE FOOTER */}
        <FadeIn delay={0.4} className="mt-24 pt-12 border-t border-border-custom max-w-7xl mx-auto flex flex-wrap justify-center lg:justify-between items-center gap-10 opacity-60 hover:opacity-100 transition-opacity">
           <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDark ? "bg-white/5" : "bg-black/5"}`}><ShieldCheck size={20} className="text-accent" /></div>
              <div>
                 <div className={`text-[10px] font-black uppercase tracking-tighter ${isDark ? "text-white" : "text-black"}`}>Chiffrement Militaire</div>
                 <p className="text-[10px] font-medium text-text-muted">Sécurisé via AES-256 standard.</p>
              </div>
           </div>
           <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDark ? "bg-white/5" : "bg-black/5"}`}><Lock size={20} className="text-accent" /></div>
              <div>
                 <div className={`text-[10px] font-black uppercase tracking-tighter ${isDark ? "text-white" : "text-black"}`}>RGPD Compliant</div>
                 <p className="text-[10px] font-medium text-text-muted">Serveurs basés à Paris, France.</p>
              </div>
           </div>
           <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDark ? "bg-white/5" : "bg-black/5"}`}><FileSearch size={20} className="text-accent" /></div>
              <div>
                 <div className={`text-[10px] font-black uppercase tracking-tighter ${isDark ? "text-white" : "text-black"}`}>Audit de Sécurité</div>
                 <p className="text-[10px] font-medium text-text-muted">Certification ISO 27001 active.</p>
              </div>
           </div>
        </FadeIn>
      </div>
    </section>
  );
};
