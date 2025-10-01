"use client"

import Section from '@/components/layout/Section';
import styles from './CurrencyFundamentalsPage.module.scss';
import Tab from '@/components/ui/Tab';
import { useState } from 'react';
import TabPanel from '@/components/currency-fundamental/TabPanel';
import Tabs from '@/components/ui/Tabs';
const DEFAULT_ACTIVE_TAB = 'Admin Table 1';

export default function CurrencyFundamentalsPage() {
    const [activeTab, setActiveTab] = useState<string>(DEFAULT_ACTIVE_TAB);

    const handleTabClick = (tabName: string) => {
        setActiveTab(tabName);
    };

    return (
        <Section>
            <div className={styles.currencyFundamentalsContainer}>
                <Tabs>
                    <Tab
                        text="USD &"
                        border="rounded"
                        isActive={activeTab === "USD &"}
                        onClick={handleTabClick}
                    />
                    <Tab
                        text="GBP"
                        border="rounded"
                        isActive={activeTab === "GBP"}
                        onClick={handleTabClick}
                    />
                    <Tab
                        text="EUR"
                        border="rounded"
                        isActive={activeTab === "EUR"}
                        onClick={handleTabClick}
                    />
                    <Tab
                        text="CAD"
                        border="rounded"
                        isActive={activeTab === "CAD"}
                        onClick={handleTabClick}
                    />
                    <Tab
                        text="AUD"
                        border="rounded"
                        isActive={activeTab === "AUD"}
                        onClick={handleTabClick}
                    />
                    <Tab
                        text="NZD"
                        border="rounded"
                        isActive={activeTab === "NZD"}
                        onClick={handleTabClick}
                    />
                    <Tab
                        text="CHF"
                        border="rounded"
                        isActive={activeTab === "CHF"}
                        onClick={handleTabClick}
                    />
                    <Tab
                        text="JPY"
                        border="rounded"
                        isActive={activeTab === "JPY"}
                        onClick={handleTabClick}
                    />
                </Tabs>
                <TabPanel tabName={activeTab} />
            </div>
        </Section >
    );
}