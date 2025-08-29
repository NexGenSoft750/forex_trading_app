import Section from '@/components/dashboard/Section';
import styles from './page.module.scss';
import Tab from '@/components/currency-fundamental/Tab';
import EconomicGraph from "@/components/currency-fundamental/EconomicGraph";
import USDSeasonalReturns from '@/components/currency-fundamental/USDSeasonalReturns';
import CommercialCharts from '@/components/currency-fundamental/COTCharts/COTCharts';

export default function page() {
    return (
        <>
            <Section>
                <div className={styles.currencyFundamentals}>
                    <div className={styles.currencyFundamentals__header}>
                        <Tab />
                        <Tab />
                        <Tab />
                        <Tab />
                        <Tab />
                        <Tab />
                        <Tab />
                        <Tab />
                        <Tab />
                        <Tab />
                        <Tab />
                        <Tab />
                        <Tab />
                        <Tab />
                    </div>
                    <div>
                        <CommercialCharts />
                    </div>
                </div>
                <div>
                    <EconomicGraph />
                </div>
                <div>
                    <USDSeasonalReturns />
                </div>
            </Section>
        </>
    );
}