"use client";

import React, { useState, useEffect } from "react";
import { FadeIn } from "./FadeIn";
import { ArrowRight, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const codeSnippets = [
  {
    title: "REST API",
    description: "Connectez FlowCard à n'importe quel CRM propriétaire de manière programmatique.",
    action: "Voir la doc API",
    color: "from-blue-500/20 to-blue-600/5",
    accent: "text-blue-400",
    border: "border-blue-500/20 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
    code: `const response = await fetch('/api/v1/leads', {
  method: 'POST',
  headers: { 'Authorization': 'Bearer ' + KEY },
  body: JSON.stringify({ tapId: 'FC-893' })
});`,
  },
  {
    title: "Webhooks Sécurisés",
    description: "Déclenchez des automatisations en temps réel à chaque scan de carte physique.",
    action: "Explorer les Webhooks",
    color: "from-purple-500/20 to-purple-600/5",
    accent: "text-purple-400",
    border: "border-purple-500/20 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
    code: `app.post('/webhook/tap', (req, res) => {
  const { prospect, nfc_tag } = req.body;
  
  // Instant sync to Salesforce
  Salesforce.createLead(prospect);
  res.status(200).send('Synced');
});`,
  },
  {
    title: "JavaScript SDK",
    description: "Intégrez le profil digital directement dans vos applications existantes sans friction.",
    action: "Découvrir le SDK",
    color: "from-emerald-500/20 to-emerald-600/5",
    accent: "text-emerald-400",
    border: "border-emerald-500/20 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    code: `import { FlowCard } from '@flowcard/sdk';

const profile = await FlowCard.init({
  theme: 'dark',
  features: ['lead_capture', 'vcard']
});

profile.render('#widget');`,
  }
];

const MiniCodePlayer = ({ code, accent }: { code: string, accent: string }) => {
  const [typing, setTyping] = useState("");
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTyping(code.slice(0, index));
      index++;
      if (index > code.length + 20) {
        setTimeout(() => { index = 0; setTyping(""); }, 3000); 
      }
    }, 40);
    return () => clearInterval(interval);
  }, [code]);

  return (
    <div className="w-full bg-[#0A0A0A] rounded-xl border border-border-custom p-4 h-40 overflow-hidden relative font-mono text-[10px] leading-relaxed shadow-inner">
      <div className="flex gap-1.5 mb-3 border-b border-border-custom pb-2">
        <div className="w-2 h-2 rounded-full bg-red-500/20" />
        <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
        <div className="w-2 h-2 rounded-full bg-green-500/20" />
      </div>
      <div className="text-text-muted whitespace-pre-wrap">
        {typing}
        <motion.span 
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-1.5 h-3 bg-white/50 ml-1 translate-y-[2px]"
        />
      </div>
      <div className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent`} />
    </div>
  );
};

export const CodeFeaturesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background dark:bg-[#050505] relative overflow-hidden border-t border-border-custom">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <FadeIn>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-text-muted mb-4 flex items-center justify-center gap-2">
              <Terminal size={14} className="text-text-muted" /> API & Developers
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-[-0.04em] text-foreground mb-6">
              Connectez tout en <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400 italic">quelques lignes.</span>
            </h2>
            <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto font-medium">
              FlowCard n'est pas qu'une simple carte. C'est une plateforme ouverte conçue pour s'interfacer avec l'écosystème logiciel de votre entreprise.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {codeSnippets.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div 
                className={`group h-full p-6 md:p-8 rounded-[2rem] bg-gradient-to-br bg-white/[0.02] backdrop-blur-xl border transition-all duration-500 flex flex-col ${item.border}`}
              >
                {/* Component Video Code */}
                <div className="mb-8 w-full group-hover:-translate-y-1 transition-transform duration-500">
                  <MiniCodePlayer code={item.code} accent={item.accent} />
                </div>
                
                <h3 className="text-2xl font-black text-foreground mb-4">{item.title}</h3>
                <p className="text-text-muted leading-relaxed font-medium mb-10 flex-1">
                  {item.description}
                </p>

                <div className="mt-auto pt-6 border-t border-zinc-200 dark:border-zinc-200 dark:border-border-custom">
                  <button className={`flex items-center gap-2 font-bold text-sm tracking-wide ${item.accent} group/btn`}>
                    {item.action} 
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
