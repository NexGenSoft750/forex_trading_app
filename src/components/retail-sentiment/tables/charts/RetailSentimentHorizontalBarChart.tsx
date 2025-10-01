import styles from "./RetailSentimentHorizontalBarChart.module.scss";

export default function RetailSentimentHorizontalBarChart() {
    const data = [
        { name: "USDCAD", long: 22, short: 78 },
        { name: "USDCHF", long: 72, short: 43 },
        { name: "USDJPY", long: 72, short: 43 },
        { name: "GBPUSD", long: 72, short: 43 },
        { name: "GBPAUD", long: 72, short: 43 },
        { name: "GBPCHF", long: 12, short: 88 },
        { name: "GBPNZD", long: 72, short: 43 },
        { name: "GBPJPY", long: 72, short: 43 },
        { name: "GBPCAD", long: 72, short: 43 },
        { name: "EURUSD", long: 72, short: 43 },
        { name: "EURCAD", long: 72, short: 43 },
        { name: "EURJPY", long: 72, short: 43 },
        { name: "EURAUD", long: 32, short: 68 },
        { name: "EURNZD", long: 72, short: 43 },
        { name: "EURCHF", long: 72, short: 43 },
        { name: "EURGBP", long: 72, short: 43 },
        { name: "AUDCAD", long: 72, short: 43 },
        { name: "AUDCHF", long: 72, short: 43 },
        { name: "AUDNZD", long: 72, short: 43 },
        { name: "AUDUSD", long: 72, short: 43 },
        { name: "AUDJPY", long: 12, short: 88 },
        { name: "CADCHF", long: 72, short: 43 },
        { name: "CADJPY", long: 72, short: 43 },
        { name: "CHFJPY", long: 72, short: 43 },
        { name: "NZDUSD", long: 22, short: 78 },
        { name: "NZDJPY", long: 72, short: 43 },
        { name: "NZDCHF", long: 72, short: 43 },
        { name: "NZDCAD", long: 32, short: 68 },
        { name: "XAUUSD", long: 72, short: 43 },
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Retail Sentiment Long % vs Short %</h1>
            <div className={styles.legend}>
                <div className={styles.legendItem}>
                    <div className={styles.legendLong}></div>
                    <span>Long %</span>
                </div>
                <div className={styles.legendItem}>
                    <div className={styles.legendShort}></div>
                    <span>Short %</span>
                </div>
            </div>
            <div className={styles.chart}>
                {data.map((item, index) => (
                    <div key={index} className={styles.row}>
                        <div className={styles.label}>{item.name}</div>
                        <div className={styles.barContainer}>
                            <div className={styles.long} style={{ width: `${item.long}%` }}>
                                <span>{item.long}</span>
                            </div>
                            <div className={styles.short} style={{ width: `${item.short}%` }}>
                                <span>{item.short}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.xAxis}>
                <div>
                    <span>0</span>
                    <span>25</span>
                    <span>50</span>
                    <span>75</span>
                    <span>100</span>
                </div>
            </div>
        </div>
    );
}