
import React from "react";
import styles from "./USDCADSeasonalModal.module.scss";

interface USDCADSeasonalModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function USDCADSeasonalModal({ isOpen, onClose }: USDCADSeasonalModalProps) {
    if (!isOpen) return null;

    interface DataPoint {
        month: string;
        value: number;
        positive: boolean;
    }

    const data: DataPoint[] = [
        { month: "Jan", value: 0.60, positive: true },
        { month: "Feb", value: 0.19, positive: true },
        { month: "Mar", value: -0.66, positive: false },
        { month: "Apr", value: -0.45, positive: false },
        { month: "May", value: 0.98, positive: true },
        { month: "Jun", value: -0.32, positive: false },
        { month: "Jul", value: 0.75, positive: true },
        { month: "Aug", value: 0.85, positive: true },
        { month: "Sep", value: 0.42, positive: true },
        { month: "Oct", value: 0.38, positive: true },
        { month: "Nov", value: 0.25, positive: true },
        { month: "Dec", value: 0.55, positive: true },
    ];

    const maxValue = 1.0;
    const minValue = -1.0;
    const chartHeight = 300;
    const chartWidth = 800;

    const range = maxValue - minValue;
    const steps = 4;

    const ticks = Array.from({ length: steps + 1 }, (_, i) =>
        parseFloat((maxValue - i * (range / steps)).toFixed(2))
    );

    const valueToY = (value: number) =>
        50 + ((maxValue - value) / range) * 200;

    const getBarHeight = (value: number) =>
        (Math.abs(value) / range) * 200;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <h2 className={styles.title}>USDCAD</h2>
                    <button className={styles.closeButton} onClick={onClose}>×</button>
                </div>
                
                <div className={styles.chartContainer}>
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
                                            backgroundColor: isZeroLine ? '#000' : '#e0e0e0'
                                        }}
                                    />
                                    <div
                                        className={styles.gridLabel}
                                        style={{ top: `${topPx - 8}px` }}
                                    >
                                        {tick.toFixed(2)}%
                                    </div>
                                </React.Fragment>
                            );
                        })}

                        {/* Bars */}
                        {data.map((item, index) => {
                            const barWidth = 40;
                            const spacing = 60;
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
                                        className={styles.monthLabel}
                                        style={{
                                            left: x,
                                            top: chartHeight - 20,
                                            width: barWidth,
                                        }}
                                    >
                                        {item.month}
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
        </div>
    );
}
