import Section from '@/components/dashboard/Section';
import styles from './page.module.scss';
import Tab from '@/components/currency-fundamental/Tab';
import EconomicDashboard from "@/components/currency-fundamental/EconomicDashboard";
import USDSeasonalReturns from '@/components/currency-fundamental/USDSeasonalReturns';

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
                </div>
                <div>
                    <EconomicDashboard />
                </div>
                <div>
                    <USDSeasonalReturns />
                </div>
            </Section>
        </>
    );
}