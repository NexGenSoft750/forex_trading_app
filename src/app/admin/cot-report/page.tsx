import COTPositionsCharts from "@/components/cot-report/cot-charts/COTPositionsCharts";
import NetPositionComparisonChart from "@/components/cot-report/cot-charts/NetPositionComparisonChart";
import Section from "@/components/dashboard/Section";
import styles from "./page.module.scss";

export default function COTReport() {
    return (
        <Section>
            <div>
                <COTPositionsCharts />
            </div>
            {/* <div className={styles['position-charts-container']}>
                <NetPositionComparisonChart />
                <NetPositionComparisonChart />
                <NetPositionComparisonChart />
            </div> */}
        </Section>
    )
}