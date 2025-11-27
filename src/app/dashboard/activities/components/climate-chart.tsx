"use client";

import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const sampleData = [
  { month: "Jan", score: 40 },
  { month: "Feb", score: 55 },
  { month: "Mar", score: 60 },
  { month: "Apr", score: 72 },
  { month: "May", score: 68 },
  { month: "Jun", score: 80 },
];

export function ClimateChart() {
  return (
    <div className="w-full h-64 rounded-3xl p-5 shadow-[0_0_25px_-8px_rgba(0,0,0,0.25)] dark:shadow-[0_0_25px_-8px_rgba(0,0,0,0.45)] bg-[#f4f4f4] dark:bg-neutral-800/40">
      <h2 className="text-sm text-black dark:text-muted-foreground mb-2">
        Learning Trend (Last 6 Months)
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={sampleData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
          <defs>
            <linearGradient id="climateColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#16a34a" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#16a34a" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" strokeOpacity={0.2} />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: "var(--foreground)" }} />
          <YAxis tick={{ fontSize: 12, fill: "var(--foreground)" }} />
          <Tooltip
            contentStyle={{
              background: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "10px",
            }}
            labelStyle={{ color: "hsl(var(--foreground))" }}
          />

          <Area
            type="monotone"
            dataKey="score"
            stroke="#16a34a"
            strokeWidth={2}
            fill="url(#climateColor)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}