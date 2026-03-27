"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import { 
  CreditCard, 
  Smartphone, 
  Zap, 
  Leaf, 
  ShieldCheck, 
  BarChart3, 
  Users, 
  ArrowRight, 
  ChevronDown, 
  Check, 
  X, 
  Globe, 
  Gem, 
  Monitor, 
  LayoutGrid, 
  Target, 
  Eye, 
  Hand,
  Star,
  Info
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// --- FAQ DATA ---
const faqs = [
  {
    q: "Les cartes, bagues et bracelets NFC sont-ils compatibles avec tous les smartphones ?",
    a: "Oui, la majorité des smartphones récents (iOS et Android) sont équipés de la technologie NFC nativement. Pour les modèles plus anciens, nous intégrons systématiquement un QR Code de secours sur tous nos supports."
  },
  {
    q: "Que se passe-t-il si le smartphone n'a pas le NFC activé ?",
    a: "Chaque produit FlowCard comporte un QR code unique au verso (ou gravé) permettant d'accéder au même profil digital via une simple lecture par l'appareil photo."
  },
  {
    q: "Quelle est la durée de vie des cartes, bagues et bracelets NFC ?",
    a: "Nos produits sont conçus pour durer des années. La puce NFC ne nécessite aucune batterie et est testée pour plus de 100 000 lectures. C'est un investissement unique pour une utilisation illimitée."
  },
  {
    q: "Les produits sont-ils résistants à l'eau et à l'usure du quotidien ?",
    a: "Absolument. Nos bagues et bracelets sont certifiés IP68 (étanches), et nos cartes (Classic, Metal, Bamboo) reçoivent un traitement spécial anti-rayures et résistant à l'humidité."
  },
  {
    q: "Quels sont les délais de production et de personnalisation ?",
    a: "Après validation de votre maquette, la production prend généralement 48h à 72h. La livraison en France s'effectue sous 3 à 5 jours ouvrés."
  },
  {
    q: "Comment sont protégées les données et les leads collectés ?",
    a: "Toutes les données sont hébergées sur des serveurs sécurisés en France. Nous sommes 100% conformes au RGPD et utilisons un chiffrement AES-256 pour protéger vos informations sensibles."
  },
  {
    q: "Peut-on utiliser FlowCard pour des événements temporaires ?",
    a: "Oui, nos bracelets et stickers sont parfaits pour les salons et festivals. Ils permettent un contrôle d'accès rapide et une collecte de leads simplifiée pour vos équipes terrain."
  },
  {
    q: "Peut-on changer la redirection après production ?",
    a: "C'est l'un des grands avantages de FlowCard. Vous pouvez modifier le lien de redirection ou le contenu de votre profil digital à n'importe quel moment depuis votre dashboard SaaS, sans changer de support physique."
  }
];

