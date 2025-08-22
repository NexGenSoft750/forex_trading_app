import Table from "../tables/Heatmap/Table";
import Td from "../tables/Heatmap/Td";
import Tbody from "../tables/Heatmap/Tbody";
import Tr from "../tables/Heatmap/Tr";

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