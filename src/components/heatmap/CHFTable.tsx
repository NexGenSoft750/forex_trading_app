import Table from "../base-table/Heatmap/Table";
import Td from "../base-table/Heatmap/Td";
import Th from "../base-table/Heatmap/Th";
import Thead from "../base-table/Heatmap/Thead";
import Tbody from "../base-table/Heatmap/Tbody";
import Tr from "../base-table/Heatmap/Tr";

export default function CHFTable() {
    return (
        <>
            <Table>
                <Thead
                    bgColor="#fbb8bf"
                >
                    <Tr>
                        <Th
                            color="#000000"
                            colSpan={2}
                        >
                            CHF
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td light>Ecnomic Growth</Td>
                        <Td light>0.4</Td>
                    </Tr>
                    <Tr>
                        <Td light>Labour Market</Td>
                        <Td light>3</Td>
                    </Tr>
                    <Tr>
                        <Td light>Ecnomic Heat</Td>
                        <Td light>0.6</Td>
                    </Tr>
                    <Tr>
                        <Td light>Monetry Supply Rate</Td>
                        <Td light>0.5</Td>
                    </Tr>
                </Tbody>
            </Table>
        </>
    );
}