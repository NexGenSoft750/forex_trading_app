import Table from '@/components/base-table/Heatmap/Table';
import Tr from '@/components/base-table/Heatmap/Tr';
import Tbody from '@/components/base-table/Heatmap/Tbody';
import Td from '@/components/base-table/Heatmap/Td';

export default function COTCurrencyPairsReportTable() {
    const rows = [
        { currency: "USDCAD", change: "-1", sentiment: "Bearish" },
        { currency: "USDCHF", change: "0.5", sentiment: "Bullish" },
        { currency: "USDCAD", change: "-1", sentiment: "Bearish" },
        { currency: "USDCHF", change: "0.5", sentiment: "Bullish" },
        { currency: "USDCAD", change: "-1", sentiment: "Bearish" },
        { currency: "USDCHF", change: "0.5", sentiment: "Bullish" },
        { currency: "USDCAD", change: "-1", sentiment: "Bearish" },
        { currency: "USDCHF", change: "0.5", sentiment: "Bullish" },
        { currency: "USDCAD", change: "-1", sentiment: "Bearish" },
        { currency: "USDCHF", change: "0.5", sentiment: "Bullish" },
        { currency: "USDCAD", change: "-1", sentiment: "Bearish" },
        { currency: "USDCHF", change: "0.5", sentiment: "Bullish" },
        { currency: "USDCAD", change: "-1", sentiment: "Bearish" },
        { currency: "USDCHF", change: "0.5", sentiment: "Bullish" },
        { currency: "USDCAD", change: "-1", sentiment: "Bearish" },
        { currency: "USDCHF", change: "0.5", sentiment: "Bullish" },
        { currency: "USDCHF", change: "0.5", sentiment: "Bullish" },
        { currency: "USDCAD", change: "-1", sentiment: "Bearish" },
        { currency: "USDCHF", change: "0.5", sentiment: "Bullish" },
        { currency: "USDCAD", change: "-1", sentiment: "Bearish" },
        { currency: "USDCHF", change: "0.5", sentiment: "Bullish" },
    ];

    return (
        <Table borderSpacing smallBorderSpacing>
            <Tbody>
                {rows.map((row, i) => (
                    <Tr key={i}>
                        <Td borderColor="#000000">{row.currency}</Td>
                        <Td borderColor="#000000" bgColor={row.sentiment === "Bullish" ? "#8BC34A" : "#FF8484"}>{row.change}</Td>
                        <Td borderColor="#000000" bgColor={row.sentiment === "Bullish" ? "#8BC34A" : "#FF8484"}>{row.sentiment}</Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
}