import { Table, Td, Th, Thead, Tbody, Tr } from "@/components/base-table";

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