// --- PRODUCTS DATA ---
const products = [
  {
    id: "classic",
    title: "FlowCard Classic",
    desc: "L'équilibre parfait entre durabilité et professionnalisme.",
    material: "PVC Premium Recyclé",
    features: ["Impression Quadri Haute Qualité", "Finition Mate ou Brillante", "NFC + QR Code", "Résistance UV"],
    ideal: "Forces de vente, Grands Comptes",
    img: "/img/flowcard-classic.jpg" // Placeholder
  },
  {
    id: "bamboo",
    title: "FlowCard Bamboo",
    desc: "Affirmez vos valeurs éco-responsables avec élégance.",
    material: "Bois de Bamboo Naturel",
    features: ["Gravure Laser Précision", "Matériau 100% Durable", "Look Organique Unique", "Puce NFC Invisible"],
    ideal: "RSE, Indépendants, Design",
    img: "/img/flowcard-bamboo.jpg" // Placeholder
  },
  {
    id: "metal",
    title: "FlowCard Metal",
    desc: "L'autorité ultime. Une première impression inoubliable.",
    material: "Acier Inoxydable Gravé",
    features: ["Poids & Texture Premium", "Gravure Profonde", "Découpes Précises", "Durée de vie illimitée"],
    ideal: "Dirigeants, VIP, Immobilier Luxe",
    img: "/img/flowcard-metal.jpg" // Placeholder
  },
  {
    id: "ring",
    title: "FlowCard Ring",
    desc: "Le networking en un geste. L'innovation à votre doigt.",
    material: "Céramique Zirconium",
    features: ["Partage par simple contact", "Étanche & Hypoallergénique", "Design Minimaliste", "Aucune batterie requise"],
    ideal: "Dirigeants, Tech, Innovateurs",
    img: "/img/flowcard-ring.jpg" // Placeholder
  },
  {
    id: "band",
    title: "FlowCard Band",
    desc: "Connectez vos équipes terrain et vos événements.",
    material: "Silicon Soft-Touch",
    features: ["Résistant à la transpiration", "Ajustable & Confortable", "Couleurs personnalisables", "Idéal pour le contrôle d'accès"],
    ideal: "Événements, Retail, Logistique",
    img: "/img/flowcard-band.jpg" // Placeholder
  },
  {
    id: "plate",
    title: "Plaques NFC",
    desc: "Transformez vos points de contact physiques.",
    material: "Acrylique ou Aluminium",
    features: ["Pose sur comptoir ou mur", "Format fixe 10x10cm", "Avis Google / Réseaux Sociaux", "Scan ultra-rapide"],
    ideal: "Bureaux, Showrooms, Accueil",
    img: "/img/flowcard-plate.jpg" // Placeholder
  },
  {
    id: "sticker",
    title: "Stickers NFC",
    desc: "Rendez n'importe quel objet intelligent.",
    material: "Vinyle Adhésif Résistant",
    features: ["Pose sur mobile ou vitrine", "Discret & Polyvalent", "Protection anti-métal", "Large rayon de scan"],
    ideal: "Badges, Véhicules, Retail",
    img: "/img/flowcard-sticker.jpg" // Placeholder
  }
];

