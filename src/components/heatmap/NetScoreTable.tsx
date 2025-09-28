import { Table, Thead, Tbody, Th, Tr, Td } from "@/components/base-table";

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