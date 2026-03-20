import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border-custom py-16 bg-surface text-center">
      <div className="container mx-auto px-8 flex flex-col items-center">
        <Link href="/" className="mb-6 hover:opacity-90 transition-opacity">
          <img src="/logo-light.png" alt="FlowCard" className="h-10 w-auto block [.dark_&]:hidden" />
          <img src="/logo-dark.png" alt="FlowCard" className="h-10 w-auto hidden [.dark_&]:block" />
        </Link>
        <p className="text-text-muted text-sm max-w-sm mx-auto mb-8">
          Simplifiez le networking. Maximisez vos opportunités. Pilotez votre réseau par la donnée.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <Link href="#" className="text-text-muted hover:text-foreground text-sm">Mentions légales</Link>
          <Link href="#" className="text-text-muted hover:text-foreground text-sm">Politique de confidentialité</Link>
          <Link href="#" className="text-text-muted hover:text-foreground text-sm">CGV</Link>
          <a href="mailto:lucas.gomestieres@flowcard.fr" className="text-text-muted hover:text-foreground text-sm">lucas.gomestieres@flowcard.fr</a>
        </div>
        <p className="text-xs text-text-muted/70">© {new Date().getFullYear()} FlowCard Inc. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
