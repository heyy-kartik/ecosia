"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MoreHorizontal } from "lucide-react";

interface TopicItem {
  topic: string;
  mastery: number;
  difficulty: "Easy" | "Medium" | "Hard";
  status: "Not Started" | "In Progress" | "Done";
  nextStep: string;
  reviewer: string;
}

interface TopicsTableProps {
  items?: TopicItem[];
  className?: string;
}

export function TopicsTable({ items, className }: TopicsTableProps) {
  const defaultItems: TopicItem[] = [
    {
      topic: "Renewable Energy",
      mastery: 72,
      difficulty: "Medium",
      status: "In Progress",
      nextStep: "Complete solar energy lesson",
      reviewer: "AI",
    },
    {
      topic: "Carbon Footprint Basics",
      mastery: 40,
      difficulty: "Easy",
      status: "Not Started",
      nextStep: "Take introductory quiz",
      reviewer: "AI",
    },
    {
      topic: "Climate Systems",
      mastery: 88,
      difficulty: "Hard",
      status: "Done",
      nextStep: "Review advanced notes",
      reviewer: "Mentor",
    },
  ];

  const rows = items || defaultItems;

  const getDifficultyStyle = (diff: TopicItem["difficulty"]) => {
    if (diff === "Easy") return "bg-green-300/50 dark:bg-green-500/40 text-black dark:text-white";
    if (diff === "Medium") return "bg-yellow-300/50 dark:bg-yellow-500/40 text-black dark:text-white";
    return "bg-red-300/50 dark:bg-red-500/40 text-black dark:text-white";
  };

  const getStatusStyle = (status: TopicItem["status"]) => {
    if (status === "Done") return "bg-green-300/50 dark:bg-green-600/40 text-black dark:text-white";
    if (status === "In Progress") return "bg-blue-300/50 dark:bg-blue-500/40 text-black dark:text-white";
    return "bg-gray-300/50 dark:bg-gray-500/40 text-black dark:text-white";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "rounded-2xl p-6 bg-[#f4f4f4] dark:bg-neutral-800/40 shadow-sm",
        className
      )}
    >
      <h2 className="text-sm mb-4 font-medium text-black dark:text-white">
        Topics Overview
      </h2>

      <Table className="">
        <TableHeader>
          <TableRow className="rounded-xl">
            <TableHead className="text-black dark:text-white">Topic</TableHead>
            <TableHead className="text-black dark:text-white">Mastery</TableHead>
            <TableHead className="text-black dark:text-white">Difficulty</TableHead>
            <TableHead className="text-black dark:text-white">Status</TableHead>
            <TableHead className="text-black dark:text-white">Next Step</TableHead>
            <TableHead className="text-black dark:text-white">Reviewer</TableHead>
            <TableHead className="text-right text-black dark:text-white">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {rows.map((item, index) => (
            <motion.tr
              key={index}
              initial={{ opacity: 0, x: 6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * index }}
              className="rounded-xl transition bg-transparent"
            >
              <TableCell className="text-black dark:text-white font-medium">
                {item.topic}
              </TableCell>

              <TableCell className="text-black dark:text-white">
                {item.mastery}%
              </TableCell>

              <TableCell>
                <div
                  className={cn(
                    "px-3 py-1 rounded-md text-sm font-medium",
                    getDifficultyStyle(item.difficulty)
                  )}
                >
                  {item.difficulty}
                </div>
              </TableCell>

              <TableCell>
                <div
                  className={cn(
                    "px-3 py-1 rounded-md text-sm font-medium",
                    getStatusStyle(item.status)
                  )}
                >
                  {item.status}
                </div>
              </TableCell>

              <TableCell className="text-gray-700 dark:text-gray-200">
                {item.nextStep}
              </TableCell>

              <TableCell className="text-black dark:text-white">
                {item.reviewer}
              </TableCell>

              <TableCell className="text-right">
                <MoreHorizontal className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition" />
              </TableCell>
            </motion.tr>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  );
}