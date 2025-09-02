"use client"

import Section from '@/components/dashboard/Section';
import styles from './CurrencyFundamentalsPage.module.scss';
import CurrencyTab from '@/components/currency-fundamental/CurrencyTab';
import { useState } from 'react';
import CurrencyTabPanel from '@/components/currency-fundamental/CurrencyTabPanel';
import { TabName } from '@/types/TabName';
const DEFAULT_ACTIVE_TAB = 'USD &';

export default function CurrencyFundamentalsPage() {
    const [activeTab, setActiveTab] = useState<TabName>(DEFAULT_ACTIVE_TAB);

    const handleTabClick = (tabName: TabName) => {
        setActiveTab(tabName);
    };

    return (
        <Section>
            <div className={styles.currencyFundamentalsContainer}>
                <div className={styles.currencyFundamentals__tabsContainer}>
                    <CurrencyTab
                        text="USD &"
                        border="curve"
                        isActive={activeTab === "USD &"}
                        onClick={handleTabClick}
                    />
                    <CurrencyTab
                        text="GBP"
                        border="curve"
                        isActive={activeTab === "GBP"}
                        onClick={handleTabClick}
                    />
                    <CurrencyTab
                        text="EUR"
                        border="curve"
                        isActive={activeTab === "EUR"}
                        onClick={handleTabClick}
                    />
                    <CurrencyTab
                        text="CAD"
                        border="curve"
                        isActive={activeTab === "CAD"}
                        onClick={handleTabClick}
                    />
                    <CurrencyTab
                        text="AUD"
                        border="curve"
                        isActive={activeTab === "AUD"}
                        onClick={handleTabClick}
                    />
                    <CurrencyTab
                        text="NZD"
                        border="curve"
                        isActive={activeTab === "NZD"}
                        onClick={handleTabClick}
                    />
                    <CurrencyTab
                        text="CHF"
                        border="curve"
                        isActive={activeTab === "CHF"}
                        onClick={handleTabClick}
                    />
                    <CurrencyTab
                        text="USD"
                        smallText="( Historical Data Basic Fundamentals )"
                        border="rounded"
                        isActive={activeTab === "USD"}
                        onClick={handleTabClick}
                    />
                    <CurrencyTab
                        text="Seasonality"
                        border="rounded"
                        isActive={activeTab === "Seasonality"}
                        onClick={handleTabClick}
                    />
                    <CurrencyTab
                        text="US Cot Data & Trends"
                        smallText='( Weekly )'
                        border="rounded"
                        isActive={activeTab === "US Cot Data & Trends"}
                        onClick={handleTabClick}
                    />
                    <CurrencyTab
                        text="News"
                        border="rounded"
                        isActive={activeTab === "News"}
                        onClick={handleTabClick}
                    />
                </div>
                <CurrencyTabPanel tabName={activeTab} />
            </div>
        </Section>
    );
}