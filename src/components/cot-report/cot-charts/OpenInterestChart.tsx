import React from 'react';
import styles from './OpenInterestChart.module.scss';

const OpenInterestChart = () => {
  const dataPoints = [
    { x: 0, y: 80 }, { x: 85, y: 160 }, { x: 120, y: 155 },
    { x: 155, y: 160 }, { x: 190, y: 220 }, { x: 225, y: 210 },
    { x: 260, y: 205 }, { x: 295, y: 200 }, { x: 330, y: 190 },
    { x: 400, y: 180 },
  ];

  const generatePath = () =>
    dataPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

  const dateLabels = Array(22).fill('2024-08-06');

  return (
    <div className={styles['chart-container']}>
      <div className={styles.title}>OPEN INTEREST/VALUE VS. DATE</div>

      <div className={styles['chart-wrapper']}>
        <div className={styles['y-axis-label']}>OPEN INTEREST/VALUE VS.</div>

        <div className={`${styles['y-value']} ${styles['top-1']}`}>40,000</div>
        <div className={`${styles['y-value']} ${styles['top-2']}`}>40,000</div>
        <div className={`${styles['y-value']} ${styles['top-3']}`}>40,000</div>
        <div className={`${styles['y-value']} ${styles['bottom']}`}>0</div>

        <svg width="420" height="320" viewBox="0 0 400 320">
          <line x1="0" y1="55" x2="770" y2="55" />
          <line x1="0" y1="140" x2="770" y2="140" />
          <line x1="0" y1="225" x2="770" y2="225" />
          <line x1="0" y1="310" x2="770" y2="310" />

          <path d={generatePath()} />

          {dataPoints.map((point, index) => (
            <circle key={index} cx={point.x} cy={point.y} />
          ))}
        </svg>

        <div className={styles['x-labels']}>
          {dateLabels.map((date, index) => (
            <div
              key={index}
              className={styles.label}
              style={{ left: `${index * 19}px` }}
            >
              {date}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpenInterestChart;