export default function ProduitsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-accent selection:text-white overflow-x-hidden">
      
      {/* --- HERO SECTION --- (Start) */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-zinc-50 border-b border-zinc-200 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.05),transparent_50%)]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-8xl font-[950] tracking-tighter mb-8 leading-[0.85] text-zinc-950 uppercase italic">
              NOS PRODUITS <br/>
              <span className="text-accent">NFC CONNECTÉS.</span>
            </h1>
            <p className="text-lg md:text-2xl text-zinc-600 max-w-3xl mx-auto font-medium leading-relaxed italic opacity-80 mb-16 px-4">
              Une identité professionnelle augmentée. Durable, performante et pilotée en temps réel. Découvrez la gamme complète FlowCard.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="https://calendly.com/lucas-gomestieres-flowcard/30min" target="_blank" className="px-12 py-6 bg-accent text-white rounded-full font-black text-xs uppercase tracking-[0.3em] shadow-2xl shadow-accent/20 hover:scale-105 active:scale-95 transition-all">
                Demander une démo
              </Link>
              <Link href="/brochure.pdf" className="px-12 py-6 border border-zinc-300 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all bg-transparent">
                Télécharger la brochure
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} className="mt-20 max-w-6xl mx-auto">
             <div className="relative aspect-[21/9] bg-zinc-200 rounded-[3rem] overflow-hidden shadow-inner border border-zinc-300">
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 font-black uppercase tracking-widest text-sm italic">
                   Placeholder: Visual Hero (Cards, Rings, Bands + Dashboard)
                </div>
                <div className="absolute bottom-6 right-6 px-4 py-2 bg-white/80 backdrop-blur rounded-xl text-[10px] font-black uppercase tracking-widest text-zinc-500 border border-zinc-200">Suite SaaS Intégrée</div>
             </div>
          </FadeIn>
        </div>
      </section>
      {/* --- HERO SECTION --- (End) */}

      {/* --- PRODUCT RANGE SECTION --- (Start) */}
      <section className="py-24 md:py-40 container mx-auto px-6">
        <div className="text-center mb-24">
           <FadeIn>
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 italic uppercase">Gamme NFC FlowCard.</h2>
              <p className="text-zinc-500 font-medium italic">Des matériaux nobles, une tech infaillible.</p>
           </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {products.map((product) => (
             <StaggerItem key={product.id}>
                <div className="flex flex-col h-full bg-white border border-zinc-200 rounded-[3rem] overflow-hidden hover:border-accent transition-all duration-500 group shadow-sm hover:shadow-2xl translate-y-0 hover:-translate-y-2">
                   <div className="aspect-[4/3] bg-zinc-100 relative overflow-hidden flex items-center justify-center border-b border-zinc-100">
                      <img src={product.img} alt={product.title} className="w-full h-full object-cover opacity-0 group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black uppercase tracking-widest text-zinc-400 opacity-100 group-hover:opacity-0 transition-opacity">Visual: {product.title}</div>
                      <div className="absolute top-6 left-6 px-4 py-2 bg-white rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-accent border border-accent/20">Idéal: {product.ideal}</div>
                   </div>
                   <div className="p-10 flex-1 flex flex-col">
                      <h3 className="text-3xl font-black mb-4 italic leading-tight">{product.title}</h3>
                      <p className="text-zinc-500 text-sm font-medium italic mb-8 opacity-80">{product.desc}</p>
                      
                      <div className="space-y-4 mb-10 flex-1 text-sm font-bold text-zinc-700">
                         {product.features.map((feat, i) => (
                           <div key={i} className="flex gap-3 items-center">
                              <Check size={16} className="text-accent shrink-0" strokeWidth={3} />
                              <span className="opacity-80 italic">{feat}</span>
                           </div>
                         ))}
                      </div>

                      <div className="pt-6 border-t border-zinc-100 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-zinc-400 italic">
                         <span>{product.material}</span>
                         <span className="text-accent underline">Détails</span>
                      </div>
                   </div>
                </div>
             </StaggerItem>
           ))}
        </StaggerContainer>
      </section>
      {/* --- PRODUCT RANGE SECTION --- (End) */}

      {/* --- SAAS FEATURES SECTION --- (Start) */}
      <section className="py-24 md:py-40 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.05),transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
           <div className="text-center mb-32">
              <FadeIn>
                 <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 italic uppercase">Suite SaaS Incluse.</h2>
                 <p className="text-white/40 font-medium italic max-w-2xl mx-auto">Votre objet NFC n'est que le point d'entrée vers une puissance logicielle illimitée.</p>
              </FadeIn>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                { icon: Users, title: "Gestion Centralisée", desc: "Créez, modifiez ou désactivez les profils de vos équipes en un clic depuis votre dashboard." },
                { icon: Zap, title: "Temps Réel", desc: "Mettez à jour vos informations instantanément. Fini les réimpressions coûteuses et inutiles." },
                { icon: BarChart3, title: "Analytics Avancés", desc: "Suivez vos performances : scans, vues, clics et canaux de conversion en temps réel." },
                { icon: Target, title: "Leads Automation", desc: "Capturez vos futurs clients via formulaires et exportez-les vers HubSpot, Salesforce ou CSV." },
                { icon: ShieldCheck, title: "Sécurité & RGPD", desc: "Contrôle des droits, chiffrement des données et hébergement sécurisé en France." },
                { icon: Monitor, title: "Expérience Multi-support", desc: "Personnalisez l'affichage selon que l'on scanne votre bague, bracelet ou carte." }
              ].map((feat, i) => (
                <div key={i} className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:border-accent transition-all group shadow-sm">
                   <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform duration-500">
                      <feat.icon size={26} />
                   </div>
                   <h3 className="text-2xl font-black text-white italic mb-4">{feat.title}</h3>
                   <p className="text-white/40 font-medium italic leading-relaxed text-sm">{feat.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
      {/* --- SAAS FEATURES SECTION --- (End) */}

      {/* --- USE CASES SECTION --- (Start) */}
      <section className="py-24 md:py-40 container mx-auto px-6">
        <div className="text-center mb-20 md:mb-32">
           <FadeIn>
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 italic uppercase leading-none">Scénarios d'Usage.</h2>
           </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
           {[
             { title: "Cartes NFC", icon: CreditCard, cases: ["Rendez-vous clients VIP", "Networking en salons pro", "Prospection commerciale terrain"] },
             { title: "Bagues NFC", icon: Gem, cases: ["Dirigeants & Founders", "Démonstrations tech haute visibilité", "Networking ultra-premium"] },
             { title: "Bracelets NFC", icon: Hand, cases: ["Accès événements & festivals", "Contrôle d'accès VIP", "Équipes retail / logistique"] },
             { title: "Plaques & Stickers", icon: LayoutGrid, cases: ["Comptoir d'accueil (Check-in)", "Prise de RDV en vitrine", "Collecte d'avis clients Google"] }
           ].map((item, i) => (
             <FadeIn key={i}>
                <div className="group p-12 rounded-[4rem] bg-zinc-50 border border-zinc-200 transition-all hover:bg-white hover:border-accent hover:shadow-xl">
                   <div className="flex items-center gap-6 mb-10">
                      <div className="p-5 bg-white rounded-3xl border border-zinc-200 text-accent group-hover:scale-110 transition-transform duration-500"><item.icon size={32} /></div>
                      <h3 className="text-3xl font-[950] italic uppercase italic">{item.title}</h3>
                   </div>
                   <div className="space-y-6">
                      {item.cases.map((c, j) => (
                        <div key={j} className="flex gap-4 items-center font-bold text-zinc-500 italic">
                           <div className="w-2 h-2 rounded-full bg-accent" />
                           {c}
                        </div>
                      ))}
                   </div>
                </div>
             </FadeIn>
           ))}
        </div>
      </section>
      {/* --- USE CASES SECTION --- (End) */}

      {/* --- PERSONA SECTION --- (Start) */}
      <section className="py-24 md:py-40 bg-zinc-50">
        <div className="container mx-auto px-6">
           <div className="text-center mb-24">
              <FadeIn>
                 <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 italic uppercase">Pour qui ?</h2>
              </FadeIn>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Directions Com.", desc: "Standardisez la force de vente et mesurez la performance terrain." },
                { title: "Dirigeants", desc: "Image de marque forte, tech et exclusive dès la première main tendue." },
                { title: "Ressources Humaines", desc: "Onboarding moderne et gestion simplifiée des départs (Turnover)." },
                { title: "Réseaux d'Agences", desc: "Standardisation du marketing local (Immo, Banque, Assurance)." }
              ].map((persona, i) => (
                <div key={i} className="p-10 bg-white border border-zinc-200 rounded-[3rem] shadow-sm hover:shadow-lg transition-all">
                   <h3 className="text-xl font-black mb-4 italic leading-tight text-accent">{persona.title}</h3>
                   <p className="text-sm font-medium italic text-zinc-500 leading-relaxed opacity-80">{persona.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
      {/* --- PERSONA SECTION --- (End) */}

      {/* --- COMPARISON SECTION --- (Start) */}
      <section className="py-24 md:py-40 container mx-auto px-6 overflow-x-auto">
        <div className="text-center mb-24 min-w-[600px]">
           <FadeIn>
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 italic uppercase">FlowCard vs Papier.</h2>
           </FadeIn>
        </div>

        <div className="max-w-5xl mx-auto mb-10 min-w-[700px]">
           <table className="w-full text-left border-collapse">
              <thead>
                 <tr className="border-b-2 border-zinc-950 font-black text-xs uppercase tracking-widest text-zinc-500 italic">
                    <th className="py-8 px-6">Critère</th>
                    <th className="py-8 px-6 text-accent">FlowCard (NFC + SaaS)</th>
                    <th className="py-8 px-6">Papier Traditionnel</th>
                 </tr>
              </thead>
              <tbody className="text-sm font-bold text-zinc-700">
                 {[
                   { c: "Mise à jour des infos", f: "Temps réel, illimité & gratuit", p: "Réimpression nécessaire" },
                   { c: "Coût sur 3 ans", f: "Investissement unique optimisé", p: "Réimpressions récurrentes" },
                   { c: "Suivi & Statistiques", f: "Analytics complets & Leads", p: "Zéro visibilité" },
                   { c: "Impact écologique", f: "Supports durables, 0 déchets", p: "Fort volume papier jeté" },
                   { c: "Expérience Utilisateur", f: "Interactif & Digital", p: "Statique & Passif" },
                   { c: "Image de Marque", f: "Innovante & Professionnelle", p: "Traditionnelle & Figée" }
                 ].map((row, i) => (
                   <tr key={i} className="border-b border-zinc-100 hover:bg-zinc-50 transition-colors">
                      <td className="py-8 px-6 italic text-zinc-950">{row.c}</td>
                      <td className="py-8 px-6 text-accent italic">{row.f}</td>
                      <td className="py-8 px-6 opacity-40 italic">{row.p}</td>
                   </tr>
                 ))}
              </tbody>
           </table>
        </div>
      </section>
      {/* --- COMPARISON SECTION --- (End) */}

      {/* --- FAQ SECTION --- (Start) */}
      <section id="faq" className="py-24 md:py-40 bg-zinc-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-24">
             <FadeIn>
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 italic uppercase">FAQ Produits.</h2>
             </FadeIn>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`rounded-[2rem] border transition-all duration-300 ${openFaq === i ? "bg-white border-accent shadow-xl" : "bg-transparent border-zinc-200 hover:border-zinc-300"}`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-8 flex items-center justify-between text-left"
                >
                  <span className="text-lg font-black italic tracking-tight">{faq.q}</span>
                  <ChevronDown size={24} className={`text-accent transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-10 text-zinc-500 font-medium italic leading-relaxed text-base opacity-80 border-t border-zinc-100 mt-2 pt-6">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* --- FAQ SECTION --- (End) */}

      {/* --- FINAL ACTION SECTION --- (Start) */}
      <section className="py-40 md:py-80 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08)_0%,transparent_100%)] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
           <FadeIn>
              <h2 className="text-6xl md:text-[10rem] font-black tracking-tighter mb-16 italic uppercase leading-[0.8]">
                 PRÊT POUR LE <br />
                 <span className="text-accent underline decoration-white/10 decoration-8 underline-offset-[20px]">SANS-CONTACT ?</span>
              </h2>
              <p className="text-xl md:text-3xl text-white/40 max-w-4xl mx-auto mb-20 italic font-medium leading-relaxed px-4">
                 Image de marque puissante, centralisation totale, analytics en temps réel. Faites le choix de l'innovation durable.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                 <Link href="https://calendly.com/lucas-gomestieres-flowcard/30min" target="_blank" className="px-20 py-10 bg-accent text-white rounded-full font-black text-xs uppercase tracking-[0.4em] shadow-[0_30px_100px_rgba(37,99,235,0.4)] hover:scale-105 active:scale-95 transition-all outline outline-white/5 outline-offset-8">
                    Parler à un expert
                 </Link>
                 <Link href="#" className="text-sm font-black uppercase tracking-[0.3em] text-white/60 hover:text-white transition-all">
                    Tester avec mon équipe
                 </Link>
              </div>

              <div className="mt-24 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-12 opacity-30 text-[10px] font-black uppercase tracking-[0.2em]">
                 <span>Support 24/7</span>
                 <span>Livraison sous 5 jours</span>
                 <span>Design Sur-Mesure</span>
                 <span>Paiement Sécurisé</span>
              </div>
           </FadeIn>
        </div>
      </section>
      {/* --- FINAL ACTION SECTION --- (End) */}

    </div>
  );
}
