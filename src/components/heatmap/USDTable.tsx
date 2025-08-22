import Table from "../tables/Heatmap/Table";
import Td from "../tables/Heatmap/Td";
import Th from "../tables/Heatmap/Th";
import Thead from "../tables/Heatmap/Thead";
import Tbody from "../tables/Heatmap/Tbody";
import Tr from "../tables/Heatmap/Tr";

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