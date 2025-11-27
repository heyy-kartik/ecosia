"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TabSwitcherProps {
  tabs: string[];
  active: string;
  onChange: (tab: string) => void;
  className?: string;
}

export function TabSwitcher({
  tabs,
  active,
  onChange,
  className,
}: TabSwitcherProps) {
  return (
    <div className={cn("flex gap-3 mb-4 bg-white/5 backdrop-blur-xl p-2 rounded-xl shadow-md", className)}>
      {tabs.map((tab) => {
        const isActive = tab === active;

        return (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={cn(
              "relative pb-2 px-2 text-sm text-gray-300 hover:text-white transition",
              isActive && "text-white font-semibold"
            )}
          >
            {tab}

            {isActive && (
              <motion.div
                layoutId="tab-underline"
                className="absolute left-0 right-0 -bottom-[2px] h-[2px] bg-white/80 rounded-full shadow-sm"
                transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}