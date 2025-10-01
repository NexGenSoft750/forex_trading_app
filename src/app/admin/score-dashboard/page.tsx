"use client";

import { useState } from 'react';
import Tab from '@/components/ui/Tab';
import Tabs from '@/components/ui/Tabs';

const DEFAULT_ACTIVE_TAB = 'USD &';
export default function ScoreBoardPage() {
    const [activeTab, setActiveTab] = useState<string>(DEFAULT_ACTIVE_TAB);

    const handleTabClick = (tabName: string) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <Tabs>
                <Tab
                    text="Admin Table 1"
                    border="rounded"
                    isActive={activeTab === "Admin Table 1"}
                    onClick={handleTabClick}
                />
                <Tab
                    text="Admin Table 2"
                    border="rounded"
                    isActive={activeTab === "Admin Table 2"}
                    onClick={handleTabClick}
                />
                <Tab
                    text="Admin Table 3"
                    border="rounded"
                    isActive={activeTab === "Admin Table 3"}
                    onClick={handleTabClick}
                />
            </Tabs>
        </>
    );
}