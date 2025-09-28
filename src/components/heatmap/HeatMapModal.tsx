import styles from "./HeatMapModal.module.scss";
import { Row, Col } from "@/components/layout";
import SentimentOverview from "./SentimentOverview";
import { FiX } from 'react-icons/fi';

type HeatMapModalProps = {
    onClose: () => void;
}

const txt = (s: React.CSSProperties) => s;

function GradientBar({
    width = "520px",
    height = 12,
    gradient = 'to right, #2E7D32, #C0A46A, #E53935',
    markerPercent,
    leftText,
    rightText,
    topLabel,
}: {
    width?: string;
    height?: number;
    gradient?: string;
    markerPercent?: number;
    leftText?: string;
    rightText?: string;
    topLabel?: string;
}) {
    return (
        <div style={txt({ width })}>
            {topLabel && (
                <div style={txt({
                    textAlign: 'center' as const,
                    fontWeight: 500,
                    marginBottom: 10,
                    color: '#464646',
                    fontSize: '1.2rem',
                })}>
                    {topLabel}
                </div>
            )}
            <div style={txt({
                position: 'relative' as const,
                width: '100%',
                height,
                borderRadius: 999,
                background: `linear-gradient(${gradient})`,
            })}>
                {typeof markerPercent === 'number' && (
                    <div style={txt({
                        position: 'absolute' as const,
                        left: `calc(${markerPercent}% - 6px)`,
                        top: 1,
                        width: 10,
                        height: 10,
                        borderRadius: 999,
                        background: 'black',
                        border: '2px solid white',
                    })} />
                )}
            </div>
            {(leftText || rightText) && (
                <div style={txt({
                    marginTop: 6,
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    color: '#1b8f3b',
                })}>
                    <span>{leftText}</span>
                    <span style={txt({ color: '#c02a2a' })}>{rightText}</span>
                </div>
            )}
        </div>
    );
}

function ThinBar({
    width = "100%",
    color = 'linear-gradient(to right, #ff6a00, #ffe066, #2ecc71)',
    percent = 60,
    label = '',
}: {
    width?: number | string;
    color?: string;
    percent?: number;
    label?: string;
}) {
    return (
        <div style={txt({ width })}>
            {label && (
                <div style={txt({
                    fontWeight: 700,
                    textAlign: 'center' as const,
                    marginBottom: 8,
                })}>
                    {label}
                </div>
            )}
            <div style={txt({
                width: '100%',
                height: 12,
                background: '#e7e7ea',
                borderRadius: 8,
                position: 'relative' as const,
            })}>
                <div style={txt({
                    position: 'absolute' as const,
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: `${percent}%`,
                    borderRadius: 8,
                    background: color,
                })} />
            </div>
        </div>
    );
}

