import Table from "../base-table/Heatmap/Table";
import Thead from "../base-table/Heatmap/Thead";
import Tbody from "../base-table/Heatmap/Tbody";
import Th from "../base-table/Heatmap/Th";
import Tr from "../base-table/Heatmap/Tr";
import Td from "../base-table/Heatmap/Td";

export default function NetScoreTable() {
    return (
        <>
            <Table>
                <Thead
                    bgColor="#12AD2B"
                >
                    <Tr>
                        <Th>Net Score</Th>
                        <Th>19.24</Th>
                        <Th>Bullish</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>
                            Fundamental Score
                        </Td>
                        <Td>12.24</Td>
                        <Td>Bullish</Td>
                    </Tr>
                    <Tr>
                        <Td>
                            Seasonality
                        </Td>
                        <Td>3</Td>
                        <Td>Bullish</Td>
                    </Tr>
                    <Tr>
                        <Td>
                            Cot Score
                        </Td>
                        <Td>1</Td>
                        <Td>Bullish</Td>
                    </Tr>
                    <Tr>
                        <Td>
                            C-Score
                        </Td>
                        <Td>1</Td>
                        <Td>Bullish</Td>
                    </Tr>
                    <Tr>
                        <Td>
                            T-Score
                        </Td>
                        <Td>2</Td>
                        <Td>Bullish</Td>
                    </Tr>
                    <Tr>
                        <Td>
                            Risk Meter
                        </Td>
                        <Td>70</Td>
                        <Td>Risk On</Td>
                    </Tr>
                </Tbody>
            </Table>
        </>
    );
}