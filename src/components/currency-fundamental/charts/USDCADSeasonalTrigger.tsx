'use client';

import React, { useState } from "react";
import styles from "./USDCADSeasonalTrigger.module.scss";
import USDCADSeasonalModal from "./USDCADSeasonalModal";

export default function USDCADSeasonalTrigger() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className={styles.triggerBox} onClick={handleOpenModal}>
                <div className={styles.content}>
                    <div className={styles.icon}>📊</div>
                    <div className={styles.text}>
                        <div className={styles.title}>USDCAD</div>
                        <div className={styles.subtitle}>Seasonal Trends</div>
                    </div>
                    <div className={styles.arrow}>→</div>
                </div>
            </div>
            
            <USDCADSeasonalModal 
                isOpen={isModalOpen} 
                onClose={handleCloseModal} 
            />
        </>
    );
}
