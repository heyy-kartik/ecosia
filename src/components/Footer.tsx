"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Footer() {
  return (
    <footer className="relative z-20 w-full bg-background/80 backdrop-blur border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
        >
          {/* Brand Section */}

          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <Image
                src="/ecosia-logo.svg"
                alt="Ecosia Logo"
                width={40}
                height={40}
                className="rounded-md"
              />
              <div>
                <p className="font-bold text-foreground text-lg">
                  ECOSIA PCCOE
                </p>
                <p className="text-xs text-muted-foreground">
                  Climate Education — Powered by AI
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Empowering individuals with the knowledge and tools to understand
              climate change through AI-personalized educational content.
            </p>
            <div className="text-sm text-muted-foreground">
              Made with <span className="text-green-500">🌱</span> for a
              sustainable future
            </div>
          </div>

          {/* Learning Paths */}

          <div>
            <p className="font-semibold text-white/90 mb-4 tracking-wide">
              Learning Paths{" "}
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/content?category=basics"
                  className="hover:text-white transition-all duration-200"
                >
                  Climate Basics
                </Link>
              </li>
              <li>
                <Link
                  href="/content?category=science"
                  className="hover:text-white transition-all duration-200"
                >
                  Climate Science
                </Link>
              </li>
              <li>
                <Link
                  href="/content?category=solutions"
                  className="hover:text-white transition-all duration-200"
                >
                  Climate Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/content?category=action"
                  className="hover:text-white transition-all duration-200"
                >
                  Climate Action
                </Link>
              </li>
              <li>
                <Link
                  href="/content?category=policy"
                  className="hover:text-white transition-all duration-200"
                >
                  Climate Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Age Groups */}
          <div>
            <h3 className="font-semibold text-white/90 mb-4 tracking-wide">
              Age Groups
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/content?ageGroup=children"
                  className="hover:text-white transition-all duration-200"
                >
                  Children (6-12)
                </Link>
              </li>
              <li>
                <Link
                  href="/content?ageGroup=teens"
                  className="hhover:text-white transition-all duration-200"
                >
                  Teens (13-17)
                </Link>
              </li>
              <li>
                <Link
                  href="/content?ageGroup=adults"
                  className="hhover:text-white transition-all duration-200"
                >
                  Adults (18+)
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="hover:text-white transition-all duration-200"
                >
                  Personal Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/onboarding"
                  className="hover:text-white transition-all duration-200"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white/90 mb-4 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-all duration-200"
                >
                  About ECOSIA
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="hover:text-white transition-all duration-200"
                >
                  How AI Works
                </Link>
              </li>
              <li>
                <Link
                  href="/content"
                  className="hover:text-white transition-all duration-200"
                >
                  Browse Content
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="hover:text-white transition-all duration-200"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="hover:text-white transition-all duration-200"
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-6">
            <Link
              href="/terms"
              className="hover:text-accent-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="hover:text-accent-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="hover:text-accent-foreground transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/accessibility"
              className="hover:text-accent-foreground transition-colors"
            >
              Accessibility
            </Link>
          </div>
          <div className="text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} ECOSIA PCCOE. Building climate literacy
            for all.
          </div>
        </div>
      </div>
    </footer>
  );
}
