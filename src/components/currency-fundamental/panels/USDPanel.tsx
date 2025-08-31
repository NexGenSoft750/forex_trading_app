import styles from './USDPanel.module.scss';
import CurrencyPanelSection from "../CurrencyPanelSection";
import GuageChart from '@/components/chart/GuageChart';
import CurrencyFundamentalTable from '../tables/CurrencyFundamentalTable';

export default function USDPanel() {
    return (
        <>
            <CurrencyPanelSection
                panelHeading='USD $'
            >
                <div className={styles.usdSentimentOverview}>
                    <div className={styles.guageChartWrapper}>
                        <GuageChart
                            labels={["Dovish", "Neutral", "Hawkish"]}
                            style={{ width: "30rem" }}
                            indicatorStyle={{ width: "11rem", height: "11rem" }}
                        />
                        <h1 className={styles.guageChartTitle}>Fedral reserve bank policy</h1>
                    </div>
                    <div className={styles.guageChartWrapper}>
                        <GuageChart
                            labels={["USD Weak", "Neutral", "USD Strong"]}
                            style={{ width: "24rem" }}
                            indicatorStyle={{ width: "7.5rem", height: "7.5rem" }}
                        />
                        <h1 className={styles.guageChartTitle}>Interest rate change</h1>
                    </div>
                    <div className={styles.guageChartWrapper}>
                        <GuageChart
                            labels={["USD Weak", "Neutral", "USD Strong"]}
                            style={{ width: "24rem" }}
                            indicatorStyle={{ width: "7.5rem", height: "7.5rem" }}
                        />
                        <h1 className={styles.guageChartTitle}>Inflation change</h1>
                    </div>
                    <div className={styles.guageChartWrapper}>
                        <GuageChart
                            labels={["USD Weak", "Neutral", "USD Strong"]}
                            style={{ width: "24rem" }}
                            indicatorStyle={{ width: "7.5rem", height: "7.5rem" }}
                        />
                        <h1 className={styles.guageChartTitle}>Growth rate change</h1>
                    </div>
                </div>
            </CurrencyPanelSection>
            <CurrencyPanelSection
                panelHeading='Currency Fundamental'
                rounded='top'
            >
                <CurrencyFundamentalTable />
            </CurrencyPanelSection>
        </>
    );
}