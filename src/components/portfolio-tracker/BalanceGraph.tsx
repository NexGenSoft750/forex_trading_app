"use client";

import styles from "./BalanceGraph.module.scss";

export default function BalanceGraph() {
  // Sample data points based on the new image - jagged, angular pattern
  const dataPoints = [
    { x: 0, y: 28000 },
    { x: 1, y: 27500 },
    { x: 2, y: 28500 },
    { x: 3, y: 29000 },
    { x: 4, y: 28500 },
    { x: 5, y: 29500 },
    { x: 6, y: 30000 },
    { x: 7, y: 29000 },
    { x: 8, y: 28000 },
    { x: 9, y: 27000 },
    { x: 10, y: 26000 },
    { x: 11, y: 25000 },
    { x: 12, y: 24000 },
    { x: 13, y: 23000 },
    { x: 14, y: 22000 },
    { x: 15, y: 21000 },
    { x: 16, y: 20000 },
    { x: 17, y: 19000 },
    { x: 18, y: 18500 },
    { x: 19, y: 19500 },
    { x: 20, y: 18000 },
    { x: 21, y: 19000 },
    { x: 22, y: 18500 },
    { x: 23, y: 19500 },
    { x: 24, y: 18000 },
    { x: 25, y: 19000 },
    { x: 26, y: 18500 },
    { x: 27, y: 19500 },
    { x: 28, y: 18000 },
    { x: 29, y: 19000 },
    { x: 30, y: 18500 },
    { x: 31, y: 19500 },
    { x: 32, y: 20000 },
    { x: 33, y: 21000 },
    { x: 34, y: 20500 },
    { x: 35, y: 21500 },
    { x: 36, y: 22000 },
    { x: 37, y: 21000 },
    { x: 38, y: 22000 },
    { x: 39, y: 21500 },
    { x: 40, y: 22500 },
    { x: 41, y: 22000 },
    { x: 42, y: 23000 },
    { x: 43, y: 22500 },
    { x: 44, y: 23500 },
    { x: 45, y: 23000 },
    { x: 46, y: 24000 },
    { x: 47, y: 23500 },
    { x: 48, y: 24500 },
    { x: 49, y: 24000 },
    { x: 50, y: 25000 },
    { x: 51, y: 24500 },
    { x: 52, y: 25500 },
    { x: 53, y: 25000 },
    { x: 54, y: 26000 },
    { x: 55, y: 25500 },
    { x: 56, y: 26500 },
    { x: 57, y: 26000 },
    { x: 58, y: 27000 },
    { x: 59, y: 26500 },
    { x: 60, y: 27500 },
    { x: 61, y: 27000 },
    { x: 62, y: 28000 },
    { x: 63, y: 27500 },
    { x: 64, y: 28500 },
    { x: 65, y: 28000 },
    { x: 66, y: 29000 },
    { x: 67, y: 28500 },
    { x: 68, y: 29500 },
    { x: 69, y: 29000 },
    { x: 70, y: 30000 },
    { x: 71, y: 29500 },
    { x: 72, y: 30500 },
    { x: 73, y: 30000 },
    { x: 74, y: 31000 },
    { x: 75, y: 30500 },
    { x: 76, y: 31500 },
    { x: 77, y: 31000 },
    { x: 78, y: 32000 },
    { x: 79, y: 31500 },
    { x: 80, y: 32500 },
    { x: 81, y: 32000 },
    { x: 82, y: 33000 },
    { x: 83, y: 32500 },
    { x: 84, y: 33500 },
    { x: 85, y: 33000 },
    { x: 86, y: 34000 },
    { x: 87, y: 33500 },
    { x: 88, y: 34500 },
    { x: 89, y: 34000 },
    { x: 90, y: 35000 },
    { x: 91, y: 34500 },
    { x: 92, y: 35500 },
    { x: 93, y: 35000 },
    { x: 94, y: 36000 },
    { x: 95, y: 35500 },
    { x: 96, y: 36500 },
    { x: 97, y: 36000 },
    { x: 98, y: 37000 },
    { x: 99, y: 36500 },
    { x: 100, y: 37000 },
    { x: 101, y: 36500 },
    { x: 102, y: 37500 },
    { x: 103, y: 37000 },
    { x: 104, y: 36000 },
    { x: 105, y: 35500 },
    { x: 106, y: 36500 },
    { x: 107, y: 36000 },
    { x: 108, y: 37000 },
    { x: 109, y: 36500 },
    { x: 110, y: 37500 },
    { x: 111, y: 37000 },
    { x: 112, y: 30000 },
    { x: 113, y: 29500 },
    { x: 114, y: 30500 },
    { x: 115, y: 30000 },
    { x: 116, y: 31000 },
    { x: 117, y: 30500 },
    { x: 118, y: 31500 },
    { x: 119, y: 31000 },
    { x: 120, y: 32000 },
    { x: 121, y: 31500 },
    { x: 122, y: 32500 },
    { x: 123, y: 32000 },
    { x: 124, y: 33000 },
    { x: 125, y: 32500 },
    { x: 126, y: 33500 },
    { x: 127, y: 33000 },
    { x: 128, y: 34000 },
    { x: 129, y: 33500 },
    { x: 130, y: 34500 },
    { x: 131, y: 34000 },
    { x: 132, y: 35000 },
    { x: 133, y: 34500 },
    { x: 134, y: 35500 },
    { x: 135, y: 35000 },
    { x: 136, y: 36000 },
    { x: 137, y: 35500 },
    { x: 138, y: 36500 },
    { x: 139, y: 36000 },
    { x: 140, y: 37000 },
    { x: 141, y: 36500 },
    { x: 142, y: 37500 },
    { x: 143, y: 37000 },
    { x: 144, y: 36000 },
    { x: 145, y: 35500 },
    { x: 146, y: 36500 },
    { x: 147, y: 36000 },
    { x: 148, y: 37000 },
    { x: 149, y: 36500 },
    { x: 150, y: 37500 },
    { x: 151, y: 37000 },
    { x: 152, y: 30000 },
    { x: 153, y: 29500 },
    { x: 154, y: 30500 },
    { x: 155, y: 30000 },
    { x: 156, y: 31000 },
    { x: 157, y: 30500 },
    { x: 158, y: 31500 },
    { x: 159, y: 31000 },
    { x: 160, y: 32000 },
    { x: 161, y: 31500 },
    { x: 162, y: 32500 },
    { x: 163, y: 32000 },
    { x: 164, y: 33000 },
    { x: 165, y: 32500 },
    { x: 166, y: 33500 },
    { x: 167, y: 33000 },
    { x: 168, y: 34000 },
    { x: 169, y: 33500 },
    { x: 170, y: 34500 },
    { x: 171, y: 34000 },
    { x: 172, y: 35000 },
    { x: 173, y: 34500 },
    { x: 174, y: 35500 },
    { x: 175, y: 35000 },
    { x: 176, y: 36000 },
    { x: 177, y: 35500 },
    { x: 178, y: 36500 },
    { x: 179, y: 36000 },
    { x: 180, y: 37000 },
    { x: 181, y: 36500 },
    { x: 182, y: 37500 },
    { x: 183, y: 37000 },
    { x: 184, y: 36000 },
    { x: 185, y: 35500 },
    { x: 186, y: 36500 },
    { x: 187, y: 36000 },
    { x: 188, y: 37000 },
    { x: 189, y: 36500 },
    { x: 190, y: 37500 },
    { x: 191, y: 37000 },
    { x: 192, y: 36000 },
    { x: 193, y: 35500 },
    { x: 194, y: 36500 },
    { x: 195, y: 36000 },
    { x: 196, y: 37000 },
    { x: 197, y: 36500 },
    { x: 198, y: 37500 },
    { x: 199, y: 37000 },
    { x: 200, y: 36000 },
    { x: 201, y: 35500 },
    { x: 202, y: 36500 },
    { x: 203, y: 36000 },
    { x: 204, y: 37000 },
    { x: 205, y: 36500 },
    { x: 206, y: 37500 },
    { x: 207, y: 37000 },
    { x: 208, y: 36000 },
    { x: 209, y: 35500 },
    { x: 210, y: 36500 },
    { x: 211, y: 36000 },
    { x: 212, y: 37000 },
    { x: 213, y: 36500 },
    { x: 214, y: 37500 },
    { x: 215, y: 37000 },
    { x: 216, y: 36000 },
    { x: 217, y: 35500 },
    { x: 717, y: 35500 },
  ];

  // Calculate the SVG path for the line
  const createPath = () => {
    const width = 1500; // Chart width
    const height = 200; // Chart height
    const padding = 20;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;
    
    const minY = 18000;
    const maxY = 37000;
    const yRange = maxY - minY;
    
    const points = dataPoints.map((point, index) => {
      const x = padding + (index / (dataPoints.length - 1)) * chartWidth;
      const y = padding + ((maxY - point.y) / yRange) * chartHeight;
      return `${x},${y}`;
    });
    
    return `M ${points.join(' L ')}`;
  };

  return (
    <div className={styles['balance-graph-container']}>
      <div className={styles['balance-graph-box']}>
        <h2 className={styles.title}>Balance Graph</h2>
        <div className={styles['chart-area']}>
          <div className={styles['y-axis']}>
            <div className={styles['y-tick']}>37 000 00</div>
            <div className={styles['y-tick']}>33 000 00</div>
            <div className={styles['y-tick']}>29 000 00</div>
            <div className={styles['y-tick']}>25 000 00</div>
            <div className={styles['y-tick']}>21 000 00</div>
            <div className={styles['y-tick']}>18 000 00</div>
            <div className={styles['y-tick']}>16 000 00</div>
            <div className={styles['y-tick']}>14 000 00</div>
          </div>
          <div className={styles['plot-area']}>
            <div className={styles['grid-lines']}>
              <div className={styles['horizontal-line']}></div>
              <div className={styles['horizontal-line']}></div>
              <div className={styles['horizontal-line']}></div>
              <div className={styles['horizontal-line']}></div>
              <div className={styles['horizontal-line']}></div>
              <div className={styles['horizontal-line']}></div>
              <div className={styles['horizontal-line']}></div>
              <div className={styles['horizontal-line']}></div>
            </div>
            <svg className={styles['line-chart']} viewBox="640 0 100 200">
              <path
                d={createPath()}
                fill="none"
                stroke="#6B46C1"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
              />
              {dataPoints.map((point, index) => (
                <circle
                  key={index}
                  cx={20 + (index / (dataPoints.length - 1)) * 760}
                  cy={20 + ((37000 - point.y) / 19000) * 160}
                  fill="#6B46C1"
                />
              ))}
            </svg>
          </div>
          <div className={styles['x-axis']}>
            {Array.from({ length: 40 }, (_, i) => (
              <div key={i} className={styles['x-tick']}>
                2024.10.03 11:15:42
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
