"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Award,
  Trophy,
  Star,
  Zap,
  Target,
  Flame,
  BookOpen,
  Leaf,
  Lock,
} from "lucide-react";

const achievements = [
  {
    title: "First Steps",
    description: "Complete your first climate lesson",
    icon: <BookOpen size={24} />,
    earned: true,
    earnedDate: "Nov 15, 2025",
    rarity: "common",
    points: 10,
  },
  {
    title: "Week Warrior",
    description: "Maintain a 7-day learning streak",
    icon: <Flame size={24} />,
    earned: true,
    earnedDate: "Nov 22, 2025",
    rarity: "common",
    points: 25,
  },
  {
    title: "Climate Scholar",
    description: "Complete 50 lessons across all topics",
    icon: <Star size={24} />,
    earned: true,
    earnedDate: "Nov 28, 2025",
    rarity: "rare",
    points: 100,
  },
  {
    title: "Quiz Master",
    description: "Score 100% on 10 different quizzes",
    icon: <Trophy size={24} />,
    earned: false,
    progress: 60,
    current: 6,
    target: 10,
    rarity: "rare",
    points: 150,
  },
  {
    title: "Eco Warrior",
    description: "Complete all sustainability challenges",
    icon: <Leaf size={24} />,
    earned: false,
    progress: 40,
    current: 4,
    target: 10,
    rarity: "epic",
    points: 250,
  },
  {
    title: "Lightning Learner",
    description: "Complete 5 lessons in a single day",
    icon: <Zap size={24} />,
    earned: true,
    earnedDate: "Nov 20, 2025",
    rarity: "uncommon",
    points: 50,
  },
  {
    title: "Perfect Score",
    description: "Achieve 100% on a difficult quiz",
    icon: <Target size={24} />,
    earned: true,
    earnedDate: "Nov 25, 2025",
    rarity: "uncommon",
    points: 75,
  },
  {
    title: "Month Champion",
    description: "Maintain a 30-day learning streak",
    icon: <Flame size={24} />,
    earned: false,
    progress: 40,
    current: 12,
    target: 30,
    rarity: "epic",
    points: 300,
  },
  {
    title: "Knowledge Seeker",
    description: "Complete 100 lessons",
    icon: <BookOpen size={24} />,
    earned: false,
    progress: 44,
    current: 44,
    target: 100,
    rarity: "legendary",
    points: 500,
  },
];

const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case "common":
      return "bg-gray-500/10 text-gray-600 border-gray-500/20";
    case "uncommon":
      return "bg-green-500/10 text-green-600 border-green-500/20";
    case "rare":
      return "bg-blue-500/10 text-blue-600 border-blue-500/20";
    case "epic":
      return "bg-purple-500/10 text-purple-600 border-purple-500/20";
    case "legendary":
      return "bg-orange-500/10 text-orange-600 border-orange-500/20";
    default:
      return "bg-gray-500/10 text-gray-600 border-gray-500/20";
  }
};

export default function AchievementsPage() {
  const earnedAchievements = achievements.filter((a) => a.earned);
  const lockedAchievements = achievements.filter((a) => !a.earned);
  const totalPoints = earnedAchievements.reduce((sum, a) => sum + a.points, 0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col gap-6 w-full"
    >
      <div>
        <h1 className="text-2xl font-bold mb-2">Achievements</h1>
        <p className="text-sm text-muted-foreground">
          Earn badges and milestones as you progress through your climate education journey.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="rounded-xl shadow-lg">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Earned</p>
                <p className="text-3xl font-bold">{earnedAchievements.length}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  of {achievements.length} achievements
                </p>
              </div>
              <div className="p-3 rounded-full bg-yellow-500/10">
                <Award size={24} className="text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl shadow-lg">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Points</p>
                <p className="text-3xl font-bold">{totalPoints}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Achievement points
                </p>
              </div>
              <div className="p-3 rounded-full bg-blue-500/10">
                <Star size={24} className="text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl shadow-lg">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Completion</p>
                <p className="text-3xl font-bold">
                  {Math.round((earnedAchievements.length / achievements.length) * 100)}%
                </p>
                <Progress
                  value={(earnedAchievements.length / achievements.length) * 100}
                  className="h-1 mt-2"
                />
              </div>
              <div className="p-3 rounded-full bg-green-500/10">
                <Trophy size={24} className="text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Earned Achievements */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Earned Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {earnedAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="rounded-xl shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-yellow-500/5 to-orange-500/5 border-yellow-500/20">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="p-3 rounded-full bg-yellow-500/10 border border-yellow-500/20">
                      {achievement.icon}
                    </div>
                    <Badge
                      variant="outline"
                      className={`text-xs ${getRarityColor(achievement.rarity)}`}
                    >
                      {achievement.rarity}
                    </Badge>
                  </div>
                  <CardTitle className="text-base font-semibold">
                    {achievement.title}
                  </CardTitle>
                  <CardDescription>{achievement.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      Earned: {achievement.earnedDate}
                    </span>
                    <Badge variant="secondary" className="text-xs">
                      +{achievement.points} pts
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Locked Achievements */}
      <div>
        <h2 className="text-xl font-semibold mb-4">In Progress</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {lockedAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="rounded-xl shadow-lg hover:shadow-xl transition-all opacity-75">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="p-3 rounded-full bg-muted border">
                      <Lock size={24} className="text-muted-foreground" />
                    </div>
                    <Badge
                      variant="outline"
                      className={`text-xs ${getRarityColor(achievement.rarity)}`}
                    >
                      {achievement.rarity}
                    </Badge>
                  </div>
                  <CardTitle className="text-base font-semibold">
                    {achievement.title}
                  </CardTitle>
                  <CardDescription>{achievement.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-3">
                  {achievement.progress !== undefined && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">
                          {achievement.current} / {achievement.target}
                        </span>
                      </div>
                      <Progress value={achievement.progress} className="h-2" />
                    </div>
                  )}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Reward</span>
                    <Badge variant="secondary" className="text-xs">
                      +{achievement.points} pts
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
