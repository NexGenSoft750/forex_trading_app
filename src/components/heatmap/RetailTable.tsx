import Table from "../base-table/Heatmap/Table";
import Td from "../base-table/Heatmap/Td";
import Th from "../base-table/Heatmap/Th";
import Thead from "../base-table/Heatmap/Thead";
import Tbody from "../base-table/Heatmap/Tbody";
import Tr from "../base-table/Heatmap/Tr";

export default function RetailTable() {
    return (
        <>
            <Table>
                <Thead
                    bgColor="#EAEAEA"
                >
                    <Tr>
                        <Th color="#000000">Retail Long%</Th>
                        <Th color="#000000">Retail Short%</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td
                            color="#ffffff"
                            bgColor="#12AD2B"
                        >
                            14
                        </Td>
                        <Td
                            color="#ffffff"
                            bgColor="#F67280"
                        >
                            86
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </>
    );
}