"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  trend?: string;
  icon?: React.ReactNode;
  className?: string;
}

export function StatCard({
  title,
  value,
  subtitle,
  trend,
  icon,
  className,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={cn(
        "rounded-3xl p-6",
        "backdrop-blur-md bg-[#f4f4f4] dark:bg-neutral-800/40",
        
        "transition-all duration-300",
        className
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-black dark:text-neutral-300 font-medium">{title}</p>
        <div className="text-black dark:text-neutral-400 text-lg">{icon}</div>
      </div>

      <h2 className="text-4xl font-semibold tracking-tight text-black dark:text-white mb-2">
        {value}
      </h2>

      {subtitle && (
        <p className="text-black/60 dark:text-neutral-400 text-sm leading-snug">{subtitle}</p>
      )}

      {trend && (
        <div className="mt-4 inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 text-black dark:text-white">
          <span className="opacity-80">↗</span> {trend}
        </div>
      )}
    </motion.div>
  );
}