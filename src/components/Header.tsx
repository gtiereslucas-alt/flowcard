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
          <img src="/logo-light.png" alt="FlowCard" className="h-8 w-auto block [.dark_&]:hidden" />
          <img src="/logo-dark.png" alt="FlowCard" className="h-8 w-auto hidden [.dark_&]:block" />
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="/solution" className="text-sm font-semibold text-text-muted hover:text-foreground transition-colors">Solution</Link>
          <Link href="/roi" className="text-sm font-semibold text-text-muted hover:text-foreground transition-colors">ROI</Link>
          <Link href="/tarifs" className="text-sm font-semibold text-text-muted hover:text-foreground transition-colors">Tarifs</Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex gap-6 items-center">
          <button onClick={toggleTheme} className="text-text-muted hover:text-foreground transition-colors" aria-label="Toggle theme">
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <Link href="#" className="text-sm font-semibold hover:opacity-80 transition-opacity">Se connecter</Link>
          <Link href="/#demo" className="btn btn-primary text-sm px-6 py-2.5 rounded-full flex items-center gap-2 group">
              Demander une démo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
              <Link href="/#demo" className="btn btn-primary w-full mt-4 justify-center py-4 text-lg rounded-xl">Demander une démo</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
