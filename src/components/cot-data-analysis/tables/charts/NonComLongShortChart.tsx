import React from "react";
import styles from "./NonComLongShortChart.module.scss";

export default function NonComLongShortChart({ chartHeading }: { chartHeading: string }) {
    interface DataPoint {
        instrument: string;
        longPercent: number;
        shortPercent: number;
    }

    const data: DataPoint[] = [
        { instrument: "US DOLLAR (USD)", longPercent: 72, shortPercent: 43 },
        { instrument: "EURO FX (EUR)", longPercent: 72, shortPercent: 43 },
        { instrument: "BRITISH POUND (GBP)", longPercent: 72, shortPercent: 43 },
        { instrument: "CANADIAN DOLLAR (CAD)", longPercent: 72, shortPercent: 43 },
        { instrument: "JAPANESE YEN (JPY)", longPercent: 72, shortPercent: 43 },
        { instrument: "SWISS FRANC (CHF)", longPercent: 72, shortPercent: 43 },
        { instrument: "AUSTRALIAN DOLLAR (AUD)", longPercent: 72, shortPercent: 43 },
        { instrument: "NEW ZEALAND DOLLAR", longPercent: 72, shortPercent: 43 },
        { instrument: "GOLD", longPercent: 72, shortPercent: 43 },
        { instrument: "CRUDE OIL", longPercent: 72, shortPercent: 43 },
        { instrument: "SILVER", longPercent: 72, shortPercent: 43 },
        { instrument: "NASDAQ 100", longPercent: 72, shortPercent: 43 },
        { instrument: "WHEAT SRW", longPercent: 72, shortPercent: 43 },
        { instrument: "CORN", longPercent: 72, shortPercent: 43 },
        { instrument: "COTTON", longPercent: 72, shortPercent: 43 },
        { instrument: "SUGAR", longPercent: 72, shortPercent: 43 },
    ];

    const chartWidth = 1000;
    const chartHeight = 600;
    const barHeight = 30;
    const barSpacing = 5;
    const leftMargin = 200;
    const rightMargin = 50;
    const topMargin = 80;
    const bottomMargin = 50;

    const plotWidth = chartWidth - leftMargin - rightMargin;
    const maxPercent = 100;

    const xScale = (value: number) => (value / maxPercent) * plotWidth;

    const xAxisTicks = [0, 25, 50, 75, 100];

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
                            <div className={`${styles.legendColor} ${styles.longColor}`}></div>
                            <span>Long</span>
                        </div>
                        <div className={styles.legendItem}>
                            <div className={`${styles.legendColor} ${styles.shortColor}`}></div>
                            <span>Short</span>
                        </div>
                    </div>

                    {/* X-axis grid lines and labels */}
                    {xAxisTicks.map((tick, i) => {
                        const x = leftMargin + xScale(tick);
                        return (
                            <React.Fragment key={i}>
                                <div
                                    className={styles.gridLine}
                                    style={{
                                        left: `${x}px`,
                                        top: `${topMargin}px`,
                                        height: `${data.length * (barHeight + barSpacing)}px`,
                                    }}
                                />
                                <div
                                    className={styles.xAxisLabel}
                                    style={{
                                        left: `${x - 10}px`,
                                        top: `${chartHeight - 30}px`,
                                    }}
                                >
                                    {tick}
                                </div>
                            </React.Fragment>
                        );
                    })}

                    {/* Data bars */}
                    {data.map((item, index) => {
                        const y = topMargin + index * (barHeight + barSpacing);
                        const longWidth = xScale(item.longPercent);
                        const shortWidth = xScale(item.shortPercent);
                        const shortX = leftMargin + longWidth;

                        return (
                            <div key={item.instrument}>
                                {/* Instrument label */}
                                <div
                                    className={styles.instrumentLabel}
                                    style={{
                                        left: `${leftMargin - 10}px`,
                                        top: `${y + barHeight / 2 - 8}px`,
                                        textAlign: 'right',
                                        width: `${leftMargin - 20}px`,
                                    }}
                                >
                                    {item.instrument}
                                </div>

                                {/* Long bar (blue) */}
                                <div
                                    className={`${styles.bar} ${styles.longBar}`}
                                    style={{
                                        left: `${leftMargin}px`,
                                        top: `${y}px`,
                                        width: `${longWidth}px`,
                                        height: `${barHeight}px`,
                                    }}
                                />

                                {/* Short bar (red) */}
                                <div
                                    className={`${styles.bar} ${styles.shortBar}`}
                                    style={{
                                        left: `${shortX}px`,
                                        top: `${y}px`,
                                        width: `${shortWidth}px`,
                                        height: `${barHeight}px`,
                                    }}
                                />

                                {/* Long percentage label */}
                                <div
                                    className={styles.valueLabel}
                                    style={{
                                        left: `${leftMargin + longWidth / 2 - 10}px`,
                                        top: `${y + barHeight / 2 - 8}px`,
                                        color: 'white',
                                    }}
                                >
                                    {item.longPercent}
                                </div>

                                {/* Short percentage label */}
                                <div
                                    className={styles.valueLabel}
                                    style={{
                                        left: `${shortX + shortWidth / 2 - 10}px`,
                                        top: `${y + barHeight / 2 - 8}px`,
                                        color: 'white',
                                    }}
                                >
                                    {item.shortPercent}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}