"use client";

import { motion } from "framer-motion";
import { Card, CardTitle, CardDescription, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Battery, Globe, Recycle, Sun, TestTube, ChevronRight } from "lucide-react";

const quizList = [
  {
    title: "Climate Basics",
    description: "Understand greenhouse gases, climate change and sustainability.",
    icon: <Globe size={22} />,
    difficulty: "Easy",
  },
  {
    title: "Renewable Energy",
    description: "Test your knowledge on solar, wind, hydro and future energy sources.",
    icon: <Sun size={22} />,
    difficulty: "Medium",
  },
  {
    title: "Carbon Footprint",
    description: "Learn how daily actions impact Earth’s carbon cycle.",
    icon: <Recycle size={22} />,
    difficulty: "Easy",
  },
  {
    title: "Global Warming Causes",
    description: "Explore the science behind rising global temperatures.",
    icon: <Battery size={22} />,
    difficulty: "Hard",
  },
  {
    title: "Ecosystems & Biodiversity",
    description: "Understanding how ecosystems maintain balance and why species matter.",
    icon: <Leaf size={22} />,
    difficulty: "Medium",
  },
  {
    title: "Environmental Chemistry",
    description: "Pollutants, chemical reactions and the impact on air + water.",
    icon: <TestTube size={22} />,
    difficulty: "Hard",
  },
];

export default function QuizzesPage() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <h1 className="text-xl font-semibold">Quizzes</h1>
      <p className="text-sm text-muted-foreground">
        Test your climate knowledge. Smart AI will recommend harder or easier topics based on your results.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-4">
        {quizList.map((quiz, index) => (
          <motion.div
            key={quiz.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="hover:shadow-md transition-all">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="text-green-600">{quiz.icon}</div>
                  <CardTitle className="text-base">{quiz.title}</CardTitle>
                </div>
                <CardDescription>{quiz.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex items-center justify-between">
                <span
                  className={
                    quiz.difficulty === "Easy"
                      ? "text-green-600 text-sm"
                      : quiz.difficulty === "Medium"
                      ? "text-yellow-600 text-sm"
                      : "text-red-600 text-sm"
                  }
                >
                  {quiz.difficulty}
                </span>

                <Button className="flex items-center gap-1">
                  Start
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