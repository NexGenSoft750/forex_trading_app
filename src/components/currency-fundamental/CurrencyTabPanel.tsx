import { TabName } from '@/types/TabName';
import styles from './CurrencyTabPanel.module.scss';
import USDPanel from './panels/USDPanel';
import GBPPanel from './panels/GBPPanel';
import USDHistoricalDataPanel from './panels/USDHistoricalDataPanel';
import SeasonalityPanel from './panels/SeasonalityPanel';
import USCOTDataPanel from './panels/USCOTDataPanel';
import NoDataFoundPanel from './panels/NoDataFoundPanel';

type CurrencyTabPanelProps = {
  tabName: TabName;
};

export default function CurrencyTabPanel({ tabName }: CurrencyTabPanelProps) {
    const currencyTabPanels: Record<TabName, React.ReactNode> = {
        "USD &":                                      <USDPanel />,
        "GBP":                                        <GBPPanel />,
        "EUR":                                        <NoDataFoundPanel />,
        "CAD":                                        <NoDataFoundPanel />,
        "AUD":                                        <NoDataFoundPanel />,
        "NZD":                                        <NoDataFoundPanel />,
        "CHF":                                        <NoDataFoundPanel />,
        "USD ( Historical Data Basic Fundamentals )": <USDHistoricalDataPanel />,
        "Seasonality":                                <SeasonalityPanel />,
        "US Cot Data & Trends ( Weekly )":            <USCOTDataPanel />,
        "News":                                       <NoDataFoundPanel />,
    };

  const activeTabPanel = currencyTabPanels[tabName] ?? <NoDataFoundPanel />;

  return (
    <div className={styles.currencyTabPanel}>
      {activeTabPanel}
    </div>
  );
}
