import AreaChart from "./AreaChart";
import Section from "../layout/Section";
import styles from './DashbboardStats.module.scss';
import WebsiteTrafficStats from "./WebsiteTrafficStats";

export default function DashbboardStats() {
    const chartData = [
        { month: 'Jan', value: 78 },
        { month: 'Feb', value: 82 },
        { month: 'Mar', value: 75 },
        { month: 'Apr', value: 70 },
        { month: 'May', value: 65 },
        { month: 'Jun', value: 75, highlight: true },
        { month: 'Jul', value: 68 },
        { month: 'Aug', value: 72 },
        { month: 'Sep', value: 78 },
        { month: 'Oct', value: 82 },
        { month: 'Nov', value: 80 },
        { month: 'Dec', value: 78 }
    ];

    return (
        <>
            <Section className={styles["dashboard__stats"]}>
                <AreaChart
                    data={chartData}
                    title="Total Users"
                    highlightedValue="$210"
                    highlightedMonth="Jun"
                />
                <WebsiteTrafficStats />
            </Section>
        </>
    );
}