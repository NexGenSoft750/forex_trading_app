import styles from './SeasonalityPanel.module.scss';
import CurrencyPanelSection from "../CurrencyPanelSection";
import SeasonalityPanelTable from '../tables/SeasonalityPanelTable';
import USDSeasonalReturnsChart from '../charts/USDSeasonalReturnsChart';
import TextPanel from '@/components/ui/TextPanel';

export default function SeasonalityPanel() {
    return (
        <>
            <CurrencyPanelSection
                panelHeading="Seasonality"
            >
                <SeasonalityPanelTable />
                <div className={styles.seasonalityReturnsChartWrapper}>
                    <USDSeasonalReturnsChart chartHeading='USD Seasonal Returns' />
                </div>
                <div className={styles.seasonalityPanelInfoSection}>
                    <TextPanel>
                        <h1>How Seasonality Affects the USD:</h1>
                        <p>USD strength often fluctuates based on seasonal trends like tax payments, corporate earnings, and
                            holiday spending. Certain months see increased demand for the USD, while others experience
                            weakness due to capital outflows and global trade patterns.</p>
                    </TextPanel>
                </div>
            </CurrencyPanelSection>
        </>
    );
}