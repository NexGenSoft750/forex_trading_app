import { Col, Row } from '@/components/layout';
import styles from './RiskMode.module.scss';
import GuageChart from '@/components/chart/GuageChart';
import Section from '@/components/layout/Section';
import SectionHeader from '@/components/layout/SectionHeader';
import TextPanel from '@/components/ui/TextPanel';
import TrendAlignmentScore from '@/components/risk-mode/charts/TrendAlignmentScore';

export default function RiskModePage() {
    return (
        <>
            <Section
                className={styles.riskModeSummaryContainer}
                ariaLabel='Risk Mode Guage Charts Section'
            >
                <div className={styles.riskModeWrapper}>
                    <SectionHeader>Risk Mode</SectionHeader>
                    <div className={styles.guageChartWrapper}>
                        <GuageChart
                            style={{ width: "25rem" }}
                            indicatorStyle={{ width: "10rem", height: "10rem" }}
                        />
                        <h1 className={styles.guageChartTitle}>Risk On / Off</h1>
                    </div>
                    <SectionHeader className={styles.scoreHeader}>Score</SectionHeader>
                    <TextPanel>
                        <p>USD strength often fluctuates based on seasonal trends like tax payments, corporate earnings, and holiday spending. Certain months see increased demand for the USD.</p>
                    </TextPanel>
                </div>
                <div className={styles.currencyStrengthIndex}>
                    <SectionHeader>Currency Strength Index</SectionHeader>
                    <div className={styles.currencyStrengthIndexGuageCharts}>
                        <div className={styles.chartRow}>
                            <div className={styles.chartWrapper}>
                                <GuageChart
                                    style={{ width: "18rem" }}
                                    indicatorStyle={{ width: "7rem", height: "7rem" }}
                                />

                                <GuageChart
                                    style={{ width: "18rem" }}
                                    indicatorStyle={{ width: "7rem", height: "7rem" }}
                                />

                                <GuageChart
                                    style={{ width: "18rem" }}
                                    indicatorStyle={{ width: "7rem", height: "7rem" }}
                                />
                            </div>
                            <Row style={{ fontSize: "2rem", fontWeight: 500, border: "1px solid #E5E7EB" }}>
                                <Col>USD</Col>
                                <Col>EUR</Col>
                                <Col>GPB</Col>
                            </Row>
                        </div>

                        <div className={styles.chartRow}>
                            <div className={styles.chartWrapper}>
                                <GuageChart
                                    style={{ width: "18rem" }}
                                    indicatorStyle={{ width: "7rem", height: "7rem" }}
                                />

                                <GuageChart
                                    style={{ width: "18rem" }}
                                    indicatorStyle={{ width: "7rem", height: "7rem" }}
                                />

                                <GuageChart
                                    style={{ width: "18rem" }}
                                    indicatorStyle={{ width: "7rem", height: "7rem" }}
                                />
                            </div>
                            <Row style={{ fontSize: "2rem", fontWeight: 500, border: "1px solid #E5E7EB" }}>
                                <Col>USD</Col>
                                <Col>EUR</Col>
                                <Col>GPB</Col>
                            </Row>
                        </div>

                        <div className={styles.chartRow}>
                            <div className={styles.chartWrapper}>
                                <GuageChart
                                    style={{ width: "18rem" }}
                                    indicatorStyle={{ width: "7rem", height: "7rem" }}
                                />

                                <GuageChart
                                    style={{ width: "18rem" }}
                                    indicatorStyle={{ width: "7rem", height: "7rem" }}
                                />

                                <GuageChart
                                    style={{ width: "18rem" }}
                                    indicatorStyle={{ width: "7rem", height: "7rem" }}
                                />
                            </div>
                            <Row style={{ fontSize: "2rem", fontWeight: 500, border: "1px solid #E5E7EB" }}>
                                <Col>USD</Col>
                                <Col>EUR</Col>
                                <Col>GPB</Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </Section>
            <TextPanel>
                <p>USD strength often fluctuates based on seasonal trends like tax payments, corporate earnings, and holiday spending. Certain months see increased demand for the USD, while others experience  weakness due to capital outflows and global trade patterns.</p>
            </TextPanel>
            <TrendAlignmentScore />
        </>
    );
}