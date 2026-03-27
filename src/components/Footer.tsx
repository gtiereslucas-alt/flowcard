import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border-custom py-16 bg-surface text-center">
      <div className="container mx-auto px-8 flex flex-col items-center">
        <Link href="/" className="mb-6 hover:opacity-90 transition-opacity">
          <img src="/logo-light.png" alt="FlowCard" className="h-10 w-auto block dark-hide" />
          <img src="/logo-dark.png" alt="FlowCard" className="h-10 w-auto hidden dark-show" />
        </Link>
        <p className="text-text-muted text-sm max-w-sm mx-auto mb-8">
          Simplifiez le networking. Maximisez vos opportunités. Pilotez votre réseau par la donnée.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-left w-full mb-16 border-b border-border-custom pb-16">
          <div className="flex flex-col gap-4">
             <h4 className="text-[10px] font-black uppercase tracking-widest text-text-muted mb-2 opacity-50">Légal</h4>
             <Link href="#" className="text-sm font-bold text-text-muted hover:text-foreground transition-all">Mentions légales</Link>
             <Link href="#" className="text-sm font-bold text-text-muted hover:text-foreground transition-all">Confidentialité</Link>
             <Link href="#" className="text-sm font-bold text-text-muted hover:text-foreground transition-all">CGV</Link>
          </div>
          <div className="flex flex-col gap-4">
             <h4 className="text-[10px] font-black uppercase tracking-widest text-text-muted mb-2 opacity-50">Produits</h4>
             <Link href="/produits" className="text-sm font-bold text-text-muted hover:text-foreground transition-all">Gamme NFC</Link>
             <Link href="/solution" className="text-sm font-bold text-text-muted hover:text-foreground transition-all">Plateforme SaaS</Link>
          </div>
          <div className="flex flex-col gap-4">
             <h4 className="text-[10px] font-black uppercase tracking-widest text-text-muted mb-2 opacity-50">Secteurs</h4>
             <Link href="/bracelet-nfc-coach-sportif" className="text-sm font-bold text-text-muted hover:text-foreground transition-all">Coaching Sportif</Link>
             <Link href="/plaque-nfc-taxi-vtc" className="text-sm font-bold text-text-muted hover:text-foreground transition-all">Taxi & VTC</Link>
             <div className="text-sm font-bold text-text-muted opacity-20 italic">Plus à venir...</div>
          </div>
          <div className="flex flex-col gap-4">
             <h4 className="text-[10px] font-black uppercase tracking-widest text-text-muted mb-2 opacity-50">Contact</h4>
             <a href="mailto:lucas.gomestieres@flowcard.fr" className="text-sm font-bold text-accent hover:underline">lucas.gomestieres@flowcard.fr</a>
             <div className="text-[10px] font-black uppercase tracking-widest text-text-muted opacity-40">Paris, France</div>
          </div>
        </div>
        <p className="text-xs text-text-muted/70">© {new Date().getFullYear()} FlowCard. L'identité connectée haut de gamme.</p>
      </div>
    </footer>
  );
}
