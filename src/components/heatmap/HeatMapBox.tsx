import styles from "./HeatMapBox.module.scss";

interface HeatMapBoxProps {
    bgColor?: string;
    textColor?: string;
}

function HeatMapBox({ bgColor = "#12ad2b", textColor = 'white' }: HeatMapBoxProps) {
    return (
        <div
            className={styles["heatmap-box"]}
            style={{ backgroundColor: bgColor, color: textColor }}
        >
            <p>USDCAD</p>
            <p>-2.7%</p>
        </div>
    );
}

export default HeatMapBox;
