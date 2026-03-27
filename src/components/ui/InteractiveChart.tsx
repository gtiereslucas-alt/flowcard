"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

interface InteractiveChartProps {
  data?: number[];
  className?: string;
  color?: string;
}

export const InteractiveChart: React.FC<InteractiveChartProps> = ({ 
  data = [10, 25, 45, 30, 60, 85, 120], 
  className = "",
  color = "#2563eb"
}) => {
  const width = 800;
  const height = 400;
  const padding = 40;

  const points = useMemo(() => {
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min;
    
    return data.map((val, i) => {
      const x = padding + (i / (data.length - 1)) * (width - 2 * padding);
      const y = height - padding - ((val - min) / range) * (height - 2 * padding);
      return { x, y };
    });
  }, [data]);

  const pathD = useMemo(() => {
    return points.reduce((acc, point, i) => {
      if (i === 0) return `M ${point.x} ${point.y}`;
      
      // Interpolation simple (bezier)
      const prev = points[i - 1];
      const cp1x = prev.x + (point.x - prev.x) / 2;
      return `${acc} C ${cp1x} ${prev.y}, ${cp1x} ${point.y}, ${point.x} ${point.y}`;
    }, "");
  }, [points]);

  const areaD = useMemo(() => {
    return `${pathD} V ${height - padding} H ${padding} Z`;
  }, [pathD]);

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Grid lines */}
        {[0, 1, 2, 3, 4].map((i) => {
          const y = padding + (i / 4) * (height - 2 * padding);
          return (
            <line
              key={i}
              x1={padding}
              y1={y}
              x2={width - padding}
              y2={y}
              stroke="white"
              strokeOpacity="0.05"
              strokeDasharray="4 4"
            />
          );
        })}

        {/* Gradient fill */}
        <defs>
          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.2" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>

        <motion.path
          initial={{ opacity: 0, d: areaD.replace(/[\d.]+/g, (n) => String(parseFloat(n) + 100)) }}
          animate={{ opacity: 1, d: areaD }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          fill="url(#chartGradient)"
        />

        {/* Main line */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          d={pathD}
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-[0_0_15px_rgba(37,99,235,0.5)]"
        />

        {/* Interaction points */}
        {points.map((point, i) => (
          <motion.circle
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
            cx={point.x}
            cy={point.y}
            r="8"
            fill="#000"
            stroke={color}
            strokeWidth="3"
            className="cursor-pointer hover:r-12 transition-all"
          />
        ))}
      </svg>
      
      {/* Legend / Info Overlay */}
      <div className="absolute top-8 left-8 p-4 rounded-xl bg-white/5 border border-border-custom dark:border-border-custom backdrop-blur-md">
        <div className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-1">Impact ROI</div>
        <div className="text-2xl font-black text-foreground">+124%</div>
      </div>
    </div>
  );
};
