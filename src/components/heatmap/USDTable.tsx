import Table from "../base-table/Heatmap/Table";
import Td from "../base-table/Heatmap/Td";
import Th from "../base-table/Heatmap/Th";
import Thead from "../base-table/Heatmap/Thead";
import Tbody from "../base-table/Heatmap/Tbody";
import Tr from "../base-table/Heatmap/Tr";

export default function USDTable() {
    return (
        <>
            <Table>
                <Thead
                    bgColor="#88d695"
                >
                    <Tr>
                        <Th
                            color="#000000"
                            colSpan={2}
                        >
                            USD
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td light>Ecnomic Growth</Td>
                        <Td light>2.3</Td>
                    </Tr>
                    <Tr>
                        <Td light>Labour Market</Td>
                        <Td light>4</Td>
                    </Tr>
                    <Tr>
                        <Td light>Ecnomic Heat</Td>
                        <Td light>2.9</Td>
                    </Tr>
                    <Tr>
                        <Td light>Monetry Supply Rate</Td>
                        <Td light>4.5</Td>
                    </Tr>
                </Tbody>
            </Table>
        </>
    );
}