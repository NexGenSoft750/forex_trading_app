import React from "react";
import styles from "./SeasonalTrendsMarchChart.module.scss";

export default function SeasonalTrendsMarchChart({ chartHeading }: { chartHeading: string }) {
    interface DataPoint {
        value: number;
        positive: boolean;
    }

    const data: DataPoint[] = [
        { value: 0.8, positive: true },
        { value: 2.4, positive: true },
        { value: -0.8, positive: false },
        { value: -2.0, positive: false },
        { value: 1.5, positive: true },
        { value: -0.8, positive: false },
        { value: -1.2, positive: false },
        { value: -0.8, positive: false },
        { value: 2.2, positive: true },
        { value: 3.2, positive: true },
        { value: 3.2, positive: true },
        { value: 3.2, positive: true },
        { value: 3.2, positive: true },
        { value: 1.2, positive: true },
        { value: 2.2, positive: true },
        { value: 1.4, positive: true },
        { value: 2.2, positive: true },
        { value: 1.4, positive: true },
        { value: 1.4, positive: true },
        { value: -0.8, positive: false },
        { value: 1.4, positive: true },
        { value: 2.8, positive: true },
        { value: -2.0, positive: false },
        { value: 1.4, positive: true },
        { value: 1.4, positive: true },
        { value: 1.4, positive: true },
        { value: 1.4, positive: true },
        { value: 1.4, positive: true },
        { value: 1.4, positive: true },
    ];

    const maxValue = 4;
    const minValue = -4;
    const chartHeight = 400;
    const chartWidth = 1400;

    const innerHeight = chartHeight * 0.7;
    const range = maxValue - minValue;
    const steps = 4;

    const ticks = Array.from({ length: steps + 1 }, (_, i) =>
        Math.round(maxValue - i * (range / steps))
    );

    const valueToY = (value: number) =>
        50 + ((maxValue - value) / range) * 300;

    const getBarHeight = (value: number) =>
        (Math.abs(value) / range) * 300;

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{chartHeading}</h2>
            <div className={styles.scrollWrapper}>
                <div
                    className={styles.chart}
                    style={{ width: chartWidth, height: chartHeight }}
                >
                    {/* Grid lines and labels */}
                    {ticks.map((tick, i) => {
                        const topPx = valueToY(tick);
                        const isZeroLine = tick === 0;
                        return (
                            <React.Fragment key={i}>
                                <div
                                    className={styles.gridLine}
                                    style={{
                                        top: `${topPx}px`,
                                        backgroundColor: isZeroLine ? '#666' : '#e0e0e0'
                                    }}
                                />
                                <div
                                    className={styles.gridLabel}
                                    style={{ top: `${topPx - 8}px` }}
                                >
                                    {tick}
                                </div>
                            </React.Fragment>
                        );
                    })}

                    {/* Bars */}
                    {data.map((item, index) => {
                        const barWidth = 30;
                        const spacing = 45;
                        const startX = 80;
                        const x = startX + index * spacing;
                        const barHeight = getBarHeight(item.value);
                        const y = valueToY(item.value);

                        return (
                            <div key={index}>
                                <div
                                    className={`${styles.bar} ${item.positive ? styles.positive : styles.negative}`}
                                    style={{
                                        left: x,
                                        top: item.positive ? y : valueToY(0),
                                        width: barWidth,
                                        height: barHeight,
                                    }}
                                />

                                <div
                                    className={styles.categoryLabel}
                                    style={{
                                        left: x,
                                        top: chartHeight,
                                        width: barWidth,
                                    }}
                                >
                                    USDCAD
                                </div>
                            </div>
                        );
                    })}

                    {/* Zero line */}
                    <div
                        className={styles.zeroLine}
                        style={{ top: `${valueToY(0)}px` }}
                    />
                </div>
            </div>
        </div>
    );
}
