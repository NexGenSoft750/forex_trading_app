import Table from "@/components/base-table/Heatmap/Table";
import Tbody from "@/components/base-table/Heatmap/Tbody";
import Td from "@/components/base-table/Heatmap/Td";
import Th from "@/components/base-table/Heatmap/Th";
import Thead from "@/components/base-table/Heatmap/Thead";
import Tr from "@/components/base-table/Heatmap/Tr";

export default function SeasonalityPanelTable() {
    return (
        <>
            <Table
                style={{ marginTop: "3.5rem" }}
                cellPadding='large'
                rounded='top'
                bordered
            >
                <Thead>
                    <Tr>
                        <Th></Th>
                        <Th>Jan</Th>
                        <Th textDecoration='underline'>Feb</Th>
                        <Th>Mar</Th>
                        <Th>Apr</Th>
                        <Th>May</Th>
                        <Th>Jun</Th>
                        <Th>Jul</Th>
                        <Th>Aug</Th>
                        <Th>Sep</Th>
                        <Th>Oct</Th>
                        <Th>Nov</Th>
                        <Th>Dec</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Average</Td>
                        <Td bgColor="#D8F7D8">0.126</Td>
                        <Td bgColor="#B7EFB7" textDecoration='underline'>0.439</Td>
                        <Td bgColor="#CBF4CB">0.230</Td>
                        <Td bgColor="#FEDCDC">-0.376</Td>
                        <Td bgColor="#8CE68C">1.132</Td>
                        <Td bgColor="#FEE7E7">-0.608</Td>
                        <Td bgColor="#FED2D2">-0.608</Td>
                        <Td bgColor="#C5F2C5">0.282</Td>
                        <Td bgColor="#A9ECA9">0.625</Td>
                        <Td bgColor="#BEF1BE">0.361</Td>
                        <Td bgColor="#B4EFB4">0.484</Td>
                        <Td bgColor="#FED5D5">-0.529</Td>
                    </Tr>
                </Tbody>
            </Table>
        </>
    );
}