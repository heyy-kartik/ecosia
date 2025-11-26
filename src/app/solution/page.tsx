"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { TextEffect } from "@/components/ui/text-effect";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FeaturesSectionWithBentoGrid } from "@/components/blocks/feature-section-with-bento-grid";

const milestones = [
  {
    title: "Phase 1: Ideation",
    description:
      "Laying the groundwork through user research, competitive analysis, and defining the product vision. We identified core user personas and established success metrics to ensure a strong problem-solution fit.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white text-2xl font-bold">
        Ideation
      </div>
    ),
  },
  {
    title: "Phase 2: Design",
    description:
      "Crafting the user experience with journey maps, wireframes, and high-fidelity mockups. We focused on creating an intuitive information architecture and a consistent design system using Figma.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--indigo-500))] flex items-center justify-center text-white text-2xl font-bold">
        Design
      </div>
    ),
  },
  {
    title: "Phase 3: MVP Development",
    description:
      "Building the core foundation with Next.js, Clerk authentication, and MongoDB. We implemented key features like user dashboards, content delivery, and the initial AI recommendation system.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white text-2xl font-bold">
        MVP Development
      </div>
    ),
  },
  {
    title: "Phase 4: Testing & QA",
    description:
      "Ensuring reliability and quality through comprehensive functional testing, security audits, and user acceptance testing. We optimized performance and ensured accessibility standards were met.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white text-2xl font-bold">
        Testing & QA
      </div>
    ),
  },
  {
    title: "Phase 5: Launch",
    description:
      "Deploying to production, activating marketing campaigns, and onboarding the first cohort of users. We established monitoring systems and support channels for a smooth rollout.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--indigo-500))] flex items-center justify-center text-white text-2xl font-bold">
        Launch
      </div>
    ),
  },
  {
    title: "Phase 6: Feedback & Iteration",
    description:
      "Analyzing user behavior and feedback to refine the platform. We prioritized enhancements, conducted A/B tests, and improved AI personalization based on real-world data.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white text-2xl font-bold">
        Feedback & Iteration
      </div>
    ),
  },
  {
    title: "Phase 7: Scale-Up",
    description:
      "Expanding the content library, developing mobile apps, and forming institutional partnerships. We focused on technical scaling and introducing advanced features like VR simulations.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white text-2xl font-bold">
        Scale-Up
      </div>
    ),
  },
];

export default function SolutionPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 text-center space-y-8">
        <div className="space-y-4">
          <TextEffect
            as="h1"
            preset="fade"
            per="char"
            className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
          >
            AI-Driven Climate Education Platform
          </TextEffect>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Empowering individuals with knowledge and tools to understand climate
            change through personalized, engaging, and actionable learning
            experiences.
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/sign-up">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#features">Learn More</Link>
          </Button>
        </div>
      </section>

      <Separator className="max-w-7xl mx-auto" />

      {/* Core Features Section with Bento Grid */}
      <section id="features" className="py-16 px-4 md:px-8 lg:px-16 bg-muted/30">
        <FeaturesSectionWithBentoGrid />
      </section>

      <Separator className="max-w-7xl mx-auto" />

      {/* Milestones Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
              Milestones & Workflow
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our journey from ideation to a scalable educational platform.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <StickyScroll content={milestones} />
        </div>
      </section>
    </div>
  );
}