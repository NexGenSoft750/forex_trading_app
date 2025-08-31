import React from 'react';
import styles from './NetPositionComparisonChart.module.scss';

interface DataPoint {
    date: string;
    value: number;
}

const NetPositionComparisonChart: React.FC = () => {
    const netCommData: DataPoint[] = [
        { date: '2024-08-12', value: -3 },
        { date: '2024-08-13', value: -3 },
        { date: '2024-08-14', value: -3 },
        { date: '2024-08-15', value: -3 },
        { date: '2024-08-16', value: -3 },
        { date: '2024-08-17', value: -1 },
        { date: '2024-08-18', value: 0 },
        { date: '2024-08-19', value: 0.05 },
        { date: '2024-08-20', value: 0.03 },
        { date: '2024-08-21', value: 0.08 },
        { date: '2024-08-22', value: 0.09 },
        { date: '2024-08-23', value: -0.04 },
        { date: '2024-08-24', value: -0.07 },
        { date: '2024-08-25', value: 0 },
        { date: '2024-08-26', value: 0.02 },
        { date: '2024-08-27', value: 0.06 },
        { date: '2024-08-28', value: 0.06 },
        { date: '2024-08-29', value: 0.05 },
        { date: '2024-08-30', value: 0.05 },
        { date: '2024-09-01', value: -0.25 },
        { date: '2024-09-02', value: -0.35 },
        { date: '2024-09-03', value: -3 },
        { date: '2024-09-04', value: -3 }
    ];

    const netNonCommData: DataPoint[] = [
        { date: '2024-08-12', value: 0.45 },
        { date: '2024-08-13', value: 0.55 },
        { date: '2024-08-14', value: 0.45 },
        { date: '2024-08-15', value: 0.51 },
        { date: '2024-08-16', value: 0.53 },
        { date: '2024-08-17', value: 0.55 },
        { date: '2024-08-18', value: 0.1 },
        { date: '2024-08-19', value: 0.05 },
        { date: '2024-08-20', value: 0 },
        { date: '2024-08-21', value: -0.07 },
        { date: '2024-08-22', value: -0.07 },
        { date: '2024-08-23', value: 0.04 },
        { date: '2024-08-24', value: 0.07 },
        { date: '2024-08-25', value: 0 },
        { date: '2024-08-26', value: -0.09 },
        { date: '2024-08-27', value: -0.09 },
        { date: '2024-08-28', value: -0.09 },
        { date: '2024-08-29', value: -0.10 },
        { date: '2024-08-30', value: -0.11 },
        { date: '2024-09-01', value: 0.28 },
        { date: '2024-09-02', value: 0.38 },
        { date: '2024-09-03', value: 0.48 },
        { date: '2024-09-04', value: 0.52 }
    ];

    const chartWidth = 1061;
    const chartHeight = 400;
    const padding = { top: 80, right: 40, bottom: 80, left: 60 };
    const innerWidth = chartWidth - padding.left - padding.right;
    const innerHeight = chartHeight - padding.top - padding.bottom;

    const xScale = (index: number) => (index / (netCommData.length - 1)) * innerWidth;
    const yScale = (value: number) => innerHeight - ((value + 0.8) / 1.6) * innerHeight;

    const generatePath = (data: DataPoint[]): string => {
        return data.map((point, index) => {
            const x = xScale(index);
            const y = yScale(point.value);
            return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
        }).join(' ');
    };

    const netCommPath = generatePath(netCommData);
    const netNonCommPath = generatePath(netNonCommData);

    const gridLines = Array.from({ length: 7 }, (_, i) => (i / 6) * innerHeight);

    const dateLabels = netCommData.map(d => d.date);

    return (
        <div className={styles.chartWrapper}>
            <div className={styles.chartContainer} style={{ width: chartWidth, height: chartHeight }}>
                <div className={styles.chartTitle}>Comm vs Non Comm Position (Net)</div>

                <div className={styles.legend}>
                    <div className="legendItem">
                        <div className="colorBox" style={{ backgroundColor: '#ff3333' }}></div>
                        <span className="label">Net Comm</span>
                    </div>
                    <div className="legendItem">
                        <div className="colorBox" style={{ backgroundColor: '#3366ff' }}></div>
                        <span className="label">Net Non Commercial</span>
                    </div>
                </div>

                <svg width={chartWidth} height={chartHeight}>
                    {gridLines.map((y, index) => (
                        <line
                            key={`h-grid-${index}`}
                            x1={padding.left}
                            y1={padding.top + y}
                            x2={padding.left + innerWidth}
                            y2={padding.top + y}
                            stroke="#333333"
                            strokeWidth={0.5}
                        />
                    ))}

                    {Array.from({ length: 24 }, (_, i) => (
                        <line
                            key={`v-grid-${i}`}
                            x1={padding.left + (i / 22) * innerWidth}
                            y1={padding.top}
                            x2={padding.left + (i / 22) * innerWidth}
                            y2={padding.top + innerHeight}
                            stroke="#333333"
                            strokeWidth={0.5}
                        />
                    ))}

                    <line
                        x1={padding.left}
                        y1={padding.top + yScale(0)}
                        x2={padding.left + innerWidth}
                        y2={padding.top + yScale(0)}
                        stroke="#ffffff"
                        strokeWidth={1}
                        opacity={0.8}
                    />

                    <g transform={`translate(${padding.left}, ${padding.top})`}>
                        <path d={netCommPath} fill="none" stroke="#ff3333" strokeWidth={2} />
                        <path d={netNonCommPath} fill="none" stroke="#66ff66" strokeWidth={2} />

                        {netCommData.map((point, index) => (
                            <circle key={`comm-${index}`} cx={xScale(index)} cy={yScale(point.value)} r={6} fill="#ff3333" />
                        ))}
                        {netNonCommData.map((point, index) => (
                            <circle key={`non-comm-${index}`} cx={xScale(index)} cy={yScale(point.value)} r={6} fill="#66ff66" />
                        ))}
                    </g>

                    <g transform={`translate(${padding.left}, ${padding.top + innerHeight + 25})`}>
                        <rect x={-20} y={-45} width={innerWidth + 40} height={100} fill="black" rx={4} ry={4} />
                        <line x1={-20} y1={-45} x2={innerWidth + 20} y2={-45} stroke="white" strokeWidth={2} />

                        {dateLabels.map((date, index) => (
                            <text
                                key={date}
                                x={xScale(index) - 30}
                                y={5}
                                textAnchor="start"
                                fill="white"
                                fontSize={13}
                                transform={`rotate(-45, ${xScale(index)}, 0)`}
                                opacity={0.8}
                            >
                                {date}
                            </text>
                        ))}
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default NetPositionComparisonChart;