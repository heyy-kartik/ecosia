"use client";

import { motion } from "framer-motion";
import { StatCard } from "../activities/components/stat-card";
import { ClimateChart } from "../activities/components/climate-chart";
import {
  Card2,
  Card2Header,
  Card2Title,
  Card2Description,
  Card2Content,
} from "@/components/ui/card2";
import { Progress } from "@/components/ui/progress";
import { Leaf, Sparkles, BarChart3, Target } from "lucide-react";

const masteryData = [
  { topic: "Renewable Energy", score: 78 },
  { topic: "Pollution & Waste", score: 64 },
  { topic: "Climate Systems", score: 85 },
  { topic: "Carbon Footprint", score: 56 },
  { topic: "Ecosystems", score: 72 },
];

export default function InsightsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col gap-6 w-full"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          Insights
        </h1>
        <p className="text-sm text-muted-foreground max-w-xl mx-auto">
          Your learning analytics based on quizzes, modules, and climate
          activities.
        </p>
      </div>

      {/* TOP STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Overall Climate Score"
          value="78"
          subtitle="Based on all modules"
          trend="+10%"
          icon={<Leaf size={18} />}
        />
        <StatCard
          title="Quiz Performance"
          value="83%"
          subtitle="Recent average accuracy"
          icon={<Target size={18} />}
        />
        <StatCard
          title="Activity Completion"
          value="12"
          subtitle="Tasks completed this month"
          icon={<Sparkles size={18} />}
        />
        <StatCard
          title="Learning Consistency"
          value="6 days"
          subtitle="Your current streak"
          icon={<BarChart3 size={18} />}
        />
      </div>

      {/* CHART */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <ClimateChart />
      </motion.div>

      {/* TOPIC MASTERY BREAKDOWN */}
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-xl font-semibold mb-4"
        >
          Topic Mastery Breakdown
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {masteryData.map((item, index) => (
            <motion.div
              key={item.topic}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              whileHover={{ y: -4 }}
            >
              <Card2 className="rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <Card2Header className="space-y-1">
                  <Card2Title className="text-lg font-semibold tracking-tight">
                    {item.topic}
                  </Card2Title>
                  <Card2Description className="text-sm">
                    {item.score >= 75
                      ? "Strong mastery"
                      : item.score >= 50
                      ? "Moderate understanding"
                      : "Needs improvement"}
                  </Card2Description>
                </Card2Header>

                <Card2Content className="mt-4 space-y-4">
                  <p className="text-sm font-medium">
                    Mastery: {item.score}%
                  </p>
                  <Progress
                    value={item.score}
                    className="h-2.5"
                  />
                </Card2Content>
              </Card2>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
