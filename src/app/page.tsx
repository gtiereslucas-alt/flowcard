"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { Marquee } from "@/components/ui/Marquee";
import { HeroMockup } from "@/components/ui/HeroMockup";
import { Hero3DBackground } from "@/components/ui/Hero3DBackground";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import { ArrowRight, Wallet, ScanFace, Leaf } from "lucide-react";
import { CardShowcaseSection } from "@/components/ui/CardShowcaseSection";
import { MagicTapSection } from "@/components/ui/MagicTapSection";
import { SaaSPlatformSection } from "@/components/ui/SaaSPlatformSection";
import { 
  AudiLogo, 
  BMWLogo, 
  BasicFitLogo, 
  Century21Logo, 
  ERALogo, 
  FitnessParkLogo 
} from "@/components/ui/BrandLogos";

export default function Home() {
  return (
    <>
      <Hero3DBackground />

      <section className="py-6 border-y border-border-custom bg-surface overflow-hidden relative">
        <FadeIn>
          <div className="flex items-center justify-center gap-4 mb-6 px-6">
            <div className="h-[1px] w-6 md:w-12 bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
            <p className="text-[9px] md:text-[10px] font-black text-foreground tracking-[0.4em] uppercase whitespace-nowrap drop-shadow-sm opacity-40">
              Ils nous ont fait confiance
            </p>
            <div className="h-[1px] w-6 md:w-12 bg-gradient-to-l from-transparent via-foreground/10 to-transparent" />
          </div>
          <Marquee speed={30}>
            <div className="flex items-center gap-20 px-12">
              <BMWLogo className="h-8 md:h-10 w-auto opacity-20 hover:opacity-100 transition-opacity" />
              <AudiLogo className="h-8 md:h-10 w-auto opacity-20 hover:opacity-100 transition-opacity" />
              <BasicFitLogo className="h-8 md:h-10 w-auto opacity-20 hover:opacity-100 transition-opacity" />
              <Century21Logo className="h-8 md:h-10 w-auto opacity-20 hover:opacity-100 transition-opacity" />
              <ERALogo className="h-8 md:h-10 w-auto opacity-20 hover:opacity-100 transition-opacity" />
              <FitnessParkLogo className="h-8 md:h-10 w-auto opacity-20 hover:opacity-100 transition-opacity" />
              {/* Duplicate for Marquee infinite loop */}
              <BMWLogo className="h-8 md:h-10 w-auto opacity-20 hover:opacity-100 transition-opacity" />
              <AudiLogo className="h-8 md:h-10 w-auto opacity-20 hover:opacity-100 transition-opacity" />
              <BasicFitLogo className="h-8 md:h-10 w-auto opacity-20 hover:opacity-100 transition-opacity" />
              <Century21Logo className="h-8 md:h-10 w-auto opacity-20 hover:opacity-100 transition-opacity" />
              <ERALogo className="h-8 md:h-10 w-auto opacity-20 hover:opacity-100 transition-opacity" />
              <FitnessParkLogo className="h-8 md:h-10 w-auto opacity-20 hover:opacity-100 transition-opacity" />
            </div>
          </Marquee>
        </FadeIn>
      </section>

      <CardShowcaseSection />
      <MagicTapSection />
      <SaaSPlatformSection />
    </>
  );
}


