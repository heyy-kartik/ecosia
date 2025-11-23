"use client";

import { motion } from "framer-motion";
import { StatCard } from "../activities/components/stat-card";
import { ClimateChart } from "../activities/components/climate-chart";
import { Card2, Card2Header, Card2Title, Card2Description, Card2Content } from "@/components/ui/card2";
import { Progress } from "@/components/ui/progress";

import { Leaf, BarChart3, Target, Sparkles } from "lucide-react";

const masteryData = [
  { topic: "Renewable Energy", score: 78 },
  { topic: "Pollution & Waste", score: 64 },
  { topic: "Climate Systems", score: 85 },
  { topic: "Carbon Footprint", score: 56 },
  { topic: "Ecosystems", score: 72 },
];

export default function InsightsPage() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <h1 className="text-xl font-semibold">Insights</h1>
      <p className="text-sm text-muted-foreground">
        Your learning analytics based on quizzes, modules, and climate activities.
      </p>

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

      {/* CHART + AI HIGHLIGHTS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-3 flex justify-center items-center">
          <div className="w-full max-w-4xl">
            <ClimateChart />
          </div>
        </div>

        
      </div>

      {/* TOPIC MASTERY BREAKDOWN */}
      <div>
        <h2 className="text-base font-medium mb-3">Topic Mastery Breakdown</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {masteryData.map((item, index) => (
            <motion.div
              key={item.topic}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card2 className="hover:shadow-lg transition-all rounded-2xl bg-white/60 dark:bg-neutral-900/40 backdrop-blur-xl border border-black/5 dark:border-white/5 p-4">
                <Card2Header className="space-y-1">
                  <Card2Title className="text-base">{item.topic}</Card2Title>
                  <Card2Description>
                    {item.score >= 75
                      ? "Strong mastery"
                      : item.score >= 50
                      ? "Moderate understanding"
                      : "Needs improvement"}
                  </Card2Description>
                </Card2Header>

                <Card2Content className="mt-3 space-y-3">
                  <p className="text-sm text-black/70 dark:text-white/70 font-medium mb-2">
                    Mastery: {item.score}%
                  </p>
                  <Progress
                    value={item.score}
                    className="h-2 rounded-full overflow-hidden bg-black/10 dark:bg-white/10 shadow-inner"
                  />
                </Card2Content>
              </Card2>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}