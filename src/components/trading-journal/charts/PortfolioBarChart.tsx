"use client";

import styles from "./PortfolioBarChart.module.scss";

export default function PortfolioBarChart() {
    return (
        <div className={styles.wrapper}>
            <div className={styles['bar-chart-container']}>
                <div className={styles.legend}>
                    <div className={styles.blueSquare}></div>
                    <div className={styles.redSquare}></div>
                </div>
                <div className={styles.chartArea}>
                    <div className={styles.yAxis}>
                        <div className={styles.yTick}>100.00%</div>
                        <div className={styles.yTick}>75.00%</div>
                        <div className={styles.yTick}>50.00%</div>
                        <div className={styles.yTick}>25.00%</div>
                        <div className={styles.yTick}>0.00%</div>
                    </div>
                    <div className={styles.plotArea}>
                        <div className={styles.gridLines}>
                            <div className={styles.horizontalLine}></div>
                            <div className={styles.horizontalLine}></div>
                            <div className={styles.horizontalLine}></div>
                            <div className={styles.horizontalLine}></div>
                            <div className={styles.horizontalLine}></div>
                        </div>
                        <div className={styles.barContainer}>
                            <div className={styles.bar}></div>
                        </div>
                    </div>
                    <div className={styles.winPercentageLabel}>Win Percentage</div>
                </div>
            </div>
            <div className={styles.heading}>Bar Chart</div>
        </div>
    )
}