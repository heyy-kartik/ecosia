"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar as CalendarIcon,
  Clock,
  Plus,
  BookOpen,
  Target,
  Award,
  AlertCircle,
} from "lucide-react";

const upcomingEvents = [
  {
    title: "Climate Policy Quiz",
    date: "2025-12-02",
    time: "10:00 AM",
    type: "quiz",
    priority: "high",
  },
  {
    title: "Renewable Energy Module 3",
    date: "2025-12-03",
    time: "2:00 PM",
    type: "lesson",
    priority: "medium",
  },
  {
    title: "Weekly Goal Review",
    date: "2025-12-05",
    time: "9:00 AM",
    type: "goal",
    priority: "medium",
  },
  {
    title: "Carbon Footprint Challenge Deadline",
    date: "2025-12-07",
    time: "11:59 PM",
    type: "activity",
    priority: "high",
  },
  {
    title: "Ecosystem Conservation Final",
    date: "2025-12-10",
    time: "3:00 PM",
    type: "quiz",
    priority: "high",
  },
];

const todayActivities = [
  {
    title: "Complete Climate Basics Lesson 5",
    time: "9:00 AM",
    duration: "30 min",
    completed: true,
  },
  {
    title: "Water Usage Tracker Activity",
    time: "2:00 PM",
    duration: "45 min",
    completed: false,
  },
  {
    title: "Review Renewable Energy Notes",
    time: "4:30 PM",
    duration: "20 min",
    completed: false,
  },
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case "quiz":
      return <BookOpen size={16} />;
    case "lesson":
      return <BookOpen size={16} />;
    case "goal":
      return <Target size={16} />;
    case "activity":
      return <Award size={16} />;
    default:
      return <CalendarIcon size={16} />;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case "quiz":
      return "bg-blue-500/10 text-blue-600 border-blue-500/20";
    case "lesson":
      return "bg-green-500/10 text-green-600 border-green-500/20";
    case "goal":
      return "bg-purple-500/10 text-purple-600 border-purple-500/20";
    case "activity":
      return "bg-orange-500/10 text-orange-600 border-orange-500/20";
    default:
      return "bg-gray-500/10 text-gray-600 border-gray-500/20";
  }
};

export default function CalendarPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col gap-6 w-full"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-2">Calendar</h1>
          <p className="text-sm text-muted-foreground">
            Schedule your learning activities and track important deadlines.
          </p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus size={16} />
          Add Event
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Schedule */}
        <Card className="rounded-xl shadow-lg lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Clock size={20} />
              Today's Schedule
            </CardTitle>
            <CardDescription>Saturday, November 29</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {todayActivities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-3 rounded-lg border ${
                  activity.completed
                    ? "bg-green-500/5 border-green-500/20"
                    : "bg-muted/50 border-border"
                }`}
              >
                <div className="flex items-start justify-between mb-1">
                  <h4 className="text-sm font-medium">{activity.title}</h4>
                  {activity.completed && (
                    <Badge variant="outline" className="text-xs bg-green-500/10 text-green-600 border-green-500/20">
                      Done
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock size={12} />
                  <span>{activity.time}</span>
                  <span>•</span>
                  <span>{activity.duration}</span>
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card className="rounded-xl shadow-lg lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <CalendarIcon size={20} />
              Upcoming Events
            </CardTitle>
            <CardDescription>Your scheduled activities and deadlines</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between p-4 rounded-lg border bg-card hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg border ${getTypeColor(event.type)}`}>
                    {getTypeIcon(event.type)}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">{event.title}</h4>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CalendarIcon size={12} />
                      <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      <span>•</span>
                      <Clock size={12} />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>
                {event.priority === "high" && (
                  <Badge variant="destructive" className="text-xs">
                    <AlertCircle size={12} className="mr-1" />
                    High Priority
                  </Badge>
                )}
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Calendar Grid Placeholder */}
      <Card className="rounded-xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">December 2025</CardTitle>
          <CardDescription>Full month view</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2">
            {/* Day headers */}
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-center text-sm font-medium text-muted-foreground p-2">
                {day}
              </div>
            ))}
            {/* Calendar days */}
            {Array.from({ length: 35 }, (_, i) => {
              const day = i - 2; // Start from day 1 on Monday
              const isToday = day === 29;
              const hasEvent = [2, 3, 5, 7, 10].includes(day);
              
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.01 }}
                  className={`aspect-square p-2 rounded-lg border text-center text-sm ${
                    day < 1 || day > 31
                      ? "bg-muted/30 text-muted-foreground/30"
                      : isToday
                      ? "bg-primary text-primary-foreground font-bold"
                      : hasEvent
                      ? "bg-green-500/10 border-green-500/20 font-medium"
                      : "bg-card hover:bg-muted/50"
                  } transition-colors cursor-pointer`}
                >
                  {day > 0 && day <= 31 ? day : ""}
                </motion.div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
