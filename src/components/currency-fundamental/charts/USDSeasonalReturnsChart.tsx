import React from "react";
import styles from "./USDSeasonalReturnsChart.module.scss";

export default function USDSeasonalReturnsChart({ chartHeading }: { chartHeading: string }) {
    interface DataPoint {
        month: string;
        value: number;
        positive: boolean;
    }

    const data: DataPoint[] = [
        { month: "Feb", value: 0.72, positive: true },
        { month: "Mar", value: 0.45, positive: true },
        { month: "Apr", value: -0.36, positive: false },
        { month: "May", value: 0.94, positive: true },
        { month: "Jun", value: 0.51, positive: true },
        { month: "Jul", value: -0.65, positive: false },
        { month: "Aug", value: 0.88, positive: true },
        { month: "Sep", value: -0.5, positive: false },
        { month: "Oct", value: 0.37, positive: true },
        { month: "Nov", value: -0.55, positive: false },
        { month: "Dec", value: 0.63, positive: true },
    ];

    const maxValue = 1.5;
    const minValue = -1.0;
    const chartHeight = 350;
    const chartWidth = 1000;

    const range = maxValue - minValue;
    const steps = 5;

    const ticks = Array.from({ length: steps + 1 }, (_, i) =>
        parseFloat((maxValue - i * (range / steps)).toFixed(2))
    );

    const valueToY = (value: number) =>
        30 + ((maxValue - value) / range) * 270;

    const getBarHeight = (value: number) =>
        (Math.abs(value) / range) * 270;

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{chartHeading}</h2>
            <div className={styles.scrollWrapper}>
                <div
                    className={styles.chart}
                    style={{ width: chartWidth, height: chartHeight }}
                >
                    {ticks.map((tick, i) => {
                        const topPx = valueToY(tick);
                        const isLastGridLine = tick === minValue;
                        return (
                            <React.Fragment key={i}>
                                <div
                                    className={styles.gridLine}
                                    style={{
                                        top: `${topPx}px`,
                                        backgroundColor: isLastGridLine ? 'white' : '#333'
                                    }}
                                />
                                <div
                                    className={styles.gridLabel}
                                    style={{ top: `${topPx - 8}px` }}
                                >
                                    {tick.toFixed(1)}
                                </div>
                            </React.Fragment>
                        );
                    })}

                    {data.map((item, index) => {
                        const barWidth = 70;
                        const spacing = 85;
                        const startX = 80;
                        const x = startX + index * spacing;
                        const barHeight = getBarHeight(item.value);
                        const y = valueToY(item.value);

                        return (
                            <div key={item.month}>
                                <div
                                    className={`${styles.bar} ${item.positive ? styles.positive : styles.negative
                                        }`}
                                    style={{
                                        left: x,
                                        top: item.value >= 0 ? y : valueToY(0),
                                        width: barWidth,
                                        height: barHeight,
                                    }}
                                />

                                <div
                                    className={styles.valueLabel}
                                    style={{
                                        left: x,
                                        top: item.positive ? y + 10 : valueToY(0) + barHeight - 25,
                                    }}
                                >
                                    {item.value.toFixed(2)}
                                </div>

                                <div
                                    className={styles.monthLabel}
                                    style={{
                                        left: x,
                                        // top: chartHeight - 30,
                                        top: 330,
                                        width: barWidth,
                                    }}
                                >
                                    {item.month}
                                </div>
                            </div>
                        );
                    })}

                    <div
                        className={styles.zeroLine}
                        style={{ top: `${valueToY(0)}px` }}
                    />
                </div>
            </div>
        </div>
    );
}