'use client';

import React from 'react';
import styles from './SentimentDriveIndex.module.scss';

export default function SentimentDriveIndex() {
    const yAxisConfig = [
        { value: 15, position: 0 },
        { value: 10, position: 20 },
        { value: 5, position: 40 },
        { value: 0, position: 60 },
        { value: -5, position: 80 },
        { value: -10, position: 100 }
    ];

    const currencyPairs = [
        'EURCAD', 'EURGBP', 'AUDCAD', 'GBPCAD', 'EURUSD', 'EURCHF', 'GBPUSD', 'GBPUSD'
    ];

    const chartScale = {
        min: -10,
        max: 15,
        range: 25,
        zeroPosition: 60
    };

    const calculateBarHeight = (value: any) => {
        const absValue = Math.abs(value);
        return (absValue / chartScale.range) * 100;
    };

    // Function to calculate bar position
    const getBarPosition = (value: any) => {
        if (value > 0) {
            return {
                position: 'bottom',
                offset: `${100 - chartScale.zeroPosition}%` 
            };
        } else {
            return {
                position: 'top', 
                offset: `${chartScale.zeroPosition}%`
            };
        }
    };

    const barData = [
        { value: 12, type: 'positive' },   
        { value: 11.5, type: 'positive' }, 
        { value: 10.5, type: 'positive' }, 
        { value: 10, type: 'positive' },   
        { value: 9.5, type: 'positive' },  
        { value: 8.5, type: 'positive' },  
        { value: 7.5, type: 'positive' },  
        { value: 6.5, type: 'positive' },  
        
        { value: null, type: 'indicator' },  
        { value: null, type: 'indicator' },  
        { value: null, type: 'indicator' },
        { value: 4, type: 'indicator' },  
        { value: null, type: 'indicator' },
        { value: null, type: 'indicator' },
        { value: null, type: 'indicator' },  
        { value: null, type: 'indicator' },  
        
        { value: -2, type: 'negative' },   
        { value: -3, type: 'negative' },   
        { value: -3.5, type: 'negative' }, 
        { value: -4, type: 'negative' },   
        { value: -4.5, type: 'negative' }, 
        { value: -5, type: 'negative' },   
        { value: -5.5, type: 'negative' }, 
        { value: -6, type: 'negative' }    
    ];

    const renderChart = () => (
        <div className={styles.chartContainer}>
            <div className={styles.chartHeader}>
                <div className={styles.chartTitle}>Direction Drive Index</div>
            </div>
            
            <div className={styles.chartDataArea}>
                <div className={styles.chartContent}>
                    <div className={styles.yAxis}>
                        {yAxisConfig.map((config) => (
                            <div 
                                key={config.value}
                                className={styles.yAxisLabel} 
                                style={{ top: `${config.position}%` }}
                            >
                                {config.value}
                            </div>
                        ))}
                    </div>
                    
                    <div className={styles.chartArea}>
                        {yAxisConfig.map((config) => (
                            <div 
                                key={`grid-${config.value}`}
                                className={styles.gridLine}
                                style={{ top: `${config.position}%` }}
                            />
                        ))}
                        
                        <div className={styles.barsContainer}>
                            {barData.map((bar, index) => {
                                if (bar.type === 'empty') {
                                    return <div key={index} className={styles.barWrapper}></div>;
                                }
                                
                                if (bar.type === 'indicator') {
                                    const barHeight = calculateBarHeight(bar.value);
                                    return (
                                        <div key={index} className={styles.barWrapper}>
                                            <div 
                                                className={styles.redIndicator}
                                                style={{ 
                                                    height: `${barHeight}%`,
                                                    bottom: `${100 - chartScale.zeroPosition}%`
                                                }}
                                            />
                                            <div 
                                                className={`${styles.barValue} ${styles.indicatorValue}`}
                                                style={{ 
                                                    bottom: `${100 - chartScale.zeroPosition + (barHeight / 2)}%`
                                                }}
                                            >
                                                {bar.value}
                                            </div>
                                        </div>
                                    );
                                }
                                
                                const barHeight = calculateBarHeight(bar.value);
                                const position = getBarPosition(bar.value);
                                
                                return (
                                    <div key={index} className={styles.barWrapper}>
                                        {bar.type === 'positive' ? (
                                            <>
                                                <div 
                                                    className={styles.greenBar}
                                                    style={{ 
                                                        height: `${barHeight}%`,
                                                        bottom: position.offset
                                                    }}
                                                />
                                                <div 
                                                    className={`${styles.barValue} ${styles.positiveValue}`}
                                                    style={{ 
                                                        bottom: `${100 - chartScale.zeroPosition + (barHeight / 2)}%`
                                                    }}
                                                >
                                                    {bar.value}
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div 
                                                    className={styles.pinkBar}
                                                    style={{ 
                                                        height: `${barHeight}%`,
                                                        top: position.offset
                                                    }}
                                                />
                                                <div 
                                                    className={`${styles.barValue} ${styles.negativeValue}`}
                                                    style={{ 
                                                        top: `${chartScale.zeroPosition + (barHeight / 2)}%`
                                                    }}
                                                >
                                                    {bar.value}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={styles.xAxisArea}>
                <div className={styles.xAxisSpacer}></div>
                <div className={styles.xAxisLabels}>
                    {currencyPairs.map((pair, index) => (
                        <div key={`section1-${pair}-${index}`} className={styles.xAxisLabel}>
                            {pair}
                        </div>
                    ))}
                    
                    {currencyPairs.map((pair, index) => (
                        <div key={`section2-${pair}-${index}`} className={styles.xAxisLabel}>
                            {pair}
                        </div>
                    ))}
                    
                    {currencyPairs.map((pair, index) => (
                        <div key={`section3-${pair}-${index}`} className={styles.xAxisLabel}>
                            {pair}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div className={styles.container}>
            <div className={styles.chartsWrapper}>
                {renderChart()}
                {renderChart()}
            </div>
        </div>
    );
}