"use client";

import { Input } from "@/components/ui/input";
import { Button2 } from "@/components/ui/button2";
import { Bell, Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-white/5 backdrop-blur-xl shadow-md rounded-xl px-6 py-4 flex items-center justify-between">
      
      {/* Search */}
      <div className="relative w-64">
        <Input
          placeholder="Search topics, lessons..."
          className="pl-8 bg-white/10 backdrop-blur-sm border-none text-white placeholder:text-gray-300"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        <Button2 className="flex items-center gap-1 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm shadow-sm">
          <Sparkles size={16} /> Ask AI
        </Button2>

        <Bell className="h-5 w-5 cursor-pointer text-gray-300 hover:text-white transition" />
      </div>
    </header>
  );
}