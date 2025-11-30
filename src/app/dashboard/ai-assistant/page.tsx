"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MessagesSquare } from "lucide-react";

export default function AIAssistantPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-blue-500">
        <MessagesSquare size={32} className="text-white" />
      </div>
      <Card className="max-w-md">
        <CardContent className="p-8 text-center">
          <h1 className="text-2xl font-bold mb-2">AI Assistant</h1>
          <p className="text-muted-foreground">
            Your personalized climate education assistant is coming soon. Get ready for intelligent recommendations and instant answers to your climate questions.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
