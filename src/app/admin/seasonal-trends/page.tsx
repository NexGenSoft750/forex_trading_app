import HeatMapBox from '@/components/heatmap/HeatMapBox';
import styles from './SeasonalTrendsPage.module.scss';
import Section from '@/components/layout/Section';
import SeasonalTrendsMarchChart from '@/components/cot-data-analysis/charts/SeasonalTrendsMarchChart';
import TextHere from '@/components/ui/TextHere';

const heatmapData = [
    // green boxes
    { text: "USDCAD", bgColor: "#12ad2b" },
    { text: "GBPCH", bgColor: "#12ad2b" },
    { text: "EURCAD", bgColor: "#12ad2b" },
    { text: "EURGBD", bgColor: "#12ad2b" },
    { text: "AUDJPY", bgColor: "#12ad2b" },
    { text: "NZDUSD", bgColor: "#12ad2b" },
    { text: "SILVER", bgColor: "#12ad2b" },

    // light green
    { text: "USDCHF", bgColor: "#aef803", textColor: "black" },
    { text: "GBPNZD", bgColor: "#aef803", textColor: "black" },
    { text: "EURJPY", bgColor: "#aef803", textColor: "black" },
    { text: "AUDCAD", bgColor: "#aef803", textColor: "black" },
    { text: "NZDCAD", bgColor: "#aef803", textColor: "black" },
    { text: "NZDJPY", bgColor: "#aef803", textColor: "black" },
    { text: "WHEAT", bgColor: "#aef803", textColor: "black" },

    // yellow
    { text: "USDJPY", bgColor: "#ffff00", textColor: "black" },
    { text: "GBPJPY", bgColor: "#ffff00", textColor: "black" },
    { text: "EURAUD", bgColor: "#ffff00", textColor: "black" },
    { text: "AUDCHF", bgColor: "#ffff00", textColor: "black" },
    { text: "CADCHF", bgColor: "#ffff00", textColor: "black" },
    { text: "NZDCHF", bgColor: "#ffff00", textColor: "black" },
    { text: "COTTON", bgColor: "#ffff00", textColor: "black" },

    // light red
    { text: "GBPUSD", bgColor: "#f67280" },
    { text: "GBPCAD", bgColor: "#f67280" },
    { text: "EURNZD", bgColor: "#f67280" },
    { text: "AUDNZD", bgColor: "#f67280" },
    { text: "CADJPY", bgColor: "#f67280" },
    { text: "GOLD", bgColor: "#f67280" },
    { text: "SUGAR", bgColor: "#f67280" },

    // red
    { text: "GBPAUD", bgColor: "#fe0000" },
    { text: "EURUSD", bgColor: "#fe0000" },
    { text: "EURCHF", bgColor: "#fe0000" },
    { text: "AUDUSD", bgColor: "#fe0000" },
    { text: "CHFJPY", bgColor: "#fe0000" },
    { text: "CRUDE OIL", bgColor: "#fe0000" },
];

export default function SeasonalTrendsPage() {
    return (
        <>
            <Section
                className={styles.seasonalTrendBoxesContainer}
                ariaLabel='Seasonal Trend Boxes Container'
            >
                {heatmapData.map((item, idx) => (
                    <HeatMapBox
                        key={idx}
                        text={item.text}
                        bgColor={item.bgColor}
                        textColor={item.textColor}
                        modalType='seasonal'
                    />
                ))}
            </Section>
            <Section ariaLabel='Seasonal Trends Chart Section'>
                <SeasonalTrendsMarchChart chartHeading="Seasonal Trends March" />
            </Section>
            <TextHere />
        </>
    );
}