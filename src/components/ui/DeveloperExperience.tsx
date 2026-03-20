"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { Terminal, Cpu, Cloud, Code2, Copy, Check } from "lucide-react";

const codeSteps = [
  {
    title: "Initialisation",
    desc: "Déployez FlowCard en 3 lignes de React.",
    code: `import { FlowProvider } from '@flowcard/react';

function App() {
  return (
    <FlowProvider teamId="TEAM_001">
      <CRMIntegration />
    </FlowProvider>
  );
}`
  },
  {
    title: "Capture en Temps Réel",
    desc: "Écoutez les taps NFC et automatisez vos actions.",
    code: `const onTap = async (contact) => {
  // Capture logic with built-in IA
  await flow.syncToHubspot(contact);
  
  toast.success('Lead Captured!');
};`
  },
  {
    title: "Webhooks & Sync",
    desc: "Envoyez les data vers votre infrastructure propre.",
    code: `export default async function handler(req, res) {
  const { event, lead } = req.body;
  
  if (event === 'nfc_tap_business') {
    await db.prospects.insert(lead);
  }
}`
  }
];

export const DeveloperExperience = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSteps[activeStep].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-40 bg-[#020617] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* LEFT: Text & Stepper */}
            <div className="flex flex-col gap-10">
                <FadeIn>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-xs uppercase tracking-widest mb-4">
                        <Cpu size={16} /> Bâtir sur FlowCard
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8">
                        L'API pour <br/> <span className="text-blue-500 italic">l'Elite.</span>
                    </h2>
                    <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-lg">
                        Nous avons construit FlowCard comme une brique de votre infrastructure. Une flexibilité totale pour vos développeurs.
                    </p>
                </FadeIn>

                <div className="flex flex-col gap-4">
                    {codeSteps.map((step, idx) => (
                        <button 
                            key={idx}
                            onClick={() => setActiveStep(idx)}
                            className={`flex items-start gap-6 p-6 rounded-3xl transition-all duration-500 text-left border ${activeStep === idx ? 'bg-white/5 border-white/10 shadow-2xl scale-105' : 'border-transparent opacity-40 hover:opacity-100'}`}
                        >
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeStep === idx ? 'bg-blue-500 text-white' : 'bg-white/10 text-white'}`}>
                                <Code2 size={20} />
                            </div>
                            <div>
                                <h4 className="font-black text-lg text-white mb-1">{step.title}</h4>
                                <p className="text-sm text-slate-400 font-medium">{step.desc}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* RIGHT: The Editor Showcase */}
            <FadeIn direction="right">
                <div className="relative">
                    {/* Shadow Decor */}
                    <div className="absolute -inset-10 bg-blue-500/20 rounded-full blur-[120px]" />
                    
                    <div className="relative bg-[#0d1117] rounded-[2rem] border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden">
                        {/* IDE Header */}
                        <div className="flex items-center justify-between px-6 py-4 bg-[#161b22] border-b border-white/5">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                <Cloud size={12} /> Sync_Hubspot.tsx
                            </div>
                            <button onClick={copyToClipboard} className="text-slate-500 hover:text-white transition-colors">
                                {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                            </button>
                        </div>

                        {/* Code Display */}
                        <div className="p-10 font-mono text-[14px] leading-relaxed relative min-h-[350px]">
                            <AnimatePresence mode="wait">
                                <motion.pre 
                                    key={activeStep}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="whitespace-pre-wrap"
                                >
                                    {codeSteps[activeStep].code.split('\n').map((line, i) => (
                                        <div key={i} className="flex gap-6">
                                            <span className="text-slate-700 w-4 text-right select-none">{i + 1}</span>
                                            <span className="text-slate-300">{line}</span>
                                        </div>
                                    ))}
                                </motion.pre>
                            </AnimatePresence>
                        </div>

                        {/* Status Bar */}
                        <div className="px-6 py-2 bg-[#161b22] border-t border-white/5 flex justify-between items-center text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                            <span>Ln: {codeSteps[activeStep].code.split('\n').length}, Col: 12</span>
                            <span className="text-blue-400">TypeScript</span>
                        </div>
                    </div>
                </div>
            </FadeIn>

        </div>
      </div>
    </section>
  );
};
