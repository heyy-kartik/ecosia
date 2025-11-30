import {
  LayoutDashboard,
  Route,
  Sparkles,
  BookOpen,
  BarChart3,
  Calendar,
  Target,
  Award,
  MessagesSquare,
  Settings,
  User,
  type LucideIcon,
} from "lucide-react";

/**
 * TypeScript interfaces for navigation configuration
 */
export interface NavigationItem {
  title: string;
  href: string;
  icon: LucideIcon;
  badge?: string | number;
  description?: string;
}

export interface NavigationConfig {
  mainItems: NavigationItem[];
  bottomItems: NavigationItem[];
  userMenuItems: NavigationItem[];
}

/**
 * Centralized navigation configuration for the dashboard
 * 
 * This configuration defines all navigation items, their routes,
 * icons, and optional badges for the dashboard sidebar and menus.
 * 
 * Requirements addressed:
 * - 1.1: Consistent sidebar navigation across all dashboard pages
 * - 1.2: Navigation to correct pages
 * - 4.1-4.5: Routes for all dashboard pages including new pages
 */
export const navigationConfig: NavigationConfig = {
  // Main navigation items displayed in the sidebar
  mainItems: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
      description: "Overview and quick stats",
    },
    {
      title: "Learning Paths",
      href: "/dashboard/learning-paths",
      icon: Route,
      description: "Structured learning courses",
    },
    {
      title: "Activities",
      href: "/dashboard/activities",
      icon: Sparkles,
      description: "Interactive learning activities",
    },
    {
      title: "Quizzes",
      href: "/dashboard/quizzes",
      icon: BookOpen,
      description: "Test your knowledge",
    },
    {
      title: "Progress",
      href: "/dashboard/progress",
      icon: BarChart3,
      description: "Track your learning progress",
    },
    {
      title: "Calendar",
      href: "/dashboard/calendar",
      icon: Calendar,
      description: "Schedule and deadlines",
    },
    {
      title: "Goals",
      href: "/dashboard/goals",
      icon: Target,
      description: "Set and track climate goals",
    },
    {
      title: "Achievements",
      href: "/dashboard/achievements",
      icon: Award,
      description: "Badges and milestones",
    },
    {
      title: "AI Assistant",
      href: "/dashboard/ai-assistant",
      icon: MessagesSquare,
      description: "Get personalized help",
    },
  ],

  // Bottom navigation items (settings, etc.)
  bottomItems: [
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
      description: "Manage your preferences",
    },
  ],

  // User menu items (profile, preferences, etc.)
  userMenuItems: [
    {
      title: "Profile",
      href: "/dashboard/profile",
      icon: User,
      description: "View and edit your profile",
    },
    {
      title: "Preferences",
      href: "/dashboard/preferences",
      icon: Settings,
      description: "Customize your experience",
    },
  ],
};

/**
 * Helper function to get a navigation item by href
 */
export function getNavigationItem(href: string): NavigationItem | undefined {
  const allItems = [
    ...navigationConfig.mainItems,
    ...navigationConfig.bottomItems,
    ...navigationConfig.userMenuItems,
  ];
  return allItems.find((item) => item.href === href);
}

/**
 * Helper function to check if a path is active
 */
export function isPathActive(currentPath: string, itemPath: string): boolean {
  if (itemPath === "/dashboard") {
    return currentPath === "/dashboard";
  }
  return currentPath.startsWith(itemPath);
}
