"use client"

import styles from './EducationPage.module.scss';
import EducationNavItem from '@/components/education/EducationNavItem';
import { useState } from 'react';

const items = [
    "Forex Introduction",
    "Forex Market Structure",
    "Forex Market Participants",
    "Trading Forex",
    "Forex Basic Terminology",
    "Forex Analysis",
    "Forex Technical Indicators",
    "Forex Chart Patterns",
    "Forex Candlestick Patterns",
];

const EducationPage = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <>
            <div className={styles.pageContainer}>
                <aside className={styles.aside}>
                    <span className={styles.aside__educationCenterLink}>
                        <svg
                            className={styles.aside__leftArrow}
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M15 6L9 12L15 18"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span>Education Center</span>
                    </span>
                    <nav className={styles.aside__nav}>
                        <ul className={styles.aside__list}>
                            {items.map((label, index) => (
                                <EducationNavItem
                                    key={index}
                                    label={label}
                                    isActive={activeIndex === index}
                                    onClick={() => setActiveIndex(index)}
                                />
                            ))}
                        </ul>
                    </nav>
                </aside>
                <section className={styles.contentSection}></section>
            </div>
        </>
    );
};

export default EducationPage;