"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { DashboardLayout } from "@/components/dashboard-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IconBook, IconClock, IconPlayerPlay } from "@tabler/icons-react";

type Tutorial = {
  id: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string; // e.g. "12 min"
  href?: string;
};

const TUTORIALS: Tutorial[] = [
  {
    id: "climate-basics",
    title: "Climate Basics",
    description:
      "Understand greenhouse gases, weather vs. climate, and why warming matters.",
    level: "Beginner",
    duration: "10 min",
    href: "/content",
  },
  {
    id: "renewables-101",
    title: "Renewable Energy 101",
    description:
      "Solar, wind, and hydro explained simply with real-world examples.",
    level: "Beginner",
    duration: "12 min",
    href: "/content",
  },
  {
    id: "carbon-footprint",
    title: "Your Carbon Footprint",
    description:
      "Learn how daily choices affect emissions and how to reduce them.",
    level: "Intermediate",
    duration: "14 min",
    href: "/content",
  },
  {
    id: "sustainable-living",
    title: "Sustainable Living",
    description:
      "Practical tips on food, travel, and home energy that add up.",
    level: "Intermediate",
    duration: "11 min",
    href: "/content",
  },
  {
    id: "biodiversity-ecosystems",
    title: "Biodiversity & Ecosystems",
    description:
      "Why species loss matters and how ecosystems support life.",
    level: "Advanced",
    duration: "15 min",
    href: "/content",
  },
  {
    id: "policy-action",
    title: "Policy & Action",
    description:
      "How climate policy works and where individuals can make impact.",
    level: "Advanced",
    duration: "16 min",
    href: "/content",
  },
];

const levels: Array<Tutorial["level"] | "All"> = [
  "All",
  "Beginner",
  "Intermediate",
  "Advanced",
];

export default function TutorialsPage() {
  const [level, setLevel] = useState<(typeof levels)[number]>("All");

  const filtered = useMemo(() => {
    if (level === "All") return TUTORIALS;
    return TUTORIALS.filter((t) => t.level === level);
  }, [level]);

  return (
    <DashboardLayout>
      <section className="mx-auto w-full max-w-7xl px-6 py-8">
        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
            <IconBook className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold leading-tight">Tutorials</h1>
            <p className="text-muted-foreground text-sm">
              Short, focused lessons to build climate literacy fast.
            </p>
          </div>
        </div>

        {/* Level Filter */}
        <div className="mb-6 flex flex-wrap gap-2">
          {levels.map((l) => (
            <Button
              key={l}
              variant={level === l ? "default" : "outline"}
              size="sm"
              onClick={() => setLevel(l)}
            >
              {l}
            </Button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tut) => (
            <Card key={tut.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="line-clamp-1">{tut.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {tut.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary">{tut.level}</Badge>
                  <Badge variant="outline" className="gap-1">
                    <IconClock className="h-3.5 w-3.5" /> {tut.duration}
                  </Badge>
                </div>
              </CardContent>
              <CardFooter className="justify-between">
                <span className="text-xs text-muted-foreground">Free</span>
                <Button asChild size="sm">
                  <Link href={tut.href || "#"} className="inline-flex items-center gap-1">
                    Start <IconPlayerPlay className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No tutorials found for this level.</p>
          </div>
        )}
      </section>
    </DashboardLayout>
  );
}
