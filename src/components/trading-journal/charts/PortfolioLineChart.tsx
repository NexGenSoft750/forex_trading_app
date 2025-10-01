"use client";

import styles from "./PortfolioLineChart.module.scss";

export default function PortfolioLineChart() {
    return (
        <div className={styles['line-chart-container']}>
            <div className={styles['line-chart-box']}>
                <div className={styles.chartArea}>
                    <div className={styles.yAxis}>
                        <div className={styles.yTick}>$100,000.00</div>
                        <div className={styles.yTick}>$80,000.00</div>
                        <div className={styles.yTick}>$60,000.00</div>
                        <div className={styles.yTick}>$40,000.00</div>
                        <div className={styles.yTick}>$20,000.00</div>
                    </div>
                    <div className={styles.plotArea}>
                        <div className={styles.gridLines}>
                            <div className={styles.horizontalLine}></div>
                            <div className={styles.horizontalLine}></div>
                            <div className={styles.horizontalLine}></div>
                            <div className={styles.horizontalLine}></div>
                            <div className={styles.horizontalLine}></div>
                        </div>
                        <div className={styles.verticalLine}></div>
                    </div>
                    <div className={styles.xAxis}>
                        <div className={styles.xTick}>6/8/2025</div>
                        <div className={styles.xTick}>9/9/2025</div>
                    </div>
                </div>
            </div>
            <h2 className={styles.heading}>
                Line Chart
            </h2>
        </div>
    )
}