"use client";

import { Monthly } from "@/lib/definitions";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface ChartProps {
  data: {
    month: string | number;
    totalPemasukan?: number;
    totalPengeluaran?: number;
  }[];
}

export function Chart({ data }: ChartProps) {
  const formatValue = (value: number) => {
    if (value >= 1000000000) {
      return `Rp${(value / 1000000000).toFixed(1)}M`;
    } else if (value >= 1000000) {
      return `Rp${(value / 1000000).toFixed(1)}JT`;
    } else if (value >= 1000) {
      return `Rp${(value / 1000).toFixed(1)}K`;
    } else {
      return value;
    }
  };

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          left: 5,
        }}
      >
        <XAxis
          dataKey="month"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${formatValue(value)}`}
        />
        <Tooltip />
        <Bar dataKey="totalPemasukan" fill="#2563eb" radius={[4, 4, 0, 0]} />
        <Bar dataKey="totalPengeluaran" fill="#3ad8f7" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
