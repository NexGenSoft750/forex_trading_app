import Section from '@/components/dashboard/Section';
import styles from './page.module.scss';
import Tab from '@/components/currency-fundamental/Tab';

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
            </Section>
        </>
    );
}