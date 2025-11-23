"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sparkles, Info } from "lucide-react";

interface HighlightCardProps {
  className?: string;
}

export function HighlightCard({ className }: HighlightCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "rounded-2xl p-6",
        "backdrop-blur-xl bg-white/5 dark:bg-neutral-900/30",
        "border border-white/10 shadow-lg shadow-black/40 hover:shadow-xl",
        "hover:bg-white/10 hover:scale-[1.01] transition-all",
        "flex flex-col gap-6",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
          <Sparkles className="text-yellow-300" size={18} />
          AI Highlight
        </h2>

        <Info size={18} className="text-neutral-400" />
      </div>

      {/* Content */}
      <p className="text-neutral-300 text-sm leading-relaxed">
        Based on your learning activity, we've identified a key topic that will
        boost your climate understanding significantly.
      </p>

      <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
        <p className="text-white font-medium text-base">
          🔥 Recommended Focus:
        </p>
        <p className="text-neutral-300 text-sm mt-1">
          Understanding how global warming accelerates extreme weather events.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3">
        {/* Start Button (Green) */}
        <button
          className="
            px-4 py-2 text-sm font-medium
            bg-green-500/90
            text-black
            rounded-md
            hover:bg-green-500 transition
          "
        >
          Start Now
        </button>

        {/* Skip Button (Red) */}
        <button
          className="
            px-4 py-2 text-sm font-medium
            bg-red-500/80
            text-white
            rounded-md
            hover:bg-red-500 transition
          "
        >
          Skip
        </button>
      </div>
    </motion.div>
  );
}