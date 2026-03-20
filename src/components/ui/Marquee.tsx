"use client";
import { motion } from "framer-motion";

export function Marquee({ 
    children, 
    speed = 30,
    direction = -1 
}: { 
    children: React.ReactNode, 
    speed?: number,
    direction?: 1 | -1
}) {
  return (
    <div className="flex overflow-hidden relative fade-mask w-full">
      <motion.div
        className="flex min-w-max gap-32 pr-32 items-center"
        animate={{ x: direction === -1 ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
