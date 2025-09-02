import React from "react";
import styles from "./USDEconomicGraph.module.scss";

interface ChartProps {
    id: string;
    data: { label: string; value: number }[];
    color: string;
    title: string;
    maxValue?: number;
    yAxisLabels: number[];
}

export default function USDEconomicGraph() {
    const gdpData = [
        { label: 'Q4\n2022', value: 2.0 },
        { label: 'Q1\n2023', value: 1.0 },
        { label: 'Q2\n2023', value: 3.0 },
        { label: 'Q3\n2023', value: 4.0 },
        { label: 'Q4\n2023', value: 5.0 },
        { label: 'Q2\n2024', value: 6.0 },
        { label: 'Q3\n2024', value: 2.4 }
    ];

    const interestRateData = [
        { label: 'Feb 2024', value: 5.4 },
        { label: 'Mar 2024', value: 5.4 },
        { label: 'Apr 2024', value: 5.4 },
        { label: 'May 2024', value: 5.4 },
        { label: 'Jun 2024', value: 5.4 },
        { label: 'Jul 2024', value: 5.4 },
        { label: 'Aug 2024', value: 5.4 },
        { label: 'Sep 2024', value: 5.0 },
        { label: 'Oct 2024', value: 4.6 },
        { label: 'Nov 2024', value: 4.6 },
    ];

    const unemploymentData = [
        { label: 'Feb 2024', value: 2.4 },
        { label: 'Mar 2024', value: 2.4 },
        { label: 'Apr 2024', value: 2.4 },
        { label: 'May 2024', value: 2.4 },
        { label: 'Jun 2024', value: 3.4 },
        { label: 'Jul 2024', value: 3.4 },
        { label: 'Aug 2024', value: 3.4 },
        { label: 'Sep 2024', value: 3.4 },
        { label: 'Oct 2024', value: 3.4 },
        { label: 'Nov 2024', value: 2.4 },
    ];

    const inflationData = [
        { label: 'Feb 2024', value: 2.9 },
        { label: 'Mar 2024', value: 2.9 },
        { label: 'Apr 2024', value: 2.9 },
        { label: 'May 2024', value: 2.9 },
        { label: 'Jun 2024', value: 4 },
        { label: 'Jul 2024', value: 4 },
        { label: 'Aug 2024', value: 4 },
        { label: 'Sep 2024', value: 4 },
        { label: 'Oct 2024', value: 4 },
        { label: 'Nov 2024', value: 2.3 },
    ];

    const BarChart: React.FC<ChartProps> = ({
        id,
        data,
        color,
        title,
        maxValue = 6,
        yAxisLabels
    }) => (
        <div className={`${styles.chart} ${styles[id]}`}>
            <h2>{title}</h2>
            <div className={styles.chartArea}>
                <div className={styles.yAxis}>
                    {yAxisLabels.map((value, index) => (
                        <div key={index} className={styles.yAxisLabel}>
                            <span>{value}</span>
                        </div>
                    ))}
                </div>

                <div className={styles.gridLines}>
                    {yAxisLabels.map((value, index) => (
                        <div
                            key={index}
                            className={styles.line}
                            style={{ top: `${(index / (yAxisLabels.length - 1)) * 100}%` }}
                        />
                    ))}
                </div>

                <div className={styles.bars}>
                    {data.map((item, index) => {
                        const barHeight = Math.max((item.value / maxValue) * 100, 2);
                        return (
                            <div key={index} className={styles.barWrapper}>
                                <div className={styles.barContainer}>
                                    <div
                                        className={styles.bar}
                                        style={{ height: `${barHeight}%`, backgroundColor: color }}
                                    >
                                        <span className={styles.value}>{item.value}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className={styles.xAxis}>
                    {data.map((item, index) => (
                        <div key={index} className={styles.labelWrapper}>
                            <span
                                className={`${styles.label} ${title === "GDP" ? styles.gdp : styles.rotated
                                    }`}
                            >
                                {title === "GDP" ? item.label : item.label.replace("\n", " ")}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div className={styles.economicGraphContainer}>
            <BarChart
                id="gdp-chart"
                data={gdpData}
                color="#22c55e"
                title="GDP"
                maxValue={6}
                yAxisLabels={[6, 4, 2, 0]}
            />
            <BarChart
                id="interest-rate-chart"
                data={interestRateData}
                color="#3b82f6"
                title="Interest Rate"
                maxValue={8}
                yAxisLabels={[8, 6, 4, 2, 0]}
            />
            <BarChart
                id="unemployment-chart"
                data={unemploymentData}
                color="#FF0000"
                title="Un employment"
                maxValue={4}
                yAxisLabels={[4, 3, 2, 1, 0]}
            />
            <BarChart
                id="inflation-chart"
                data={inflationData}
                color="#FFFF00"
                title="Inflation"
                maxValue={5}
                yAxisLabels={[5, 4, 3, 2, 1, 0]}
            />
        </div>
    );
};