import styles from "./HeatMapModal.module.scss";
import NetScoreTable from "./NetScoreTable";
import COTTable from "./COTTable";
import RetailTable from "./RetailTable";
import SeasonalityTable from "./SeasonalityTable";
import USDTable from "./USDTable";
import Row from "./Row";
import SentimentOverview from "./SentimentOverview";
import CHFTable from "./CHFTable";
import PositionCharts from "./PositionCharts";
import { FiX } from 'react-icons/fi';

type HeatMapModalProps = {
    onClose: () => void;
}

export default function HeatMapModal({ onClose }: HeatMapModalProps) {
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={styles.heatmapModal} onClick={handleBackdropClick}>
            <button
                className={styles.heatmapModal__closeButton}
                onClick={onClose}
                aria-label="Close modal"
            >
                <FiX size={24} />
            </button>

            <div className={styles.heatmapModal__content}>
                <div className={styles.heatmapModal__sentimentPanel}>
                    <Row
                        style={{
                            fontSize: "3rem",
                            backgroundColor: "#C9DAF9",
                        }}
                    >
                        Forex Fundamental Edge
                    </Row>
                    <Row
                        style={{
                            fontSize: "2.2rem",
                            backgroundColor: "#5D94F9",
                        }}
                    >
                        USDCAD
                    </Row>
                    <Row
                        style={{
                            fontSize: "2.3rem",
                            color: "#ffffff",
                            backgroundColor: "#12AD2B",
                        }}
                    >
                        Bullish
                    </Row>
                    <SentimentOverview />
                    <NetScoreTable />
                </div>
                <div className={styles.heatmapModal__fundamentalsPanel}>
                    <COTTable />
                    <RetailTable />
                    <Row
                        style={{
                            fontSize: "2.3rem",
                            backgroundColor: "#FFCCA0",
                        }}
                    >
                        Seasonality
                    </Row>
                    <SeasonalityTable />
                    <Row
                        style={{
                            fontSize: "2.5rem",
                            backgroundColor: "#FFCCA0",
                        }}
                    >
                        Fundamentals
                    </Row>
                    <div
                        style={{
                            display: "flex",
                        }}
                    >
                        <div style={{ width: "50%" }}>
                            <USDTable />
                        </div>
                        <div style={{ width: "50%" }}>
                            <CHFTable />
                        </div>
                    </div>
                    <PositionCharts />
                </div>
            </div>
        </div >
    );
}