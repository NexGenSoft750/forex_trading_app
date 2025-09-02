import React from "react";
import styles from "./COTReportIndexChart.module.scss";

interface DataPoint {
    x: string;
    y: number;
}

interface COTIndexChartProps {
    title?: string;
    lineColor?: string;
    gridValues?: number[];
    dataPoints: DataPoint[];
    yLabel?: string;
}

const COTReportIndexChart: React.FC<COTIndexChartProps> = ({
    title = "COT INDEX/index vs DATE",
    yLabel = "COT INDEX/index",
    lineColor = "#ff3333",
    gridValues = [100, 75, 50, 25, 0],
    dataPoints,
}) => {
    const width = 520;
    const height = 320;
    const margin = { top: 60, right: 40, bottom: 80, left: 80 };

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const maxY = Math.max(...gridValues);
    const minY = Math.min(...gridValues);

    const xScale = (index: number) =>
        (index / (dataPoints.length - 1)) * innerWidth;
    const yScale = (value: number) =>
        innerHeight - ((value - minY) / (maxY - minY)) * innerHeight;

    const pathData = dataPoints
        .map((p, i) => `${i === 0 ? "M" : "L"} ${xScale(i)},${yScale(p.y)}`)
        .join(" ");

    return (
        <div className={styles["chart-container"]} style={{ width }}>
            <div className={styles.title}>{title}</div>

            <svg width={width} height={height}>
                <g transform={`translate(${margin.left},${margin.top})`}>
                    {gridValues.map((val, i) => {
                        const y = yScale(val);
                        return (
                            <g key={i}>
                                <line
                                    x1={0}
                                    y1={y}
                                    x2={innerWidth}
                                    y2={y}
                                    className={styles["grid-line"]}
                                />
                                <text x={-10} y={y} className={styles["y-tick"]}>
                                    {val.toLocaleString()}
                                </text>
                            </g>
                        );
                    })}

                    {/* Y axis label */}
                    <text
                        transform="rotate(-90)"
                        x={-180}
                        y={-50}
                        className={styles["y-label"]}
                    >
                        {yLabel}
                    </text>
                    COTReportIndexChart
                    {/* Line path */}
                    <path
                        d={pathData}
                        className={styles["line-path"]}
                        stroke={lineColor}
                    />

                    {/* Data points */}
                    {dataPoints.map((point, i) => (
                        <circle
                            key={i}
                            cx={xScale(i)}
                            cy={yScale(point.y)}
                            className={styles["point"]}
                            fill={lineColor}
                        />
                    ))}

                    {/* X-axis labels */}
                    {dataPoints.map((point, i) => (
                        <text
                            key={i}
                            x={xScale(i)}
                            y={innerHeight + 35}
                            className={styles["x-label"]}
                            transform={`rotate(-45, ${xScale(i)}, ${innerHeight + 35})`}
                        >
                            {point.x}
                        </text>
                    ))}
                </g>
            </svg>
        </div>
    );
};

export default COTReportIndexChart;