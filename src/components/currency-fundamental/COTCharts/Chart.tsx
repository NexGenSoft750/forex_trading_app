import React from 'react';
import styles from './Chart.module.scss';

interface Chart {
  data: Array<{ 
    period: string;
    long: number;
    short: number; 
  }>; 
  title: string;
}

const Chart: React.FC<Chart> = ({ data, title }) => {
  const maxValue = 60000;

  return (
    <div className={styles.chart}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.container}>
        <div className={styles.yAxis}>
          <span>60,000</span>
          <span>40,000</span>
          <span>20,000</span>
          <span>0</span>
        </div>

        <div className={styles.grid}>
          <div className={`${styles.line} ${styles.line0}`}></div>
          <div className={`${styles.line} ${styles.line1}`}></div>
          <div className={`${styles.line} ${styles.line2}`}></div>
          <div className={`${styles.line} ${styles.line3}`}></div>
        </div>

        <div className={styles.bars}>
          {data.map((item, index) => {
            const totalHeight = ((item.long + item.short) / maxValue) * 300;
            const longHeight = (item.long / maxValue) * 300;
            const shortHeight = (item.short / maxValue) * 300;

            return (
              <div
                key={index}
                className={styles.bar}
                style={{ height: `${totalHeight}px` }}
              >
                <div
                  className={styles.short}
                  style={{ height: `${shortHeight}px` }}
                ></div>
                <div
                  className={styles.long}
                  style={{ height: `${longHeight}px` }}
                ></div>
              </div>
            );
          })}
        </div>

        <div className={styles.xAxis}>
          {data.map((item, index) => (
            <span key={index}>{item.period}</span>
          ))}
        </div>
      </div>

      <div className={styles.legend}>
        <div className={styles.item}>
          <div className={`${styles.colorBox} ${styles.short}`}></div>
          <span>Short</span>
        </div>
        <div className={styles.item}>
          <div className={`${styles.colorBox} ${styles.long}`}></div>
          <span>Long</span>
        </div>
      </div>
    </div>
  );
};

export default Chart;
