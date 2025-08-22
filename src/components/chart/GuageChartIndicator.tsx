import styles from "./GuageChartIndicator.module.scss";
import Image from "next/image";

export default function GuageChartIndicator({ style }: { style: React.CSSProperties }) {
    return (
        <>
            <Image
                src="/images/charts/guage-chart-indicator.svg"
                alt="Guage Chart Indicator"
                width={100}
                height={100}
                className={styles.guageChartIndicator}
                style={style}
            />
        </>
    );
}