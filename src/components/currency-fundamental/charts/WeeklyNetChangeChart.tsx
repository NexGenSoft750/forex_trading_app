import React from "react";
import styles from "./WeeklyNetChangeChart.module.scss";

export default function WeeklyNetChangeChart({ chartHeading }: { chartHeading: string }) {
    interface DataPoint {
        category: string;
        nonCommNetChange?: number;
        comNetChange?: number;
    }

    const data: DataPoint[] = [
        { category: "USD", nonCommNetChange: 743 },
        { category: "EUR", comNetChange: -243 },
        { category: "GBP", comNetChange: -528 },
        { category: "CAD", comNetChange: -243 },
        { category: "JPY", nonCommNetChange: 743 },
        { category: "CHF", comNetChange: -243 },
        { category: "AUD", nonCommNetChange: 743 },
        { category: "HOD", comNetChange: -243 },
        { category: "GOD", comNetChange: -528 },
        { category: "SILVER", comNetChange: -518 },
        { category: "NASDAQ 100", nonCommNetChange: 743 },
        { category: "NATURAL GAS", nonCommNetChange: 743 },
        { category: "WHEAT SRW", comNetChange: -528 },
        { category: "COM", nonCommNetChange: 743 },
        { category: "COTTON", comNetChange: -243 },
        { category: "SUGAR", nonCommNetChange: 743 },
    ];

    const maxValue = 2000;
    const minValue = -2000;
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
                    {/* Legend */}
                    <div className={styles.legend}>
                        <div className={styles.legendItem}>
                            <div className={`${styles.legendColor} ${styles.nonCommColor}`}></div>
                            <span>Non Comm-Net Change</span>
                        </div>
                        <div className={styles.legendItem}>
                            <div className={`${styles.legendColor} ${styles.comColor}`}></div>
                            <span>Com-Net Change</span>
                        </div>
                    </div>

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
                                        backgroundColor: isZeroLine ? '#666' : '#333'
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
                        const barWidth = 60;
                        const spacing = 80;
                        const startX = 100;
                        const x = startX + index * spacing;

                        return (
                            <div key={item.category}>
                                {/* Non Comm Net Change Bar */}
                                {item.nonCommNetChange !== undefined && (
                                    <>
                                        <div
                                            className={`${styles.bar} ${styles.nonCommBar}`}
                                            style={{
                                                left: x,
                                                top: valueToY(item.nonCommNetChange),
                                                width: barWidth,
                                                height: getBarHeight(item.nonCommNetChange),
                                            }}
                                        />
                                        <div
                                            className={styles.valueLabel}
                                            style={{
                                                left: x,
                                                top: valueToY(item.nonCommNetChange) - 20,
                                                width: barWidth,
                                            }}
                                        >
                                            {item.nonCommNetChange}
                                        </div>
                                    </>
                                )}

                                {/* Com Net Change Bar */}
                                {item.comNetChange !== undefined && (
                                    <>
                                        <div
                                            className={`${styles.bar} ${styles.comBar}`}
                                            style={{
                                                left: x + 5,
                                                top: valueToY(0),
                                                width: barWidth,
                                                height: getBarHeight(Math.abs(item.comNetChange)),
                                            }}
                                        />
                                        <div
                                            className={styles.valueLabel}
                                            style={{
                                                left: x + 5,
                                                top: valueToY(0) + getBarHeight(Math.abs(item.comNetChange)) + 5,
                                                width: barWidth,
                                            }}
                                        >
                                            {item.comNetChange}
                                        </div>
                                    </>
                                )}

                                {/* Category Label */}
                                <div
                                    className={styles.categoryLabel}
                                    style={{
                                        left: x,
                                        top: chartHeight - 30,
                                        width: barWidth,
                                    }}
                                >
                                    {item.category}
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
