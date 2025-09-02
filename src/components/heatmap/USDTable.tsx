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
                        <Td>Ecnomic Growth</Td>
                        <Td>2.3</Td>
                    </Tr>
                    <Tr>
                        <Td>Labour Market</Td>
                        <Td>4</Td>
                    </Tr>
                    <Tr>
                        <Td>Ecnomic Heat</Td>
                        <Td>2.9</Td>
                    </Tr>
                    <Tr>
                        <Td>Monetry Supply Rate</Td>
                        <Td>4.5</Td>
                    </Tr>
                </Tbody>
            </Table>
        </>
    );
}