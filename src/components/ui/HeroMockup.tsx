"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Mail,
  Phone,
  CheckCircle2,
  Wifi,
  Battery,
  Signal,
  Globe,
  Linkedin,
  Instagram,
  Calendar,
  Zap,
  ArrowRight,
  Star,
  Plus
} from "lucide-react";
import { useEffect, useState, useCallback } from "react";

export function HeroMockup() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [step, setStep] = useState(0); // 0: Off, 1: Lockscreen, 2: Tapping, 3: Profile Unlocked
  const [currentTime, setCurrentTime] = useState("");

  const updateTime = () => {
    const now = new Date();
    setCurrentTime(now.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }));
  };

  const runSequence = useCallback(() => {
    // Sequence Timeline
    setStep(0); // Screen off
    setTimeout(() => setStep(1), 800);   // Screen turns on (Lockscreen)
    setTimeout(() => setStep(2), 2500);  // Card slides in & taps
    setTimeout(() => setStep(3), 4000);  // Unlocks to Profile
  }, []);

  useEffect(() => {
    updateTime();
    const timer = setInterval(updateTime, 10000);
    const checkTheme = () => setIsDarkMode(document.documentElement.classList.contains("dark"));
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true });

    runSequence();
    const interval = setInterval(runSequence, 15000);

    return () => {
      observer.disconnect();
      clearInterval(timer);
      clearInterval(interval);
    };
  }, [runSequence]);

  return (
    <div className="flex justify-center items-start w-full relative pt-4 md:pt-8 pb-10">

      {/* --- IPHONE CONTAINER (100% FLAT, PURE 2D CSS) --- */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        {/* Soft Ambient Shadow on the floor */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-12 bg-black/60 blur-[40px] rounded-full scale-x-125 pointer-events-none" />

        {/* --- IPHONE CHASSIS --- */}
        {/* Proportions: iPhone 15 Pro is approx 19.5:9 ratio. We use 320x693 */}
        <div className="w-[280px] md:w-[320px] aspect-[9/19.5] bg-[#1a1a1c] rounded-[3rem] md:rounded-[3.5rem] p-[6px] md:p-[8px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] relative z-10 box-border ring-1 ring-white/10 ring-inset">

          {/* Hardware Buttons (Volume & Power) */}
          <div className="absolute top-[120px] -left-[2px] w-[3px] h-[30px] bg-[#333] rounded-l-md" /> {/* Action Button */}
          <div className="absolute top-[170px] -left-[2px] w-[3px] h-[60px] bg-[#333] rounded-l-md" /> {/* Vol Up */}
          <div className="absolute top-[240px] -left-[2px] w-[3px] h-[60px] bg-[#333] rounded-l-md" /> {/* Vol Down */}
          <div className="absolute top-[190px] -right-[2px] w-[3px] h-[90px] bg-[#333] rounded-r-md" /> {/* Power */}

          {/* --- IPHONE SCREEN (BEZEL INNER BORDER) --- */}
          <div className={`w-full h-full rounded-[2.6rem] md:rounded-[3.1rem] overflow-hidden relative shadow-inner transition-colors duration-1000 ${step === 0 ? "bg-black" : (isDarkMode ? "bg-slate-50" : "bg-zinc-50 dark:bg-[#050505]")}`}>

            {/* DYNAMIC ISLAND */}
            <motion.div
              layout
              className="absolute top-2 md:top-3 left-1/2 -translate-x-1/2 w-[90px] md:w-[110px] h-[24px] md:h-[28px] bg-black rounded-full z-[100] flex items-center justify-between px-3 shadow-[0_0_10px_rgba(0,0,0,0.5)] border border-border-custom"
            >
              {/* Camera / Sensors */}
              <div className="w-2 h-2 rounded-full bg-[#111] shadow-inner flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-blue-900/40" />
              </div>
              <div className="flex gap-1 items-center">
                <div className="w-1 h-1 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e] opacity-80" /> {/* Camera indicator */}
                <div className="w-2 h-2 rounded-full bg-white/10" />
              </div>
            </motion.div>

            {/* STATUS BAR */}
            <div className={`absolute top-0 left-0 w-full h-12 flex justify-between items-center px-6 pt-1 z-50 text-[10px] font-black transition-opacity duration-500 ${step === 0 ? 'opacity-0' : 'opacity-100'} ${step === 3 ? "text-slate-900 dark:text-white" : "text-white"}`}>
              <span>{currentTime}</span>
              <div className="flex items-center gap-1.5">
                <Signal size={12} strokeWidth={3} />
                <Wifi size={12} strokeWidth={3} />
                <Battery size={14} strokeWidth={3} />
              </div>
            </div>

            {/* --- SCREEN CONTENT MANAGER --- */}
            <AnimatePresence mode="wait">
              {/* STATE 1 & 2: LOCKSCREEN */}
              {(step === 1 || step === 2) && (
                <motion.div
                  key="lockscreen"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ y: -50, opacity: 0, filter: "blur(10px)" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 flex flex-col items-center justify-between p-8 bg-black overflow-hidden"
                >
                  {/* Lockscreen Wallpaper (Elegant Dark Gradient) */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-gray-900 to-black opacity-80" />
                  <div className="absolute -top-[20%] right-[-20%] w-[150%] h-[150%] bg-blue-600/10 blur-[100px] rounded-full mix-blend-screen" />

                  {/* LOCKSCREEN CLOCK */}
                  <div className="mt-16 text-center z-10 w-full">
                    <div className="flex justify-center mb-1 text-zinc-500 dark:text-white/40"><Zap size={14} fill="currentColor" /></div>
                    <span className="text-[11px] font-bold text-zinc-800 dark:text-white/80 uppercase tracking-widest">{new Intl.DateTimeFormat('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' }).format(new Date())}</span>
                    <h2 className="text-[5rem] font-medium text-foreground dark:text-white tracking-tighter mt-0 leading-none" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>{currentTime}</h2>
                  </div>

                  {/* NFC LIVE ACTIVITY (Appears in Step 2) */}
                  <motion.div
                    initial={{ y: 50, opacity: 0, scale: 0.9 }}
                    animate={step === 2 ? { y: 0, opacity: 1, scale: 1 } : { y: 50, opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute bottom-32 left-4 right-4 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] p-4 flex items-center gap-4 z-[100] shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                      <Wifi size={18} className="text-foreground dark:text-white" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] font-bold text-zinc-500 dark:text-white/50 uppercase tracking-widest leading-none mb-1">FlowCard Access</span>
                      <p className="text-[13px] font-semibold text-foreground dark:text-white leading-none">Scanning...</p>
                    </div>
                  </motion.div>

                  {/* BOTTOM ACTION BUTTONS */}
                  <div className="w-full flex justify-between items-center mb-4 z-10 px-2 opacity-80">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-3xl flex items-center justify-center text-foreground dark:text-white"><Star size={20} strokeWidth={2} /></div>
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-3xl flex items-center justify-center text-foreground dark:text-white"><Battery size={20} className="rotate-90" strokeWidth={2} /></div>
                  </div>

                  {/* HOME BAR */}
                  <div className="mb-2 w-32 h-1.5 rounded-full bg-white/40 relative z-10" />
                </motion.div>
              )}

              {/* STATE 3: DIGITAL PROFILE (Unlocked) */}
              {step === 3 && (
                <motion.div
                  key="profile"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full flex flex-col items-center pt-8 relative overflow-hidden bg-background dark:bg-[#050505]"
                >
                  {/* Premium Banner Background with Glassmorphic Mesh */}
                  <div className="absolute top-0 left-0 w-full h-44 bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-[#0f172a] dark:via-[#111] dark:to-black" />
                  <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-blue-500/20 dark:bg-blue-600/30 blur-[60px] rounded-full mix-blend-multiply dark:mix-blend-screen" />

                  <div className="relative z-10 flex flex-col items-center w-full max-w-[280px] md:max-w-[320px] mx-auto h-full px-5 mt-8">
                    {/* AVATAR + Verified Badge */}
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
                      className="relative mb-5"
                    >
                      <div className="w-28 h-28 rounded-full shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] overflow-hidden relative border-4 border-white dark:border-[#050505] bg-white dark:bg-[#111]">
                        <Image src="/profile.jpg" alt="Profile" fill className="object-cover object-top scale-110" priority />
                      </div>
                      <div className="absolute bottom-1 right-1 w-8 h-8 bg-blue-600 rounded-full border-[3px] border-white dark:border-[#050505] flex items-center justify-center text-white shadow-xl">
                        <CheckCircle2 size={14} strokeWidth={3} />
                      </div>
                    </motion.div>

                    {/* IDENTITY (Clean & Bold) */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="text-center mb-6"
                    >
                      <h3 className="text-2xl font-black tracking-tight leading-none mb-2 text-slate-900 dark:text-white">Lucas Gomes Tieres</h3>
                      <div className="flex items-center justify-center gap-2">
                        <Zap size={10} className="text-blue-600 dark:text-blue-500" fill="currentColor" />
                        <p className="text-[9px] font-black uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">Founder & CEO @ FlowCard</p>
                      </div>
                    </motion.div>

                    {/* MAIN CTA - "Apple Pay" Vibe */}
                    <motion.button
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="w-full h-14 rounded-2xl flex items-center justify-center gap-3 font-black text-[14px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_rgba(255,255,255,0.05)] mb-6 bg-slate-900 text-white dark:bg-white dark:text-black transition-transform hover:scale-[0.98]"
                    >
                      Enregistrer le Contact <Plus size={18} strokeWidth={3} />
                    </motion.button>

                    {/* APP-LIKE INFO CARDS */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="grid grid-cols-2 gap-3 w-full mb-6"
                    >
                      {/* Phone Card */}
                      <div className="p-4 rounded-[1.2rem] flex flex-col items-center justify-center gap-2.5 bg-white dark:bg-[#111] shadow-sm border border-slate-100 dark:border-border-custom">
                        <div className="w-11 h-11 rounded-full bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-500">
                          <Phone size={18} fill="currentColor" className="opacity-80" />
                        </div>
                        <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">Appeler</span>
                      </div>
                      {/* Email Card */}
                      <div className="p-4 rounded-[1.2rem] flex flex-col items-center justify-center gap-2.5 bg-white dark:bg-[#111] shadow-sm border border-slate-100 dark:border-border-custom">
                        <div className="w-11 h-11 rounded-full bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-500">
                          <Mail size={18} fill="currentColor" className="opacity-80" />
                        </div>
                        <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300">Email</span>
                      </div>
                    </motion.div>

                    {/* SOCIALS & LINKS (Dock Style) */}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="w-full flex justify-between px-4 py-3 bg-white/50 dark:bg-white/5 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-zinc-300 dark:border-white/10"
                    >
                      {[
                        { Icon: Linkedin, color: "text-[#0077b5]" },
                        { Icon: Instagram, color: "text-[#e1306c]" },
                        { Icon: Globe, color: "text-slate-600 dark:text-slate-400" },
                        { Icon: Calendar, color: "text-slate-800 dark:text-white" }
                      ].map(({ Icon, color }, i) => (
                        <div key={i} className="w-12 h-12 rounded-full flex items-center justify-center bg-white dark:bg-[#1a1a1c] shadow-sm border border-slate-100 dark:border-border-custom hover:scale-105 transition-transform cursor-pointer">
                          <Icon size={18} className={color} />
                        </div>
                      ))}
                    </motion.div>

                  </div>

                  {/* HOME BAR */}
                  <div className="mt-auto mb-2 mx-auto w-32 h-1.5 rounded-full bg-slate-300 dark:bg-white/20" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* --- FLAT SLIDING PHYSICAL CARD ANIMATION --- */}
        {/* Only appears and plays during Step 2 */}
        <AnimatePresence>
          {step === 2 && (
            <motion.div
              key="flat-card"
              initial={{ x: 250, y: -100, opacity: 0, scale: 0.9 }}
              animate={{
                x: [250, 0, 0, 250],
                y: [-50, -100, -100, -50],
                opacity: [0, 1, 1, 0],
                scale: [0.9, 1.1, 1.1, 0.9]
              }}
              transition={{ duration: 1.5, times: [0, 0.3, 0.7, 1], ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[280px] md:w-[320px] aspect-[1/1.58] bg-gradient-to-tr from-gray-900 to-black rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20 p-5 flex flex-col justify-between z-[200] pointer-events-none"
            >
              <div className="w-full flex justify-end">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <Zap size={14} className="text-black" fill="currentColor" />
                </div>
              </div>

              <div className="flex flex-col">
                <div className="h-1 w-10 bg-blue-600 rounded-full mb-2" />
                <span className="text-[12px] font-black uppercase tracking-[0.2em] text-foreground dark:text-white">FlowCard Elite</span>
                <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-500 dark:text-white/50 mt-1">Lucas Gomes Tieres</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- NFC RIPPLE EFFECT --- */}
        <AnimatePresence>
          {step === 2 && (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: [0.5, 4, 6], opacity: [0, 0.8, 0] }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute top-[80px] left-1/2 -translate-x-1/2 w-48 h-48 flex items-center justify-center pointer-events-none z-[150]"
            >
              <div className="absolute w-full h-full border-[8px] border-blue-500/40 rounded-full" />
              <div className="absolute w-[60%] h-[60%] border-[4px] border-blue-400/60 rounded-full" />
              <div className="w-20 h-20 bg-blue-500/80 rounded-full blur-xl" />
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </div>
  );
}