const cell = (text: React.ReactNode, style?: React.CSSProperties, isLastColumn?: boolean) => (
    <td style={txt({
        padding: '10px 12px',
        borderBottom: '3px solid white',
        borderRight: isLastColumn ? 'none' : '3px solid white',
        textAlign: 'left' as const,
        ...style,
    })}>{text}</td>
);

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
                        <Col>Forex Fundamental Edge</Col>
                    </Row>
                    <Row
                        style={{
                            fontSize: "2.2rem",
                            backgroundColor: "#5D94F9",
                        }}
                    >
                        <Col>USDCAD</Col>
                    </Row>
                    <Row
                        style={{
                            fontSize: "2.3rem",
                            color: "#ffffff",
                            backgroundColor: "#12AD2B",
                        }}
                    >
                        <Col>Bullish</Col>
                    </Row>
                    <SentimentOverview />
                    <div style={txt({ marginTop: 10 })}>
                        <table
                            style={txt({
                                width: "100%",
                                borderCollapse: "collapse" as const,
                                fontSize: 16,
                            })}
                        >
                            <thead>
                                <tr
                                    style={txt({
                                        background: "#12AD2B",
                                        color: "#fff",
                                        fontWeight: 800,
                                        fontSize: 18,
                                        borderTop: "1px solid #cfd6e4",
                                        borderBottom: "1px solid #cfd6e4",
                                    })}
                                >
                                    <th style={txt({ textAlign: "center" as const, padding: "10px 16px" })}>
                                        Net Score
                                    </th>
                                    <th style={txt({ textAlign: "center" as const, padding: "10px 16px" })}>
                                        Momentum
                                    </th>
                                    <th style={txt({ textAlign: "center" as const, padding: "10px 16px" })}>
                                        Sentimental Bias
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {cell("Fundamental Score", {
                                        background: "#EAEAEA",
                                        width: 280,
                                        fontSize: "1.9rem",
                                        fontWeight: 500,
                                        color: "black",
                                        textAlign: "center",
                                    })}
                                    {cell("11", { background: "#EAEAEA", textAlign: "center", color: "black", fontWeight: 600 as const, fontSize: "1.8rem" })}
                                    {cell(<span style={txt({ fontWeight: 600, color: "black" })}>Bearish</span>, {
                                        background: "#EAEAEA",
                                        textAlign: "center" as const,
                                        fontSize: "1.8rem"
                                    }, true)}
                                </tr>

                                <tr>
                                    {cell("Seasonality", {
                                        background: "#EAEAEA", fontSize: "1.9rem",
                                        fontWeight: 500, color: "black", textAlign: "center",
                                    })}
                                    {cell("-5", { background: "#EAEAEA", textAlign: "center", color: "black", fontWeight: 600 as const, fontSize: "1.8rem" })}
                                    {cell(<span style={txt({ fontWeight: 600, color: "black" })}>Bearish</span>, {
                                        background: "#FF8484",
                                        textAlign: "center" as const,
                                        fontSize: "1.8rem"
                                    }, true)}
                                </tr>

                                <tr>
                                    {cell("Cot Score", {
                                        background: "#EAEAEA", fontSize: "1.9rem",
                                        fontWeight: 500, color: "black", textAlign: "center",
                                    })}
                                    {cell("-1", { background: "#EAEAEA", textAlign: "center", color: "black", fontWeight: 600 as const, fontSize: "1.8rem" })}
                                    {cell(<span style={txt({ fontWeight: 600 })}>Bullish</span>, {
                                        background: "#FF8484",
                                        textAlign: "center" as const,
                                        color: "black",
                                        fontSize: "1.8rem"
                                    }, true)}
                                </tr>

                                <tr>
                                    {cell("C-Score", {
                                        background: "#EAEAEA", fontSize: "1.9rem",
                                        fontWeight: 500, color: "black", textAlign: "center",
                                    })}
                                    {cell("1", { background: "#EAEAEA", textAlign: "center", color: "black", fontWeight: 600 as const, fontSize: "1.8rem" })}
                                    {cell(<span style={txt({ fontWeight: 600 })}>Bullish</span>, {
                                        background: "#57BB8A",
                                        textAlign: "center" as const,
                                        color: "black",
                                        fontSize: "1.8rem"
                                    }, true)}
                                </tr>

                                <tr>
                                    {cell("T-Score", {
                                        background: "#EAEAEA", fontSize: "1.9rem",
                                        fontWeight: 500, color: "black", textAlign: "center",
                                    })}
                                    {cell("2", { background: "#EAEAEA", textAlign: "center", color: "black", fontWeight: 600 as const, fontSize: "1.8rem" })}
                                    {cell(<span style={txt({ fontWeight: 600 })}>Bullish</span>, {
                                        background: "#57BB8A",
                                        textAlign: "center" as const,
                                        color: "black",
                                        fontSize: "1.8rem"
                                    }, true)}
                                </tr>

                                <tr>
                                    {cell("Risk Meter", {
                                        background: "#EAEAEA", fontSize: "1.9rem",
                                        fontWeight: 500, color: "black", textAlign: "center",
                                    })}
                                    {cell("14", { background: "#EAEAEA", textAlign: "center", color: "black", fontWeight: 600 as const, fontSize: "1.8rem" })}
                                    {cell(<span style={txt({ fontWeight: 600, color: "black", fontSize: "1.8rem" })}>Risk On</span>, {
                                        background: "#FF8484",
                                        textAlign: "center" as const,
                                    }, true)}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={styles.heatmapModal__fundamentalsPanel}>
                    <div style={txt({ padding: '12px 16px' })}>
                        <div style={txt({ border: '1px solid rgb(234 236 241)', padding: '1rem', borderRadius: '6px' })}>
                            <div style={txt({
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: 16,
                            })}>
                                <div>
                                    <div style={txt({ textAlign: 'center', fontWeight: 600, marginBottom: 8, fontSize: "1.5rem", color: "black" })}>
                                        Non comm POSITIONS
                                    </div>
                                    <div style={txt({ display: 'grid', rowGap: 10 })}>
                                        <div style={txt({ display: 'flex', gap: 16, alignItems: 'center' })}>
                                            <div style={txt({ width: 34, fontWeight: 600, fontSize: "1.5rem" })}>EUR</div>
                                            <ThinBar
                                                color={'linear-gradient(to right, #ff6a00, #ffe066, #2ecc71)'}
                                                percent={63}
                                            />
                                        </div>
                                        <div style={txt({ display: 'flex', gap: 16, alignItems: 'center' })}>
                                            <div style={txt({ width: 34, fontWeight: 600, fontSize: "1.5rem" })}>GBP</div>
                                            <ThinBar
                                                color={'linear-gradient(to right, #ff6a00, #ffe066, #2ecc71)'}
                                                percent={45}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div style={txt({ textAlign: 'center', fontWeight: 600, marginBottom: 8, fontSize: "1.5rem", color: "black" })}>
                                        COMM POSITIONS
                                    </div>
                                    <div style={txt({ display: 'grid', rowGap: 10 })}>
                                        <div style={txt({ display: 'flex', gap: 16, alignItems: 'center' })}>
                                            <div style={txt({ width: 34, fontWeight: 600, fontSize: "1.5rem" })}>EUR</div>
                                            <ThinBar
                                                color={'linear-gradient(to right, #ff6a00, #ffe066, #2ecc71)'}
                                                percent={88}
                                            />
                                        </div>
                                        <div style={txt({ display: 'flex', gap: 16, alignItems: 'center' })}>
                                            <div style={txt({ width: 34, fontWeight: 600, fontSize: "1.5rem" })}>GBP</div>
                                            <ThinBar
                                                color={'linear-gradient(to right, #ff6a00, #ffe066, #2ecc71)'}
                                                percent={55}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={txt({ marginTop: 16 })}>
                                <GradientBar
                                    width="100%"
                                    height={14}
                                    gradient="to right, #2ecc71, #6a6a6a, #E53935"
                                    markerPercent={50}
                                    leftText="LONG"
                                    rightText="SHORT"
                                    topLabel="Retail Positions"
                                />
                            </div>
                        </div>
                        <div style={txt({
                            marginTop: 18,
                            border: '1px solid rgb(234, 236, 241)',
                            padding: '1rem',
                            borderRadius: 6,
                        })}>
                            <div style={txt({ textAlign: 'center', fontWeight: 600, marginBottom: 12, fontSize: "1.5rem", color: "black" })}>
                                CURRENCY STRENGTH INDEX
                            </div>

                            {/* Two thin indexed bars with dots */}
                            {[
                                { code: 'EUR', dot: 45, width: "45%" },
                                { code: 'GBP', dot: 60, width: "60%" },
                            ].map((row, i) => (
                                <div key={i} style={txt({ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 14 })}>
                                    <div style={txt({ width: 34, fontWeight: 600, fontSize: "1.5rem" })}>{row.code}</div>
                                    <div style={txt({
                                        position: 'relative' as const,
                                        height: 8,
                                        borderRadius: 99,
                                        flex: 1,
                                        background: '#e7e7ea',
                                    })}>
                                        <div style={txt({
                                            position: 'absolute' as const,
                                            left: 0,
                                            top: 0,
                                            bottom: 0,
                                            width: row.width,
                                            background: 'linear-gradient(to right, #ff7043, #ffd54f, #9ccc65)',
                                            borderRadius: 99,
                                            opacity: 0.9,
                                        })} />
                                        <div style={txt({
                                            position: 'absolute' as const,
                                            top: -3,
                                            left: `calc(${row.dot}% - 6px)`,
                                            width: 12,
                                            height: 12,
                                            borderRadius: 99,
                                            background: '#333',
                                            border: '2px solid white',
                                        })} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div style={txt({ marginTop: 14 })}>
                            <div style={txt({
                                textAlign: 'center' as const,
                                fontWeight: 600,
                                background: '#e5e7eb',
                                padding: '10px 0',
                                border: '1px solid #d9e2f2',
                                borderBottom: 'none',
                                fontSize: '1.5rem',
                                color: 'black',
                                borderTopLeftRadius: '6px',
                                borderTopRightRadius: '6px',
                            })}>
                                Technical Trends
                            </div>
                            <table style={txt({
                                width: '100%',
                                borderCollapse: 'collapse' as const,
                                fontSize: 14,
                                border: '1px solid #d9e2f2',
                            })}>
                                <thead>
                                    <tr>
                                        {['Time Frame', 'Trend', 'Momentum', 'Volatility'].map((h, i) => (
                                            <th key={i} style={txt({
                                                padding: '10px 12px',
                                                textAlign: 'center' as const,
                                                color: 'black',
                                                fontWeight: '500',
                                                borderBottom: '1px solid #e6eefc',
                                            })}>{h}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ['1Hr', 'Bullish', 'Bullish', 'Moderate'],
                                        ['4Hr', 'Bullish', 'Bullish', 'High'],
                                        ['Daily', 'Bullish', 'Bullish', 'Low'],
                                    ].map((r, i) => (
                                        <tr key={i} style={txt({
                                            backgroundColor: i % 2 === 1 ? '#f8f9fa' : 'transparent'
                                        })}>
                                            {r.map((c, j) => {
                                                let color = "black";
                                                if (j > 0 && j < 3) color = "#1f8f3c";
                                                if (c === "High") color = "orange";

                                                return (
                                                    <td
                                                        key={j}
                                                        style={txt({
                                                            padding: "12px 12px",
                                                            textAlign: "center",
                                                            borderTop: "1px solid #eef3fb",
                                                            color,
                                                            fontWeight: j < 3 ? 600 : "normal",
                                                            fontSize: j > 2 ? "1.3rem" : "inherit",
                                                        })}
                                                    >
                                                        {c}
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div style={txt({ marginTop: 18 })}>
                            <div style={txt({
                                textAlign: 'center' as const,
                                fontWeight: 600,
                                background: '#e5e7eb',
                                padding: '10px 0',
                                border: '1px solid #d9e2f2',
                                borderBottom: 'none',
                                fontSize: '1.5rem',
                                color: 'black',
                                borderTopLeftRadius: '6px',
                                borderTopRightRadius: '6px',
                            })}>
                                Technical Levels
                            </div>
                            <table style={txt({
                                width: '100%',
                                borderCollapse: 'collapse' as const,
                                fontSize: 14,
                                border: '1px solid #d9e2f2',
                            })}>
                                <tbody>
                                    {[
                                        ['Current Price', '0.812365', 'Pivot point', '0.8923256'],
                                        ['S1', '0.83749333', 'R1', '0.841303333'],
                                        ['S2', '0.83586667', 'R2', '0.843486667'],
                                        ['S3', '0.83205667', 'R3', '0.847296667'],
                                    ].map((r, i) => (
                                        <tr key={i} style={txt({ borderTop: '1px solid #eef3fb' })}>
                                            <td style={txt({ padding: '10px 12px', width: 140, color: '#1f8f3c', fontWeight: 500 })}>{r[0]}</td>
                                            <td style={txt({ padding: '10px 12px', textAlign: 'right' as const, color: 'black' })}>{r[1]}</td>
                                            <td style={txt({ padding: '10px 12px', width: 120, color: '#991B1B', fontWeight: 500 })}>{r[2]}</td>
                                            <td style={txt({ padding: '10px 12px', textAlign: 'right' as const, color: 'black' })}>{r[3]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}