import styles from './TrendAlignmentScore.module.scss';

interface TrendAlignmentData {
    currency: string;
    ultf: number;
    ltf: number;
    mtf: number;
    htf: number;
}

const trendData: TrendAlignmentData[] = [
    { currency: 'USD', ultf: 0.1,  ltf: 1.0, mtf: 0.4, htf: 1.5 },
    { currency: 'EUR', ultf: 1.0,  ltf: 1.4, mtf: 1.0,  htf: 1.6 },
    { currency: 'GBP', ultf: 1.6,  ltf: 1.6, mtf: 1.4,  htf: 1.6 },
    { currency: 'CAD', ultf: 5.1,  ltf: 5.1, mtf: 3.8,  htf: 0.0 },
    { currency: 'JPY', ultf: 1.7,  ltf: 1.7, mtf: 4.5,  htf: 3.8 },
    { currency: 'CHF', ultf: -3.1, ltf: -3.9, mtf: -3.9, htf: 1.3 },
    { currency: 'AUD', ultf: -2.0, ltf: -2.5, mtf: -0.4, htf: 0.0 },
    { currency: 'NZD', ultf: 0.0,  ltf: 0.2, mtf: 0.1,  htf: 0.0 },
    { currency: 'XAU', ultf: 0.0,  ltf: 0.2, mtf: 0.1,  htf: 0.9 },
    { currency: 'BTC', ultf: 0.1,  ltf: 0.2, mtf: 0.1,  htf: -1.7 }
];

export default function TrendAlignmentScore() {
    const maxValue = 8.0;
    const minValue = -6.0;
    const totalRange = maxValue - minValue;
    const chartHeight = 480; 

    const gridValues = [6.0, 4.0, 2.0, 0.0, -2.0, -4.0, -6.0];

    const getBarStyles = (value: number) => {
        if (Math.abs(value) < 0.01) return null; 

        const zeroLinePosition = (maxValue / totalRange) * 100;
        
        if (value > 0) {
            const valuePosition = ((maxValue - value) / totalRange) * 100;
            const barHeight = zeroLinePosition - valuePosition;
            
            return {
                top: `${valuePosition}%`,
                height: `${barHeight}%`,
            };
        } else {
            const valuePosition = ((maxValue - value) / totalRange) * 100; 
            const barHeight = valuePosition - zeroLinePosition;
            
            return {
                top: `${zeroLinePosition}%`,
                height: `${barHeight}%`,
            };
        }
    };

    const getGridLinePosition = (value: number) => {
        return ((maxValue - value) / totalRange) * 100;
    };

    const formatValue = (value: number) => {
        if (Math.abs(value) < 0.01) return '';
        if (Math.abs(value) < 0.1) return value.toFixed(3);
        if (value === Math.floor(value)) return value.toString();
        return value.toString();
    };

    const getBarClassName = (type: string) => {
        return `${styles.bar} ${styles[`bar--${type}`]}`;
    };

    const renderBar = (value: number, type: string) => {
        const barStyles = getBarStyles(value);
        if (!barStyles) return null;

        return (
            <div 
                className={getBarClassName(type)}
                style={barStyles}
            >
                {Math.abs(value) >= 0.1 && (
                    <div className={`${styles.barValue} ${value > 0 ? styles['barValue--positive'] : styles['barValue--negative']}`}>
                        {formatValue(value)}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Trend Alignment Score
            </h2>

            <div className={styles.legend}>
                <div className={styles.legendItem}>
                    <div className={`${styles.legendItemColor} ${styles['legendItemColor--ultf']}`}></div>
                    <span className={styles.legendItemLabel}>ULTF</span>
                </div>
                <div className={styles.legendItem}>
                    <div className={`${styles.legendItemColor} ${styles['legendItemColor--ltf']}`}></div>
                    <span className={styles.legendItemLabel}>LTF</span>
                </div>
                <div className={styles.legendItem}>
                    <div className={`${styles.legendItemColor} ${styles['legendItemColor--mtf']}`}></div>
                    <span className={styles.legendItemLabel}>MTF</span>
                </div>
                <div className={styles.legendItem}>
                    <div className={`${styles.legendItemColor} ${styles['legendItemColor--htf']}`}></div>
                    <span className={styles.legendItemLabel}>HTF</span>
                </div>
            </div>

            <div className={styles.chartContainer}>
                <div className={styles.yAxis}>
                    {gridValues.map((value, index) => (
                        <div 
                            key={value} 
                            className={styles.yAxisLabel}
                            style={{ top: `${getGridLinePosition(value)}%` }}
                        >
                            {value === 0 ? '0.0' : value.toFixed(1)}
                        </div>
                    ))}
                </div>

                <div className={styles.chartArea}>
                    {gridValues.map((value) => (
                        <div
                            key={value}
                            className={`${styles.gridLine} ${value === 0 ? styles['gridLine--zero'] : ''}`}
                            style={{ top: `${getGridLinePosition(value)}%` }}
                        />
                    ))}

                    <div className={styles.barsContainer}>
                        {trendData.map((data, index) => (
                            <div key={data.currency} className={styles.currencyGroup}>
                                <div className={styles.barsGroup}>
                                    <div className={styles.barContainer}>
                                        {renderBar(data.ultf, 'ultf')}
                                    </div>

                                    <div className={styles.barContainer}>
                                        {renderBar(data.ltf, 'ltf')}
                                    </div>

                                    <div className={styles.barContainer}>
                                        {renderBar(data.mtf, 'mtf')}
                                    </div>

                                    <div className={styles.barContainer}>
                                        {renderBar(data.htf, 'htf')}
                                    </div>
                                </div>

                                <div className={styles.currencyGroupLabel}>
                                    {data.currency}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}