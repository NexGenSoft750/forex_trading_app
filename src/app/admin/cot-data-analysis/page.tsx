import styles from './COTReport.module.scss';
import USDSeasonalReturnsChart from '@/components/currency-fundamental/charts/USDSeasonalReturnsChart';
import COTCurrencyPairsReportTable from '@/components/cot-data-analysis/tables/COTCurrencyPairsReportTable';
import WeeklyNetChangeChart from '@/components/cot-data-analysis/charts/WeeklyNetChangeChart';
import NonComLongShortChart from '@/components/cot-data-analysis/charts/NonComLongShortChart';

export default function COTReportPage() {
    return (
        <>
            <div className={styles['currencyPairsContainer']}>
                <div className={styles['currencyPairsContainer__table']}>
                    <COTCurrencyPairsReportTable />
                </div>
                <div className={styles['currencyPairsContainer__chart']}>
                    <USDSeasonalReturnsChart chartHeading='Weekly Change Net Non Commercial Positios' />
                    <WeeklyNetChangeChart chartHeading='Weekly Non Com Net Change vs Com-Net Change' />
                    <NonComLongShortChart />
                </div>
            </div>
        </>
    );
}