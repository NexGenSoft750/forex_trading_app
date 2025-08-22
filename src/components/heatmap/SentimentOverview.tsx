import styles from "./SentimentOverview.module.scss";
import GuageChart from "../chart/GuageChart";

export default function SentimentOverview() {
    return (
        <div className={styles.sentimentOverview}>
            <div className={styles.leftSection}>
                <GuageChart
                    style={{ width: "21rem" }}
                    indicatorStyle={{ width: "8rem", height: "8rem" }}
                />
                <h1 className={styles.title}>Net BIAS</h1>
            </div>
            <div className={styles.rightSection}>
                <div className={styles.smallChart}>
                    <GuageChart
                        style={{ width: "13.5rem" }}
                        indicatorStyle={{ width: "5rem", height: "5rem" }}
                    />
                    <h1 className={styles.title}>Fundamental</h1>
                </div>

                <div className={styles.smallChart}>
                    <GuageChart
                        style={{ width: "13.5rem" }}
                        indicatorStyle={{ width: "5rem", height: "5rem" }}
                    />
                    <h1 className={styles.title}>Risk Mode</h1>
                </div>
                <div className={styles.smallChart}>
                    <GuageChart
                        style={{ width: "13.5rem" }}
                        indicatorStyle={{ width: "5rem", height: "5rem" }}
                    />
                    <h1 className={styles.title}>4Hr Trend</h1>
                </div>
                <div className={styles.smallChart}>
                    <GuageChart
                        style={{ width: "13.5rem" }}
                        indicatorStyle={{ width: "5rem", height: "5rem" }}
                    />
                    <h1 className={styles.title}>Daily Trend</h1>
                </div>
            </div>
        </div>
    );
}