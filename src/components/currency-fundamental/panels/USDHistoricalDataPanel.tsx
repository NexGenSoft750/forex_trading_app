import styles from './USDHistoricalDataPanel.module.scss';
import CurrencyPanelSection from "../CurrencyPanelSection";
import USDHistoricalDataTable from '../tables/USDHistoricalDataTable';
import USDEconomicGraph from '../charts/USDEconomicGraph';
import TextPanel from '@/components/ui/TextPanel';

export default function USDHistoricalDataPanel() {
    return (
        <>
            <CurrencyPanelSection
                panelHeading="USD ( Historical Data Basic Fundamentals )"
                rounded="top"
            >
                <USDHistoricalDataTable />
                <div className={styles.panelBody}>
                    <USDEconomicGraph />
                    <TextPanel style={{ marginTop: "3rem" }}>
                        <h1>How Basic Fundamentals Affect the USD:</h1>
                        <ul className={styles.basicFundamentalsList}>
                            <li className={styles.basicFundamentalsList__item}>
                                <span className={styles.basicFundamentalsList__label}>Interest Rates:</span>
                                <p>Higher rates attract investors, strengthening the USD: Lower rates weaken it.</p>
                            </li>
                            <li className={styles.basicFundamentalsList__item}>
                                <span className={styles.basicFundamentalsList__label}>Inflation:</span>
                                <p>Moderate Inflation supports the USD: high inflation weakens it.</p>
                            </li>
                            <li className={styles.basicFundamentalsList__item}>
                                <span className={styles.basicFundamentalsList__label}>GDP Growth:</span>
                                <p>Strong growth boosts the USD: slow growth weakens it.</p>
                            </li>
                            <li className={styles.basicFundamentalsList__item}>
                                <span className={styles.basicFundamentalsList__label}>Employment:</span>
                                <p>Low unemployment strengthens the USD: high unemployment weakens it.</p>
                            </li>
                            <li className={styles.basicFundamentalsList__item}>
                                <span className={styles.basicFundamentalsList__label}>Trade Balance:</span>
                                <p>Surpluses strengthen the USD: deficits weaken it.</p>
                            </li>
                        </ul>
                    </TextPanel>
                </div>
            </CurrencyPanelSection>
        </>
    );
}