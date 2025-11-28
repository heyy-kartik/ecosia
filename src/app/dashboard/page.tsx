"use client";

import { useState } from "react";
import { StatCard } from "./activities/components/stat-card";
import { ClimateChart } from "./activities/components/climate-chart";
import { LearningPathCard } from "@/components/learning-path-card";
import { TopicsTable } from "./activities/components/topics-table";

import { Leaf, Target, BookOpen, Sparkles } from "lucide-react";
import {
  LayoutDashboard,
  Route,
  BarChart3,
  MessagesSquare,
  Settings,
} from "lucide-react";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useScroll } from "framer-motion";
import Link from "next/link";

// Import Shadcn Sidebar components
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const scrollReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const parallax: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

// Navigation menu data
const menuData = {
  home: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Learning Path",
      url: "/dashboard/activities/learningPath",
      icon: Route,
    },
    {
      title: "Quizzes",
      url: "/dashboard/quizzes",
      icon: BookOpen,
    },
    {
      title: "Activities",
      url: "#",
      icon: Sparkles,
    },
    {
      title: "Insights",
      url: "/dashboard/insights",
      icon: BarChart3,
    },
    {
      title: "AI Assistant",
      url: "/dashboard/ai-assistant",
      icon: MessagesSquare,
    },
  ],
  documents: [
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ],
};

export default function DashboardPage() {
  const [tab, setTab] = useState("Overview");
  const { scrollY } = useScroll();

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-background overflow-hidden">
        {/* Shadcn Sidebar */}
        <Sidebar
          variant="inset"
          className="bg-sidebar border-sidebar-border h-screen"
        >
          <SidebarHeader className="shrink-0 border-b border-sidebar-border">
            <div className="flex items-center gap-2 px-2 py-2">
              <Leaf className="text-green-200" size={22} />
              <span className="text-lg font-semibold tracking-tight">
                Ecosia
              </span>
            </div>
          </SidebarHeader>

          <SidebarContent className="flex-1 overflow-hidden">
            {/* Home Section */}
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs uppercase tracking-wider text-sidebar-foreground/70">
                Home
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuData.home.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        isActive={item.isActive}
                        className="w-full justify-start"
                      >
                        <Link
                          href={item.url}
                          className="flex items-center gap-3"
                        >
                          <item.icon size={18} />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* Documents Section */}
            <SidebarGroup className="mt-2">
              <SidebarGroupLabel className="text-xs uppercase tracking-wider text-sidebar-foreground/70">
                Documents
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuData.documents.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        className="w-full justify-start"
                      >
                        <Link
                          href={item.url}
                          className="flex items-center gap-3"
                        >
                          <item.icon size={18} />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        {/* Main Content */}
        <SidebarInset className="flex flex-col h-screen overflow-hidden">
          {/* Header with trigger */}
          <header className="flex h-16 shrink-0 items-center gap-2 px-4 border-b border-sidebar-border bg-background z-10">
            <SidebarTrigger className="" />
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-semibold">Dashboard</h1>
            </div>
          </header>

          {/* Dashboard Content - Single scrollable area */}
          <div className="flex-1 overflow-y-scroll overflow-x-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="overflow-hidden"
            >
              {/* Overview Tab */}
              {tab === "Overview" && (
                <div className="flex flex-col gap-10">
                  {/* Stat Cards */}
                  <motion.div
                    variants={parallax}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                  >
                    <StatCard
                      title="Climate Score"
                      value="78"
                      subtitle="Your overall understanding"
                      trend="+12% this week"
                      icon={<Leaf size={18} />}
                    />
                    <StatCard
                      title="Quiz Accuracy"
                      value="85%"
                      subtitle="Across last 5 quizzes"
                      icon={<Target size={18} />}
                    />
                    <StatCard
                      title="Lessons Completed"
                      value="14"
                      subtitle="Across all climate topics"
                      icon={<BookOpen size={18} />}
                    />
                    <StatCard
                      title="Activity Points"
                      value="260"
                      subtitle="Earned from climate tasks"
                      icon={<Sparkles size={18} />}
                    />
                  </motion.div>

                  {/* Climate Chart — full width & spacious */}
                  <motion.div
                    variants={parallax}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    className="w-full"
                  >
                    <ClimateChart />
                  </motion.div>

                  {/* Learning Path — horizontal full width */}
                  <motion.div
                    variants={parallax}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    className="w-full"
                  >
                    <LearningPathCard />
                  </motion.div>

                  {/* Topics Table */}
                  <motion.div
                    variants={parallax}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    className="w-full"
                  >
                    <TopicsTable />
                  </motion.div>
                </div>
              )}

              {tab === "Quizzes" && (
                <div className="text-muted-foreground text-lg opacity-70">
                  Quizzes page coming soon…
                </div>
              )}

              {tab === "Activities" && (
                <div className="text-muted-foreground text-lg opacity-70">
                  Activities page coming soon…
                </div>
              )}

              {tab === "Learning Path" && (
                <div className="text-muted-foreground text-lg opacity-70">
                  Full learning path page coming soon…
                </div>
              )}

              {tab === "Insights" && (
                <div className="text-muted-foreground text-lg opacity-70">
                  Insights page coming soon…
                </div>
              )}
            </motion.div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
