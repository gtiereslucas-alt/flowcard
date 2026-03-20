"use client";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import { FadeIn } from "@/components/ui/FadeIn";
import { SmartphoneNfc, Contact, LineChart, ShieldCheck, RefreshCw, Layers } from "lucide-react";

export default function SolutionPage() {
  return (
    <div className="container mx-auto px-8 py-32 overflow-hidden">
        <FadeIn>
            <div className="flex justify-center mb-8">
                <span className="px-5 py-2 rounded-full bg-accent/10 text-accent font-bold text-sm tracking-widest uppercase inline-flex items-center gap-2">
                    <Layers size={16} /> Solution Complète
                </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-center mb-10 font-black tracking-tighter">L'expérience <span className="bg-gradient-to-r from-accent to-accent-hover text-transparent bg-clip-text">sans friction.</span></h1>
            <p className="text-xl md:text-2xl text-center text-text-muted max-w-3xl mx-auto mb-32 font-medium tracking-tight leading-relaxed">Le pont technologique le plus rapide entre une rencontre physique et une conversion digitale vérifiée. Pas d'application. Pas d'attente.</p>
        </FadeIn>
        
        <StaggerContainer className="grid md:grid-cols-3 gap-10 mb-40">
            <StaggerItem className="bg-surface p-12 lg:p-14 rounded-[3rem] border border-border-custom hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] hover:-translate-y-3 transition-all duration-500">
                <div className="w-16 h-16 bg-background border border-border-custom rounded-2xl flex items-center justify-center text-accent mb-10 shadow-sm">
                    <SmartphoneNfc size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-bold mb-6 tracking-tight">Partage NFC & QR</h3>
                <p className="text-text-muted leading-relaxed text-lg">Approchez votre carte d'un smartphone. La puce native déclenche l'ouverture immédiate. Pour les anciens téléphones, le QR code dynamique prend le relai instantanément.</p>
            </StaggerItem>

            <StaggerItem className="bg-surface p-12 lg:p-14 rounded-[3rem] border border-border-custom hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] hover:-translate-y-3 transition-all duration-500">
                <div className="w-16 h-16 bg-background border border-border-custom rounded-2xl flex items-center justify-center text-accent mb-10 shadow-sm">
                    <RefreshCw size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-bold mb-6 tracking-tight">Mises à jour liées</h3>
                <p className="text-text-muted leading-relaxed text-lg">Un nouveau poste ? Un nouveau lien de prise de rendez-vous ? Mettez à jour le profil depuis l'espace SaaS, vos cartes physiques pointeront instantanément vers la nouvelle donnée.</p>
            </StaggerItem>

            <StaggerItem className="bg-foreground text-background p-12 lg:p-14 rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.25)] hover:-translate-y-3 transition-all duration-500 relative overflow-hidden group border border-transparent">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="relative z-10 w-16 h-16 bg-background/10 border border-background/20 rounded-2xl flex items-center justify-center text-background mb-10 shadow-sm backdrop-blur-md">
                    <LineChart size={28} strokeWidth={1.5} />
                </div>
                <h3 className="relative z-10 text-3xl font-bold mb-6 tracking-tight text-background">Intelligence & CRM</h3>
                <p className="relative z-10 text-background/70 leading-relaxed text-lg">Finie la sensation de trou noir après un networking. Mesurez qui a cliqué, téléchargé ou visité vos liens et exportez vers Salesforce, Pipedrive ou HubSpot en un clic.</p>
            </StaggerItem>

            {/* BIG BENTO CARD */}
            <StaggerItem className="md:col-span-3 bg-gradient-to-br from-surface to-background p-12 md:p-20 rounded-[4rem] border border-border-custom flex flex-col md:flex-row items-center gap-20 relative overflow-hidden mt-10 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-700 group">
                <div className="flex-1 relative z-10">
                    <div className="w-20 h-20 bg-background border border-border-custom shadow-sm rounded-3xl flex items-center justify-center text-accent mb-10">
                        <ShieldCheck size={36} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 leading-tight">Confidentialité & RGPD intégrés by design.</h3>
                    <p className="text-xl text-text-muted leading-relaxed font-medium">La donnée appartient à votre entreprise, pas à vos collaborateurs, ni à notre plateforme. Nos serveurs hautement sécuritaires basés en France isolent et cryptent les contacts générés lors de vos prospections pour garantir l'intégrité absolue de vos leads.</p>
                </div>
                <div className="flex-1 h-[400px] w-full bg-foreground rounded-[3rem] relative z-10 flex items-center justify-center text-background/50 font-bold text-xl border-4 border-background/10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] transform group-hover:-translate-x-2 transition-transform duration-700">
                    [ Schéma Infrastructure Sécurisée B2B ]
                </div>
            </StaggerItem>
        </StaggerContainer>
    </div>
  );
}
