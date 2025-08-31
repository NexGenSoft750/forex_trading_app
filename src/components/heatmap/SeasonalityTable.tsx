import Table from "../base-table/Heatmap/Table";
import Td from "../base-table/Heatmap/Td";
import Tbody from "../base-table/Heatmap/Tbody";
import Tr from "../base-table/Heatmap/Tr";

export default function SeasonalityTable() {
    return (
        <>
            <Table>
                <Tbody>
                    <Tr equalWidth>
                        <Td
                            color="#ffffff"
                            bgColor="#12AD2B"
                        >
                            0.63%
                        </Td>
                        <Td
                            color="#ffffff"
                            bgColor="#12AD2B"
                        >
                            Score
                        </Td>
                        <Td
                            color="#ffffff"
                            bgColor="#12AD2B"
                        >
                            3
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </>
    );
}