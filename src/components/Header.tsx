"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const pathname = usePathname();

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  useEffect(() => setIsMenuOpen(false), [pathname]);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      setTheme("light");
    } else {
      html.classList.add("dark");
      setTheme("dark");
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border-custom saturate-150 transition-colors duration-300">
      <div className="container mx-auto px-8 h-[76px] flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img src="/logo-light.png" alt="FlowCard" className="h-8 w-auto block dark-hide" />
          <img src="/logo-dark.png" alt="FlowCard" className="h-8 w-auto hidden dark-show" />
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center relative">
          {["Solution", "Produits", "Pourquoi", "ROI", "Tarifs"].map((item) => {
            const href = `/${item.toLowerCase() === "solution" ? "solution" : item.toLowerCase() === "pourquoi" ? "pourquoi" : item.toLowerCase()}`;
            return (
              <Link 
                key={item}
                href={href} 
                className="relative px-4 py-2 text-sm font-bold text-text-muted hover:text-foreground transition-colors group"
              >
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="inline-block"
              >
                {item}
              </motion.span>
                {pathname === `/${item.toLowerCase()}` && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex gap-6 items-center">
          <motion.button 
            whileHover={{ rotate: 15, scale: 1.2 }}
            onClick={toggleTheme} 
            className="text-text-muted hover:text-foreground transition-colors" 
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </motion.button>
          <Link href="http://localhost:3001/login" className="text-sm font-bold hover:opacity-80 transition-opacity">Se connecter</Link>
          <Link href="https://calendly.com/lucas-gomestieres-flowcard/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary text-sm px-6 py-2.5 rounded-full flex items-center gap-2 group relative overflow-hidden">
              <span className="relative z-10">Demander une démo</span>
              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-blue-400 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md scale-150" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-5">
          <button onClick={toggleTheme} className="text-text-muted" aria-label="Toggle theme">
            {theme === "light" ? <Moon size={22} /> : <Sun size={22} />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground -mr-2 p-2">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-x-0 top-[77px] bg-background/95 backdrop-blur-2xl border-b border-border-custom p-8 shadow-2xl origin-top"
          >
            <nav className="flex flex-col gap-6 items-start">
              <Link href="/solution" className="text-2xl font-bold tracking-tight w-full pb-4 border-b border-border-custom">Solution</Link>
              <Link href="/roi" className="text-2xl font-bold tracking-tight w-full pb-4 border-b border-border-custom">Calculateur ROI</Link>
              <Link href="/tarifs" className="text-2xl font-bold tracking-tight w-full pb-4 border-b border-border-custom">Tarifs</Link>
              <Link href="http://localhost:3001/register" className="btn btn-primary w-full mt-4 justify-center py-4 text-lg rounded-xl">S'inscrire Maintenant</Link>
              <Link href="http://localhost:3001/login" className="text-sm font-bold w-full text-center py-4 text-text-muted hover:text-foreground transition-all">Se connecter</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
