"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Copy, Check } from "lucide-react";

interface CodePreviewProps {
  code: string;
  language?: string;
  title?: string;
  className?: string;
}

export const CodePreview: React.FC<CodePreviewProps> = ({ 
  code, 
  language = "javascript", 
  title = "Terminal",
  className = "" 
}) => {
  const [copied, setCopied] = useState(false);
  const [displayedCode, setDisplayedCode] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedCode(code.slice(0, i));
      i++;
      if (i > code.length) clearInterval(interval);
    }, 15);
    return () => clearInterval(interval);
  }, [code]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`rounded-2xl border border-border-custom dark:border-border-custom bg-[#0d1117] overflow-hidden shadow-2xl ${className}`}>
      <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-border-custom">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-text-muted ml-4">
            <Terminal size={14} />
            {title}
          </div>
        </div>
        <button 
          onClick={handleCopy}
          className="text-text-muted hover:text-foreground transition-colors p-1"
        >
          {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
        </button>
      </div>
      
      <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
        <pre className="text-foreground/80">
          <code>
            {displayedCode.split("\n").map((line, i) => (
              <div key={i} className="flex">
                <span className="text-foreground/20 select-none w-8 inline-block">{i + 1}</span>
                <span dangerouslySetInnerHTML={{ 
                  __html: highlightCode(line, language) 
                }} />
              </div>
            ))}
          </code>
        </pre>
      </div>
      
      {/* Animated glow effect */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-accent/5 via-transparent to-transparent opacity-30" />
    </div>
  );
};

// Simple syntax highlighter for the "WOW" effect
function highlightCode(line: string, lang: string) {
  if (lang === "javascript" || lang === "typescript") {
    return line
      .replace(/\b(const|let|var|function|return|export|import|from|await|async)\b/g, '<span class="text-blue-400">$1</span>')
      .replace(/\b(true|false|null|undefined)\b/g, '<span class="text-orange-400">$1</span>')
      .replace(/(".*?"|'.*?'|`.*?`)/g, '<span class="text-green-400">$1</span>')
      .replace(/\b(\w+)(?=\()/g, '<span class="text-yellow-400">$1</span>')
      .replace(/\b(console|JSON|Math|Object|Array)\b/g, '<span class="text-purple-400">$1</span>');
  }
  return line;
}
