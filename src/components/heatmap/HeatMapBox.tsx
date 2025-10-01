"use client";

import { useState } from "react";
import styles from "./HeatMapBox.module.scss";
import HeatMapModal from "./HeatMapModal";
import USDCADSeasonalModal from "../seasonal-trends/USDCADSeasonalModal";

type HeatMapBoxProps = {
    bgColor?: string;
    text: string;
    textColor?: string;
    modalType?: 'heatmap' | 'seasonal';
}

function HeatMapBox({ bgColor = "#12ad2b", text, textColor = 'white', modalType = 'heatmap' }: HeatMapBoxProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const modal = modalType === 'heatmap'
        ? <HeatMapModal onClose={handleModalClose} />
        : <USDCADSeasonalModal onClose={handleModalClose} />;

    return (
        <>
            {isModalOpen && modal}
            <div
                className={styles["heatmap-box"]}
                style={{ backgroundColor: bgColor, color: textColor }}
                onClick={handleModalOpen}
            >
                <p>{text}</p>
                <p>-2.7%</p>
            </div>
        </>
    );
}

export default HeatMapBox;
