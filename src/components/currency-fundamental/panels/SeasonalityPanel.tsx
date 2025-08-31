import styles from './SeasonalityPanel.module.scss';
import CurrencyPanelSection from "../CurrencyPanelSection";
import SeasonalityPanelTable from '../tables/SeasonalityPanelTable';
import USDSeasonalReturnsChart from '../charts/USDSeasonalReturnsChart';
import CurrencyPanelContent from '../CurrencyPanelContent';

export default function SeasonalityPanel() {
    return (
        <>
            <CurrencyPanelSection
                panelHeading="Seasonality"
            >
                <SeasonalityPanelTable />
                <USDSeasonalReturnsChart />
                <div className={styles.seasonalityPanelInfoSection}>
                    <CurrencyPanelContent>
                        <h1>How Seasonality Affects the USD:</h1>
                        <p>USD strength often fluctuates based on seasonal trends like tax payments, corporate earnings, and
                            holiday spending. Certain months see increased demand for the USD, while others experience
                            weakness due to capital outflows and global trade patterns.</p>
                    </CurrencyPanelContent>
                </div>
            </CurrencyPanelSection>
        </>
    );
}