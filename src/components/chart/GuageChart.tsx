import Image from "next/image";
import styles from "./GuageChart.module.scss";
import GuageChartIndicator from "./GuageChartIndicator";

type labels = Array<string>;

type GuageChartProps = {
    style: React.CSSProperties;
    indicatorStyle: React.CSSProperties;
    labels?: labels;
};

export default function GuageChart({
    style,
    indicatorStyle,
    labels = ["SELL", "Neutral", "BUY"],
}: GuageChartProps) {
    return (
        <>
            <div className={styles.guageChartContainer}>
                <Image
                    src="/images/charts/guage-chart.svg"
                    alt="Guage Chart"
                    width={100}
                    height={100}
                    style={style}
                    className={styles.guageChartImg}
                />
                <GuageChartIndicator style={indicatorStyle} />
            </div>
        </>
    );
}