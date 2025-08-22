"use client";

import { useState } from "react";
import styles from "./HeatMapBox.module.scss";
import HeatMapModal from "./HeatMapModal";

type HeatMapBoxProps = {
    bgColor?: string;
    textColor?: string;
}

function HeatMapBox({ bgColor = "#12ad2b", textColor = 'white' }: HeatMapBoxProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            {isModalOpen && <HeatMapModal onClose={handleModalClose} />}
            <div
                className={styles["heatmap-box"]}
                style={{ backgroundColor: bgColor, color: textColor }}
                onClick={handleModalOpen}
            >
                <p>USDCAD</p>
                <p>-2.7%</p>
            </div>
        </>
    );
}

export default HeatMapBox;
