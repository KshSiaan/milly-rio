"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { day: "Mon", revenue: 1000 },
  { day: "Tue", revenue: 3200 },
  { day: "Wed", revenue: 1800 },
  { day: "Thu", revenue: 4200 },
  { day: "Fri", revenue: 3900 },
  { day: "Sat", revenue: 4400 },
  { day: "Sun", revenue: 2300 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function ChartPart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ChartContainer className="h-full w-full" config={chartConfig}>
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
            top: 20,
            bottom: 20,
          }}
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1EE9B6" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#ab47bc" stopOpacity={0.4} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={{ stroke: "#ddd" }}
            tickMargin={8}
          />

          <YAxis
            tickLine={false}
            axisLine={{ stroke: "#ddd" }}
            tickFormatter={(value) => `$${value / 1000}k`}
          />

          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />

          <Area
            dataKey="revenue"
            type="linear"
            fill="url(#gradient)"
            stroke="url(#gradient)"
            strokeWidth={2}
          />
        </AreaChart>
      </ChartContainer>
    </ResponsiveContainer>
  );
}
