import React from 'react';
import styles from './PositionCharts.module.scss';

interface PositionData {
    label: string;
    greenPercentage: number;
    redPercentage: number;
    indicatorPosition: number;
}

interface PositionChartsProps {
    data?: PositionData[];
}

const defaultData: PositionData[] = [
    {
        label: "Seasonality",
        greenPercentage: 25,
        redPercentage: 75,
        indicatorPosition: 25
    },
    {
        label: "Cad Cot position (non comm)",
        greenPercentage: 40,
        redPercentage: 60,
        indicatorPosition: 40
    },
    {
        label: "Nzd COT positions (non comm)",
        greenPercentage: 35,
        redPercentage: 65,
        indicatorPosition: 35
    },
    {
        label: "Retail Position",
        greenPercentage: 60,
        redPercentage: 40,
        indicatorPosition: 60
    }
];

export default function PositionCharts({ data = defaultData }: PositionChartsProps) {
    return (
        <div className={styles.positionCharts}>
            {data.map((item, index) => (
                <div key={index} className={styles.chartItem}>
                    <div className={styles.chartLabel}>
                        {item.label}
                    </div>
                    <div className={styles.chartContainer}>
                        <div className={styles.gridLines}>
                            {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((position) => (
                                <div
                                    key={position}
                                    className={styles.gridLine}
                                    style={{ left: `${position}%` }}
                                />
                            ))}
                        </div>

                        <div className={styles.chartBar}>
                            <div
                                className={styles.greenSection}
                                style={{ width: `${item.greenPercentage}%` }}
                            />
                            <div
                                className={styles.redSection}
                                style={{ width: `${item.redPercentage}%` }}
                            />
                            <div
                                className={styles.indicator}
                                style={{ left: `${item.indicatorPosition}%` }}
                            >
                                <svg width="16" height="45" viewBox="0 0 22 45" className={styles.indicatorSvg}>
                                    <rect x="6" y="0" width="12" height="36" fill="#000000" />
                                    <path
                                        d="M 6 36 L 12 45 L 18 36 Z"
                                        fill="#000000"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <div className={styles.scaleContainer}>
                <div className={styles.scale}>
                    {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((num) => (
                        <span key={num} className={styles.scaleNumber}>
                            {num}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
