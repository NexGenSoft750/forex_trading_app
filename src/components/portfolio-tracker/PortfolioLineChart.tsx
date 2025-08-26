"use client";

import styles from "./PortfolioLineChart.module.scss";
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line } from "recharts";

export const data = [
  { day: 1, value: 10000 },
  { day: 2, value: 10800 },
  { day: 2.5, value: 11100 },
  { day: 3, value: 14000 },
];

export default function PortfolioLineChart () {
  return (
      <div className={styles['line-chart-container']}>
        <h2 className={styles.heading}>
          Comulative P/L vs. Date
        </h2>
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 30, bottom: 20 }}
            >
            <CartesianGrid stroke="#e0e0e0" />
            <XAxis
                dataKey="day"
                type="number"
                domain={[1, 4]}
                tick={({ x, y }) => <text x={x} y={y} />} 
                axisLine={true}  
                tickLine={true} 
                label={{
                    value: "Date",
                    position: "insideBottom",
                    offset: -5,
                    style: {
                    fontWeight: "bold",
                    fontSize: 16,
                    },
                }}
            />
            <YAxis
                label={{
                value: "Cumulative P/L",
                angle: -90,
                position: "insideMiddle", 
                dx: -52,
                style: {
                    fontWeight: "bold",   
                    fontSize: 16,       
                  },
                }}
                domain={[0, 15000]}
                ticks={[0, 5000, 10000, 15000]}
                tickFormatter={(v) => `$${v.toLocaleString()}.00`}
            />
            <Tooltip formatter={(v) => `$${v}`} />
            <Line
                type="monotone"
                dataKey="value"
                stroke="green"
                dot={false}
                strokeWidth={2}
            />
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}   