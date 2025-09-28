import styles from './USCOTDataPanel.module.scss';
import CurrencyPanelSection from "../CurrencyPanelSection";
import USCOTDataTable from '../tables/USCOTDataTable';
import COTPositionsCharts from '../charts/cot-charts/COTPositionsCharts';
import NetPositionComparisonChart from '../charts/cot-charts/NetPositionComparisonChart';
import COTPositions from '../COTPositions';
import TextPanel from '@/components/ui/TextPanel';

export default function USCOTDataPanel() {
    return (
        <>
            <CurrencyPanelSection
                panelHeading="US Cot Data & Trends ( Weekly ) "
            >
                <USCOTDataTable />
                <div className={styles.panelBody}>
                    <div className={styles.cotPositionsHeader}>
                        <span className={styles.cotPositionsHeader__label}>Recent Cot Positions</span>
                    </div>
                    <COTPositions />
                    <div className={styles.cotInfoSection}>
                        <TextPanel>
                            <h1>How Non-Commercial Positions Affect Currency:</h1>
                            <p>Non-Commercial Traders (Speculators) aim to profit from price movements. High net long positions
                                indicate bullish sentiment and potential currency strength, while high net short positions suggest
                                bearish sentiment and possible currency weakness. Shifts in their positions often signal trend
                                changes in the forex market.</p>
                        </TextPanel>
                    </div>
                    <COTPositionsCharts />
                    <NetPositionComparisonChart />
                </div>
            </CurrencyPanelSection>
        </>
    );
}