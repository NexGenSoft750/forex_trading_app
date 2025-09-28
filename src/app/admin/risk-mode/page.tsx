import styles from './RiskMode.module.scss';
import RiskModeCurrentlyPairTable from '@/components/risk-mode/tables/RiskModeCurrentlyPairTable';
import GuageChart from '@/components/chart/GuageChart';
import RiskModeSummaryTable from '@/components/risk-mode/tables/RiskModeSummaryTable';

import TrendAlignmentScore from '@/components/chart/TrendAlignmentScore';

import TextPanel from '@/components/ui/TextPanel';


export default function RiskModePage() {
    return (
        <>
            <div>
                <div className={styles.riskModeSummaryContainer}>
                    <div className={styles.riskModeSummaryTable}>
                        <RiskModeSummaryTable />
                    </div>
                    <div className={styles.riskModeSummaryChart}>
                        <div className={styles.guageChartWrapper}>
                            <GuageChart
                                labels={["OFF", "Neutral", "ON"]}
                                style={{ width: "52rem" }}
                                indicatorStyle={{ width: "20rem", height: "20rem" }}
                            />
                            <h1 className={styles.guageChartTitle}>Risk On / Off</h1>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={styles.trendAlignmentContainer}>
                        <TrendAlignmentScore />
                    </div>
                    <RiskModeCurrentlyPairTable />
                    <TextPanel light>
                        <h1>Risk On / Off</h1>
                        <p>In financial markets, the terms Risk On and Risk Off describe investor sentiment and the willingness to take financial risks. During Risk On periods, investors feel confident about the economy and seek higher returns by investing in stocks, commodities, and emerging markets. This often happens when economic indicators are strong, interest rates are low, and market conditions are favorable. On the other hand, Risk Off periods occur when uncertainty or fear drives investors toward safer assets like bonds, gold, and the U.S. dollar. Factors such as geopolitical tensions, economic slowdowns, inflation concerns, or financial crises can trigger this shift. Central banks, global events.</p>
                    </TextPanel>
                </div>
            </div>
        </>
    );
}