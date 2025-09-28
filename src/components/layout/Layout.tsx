"use client";

import Header from '@/components/dashboard/Header';
import Aside from '@/components/dashboard/Aside';
import styles from './Layout.module.scss';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';
import { usePageTitle } from '@/hooks/usePageTitle';

export default function Layout({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const title = usePageTitle();

    // When the current page is "Education", isEducationPage is used to remove padding from the <main> layout.
    const isEducationPage = title === 'Education';

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <>
            <div className={styles["dashboard"]}>
                {/* Mobile Overlay */}
                <div
                    className={`${styles["sidebar-overlay"]} ${isSidebarOpen ? styles["sidebar-overlay--open"] : ""}`}
                    onClick={closeSidebar}
                />

                {/* Sidebar */}
                <div className={`${styles["sidebar"]} ${styles["sidebar-bg-dark"]} ${isSidebarOpen ? styles["sidebar--open"] : ""}`}>
                    <Aside onClose={closeSidebar} />
                </div>

                <div className={styles["dashboard__panel"]}>
                    <Header
                        className={styles["dashboard-header--bg-light"]}
                        text={title}
                    >
                        {/* Mobile Hamburger Menu */}
                        <button
                            className={styles["mobile-menu-toggle"]}
                            onClick={toggleSidebar}
                            aria-label="Toggle mobile menu"
                        >
                            {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </Header>
                    <main className={isEducationPage ? '' : styles["dashboard__content"]}>
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
}