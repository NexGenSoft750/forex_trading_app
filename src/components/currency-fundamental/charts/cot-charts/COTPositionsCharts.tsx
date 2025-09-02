import styles from './COTPositionsCharts.module.scss';
import PositionChart from './PositionChart';

export default function COTPositionsCharts() {
    const nonCommercialData = [
        { period: '2024 -', long: 37000, short: 15000 },
        { period: '2024 -', long: 28000, short: 10000 },
        { period: '2024 -', long: 35000, short: 17000 },
        { period: '2024 -', long: 35000, short: 16000 },
        { period: '2024 -', long: 28000, short: 10000 },
        { period: '2024 -', long: 36000, short: 15000 },
        { period: '2024 -', long: 36000, short: 16000 },
        { period: '2024 -', long: 28000, short: 11000 },
        { period: '2025 -', long: 37000, short: 15000 },
        { period: '2025 -', long: 36000, short: 15000 },
        { period: '2025 -', long: 28000, short: 10000 },
        { period: '2025 -', long: 35000, short: 16000 },
        { period: '2025 -', long: 35000, short: 16000 },
        { period: '2025 -', long: 28000, short: 10000 },
        { period: '2025 -', long: 37000, short: 15000 },
        { period: '2025 -', long: 37000, short: 16000 },
        { period: '2025 -', long: 37000, short: 15000 },
        { period: '2025 -', long: 37000, short: 15000 },
        { period: '2026 -', long: 28000, short: 10000 },
        { period: '2026 -', long: 35000, short: 16000 },
        { period: '2026 -', long: 37000, short: 15000 }
    ];

    const commercialData = [
        { period: '2024 -', long: 37000, short: 15000 },
        { period: '2024 -', long: 28000, short: 10000 },
        { period: '2024 -', long: 35000, short: 17000 },
        { period: '2024 -', long: 35000, short: 16000 },
        { period: '2024 -', long: 28000, short: 10000 },
        { period: '2024 -', long: 36000, short: 15000 },
        { period: '2024 -', long: 36000, short: 16000 },
        { period: '2024 -', long: 28000, short: 11000 },
        { period: '2025 -', long: 37000, short: 15000 },
        { period: '2025 -', long: 36000, short: 15000 },
        { period: '2025 -', long: 28000, short: 10000 },
        { period: '2025 -', long: 35000, short: 16000 },
        { period: '2025 -', long: 35000, short: 16000 },
        { period: '2025 -', long: 28000, short: 10000 },
        { period: '2025 -', long: 37000, short: 15000 },
        { period: '2025 -', long: 37000, short: 16000 },
        { period: '2025 -', long: 37000, short: 15000 },
        { period: '2025 -', long: 37000, short: 15000 },
        { period: '2026 -', long: 28000, short: 10000 },
        { period: '2026 -', long: 35000, short: 16000 },
        { period: '2026 -', long: 37000, short: 15000 }
    ];

    return (
        <div className={styles['charts-container']}>
            <PositionChart data={nonCommercialData} title="Non Comm Long vs Short" />
            <PositionChart data={commercialData} title="Comm Long vs Short" />
        </div>
    )
}