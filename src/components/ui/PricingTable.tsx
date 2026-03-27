"use client";

import React from "react";
import { Check, Minus } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { name: "Profils digitaux", solo: "1", team: "10", enterprise: "Illimité" },
  { name: "Cartes NFC incluses", solo: "1", team: "10 (Logo incl.)", enterprise: "Sur mesure" },
  { name: "QR Code Dynamique", solo: true, team: true, enterprise: true },
  { name: "Analytics avancés", solo: false, team: true, enterprise: true },
  { name: "Gestion centralisée (SaaS)", solo: false, team: true, enterprise: true },
  { name: "Intégrations CRM", solo: false, team: "Standards", enterprise: "Custom API & SSO" },
  { name: "Support Prioritaire", solo: false, team: false, enterprise: true },
  { name: "Accompagnement Design", solo: false, team: false, enterprise: true },
];

export const PricingTable = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-[600px]">
        <thead>
          <tr className="border-b border-border-custom">
            <th className="py-8 px-6 text-sm font-black uppercase tracking-widest text-text-muted">Fonctionnalités</th>
            <th className="py-8 px-6 text-lg font-black text-center">Solo</th>
            <th className="py-8 px-6 text-lg font-black text-center text-accent">Équipe</th>
            <th className="py-8 px-6 text-lg font-black text-center">Entreprise</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, i) => (
            <motion.tr 
              key={i} 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              className="border-b border-border-custom hover:bg-white/[0.02] transition-colors"
            >
              <td className="py-6 px-6 font-medium text-foreground/80">{feature.name}</td>
              <td className="py-6 px-6 text-center text-text-muted">
                {renderValue(feature.solo)}
              </td>
              <td className="py-6 px-6 text-center font-bold text-accent">
                {renderValue(feature.team)}
              </td>
              <td className="py-6 px-6 text-center text-text-muted">
                {renderValue(feature.enterprise)}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function renderValue(val: string | boolean) {
  if (typeof val === "boolean") {
    return val ? <Check className="mx-auto text-accent" size={20} /> : <Minus className="mx-auto opacity-20" size={20} />;
  }
  return val;
}
