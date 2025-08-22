import Table from "../tables/Heatmap/Table";
import Td from "../tables/Heatmap/Td";
import Th from "../tables/Heatmap/Th";
import Thead from "../tables/Heatmap/Thead";
import Tbody from "../tables/Heatmap/Tbody";
import Tr from "../tables/Heatmap/Tr";

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