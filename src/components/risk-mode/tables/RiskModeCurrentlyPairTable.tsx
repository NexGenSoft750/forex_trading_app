import Table from '@/components/base-table/Heatmap/Table';
import Tr from '@/components/base-table/Heatmap/Tr';
import Tbody from '@/components/base-table/Heatmap/Tbody';
import Td from '@/components/base-table/Heatmap/Td';

interface RowData {
    currentlyPair: string;
    riskOnScore: string;
    riskOffScore: string;
}

export default function RiskModeCurrentlyPairTable() {
    // repeat rows as in the image
    const rows: RowData[] = Array(22).fill({
        currentlyPair: "USDCAD",
        riskOnScore: "-1.5",
        riskOffScore: "1",
    });

    return (
        <Table borderSpacing smallBorderSpacing>
            <Tbody>
                <Tr>
                    <Td borderColor="#000000">Currently Pair</Td>
                    <Td borderColor="#000000" bgColor="#FF0000">Risk-On Score</Td>
                    <Td borderColor="#000000" bgColor="#6CB56A">Risk-Off Score</Td>
                </Tr>

                {rows.map((row, i) => (
                    <Tr key={i}>
                        <Td borderColor="#000000">{row.currentlyPair}</Td>
                        <Td borderColor="#000000">{row.riskOnScore}</Td>
                        <Td
                            borderColor="#000000"
                            bgColor={i % 2 !== 0 ? "#6CB56A" : "#ffffff"}
                        >
                            {row.riskOffScore}
                        </Td>
                    </Tr>
                ))}

            </Tbody>
        </Table>
    );
}
