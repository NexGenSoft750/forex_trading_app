"use client";

import styles from "./PortfilioPieChart.module.scss";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const pieData = [
  { name: "Crypto", value: 25, color: "#FF0000" },
  { name: "Cash", value: 6, color: "#FFC107" }, 
  { name: "Stocks", value: 69, color: "#4CAF50" }, 
];

export default function PortfolioPieChart() {
  return (
    <div className={styles['pie-chart-container']}>
      <h2 className={styles.heading}>
        PORTFOLIO SUMMARY
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            innerRadius={0}
            outerRadius={150}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
            label={({ percent = 0 }) => `${(percent * 100).toFixed(1)}%`}
            stroke="none" 
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}