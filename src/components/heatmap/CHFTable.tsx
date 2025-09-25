import { Table, Td, Th, Thead, Tbody, Tr } from "@/components/base-table";

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
                        <Td>Ecnomic Growth</Td>
                        <Td>0.4</Td>
                    </Tr>
                    <Tr>
                        <Td>Labour Market</Td>
                        <Td>3</Td>
                    </Tr>
                    <Tr>
                        <Td>Ecnomic Heat</Td>
                        <Td>0.6</Td>
                    </Tr>
                    <Tr>
                        <Td>Monetry Supply Rate</Td>
                        <Td>0.5</Td>
                    </Tr>
                </Tbody>
            </Table>
        </>
    );
}