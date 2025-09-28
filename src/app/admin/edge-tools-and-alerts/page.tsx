import Section from '@/components/layout/Section';
import styles from './EdgeToolsAndAlertsPage.module.scss';
import TextPanel from '@/components/ui/TextPanel';
import TradingAlerts from '@/components/edge-tools-and-alerts/TradingAlerts';
import TradingAlert from '@/components/edge-tools-and-alerts/TradingAlert';
import TradingAlertsHistoryTable from '@/components/edge-tools-and-alerts/tables/TradingAlertsHistoryTable';
import ForexMarketPulseGaugesChart from '@/components/edge-tools-and-alerts/charts/ForexMarketPulseGaugesChart';
import SectionHeader from '@/components/layout/SectionHeader';
import { Row, Col } from '@/components/layout';
import SectionHeaders from '@/components/layout/SectionHeaders';

const EdgeToolsAndAlertsPage = () => {
    const alerts = Array(4).fill(null);

    return (
        <>
            <Section ariaLabel='Edge Tools & Alerts Charts Section'>
                <div
                    className={styles.charts}
                    aria-label='Edge Tools & Alerts Charts Container'
                >
                    <div
                        className={styles.charts__chart}
                        aria-label='Forex Market Pulse Guage Chart'
                    >
                        <SectionHeader>Forex Market Pulse</SectionHeader>
                        <ForexMarketPulseGaugesChart />
                        <Row style={{ fontSize: "2rem", fontWeight: 500, border: "1px solid #E5E7EB" }}>
                            <Col>Trend</Col>
                            <Col>Momentum</Col>
                            <Col>Volatility</Col>
                        </Row>
                    </div>
                    <div
                        className={styles.charts__chart}
                        aria-label='Direction Drive Index Chart'
                    >
                        <SectionHeader>Direction Drive Index</SectionHeader>
                    </div>
                    <div
                        className={styles.charts__chart}
                        aria-label='Sentiment Drive Index Chart'
                    >
                        <SectionHeader>Sentiment Drive Index</SectionHeader>
                    </div>
                    <div
                        className={styles.charts__chart}
                        aria-label='Sentiment Drive Index'
                    >
                        <SectionHeader>Sentiment Drive Index</SectionHeader>
                    </div>
                </div>
            </Section >
            <Section ariaLabel='Edge Tools & Alerts Info Text'>
                <TextPanel>
                    <p>USD strength often fluctuates based on seasonal trends like tax payments, corporate earnings, and holiday spending. Certain months see increased demand for the USD, while others experience  weakness due to capital outflows and global trade patterns.</p>
                </TextPanel>
            </Section>
            <Section ariaLabel='Trading Alerts and Instructions Section'>
                <SectionHeaders headers={["Trade Alerts", "Instructions"]} />
                <div className={styles.sectionContentWrapper}>
                    <TradingAlerts>
                        {alerts?.map((alert, key) => <TradingAlert key={key} />)}
                    </TradingAlerts>
                </div>
            </Section>
            <Section ariaLabel='Trade Alerts history and Instructions Section'>
                <SectionHeaders headers={["Trade Alerts history", "Instructions"]} />
                <div className={styles.sectionContentWrapper}>
                    <TradingAlertsHistoryTable />
                </div>
            </Section>
        </>
    );
};

export default EdgeToolsAndAlertsPage;
