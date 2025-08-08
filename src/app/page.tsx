"use client";

import { useState } from 'react';
import Header from '@/components/dashboard/Header';
import Aside from '@/components/dashboard/Aside';
import styles from './page.module.scss';
import '@/styles/dashboard-override.scss';
import { FiMenu, FiX } from 'react-icons/fi';
import DashboardOverview from '@/components/dashboard/DashboardOverview';
import DashbboardStats from '@/components/dashboard/DashbboardStats';

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
            text='Dashboard!'
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
          <main className={styles["dashboard__content"]}>
            <DashboardOverview />
            <DashbboardStats />
          </main>
        </div>
      </div>
    </>
  );
}