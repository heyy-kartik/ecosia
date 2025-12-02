"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  Leaf,
  Sparkles,
  BarChart3,
  MessageSquare,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboard size={18} />,
  },
  {
    label: "Learning Path",
    href: "/dashboard/learning-path",
    icon: <Leaf size={18} />,
  },
  {
    label: "Quizzes",
    href: "/dashboard/quizzes",
    icon: <BookOpen size={18} />,
  },
  {
    label: "Activities",
    href: "/dashboard/activities",
    icon: <Sparkles size={18} />,
  },
  {
    label: "Insights",
    href: "/dashboard/insights",
    icon: <BarChart3 size={18} />,
  },
  {
    label: "AI Assistant",
    href: "/dashboard/assistant",
    icon: <MessageSquare size={18} />,
  },
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: <Settings size={18} />,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col w-60 bg-white/5 backdrop-blur-xl shadow-xl rounded-xl p-4 mt-88">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-10 px-2">
        <Leaf className="text-green-600" size={22} />
        <h1 className="text-lg font-semibold">ClimateLearn</h1>
      </div>

      {/* Navigation */}
      <nav className="space-y-1">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;

          return (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: 5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all hover:bg-white/10 hover:text-white",
                  isActive && "bg-white/15 text-white font-medium shadow-sm"
                )}
              >
                {item.icon}
                {item.label}
              </Link>
            </motion.div>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="mt-auto pt-8 px-2 text-xs text-gray-400/80">
        v1.0 • Climate Education Project
      </div>
    </aside>
  );
}
