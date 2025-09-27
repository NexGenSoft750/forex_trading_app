import React from 'react';
import styles from './TradingAlertsHistoryTable.module.scss';

interface TradingAlert {
    id: string;
    date: string;
    pair: string;
    direction: 'Buy/CMP' | 'Sell Limit' | 'Buy/Stop';
    type: 'Swing' | 'Scalp';
    entry: number;
    stoploss: number;
    tp1: number;
    tp2: number;
    result: number;
    status: 'completed' | 'open' | 'stopped';
    comment: string;
    imageUrl?: string;
}

const TradingAlertsHistoryTable: React.FC = () => {
    const alerts: TradingAlert[] = [
        {
            id: '1',
            date: '2025-09-08',
            pair: 'EUR/USD',
            direction: 'Buy/CMP',
            type: 'Swing',
            entry: 1.08550,
            stoploss: 1.08200,
            tp1: 1.09000,
            tp2: 1.09500,
            result: 450.00,
            status: 'completed',
            comment: 'News catalyst drove price up.',
            imageUrl: '#'
        },
        {
            id: '2',
            date: '2025-09-07',
            pair: 'GBP/JPY',
            direction: 'Sell Limit',
            type: 'Scalp',
            entry: 184.500,
            stoploss: 184.800,
            tp1: 184.200,
            tp2: 1.09500,
            result: -150.00,
            status: 'stopped',
            comment: 'Stopped out on volatility spike.',
            imageUrl: '#'
        },
        {
            id: '3',
            date: '2025-09-06',
            pair: 'AUD/USD',
            direction: 'Buy/Stop',
            type: 'Swing',
            entry: 0.64800,
            stoploss: 0.64500,
            tp1: 0.65300,
            tp2: 0.65800,
            result: 0,
            status: 'open',
            comment: 'Awaiting confirmation.',
            imageUrl: '#'
        },
        {
            id: '4',
            date: '2025-09-07',
            pair: 'GBP/JPY',
            direction: 'Sell Limit',
            type: 'Scalp',
            entry: 184.500,
            stoploss: 184.800,
            tp1: 184.200,
            tp2: 1.09500,
            result: -150.00,
            status: 'stopped',
            comment: 'Stopped out on volatility spike.',
            imageUrl: '#'
        },
        {
            id: '5',
            date: '2025-09-06',
            pair: 'AUD/USD',
            direction: 'Buy/Stop',
            type: 'Swing',
            entry: 0.64800,
            stoploss: 0.64500,
            tp1: 0.65300,
            tp2: 0.65800,
            result: 0,
            status: 'open',
            comment: 'Awaiting confirmation.',
            imageUrl: '#'
        },
        {
            id: '6',
            date: '2025-09-07',
            pair: 'GBP/JPY',
            direction: 'Sell Limit',
            type: 'Scalp',
            entry: 184.500,
            stoploss: 184.800,
            tp1: 184.200,
            tp2: 1.09500,
            result: -150.00,
            status: 'stopped',
            comment: 'Stopped out on volatility spike.',
            imageUrl: '#'
        },
        {
            id: '7',
            date: '2025-09-06',
            pair: 'AUD/USD',
            direction: 'Buy/Stop',
            type: 'Swing',
            entry: 0.64800,
            stoploss: 0.64500,
            tp1: 0.65300,
            tp2: 0.65800,
            result: 0,
            status: 'open',
            comment: 'Awaiting confirmation.',
            imageUrl: '#'
        },
        {
            id: '8',
            date: '2025-09-07',
            pair: 'GBP/JPY',
            direction: 'Sell Limit',
            type: 'Scalp',
            entry: 184.500,
            stoploss: 184.800,
            tp1: 184.200,
            tp2: 1.09500,
            result: -150.00,
            status: 'stopped',
            comment: 'Stopped out on volatility spike.',
            imageUrl: '#'
        },
        {
            id: '9',
            date: '2025-09-06',
            pair: 'AUD/USD',
            direction: 'Buy/Stop',
            type: 'Swing',
            entry: 0.64800,
            stoploss: 0.64500,
            tp1: 0.65300,
            tp2: 0.65800,
            result: 0,
            status: 'open',
            comment: 'Awaiting confirmation.',
            imageUrl: '#'
        },
    ];

    const getDirectionClass = (direction: string) => {
        if (direction.includes('Buy')) return styles.buyDirection;
        if (direction.includes('Sell')) return styles.sellDirection;
        return '';
    };

    const getResultClass = (result: number, status: string) => {
        if (status === 'open') return styles.openResult;
        return result > 0 ? styles.profitResult : styles.lossResult;
    };

    const formatResult = (result: number, status: string) => {
        if (status === 'open') return 'Open';
        return result > 0 ? `+ ${result.toFixed(2)}` : `- ${Math.abs(result).toFixed(2)}`;
    };

    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.headerRow}>
                        <th className={styles.headerCell}>Date</th>
                        <th className={styles.headerCell}>Pair</th>
                        <th className={styles.headerCell}>Direction</th>
                        <th className={styles.headerCell}>Type</th>
                        <th className={styles.headerCell}>Entry</th>
                        <th className={styles.headerCell}>Stoploss</th>
                        <th className={styles.headerCell}>TP1</th>
                        <th className={styles.headerCell}>TP2</th>
                        <th className={styles.headerCell}>Result (P/L)</th>
                        <th className={styles.headerCell}>Comment</th>
                        <th className={styles.headerCell}>Actions</th>
                        <th className={styles.headerCell}>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {alerts.map((alert) => (
                        <tr key={alert.id} className={styles.dataRow}>
                            <td className={styles.dataCell}>{alert.date}</td>
                            <td className={styles.dataCell}>
                                <span className={styles.pairText}>{alert.pair}</span>
                            </td>
                            <td className={styles.dataCell}>
                                <span className={`${styles.directionBadge} ${getDirectionClass(alert.direction)}`}>
                                    {alert.direction}
                                </span>
                            </td>
                            <td className={styles.dataCell}>
                                <span className={styles.typeText}>{alert.type}</span>
                            </td>
                            <td className={styles.dataCell}>{alert.entry}</td>
                            <td className={styles.dataCell}>{alert.stoploss}</td>
                            <td className={styles.dataCell}>{alert.tp1}</td>
                            <td className={styles.dataCell}>{alert.tp2}</td>
                            <td className={styles.dataCell}>
                                <span className={`${styles.resultBadge} ${getResultClass(alert.result, alert.status)}`}>
                                    {formatResult(alert.result, alert.status)}
                                </span>
                            </td>
                            <td className={styles.dataCell}>
                                <span className={styles.commentText}>{alert.comment}</span>
                            </td>
                            <td className={styles.dataCell}>
                                <div className={styles.actionsContainer}>
                                    <button className={`${styles.actionButton} ${styles.editButton}`} title="Edit">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                                        </svg>
                                    </button>
                                    <button className={`${styles.actionButton} ${styles.deleteButton}`} title="Delete">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                            <td className={styles.dataCell}>
                                <div className={styles.imageContainer}>
                                    <a href={alert.imageUrl} target="_blank" rel="noopener noreferrer" className={styles.imageLink} title="View Image">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H6.99C4.79 7 3 8.79 3 11s1.79 4 4 4H11v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm5-6h4.01c2.2 0 4 1.79 4 4s-1.8 4-4 4H13v1.9h4c2.21 0 4-1.79 4-4s-1.79-4-4-4h-4V7z" />
                                        </svg>
                                    </a>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TradingAlertsHistoryTable;