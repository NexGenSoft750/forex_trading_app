import GuageChart from '@/components/chart/GuageChart';
import styles from './ForexMarketPulseGaugesChart.module.scss';

const ForexMarketPulseGaugesChart = () => {
    return (
        <>
            <div className={styles.forexMarketPulseGaugesChart}>
                <div className={styles.guageChartWrapper}>
                    <GuageChart
                        labels={["USD Weak", "Neutral", "USD Strong"]}
                        style={{ width: "16rem" }}
                        indicatorStyle={{ width: "5.5rem", height: "5.5rem" }}
                    />
                </div>
                <div className={styles.guageChartWrapper}>
                    <GuageChart
                        labels={["USD Weak", "Neutral", "USD Strong"]}
                        style={{ width: "16rem" }}
                        indicatorStyle={{ width: "5.5rem", height: "5.5rem" }}
                    />
                </div>
                <div className={styles.guageChartWrapper}>
                    <GuageChart
                        labels={["USD Weak", "Neutral", "USD Strong"]}
                        style={{ width: "16rem" }}
                        indicatorStyle={{ width: "5.5rem", height: "5.5rem" }}
                    />
                </div>
            </div>
        </>
    );
};

export default ForexMarketPulseGaugesChart;