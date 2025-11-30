"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Plus,
  TrendingUp,
  Calendar,
  CheckCircle2,
  Circle,
  Leaf,
  Droplets,
  Zap,
  Recycle,
} from "lucide-react";

const goals = [
  {
    title: "Complete Climate Fundamentals Path",
    description: "Finish all 8 modules in the Climate Change Fundamentals learning path",
    category: "Learning",
    icon: <Target size={20} />,
    progress: 75,
    current: 6,
    target: 8,
    deadline: "Dec 15, 2025",
    priority: "high",
    status: "in-progress",
  },
  {
    title: "Reduce Carbon Footprint by 20%",
    description: "Lower personal carbon emissions through sustainable practices",
    category: "Action",
    icon: <Leaf size={20} />,
    progress: 45,
    current: 9,
    target: 20,
    deadline: "Jan 31, 2026",
    priority: "high",
    status: "in-progress",
  },
  {
    title: "Save 500 Gallons of Water",
    description: "Reduce water consumption through conservation techniques",
    category: "Conservation",
    icon: <Droplets size={20} />,
    progress: 60,
    current: 300,
    target: 500,
    deadline: "Dec 31, 2025",
    priority: "medium",
    status: "in-progress",
  },
  {
    title: "Achieve 30-Day Learning Streak",
    description: "Complete at least one lesson every day for 30 consecutive days",
    category: "Consistency",
    icon: <TrendingUp size={20} />,
    progress: 40,
    current: 12,
    target: 30,
    deadline: "Dec 20, 2025",
    priority: "medium",
    status: "in-progress",
  },
  {
    title: "Reduce Energy Usage by 15%",
    description: "Lower electricity consumption through energy-efficient practices",
    category: "Action",
    icon: <Zap size={20} />,
    progress: 80,
    current: 12,
    target: 15,
    deadline: "Dec 10, 2025",
    priority: "high",
    status: "in-progress",
  },
  {
    title: "Zero Waste Week Challenge",
    description: "Complete 7 consecutive days without producing non-recyclable waste",
    category: "Challenge",
    icon: <Recycle size={20} />,
    progress: 100,
    current: 7,
    target: 7,
    deadline: "Nov 25, 2025",
    priority: "low",
    status: "completed",
  },
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "destructive";
    case "medium":
      return "secondary";
    case "low":
      return "outline";
    default:
      return "default";
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Learning":
      return "bg-blue-500/10 text-blue-600 border-blue-500/20";
    case "Action":
      return "bg-green-500/10 text-green-600 border-green-500/20";
    case "Conservation":
      return "bg-cyan-500/10 text-cyan-600 border-cyan-500/20";
    case "Consistency":
      return "bg-purple-500/10 text-purple-600 border-purple-500/20";
    case "Challenge":
      return "bg-orange-500/10 text-orange-600 border-orange-500/20";
    default:
      return "bg-gray-500/10 text-gray-600 border-gray-500/20";
  }
};

export default function GoalsPage() {
  const activeGoals = goals.filter((g) => g.status === "in-progress");
  const completedGoals = goals.filter((g) => g.status === "completed");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col gap-6 w-full"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-2">Climate Goals</h1>
          <p className="text-sm text-muted-foreground">
            Set and track your personal climate action targets.
          </p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus size={16} />
          New Goal
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="rounded-xl shadow-lg">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Goals</p>
                <p className="text-3xl font-bold">{activeGoals.length}</p>
              </div>
              <div className="p-3 rounded-full bg-blue-500/10">
                <Target size={24} className="text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl shadow-lg">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Completed</p>
                <p className="text-3xl font-bold">{completedGoals.length}</p>
              </div>
              <div className="p-3 rounded-full bg-green-500/10">
                <CheckCircle2 size={24} className="text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl shadow-lg">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Progress</p>
                <p className="text-3xl font-bold">
                  {Math.round(
                    activeGoals.reduce((sum, g) => sum + g.progress, 0) /
                      activeGoals.length
                  )}
                  %
                </p>
              </div>
              <div className="p-3 rounded-full bg-purple-500/10">
                <TrendingUp size={24} className="text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Goals */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Active Goals</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {activeGoals.map((goal, index) => (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="rounded-xl shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg border ${getCategoryColor(goal.category)}`}>
                        {goal.icon}
                      </div>
                      <div>
                        <CardTitle className="text-base font-semibold">
                          {goal.title}
                        </CardTitle>
                        <Badge
                          variant="outline"
                          className={`mt-1 text-xs ${getCategoryColor(goal.category)}`}
                        >
                          {goal.category}
                        </Badge>
                      </div>
                    </div>
                    <Badge variant={getPriorityColor(goal.priority)} className="text-xs">
                      {goal.priority}
                    </Badge>
                  </div>
                  <CardDescription>{goal.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">
                        {goal.current} / {goal.target}
                      </span>
                    </div>
                    <Progress value={goal.progress} className="h-2" />
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar size={14} />
                      <span>Due: {goal.deadline}</span>
                    </div>
                    <span className="font-medium text-green-600">
                      {goal.progress}% complete
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Completed Goals */}
      {completedGoals.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Completed Goals</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {completedGoals.map((goal, index) => (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="rounded-xl shadow-lg bg-green-500/5 border-green-500/20">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20">
                          <CheckCircle2 size={20} className="text-green-600" />
                        </div>
                        <div>
                          <CardTitle className="text-base font-semibold">
                            {goal.title}
                          </CardTitle>
                          <Badge
                            variant="outline"
                            className="mt-1 text-xs bg-green-500/10 text-green-600 border-green-500/20"
                          >
                            Completed
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <CardDescription>{goal.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
