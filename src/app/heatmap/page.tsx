"use client";

import { useState } from 'react';
import Header from '@/components/dashboard/Header';
import Aside from '@/components/dashboard/Aside';
import styles from '../page.module.scss';
import style from './page.module.scss';
import '@/styles/dashboard-override.scss';
import { FiMenu, FiX } from 'react-icons/fi';
import HeatMapBox from '@/components/heatmap/HeatMapBox';

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
            text='Fundamental Heatmap!'
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
          <main className={style["heatmap__content"]}>
            <HeatMapBox />
            <HeatMapBox />
            <HeatMapBox />
            <HeatMapBox />
            <HeatMapBox />
            <HeatMapBox />
            <HeatMapBox />
            <HeatMapBox />

            <HeatMapBox bgColor="#aef803" textColor="black"/>
            <HeatMapBox bgColor="#aef803" textColor="black"/>
            <HeatMapBox bgColor="#aef803" textColor="black"/>
            <HeatMapBox bgColor="#aef803" textColor="black"/>
            <HeatMapBox bgColor="#aef803" textColor="black"/>
            <HeatMapBox bgColor="#aef803" textColor="black"/>
            <HeatMapBox bgColor="#aef803" textColor="black"/>
            <HeatMapBox bgColor="#aef803" textColor="black"/>

            <HeatMapBox bgColor="#ffff00" textColor="black"/>
            <HeatMapBox bgColor="#ffff00" textColor="black"/>
            <HeatMapBox bgColor="#ffff00" textColor="black"/>
            <HeatMapBox bgColor="#ffff00" textColor="black"/>
            <HeatMapBox bgColor="#ffff00" textColor="black"/>
            <HeatMapBox bgColor="#ffff00" textColor="black"/>
            <HeatMapBox bgColor="#ffff00" textColor="black"/>
            <HeatMapBox bgColor="#ffff00" textColor="black"/>

            <HeatMapBox bgColor="#f67280"/>
            <HeatMapBox bgColor="#f67280"/>
            <HeatMapBox bgColor="#f67280"/>
            <HeatMapBox bgColor="#f67280"/>
            <HeatMapBox bgColor="#f67280"/>
            <HeatMapBox bgColor="#f67280"/>
            <HeatMapBox bgColor="#f67280"/>
            <HeatMapBox bgColor="#f67280"/>

            <HeatMapBox bgColor="#fe0000"/>
            <HeatMapBox bgColor="#fe0000"/>
            <HeatMapBox bgColor="#fe0000"/>
            <HeatMapBox bgColor="#fe0000"/>
            <HeatMapBox bgColor="#fe0000"/>
            <HeatMapBox bgColor="#fe0000"/>
            <HeatMapBox bgColor="#fe0000"/>

            <HeatMapBox bgColor="#fe0000"/>
            <HeatMapBox bgColor="#fe0000"/>
            <HeatMapBox bgColor="#fe0000"/>
            <HeatMapBox bgColor="#fe0000"/>
            <HeatMapBox bgColor="#fe0000"/>
            <HeatMapBox bgColor="#fe0000"/>
            <HeatMapBox bgColor="#fe0000"/><HeatMapBox bgColor="#fe0000"/>
            <HeatMapBox bgColor="#fe0000"/>
            <HeatMapBox bgColor="#fe0000"/>
            <HeatMapBox bgColor="#fe0000"/>
            <HeatMapBox bgColor="#fe0000"/>
            <HeatMapBox bgColor="#fe0000"/>
            <HeatMapBox bgColor="#fe0000"/><HeatMapBox bgColor="#fe0000"/>
            <HeatMapBox bgColor="#fe0000"/>
            <HeatMapBox bgColor="#fe0000"/>
            <HeatMapBox bgColor="#fe0000"/>
            <HeatMapBox bgColor="#fe0000"/>
            <HeatMapBox bgColor="#fe0000"/>
            <HeatMapBox bgColor="#fe0000"/><HeatMapBox bgColor="#fe0000"/>
            <HeatMapBox bgColor="#fe0000"/>
            <HeatMapBox bgColor="#fe0000"/>
            <HeatMapBox bgColor="#fe0000"/>
            <HeatMapBox bgColor="#fe0000"/>
            <HeatMapBox bgColor="#fe0000"/>
            <HeatMapBox bgColor="#fe0000"/><HeatMapBox bgColor="#fe0000"/>
            <HeatMapBox bgColor="#fe0000"/>
            <HeatMapBox bgColor="#fe0000"/>
            <HeatMapBox bgColor="#fe0000"/>
            <HeatMapBox bgColor="#fe0000"/>
            <HeatMapBox bgColor="#fe0000"/>
            <HeatMapBox bgColor="#fe0000"/>
          </main>
        </div>
      </div>
    </>
  );
}