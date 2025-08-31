import Table from "@/components/base-table/Heatmap/Table";
import Tbody from "@/components/base-table/Heatmap/Tbody";
import Td from "@/components/base-table/Heatmap/Td";
import Th from "@/components/base-table/Heatmap/Th";
import Thead from "@/components/base-table/Heatmap/Thead";
import Tr from "@/components/base-table/Heatmap/Tr";

export default function USCOTDataTable() {
    return (
        <>
            <Table>
                <Thead>
                    <Tr>
                        <Th bgColor="#A4C1F4"></Th>
                        <Th colSpan={4} bgColor="#EA9999">COMMERCIALS</Th>
                        <Th colSpan={4} bgColor="#6CB56A">LARGE SPECULATORS</Th>
                        <Th colSpan={4} bgColor="#FFFF00">SMALL TR</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td
                            style={{ minWidth: "17rem" }}
                            rowSpan={2}
                        >
                            USD
                        </Td>
                        <Td bold>Long</Td>
                        <Td bold>Change</Td>
                        <Td bold>Short</Td>
                        <Td bold>Change</Td>
                        <Td bold>Long</Td>
                        <Td bold>Change</Td>
                        <Td bold>Short</Td>
                        <Td bold>Change</Td>
                        <Td bold>Long</Td>
                        <Td bold>Change</Td>
                        <Td bold>Short</Td>
                        <Td bold>Change</Td>
                    </Tr>
                    <Tr>
                        <Td fontSize='small'>8459</Td>
                        <Td fontSize='small'>-1171</Td>
                        <Td fontSize='small'>24882</Td>
                        <Td fontSize='small'>-662</Td>
                        <Td fontSize='small'>26261</Td>
                        <Td fontSize='small'>1058</Td>
                        <Td fontSize='small'>10965</Td>
                        <Td fontSize='small'>301</Td>
                        <Td fontSize='small'>3546</Td>
                        <Td fontSize='small'>-339</Td>
                        <Td fontSize='small'>109</Td>
                        <Td fontSize='small'>-78</Td>
                    </Tr>
                </Tbody>
            </Table>
        </>
    );
}