"use client";

import React from "react";
import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { Terminal, Database, ShieldCheck, Zap } from "lucide-react";

export const CodeSection = () => {
  const codeLines = [
    { text: "// Automate your Lead Generation", color: "text-slate-500" },
    { text: "const flowCard = new FlowConnect({", color: "text-blue-400" },
    { text: "  apiKey: process.env.FLOWCARD_TOKEN,", color: "text-white" },
    { text: "  autoSync: true,", color: "text-white" },
    { text: "  crm: 'Salesforce',", color: "text-white" },
    { text: "});", color: "text-blue-400" },
    { text: "", color: "" },
    { text: "// Triggered on NFC Tap", color: "text-slate-500" },
    { text: "flowCard.on('tap', (lead) => {", color: "text-purple-400" },
    { text: "  console.log(`New Lead: ${lead.name}`);", color: "text-white" },
    { text: "  lead.notifyTeam('#sales-leads');", color: "text-white" },
    { text: "});", color: "text-purple-400" },
  ];

  return (
    <section className="py-24 container mx-auto px-6 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* TEXT SIDE */}
        <FadeIn direction="left">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-[0.2em]">
                <Terminal size={16} /> API & Intégrations
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none">
              Connectez FlowCard à <br/> 
              <span className="text-accent underline decoration-accent/20 underline-offset-8">tout votre stack.</span>
            </h2>
            <p className="text-lg text-text-muted leading-relaxed font-medium">
              Notre plateforme ne se contente pas de stocker vos contacts. Elle les envoie là où vous travaillez : Salesforce, HubSpot, Slack ou via Webhooks personnalisés.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-4">
                <div className="flex flex-col gap-2">
                    <Database className="text-white" size={24} />
                    <span className="font-bold">Webhooks Temps Réel</span>
                </div>
                <div className="flex flex-col gap-2">
                    <ShieldCheck className="text-white" size={24} />
                    <span className="font-bold">Sécurité Enterprise</span>
                </div>
            </div>
          </div>
        </FadeIn>

        {/* CODE SIDE: Animated Terminal Wrapper */}
        <FadeIn direction="right">
          <div className="relative group">
            {/* Glow behind */}
            <div className="absolute -inset-2 bg-gradient-to-r from-accent to-purple-600 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            
            <div className="relative bg-[#0d1117] rounded-[1.5rem] p-8 border border-white/10 shadow-2xl font-mono text-sm leading-relaxed overflow-hidden">
                {/* Terminal Header */}
                <div className="flex gap-1.5 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    <span className="ml-4 text-[10px] text-slate-500 font-bold tracking-widest uppercase">FlowCard-SDK.js</span>
                </div>

                {/* Animated Code Lines */}
                <div className="flex flex-col gap-1">
                    {codeLines.map((line, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * idx }}
                            className={`${line.color} min-h-[1.25rem]`}
                        >
                            {line.text}
                        </motion.div>
                    ))}
                </div>

                {/* Blinking Cursor */}
                <motion.div 
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="w-2 h-4 bg-white/30 ml-0 mt-1"
                />
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};
