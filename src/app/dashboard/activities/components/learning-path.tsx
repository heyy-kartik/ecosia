"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

interface PathItem {
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
}

interface LearningPathProps {
  items?: PathItem[];
  className?: string;
}

export function LearningPathCard({ items, className }: LearningPathProps) {
  const defaultItems: PathItem[] = [
    {
      title: "Understanding Carbon Footprints",
      description: "Learn how daily activities release CO₂ and how to reduce it.",
      difficulty: "Easy",
    },
    {
      title: "Renewable Energy Basics",
      description: "Explore solar, wind, and hydro energy with simple examples.",
      difficulty: "Medium",
    },
    {
      title: "Climate Systems Explained",
      description: "How Earth’s systems interact to regulate temperature.",
      difficulty: "Hard",
    },
  ];

  const lessons = items || defaultItems;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className={cn(
        "rounded-2xl p-6 bg-neutral-900/40 backdrop-blur-2xl shadow-[0_8px_25px_rgba(0,0,0,0.45)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.55)] transition-all duration-300",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">AI Learning Path</h2>
        <Leaf size={22} className="text-green-400" />
      </div>

      {/* Lessons */}
      <div className="space-y-5">
        {lessons.map((lesson, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.08 }}
            className="rounded-xl p-5 bg-neutral-900/30 backdrop-blur-xl shadow-[0_4px_18px_rgba(0,0,0,0.35)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.45)] transition-all duration-300"
          >
            {/* Title + Icon */}
            <div className="flex items-center justify-between">
              <p className="font-medium text-white text-base">
                {lesson.title}
              </p>
              <BookOpen size={16} className="text-gray-400" />
            </div>

            {/* Description */}
            <p className="text-sm text-gray-300 mt-2 leading-relaxed">
              {lesson.description}
            </p>

            {/* Difficulty + Arrow */}
            <div className="flex items-center justify-between mt-4 text-sm">
              <span
                className={cn(
                  "px-3 py-1 text-xs rounded-md font-medium",
                  lesson.difficulty === "Easy" &&
                    "bg-green-500/15 text-green-300",
                  lesson.difficulty === "Medium" &&
                    "bg-yellow-500/20 text-yellow-300",
                  lesson.difficulty === "Hard" &&
                    "bg-red-500/20 text-red-300"
                )}
              >
                {lesson.difficulty}
              </span>

              <ArrowRight
                size={18}
                className="text-gray-300 hover:text-white transition"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}