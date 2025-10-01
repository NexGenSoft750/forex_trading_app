"use client";

import styles from "./PortfilioPieChart.module.scss";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const pieData = [
    { name: "Win", value: 100, color: "#09d950" },
];

export default function PortfolioPieChart() {
    return (
        <div className={styles['pie-chart-wrapper']}>
            <div className={styles['pie-chart-container']}>
                <div className={styles['title-text']}>win % loss %</div>
                <div className={styles['chart-content']}>
                    <ResponsiveContainer width="100%" height={220}>
                        <PieChart>
                            <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                innerRadius={0}
                                outerRadius={100}
                                fill="#09d950"
                                paddingAngle={0}
                                dataKey="value"
                                stroke="none"
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <h2 className={styles.heading}>
                Pie Chart
            </h2>
        </div>
    )
}