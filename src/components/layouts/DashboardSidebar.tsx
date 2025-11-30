"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Leaf } from "lucide-react";
import { navigationConfig, type NavigationItem } from "@/config/navigation";

// TypeScript interfaces for sidebar props
interface SidebarProps {
  navigationItems?: NavigationItem[];
  bottomItems?: NavigationItem[];
  isCollapsed?: boolean;
  onToggle?: () => void;
}

// Memoized navigation item component for performance
const NavigationItemComponent = React.memo(({
  item,
  isActive,
  isCollapsed,
}: {
  item: NavigationItem;
  isActive: boolean;
  isCollapsed: boolean;
}) => {
  const IconComponent = item.icon;

  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ease-in-out",
        "hover:bg-accent hover:text-accent-foreground",
        isActive
          ? "bg-accent text-accent-foreground shadow-sm"
          : "text-muted-foreground hover:text-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "transform hover:scale-[1.02] active:scale-[0.98]"
      )}
    >
      <IconComponent
        size={18}
        className={cn(
          "shrink-0 transition-colors duration-200",
          isActive ? "text-accent-foreground" : "text-muted-foreground"
        )}
      />
      
      {!isCollapsed && (
        <>
          <span className="truncate">{item.title}</span>
          {item.badge && (
            <span className={cn(
              "ml-auto flex h-5 min-w-[20px] items-center justify-center rounded-full px-1.5 text-xs font-medium",
              "bg-primary text-primary-foreground",
              "animate-pulse"
            )}>
              {item.badge}
            </span>
          )}
        </>
      )}
    </Link>
  );
});

NavigationItemComponent.displayName = "NavigationItemComponent";

/**
 * DashboardSidebar - Navigation sidebar component for the dashboard
 * 
 * Features:
 * - Active state management using Next.js usePathname hook
 * - Badge support for navigation items with notification counts
 * - Smooth hover and active state animations using Tailwind CSS
 * - Responsive design with collapse/expand functionality
 * 
 * Requirements addressed:
 * - 1.1: Consistent sidebar navigation across all dashboard pages
 * - 1.3: Active navigation item highlighting
 * - 3.2: Consistent spacing, typography, and visual hierarchy
 */
export function DashboardSidebar({
  navigationItems = navigationConfig.mainItems,
  bottomItems = navigationConfig.bottomItems,
  isCollapsed = false,
  onToggle,
}: SidebarProps) {
  const pathname = usePathname();

  // Check if a navigation item is active based on current pathname
  const isItemActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === "/dashboard";
    }
    return pathname.startsWith(href);
  };

  // Render a navigation item
  const renderNavigationItem = (item: NavigationItem) => {
    const isActive = isItemActive(item.href);

    return (
      <NavigationItemComponent
        key={item.href}
        item={item}
        isActive={isActive}
        isCollapsed={isCollapsed}
      />
    );
  };

  return (
    <div className="flex h-full flex-col bg-muted/50 ">
      {/* Sidebar Header */}
      <div className="flex items-center gap-2 px-6 py-6 ">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 transition-transform duration-200 hover:scale-110">
          <Leaf size={16} className="text-white" />
        </div>
        
        {!isCollapsed && (
          <div className="flex flex-col">
            <h1 className="font-bold text-lg tracking-tight">ECOSIA</h1>
            <p className="text-xs text-muted-foreground">Climate Education</p>
          </div>
        )}
      </div>

      {/* Main Navigation */}
      <div className="flex-1 overflow-y-auto px-3 py-4">
        <nav className="space-y-1">
          {navigationItems.map(renderNavigationItem)}
        </nav>
      </div>

      {/* Bottom Navigation */}
      {bottomItems.length > 0 && (
        <div className="px-3 py-4">
          <nav className="space-y-1">
            {bottomItems.map(renderNavigationItem)}
          </nav>
        </div>
      )}

      {/* Collapse Toggle Button (if onToggle is provided) */}
      {onToggle && (
        <div className=" px-3 py-2">
          <button
            onClick={onToggle}
            className={cn(
              "flex w-full items-center justify-center rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
              "hover:bg-accent hover:text-accent-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            )}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <div className={cn(
              "transition-transform duration-200",
              isCollapsed ? "rotate-180" : "rotate-0"
            )}>
              ←
            </div>
          </button>
        </div>
      )}
    </div>
  );
}

export default DashboardSidebar;