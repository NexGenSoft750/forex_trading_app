import styles from './COTReport.module.scss';
import COTDateReportTable from '@/components/cot-data-analysis/tables/COTDateReportTable';
import COTCurrencyReportTable from '@/components/cot-data-analysis/tables/COTCurrencyReportTable';
import COTCurrencyPairsReportTable from '@/components/cot-data-analysis/tables/COTCurrencyPairsReportTable';
import COTWeeklyChangeReportTable from '@/components/cot-data-analysis/tables/COTWeeklyChangeReportTable';
import COTReportIndexChart from '@/components/cot-data-analysis/tables/charts/COTReportIndexChart';
import COTReportOpenInterestChart from '@/components/cot-data-analysis/tables/charts/COTReportOpenInterestChart';
import COTReportNetPositionComparisonChart from '@/components/cot-data-analysis/tables/COTReportNetPositionComparisonChart';
import COTPositionsCharts from '@/components/currency-fundamental/charts/cot-charts/COTPositionsCharts';
import USDSeasonalReturns from '@/components/currency-fundamental/USDSeasonalReturns';
import USDSeasonalReturnsChart from '@/components/currency-fundamental/charts/USDSeasonalReturnsChart';
import NonComLongShortChart from '@/components/cot-data-analysis/tables/charts/NonComLongShortChart';
import WeeklyNetChangeChart from '@/components/currency-fundamental/charts/WeeklyNetChangeChart';
import SeasonalTrendsMarchChart from '@/components/currency-fundamental/charts/SeasonalTrendsMarchChart';
import USDCADSeasonalTrigger from '@/components/currency-fundamental/charts/USDCADSeasonalTrigger';

export default function COTReportPage() {
    return (
        <>
            <COTDateReportTable />
            <div>
                <COTPositionsCharts />
            </div>
            <div className={styles['positionChartsContainer']}>
                {/* <COTReportOpenInterestChart /> */}
                {/* <COTReportIndexChart
                    title="COT INDEX/index vs DATE"
                    yLabel="COT INDEX/index"
                    lineColor="#e22020"
                    gridValues={[100, 75, 50, 25, 0]}
                    dataPoints={[
                        { x: "2024-08-06", y: 12 },
                        { x: "2024-08-07", y: 6 },
                        { x: "2024-08-08", y: 3 },
                        { x: "2024-08-09", y: 85 },
                        { x: "2024-08-10", y: 95 },
                        { x: "2024-08-11", y: 88 },
                        { x: "2024-08-12", y: 80 },
                        { x: "2024-08-13", y: 92 },
                        { x: "2024-08-14", y: 94 },
                        { x: "2024-08-15", y: 90 },
                        { x: "2024-08-16", y: 50 },
                        { x: "2024-08-17", y: 40 },
                        { x: "2024-08-18", y: 15 },
                        { x: "2024-08-19", y: 5 },
                        { x: "2024-08-20", y: 12 },
                    ]}
                /> */}
                {/* <COTReportNetPositionComparisonChart /> */}
            </div>
            <COTCurrencyReportTable />
            <div className={styles['currencyPairsContainer']}>
                <div className={styles['currencyPairsContainer__table']}>
                    <COTCurrencyPairsReportTable />
                </div>
                <div className={styles['currencyPairsContainer__chart']}>
                    <USDSeasonalReturnsChart chartHeading='Weekly Change Net Non Commercial Positios' />
                    <WeeklyNetChangeChart chartHeading='Weekly Non Com Net Change vs Com-Net Change' />
                    {/* <NonComLongShortChart chartHeading='Non Com Long % vs Short %' /> */}
                </div>
            </div>
            <COTWeeklyChangeReportTable />
            <SeasonalTrendsMarchChart chartHeading='Seasonal Trends March' />
            <USDCADSeasonalTrigger />
        </>
    );
}