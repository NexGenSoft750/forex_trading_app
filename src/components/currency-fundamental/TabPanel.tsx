import styles from './TabPanel.module.scss';
import NoDataFoundPanel from './panels/NoDataFoundPanel';

type CurrencyTabPanelProps = {
  tabName: string;
};

export default function TabPanel({ tabName }: CurrencyTabPanelProps) {
  const currencyTabPanels: Record<string, React.ReactNode> = {

  };

  const activeTabPanel = currencyTabPanels[tabName] ?? <NoDataFoundPanel />;

  return (
    <div className={styles.currencyTabPanel}>
      {activeTabPanel}
    </div>
  );
}
