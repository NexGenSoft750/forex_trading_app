import styles from "./NonComLongShortChart.module.scss";

export default function NonComLongShortChart() {
  const data = [
    { name: "US DOLLAR (USD)", long: 20, short: 80 },
    { name: "EURO FX (EUR)", long: 40, short: 60 },
    { name: "BRITISH POUND (GBP)", long: 45, short: 55 },
    { name: "CANADIAN DOLLAR (CAD)", long: 55, short: 45 },
    { name: "JAPANESE YEN (JPY)", long: 20, short: 80 },
    { name: "SWISS FRANC (CHF)", long: 40, short: 60 },
    { name: "AUSTRALIAN DOLLAR (AUD)", long: 45, short: 55 },
    { name: "NEW ZEALAND DOLLAR", long: 55, short: 45 },
    { name: "GOLD", long: 30, short: 70 },
    { name: "CRUDE OIL", long: 65, short: 35 },
    { name: "SILVER", long: 45, short: 55 },
    { name: "NASDAQ 100", long: 60, short: 40 },
    { name: "WHEAT SRW", long: 75, short: 25 },
    { name: "CORN", long:40, short: 60 },
    { name: "COTTON", long: 72, short: 28 },
    { name: "SUGAR", long: 55, short: 45 },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Non Com Long % vs Short %</h1>
      <div className={styles.legend}>
        <div className={styles.legendLong}></div>
        <div className={styles.legendShort}></div>
      </div>
      <div className={styles.chart}>
        {data.map((item, index) => (
          <div key={index} className={styles.row}>
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