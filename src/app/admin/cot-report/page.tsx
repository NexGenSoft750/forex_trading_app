import COTPositionsCharts from "@/components/cot-report/cot-charts/COTPositionsCharts";
import NetPositionComparisonChart from "@/components/cot-report/cot-charts/NetPositionComparisonChart";
import Section from "@/components/dashboard/Section";
import styles from "./page.module.scss";
import OpenInterestChart from "@/components/cot-report/cot-charts/OpenInterestChart";
import COTIndexChart from "@/components/cot-report/cot-charts/COTIndexChart";

export default function COTReport() {
    return (
        <Section>
            <div>
                <COTPositionsCharts />
            </div>
            <div className={styles['positionChartsContainer']}>
                <OpenInterestChart />
                <COTIndexChart
                    title="COT INDEX/index vs DATE"
                    yLabel="COT INDEX/index"
                    lineColor="#e22020"
                    gridValues={[100, 75, 50, 25, 0]} // or [40000, 30000, 20000, 0]
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
                />
                <NetPositionComparisonChart />
            </div>
        </Section>
    )
}