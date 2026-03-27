"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface CounterProps {
  value: number;
  duration?: number;
  format?: (v: number) => string;
}

export const Counter: React.FC<CounterProps> = ({ 
  value, 
  duration = 2,
  format = (v) => v.toLocaleString()
}) => {
  const spring = useSpring(0, {
    mass: 1,
    stiffness: 100,
    damping: 30,
  });
  
  const display = useTransform(spring, (current) => format(Math.floor(current)));

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  return <motion.span>{display}</motion.span>;
};
