"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ClimateChart } from "../activities/components/climate-chart";
import { StatCard } from "../activities/components/stat-card";
import {
  TrendingUp,
  Award,
  Target,
  Calendar,
  BookOpen,
  CheckCircle2,
} from "lucide-react";

const weeklyProgress = [
  { day: "Mon", completed: 3 },
  { day: "Tue", completed: 5 },
  { day: "Wed", completed: 2 },
  { day: "Thu", completed: 4 },
  { day: "Fri", completed: 6 },
  { day: "Sat", completed: 1 },
  { day: "Sun", completed: 3 },
];

const topicProgress = [
  { topic: "Climate Basics", progress: 85, lessons: 17, total: 20 },
  { topic: "Renewable Energy", progress: 60, lessons: 12, total: 20 },
  { topic: "Sustainability", progress: 45, lessons: 9, total: 20 },
  { topic: "Conservation", progress: 30, lessons: 6, total: 20 },
];

export default function ProgressPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col gap-6 w-full"
    >
      <div>
        <h1 className="text-2xl font-bold mb-2">Progress Tracking</h1>
        <p className="text-sm text-muted-foreground">
          Monitor your learning journey with detailed analytics and insights.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Lessons"
          value="44"
          subtitle="Completed this month"
          icon={<BookOpen size={18} />}
        />
        <StatCard
          title="Learning Streak"
          value="12 days"
          subtitle="Keep it going!"
          trend="+3 days"
          icon={<Calendar size={18} />}
        />
        <StatCard
          title="Achievements"
          value="8"
          subtitle="Badges earned"
          icon={<Award size={18} />}
        />
        <StatCard
          title="Goals Met"
          value="5/7"
          subtitle="This week"
          icon={<Target size={18} />}
        />
      </div>

      {/* Progress Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <ClimateChart />
      </motion.div>

      {/* Weekly Activity */}
      <Card className="rounded-xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Weekly Activity</CardTitle>
          <CardDescription>Lessons completed each day this week</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-end justify-between gap-2 h-40">
            {weeklyProgress.map((day, index) => (
              <motion.div
                key={day.day}
                initial={{ height: 0 }}
                animate={{ height: `${(day.completed / 6) * 100}%` }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex-1 flex flex-col items-center gap-2"
              >
                <div className="w-full bg-green-500 rounded-t-lg min-h-[20px]" />
                <span className="text-xs text-muted-foreground">{day.day}</span>
                <span className="text-xs font-medium">{day.completed}</span>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Topic Progress */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Topic Progress</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topicProgress.map((item, index) => (
            <motion.div
              key={item.topic}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="rounded-xl shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-semibold">
                      {item.topic}
                    </CardTitle>
                    <CheckCircle2
                      size={20}
                      className={
                        item.progress >= 80
                          ? "text-green-500"
                          : "text-muted-foreground"
                      }
                    />
                  </div>
                  <CardDescription>
                    {item.lessons} of {item.total} lessons completed
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{item.progress}%</span>
                  </div>
                  <Progress value={item.progress} className="h-2" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Monthly Comparison */}
      <Card className="rounded-xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <TrendingUp size={20} className="text-green-500" />
            Monthly Comparison
          </CardTitle>
          <CardDescription>
            Your learning activity compared to previous months
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">This Month</span>
              <div className="flex items-center gap-2">
                <Progress value={75} className="w-32 h-2" />
                <span className="text-sm font-medium">44 lessons</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Last Month</span>
              <div className="flex items-center gap-2">
                <Progress value={60} className="w-32 h-2" />
                <span className="text-sm text-muted-foreground">36 lessons</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">2 Months Ago</span>
              <div className="flex items-center gap-2">
                <Progress value={45} className="w-32 h-2" />
                <span className="text-sm text-muted-foreground">27 lessons</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
