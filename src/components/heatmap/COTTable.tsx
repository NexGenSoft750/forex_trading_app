import { Table, Tbody, Td, Th, Thead, Tr } from '@/components/base-table';
import styles from './COTTable.module.scss';

export default function COTTable() {
    return (
        <>
            <Table>
                <Thead
                    bgColor="#ffcca0"
                >
                    <Tr>
                        <Th color="#000000">Currency</Th>
                        <Th color="#000000">COT Long%</Th>
                        <Th color="#000000">COT Short%</Th>
                        <Th color="#000000">Change Weekly%</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td
                            color="#000000"
                            bgColor="#ffffff"
                        >
                            USD
                        </Td>
                        <Td
                            color="#ffffff"
                            bgColor="#12AD2B"
                        >
                            70
                        </Td>
                        <Td
                            color="#ffffff"
                            bgColor="#F67280"
                        >
                            30
                        </Td>
                        <Td
                            color="#000000"
                            bgColor="#ffffff"
                        >
                            2.33
                        </Td>
                    </Tr>
                </Tbody>
            </Table>
        </>
    );
}