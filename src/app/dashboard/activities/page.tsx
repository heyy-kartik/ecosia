"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Leaf,
  Recycle,
  Droplets,
  Lightbulb,
  Footprints,
  TreePine,
  ChevronRight,
} from "lucide-react";

const activities = [
  {
    title: "Water Usage Tracker",
    description: "Track your daily water consumption and learn to reduce waste.",
    icon: <Droplets size={22} />,
    difficulty: "Easy",
  },
  {
    title: "One-Day Zero Waste Challenge",
    description: "Try living one day without creating any non-recyclable waste.",
    icon: <Recycle size={22} />,
    difficulty: "Medium",
  },
  {
    title: "Energy Saving Mission",
    description: "Reduce electricity use by 20% for 24 hours.",
    icon: <Lightbulb size={22} />,
    difficulty: "Hard",
  },
  {
    title: "Plant a Tree Activity",
    description: "Plant a sapling and document its growth over 30 days.",
    icon: <TreePine size={22} />,
    difficulty: "Easy",
  },
  {
    title: "Carbon Footprint Challenge",
    description: "Calculate your weekly carbon footprint and lower it by 10%.",
    icon: <Footprints size={22} />,
    difficulty: "Medium",
  },
  {
    title: "Local Ecosystem Study",
    description: "Observe and document biodiversity in nearby areas.",
    icon: <Leaf size={22} />,
    difficulty: "Hard",
  },
];

export default function ActivitiesPage() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <h1 className="text-xl font-semibold text-white">Activities</h1>
      <p className="text-sm text-gray-300">
        Climate-friendly challenges designed to help you apply what you learn in the real world.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-4">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="rounded-xl bg-white/5 backdrop-blur-xl p-5 shadow-lg hover:shadow-xl transition-all border-none">
              <CardHeader>
                <div className="flex items-center gap-3 bg-white/10 p-2 rounded-lg backdrop-blur-md shadow-sm">
                  <div className="text-green-600">{activity.icon}</div>
                  <CardTitle className="text-base">{activity.title}</CardTitle>
                </div>
                <CardDescription className="text-gray-300">{activity.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex items-center justify-between">
                <span
                  className={
                    activity.difficulty === "Easy"
                      ? "text-green-300 text-sm"
                      : activity.difficulty === "Medium"
                      ? "text-yellow-300 text-sm"
                      : "text-red-300 text-sm"
                  }
                >
                  {activity.difficulty}
                </span>

                <Button className="flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm shadow-sm">
                  Start Activity
                  <ChevronRight size={16} />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}