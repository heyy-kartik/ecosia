"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Leaf, LayoutDashboard, Route, BookOpen, Sparkles, BarChart3, MessagesSquare, Settings } from "lucide-react";

export default function LearningPathPage() {
  return (
    <div className="flex flex-row w-full min-h-screen">

      {/* Sidebar */}
      <aside className="w-56 min-h-screen bg-transparent backdrop-blur-xl text-black dark:text-white flex flex-col rounded-xl text-sm mr-2 mt-24">
        <div className="px-5 py-4 flex items-center gap-2">
          <Leaf className="text-green-400" size={22} />
          <span className="text-lg font-semibold tracking-tight">Ecosia</span>
        </div>

        <div className="flex-1 flex flex-col justify-between py-4">
          <div>
            <div className="px-6 pb-2 text-xs uppercase tracking-wider text-gray-500">Home</div>
            <nav className="flex flex-col gap-0.5 px-3 mb-4">

              <Link href="/dashboard" className="flex items-center gap-3 px-3 py-1.5 rounded-lg hover:bg-white/10 transition">
                <LayoutDashboard size={18} /> Dashboard
              </Link>

              <Link href="/dashboard/activities/learningPath" className="flex items-center gap-3 px-3 py-1.5 rounded-lg bg-white/10 transition">
                <Route size={18} /> Learning Path
              </Link>

              <Link href="/dashboard/quizzes" className="flex items-center gap-3 px-3 py-1.5 rounded-lg hover:bg-white/10 transition">
                <BookOpen size={18} /> Quizzes
              </Link>

              <Link href="/dashboard/insights-page" className="flex items-center gap-3 px-3 py-1.5 rounded-lg hover:bg-white/10 transition">
                <BarChart3 size={18} /> Insights
              </Link>

              <button className="flex items-center gap-3 px-3 py-1.5 rounded-lg hover:bg-white/10 transition">
                <Sparkles size={18} /> Activities
              </button>

              <button className="flex items-center gap-3 px-3 py-1.5 rounded-lg hover:bg-white/10 transition">
                <MessagesSquare size={18} /> AI Assistant
              </button>

            </nav>
          </div>

          <div className="mt-auto">
            <div className="px-6 pb-2 mt-2 text-xs uppercase tracking-wider text-gray-500">Documents</div>
            <nav className="flex flex-col gap-0.5 px-3">
              <button className="flex items-center gap-3 px-3 py-1.5 rounded-lg hover:bg-white/10 transition">
                <Settings size={18} /> Settings
              </button>
            </nav>
          </div>

        </div>
      </aside>

      {/* MAIN CONTENT */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-1 p-10 mt-20 text-black dark:text-white"
      >

        <h1 className="text-5xl font-bold text-center tracking-tight mb-5">
          Learning Path
        </h1>

        <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto mb-12">
          Your personalized climate education journey, gamified into levels and mastery stages.
        </p>

        {/* LEVEL GRID */}
        <div className="flex flex-col gap-6">

          {/* LEVEL 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-6 bg-white/90 dark:bg-neutral-900/60 backdrop-blur-2xl shadow-[0_6px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.35)] border-0 hover:scale-[1.02] transition-all"
          >
            <h2 className="text-xl font-semibold mb-3">Level 1 — Climate Basics</h2>
            <p className="text-sm opacity-70 mb-4">
              Build a foundation in essential climate concepts.
            </p>
            <div className="w-full h-2 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden mb-4">
              <div className="h-full bg-green-300 rounded-full" style={{ width: "70%" }} />
            </div>
            <button className="px-4 py-2 rounded-xl bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition">
              Continue
            </button>
          </motion.div>

          {/* LEVEL 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="rounded-3xl p-6 bg-white/90 dark:bg-neutral-900/60 backdrop-blur-2xl shadow-[0_6px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.35)] border-0 hover:scale-[1.02] transition-all"
          >
            <h2 className="text-xl font-semibold mb-3">Level 2 — Energy & Environment</h2>
            <p className="text-sm opacity-70 mb-4">
              Understand how energy systems shape the world and climate.
            </p>
            <div className="w-full h-2 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden mb-4">
              <div className="h-full bg-blue-300 rounded-full" style={{ width: "40%" }} />
            </div>
            <button className="px-4 py-2 rounded-xl bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition">
              Start Level
            </button>
          </motion.div>

          {/* LEVEL 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl p-6 bg-white/90 dark:bg-neutral-900/60 backdrop-blur-2xl shadow-[0_6px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.35)] border-0 hover:scale-[1.02] transition-all"
          >
            <h2 className="text-xl font-semibold mb-3">Level 3 — Sustainability Skills</h2>
            <p className="text-sm opacity-70 mb-4">
              Learn real-world sustainability habits and practices.
            </p>
            <div className="w-full h-2 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden mb-4">
              <div className="h-full bg-purple-300 rounded-full" style={{ width: "20%" }} />
            </div>
            <button className="px-4 py-2 rounded-xl bg-purple-500 text-white text-sm font-medium hover:bg-purple-600 transition">
              Start Level
            </button>
          </motion.div>

        </div>

      </motion.div>
    </div>
  );
}